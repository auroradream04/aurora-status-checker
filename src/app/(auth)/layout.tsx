export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-text-primary mb-2">Aurora Status</h1>
          <p className="text-text-secondary">Professional Website Monitoring</p>
        </div>
        {children}
      </div>
    </div>
  )
}