import { getUser } from '../../../lib/supabase-server'

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
      {children}
    </div>
  )
}