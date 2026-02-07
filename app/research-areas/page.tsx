"use client";

import Link from "next/link";
import { Eye, Waves, Sparkles, Microscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GlobalHero } from "@/components/hero/GlobalHero";

export default function ResearchAreasPage() {
  return (
    <div className="min-h-screen">
      <GlobalHero
        kicker="Our Work"
        headline="Documenting regenerative patterns through rigorous observation."
        dek="ZenTrust operates through staged research phases—prioritizing baseline ecological data and community stakeholder interviews before initiative launch."
        belowAnchorId="content"
        mode="confirm"
      />

      <div id="content" className="pt-10 scroll-mt-24">
        {/* FRAMING */}
        <section className="pb-10 border-b border-neutral-100">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-sm tracking-[0.25em] uppercase text-muted-foreground mb-4">
              Methodology: Systems Observation
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We do not deploy standardized solutions. Our research areas are 
              cultivated through long-term data collection and place-based 
              community collaboration.
            </p>
          </div>
        </section>

        {/* DELIVERY MODEL */}
        <section className="py-16 bg-neutral-50/50">
          <div className="max-w-5xl mx-auto px-6 space-y-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-center text-foreground">
              Our Research Staging Model
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-3">
                <h3 className="font-bold text-primary">Phase 1: Listening</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Led by local partners, we conduct baseline ecological readings 
                  and map cultural priorities. This ensures our research is 
                  accountable to the community living within the watershed.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="font-bold text-primary">Phase 2: Validation</h3>
                <h3 className="font-bold text-primary">Phase 2: Validation</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Methodologies for soil restoration and water retention are 
                  validated by scientific advisors and community assemblies 
                  to ensure they align with local livelihood needs.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="font-bold text-primary">Phase 3: Integration</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Oversight is shared across regional scientists, youth 
                  apprentices, and indigenous knowledge holders to shape 
                  educational curricula and research protocols.
                </p>
              </div>
            </div>
            
            <div className="flex justify-center pt-6">
              <Button asChild variant="outline">
                <Link href="/governance">View Stewardship Oversight</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* FEATURED RESEARCH AREA */}
        <section className="py-16 border-b border-neutral-100">
          <div className="max-w-4xl mx-auto px-6">
            <div className="inline-block bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full mb-4">
              ACTIVE RESEARCH AREA
            </div>
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">
              Regenerative Agriculture Observation
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              This initiative examines patterns in soil health and farm 
              ecosystem recovery, documenting the relationship between 
              agricultural practices and landscape-scale regeneration.
            </p>
            <p className="font-mono text-xs text-primary bg-primary/5 p-3 rounded-lg border border-primary/10">
              ⦿ Field note: Current status - baseline documentation of 
              rhizosphere biodiversity in watershed 4b.
            </p>
          </div>
        </section>

        {/* RESEARCH DOMAINS */}
        <section className="py-16">
          <div className="max-w-5xl mx-auto px-6 space-y-12">
            {/* EDUCATION */}
            <div className="flex gap-6">
              <div className="bg-white p-3 rounded-xl shadow-sm border border-neutral-100">
                <Eye className="h-6 w-6 text-primary" strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2 text-neutral-900">Education & Perception</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Our educational research focuses on "perception rebuilding"—
                  documenting how individuals re-engage with local ecological 
                  observation after periods of disconnection.
                </p>
              </div>
            </div>

            {/* CONSERVATION */}
            <div className="flex gap-6">
              <div className="bg-white p-3 rounded-xl shadow-sm border border-neutral-100">
                <Waves className="h-6 w-6 text-primary" strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2 text-neutral-900">Watershed Documentation</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Treating watersheds as living circulatory systems, we record 
                  water retention patterns and sedimentation rates to create 
                  open-access data for land stewards.
                </p>
              </div>
            </div>

            {/* COMMUNITY */}
            <div className="flex gap-6">
              <div className="bg-white p-3 rounded-xl shadow-sm border border-neutral-100">
                <Sparkles className="h-6 w-6 text-primary" strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2 text-neutral-900">Youth Apprenticeship Research</h4>
                <p className="text-muted-foreground leading-relaxed">
                  We document the clearing of professional and educational 
                  pathways for youth interested in regenerative land management 
                  and systems science.
                </p>
              </div>
            </div>

            {/* RESEARCH */}
            <div className="flex gap-6 pt-4">
              <div className="bg-white p-3 rounded-xl shadow-sm border border-neutral-100">
                <Microscope className="h-6 w-6 text-primary" strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2 text-neutral-900">Contextual Systems Science</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Integrating physiological, social, and contextual data to 
                  create a "whole science" approach to human and landscape health.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CLOSING */}
        <section className="py-20 text-center bg-neutral-900 text-white">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-4">Research Status</h2>
            <p className="text-neutral-400 text-lg mb-8 leading-relaxed">
              These research areas are in continuous development. 
              Observations are peer-reviewed by local partners before 
              public release.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/contact">Inquire about research participation</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
