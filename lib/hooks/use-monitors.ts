'use client'

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'

export interface Monitor {
  id: string
  name: string
  url: string
  interval: number
  createdAt: string
  updatedAt: string
  category?: {
    id: string
    name: string
    color: string
  }
  checks: Array<{
    id: string
    status: 'UP' | 'DOWN' | 'WARNING'
    responseTime?: number
    statusCode?: number
    error?: string
    checkedAt: string
  }>
}

// Fetch all monitors
export function useMonitors() {
  return useQuery({
    queryKey: ['monitors'],
    queryFn: async (): Promise<Monitor[]> => {
      const response = await fetch('/api/monitors')
      if (!response.ok) {
        throw new Error('Failed to fetch monitors')
      }
      return response.json()
    },
    staleTime: 2 * 60 * 1000, // 2 minutes
    refetchInterval: 30 * 1000, // Refetch every 30 seconds
  })
}

// Fetch single monitor
export function useMonitor(id: string) {
  return useQuery({
    queryKey: ['monitor', id],
    queryFn: async (): Promise<Monitor> => {
      const response = await fetch(`/api/monitors/${id}`)
      if (!response.ok) {
        throw new Error('Failed to fetch monitor')
      }
      return response.json()
    },
    staleTime: 1 * 60 * 1000, // 1 minute
    refetchInterval: 15 * 1000, // Refetch every 15 seconds for detail view
    enabled: !!id,
  })
}

// Refresh single monitor
export function useRefreshMonitor() {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: async (monitorId: string) => {
      const response = await fetch(`/api/monitors/${monitorId}/check`, {
        method: 'POST',
      })
      if (!response.ok) {
        throw new Error('Failed to refresh monitor')
      }
      return response.json()
    },
    onSuccess: (data, monitorId) => {
      // Update the specific monitor in cache
      queryClient.setQueryData(['monitor', monitorId], data.monitor)
      
      // Update the monitor in the monitors list
      queryClient.setQueryData(['monitors'], (oldData: Monitor[] | undefined) => {
        if (!oldData) return oldData
        return oldData.map(monitor => 
          monitor.id === monitorId ? { ...monitor, ...data.monitor } : monitor
        )
      })
      
      // Optionally refetch to ensure consistency
      queryClient.invalidateQueries({ queryKey: ['monitors'] })
    },
  })
}

// Refresh all monitors
export function useRefreshAllMonitors() {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: async () => {
      const response = await fetch('/api/monitors/check-all', {
        method: 'POST',
      })
      if (!response.ok) {
        throw new Error('Failed to refresh monitors')
      }
      return response.json()
    },
    onSuccess: () => {
      // Invalidate and refetch all monitor queries
      queryClient.invalidateQueries({ queryKey: ['monitors'] })
      queryClient.invalidateQueries({ queryKey: ['monitor'] })
    },
  })
}

// Add new monitor
export function useAddMonitor() {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: async (monitorData: {
      name: string
      url: string
      interval: number
      categoryId?: string
    }) => {
      const response = await fetch('/api/monitors', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(monitorData),
      })
      if (!response.ok) {
        throw new Error('Failed to add monitor')
      }
      return response.json()
    },
    onSuccess: () => {
      // Refetch monitors list
      queryClient.invalidateQueries({ queryKey: ['monitors'] })
    },
  })
}

// Update monitor
export function useUpdateMonitor() {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: async ({ id, ...data }: {
      id: string
      name?: string
      url?: string
      interval?: number
      categoryId?: string
    }) => {
      const response = await fetch(`/api/monitors/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!response.ok) {
        throw new Error('Failed to update monitor')
      }
      return response.json()
    },
    onSuccess: (data, variables) => {
      // Update specific monitor
      queryClient.setQueryData(['monitor', variables.id], data)
      // Update monitors list
      queryClient.invalidateQueries({ queryKey: ['monitors'] })
    },
  })
}

// Delete monitor
export function useDeleteMonitor() {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: async (monitorId: string) => {
      const response = await fetch(`/api/monitors/${monitorId}`, {
        method: 'DELETE',
      })
      if (!response.ok) {
        throw new Error('Failed to delete monitor')
      }
      return response.json()
    },
    onSuccess: (_, monitorId) => {
      // Remove from cache
      queryClient.removeQueries({ queryKey: ['monitor', monitorId] })
      // Refetch monitors list
      queryClient.invalidateQueries({ queryKey: ['monitors'] })
    },
  })
}