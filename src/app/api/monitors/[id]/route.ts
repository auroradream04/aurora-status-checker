import { NextRequest, NextResponse } from 'next/server'
import { getUser } from '../../../../../lib/supabase-server'
import { prisma } from '../../../../../lib/prisma'
import { z } from 'zod'

const updateMonitorSchema = z.object({
  name: z.string().min(1, 'Name is required').max(255, 'Name must be less than 255 characters').optional(),
  url: z.string().url('Please enter a valid URL').optional(),
  interval: z.number().min(1, 'Interval must be at least 1 minute').max(60, 'Interval must be less than 60 minutes').optional(),
})

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const user = await getUser()
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const monitor = await prisma.monitor.findFirst({
      where: { 
        id,
        user: { email: user.email! }
      },
      include: {
        checks: {
          orderBy: { checkedAt: 'desc' },
          take: 50
        }
      }
    })

    if (!monitor) {
      return NextResponse.json({ error: 'Monitor not found' }, { status: 404 })
    }

    // Convert interval from seconds to minutes for frontend display
    const monitorWithMinutes = {
      ...monitor,
      interval: Math.round(monitor.interval / 60)
    }

    return NextResponse.json(monitorWithMinutes)
  } catch (error) {
    console.error('Error fetching monitor:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const user = await getUser()
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const result = updateMonitorSchema.safeParse(body)

    if (!result.success) {
      return NextResponse.json(
        { error: 'Validation failed', issues: result.error.issues },
        { status: 400 }
      )
    }

    // Verify monitor exists and belongs to user
    const existingMonitor = await prisma.monitor.findFirst({
      where: { 
        id,
        user: { email: user.email! }
      }
    })

    if (!existingMonitor) {
      return NextResponse.json({ error: 'Monitor not found' }, { status: 404 })
    }

    // Convert interval from minutes to seconds if provided
    const updateData = { ...result.data }
    if (updateData.interval) {
      updateData.interval = updateData.interval * 60
    }

    // Update the monitor
    const monitor = await prisma.monitor.update({
      where: { id },
      data: updateData,
      include: {
        checks: {
          orderBy: { checkedAt: 'desc' },
          take: 50
        }
      }
    })

    // Convert back to minutes for response
    const monitorWithMinutes = {
      ...monitor,
      interval: Math.round(monitor.interval / 60)
    }

    return NextResponse.json(monitorWithMinutes)
  } catch (error) {
    console.error('Error updating monitor:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const user = await getUser()
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const result = await prisma.monitor.deleteMany({
      where: { 
        id,
        user: { email: user.email! }
      }
    })

    if (result.count === 0) {
      return NextResponse.json({ error: 'Monitor not found' }, { status: 404 })
    }

    return NextResponse.json({ message: 'Monitor deleted successfully' })
  } catch (error) {
    console.error('Error deleting monitor:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}