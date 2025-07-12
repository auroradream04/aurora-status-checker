'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card'
import { Button } from '../../../components/ui/button'
import { StatusIndicator } from '../../../components/monitors/status-indicator'
import { Modal } from '../../../components/ui/modal'
import { AddMonitorForm } from '../../../components/monitors/add-monitor-form'

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

export default function DashboardPage() {
  const router = useRouter()
  const [monitors, setMonitors] = useState<Monitor[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isRefreshing, setIsRefreshing] = useState(false)
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

  const handleRefreshAll = async () => {
    setIsRefreshing(true)
    try {
      const response = await fetch('/api/monitors/check-all', { method: 'POST' })
      if (!response.ok) {
        throw new Error('Failed to refresh monitors')
      }
      await fetchMonitors() // Refresh the data
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to refresh monitors')
    } finally {
      setIsRefreshing(false)
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

  const upCount = monitors.filter(m => getLatestStatus(m) === 'UP').length
  const warningCount = monitors.filter(m => getLatestStatus(m) === 'WARNING').length
  const downCount = monitors.filter(m => getLatestStatus(m) === 'DOWN').length
  const totalCount = monitors.length

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-primary">Dashboard</h1>
          <p className="text-text-secondary mt-1">Monitor your websites and services</p>
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
              {warningCount}
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
              {downCount}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Monitors */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Monitor Status</CardTitle>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={handleRefreshAll}
            disabled={isRefreshing}
          >
            {isRefreshing ? 'Refreshing...' : 'Refresh All'}
          </Button>
        </CardHeader>
        <CardContent>
          {!isLoading && (
            <div className="space-y-4">
              {monitors.map((monitor) => {
                const status = getLatestStatus(monitor)
                const responseTime = getLatestResponseTime(monitor)
                const lastCheck = monitor.updatedAt ? new Date(monitor.updatedAt) : null
                
                return (
                  <div
                    key={monitor.id}
                    className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-surface transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <StatusIndicator status={status} />
                      <div>
                        <h3 className="font-medium text-text-primary">{monitor.name}</h3>
                        <p className="text-sm text-text-secondary">{monitor.url}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-6 text-sm">
                      <div className="text-right">
                        <div className="text-text-primary">
                          {responseTime ? `${responseTime}ms` : 'N/A'}
                        </div>
                        <div className="text-text-secondary">
                          {lastCheck ? lastCheck.toLocaleTimeString() : 'Never checked'}
                        </div>
                      </div>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => router.push(`/dashboard/monitors/${monitor.id}`)}
                      >
                        Details
                      </Button>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
          
          {!isLoading && monitors.length === 0 && (
            <div className="text-center py-8">
              <p className="text-text-secondary">No monitors yet</p>
              <Button className="mt-4" onClick={() => setShowAddModal(true)}>
                Add Your First Monitor
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

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