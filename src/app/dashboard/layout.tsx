import { getUser } from '../../../lib/supabase-server'
import { DashboardHeader } from '../../../components/dashboard/dashboard-header'

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
      <DashboardHeader />
      {children}
    </div>
  )
}