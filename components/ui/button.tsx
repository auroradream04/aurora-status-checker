import { forwardRef } from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'primary', size = 'md', children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-xl font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'
    
    const variants = {
      primary: 'bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg hover:scale-105',
      secondary: 'bg-secondary text-white hover:bg-secondary/90',
      outline: 'glass border border-border text-text-primary hover:border-border-hover hover:bg-surface-elevated',
      ghost: 'text-text-secondary hover:text-text-primary hover:bg-surface'
    }
    
    const sizes = {
      sm: 'h-9 px-4 text-caption',
      md: 'h-11 px-5 text-body',
      lg: 'h-12 px-6 text-body'
    }

    const classNames = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`
    
    return (
      <button
        ref={ref}
        className={classNames}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'