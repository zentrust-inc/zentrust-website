"use client";

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
        dek="This page documents patterns in ecological restoration and community-based land management approaches."
        belowAnchorId="content"
        mode="answer"
      />

      <div id="content" className="pt-6 scroll-mt-24">
        {/* RESEARCH AREAS */}
        <section className="pt-10 md:pt-12 pb-10">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Research Documentation
            </h2>

            <p className="text-[16px] md:text-[17px] text-muted-foreground max-w-2xl mx-auto mb-8">
              ZenTrust documents patterns in regenerative land management
              and ecological restoration across multiple research areas.
            </p>

            <div className="grid md:grid-cols-3 gap-5">
              <div className="rounded-2xl border border-border/40 px-6 py-6 text-center">
                <Leaf className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-lg mb-2">Soil Research</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Documenting soil health patterns and regeneration timelines
                  across different land management approaches.
                </p>
              </div>

              <div className="rounded-2xl border border-border/40 px-6 py-6 text-center">
                <TreePine className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-lg mb-2">Ecosystem Patterns</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Observing how forest systems regenerate and what conditions
                  support natural recovery processes.
                </p>
              </div>

              <div className="rounded-2xl border border-border/40 px-6 py-6 text-center">
                <Microscope className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-lg mb-2">Research Methods</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Documentation of observation methods and analysis approaches
                  for ecological research.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* RESEARCH FOCUS */}
        <section className="pt-10 md:pt-12 pb-10 bg-[#faf7f2]">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-center mb-4">
              Research Focus Areas
            </h2>

            <p className="text-[16px] md:text-[17px] text-muted-foreground max-w-3xl mx-auto text-center mb-10">
              These areas document ZenTrust's research patterns across land systems
              and human community engagement.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-border/40 px-6 py-6">
                <Leaf className="h-7 w-7 text-primary mb-3" />
                <h3 className="font-semibold mb-2">Regenerative Ecology</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Documenting patterns in forest, soil, and watershed recovery
                  across different ecological contexts and land management approaches.
                </p>
              </div>

              <div className="rounded-2xl border border-border/40 px-6 py-6">
                <TreePine className="h-7 w-7 text-primary mb-3" />
                <h3 className="font-semibold mb-2">Community Patterns</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Studying how communities engage with land stewardship and what
                  patterns emerge in collaborative ecological management.
                </p>
              </div>

              <div className="rounded-2xl border border-border/40 px-6 py-6">
                <Microscope className="h-7 w-7 text-primary mb-3" />
                <h3 className="font-semibold mb-2">Cultural Documentation</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Recording traditional ecological knowledge and land management
                  practices across different cultural contexts.
                </p>
              </div>

              <div className="md:col-span-2 rounded-2xl border border-border/40 px-6 py-6">
                <Globe className="h-7 w-7 text-primary mb-3" />
                <h3 className="font-semibold mb-2">Research Collaboration</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Partnering with researchers, universities, and organizations to share
                  findings and deepen understanding of regenerative systems.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CLOSING */}
        <section className="pt-10 md:pt-12 pb-20 text-center">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Research and Documentation
            </h2>

            <p className="text-[17px] md:text-lg text-muted-foreground leading-relaxed mb-6">
              ZenTrust conducts observational research on regenerative land systems
              and ecological restoration patterns. All findings are published for
              public education.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/research">
                  View Research
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/learn">
                  Browse Learning
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
