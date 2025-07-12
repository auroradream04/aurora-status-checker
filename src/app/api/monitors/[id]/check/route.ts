import { NextRequest, NextResponse } from 'next/server'
import { getUser } from '../../../../../../lib/supabase-server'
import { prisma } from '../../../../../../lib/prisma'

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const user = await getUser()
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Verify monitor exists and belongs to user
    const monitor = await prisma.monitor.findFirst({
      where: { 
        id,
        user: { email: user.email! }
      }
    })

    if (!monitor) {
      return NextResponse.json({ error: 'Monitor not found' }, { status: 404 })
    }

    // Perform the status check
    const checkResult = await performStatusCheck(monitor.url)

    // Save the check result
    const check = await prisma.check.create({
      data: {
        monitorId: monitor.id,
        status: checkResult.status,
        responseTime: checkResult.responseTime,
        statusCode: checkResult.statusCode,
        error: checkResult.errorMessage,
      }
    })

    // Update monitor's last check time
    await prisma.monitor.update({
      where: { id: monitor.id },
      data: { updatedAt: new Date() }
    })

    return NextResponse.json({
      check,
      monitor: {
        ...monitor,
        updatedAt: new Date()
      }
    })
  } catch (error) {
    console.error('Error performing status check:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

async function performStatusCheck(url: string) {
  const startTime = Date.now()
  
  // Normalize URL - ensure it has a protocol
  let normalizedUrl = url.trim()
  if (!normalizedUrl.match(/^https?:\/\//)) {
    normalizedUrl = `https://${normalizedUrl}`
  }
  
  // Try HTTPS first, then HTTP as fallback
  const urlsToTry = [
    normalizedUrl,
    // If HTTPS fails and original didn't have protocol, try HTTP
    ...((!url.trim().match(/^https?:\/\//)) ? [normalizedUrl.replace('https://', 'http://')] : [])
  ]
  
  let lastError: Error | null = null
  let lastStatusCode: number | null = null
  
  for (const tryUrl of urlsToTry) {
    try {
      // First try HEAD request for better status code detection
      let response: Response
      try {
        response = await fetch(tryUrl, {
          method: 'HEAD',
          headers: {
            'User-Agent': 'Aurora Status Checker/1.0',
          },
          signal: AbortSignal.timeout(15000), // 15 second timeout for HEAD
        })
      } catch {
        // If HEAD fails, try GET
        response = await fetch(tryUrl, {
          method: 'GET',
          headers: {
            'User-Agent': 'Aurora Status Checker/1.0',
          },
          signal: AbortSignal.timeout(30000), // 30 second timeout for GET
        })
      }
      
      const responseTime = Date.now() - startTime
      const statusCode = response.status
      lastStatusCode = statusCode // Store for potential fallback

      let status: 'UP' | 'DOWN' | 'WARNING'
      
      if (statusCode >= 200 && statusCode < 300) {
        status = 'UP'
      } else if (statusCode >= 300 && statusCode < 400) {
        status = 'WARNING'  // Redirects
      } else if (statusCode >= 400 && statusCode < 600) {
        status = 'WARNING'  // Client/Server errors - server is responding but with issues
      } else {
        status = 'DOWN'     // Only for unexpected status codes
      }

      // Check for slow response (warning if > 3 seconds)
      if (responseTime > 3000 && status === 'UP') {
        status = 'WARNING'
      }
      
      // If we used HTTP fallback, mark as WARNING
      if (tryUrl.startsWith('http://') && !url.trim().startsWith('http://')) {
        status = 'WARNING'
      }

      return {
        status,
        responseTime,
        statusCode,
        errorMessage: null,
      }
    } catch (error) {
      lastError = error as Error
      
      // Try to extract status code from fetch error response
      if (error && typeof error === 'object' && 'status' in error) {
        lastStatusCode = error.status as number
      }
      
      // Continue to next URL if available
      if (tryUrl === urlsToTry[urlsToTry.length - 1]) {
        // This was the last attempt, handle the error
        break
      }
    }
  }
  
  // If we get here, all attempts failed
  const responseTime = Date.now() - startTime
  const errorMessage = lastError instanceof Error ? lastError.message : 'Unknown error'
  
  // Try to extract status code from error message if not already found
  let statusCode: number | null = lastStatusCode
  if (!statusCode && lastError instanceof Error) {
    const statusMatch = lastError.message.match(/status (?:code )?([0-9]{3})/i)
    if (statusMatch) {
      statusCode = parseInt(statusMatch[1])
    }
    
    // Also try to extract from common error patterns
    const errorPatterns = [
      /HTTP\/\d\.\d\s+([0-9]{3})/i,
      /response status ([0-9]{3})/i,
      /error ([0-9]{3})/i,
      /code:\s*([0-9]{3})/i
    ]
    
    for (const pattern of errorPatterns) {
      const match = lastError.message.match(pattern)
      if (match) {
        statusCode = parseInt(match[1])
        break
      }
    }
  }
  
  // Determine if this is a SSL/certificate issue or actual server down
  let status: 'DOWN' | 'WARNING' = 'DOWN'
  
  if (lastError instanceof Error) {
    const message = lastError.message.toLowerCase()
    
    // SSL/Certificate related errors should be WARNING
    if (
      message.includes('certificate') ||
      message.includes('ssl') ||
      message.includes('tls') ||
      message.includes('self-signed') ||
      message.includes('expired') ||
      message.includes('untrusted') ||
      message.includes('bad certificate') ||
      message.includes('cert') ||
      message.includes('handshake') ||
      message.includes('protocol') ||
      message.includes('unable to verify') ||
      message.includes('hostname mismatch') ||
      // Mixed content and protocol issues
      message.includes('mixed content') ||
      message.includes('insecure request') ||
      message.includes('protocol error') ||
      message.includes('fetch failed') ||
      // HTTP errors that indicate server is responding but with issues
      message.includes('404') ||
      message.includes('403') ||
      message.includes('401') ||
      message.includes('429') ||
      message.includes('500') ||
      message.includes('502') ||
      message.includes('503') ||
      message.includes('504') ||
      // DNS resolution but connection issues
      message.includes('connection refused') ||
      message.includes('connection reset') ||
      message.includes('connection timeout') ||
      message.includes('network unreachable')
    ) {
      status = 'WARNING'
    }
    
    // Only true connection failures should be DOWN
    // These indicate the server/domain is completely unreachable
    if (
      message.includes('enotfound') ||
      message.includes('getaddrinfo') ||
      message.includes('name not resolved') ||
      message.includes('no such host') ||
      message.includes('network is unreachable') ||
      message.includes('host unreachable')
    ) {
      status = 'DOWN'
    }
  }
  
  return {
    status,
    responseTime,
    statusCode,
    errorMessage,
  }

}