"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Leaf, Users, TreePine, BookOpen, Microscope } from "lucide-react"

interface Metric {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  value: number
  suffix: string
  label: string
  text: string
}

const impactMetrics: Metric[] = [
  {
    icon: TreePine,
    value: 50000,
    suffix: "+",
    label: "Ecosystem Layers Under Study",
    text: "Observation of canopy, understory, shrubs, herbs, and root systems in syntropic forest research sites.",
  },
  {
    icon: Leaf,
    value: 2500,
    suffix: "+",
    label: "Watershed Zones Monitored",
    text: "Micro-watershed zones observed for self-renewing, drought-resilient ecological behavior patterns.",
  },
  {
    icon: Users,
    value: 1200,
    suffix: "+",
    label: "Families Documented",
    text: "Observation of autonomy, dignity, and regenerative livelihood patterns in community research.",
  },
  {
    icon: Microscope,
    value: 15,
    suffix: "",
    label: "Research Initiatives",
    text: "Ecological and integrated health research studies underway.",
  },
  {
    icon: BookOpen,
    value: 8500,
    suffix: "+",
    label: "Hours of Research",
    text: "Documentation of ecological literacy and integrated health patterns.",
  },
]

function AnimatedCounter({
  end,
  suffix = "",
  isInView,
}: {
  end: number
  suffix?: string
  isInView: boolean
}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return

    let start: number | null = null
    const duration = 1800

    const animate = (t: number) => {
      if (!start) start = t
      const progress = Math.min((t - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * end))
      if (progress < 1) requestAnimationFrame(animate)
    }

    requestAnimationFrame(animate)
  }, [end, isInView])

  return (
    <>
      {count.toLocaleString()}
      {suffix}
    </>
  )
}

export function ImpactCounters() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.25 })

  return (
    <section ref={ref} className="w-full pt-10 md:pt-12">
      {/* INTRO — tight, no section boxing */}
      <motion.div
        className="max-w-[1500px] mx-auto px-6 text-center mb-6"
        initial={{ opacity: 0, y: 6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <p className="text-[18px] md:text-[20px] font-medium text-muted-foreground leading-snug">
          This work documents patterns in landscape recovery and community resilience.
          These observations reflect ongoing research at the intersection of ecology and human systems.
        </p>
      </motion.div>

      {/* METRICS GRID — grounded objects on the global surface */}
      <motion.div
        className="
          grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5
          gap-5
          max-w-[1600px] mx-auto px-6
        "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.08 } },
        }}
      >
        {impactMetrics.map((metric, i) => {
          const Icon = metric.icon
          return (
            <motion.div
              key={i}
              className="
                rounded-2xl
                bg-card
                border border-border/40
                px-6 py-6
                text-center
              "
              variants={{
                hidden: { opacity: 0, y: 18 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.45, ease: "easeOut" },
                },
              }}
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 220, damping: 22 }}
            >
              {/* ICON */}
              <div className="flex items-center justify-center mb-3">
                <Icon className="h-7 w-7 text-primary" />
              </div>

              {/* VALUE */}
              <div className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
                <AnimatedCounter
                  end={metric.value}
                  suffix={metric.suffix}
                  isInView={isInView}
                />
              </div>

              {/* LABEL */}
              <h3 className="text-base md:text-lg font-semibold tracking-tight mb-2">
                {metric.label}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-sm leading-relaxed text-muted-foreground">
                {metric.text}
              </p>
            </motion.div>
          )
        })}
      </motion.div>

      {/* OUTRO — minimal, no visual closure band */}
      <motion.div
        className="max-w-[1500px] mx-auto px-6 text-center mt-8"
        initial={{ opacity: 0, y: 6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <p className="text-lg md:text-xl font-medium text-foreground leading-snug">
          Research shows patterns between land health and community patterns.
        </p>
        <p className="mt-1 text-[18px] md:text-[20px] font-semibold text-primary">
          Each observation strengthens understanding of these connections.
        </p>
      </motion.div>
    </section>
  )
}
