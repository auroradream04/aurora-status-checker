'use client'

import { useState, useEffect, useCallback } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from '../../../../../components/ui/card'
import { Button } from '../../../../../components/ui/button'
import { StatusIndicator } from '../../../../../components/monitors/status-indicator'
import { Badge } from '../../../../../components/ui/badge'
import { Modal } from '../../../../../components/ui/modal'
import { EditMonitorForm } from '../../../../../components/monitors/edit-monitor-form'

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

export default function MonitorDetailPage() {
  const params = useParams()
  const router = useRouter()
  const monitorId = params.id as string

  const [monitor, setMonitor] = useState<Monitor | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [error, setError] = useState('')

  const fetchMonitor = useCallback(async () => {
    try {
      const response = await fetch(`/api/monitors/${monitorId}`)
      if (!response.ok) {
        if (response.status === 404) {
          router.push('/dashboard/monitors')
          return
        }
        throw new Error('Failed to fetch monitor')
      }
      const data = await response.json()
      setMonitor(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch monitor')
    } finally {
      setIsLoading(false)
    }
  }, [monitorId, router])

  const handleRefreshMonitor = async () => {
    setIsRefreshing(true)
    try {
      const response = await fetch(`/api/monitors/${monitorId}/check`, { 
        method: 'POST' 
      })
      if (!response.ok) {
        throw new Error('Failed to refresh monitor')
      }
      await fetchMonitor() // Refresh the data
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to refresh monitor')
    } finally {
      setIsRefreshing(false)
    }
  }

  const handleDeleteMonitor = async () => {
    if (!confirm('Are you sure you want to delete this monitor? This action cannot be undone.')) {
      return
    }

    try {
      const response = await fetch(`/api/monitors/${monitorId}`, { 
        method: 'DELETE' 
      })
      if (!response.ok) {
        throw new Error('Failed to delete monitor')
      }
      router.push('/dashboard/monitors')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete monitor')
    }
  }

  const handleEditSuccess = () => {
    setShowEditModal(false)
    fetchMonitor() // Refresh the data
  }

  useEffect(() => {
    fetchMonitor()
  }, [monitorId, fetchMonitor])

  const getLatestStatus = () => {
    return monitor?.checks?.[0]?.status || 'UNKNOWN'
  }

  const getLatestResponseTime = () => {
    return monitor?.checks?.[0]?.responseTime || null
  }

  const calculateUptime = () => {
    if (!monitor?.checks || monitor.checks.length === 0) return 0
    
    // Take last 24 checks for uptime calculation
    const recentChecks = monitor.checks.slice(0, 24)
    const upChecks = recentChecks.filter(check => check.status === 'UP').length
    return recentChecks.length > 0 ? Math.round((upChecks / recentChecks.length) * 100 * 10) / 10 : 0
  }

  const getAverageResponseTime = () => {
    if (!monitor?.checks || monitor.checks.length === 0) return null
    
    const checksWithResponseTime = monitor.checks
      .filter(check => check.responseTime !== null && check.responseTime !== undefined)
      .slice(0, 24) // Last 24 checks
    
    if (checksWithResponseTime.length === 0) return null
    
    const total = checksWithResponseTime.reduce((sum, check) => sum + (check.responseTime || 0), 0)
    return Math.round(total / checksWithResponseTime.length)
  }

  if (isLoading) {
    return (
      <div className="text-center py-8">
        <p className="text-text-secondary">Loading monitor details...</p>
      </div>
    )
  }

  if (error || !monitor) {
    return (
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <Button variant="outline" onClick={() => router.back()}>
            ← Back
          </Button>
        </div>
        <div className="text-sm text-error bg-error/10 border border-error/20 rounded-md p-3">
          {error || 'Monitor not found'}
        </div>
      </div>
    )
  }

  const status = getLatestStatus()
  const responseTime = getLatestResponseTime()
  const uptime = calculateUptime()
  const averageResponseTime = getAverageResponseTime()
  const lastCheck = monitor.updatedAt ? new Date(monitor.updatedAt) : null
  const createdAt = new Date(monitor.createdAt)

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="outline" onClick={() => router.back()}>
            ← Back
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-primary">{monitor.name}</h1>
            <p className="text-text-secondary mt-1">{monitor.url}</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button 
            variant="outline"
            onClick={handleRefreshMonitor}
            disabled={isRefreshing}
          >
            {isRefreshing ? 'Checking...' : 'Check Now'}
          </Button>
          <Button 
            variant="outline"
            onClick={() => setShowEditModal(true)}
          >
            Edit
          </Button>
          <Button 
            variant="ghost" 
            onClick={handleDeleteMonitor}
          >
            Delete
          </Button>
        </div>
      </div>

      {/* Error Display */}
      {error && (
        <div className="text-sm text-error bg-error/10 border border-error/20 rounded-md p-3">
          {error}
        </div>
      )}

      {/* Status Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-text-secondary">
              Current Status
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-3">
              <StatusIndicator status={status} size="lg" />
              <Badge 
                variant={
                  status === 'UP' ? 'success' : 
                  status === 'WARNING' ? 'warning' : 'error'
                }
              >
                {status}
              </Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-text-secondary">
              Response Time
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">
              {responseTime ? `${responseTime}ms` : 'N/A'}
            </div>
            {averageResponseTime && (
              <div className="text-sm text-text-secondary">
                Avg: {averageResponseTime}ms
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-text-secondary">
              Uptime (24h)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">{uptime}%</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-text-secondary">
              Check Interval
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">{monitor.interval}min</div>
          </CardContent>
        </Card>
      </div>

      {/* Monitor Information */}
      <Card>
        <CardHeader>
          <CardTitle>Monitor Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-text-primary mb-2">Basic Details</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-text-secondary">Name:</span>
                  <span className="text-text-primary">{monitor.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">URL:</span>
                  <span className="text-text-primary">{monitor.url}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Check Interval:</span>
                  <span className="text-text-primary">{monitor.interval} minutes</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Created:</span>
                  <span className="text-text-primary">{createdAt.toLocaleDateString()}</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-medium text-text-primary mb-2">Latest Check</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-text-secondary">Status:</span>
                  <Badge 
                    variant={
                      status === 'UP' ? 'success' : 
                      status === 'WARNING' ? 'warning' : 'error'
                    }
                  >
                    {status}
                  </Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Response Time:</span>
                  <span className="text-text-primary">
                    {responseTime ? `${responseTime}ms` : 'N/A'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Status Code:</span>
                  <span className="text-text-primary">
                    {monitor.checks?.[0]?.statusCode || 'N/A'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Last Checked:</span>
                  <span className="text-text-primary">
                    {lastCheck ? lastCheck.toLocaleString() : 'Never'}
                  </span>
                </div>
                {monitor.checks?.[0]?.error && (
                  <div className="pt-2">
                    <span className="text-text-secondary">Error:</span>
                    <div className="text-error text-xs mt-1 p-2 bg-error/10 rounded">
                      {monitor.checks[0].error}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Recent Checks History */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Check History</CardTitle>
        </CardHeader>
        <CardContent>
          {monitor.checks && monitor.checks.length > 0 ? (
            <div className="space-y-2">
              {monitor.checks.slice(0, 10).map((check) => (
                <div 
                  key={check.id}
                  className="flex items-center justify-between p-3 border border-border rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <StatusIndicator status={check.status} size="sm" />
                    <span className="text-sm font-medium">
                      {new Date(check.checkedAt).toLocaleString()}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-text-secondary">
                      {check.responseTime ? `${check.responseTime}ms` : 'N/A'}
                    </span>
                    <span className="text-text-secondary">
                      {check.statusCode || 'N/A'}
                    </span>
                    {check.error && (
                      <span className="text-error text-xs">
                        Error
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-text-secondary">
              No checks performed yet
            </div>
          )}
        </CardContent>
      </Card>

      {/* Edit Monitor Modal */}
      {monitor && (
        <Modal isOpen={showEditModal} onClose={() => setShowEditModal(false)}>
          <EditMonitorForm 
            monitor={monitor}
            onSuccess={handleEditSuccess}
            onCancel={() => setShowEditModal(false)}
          />
        </Modal>
      )}
    </div>
  )
}