// ------------------------------
// HYBRID DONATION IMPACT ENGINE
// ZenTrust.org
// ------------------------------

export interface DonationImpact {
  trees: number
  households: number
  acres: number
  research_plots: number
  description: string
  category: 'micro' | 'small' | 'medium' | 'large' | 'major'

  // NEW: Future-facing metrics for /donate/checkout
  expandedImpact: {
    research_hours: number
    education_hours: number
    community_programs: number
    tek_partnerships_supported: number
  }
}

// Base symbolic conversions (non-literal, IRS-safe)
const TREES_PER_DOLLAR = 0.25       // symbolic reforestation impact
const HOUSEHOLDS_PER_DOLLAR = 0.012 // symbolic community impact
const ACRES_PER_DOLLAR = 0.001      // symbolic ecological impact
const RESEARCH_PLOT_COST = 200      // symbolic cost of sponsoring research

// NEW symbolic values for deeper impact mapping
const RESEARCH_HOURS_PER_DOLLAR = 0.05       // 1 hour per $20
const EDUCATION_HOURS_PER_DOLLAR = 0.08      // 1 hour per $12.5
const COMMUNITY_PROGRAMS_PER_DOLLAR = 0.002  // symbolic micro-contribution
const TEK_PARTNERSHIP_PER_DOLLAR = 0.0005    // symbolic global impact

export function calculateDonationImpact(amount: number): DonationImpact {
  // ------------------------------
  // BASE IMPACT (Homepage Calculator)
  // ------------------------------

  const trees = Math.floor(amount * TREES_PER_DOLLAR)
  const households = Math.floor(amount * HOUSEHOLDS_PER_DOLLAR)
  const acres = amount * ACRES_PER_DOLLAR

  // ------------------------------
  // CATEGORY + DESCRIPTION LOGIC
  // ------------------------------

  let description = ''
  let category: DonationImpact['category'] = 'micro'
  let research_plots = 0

  if (amount >= 500) {
    category = 'major'
    description =
      'Advances regenerative research, community education, and global ecological partnerships.'
    research_plots = Math.floor(amount / RESEARCH_PLOT_COST)
  } else if (amount >= 200) {
    category = 'large'
    description =
      'Supports regenerative agriculture studies, ecological restoration, and scientific advancement.'
    research_plots = Math.floor(amount / RESEARCH_PLOT_COST)
  } else if (amount >= 100) {
    category = 'medium'
    description =
      'Strengthens farmer training, regenerative land practices, and community wellness programs.'
  } else if (amount >= 50) {
    category = 'small'
    description =
      'Helps restore biodiversity, support watershed regeneration, and expand public education efforts.'
  } else if (amount >= 25) {
    category = 'micro'
    description =
      'Contributes to ecological restoration, education access, and regenerative community initiatives.'
  } else {
    category = 'micro'
    description = 'Supports ZenTrust’s mission of regeneration, research, and public well-being.'
  }

  // ------------------------------
  // APPLY MINIMUM SYMBOLIC VALUES
  // (So small gifts still feel meaningful)
  // ------------------------------

  const adjustedTrees = Math.max(trees, category === 'micro' ? 1 : 10)
  const adjustedHouseholds = Math.max(households, category === 'micro' ? 1 : 5)
  const adjustedAcres = Math.max(acres, category === 'micro' ? 0.1 : 1)

  // ------------------------------
  // EXPANDED IMPACT (For Checkout Page)
  // ------------------------------

  const expandedImpact = {
    research_hours: +(amount * RESEARCH_HOURS_PER_DOLLAR).toFixed(1),
    education_hours: +(amount * EDUCATION_HOURS_PER_DOLLAR).toFixed(1),
    community_programs: +(amount * COMMUNITY_PROGRAMS_PER_DOLLAR).toFixed(2),
    tek_partnerships_supported: +(amount * TEK_PARTNERSHIP_PER_DOLLAR).toFixed(3)
  }

  return {
    trees: adjustedTrees,
    households: adjustedHouseholds,
    acres: Math.round(adjustedAcres * 10) / 10,
    research_plots,
    description,
    category,
    expandedImpact
  }
}

// ------------------------------
// UPDATED TIERS (Mission-Aligned)
// ------------------------------

export const DONATION_TIERS = [
  { amount: 10, label: 'Seed the Soil' },
  { amount: 25, label: 'Starter Regenerator' },
  { amount: 50, label: 'Watershed Restorer' },
  { amount: 100, label: 'Community Educator' },
  { amount: 200, label: 'Research Sponsor' },
  { amount: 500, label: 'Regeneration Partner' }
]
