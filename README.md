# Aurora Status Checker

![Aurora Status Checker](https://img.shields.io/badge/status-active-success.svg)
![Next.js](https://img.shields.io/badge/Next.js-15-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-38bdf8)

**Professional website monitoring and status checking platform built with modern web technologies.**

Monitor your websites and APIs with real-time status checking, downtime alerts, and performance analytics. Aurora Status Checker provides enterprise-grade monitoring in a clean, intuitive interface.

🌐 **Live Demo**: [status.alvinchang.dev](https://status.alvinchang.dev)

## ✨ Features

### 🚀 Core Monitoring
- **Real-time Status Checking** - Monitor websites, APIs, and services
- **Response Time Tracking** - Track performance metrics over time
- **Uptime/Downtime Detection** - Automatic incident detection and recovery
- **Category Organization** - Group monitors by service, environment, or team
- **Filtering & Search** - Find monitors quickly with smart filtering

### 🎨 Modern Interface
- **Apple-inspired Design** - Clean, professional, minimalist UI
- **Real-time Updates** - Live status updates without page refresh
- **Responsive Design** - Perfect experience on desktop and mobile
- **Dark/Light Mode** - Adaptive theming (coming soon)
- **Status Indicators** - Clear visual feedback with color-coded statuses

### 🔧 Technical Excellence
- **Next.js 15 App Router** - Latest React server components
- **TypeScript** - Full type safety throughout the application
- **Tailwind CSS v4** - Modern, config-free styling
- **Prisma ORM** - Type-safe database operations
- **React Query** - Optimistic updates and intelligent caching
- **Supabase Auth** - Secure authentication and user management

### 📊 Performance
- **Sub-3s Page Loads** - Optimized for speed
- **Database Indexing** - Efficient queries for large datasets
- **API Caching** - Smart caching with invalidation
- **Background Jobs** - Automated monitoring without UI blocking

## 🛠 Technology Stack

| Category | Technology | Purpose |
|----------|-----------|---------|
| **Framework** | Next.js 15 | Full-stack React framework with App Router |
| **Language** | TypeScript | Type-safe development |
| **Styling** | Tailwind CSS v4 | Utility-first CSS framework |
| **Database** | PostgreSQL + Prisma | Relational database with type-safe ORM |
| **Authentication** | Supabase Auth | User management and session handling |
| **State Management** | React Query | Server state and caching |
| **Deployment** | Vercel | Edge-optimized hosting |

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- PostgreSQL database
- Supabase account

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/aurora-status-checker.git
cd aurora-status-checker
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Setup
Copy the example environment file and configure your variables:
```bash
cp .env.example .env.local
```

Fill in your environment variables:
```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/aurora_status"

# Supabase
NEXT_PUBLIC_SUPABASE_URL="your-supabase-url"
NEXT_PUBLIC_SUPABASE_ANON_KEY="your-supabase-anon-key"
SUPABASE_SERVICE_ROLE_KEY="your-service-role-key"

# Optional
GOOGLE_SITE_VERIFICATION="your-google-verification-code"
```

### 4. Database Setup
```bash
# Generate Prisma client
npx prisma generate

# Run database migrations
npx prisma migrate deploy

# (Optional) Seed with sample data
npx prisma db seed
```

### 5. Start Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

## 📁 Project Structure

```
aurora-status-checker/
├── app/                    # Next.js App Router
│   ├── (auth)/            # Authentication routes
│   ├── (dashboard)/       # Protected dashboard routes
│   ├── api/               # API endpoints
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── ui/                # Base UI components
│   ├── auth/              # Authentication components
│   └── monitors/          # Monitor-specific components
├── lib/                   # Utility libraries
│   ├── auth.ts            # Authentication helpers
│   ├── prisma.ts          # Database client
│   └── hooks/             # Custom React hooks
├── prisma/                # Database schema and migrations
└── public/                # Static assets
```

## 🔧 Development Commands

```bash
# Development
npm run dev              # Start development server
npm run build           # Build for production
npm run start           # Start production server

# Code Quality
npm run lint            # Run ESLint
npm run typecheck       # Run TypeScript checks
npm run check          # Run both lint and typecheck

# Database
npx prisma generate     # Generate Prisma client
npx prisma migrate dev  # Create and apply migration
npx prisma studio      # Open database browser
```

## 🏗 Architecture

### Database Schema
```prisma
model User {
  id       String    @id @default(cuid())
  email    String    @unique
  monitors Monitor[]
}

model Monitor {
  id          String    @id @default(cuid())
  name        String
  url         String
  userId      String
  categoryId  String?
  checks      Check[]
  category    Category? @relation(fields: [categoryId], references: [id])
  user        User      @relation(fields: [userId], references: [id])
}

model Check {
  id           String      @id @default(cuid())
  monitorId    String
  status       CheckStatus
  statusCode   Int?
  responseTime Int?
  checkedAt    DateTime    @default(now())
  monitor      Monitor     @relation(fields: [monitorId], references: [id])
}
```

### API Design
- **RESTful endpoints** for CRUD operations
- **Server-side authentication** with Supabase
- **User-scoped data** for security
- **Optimistic updates** for better UX

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure environment variables in Vercel dashboard
3. Deploy automatically on every push to main

### Manual Deployment
```bash
# Build the application
npm run build

# Start production server
npm run start
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow TypeScript strict mode
- Use conventional commit messages
- Ensure all tests pass
- Update documentation for new features

## 📋 Roadmap

### 🎯 Current Focus
- [x] Real-time monitoring
- [x] Category filtering
- [x] Performance optimization
- [x] Mobile responsiveness

### 🔮 Upcoming Features
- [ ] Email notifications
- [ ] Slack/Discord integrations
- [ ] Custom monitoring intervals
- [ ] Historical analytics
- [ ] Status page generation
- [ ] Multi-user teams
- [ ] API rate limiting
- [ ] Export capabilities

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Data management by [Prisma](https://prisma.io/)
- Authentication by [Supabase](https://supabase.com/)
- Deployed on [Vercel](https://vercel.com/)

---

**Aurora Status Checker** - Professional monitoring made simple.