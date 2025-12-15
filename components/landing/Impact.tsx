"use client"

import { Activity, Leaf, Users, FlaskConical } from 'lucide-react'
import { Counter, FadeIn, GradientBorderCard, Stagger, StaggerItem } from './animations'

const metrics = [
  { label: 'Trees Planted', value: 185000, suffix: '+', icon: Leaf },
  { label: 'Farmers Trained', value: 4200, suffix: '+', icon: Users },
  { label: 'Research Projects', value: 68, suffix: '', icon: FlaskConical },
  { label: 'Communities Served', value: 94, suffix: '', icon: Activity },
]

export function Impact() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(16,185,129,0.08),transparent_30%),radial-gradient(circle_at_15%_40%,rgba(6,182,212,0.06),transparent_26%)] dark:bg-[radial-gradient(circle_at_50%_10%,rgba(16,185,129,0.08),transparent_30%),radial-gradient(circle_at_15%_40%,rgba(6,182,212,0.06),transparent_26%)]" />
      <div className="relative mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-3 pb-10">
          <FadeIn className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Impact in motion
          </FadeIn>
          <FadeIn className="max-w-3xl text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Data-backed progress for ecosystems and the people who steward them.
          </FadeIn>
          <FadeIn className="max-w-3xl text-lg text-muted-foreground">
            Live metrics pulled from our field partners, sensor networks, and research cohorts so donors and communities stay aligned.
          </FadeIn>
        </div>

        <Stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => {
            const Icon = metric.icon
            return (
              <StaggerItem key={metric.label}>
                <GradientBorderCard className="h-full bg-card/70">
                  <div className="flex h-full flex-col gap-3 p-6">
                    <div className="flex items-center justify-between text-muted-foreground">
                      <div className="text-sm uppercase tracking-[0.18em] text-muted-foreground">
                        {metric.label}
                      </div>
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Icon className="h-4 w-4" />
                      </div>
                    </div>
                    <div className="text-3xl font-semibold text-foreground sm:text-4xl">
                      <Counter value={metric.value} suffix={metric.suffix} />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Verified by on-ground teams and remote-sensing models updated quarterly.
                    </p>
                  </div>
                </GradientBorderCard>
              </StaggerItem>
            )
          })}
        </Stagger>
      </div>
    </section>
  )
}
