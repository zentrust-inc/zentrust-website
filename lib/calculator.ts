// ZenTrust Research Utilities
// This file contains general utility functions for research documentation

export interface ResearchMetrics {
  data_points: number
  observation_period: number
  documentation_status: "preliminary" | "ongoing" | "completed"
}

// Neutral research metrics generator
// Returns descriptive placeholders with no implied outcomes or impact
export function calculateResearchMetrics(): ResearchMetrics {
  return {
    data_points: 0,
    observation_period: 0,
    documentation_status: "ongoing",
  }
}

// Basic unit conversion utilities for research documentation
export function normalizeMeasurement(value: number, unit: string): number {
  return value
}

export function calculateAverage(values: number[]): number {
  if (values.length === 0) return 0
  const sum = values.reduce((acc, val) => acc + val, 0)
  return sum / values.length
}

export function formatDuration(days: number): string {
  if (days < 30) return `${days} days`
  if (days < 365) return `${Math.round(days / 30)} months`
  return `${Math.round(days / 365)} years`
}

export const RESEARCH_CATEGORIES = [
  "regenerative_agriculture",
  "health_systems",
  "community_wellbeing",
  "ecological_restoration",
] as const

export type ResearchCategory = typeof RESEARCH_CATEGORIES[number]
