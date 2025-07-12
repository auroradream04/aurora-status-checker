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
  
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'User-Agent': 'Aurora Status Checker/1.0',
      },
      signal: AbortSignal.timeout(30000), // 30 second timeout
    })

    const responseTime = Date.now() - startTime
    const statusCode = response.status

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

    return {
      status,
      responseTime,
      statusCode,
      errorMessage: null,
    }
  } catch (error) {
    const responseTime = Date.now() - startTime
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    
    // Determine if this is a SSL/certificate issue or actual server down
    let status: 'DOWN' | 'WARNING' = 'DOWN'
    
    if (error instanceof Error) {
      const message = error.message.toLowerCase()
      
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
      statusCode: null,
      errorMessage,
    }
  }
}