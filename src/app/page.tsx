import { Button } from '../../components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-primary">Aurora Status</h1>
          <nav className="flex gap-4">
            <Button variant="ghost">Login</Button>
            <Button>Get Started</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl font-bold mb-6 text-primary">
          Monitor Your Websites
          <span className="block text-secondary">With Confidence</span>
        </h1>
        <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
          Professional website monitoring that keeps you informed about your site&apos;s performance and uptime. 
          Get instant alerts when issues occur.
        </p>
        <div className="flex gap-4 justify-center">
          <Button size="lg">Start Monitoring</Button>
          <Button variant="outline" size="lg">Learn More</Button>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">
          Everything You Need for Website Monitoring
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <div className="w-12 h-12 bg-success rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">●</span>
              </div>
              <CardTitle className="text-xl">Real-time Monitoring</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-text-secondary">
                Check your websites every 30 minutes with instant status updates and detailed error reporting.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="w-12 h-12 bg-warning rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">⚡</span>
              </div>
              <CardTitle className="text-xl">Instant Alerts</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-text-secondary">
                Get notified immediately when your websites go down or experience performance issues.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">📊</span>
              </div>
              <CardTitle className="text-xl">Detailed Analytics</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-text-secondary">
                Track uptime, response times, and historical performance data with comprehensive reporting.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Status Demo */}
      <section className="bg-surface py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">
            Simple Status Overview
          </h2>
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Your Monitors</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-success rounded-full"></div>
                    <span className="font-medium">example.com</span>
                  </div>
                  <span className="text-sm text-text-secondary">Online</span>
                </div>
                <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-warning rounded-full"></div>
                    <span className="font-medium">api.example.com</span>
                  </div>
                  <span className="text-sm text-text-secondary">Slow Response</span>
                </div>
                <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-success rounded-full"></div>
                    <span className="font-medium">blog.example.com</span>
                  </div>
                  <span className="text-sm text-text-secondary">Online</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4 text-center text-text-secondary">
          <p>&copy; 2024 Aurora Status Checker. Professional website monitoring made simple.</p>
        </div>
      </footer>
    </main>
  )
}