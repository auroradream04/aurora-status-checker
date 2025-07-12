'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Logo } from '../ui/logo'
import { createClient } from '../../lib/supabase-client'

export function DashboardHeader() {
  const router = useRouter()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isLoggingOut, setIsLoggingOut] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
      console.error('Logout failed:', err)
      setIsLoggingOut(false)
    }
  }

  return (
    <div className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'header-solid' : 'header-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
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
  )
}