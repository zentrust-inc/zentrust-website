"use client"

import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Leaf, Users, TreePine, BookOpen, Microscope } from 'lucide-react'

/**
 * These forward-looking metrics reflect ZenTrust’s planned ecological,
 * educational, and scientific initiatives for its first year of operation,
 * consistent with our IRS-approved charitable mission.
 */
const impactMetrics = [
  {
    icon: TreePine,
    value: 50000,
    label: 'Trees Planned',
    suffix: '+',
    description:
      'Our 12-month target for native tree planting across priority watershed and restoration sites.',
    color: 'text-green-600',
    bgColor: 'bg-green-100 dark:bg-green-900/20',
  },
  {
    icon: Users,
    value: 1200,
    label: 'Farmers to Train',
    suffix: '+',
    description:
      'Projected number of farmers and land stewards we aim to train in regenerative agriculture and sustainable land care.',
    color: 'text-blue-600',
    bgColor: 'bg-blue-100 dark:bg-blue-900/20',
  },
  {
    icon: Leaf,
    value: 2500,
    label: 'Acres Identified',
    suffix: '+',
    description:
      'Acres of land identified for long-term ecological restoration, watershed renewal, and community-led regeneration.',
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-100 dark:bg-emerald-900/20',
  },
  {
    icon: Microscope,
    value: 15,
    label: 'Research Studies',
    suffix: '',
    description:
      'Planned scientific studies advancing regenerative ecosystems and BPSS-aligned public health research.',
    color: 'text-purple-600',
    bgColor: 'bg-purple-100 dark:bg-purple-900/20',
  },
  {
    icon: BookOpen,
    value: 8500,
    label: 'Education Hours',
    suffix: '+',
    description:
      'Projected annual hours of learning, workshops, and community training in ecology, resilience, and wellness.',
    color: 'text-orange-600',
    bgColor: 'bg-orange-100 dark:bg-orange-900/20',
  },
]

interface AnimatedCounterProps {
  end: number
  duration?: number
  suffix?: string
  isInView: boolean
}

function AnimatedCounter({ end, duration = 2, suffix = '', isInView }: AnimatedCounterProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return

    let startTime: number | null = null
    const startCount = 0

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)

      const easeOutCubic = 1 - Math.pow(1 - progress, 3)
      const currentCount = Math.floor(easeOutCubic * (end - startCount) + startCount)

      setCount(currentCount)

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }

    requestAnimationFrame(animate)
  }, [end, duration, isInView])

  return <span>{count.toLocaleString()}{suffix}</span>
}

export function ImpactCounters() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Building <span className="gradient-text">Impact</span> Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            These are ZenTrust’s first-year program goals in ecological restoration,
            regenerative education, and scientific research — aligned with our
            nonprofit mission to advance public knowledge and environmental well-being.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {impactMetrics.map((metric, index) => {
            const Icon = metric.icon
            return (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="glass-card rounded-2xl p-8 h-full transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${metric.bgColor} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`h-8 w-8 ${metric.color}`} />
                  </div>

                  {/* Counter */}
                  <div className="text-4xl md:text-5xl font-bold text-foreground mb-3">
                    <AnimatedCounter
                      end={metric.value}
                      suffix={metric.suffix}
                      isInView={isInView}
                    />
                  </div>

                  <h3 className="text-lg font-semibold text-foreground mb-4">{metric.label}</h3>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {metric.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="glass-card rounded-2xl p-8 md:p-12 bg-gradient-to-r from-primary/10 to-emerald-500/10 border-primary/20">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Help Us Achieve These Milestones
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              ZenTrust’s first year sets the foundation for long-term ecological and
              educational impact. Your support directly accelerates restoration,
              research, and public education.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/donate"
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Support Our Work
              </motion.a>

              <motion.a
                href="/programs"
                className="btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Our Programs
              </motion.a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
