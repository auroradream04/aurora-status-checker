'use client'

import { useState } from 'react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'

interface AddMonitorFormProps {
  onSuccess?: () => void
  onCancel?: () => void
}

export function AddMonitorForm({ onSuccess, onCancel }: AddMonitorFormProps) {
  const [name, setName] = useState('')
  const [url, setUrl] = useState('')
  const [interval, setInterval] = useState(30)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      const response = await fetch('/api/monitors', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, url, interval }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Failed to create monitor')
      }

      // Reset form
      setName('')
      setUrl('')
      setInterval(30)
      
      onSuccess?.()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create monitor')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Add Monitor</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-text-primary">
              Monitor Name
            </label>
            <Input
              id="name"
              type="text"
              placeholder="e.g., My Website"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="url" className="text-sm font-medium text-text-primary">
              URL to Monitor
            </label>
            <Input
              id="url"
              type="url"
              placeholder="https://example.com"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="interval" className="text-sm font-medium text-text-primary">
              Check Interval (minutes)
            </label>
            <Input
              id="interval"
              type="number"
              min="1"
              max="60"
              value={interval}
              onChange={(e) => setInterval(parseInt(e.target.value))}
              required
            />
          </div>

          {error && (
            <div className="text-sm text-error bg-error/10 border border-error/20 rounded-md p-3">
              {error}
            </div>
          )}

          <div className="flex gap-2 pt-4">
            <Button type="submit" disabled={isLoading} className="flex-1">
              {isLoading ? 'Creating...' : 'Create Monitor'}
            </Button>
            {onCancel && (
              <Button type="button" variant="outline" onClick={onCancel}>
                Cancel
              </Button>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  )
}