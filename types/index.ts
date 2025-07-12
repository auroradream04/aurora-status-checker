import { CheckStatus } from '../prisma/generated/client'

export interface MonitorWithLatestCheck {
  id: string
  name: string
  url: string
  interval: number
  isActive: boolean
  userId: string
  createdAt: Date
  updatedAt: Date
  checks: {
    id: string
    status: CheckStatus
    statusCode: number | null
    responseTime: number | null
    error: string | null
    checkedAt: Date
  }[]
}

export interface CheckResult {
  status: CheckStatus
  statusCode: number | null
  responseTime: number | null
  error: string | null
}

export interface MonitorFormData {
  name: string
  url: string
  interval?: number
}

export interface IncidentData {
  id: string
  monitorId: string
  startedAt: Date
  resolvedAt: Date | null
  status: string
  checks: string[]
}