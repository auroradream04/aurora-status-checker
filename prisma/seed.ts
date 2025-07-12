import { PrismaClient, CheckStatus } from './generated/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Starting database seeding...')

  // Create a demo user (replace with your actual Supabase user ID)
  const demoUser = await prisma.user.upsert({
    where: { 
      email: 'demo@aurora.dev' 
    },
    update: {},
    create: {
      id: 'demo-user-id-12345', // Replace with actual Supabase user UUID
      email: 'demo@aurora.dev',
      name: 'Demo User',
    }
  })

  console.log('✅ Created demo user:', demoUser.email)

  // Create categories
  const categories = [
    { name: 'Production', color: '#ef4444' }, // Red
    { name: 'Staging', color: '#f59e0b' },    // Yellow  
    { name: 'APIs', color: '#8b5cf6' },       // Purple
    { name: 'Marketing', color: '#06b6d4' },  // Cyan
    { name: 'Internal', color: '#84cc16' },   // Green
  ]

  const createdCategories = []
  for (const categoryData of categories) {
    const category = await prisma.category.upsert({
      where: {
        userId_name: {
          userId: demoUser.id,
          name: categoryData.name
        }
      },
      update: {},
      create: {
        ...categoryData,
        userId: demoUser.id,
      }
    })
    createdCategories.push(category)
    console.log(`✅ Created category: ${category.name}`)
  }

  // Create monitors with categories
  const monitors = [
    // Production
    {
      name: 'Main Website',
      url: 'https://aurora.dev',
      categoryName: 'Production',
      interval: 300, // 5 minutes
    },
    {
      name: 'User Dashboard',
      url: 'https://app.aurora.dev',
      categoryName: 'Production',
      interval: 300,
    },
    {
      name: 'Payment Gateway',
      url: 'https://payments.aurora.dev/health',
      categoryName: 'Production',
      interval: 180, // 3 minutes
    },

    // APIs
    {
      name: 'REST API v1',
      url: 'https://api.aurora.dev/v1/health',
      categoryName: 'APIs',
      interval: 300,
    },
    {
      name: 'GraphQL API',
      url: 'https://graphql.aurora.dev/health',
      categoryName: 'APIs',
      interval: 300,
    },
    {
      name: 'Webhook Service',
      url: 'https://webhooks.aurora.dev/ping',
      categoryName: 'APIs',
      interval: 600, // 10 minutes
    },

    // Staging
    {
      name: 'Staging App',
      url: 'https://staging.aurora.dev',
      categoryName: 'Staging',
      interval: 900, // 15 minutes
    },
    {
      name: 'Staging API',
      url: 'https://api-staging.aurora.dev/health',
      categoryName: 'Staging',
      interval: 900,
    },

    // Marketing
    {
      name: 'Landing Page',
      url: 'https://www.aurora.dev',
      categoryName: 'Marketing',
      interval: 1800, // 30 minutes
    },
    {
      name: 'Blog',
      url: 'https://blog.aurora.dev',
      categoryName: 'Marketing',
      interval: 3600, // 1 hour
    },
    {
      name: 'Documentation',
      url: 'https://docs.aurora.dev',
      categoryName: 'Marketing',
      interval: 1800,
    },

    // Internal
    {
      name: 'Admin Panel',
      url: 'https://admin.aurora.dev',
      categoryName: 'Internal',
      interval: 1800,
    },
    {
      name: 'Monitoring Dashboard',
      url: 'https://monitoring.aurora.dev',
      categoryName: 'Internal',
      interval: 900,
    },
  ]

  for (const monitorData of monitors) {
    const category = createdCategories.find(c => c.name === monitorData.categoryName)
    
    const monitor = await prisma.monitor.create({
      data: {
        name: monitorData.name,
        url: monitorData.url,
        interval: monitorData.interval,
        userId: demoUser.id,
        categoryId: category?.id,
      }
    })

    // Create some sample check data
    const statuses: CheckStatus[] = ['UP', 'UP', 'UP', 'WARNING', 'UP']
    const baseTime = new Date()
    
    for (let i = 0; i < 5; i++) {
      const status = statuses[i]
      const checkedAt = new Date(baseTime.getTime() - (i * 30 * 60 * 1000)) // Every 30 minutes back
      
      await prisma.check.create({
        data: {
          monitorId: monitor.id,
          status,
          statusCode: status === 'UP' ? 200 : status === 'WARNING' ? 200 : 500,
          responseTime: status === 'UP' ? Math.floor(Math.random() * 500) + 100 : 
                       status === 'WARNING' ? Math.floor(Math.random() * 2000) + 3000 : null,
          error: status === 'DOWN' ? 'Connection timeout' : null,
          checkedAt,
        }
      })
    }

    console.log(`✅ Created monitor: ${monitor.name} (${category?.name || 'No category'})`)
  }

  console.log('🎉 Database seeding completed successfully!')
  console.log(`📊 Created:`)
  console.log(`   - 1 demo user`)
  console.log(`   - ${createdCategories.length} categories`)
  console.log(`   - ${monitors.length} monitors`) 
  console.log(`   - ${monitors.length * 5} status checks`)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error('❌ Seeding failed:', e)
    await prisma.$disconnect()
    process.exit(1)
  })