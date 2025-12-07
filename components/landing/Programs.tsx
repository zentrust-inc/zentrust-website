"use client"

import { motion } from 'framer-motion'
import { Leaf, Droplets, Satellite, GraduationCap, ArrowRight } from 'lucide-react'
import { FadeIn, GradientBorderCard, HoverLift, Stagger, StaggerItem } from './animations'

const programs = [
  {
    title: 'Climate-Smart Farms',
    description: 'High-resolution soil mapping, regenerative planting design, and farmer coaching to return carbon to the ground.',
    icon: Leaf,
    focus: 'Soil & Biodiversity',
  },
  {
    title: 'Water Security Labs',
    description: 'Watershed-scale diagnostics, community-built catchments, and AI-modeled recharge plans.',
    icon: Droplets,
    focus: 'Hydrology',
  },
  {
    title: 'Earth Observation Stack',
    description: 'Satellites + field sensors feeding open dashboards for local leaders and donors.',
    icon: Satellite,
    focus: 'Data Platform',
  },
  {
    title: 'Regenerative Academy',
    description: 'Training cohorts blending ancestral knowledge with applied research and in-field practicums.',
    icon: GraduationCap,
    focus: 'Learning',
  },
]

export function Programs() {
  return (
    <section className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-3 pb-12">
          <FadeIn className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Programs
          </FadeIn>
          <FadeIn className="max-w-3xl text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Built with local partners, powered by science, designed to scale.
          </FadeIn>
          <FadeIn className="max-w-3xl text-lg text-muted-foreground">
            Each initiative is co-created with the communities we serve, combining regenerative design, behavioral science, and open data.
          </FadeIn>
        </div>

        <Stagger className="grid gap-6 md:grid-cols-2">
          {programs.map((program) => {
            const Icon = program.icon
            return (
              <StaggerItem key={program.title}>
                <motion.div
                  whileHover={{ rotateX: 3, rotateY: -3, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 150, damping: 12 }}
                >
                  <HoverLift>
                    <GradientBorderCard className="h-full bg-card/80">
                      <div className="flex h-full flex-col gap-4 p-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                              <Icon className="h-5 w-5" />
                            </div>
                            <div>
                              <p className="text-xs uppercase tracking-[0.18em] text-primary/80">{program.focus}</p>
                              <h3 className="text-xl font-semibold text-foreground">{program.title}</h3>
                            </div>
                          </div>
                          <div className="h-10 w-10 rounded-full border border-border bg-background" />
                        </div>
                        <p className="text-base text-muted-foreground">{program.description}</p>
                        <div className="mt-auto flex items-center gap-2 text-sm font-semibold text-primary">
                          Discover program
                          <ArrowRight className="inline-block w-4 h-4 ml-1" />
                        </div>
                      </div>
                    </GradientBorderCard>
                  </HoverLift>
                </motion.div>
              </StaggerItem>
            )
          })}
        </Stagger>
      </div>
    </section>
  )
}
