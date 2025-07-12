interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
  variant?: 'horizontal' | 'icon-only'
  className?: string
  tagline?: string
}

export function Logo({ size = 'md', variant = 'horizontal', className = '', tagline = 'WEBSITE MONITORING' }: LogoProps) {
  const sizeClasses = {
    sm: {
      icon: 'w-5 h-5',
      iconInner: 'w-2.5 h-2.5',
      mainText: 'text-xs',
      taglineText: 'text-[8px]',
      gap: 'gap-2'
    },
    md: {
      icon: 'w-6 h-6',
      iconInner: 'w-3 h-3',
      mainText: 'text-sm',
      taglineText: 'text-[9px]',
      gap: 'gap-2.5'
    },
    lg: {
      icon: 'w-8 h-8',
      iconInner: 'w-4 h-4',
      mainText: 'text-base',
      taglineText: 'text-[9px]',
      gap: 'gap-3'
    }
  }

  const { icon, iconInner, mainText, taglineText, gap } = sizeClasses[size]

  if (variant === 'icon-only') {
    return (
      <div className={`${icon} bg-accent rounded-lg flex items-center justify-center glow-accent ${className}`}>
        <div className={`${iconInner} bg-white rounded-sm`}></div>
      </div>
    )
  }

  return (
    <div className={`flex items-center ${gap} ${className}`}>
      <div className={`${icon} bg-accent rounded-lg flex items-center justify-center glow-accent`}>
        <div className={`${iconInner} bg-white rounded-sm`}></div>
      </div>
      <div className="flex flex-col items-start">
        <span className={`${mainText} !font-bold text-text-primary tracking-tight uppercase leading-none`}>
          AURORA STATUS
        </span>
        <span className={`${taglineText} !font-bold text-accent tracking-wider uppercase leading-none mt-0.5`}>
          {tagline}
        </span>
      </div>
    </div>
  )
}