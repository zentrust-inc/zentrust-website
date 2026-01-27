"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Leaf, TreePine, Microscope, Heart, Globe } from "lucide-react";
import { GlobalHero } from "@/components/hero/GlobalHero";

export default function StewardshipPortalPage() {
  return (
    <div className="min-h-screen">
      <GlobalHero
        kicker="Stewardship"
        headline="A quiet portal for regenerative stewardship."
        dek="Participation is voluntary and patient. Enter when you are ready."
        belowAnchorId="content"
        mode="answer"
      />

      <div id="content" className="pt-6 scroll-mt-24">
        {/* PATHWAYS */}
        <section className="pt-10 md:pt-12 pb-10">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Pathways of Quiet Participation
            </h2>

            <p className="text-[16px] md:text-[17px] text-muted-foreground max-w-2xl mx-auto mb-8">
              These are not tiers or transactions.
              <br />
              They are metaphors for how one might participate
              in long-term regenerative work.
            </p>

            <div className="grid md:grid-cols-3 gap-5">
              <div className="rounded-2xl border border-border/40 px-6 py-6 text-center">
                <Leaf className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-lg mb-2">Root</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Foundations. Soil. Beginnings.
                  Life taking hold quietly.
                </p>
              </div>

              <div className="rounded-2xl border border-border/40 px-6 py-6 text-center">
                <TreePine className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-lg mb-2">Rise</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Canopy forming.
                  Regenerative structures emerging.
                </p>
              </div>

              <div className="rounded-2xl border border-border/40 px-6 py-6 text-center">
                <Microscope className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-lg mb-2">Observe</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Inquiry and listening.
                  Learning from living systems.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* STEWARDSHIP FOCUS */}
        <section className="pt-10 md:pt-12 pb-10 bg-[#faf7f2]">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-center mb-4">
              Our Stewardship Focus
            </h2>

            <p className="text-[16px] md:text-[17px] text-muted-foreground max-w-3xl mx-auto text-center mb-10">
              These five pillars guide ZenTrust’s work across land, people,
              culture, and long-term wellbeing.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-border/40 px-6 py-6">
                <Leaf className="h-7 w-7 text-primary mb-3" />
                <h3 className="font-semibold mb-2">Regenerative Ecology</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Restoring forests, soils, and watersheds so ecosystems can
                  recover resilience and diversity.
                </p>
              </div>

              <div className="rounded-2xl border border-border/40 px-6 py-6">
                <Heart className="h-7 w-7 text-primary mb-3" />
                <h3 className="font-semibold mb-2">Holistic Human Wellbeing</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Supporting wellbeing through integrated physical, emotional,
                  social, and spiritual systems.
                </p>
              </div>

              <div className="rounded-2xl border border-border/40 px-6 py-6">
                <TreePine className="h-7 w-7 text-primary mb-3" />
                <h3 className="font-semibold mb-2">Community Upliftment</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Strengthening regenerative livelihoods and shared leadership
                  over time.
                </p>
              </div>

              <div className="rounded-2xl border border-border/40 px-6 py-6">
                <Microscope className="h-7 w-7 text-primary mb-3" />
                <h3 className="font-semibold mb-2">Cultural Preservation</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Protecting cultural memory and ecological knowledge across
                  generations.
                </p>
              </div>

              <div className="md:col-span-2 rounded-2xl border border-border/40 px-6 py-6">
                <Globe className="h-7 w-7 text-primary mb-3" />
                <h3 className="font-semibold mb-2">Global Partnerships</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Collaborating with aligned organizations to share learning and
                  scale restoration.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CLOSING */}
        <section className="pt-10 md:pt-12 pb-20 text-center">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Stewardship Is a Relationship
            </h2>

            <p className="text-[17px] md:text-lg text-muted-foreground leading-relaxed mb-6">
              We do not rush.
              <br />
              We do not extract.
              <br />
              We cultivate conditions and allow what is ready to emerge.
            </p>

            <Button asChild size="lg">
              <Link href="/stewardship/checkout">
                Enter the portal
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
