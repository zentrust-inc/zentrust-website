"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Leaf, TreePine, Microscope, Globe } from "lucide-react";
import { GlobalHero } from "@/components/hero/GlobalHero";

export default function StewardshipPortalPage() {
  return (
    <div className="min-h-screen">
      <GlobalHero
        kicker="Stewardship"
        headline="Research on regenerative systems and land stewardship."
        dek="Documentation of patterns in ecological restoration and community-based land management approaches for educational use."
        belowAnchorId="content"
        mode="answer"
      />

      <div id="content" className="pt-6 scroll-mt-24">
        {/* INTRODUCTION */}
        <section className="pt-10 md:pt-12 pb-12">
          <div className="max-w-4xl mx-auto px-6 space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-center text-neutral-900">
              Introduction to the Stewardship Model
            </h2>

            <p className="text-[16px] md:text-[17px] text-muted-foreground leading-relaxed">
              ZenTrust’s stewardship work is grounded in long-term observation of 
              living systems. Across land, water, and community contexts, we 
              document how regenerative patterns emerge when ecological processes 
              operate with minimal disruption. The focus is on recording 
              observations across different environments when extraction 
              pressure is reduced.
            </p>

            <p className="text-[16px] md:text-[17px] text-muted-foreground leading-relaxed">
              Our research emphasizes documentation over specific outcome claims. 
              Instead of promoting specific results, we examine the conditions 
              under which soil structure, forest systems, and communities 
              sustain stewardship efforts. This approach allows for 
              comparison across regions without collapsing complex systems 
              into simplified metrics.
            </p>

            <p className="text-[16px] md:text-[17px] text-muted-foreground leading-relaxed">
              This stewardship model serves as a public record of observed 
              ecological behavior. By making these patterns visible, ZenTrust 
              supports open education and independent research into 
              regenerative systems.
            </p>
          </div>
        </section>

        {/* RESEARCH AREAS */}
        <section className="pt-10 md:pt-12 pb-10 border-t border-border/40">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Research Documentation
            </h2>

            <p className="text-[16px] md:text-[17px] text-muted-foreground max-w-2xl mx-auto mb-8">
              ZenTrust compiles data on regenerative land management and 
              ecological restoration across multiple observation areas.
            </p>

            <div className="grid md:grid-cols-3 gap-5">
              <div className="rounded-2xl border border-border/40 px-6 py-6 text-center bg-white shadow-sm">
                <Leaf className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-lg mb-2">Soil Research</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Documenting soil structure patterns and biological 
                  regeneration across varying management approaches.
                </p>
              </div>

              <div className="rounded-2xl border border-border/40 px-6 py-6 text-center bg-white shadow-sm">
                <TreePine className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-lg mb-2">Ecosystem Patterns</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Observing forest system recovery and the conditions 
                  that support natural ecological progression.
                </p>
              </div>

              <div className="rounded-2xl border border-border/40 px-6 py-6 text-center bg-white shadow-sm">
                <Microscope className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-lg mb-2">Observation Methods</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Standardizing documentation and analysis approaches for 
                  long-term ecological research.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* RESEARCH FOCUS AREAS */}
        <section className="pt-10 md:pt-12 pb-10 bg-neutral-50 border-y border-border/40">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-center mb-4">
              Focus Areas
            </h2>

            <p className="text-[16px] md:text-[17px] text-muted-foreground max-w-3xl mx-auto text-center mb-10">
              Documenting systemic patterns across ecological and 
              community engagement contexts.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-border/40 bg-white px-6 py-6">
                <Leaf className="h-7 w-7 text-primary mb-3" />
                <h3 className="font-semibold mb-2">Regenerative Ecology</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Documentation of forest, soil, and watershed patterns 
                  across diverse ecological environments.
                </p>
              </div>

              <div className="rounded-2xl border border-border/40 bg-white px-6 py-6">
                <TreePine className="h-7 w-7 text-primary mb-3" />
                <h3 className="font-semibold mb-2">Community Documentation</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Studying how communities interact with and maintain 
                  land stewardship practices.
                </p>
              </div>

              <div className="rounded-2xl border border-border/40 bg-white px-6 py-6">
                <Microscope className="h-7 w-7 text-primary mb-3" />
                <h3 className="font-semibold mb-2">Knowledge Compilation</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Recording and preserving ecological knowledge patterns 
                  found across different regions.
                </p>
              </div>

              <div className="rounded-2xl border border-border/40 bg-white px-6 py-6">
                <Globe className="h-7 w-7 text-primary mb-3" />
                <h3 className="font-semibold mb-2">Open Collaboration</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Coordinating with independent researchers to share and 
                  document findings for the public domain.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SUPPORT SECTION: HIGH COMPLIANCE FOR GOOGLE ADS 2026 */}
        <section className="pt-16 pb-24 text-center">
          <div className="max-w-3xl mx-auto px-6 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                Organization Stewardship
              </span>
              <h2 className="text-2xl md:text-3xl font-semibold">
                Public Support & Open Research
              </h2>
            </div>

            <p className="text-[17px] md:text-lg text-muted-foreground leading-relaxed">
              ZenTrust is a 501(c)(3) non-profit research organization. Our 
              documentation efforts are sustained through voluntary public 
              support, ensuring research findings remain open-access and 
              independently verifiable.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button asChild size="lg" className="px-8">
                <Link href="/stewardship/checkout">
                  Support This Research
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="px-8">
                <Link href="/research">
                  View Published Data
                </Link>
              </Button>
            </div>
            
            <p className="text-[11px] text-muted-foreground mt-4">
              Contributions are tax-deductible to the extent permitted by law. 
              EIN: 33-4318487.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
