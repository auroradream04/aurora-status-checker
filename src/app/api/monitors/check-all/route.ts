import { NextResponse } from 'next/server'
import { getUser } from '../../../../../lib/supabase-server'
import { prisma } from '../../../../../lib/prisma'

export async function POST() {
  try {
    const user = await getUser()
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Get all user's monitors
    const monitors = await prisma.monitor.findMany({
      where: { user: { email: user.email! } }
    })

    if (monitors.length === 0) {
      return NextResponse.json({ message: 'No monitors to check' })
    }

    // Check all monitors in parallel
    const checkPromises = monitors.map(async (monitor) => {
      try {
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

        return {
          monitorId: monitor.id,
          success: true,
          check,
        }
      } catch (error) {
        console.error(`Error checking monitor ${monitor.id}:`, error)
        return {
          monitorId: monitor.id,
          success: false,
          error: error instanceof Error ? error.message : 'Unknown error',
        }
      }
    })

    const results = await Promise.all(checkPromises)
    
    const successCount = results.filter(r => r.success).length
    const errorCount = results.filter(r => !r.success).length

    return NextResponse.json({
      message: `Checked ${monitors.length} monitors`,
      success: successCount,
      errors: errorCount,
      results,
    })
  } catch (error) {
    console.error('Error performing batch status check:', error)
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