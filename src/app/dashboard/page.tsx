'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { StatusIndicator } from '../../../components/monitors/status-indicator'
import { Modal } from '../../../components/ui/modal'
import { AddMonitorForm } from '../../../components/monitors/add-monitor-form'
import { createClient } from '../../../lib/supabase-client'
import { Logo } from '../../../components/ui/logo'

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
  const [isScrolled, setIsScrolled] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [isLoggingOut, setIsLoggingOut] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const fetchMonitors = async () => {
    try {
      const response = await fetch('/api/monitors')
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        throw new Error(errorData.error || `API Error: ${response.status}`)
      }
      const data = await response.json()
      setMonitors(data)
      setError('')
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
      await fetchMonitors()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to refresh monitors')
    } finally {
      setIsRefreshing(false)
    }
  }

  const handleAddSuccess = () => {
    setShowAddModal(false)
    fetchMonitors()
  }

  const handleLogout = async () => {
    setIsLoggingOut(true)
    try {
      const response = await fetch('/api/auth/logout', { method: 'POST' })
      if (!response.ok) {
        throw new Error('Failed to logout')
      }
      
      // Also sign out from client-side
      const supabase = createClient()
      await supabase.auth.signOut()
      
      // Redirect to home or login page
      router.push('/')
      router.refresh()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to logout')
      setIsLoggingOut(false)
    }
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

  // Filter monitors based on search term
  const filteredMonitors = monitors.filter(monitor => 
    monitor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    monitor.url.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const upCount = monitors.filter(m => getLatestStatus(m) === 'UP').length
  const warningCount = monitors.filter(m => getLatestStatus(m) === 'WARNING').length
  const downCount = monitors.filter(m => getLatestStatus(m) === 'DOWN').length

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'header-solid' : 'header-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-between">
          <Logo size="md" variant="horizontal" />
          <div className="flex items-center gap-3">
            <button className="text-sm text-text-secondary hover:text-text-primary transition-colors font-medium">
              Account
            </button>
            <button 
              onClick={handleLogout}
              disabled={isLoggingOut}
              className="text-sm text-text-secondary hover:text-error transition-colors font-medium disabled:opacity-50"
            >
              {isLoggingOut ? 'Logging out...' : 'Logout'}
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-6">
        {/* Error Display */}
        {error && (
          <div className="mb-6 p-4 bg-error/10 border border-error/20 rounded-lg">
            <div className="text-sm text-error">{error}</div>
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
                  disabled={isRefreshing}
                  className="btn btn-ghost text-xs px-3 py-1.5 h-8 transition-all"
                >
                  {isRefreshing ? 'Refreshing...' : 'Refresh'}
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
                    className="p-4 glass rounded-md hover:glass-strong hover:bg-white/[0.03] transition-all duration-300 cursor-pointer group"
                    onClick={() => router.push(`/dashboard/monitors/${monitor.id}`)}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <StatusIndicator status={status} />
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium text-text-primary group-hover:text-white transition-colors truncate">{monitor.name}</div>
                        <div className="text-xs text-text-muted group-hover:text-text-secondary transition-colors truncate">{monitor.url}</div>
                      </div>
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
    </div>
  )
}