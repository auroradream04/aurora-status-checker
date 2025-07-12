'use client'

import { useState } from 'react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'

interface Monitor {
  id: string
  name: string
  url: string
  interval: number
}

interface EditMonitorFormProps {
  monitor: Monitor
  onSuccess: () => void
  onCancel: () => void
}

export function EditMonitorForm({ monitor, onSuccess, onCancel }: EditMonitorFormProps) {
  const [formData, setFormData] = useState({
    name: monitor.name,
    url: monitor.url,
    interval: monitor.interval
  })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      const response = await fetch(`/api/monitors/${monitor.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Failed to update monitor')
      }

      onSuccess()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update monitor')
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: name === 'interval' ? parseInt(value) || 0 : value
    }))
  }

  return (
    <div className="bg-background p-6 rounded-lg border border-border max-w-md w-full">
      <h2 className="text-xl font-semibold text-text-primary mb-4">Edit Monitor</h2>
      
      {error && (
        <div className="text-sm text-error bg-error/10 border border-error/20 rounded-md p-3 mb-4">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-1">
            Name
          </label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="My Website"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="url" className="block text-sm font-medium text-text-secondary mb-1">
            URL
          </label>
          <Input
            id="url"
            name="url"
            type="url"
            placeholder="https://example.com"
            value={formData.url}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="interval" className="block text-sm font-medium text-text-secondary mb-1">
            Check Interval (minutes)
          </label>
          <Input
            id="interval"
            name="interval"
            type="number"
            min="1"
            max="60"
            placeholder="30"
            value={formData.interval}
            onChange={handleChange}
            required
          />
          <p className="text-xs text-text-secondary mt-1">
            How often to check your site (1-60 minutes)
          </p>
        </div>

        <div className="flex gap-3 pt-4">
          <Button type="submit" disabled={isLoading} className="flex-1">
            {isLoading ? 'Updating...' : 'Update Monitor'}
          </Button>
          <Button type="button" variant="outline" onClick={onCancel}>
            Cancel
          </Button>
        </div>
      </form>
    </div>
  )
}