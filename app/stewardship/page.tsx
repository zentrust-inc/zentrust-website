"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Leaf, TreePine, Microscope, Heart } from "lucide-react"

export default function StewardshipPortalPage() {
  return (
    <div className="min-h-screen pt-16">

      {/* HERO — calm, compressed */}
      <section className="pt-14 md:pt-18 pb-10 text-center">
        <div className="max-w-3xl mx-auto px-6">

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
            A Quiet Portal for
            <span className="gradient-text block">Regenerative Stewardship</span>
          </h1>

          <p className="text-[17px] md:text-lg text-muted-foreground leading-relaxed">
            Participation is not asked for.
            <br />
            It arises naturally — like water finding its way downhill,
            or roots reaching for deeper soil.
            <span className="italic block mt-2">
              Nature does not hurry, yet everything is accomplished.
            </span>
          </p>

          <Button asChild size="lg" className="mt-6">
            <Link href="/stewardship/checkout">
              <Heart className="h-5 w-5 mr-2" />
              Enter the Stewardship Portal
            </Link>
          </Button>

          <p className="text-xs text-muted-foreground mt-4">
            ZenTrust is a 501(c)(3) public charity · EIN 33-4318487
          </p>

        </div>
      </section>

      {/* PATHWAYS — no new surface, no borders */}
      <section className="pt-10 md:pt-12 pb-10">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Pathways of Quiet Participation
          </h2>

          <p className="text-[16px] md:text-[17px] text-muted-foreground max-w-2xl mx-auto mb-8">
            These are not tiers or transactions —
            only metaphors for how one might choose to participate
            in the long work of regeneration.
          </p>

          <div className="grid md:grid-cols-3 gap-5">

            {/* Root */}
            <div className="rounded-2xl border border-border/40 px-6 py-6 text-center">
              <Leaf className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-lg mb-2">Root</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Foundations. Soil. Beginnings.
                The subtle intelligence of life taking hold.
              </p>
            </div>

            {/* Rise */}
            <div className="rounded-2xl border border-border/40 px-6 py-6 text-center">
              <TreePine className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-lg mb-2">Rise</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Canopy forming. Water cycles stabilizing.
                Regenerative structures emerging.
              </p>
            </div>

            {/* Observe */}
            <div className="rounded-2xl border border-border/40 px-6 py-6 text-center">
              <Microscope className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-lg mb-2">Observe</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Inquiry. Science. Listening carefully
                to what ecosystems reveal.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CLOSING — gentle continuation, no reset */}
      <section className="pt-10 md:pt-12 pb-20 text-center">
        <div className="max-w-3xl mx-auto px-6">

          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Stewardship is a Relationship
          </h2>

          <p className="text-[17px] md:text-lg text-muted-foreground leading-relaxed mb-6">
            We do not rush.
            <br />
            We do not ask.
            <br />
            We cultivate conditions —
            and allow what is ready to emerge.
          </p>

          <Button asChild size="lg">
            <Link href="/stewardship/checkout">
              Enter the Portal
            </Link>
          </Button>

        </div>
      </section>

    </div>
  )
}
