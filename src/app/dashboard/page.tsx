import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card'
import { Button } from '../../../components/ui/button'
import { StatusIndicator } from '../../../components/monitors/status-indicator'

export default function DashboardPage() {
  // TODO: Replace with real data from Prisma
  const mockMonitors = [
    {
      id: '1',
      name: 'example.com',
      url: 'https://example.com',
      status: 'UP' as const,
      lastChecked: new Date(),
      responseTime: 156,
    },
    {
      id: '2', 
      name: 'api.example.com',
      url: 'https://api.example.com',
      status: 'WARNING' as const,
      lastChecked: new Date(),
      responseTime: 3200,
    },
    {
      id: '3',
      name: 'blog.example.com', 
      url: 'https://blog.example.com',
      status: 'DOWN' as const,
      lastChecked: new Date(),
      responseTime: null,
    },
  ]

  const upCount = mockMonitors.filter(m => m.status === 'UP').length
  const totalCount = mockMonitors.length

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-primary">Dashboard</h1>
          <p className="text-text-secondary mt-1">Monitor your websites and services</p>
        </div>
        <Button>Add Monitor</Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-text-secondary">
              Total Monitors
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">{totalCount}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-text-secondary">
              Online
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">{upCount}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-text-secondary">
              Issues
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-warning">
              {mockMonitors.filter(m => m.status === 'WARNING').length}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-text-secondary">
              Offline
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-error">
              {mockMonitors.filter(m => m.status === 'DOWN').length}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Monitors */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Monitor Status</CardTitle>
          <Button variant="outline" size="sm">
            Refresh All
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockMonitors.map((monitor) => (
              <div
                key={monitor.id}
                className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-surface transition-colors"
              >
                <div className="flex items-center gap-4">
                  <StatusIndicator status={monitor.status} />
                  <div>
                    <h3 className="font-medium text-text-primary">{monitor.name}</h3>
                    <p className="text-sm text-text-secondary">{monitor.url}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-6 text-sm">
                  <div className="text-right">
                    <div className="text-text-primary">
                      {monitor.responseTime ? `${monitor.responseTime}ms` : 'N/A'}
                    </div>
                    <div className="text-text-secondary">
                      {monitor.lastChecked.toLocaleTimeString()}
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          {mockMonitors.length === 0 && (
            <div className="text-center py-8">
              <p className="text-text-secondary">No monitors yet</p>
              <Button className="mt-4">Add Your First Monitor</Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}