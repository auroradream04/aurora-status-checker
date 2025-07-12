import Link from 'next/link'
import { getUser } from '../../../lib/supabase-server'
import { Button } from '../../../components/ui/button'

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const user = await getUser()

  if (!user) {
    return null // Will be redirected by middleware
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-surface">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/dashboard" className="text-xl font-bold text-primary">
              Aurora Status
            </Link>
            <div className="flex gap-6">
              <Link href="/dashboard" className="text-text-primary hover:text-secondary">
                Dashboard
              </Link>
              <Link href="/dashboard/monitors" className="text-text-primary hover:text-secondary">
                Monitors
              </Link>
              <Link href="/dashboard/incidents" className="text-text-primary hover:text-secondary">
                Incidents
              </Link>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="text-sm text-text-secondary">{user.email}</span>
            <form action="/auth/signout" method="post">
              <Button variant="ghost" type="submit">
                Sign Out
              </Button>
            </form>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  )
}