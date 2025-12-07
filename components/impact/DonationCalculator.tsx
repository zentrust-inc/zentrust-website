"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, Leaf, Users, TreePine, Microscope, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { calculateDonationImpact, DONATION_TIERS } from '@/lib/calculator'

const impactIcons = {
  trees: TreePine,
  households: Users,
  acres: Leaf,
  research_plots: Microscope,
}

export function DonationCalculator() {
  const [amount, setAmount] = useState(50)
  const [impact, setImpact] = useState(calculateDonationImpact(50))
  const [selectedTier, setSelectedTier] = useState<number | null>(null)

  useEffect(() => {
    setImpact(calculateDonationImpact(amount))
  }, [amount])

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newAmount = parseInt(e.target.value)
    setAmount(newAmount)
    setSelectedTier(null)
  }

  const handleTierClick = (tierAmount: number) => {
    setAmount(tierAmount)
    setSelectedTier(tierAmount)
  }

  const handleDonate = () => {
    // TODO: Integrate with actual payment processing
    console.log('Processing donation of $', amount)
    // This would redirect to Stripe checkout or similar
    window.open('/donate/checkout', '_blank')
  }

  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-emerald-500/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Calculate Your <span className="gradient-text">Impact</span>
            </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
  See how your contribution helps restore ecosystems and uplift human well-being.<br />
  <span className="italic font-medium animate-heal-text">
    When we help heal the Earth, we begin to heal ourselves.
  </span>
</p>

          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Input Section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Amount Input */}
              <div className="glass-card rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                  <Heart className="h-6 w-6 text-primary mr-3" />
                  Choose Your Donation
                </h3>

                {/* Quick Tier Buttons */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {DONATION_TIERS.map((tier) => (
                    <button
                      key={tier.amount}
                      onClick={() => handleTierClick(tier.amount)}
                      className={`p-4 rounded-xl border-2 transition-all duration-200 text-left ${
                        selectedTier === tier.amount
                          ? 'border-primary bg-primary/10 text-primary'
                          : 'border-border hover:border-primary/50 hover:bg-muted/50'
                      }`}
                    >
                      <div className="text-lg font-bold">
                        ${tier.amount}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {tier.label}
                      </div>
                    </button>
                  ))}
                </div>

                {/* Custom Amount Slider */}
                <div className="space-y-4">
                  <label className="block text-sm font-medium text-foreground">
                    Or enter a custom amount
                  </label>
                  <div className="relative">
                    <input
                      type="range"
                      min="5"
                      max="1000"
                      value={amount}
                      onChange={handleSliderChange}
                      className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer slider"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>$5</span>
                      <span>$1000+</span>
                    </div>
                  </div>
                  
                  {/* Amount Display */}
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-primary">
                      ${amount}
                    </span>
                    <span className="text-muted-foreground">per month</span>
                  </div>
                </div>
              </div>

              {/* Recurring Option */}
              <div className="glass-card rounded-xl p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-foreground">Make it Monthly</h4>
                    <p className="text-sm text-muted-foreground">
                      Recurring donations provide steady support for our programs
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-muted peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
              </div>
            </motion.div>

            {/* Impact Display */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={amount}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="glass-card rounded-2xl p-8"
                >
                  <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                    <TrendingUp className="h-6 w-6 text-primary mr-3" />
                    Your Impact
                  </h3>

                  {/* Impact Description */}
                  <div className="bg-primary/10 rounded-xl p-4 mb-6">
                    <p className="text-foreground font-medium">
                      {impact.description}
                    </p>
                  </div>

                  {/* Impact Metrics */}
                  <div className="space-y-4">
                    {[
                      { key: 'trees', label: 'Trees Planted', value: impact.trees, icon: TreePine, color: 'text-green-600' },
                      { key: 'households', label: 'Households Supported', value: impact.households, icon: Users, color: 'text-blue-600' },
                      { key: 'acres', label: 'Acres Restored', value: impact.acres, icon: Leaf, color: 'text-emerald-600' },
                    ].map((metric) => {
                      const Icon = metric.icon
                      return (
                        <div key={metric.key} className="flex items-center justify-between p-4 bg-muted/50 rounded-xl">
                          <div className="flex items-center space-x-3">
                            <Icon className={`h-5 w-5 ${metric.color}`} />
                            <span className="text-foreground font-medium">{metric.label}</span>
                          </div>
                          <span className="text-lg font-bold text-foreground">
                            {metric.value.toLocaleString()}
                          </span>
                        </div>
                      )
                    })}
                  </div>

                  {/* Research Plots for larger donations */}
                  {impact.research_plots > 0 && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 }}
                      className="mt-6 p-4 bg-gradient-to-r from-purple-100 to-purple-200 dark:from-purple-900/20 dark:to-purple-800/20 rounded-xl border border-purple-200 dark:border-purple-700"
                    >
                      <div className="flex items-center space-x-3">
                        <Microscope className="h-6 w-6 text-purple-600" />
                        <div>
                          <div className="font-semibold text-purple-900 dark:text-purple-100">
                            Research Plot Sponsored
                          </div>
                          <div className="text-sm text-purple-700 dark:text-purple-300">
                            Supporting scientific advancement in regenerative agriculture
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Donate Button */}
                  <Button
                    onClick={handleDonate}
                    size="lg"
                    className="w-full mt-8 group"
                  >
                    Donate ${amount}/month
                    <Heart className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                  </Button>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}