import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatNumber(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M'
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K'
  }
  return num.toString()
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}

export function calculateImpact(amount: number): {
  trees: number
  households: number
  acres: number
  description: string
} {
  const treesPerDollar = 0.2
  const householdsPerDollar = 0.008
  const acresPerDollar = 0.0008
  
  const trees = Math.floor(amount * treesPerDollar)
  const households = Math.floor(amount * householdsPerDollar)
  const acres = Math.floor(amount * acresPerDollar)
  
  let description = ''
  if (amount >= 200) {
    description = `Sponsors a regenerative research plot`
  } else if (amount >= 50) {
    description = `Trains ${Math.max(1, Math.floor(trees / 100))} farmers`
  } else if (amount >= 25) {
    description = `Restores ${Math.max(1, Math.floor(acres * 5))} m² of watershed`
  } else if (amount >= 10) {
    description = `Plants ${Math.max(1, Math.floor(trees / 2))} trees`
  } else {
    description = `Supports ${Math.max(1, Math.floor(households / 2))} sustainable initiatives`
  }
  
  return { trees, households, acres, description }
}