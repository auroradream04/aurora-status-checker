import { CheckStatus } from '../../prisma/generated/client'

interface StatusIndicatorProps {
  status: CheckStatus | 'UNKNOWN'
  size?: 'sm' | 'md' | 'lg'
  showLabel?: boolean
  className?: string
}

export function StatusIndicator({ 
  status, 
  size = 'md', 
  showLabel = false,
  className = '' 
}: StatusIndicatorProps) {
  const statusConfig = {
    UP: { 
      color: 'bg-green-400 shadow-lg shadow-green-400/40', 
      label: 'Online'
    },
    WARNING: { 
      color: 'bg-yellow-400 shadow-lg shadow-yellow-400/40', 
      label: 'Issues'
    },
    DOWN: { 
      color: 'bg-red-400 shadow-lg shadow-red-400/40', 
      label: 'Offline'
    },
    UNKNOWN: { 
      color: 'bg-gray-300 shadow-lg shadow-gray-300/30', 
      label: 'Unknown'
    }
  }
  
  const sizes = {
    sm: 'w-2 h-2 text-xs',
    md: 'w-3 h-3 text-sm',
    lg: 'w-4 h-4 text-base'
  }
  
  const config = statusConfig[status]
  
  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <div 
        className={`rounded-full ${config.color} ${sizes[size]} transition-all duration-300 animate-pulse hover:scale-110`}
        title={config.label}
      />
      {showLabel && (
        <span className={`font-medium ${sizes[size]} text-text-primary`}>
          {config.label}
        </span>
      )}
    </div>
  )
}