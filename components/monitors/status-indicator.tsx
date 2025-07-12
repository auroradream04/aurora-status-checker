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
      color: 'bg-success', 
      label: 'Online',
      icon: '●'
    },
    WARNING: { 
      color: 'bg-warning', 
      label: 'Issues',
      icon: '●'
    },
    DOWN: { 
      color: 'bg-error', 
      label: 'Offline',
      icon: '●'
    },
    UNKNOWN: { 
      color: 'bg-gray-400', 
      label: 'Unknown',
      icon: '●'
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
        className={`rounded-full ${config.color} ${sizes[size]} flex items-center justify-center`}
        title={config.label}
      >
        <span className="text-white text-[8px] leading-none">
          {config.icon}
        </span>
      </div>
      {showLabel && (
        <span className={`font-medium ${sizes[size]}`}>
          {config.label}
        </span>
      )}
    </div>
  )
}