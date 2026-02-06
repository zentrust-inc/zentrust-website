// ZenTrust Research Utilities
// This file contains general utility functions for research documentation

export interface ResearchMetrics {
  documentation_hours: number
  research_areas: number
  ecological_zones: number
  community_patterns: number
}

// Generates neutral, educational research documentation metrics
export function calculateResearchMetrics(): ResearchMetrics {
  return {
    documentation_hours: 120,
    research_areas: 6,
    ecological_zones: 4,
    community_patterns: 9,
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
