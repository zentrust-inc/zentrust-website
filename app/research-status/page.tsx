"use client"

import Link from "next/link"
import { TreePine, Users, Microscope, Hourglass } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GlobalHero } from "@/components/hero/GlobalHero"

export default function ResearchStatusPage() {
  return (
    <div className="min-h-screen">
      <GlobalHero
        kicker="Research Status"
        headline="Documentation of emerging ecological patterns."
        dek="ZenTrust prioritizes long-term observation. Before quantitative data is published, we establish qualitative baselines through patient environmental monitoring."
        belowAnchorId="content"
        mode="confirm"
      />

      <div id="content" className="pt-6">
      {/* TRANSITION LINE */}
      <section className="pb-8 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-sm text-muted-foreground italic">
            Ecological stabilization begins with baseline integrity. When primary 
            ecological functions are documented, systems research can proceed 
            with accuracy.
          </p>
        </div>
      </section>

      {/* CURRENT OBSERVATIONS */}
      <section className="pb-10 md:pb-12">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-xl md:text-2xl font-semibold text-center mb-10">
            Active Documentation Areas
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="rounded-2xl border border-neutral-200 bg-white px-6 py-8 text-center shadow-sm">
              <TreePine className="h-8 w-8 mx-auto mb-4 text-primary" strokeWidth={1.5} />
              <h3 className="font-bold mb-2">Ecological Baselines</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Watershed mapping and soil composition analysis are currently 
                underway to establish pre-intervention environmental benchmarks.
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-200 bg-white px-6 py-8 text-center shadow-sm">
              <Users className="h-8 w-8 mx-auto mb-4 text-primary" strokeWidth={1.5} />
              <h3 className="font-bold mb-2">Community Interviews</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Qualitative research regarding local land management history 
                and stakeholder priorities is being documented through 
                structured interviews.
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-200 bg-white px-6 py-8 text-center shadow-sm">
              <Microscope className="h-8 w-8 mx-auto mb-4 text-primary" strokeWidth={1.5} />
              <h3 className="font-bold mb-2">Systems Framework</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Integration of biological, social, and contextual factors 
                drawn from existing research literature to support whole-system 
                observation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2026 PUBLICATION */}
      <section className="py-16 bg-neutral-50 border-y border-neutral-200 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <Hourglass className="h-8 w-8 mx-auto mb-4 text-primary" strokeWidth={1.5} />
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-neutral-900">
            Initial Data Publication: 2026
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Standardizing our observation protocols is our current focus. 
            Validated environmental indicators and research findings will be 
            compiled and shared openly starting in 2026.
          </p>
        </div>
      </section>

      {/* CLOSING */}
      <section className="py-20 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-neutral-900">
            Ongoing Documentation
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Patterns in land recovery and community engagement require time to 
            surface. We maintain an observing presence, ensuring data 
            integrity through consistent field documentation.
          </p>
          
          <div className="flex justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/research-areas">Explore Research Areas</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/governance">Review Oversight Policies</Link>
            </Button>
          </div>
        </div>
      </section>

      </div>
    </div>
  )
}
