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
      status = 'WARNING'
    } else {
      status = 'DOWN'
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
    
    return {
      status: 'DOWN' as const,
      responseTime,
      statusCode: null,
      errorMessage: error instanceof Error ? error.message : 'Unknown error',
    }
  }
}