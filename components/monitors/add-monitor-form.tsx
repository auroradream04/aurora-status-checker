'use client'

import { useState, useEffect } from 'react'

interface Category {
  id: string
  name: string
  color: string
}

interface AddMonitorFormProps {
  onSuccess?: () => void
  onCancel?: () => void
}

export function AddMonitorForm({ onSuccess, onCancel }: AddMonitorFormProps) {
  const [name, setName] = useState('')
  const [url, setUrl] = useState('')
  const [interval, setInterval] = useState(30)
  const [categoryId, setCategoryId] = useState('')
  const [newCategoryName, setNewCategoryName] = useState('')
  const [newCategoryColor, setNewCategoryColor] = useState('#22c55e')
  const [showNewCategory, setShowNewCategory] = useState(false)
  const [categories, setCategories] = useState<Category[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [isLoadingCategories, setIsLoadingCategories] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetchCategories()
  }, [])

  const fetchCategories = async () => {
    try {
      const response = await fetch('/api/categories')
      if (response.ok) {
        const data = await response.json()
        setCategories(data)
        if (data.length > 0) {
          setCategoryId(data[0].id) // Default to first category
        }
      }
    } catch (err) {
      console.error('Failed to fetch categories:', err)
    } finally {
      setIsLoadingCategories(false)
    }
  }

  const handleCreateCategory = async () => {
    if (!newCategoryName.trim()) return

    try {
      const response = await fetch('/api/categories', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          name: newCategoryName.trim(), 
          color: newCategoryColor 
        }),
      })

      if (response.ok) {
        const newCategory = await response.json()
        setCategories(prev => [...prev, newCategory])
        setCategoryId(newCategory.id)
        setNewCategoryName('')
        setShowNewCategory(false)
      }
    } catch (err) {
      console.error('Failed to create category:', err)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      const response = await fetch('/api/monitors', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          name, 
          url, 
          interval, 
          categoryId: categoryId || null 
        }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Failed to create monitor')
      }

      const newMonitor = await response.json()

      // Trigger immediate status check for the new monitor
      try {
        await fetch(`/api/monitors/${newMonitor.id}/check`, {
          method: 'POST',
        })
      } catch (checkError) {
        console.error('Failed to perform initial status check:', checkError)
        // Don't throw here as the monitor was created successfully
      }

      // Reset form
      setName('')
      setUrl('')
      setInterval(30)
      setCategoryId(categories.length > 0 ? categories[0].id : '')
      
      onSuccess?.()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create monitor')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="glass-strong p-8 w-full max-w-md rounded-xl">
      <div className="text-center mb-8">
        <h2 className="text-xl text-text-primary mb-2 tracking-tight">Add Monitor</h2>
        <p className="text-sm text-text-secondary">Monitor a new website</p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-xs text-text-secondary font-medium tracking-wide uppercase">
              Monitor Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="e.g., My Website"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="url" className="text-xs text-text-secondary font-medium tracking-wide uppercase">
              URL to Monitor
            </label>
            <input
              id="url"
              type="url"
              placeholder="https://example.com"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="input"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="interval" className="text-xs text-text-secondary font-medium tracking-wide uppercase">
              Check Interval (minutes)
            </label>
            <input
              id="interval"
              type="number"
              min="1"
              max="60"
              value={interval}
              onChange={(e) => setInterval(parseInt(e.target.value))}
              className="input"
              required
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label htmlFor="category" className="text-xs text-text-secondary font-medium tracking-wide uppercase">
                Category
              </label>
              <button
                type="button"
                onClick={() => setShowNewCategory(!showNewCategory)}
                className="text-xs text-accent hover:text-accent-hover transition-colors font-medium"
              >
                {showNewCategory ? 'Cancel' : '+ New Category'}
              </button>
            </div>
            
            {showNewCategory ? (
              <div className="space-y-4 p-5 bg-surface/50 rounded-lg border border-border/50">
                <div className="space-y-2">
                  <label className="text-xs text-text-secondary font-medium tracking-wide uppercase">
                    Category Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Production Sites"
                    value={newCategoryName}
                    onChange={(e) => setNewCategoryName(e.target.value)}
                    className="input"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs text-text-secondary font-medium tracking-wide uppercase">
                    Color
                  </label>
                  <div className="flex gap-3 items-center">
                    <div className="relative">
                      <input
                        type="color"
                        value={newCategoryColor}
                        onChange={(e) => setNewCategoryColor(e.target.value)}
                        className="w-12 h-12 rounded-lg border border-border cursor-pointer bg-surface"
                      />
                      <div 
                        className="absolute inset-1 rounded-md pointer-events-none"
                        style={{ backgroundColor: newCategoryColor }}
                      />
                    </div>
                    <div className="flex-1">
                      <input
                        type="text"
                        value={newCategoryColor}
                        onChange={(e) => setNewCategoryColor(e.target.value)}
                        className="input font-mono text-xs"
                        placeholder="#22c55e"
                      />
                    </div>
                  </div>
                </div>
                
                <button
                  type="button"
                  onClick={handleCreateCategory}
                  disabled={!newCategoryName.trim()}
                  className="btn btn-primary w-full py-2.5 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Create Category
                </button>
              </div>
            ) : (
              <select
                id="category"
                value={categoryId}
                onChange={(e) => setCategoryId(e.target.value)}
                className="input"
                disabled={isLoadingCategories}
              >
                {isLoadingCategories ? (
                  <option>Loading categories...</option>
                ) : categories.length === 0 ? (
                  <option value="">No categories available</option>
                ) : (
                  <>
                    <option value="">Select a category (optional)</option>
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </>
                )}
              </select>
            )}
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
            {isLoading ? 'Creating Monitor...' : 'Create Monitor'}
          </button>
        </form>

        {onCancel && (
          <div className="mt-6 text-center">
            <button 
              onClick={onCancel}
              className="text-xs text-text-secondary hover:text-text-primary font-medium transition-colors"
            >
              Cancel
            </button>
          </div>
        )}
    </div>
  )
}