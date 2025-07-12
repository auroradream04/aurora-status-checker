'use client'

import { useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { StatusIndicator } from '../../../../../components/monitors/status-indicator'
import { Modal } from '../../../../../components/ui/modal'
import { EditMonitorForm } from '../../../../../components/monitors/edit-monitor-form'
import { useMonitor, useRefreshMonitor, useDeleteMonitor } from '../../../../../lib/hooks/use-monitors'

// Helper function to format error messages for better readability
function formatErrorMessage(error: string): string {
  // Common error patterns and their user-friendly explanations
  const errorMap: { [key: string]: string } = {
    'fetch failed': 'Connection failed - server may be unreachable or using unsupported SSL',
    'certificate': 'SSL certificate issue - certificate may be expired, invalid, or self-signed',
    'ssl': 'SSL/TLS connection error - secure connection could not be established',
    'tls': 'TLS handshake failed - secure connection negotiation failed',
    'self-signed': 'Self-signed certificate detected - certificate not trusted by default',
    'expired': 'SSL certificate expired - certificate is no longer valid',
    'untrusted': 'Untrusted certificate - certificate not issued by recognized authority',
    'hostname mismatch': 'Certificate hostname mismatch - certificate not valid for this domain',
    'connection refused': 'Connection refused - server actively rejected the connection',
    'connection reset': 'Connection reset - server unexpectedly closed the connection',
    'connection timeout': 'Connection timeout - server took too long to respond',
    'network unreachable': 'Network unreachable - routing issue or network down',
    'enotfound': 'Domain not found - DNS resolution failed for this domain',
    'getaddrinfo': 'DNS lookup failed - unable to resolve domain name to IP address',
    'name not resolved': 'DNS resolution failed - domain name could not be resolved',
    'no such host': 'Host not found - domain does not exist or DNS is misconfigured'
  }

  const lowerError = error.toLowerCase()
  
  // Find matching error pattern
  for (const [pattern, explanation] of Object.entries(errorMap)) {
    if (lowerError.includes(pattern)) {
      return `${explanation} (${error})`
    }
  }
  
  // Extract status codes and provide context
  const statusMatch = error.match(/(?:status|code|error)\s*:?\s*([0-9]{3})/i)
  if (statusMatch) {
    const code = parseInt(statusMatch[1])
    const statusExplanations: { [key: number]: string } = {
      400: 'Bad Request - server cannot process the request',
      401: 'Unauthorized - authentication required',
      403: 'Forbidden - access denied to this resource',
      404: 'Not Found - requested resource does not exist',
      405: 'Method Not Allowed - HTTP method not supported',
      408: 'Request Timeout - server timed out waiting for request',
      429: 'Too Many Requests - rate limit exceeded',
      500: 'Internal Server Error - server encountered an error',
      502: 'Bad Gateway - invalid response from upstream server',
      503: 'Service Unavailable - server temporarily overloaded',
      504: 'Gateway Timeout - upstream server timed out'
    }
    
    if (statusExplanations[code]) {
      return `HTTP ${code}: ${statusExplanations[code]}`
    } else if (code >= 400 && code < 500) {
      return `HTTP ${code}: Client error - request could not be processed`
    } else if (code >= 500 && code < 600) {
      return `HTTP ${code}: Server error - internal server problem`
    }
  }
  
  // Return original error if no pattern matches
  return error
}

export default function MonitorDetailPage() {
  const params = useParams()
  const router = useRouter()
  const monitorId = params.id as string

  const [showEditModal, setShowEditModal] = useState(false)

  // React Query hooks
  const { data: monitor, isLoading, error } = useMonitor(monitorId)
  const refreshMutation = useRefreshMonitor()
  const deleteMutation = useDeleteMonitor()

  const handleRefreshMonitor = async () => {
    try {
      await refreshMutation.mutateAsync(monitorId)
    } catch (err) {
      console.error('Failed to refresh monitor:', err)
    }
  }

  const handleDeleteMonitor = async () => {
    if (!confirm('Are you sure you want to delete this monitor? This action cannot be undone.')) {
      return
    }

    try {
      await deleteMutation.mutateAsync(monitorId)
      router.push('/dashboard')
    } catch (err) {
      console.error('Failed to delete monitor:', err)
    }
  }

  const handleEditSuccess = () => {
    setShowEditModal(false)
    // React Query will automatically refetch the data
  }

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
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="text-center py-12">
          <div className="w-6 h-6 bg-accent rounded-full animate-pulse mx-auto mb-4"></div>
          <p className="text-text-secondary">Loading monitor details...</p>
        </div>
      </div>
    )
  }

  if (error || (!isLoading && !monitor)) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => router.back()}
              className="btn btn-ghost text-sm px-3 py-2"
            >
              ← Back
            </button>
          </div>
          <div className="glass rounded-lg p-6">
            <div className="text-sm text-error">
              {(error as Error)?.message || 'Monitor not found'}
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (!monitor) {
    return null // This should never happen after the above check, but satisfies TypeScript
  }

  const status = getLatestStatus()
  const responseTime = getLatestResponseTime()
  const uptime = calculateUptime()
  const averageResponseTime = getAverageResponseTime()
  const lastCheck = monitor.updatedAt ? new Date(monitor.updatedAt) : null
  const createdAt = new Date(monitor.createdAt)

  return (
    <div>
      {/* Page Header */}
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between border-b border-border/30 mb-6">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => router.back()}
            className="btn btn-ghost text-sm px-3 py-2"
          >
            ← Back
          </button>
          <div className="flex items-center gap-3">
            <StatusIndicator status={status} />
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg font-semibold text-text-primary tracking-tight">{monitor.name}</h1>
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
              <a 
                href={monitor.url.match(/^https?:\/\//) ? monitor.url : `https://${monitor.url}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-text-secondary hover:text-accent transition-colors cursor-pointer"
                onClick={(e) => e.stopPropagation()}
              >
                {monitor.url}
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handleRefreshMonitor}
            disabled={refreshMutation.isPending}
            className="btn btn-ghost text-xs px-3 py-1.5 h-8 transition-all disabled:opacity-50"
          >
            {refreshMutation.isPending ? 'Checking...' : 'Check Now'}
          </button>
          <button
            onClick={() => setShowEditModal(true)}
            className="btn btn-ghost text-xs px-3 py-1.5 h-8 transition-all"
          >
            Edit
          </button>
          <button
            onClick={handleDeleteMonitor}
            disabled={deleteMutation.isPending}
            className="btn btn-ghost text-xs px-3 py-1.5 h-8 transition-all text-error hover:text-error disabled:opacity-50"
          >
            {deleteMutation.isPending ? 'Deleting...' : 'Delete'}
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-6">
        {/* Refresh Error Display */}
        {refreshMutation.error && (
          <div className="mb-6 p-4 bg-error/10 border border-error/20 rounded-lg">
            <div className="text-sm text-error">{(refreshMutation.error as Error)?.message || 'Failed to refresh monitor'}</div>
          </div>
        )}

        {/* Delete Error Display */}
        {deleteMutation.error && (
          <div className="mb-6 p-4 bg-error/10 border border-error/20 rounded-lg">
            <div className="text-sm text-error">{(deleteMutation.error as Error)?.message || 'Failed to delete monitor'}</div>
          </div>
        )}

        {/* Status Overview */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="glass rounded-lg p-6 hover:glass-strong transition-all duration-300 border-l-2 border-success/30">
            <div className="text-xs text-text-muted mb-3 font-medium tracking-wide uppercase">Current Status</div>
            <div className="flex items-center gap-3">
              <div className={`text-2xl font-bold ${
                status === 'UP' ? 'text-success' : 
                status === 'WARNING' ? 'text-warning' : 'text-error'
              }`}>
                {status}
              </div>
            </div>
          </div>

          <div className="glass rounded-lg p-6 hover:glass-strong transition-all duration-300 border-l-2 border-accent/30">
            <div className="text-xs text-text-muted mb-3 font-medium tracking-wide uppercase">Response Time</div>
            <div className="text-2xl font-bold text-text-primary">
              {responseTime ? `${responseTime}ms` : 'N/A'}
            </div>
            {averageResponseTime && (
              <div className="text-xs text-text-secondary mt-1">
                Avg: {averageResponseTime}ms
              </div>
            )}
          </div>

          <div className="glass rounded-lg p-6 hover:glass-strong transition-all duration-300 border-l-2 border-success/30">
            <div className="text-xs text-text-muted mb-3 font-medium tracking-wide uppercase">Uptime (24h)</div>
            <div className="text-2xl font-bold text-success">{uptime}%</div>
          </div>

          <div className="glass rounded-lg p-6 hover:glass-strong transition-all duration-300 border-l-2 border-accent/30">
            <div className="text-xs text-text-muted mb-3 font-medium tracking-wide uppercase">Check Interval</div>
            <div className="text-2xl font-bold text-text-primary">{monitor.interval}min</div>
          </div>
        </div>

        {/* Monitor Information */}
        <div className="glass rounded-lg p-5 mb-6">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-base text-text-primary font-medium tracking-tight">Monitor Information</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-medium text-text-primary mb-4 uppercase tracking-wide">Basic Details</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-border/30">
                  <span className="text-xs text-text-secondary font-medium uppercase tracking-wide">Name</span>
                  <span className="text-sm text-text-primary font-medium">{monitor.name}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border/30">
                  <span className="text-xs text-text-secondary font-medium uppercase tracking-wide">URL</span>
                  <a 
                    href={monitor.url.match(/^https?:\/\//) ? monitor.url : `https://${monitor.url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-accent hover:text-accent/80 font-medium truncate max-w-xs transition-colors"
                  >
                    {monitor.url}
                  </a>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border/30">
                  <span className="text-xs text-text-secondary font-medium uppercase tracking-wide">Interval</span>
                  <span className="text-sm text-text-primary font-medium">{monitor.interval} minutes</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border/30">
                  <span className="text-xs text-text-secondary font-medium uppercase tracking-wide">Created</span>
                  <span className="text-sm text-text-primary font-medium">{createdAt.toLocaleDateString()}</span>
                </div>
                {monitor.category && (
                  <div className="flex justify-between items-center py-2 border-b border-border/30">
                    <span className="text-xs text-text-secondary font-medium uppercase tracking-wide">Category</span>
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
                  </div>
                )}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-text-primary mb-4 uppercase tracking-wide">Latest Check</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-border/30">
                  <span className="text-xs text-text-secondary font-medium uppercase tracking-wide">Status</span>
                  <span className={`text-sm font-bold ${
                    status === 'UP' ? 'text-success' : 
                    status === 'WARNING' ? 'text-warning' : 'text-error'
                  }`}>
                    {status}
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border/30">
                  <span className="text-xs text-text-secondary font-medium uppercase tracking-wide">Response Time</span>
                  <span className="text-sm text-text-primary font-medium">
                    {responseTime ? `${responseTime}ms` : 'N/A'}
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border/30">
                  <span className="text-xs text-text-secondary font-medium uppercase tracking-wide">Status Code</span>
                  <span className="text-sm text-text-primary font-medium">
                    {monitor.checks?.[0]?.statusCode || 'N/A'}
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border/30">
                  <span className="text-xs text-text-secondary font-medium uppercase tracking-wide">Last Checked</span>
                  <span className="text-sm text-text-primary font-medium">
                    {lastCheck ? lastCheck.toLocaleString() : 'Never'}
                  </span>
                </div>
                {monitor.checks?.[0]?.error && (
                  <div className="pt-3">
                    <div className="text-xs text-text-secondary font-medium uppercase tracking-wide mb-2">Error Details</div>
                    <div className="text-error text-xs p-3 bg-error/10 border border-error/20 rounded-lg font-mono leading-relaxed">
                      {formatErrorMessage(monitor.checks[0].error)}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Recent Checks History */}
        <div className="glass rounded-lg p-5">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-base text-text-primary font-medium tracking-tight">Recent Check History</h2>
            <div className="text-xs text-text-muted font-medium">
              Last {monitor.checks?.length || 0} checks
            </div>
          </div>

          {monitor.checks && monitor.checks.length > 0 ? (
            <div className="space-y-3">
              {monitor.checks.slice(0, 10).map((check) => (
                <div 
                  key={check.id}
                  className="flex items-center justify-between p-4 glass rounded-md hover:glass-strong transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <StatusIndicator status={check.status} size="sm" />
                    <div>
                      <div className="text-sm font-medium text-text-primary">
                        {new Date(check.checkedAt).toLocaleString()}
                      </div>
                      {check.error && (
                        <div className="text-xs text-error mt-1 max-w-xs">
                          <div className="truncate">{formatErrorMessage(check.error)}</div>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-6 text-sm">
                    <div className="text-right">
                      <div className="text-xs text-text-muted font-medium uppercase tracking-wide">Response</div>
                      <div className="text-sm text-text-primary font-medium">
                        {check.responseTime ? `${check.responseTime}ms` : 'N/A'}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-text-muted font-medium uppercase tracking-wide">Code</div>
                      <div className="text-sm text-text-primary font-medium">
                        {check.statusCode || 'N/A'}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-text-secondary mb-3 text-sm">No checks performed yet</div>
              <button
                onClick={handleRefreshMonitor}
                disabled={refreshMutation.isPending}
                className="bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 text-white text-xs px-3 py-1.5 rounded-md font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg shadow-accent/20 disabled:opacity-50"
              >
                {refreshMutation.isPending ? 'Checking...' : 'Run first check'}
              </button>
            </div>
          )}
        </div>
      </div>

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