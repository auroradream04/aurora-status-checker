'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '../../../../lib/supabase-client'
import { Logo } from '../../../../components/ui/logo'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()
  const supabase = createClient()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      const { error: authError } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (authError) {
        setError(authError.message)
        return
      }

      router.push('/dashboard')
    } catch {
      setError('Failed to sign in. Please check your credentials.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="glass-strong p-8 w-full rounded-xl">
      <div className="text-center mb-8">
        <div className="flex justify-center mb-6">
          <Logo size="lg" variant="horizontal" />
        </div>
        <h2 className="text-xl text-text-primary mb-2 tracking-tight">Sign In</h2>
        <p className="text-sm text-text-secondary">Welcome back</p>
      </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="email" className="text-xs text-text-secondary font-medium tracking-wide uppercase">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input"
              required
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="password" className="text-xs text-text-secondary font-medium tracking-wide uppercase">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input"
              required
            />
          </div>

          {error && (
            <div className="p-3 bg-error/10 border border-error/20 rounded-lg">
              <div className="text-xs text-error">{error}</div>
            </div>
          )}

          <button 
            type="submit" 
            className="btn btn-primary w-full py-3" 
            disabled={isLoading}
          >
            {isLoading ? 'Signing In...' : 'Sign In'}
          </button>
        </form>

      <div className="mt-6 text-center">
        <span className="text-xs text-text-secondary">Don&apos;t have an account? </span>
        <Link href="/register" className="text-xs text-accent hover:text-accent-hover font-medium transition-colors">
          Sign up
        </Link>
      </div>
    </div>
  )
}