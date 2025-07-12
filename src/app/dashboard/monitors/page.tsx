'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Card, CardContent } from '../../../../components/ui/card'
import { Button } from '../../../../components/ui/button'
import { StatusIndicator } from '../../../../components/monitors/status-indicator'
import { Badge } from '../../../../components/ui/badge'
import { Modal } from '../../../../components/ui/modal'
import { AddMonitorForm } from '../../../../components/monitors/add-monitor-form'

interface Monitor {
  id: string
  name: string
  url: string
  interval: number
  createdAt: string
  updatedAt: string
  checks: Array<{
    id: string
    status: 'UP' | 'DOWN' | 'WARNING'
    responseTime?: number
    statusCode?: number
    error?: string
    checkedAt: string
  }>
}

export default function MonitorsPage() {
  const router = useRouter()
  const [monitors, setMonitors] = useState<Monitor[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [refreshingMonitors, setRefreshingMonitors] = useState<Set<string>>(new Set())
  const [showAddModal, setShowAddModal] = useState(false)
  const [error, setError] = useState('')

  const fetchMonitors = async () => {
    try {
      const response = await fetch('/api/monitors')
      if (!response.ok) {
        throw new Error('Failed to fetch monitors')
      }
      const data = await response.json()
      setMonitors(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch monitors')
    } finally {
      setIsLoading(false)
    }
  }

  const handleRefreshMonitor = async (monitorId: string) => {
    setRefreshingMonitors(prev => new Set(prev).add(monitorId))
    try {
      const response = await fetch(`/api/monitors/${monitorId}/check`, { 
        method: 'POST' 
      })
      if (!response.ok) {
        throw new Error('Failed to refresh monitor')
      }
      await fetchMonitors() // Refresh the data
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to refresh monitor')
    } finally {
      setRefreshingMonitors(prev => {
        const newSet = new Set(prev)
        newSet.delete(monitorId)
        return newSet
      })
    }
  }

  const handleDeleteMonitor = async (monitorId: string) => {
    if (!confirm('Are you sure you want to delete this monitor?')) {
      return
    }

    try {
      const response = await fetch(`/api/monitors/${monitorId}`, { 
        method: 'DELETE' 
      })
      if (!response.ok) {
        throw new Error('Failed to delete monitor')
      }
      await fetchMonitors() // Refresh the data
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete monitor')
    }
  }

  const handleAddSuccess = () => {
    setShowAddModal(false)
    fetchMonitors() // Refresh the data
  }

  useEffect(() => {
    fetchMonitors()
  }, [])

  const getLatestStatus = (monitor: Monitor) => {
    return monitor.checks?.[0]?.status || 'UNKNOWN'
  }

  const getLatestResponseTime = (monitor: Monitor) => {
    return monitor.checks?.[0]?.responseTime || null
  }

  const calculateUptime = (monitor: Monitor) => {
    if (!monitor.checks || monitor.checks.length === 0) return 0
    
    // Take last 24 checks for uptime calculation
    const recentChecks = monitor.checks.slice(0, 24)
    const upChecks = recentChecks.filter(check => check.status === 'UP').length
    return recentChecks.length > 0 ? Math.round((upChecks / recentChecks.length) * 100 * 10) / 10 : 0
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-primary">Monitors</h1>
          <p className="text-text-secondary mt-1">Manage your website monitors</p>
        </div>
        <Button onClick={() => setShowAddModal(true)}>Add Monitor</Button>
      </div>

      {/* Error Display */}
      {error && (
        <div className="text-sm text-error bg-error/10 border border-error/20 rounded-md p-3">
          {error}
        </div>
      )}

      {/* Loading State */}
      {isLoading && (
        <div className="text-center py-8">
          <p className="text-text-secondary">Loading monitors...</p>
        </div>
      )}

      {/* Monitors List */}
      {!isLoading && (
        <div className="space-y-4">
          {monitors.map((monitor) => {
            const status = getLatestStatus(monitor)
            const responseTime = getLatestResponseTime(monitor)
            const uptime = calculateUptime(monitor)
            const lastCheck = monitor.updatedAt ? new Date(monitor.updatedAt) : null
            const createdAt = new Date(monitor.createdAt)

            return (
              <Card key={monitor.id}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <StatusIndicator status={status} />
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
                          {responseTime ? `${responseTime}ms` : 'N/A'}
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <div className="text-sm text-text-secondary">Uptime</div>
                        <div className="font-medium text-text-primary">
                          {uptime}%
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
                            status === 'UP' ? 'success' : 
                            status === 'WARNING' ? 'warning' : 'error'
                          }
                        >
                          {status}
                        </Badge>
                      </div>

                      <div className="flex gap-2">
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleRefreshMonitor(monitor.id)}
                          disabled={refreshingMonitors.has(monitor.id)}
                        >
                          {refreshingMonitors.has(monitor.id) ? 'Checking...' : 'Check Now'}
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => router.push(`/dashboard/monitors/${monitor.id}`)}
                        >
                          View Details
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => handleDeleteMonitor(monitor.id)}
                        >
                          Delete
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-border">
                    <div className="flex items-center justify-between text-sm text-text-secondary">
                      <span>
                        Last checked: {lastCheck ? lastCheck.toLocaleString() : 'Never'}
                      </span>
                      <span>
                        Created: {createdAt.toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      )}

      {!isLoading && monitors.length === 0 && (
        <Card>
          <CardContent className="text-center py-12">
            <h3 className="text-lg font-medium text-text-primary mb-2">
              No monitors yet
            </h3>
            <p className="text-text-secondary mb-6">
              Start monitoring your websites by adding your first monitor
            </p>
            <Button onClick={() => setShowAddModal(true)}>
              Add Your First Monitor
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Add Monitor Modal */}
      <Modal isOpen={showAddModal} onClose={() => setShowAddModal(false)}>
        <AddMonitorForm 
          onSuccess={handleAddSuccess}
          onCancel={() => setShowAddModal(false)}
        />
      </Modal>
    </div>
  )
}