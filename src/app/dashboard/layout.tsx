import { redirect } from 'next/navigation'
import { getUser } from '../../../lib/supabase-server'
import { DashboardHeader } from '../../../components/dashboard/dashboard-header'

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const user = await getUser()

  if (!user) {
    redirect('/login')
  }

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      {children}
    </div>
  )
}