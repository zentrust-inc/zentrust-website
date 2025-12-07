"use client"

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { SlideIn, FadeIn, GradientBorderCard } from './animations'

export function Vision() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50/50 via-white to-white py-20 text-foreground dark:from-slate-950 dark:via-slate-950 dark:to-slate-900 sm:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(16,185,129,0.12),transparent_32%),radial-gradient(circle_at_80%_0%,rgba(6,182,212,0.14),transparent_28%),linear-gradient(135deg,rgba(14,165,233,0.05),rgba(16,185,129,0.08))]" />
      <div className="absolute inset-4 rounded-[32px] bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.25),_transparent_45%)] blur-3xl dark:bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.08),_transparent_45%)]" />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6 sm:px-8 lg:px-10">
        <FadeIn className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
          Philosophy
        </FadeIn>

        <GradientBorderCard className="grid gap-12 bg-card/80 p-8 lg:grid-cols-2">
          <SlideIn direction="left" className="space-y-6">
            <p className="text-sm uppercase tracking-[0.18em] text-primary flex items-center gap-2">
              Inner flow <ArrowRight className="inline-block w-4 h-4" /> outer flow
            </p>
            <h3 className="text-3xl font-bold text-foreground sm:text-4xl">
              Regeneration is a systems loop-community well-being and ecological health fuel each other.
            </h3>
            <p className="text-lg text-muted-foreground">
              We pair bioregional mapping with lived experience to design interventions that move like water:
              slow, distributed, and enduring. Data is not just reported; it is shared back in rituals,
              dashboards, and open-source playbooks.
            </p>
          </SlideIn>

          <SlideIn direction="right" className="space-y-5">
            <div className="rounded-3xl border border-border bg-background p-6 backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                How we work
              </p>
              <ul className="mt-4 space-y-3 text-foreground">
                {[
                  { text: 'Cohort-based farmer training with regenerative practice sprints.', color: 'bg-primary' },
                  { text: 'Sensor + satellite pairs feeding bioregional digital twins.', color: 'bg-cyan-500' },
                  { text: 'Community-led governance for budget transparency and feedback loops.', color: 'bg-primary' },
                  { text: 'Independent research partners validating outcomes quarterly.', color: 'bg-cyan-500' },
                ].map((item, i) => (
                  <motion.li
                    key={item.text}
                    className="flex gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.15, duration: 0.5 }}
                    viewport={{ once: false, margin: '-20% 0px -20% 0px' }}
                  >
                    <span className={`mt-1 h-2 w-2 rounded-full ${item.color}`} />
                    {item.text}
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-primary/30 bg-gradient-to-r from-primary/10 to-emerald-500/10 p-6 dark:from-emerald-500/10 dark:to-cyan-500/10">
              <p className="text-sm uppercase tracking-[0.18em] text-primary">Signals we track</p>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {[
                  'Soil carbon & microbial density',
                  'Water retention & aquifer recharge',
                  'Biodiversity returns',
                  'Household livelihood gains',
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </SlideIn>
        </GradientBorderCard>
      </div>
    </section>
  )
}
