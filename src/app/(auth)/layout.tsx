export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-surface">
      <div className="w-full max-w-md space-y-8 p-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-primary mb-2">Aurora Status</h1>
          <p className="text-text-secondary">Professional Website Monitoring</p>
        </div>
        {children}
      </div>
    </div>
  )
}