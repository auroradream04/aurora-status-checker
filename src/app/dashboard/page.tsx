'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { StatusIndicator } from '../../../components/monitors/status-indicator'
import { Modal } from '../../../components/ui/modal'
import { AddMonitorForm } from '../../../components/monitors/add-monitor-form'
import { useMonitors, useRefreshMonitor, useRefreshAllMonitors, type Monitor } from '../../../lib/hooks/use-monitors'

export default function DashboardPage() {
  const router = useRouter()
  const [showAddModal, setShowAddModal] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [refreshingMonitors, setRefreshingMonitors] = useState<Set<string>>(new Set())

  // React Query hooks
  const { data: monitors = [], isLoading, error } = useMonitors()
  const refreshAllMutation = useRefreshAllMonitors()
  const refreshMonitorMutation = useRefreshMonitor()

  const handleRefreshAll = async () => {
    // Mark all monitors as refreshing
    setRefreshingMonitors(new Set(monitors.map(m => m.id)))
    try {
      await refreshAllMutation.mutateAsync()
    } catch (err) {
      console.error('Failed to refresh monitors:', err)
    } finally {
      setRefreshingMonitors(new Set())
    }
  }

  const handleRefreshMonitor = async (monitorId: string) => {
    setRefreshingMonitors(prev => new Set([...prev, monitorId]))
    try {
      await refreshMonitorMutation.mutateAsync(monitorId)
    } catch (err) {
      console.error('Failed to refresh monitor:', err)
    } finally {
      setRefreshingMonitors(prev => {
        const newSet = new Set(prev)
        newSet.delete(monitorId)
        return newSet
      })
    }
  }

  const handleAddSuccess = () => {
    setShowAddModal(false)
    // React Query will automatically refetch the data
  }

  const getLatestStatus = (monitor: Monitor) => {
    return monitor.checks?.[0]?.status || 'UNKNOWN'
  }

  const getLatestResponseTime = (monitor: Monitor) => {
    return monitor.checks?.[0]?.responseTime || null
  }

  // Filter monitors based on search term
  const filteredMonitors = monitors.filter(monitor => 
    monitor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    monitor.url.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const upCount = monitors.filter(m => getLatestStatus(m) === 'UP').length
  const warningCount = monitors.filter(m => getLatestStatus(m) === 'WARNING').length
  const downCount = monitors.filter(m => getLatestStatus(m) === 'DOWN').length

  return (
    <>
      <div className="max-w-6xl mx-auto px-4 py-6">
        {/* Error Display */}
        {error && (
          <div className="mb-6 p-4 bg-error/10 border border-error/20 rounded-lg">
            <div className="text-sm text-error">{error.message || 'An error occurred'}</div>
          </div>
        )}

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="glass rounded-lg p-6 hover:glass-strong transition-all duration-300 border-l-2 border-success/30">
            <div className="text-xs text-text-muted mb-3 font-medium tracking-wide uppercase">Online</div>
            <div className="text-3xl font-bold text-success">{upCount}</div>
          </div>
          <div className="glass rounded-lg p-6 hover:glass-strong transition-all duration-300 border-l-2 border-warning/30">
            <div className="text-xs text-text-muted mb-3 font-medium tracking-wide uppercase">Issues</div>
            <div className="text-3xl font-bold text-warning">{warningCount}</div>
          </div>
          <div className="glass rounded-lg p-6 hover:glass-strong transition-all duration-300 border-l-2 border-error/30">
            <div className="text-xs text-text-muted mb-3 font-medium tracking-wide uppercase">Offline</div>
            <div className="text-3xl font-bold text-error">{downCount}</div>
          </div>
        </div>

        {/* Monitors */}
        <div className="glass rounded-lg p-5">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-base text-text-primary font-medium tracking-tight">Monitors</h2>
            <div className="flex items-center gap-3">
              <div className="text-xs text-text-muted font-medium">
                {filteredMonitors.length} of {monitors.length} total
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleRefreshAll}
                  disabled={refreshAllMutation.isPending}
                  className="btn btn-ghost text-xs px-3 py-1.5 h-8 transition-all"
                >
                  {refreshAllMutation.isPending ? 'Refreshing...' : 'Refresh'}
                </button>
                <button
                  onClick={() => setShowAddModal(true)}
                  className="bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 text-white text-xs px-2.5 py-1 h-7 rounded-md font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg shadow-accent/20"
                >
                  Add Monitor
                </button>
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="mb-5">
            <div className="relative">
              <input
                type="text"
                placeholder="Search monitors by name or URL..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2.5 bg-surface border border-border rounded-lg text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all duration-200"
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <svg className="w-4 h-4 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>

          {isLoading ? (
            <div className="text-center py-8">
              <div className="w-5 h-5 bg-accent rounded-full animate-pulse mx-auto"></div>
            </div>
          ) : filteredMonitors.length === 0 ? (
            searchTerm ? (
              <div className="text-center py-8">
                <div className="text-text-secondary mb-3 text-sm">No monitors found matching &ldquo;{searchTerm}&rdquo;</div>
                <button
                  onClick={() => setSearchTerm('')}
                  className="text-xs text-accent hover:text-accent/80 font-medium"
                >
                  Clear search
                </button>
              </div>
            ) : (
              <div className="text-center py-8">
                <div className="text-text-secondary mb-3 text-sm">No monitors yet</div>
                <button
                  onClick={() => setShowAddModal(true)}
                  className="bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 text-white text-xs px-3 py-1.5 rounded-md font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg shadow-accent/20"
                >
                  Add your first monitor
                </button>
              </div>
            )
          ) : (
            <div className="grid grid-cols-3 gap-3">
              {filteredMonitors.map((monitor) => {
                const status = getLatestStatus(monitor)
                const responseTime = getLatestResponseTime(monitor)
                const lastCheck = monitor.updatedAt ? new Date(monitor.updatedAt) : null
                
                return (
                  <div
                    key={monitor.id}
                    className="p-4 glass rounded-md hover:glass-strong hover:bg-white/[0.03] transition-all duration-300 cursor-pointer group relative"
                    onClick={() => router.push(`/dashboard/monitors/${monitor.id}`)}
                  >
                    {/* Refresh overlay when loading */}
                    {refreshingMonitors.has(monitor.id) && (
                      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm rounded-md flex items-center justify-center z-10">
                        <div className="flex items-center gap-2 text-accent">
                          <div className="w-4 h-4 border-2 border-accent border-t-transparent rounded-full animate-spin"></div>
                          <span className="text-xs font-medium">Checking...</span>
                        </div>
                      </div>
                    )}
                    
                    <div className="flex items-center gap-3 mb-3">
                      <StatusIndicator status={status} />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <div className="text-sm font-medium text-text-primary group-hover:text-white transition-colors truncate">{monitor.name}</div>
                          {monitor.category && (
                            <span 
                              className="px-1.5 py-0.5 rounded text-[10px] font-medium uppercase tracking-wide"
                              style={{ 
                                backgroundColor: `${monitor.category.color}20`,
                                color: monitor.category.color,
                                border: `1px solid ${monitor.category.color}30`
                              }}
                            >
                              {monitor.category.name}
                            </span>
                          )}
                        </div>
                        <div className="text-xs text-text-muted group-hover:text-text-secondary transition-colors truncate">{monitor.url}</div>
                      </div>
                      
                      {/* Individual refresh button */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          handleRefreshMonitor(monitor.id)
                        }}
                        disabled={refreshingMonitors.has(monitor.id)}
                        className="opacity-0 group-hover:opacity-100 transition-opacity p-1.5 rounded-md hover:bg-accent/10 text-text-muted hover:text-accent disabled:opacity-50 disabled:cursor-not-allowed"
                        title="Refresh this monitor"
                      >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                      </button>
                    </div>
                    
                    <div className="text-xs text-right">
                      <div className="text-text-primary font-medium group-hover:text-white transition-colors">
                        {responseTime ? `${responseTime}ms` : '—'}
                      </div>
                      <div className="text-text-muted group-hover:text-text-secondary transition-colors">
                        {lastCheck ? lastCheck.toLocaleTimeString() : 'Never'}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </div>

      {/* Add Monitor Modal */}
      <Modal isOpen={showAddModal} onClose={() => setShowAddModal(false)}>
        <AddMonitorForm 
          onSuccess={handleAddSuccess}
          onCancel={() => setShowAddModal(false)}
        />
      </Modal>
    </>
  )
}