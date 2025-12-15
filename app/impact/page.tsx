"use client"

import { motion } from "framer-motion"
import { TreePine, Users, Microscope, Hourglass } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ImpactPage() {
  return (
    <div className="min-h-screen pt-16">

      {/* HERO */}
      <section className="pt-14 md:pt-18 pb-10 text-center">
        <div className="max-w-3xl mx-auto px-6">

          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Impact Begins Before Results
          </motion.h1>

          <motion.p
            className="text-lg text-muted-foreground leading-relaxed"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            Before numbers appear, work is already underway.
            Quiet, patient, and mostly unseen.
          </motion.p>

        </div>
      </section>

      {/* CINEMATIC BPSS VIDEO */}
      <section className="pt-10 md:pt-12 pb-12">
        <div className="max-w-6xl mx-auto px-6">

          <div className="aspect-video rounded-2xl overflow-hidden border border-border/40">
            <video
              className="w-full h-full object-cover"
              src="/video/impact/bpss-roots-60s.mp4"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>

          <p className="text-sm text-muted-foreground text-center mt-4 max-w-3xl mx-auto">
            Healing begins underground. When one root is damaged, the whole system weakens.
            When care is restored, healing propagates naturally.
          </p>

        </div>
      </section>

      {/* WHAT IS ALREADY MOVING */}
      <section className="pt-12 md:pt-14 pb-12">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">
            What Is Already Moving
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            {/* Ecology */}
            <div className="rounded-2xl border border-border/40 px-6 py-6 text-center">
              <TreePine className="h-7 w-7 mx-auto mb-3 text-muted-foreground" strokeWidth={1} />
              <h3 className="font-semibold mb-2">The Land</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Baselines are being established.
                Watersheds read carefully.
                Soil understood before intervention.
              </p>
            </div>

            {/* Community */}
            <div className="rounded-2xl border border-border/40 px-6 py-6 text-center">
              <Users className="h-7 w-7 mx-auto mb-3 text-muted-foreground" strokeWidth={1} />
              <h3 className="font-semibold mb-2">The People</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Trust forms before programs.
                Youth pathways are not built.
                They are cleared.
              </p>
            </div>

            {/* Science */}
            <div className="rounded-2xl border border-border/40 px-6 py-6 text-center">
              <Microscope className="h-7 w-7 mx-auto mb-3 text-muted-foreground" strokeWidth={1} />
              <h3 className="font-semibold mb-2">The Framework</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Bio-Psycho-Social-Spiritual research
                prepared to honor body, mind,
                community, and meaning together.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 2026 SECTION */}
      <section className="pt-12 md:pt-14 pb-12 text-center">
        <div className="max-w-3xl mx-auto px-6">

          <Hourglass className="h-7 w-7 mx-auto mb-4 text-muted-foreground" strokeWidth={1} />

          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            First Measurable Outcomes in 2026
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed">
            The foundations are already in place.
            Ecological, community, and research indicators
            will emerge in time.
            Measured carefully.
            Shared openly.
          </p>

        </div>
      </section>

      {/* CLOSING */}
      <section className="pt-14 md:pt-18 pb-16 text-center">
        <div className="max-w-3xl mx-auto px-6">

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            We Are Not Just Planting Trees.
            <br />
            We Are Planting Time.
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            If you believe that foundations matter more than headlines,
            we invite you to flow with us.
            Your stewardship ensures that this work
            remains quiet, patient, and true.
          </p>

          <Button asChild variant="outline">
            <Link href="/stewardship">
              Enter the Flow
            </Link>
          </Button>

        </div>
      </section>

    </div>
  )
}
