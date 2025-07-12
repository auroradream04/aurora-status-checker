import { Card, CardContent } from '../../../../components/ui/card'
import { Button } from '../../../../components/ui/button'
import { StatusIndicator } from '../../../../components/monitors/status-indicator'
import { Badge } from '../../../../components/ui/badge'

export default function MonitorsPage() {
  // TODO: Replace with real data from Prisma
  const mockMonitors = [
    {
      id: '1',
      name: 'example.com',
      url: 'https://example.com',
      status: 'UP' as const,
      interval: 30,
      lastChecked: new Date(),
      responseTime: 156,
      uptime: 99.9,
      createdAt: new Date('2024-01-01'),
    },
    {
      id: '2', 
      name: 'api.example.com',
      url: 'https://api.example.com',
      status: 'WARNING' as const,
      interval: 30,
      lastChecked: new Date(),
      responseTime: 3200,
      uptime: 97.5,
      createdAt: new Date('2024-01-02'),
    },
    {
      id: '3',
      name: 'blog.example.com', 
      url: 'https://blog.example.com',
      status: 'DOWN' as const,
      interval: 30,
      lastChecked: new Date(),
      responseTime: null,
      uptime: 85.2,
      createdAt: new Date('2024-01-03'),
    },
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-primary">Monitors</h1>
          <p className="text-text-secondary mt-1">Manage your website monitors</p>
        </div>
        <Button>Add Monitor</Button>
      </div>

      {/* Monitors List */}
      <div className="space-y-4">
        {mockMonitors.map((monitor) => (
          <Card key={monitor.id}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <StatusIndicator status={monitor.status} />
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary">
                      {monitor.name}
                    </h3>
                    <p className="text-sm text-text-secondary">{monitor.url}</p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <div className="text-sm text-text-secondary">Response Time</div>
                    <div className="font-medium text-text-primary">
                      {monitor.responseTime ? `${monitor.responseTime}ms` : 'N/A'}
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-sm text-text-secondary">Uptime</div>
                    <div className="font-medium text-text-primary">
                      {monitor.uptime}%
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-sm text-text-secondary">Check Interval</div>
                    <div className="font-medium text-text-primary">
                      {monitor.interval}min
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-sm text-text-secondary">Status</div>
                    <Badge 
                      variant={
                        monitor.status === 'UP' ? 'success' : 
                        monitor.status === 'WARNING' ? 'warning' : 'error'
                      }
                    >
                      {monitor.status}
                    </Badge>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                    <Button variant="ghost" size="sm">
                      View
                    </Button>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-border">
                <div className="flex items-center justify-between text-sm text-text-secondary">
                  <span>
                    Last checked: {monitor.lastChecked.toLocaleString()}
                  </span>
                  <span>
                    Created: {monitor.createdAt.toLocaleDateString()}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {mockMonitors.length === 0 && (
        <Card>
          <CardContent className="text-center py-12">
            <h3 className="text-lg font-medium text-text-primary mb-2">
              No monitors yet
            </h3>
            <p className="text-text-secondary mb-6">
              Start monitoring your websites by adding your first monitor
            </p>
            <Button>Add Your First Monitor</Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}