import { NextRequest, NextResponse } from 'next/server'
import { getUser } from '../../../../lib/supabase-server'
import { prisma } from '../../../../lib/prisma'
import { z } from 'zod'

const createMonitorSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  url: z.string().url('Valid URL is required'),
  interval: z.number().min(1).max(60).default(30),
})

export async function GET() {
  try {
    const user = await getUser()
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Find user in Prisma or create if not exists
    let dbUser = await prisma.user.findUnique({
      where: { email: user.email! }
    })

    if (!dbUser) {
      dbUser = await prisma.user.create({
        data: {
          id: user.id,
          email: user.email!,
        }
      })
    }

    const monitors = await prisma.monitor.findMany({
      where: { userId: dbUser.id },
      include: {
        checks: {
          orderBy: { checkedAt: 'desc' },
          take: 1
        }
      }
    })

    return NextResponse.json(monitors)
  } catch (error) {
    console.error('Error fetching monitors:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const user = await getUser()
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const validatedData = createMonitorSchema.parse(body)

    // Find user in Prisma or create if not exists
    let dbUser = await prisma.user.findUnique({
      where: { email: user.email! }
    })

    if (!dbUser) {
      dbUser = await prisma.user.create({
        data: {
          id: user.id,
          email: user.email!,
        }
      })
    }

    const monitor = await prisma.monitor.create({
      data: {
        name: validatedData.name,
        url: validatedData.url,
        interval: validatedData.interval,
        userId: dbUser.id,
      }
    })

    return NextResponse.json(monitor, { status: 201 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.issues }, { status: 400 })
    }
    console.error('Error creating monitor:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}