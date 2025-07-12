import { NextRequest, NextResponse } from 'next/server'
import { getUser } from '../../../../../lib/supabase-server'
import { prisma } from '../../../../../lib/prisma'
import { z } from 'zod'

const updateMonitorSchema = z.object({
  name: z.string().min(1, 'Name is required').optional(),
  url: z.string().url('Valid URL is required').optional(),
  interval: z.number().min(1).max(60).optional(),
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
          take: 10
        }
      }
    })

    if (!monitor) {
      return NextResponse.json({ error: 'Monitor not found' }, { status: 404 })
    }

    return NextResponse.json(monitor)
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
    const validatedData = updateMonitorSchema.parse(body)

    const monitor = await prisma.monitor.updateMany({
      where: { 
        id,
        user: { email: user.email! }
      },
      data: validatedData
    })

    if (monitor.count === 0) {
      return NextResponse.json({ error: 'Monitor not found' }, { status: 404 })
    }

    const updatedMonitor = await prisma.monitor.findUnique({
      where: { id }
    })

    return NextResponse.json(updatedMonitor)
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.issues }, { status: 400 })
    }
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