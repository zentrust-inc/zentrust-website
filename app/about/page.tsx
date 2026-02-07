"use client"

import Link from "next/link"
import { Waves, Feather, Microscope, Users, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GlobalHero } from "@/components/hero/GlobalHero"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <GlobalHero
        kicker="About ZenTrust"
        headline="Regeneration begins with relationship, not urgency."
        dek="ZenTrust is a 501(c)(3) public charity documenting the intersections of land, science, and human systems. We observe living systems rather than treating them as broken machines."
        belowAnchorId="content"
        mode="confirm"
        secondaryCta={{ label: "Read more", href: "#content" }}
      />

      <div id="content" className="pt-10">
      {/* OUR PERSPECTIVE */}
      <section className="pt-10 md:pt-12 pb-10">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-sm tracking-[0.25em] uppercase text-muted-foreground mb-4">
            Our Perspective
          </h2>

          <h3 className="text-2xl md:text-3xl font-semibold mb-6">
            We Do Not See Problems. We See Living Systems.
          </h3>

          <p className="text-muted-foreground leading-relaxed space-y-3">
            <span className="block">
              Regeneration is not a project, a product, or a trend. 
              It is a way of seeing.
            </span>
            <span className="block">
              Landscapes are not broken machines. 
              Communities are not deficits to be fixed. 
              Human wellbeing is not a siloed outcome.
            </span>
            <span className="block">
              They are living systems capable of restoring themselves 
              when the right conditions are present.
            </span>
            <span className="block">
              Our work begins by listening long enough 
              to document those conditions for the public record.
            </span>
          </p>

        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="pt-10 md:pt-12 pb-10 bg-muted/20">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-sm tracking-[0.25em] uppercase text-muted-foreground mb-4">
            Our Approach
          </h2>

          <h3 className="text-2xl md:text-3xl font-semibold mb-6">
            Science With Memory. Care With Structure.
          </h3>

          <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-10">
            ZenTrust integrates research into regenerative ecology, watershed restoration, 
            and the <strong>Bio-Psycho-Social-Spiritual</strong> framework. We document how land health 
            correlates with human social fabric and inner life.
          </p>

          

          <div className="grid md:grid-cols-3 gap-6 mt-12">

            <div className="rounded-2xl border border-border/40 bg-background px-6 py-6 shadow-sm">
              <Microscope className="h-7 w-7 mx-auto mb-3 text-primary" strokeWidth={1.5} />
              <h4 className="font-semibold mb-2">Research</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Rigorous ecological documentation grounded in evidence, 
                transparency, and open scientific inquiry.
              </p>
            </div>

            <div className="rounded-2xl border border-border/40 bg-background px-6 py-6 shadow-sm">
              <Users className="h-7 w-7 mx-auto mb-3 text-primary" strokeWidth={1.5} />
              <h4 className="font-semibold mb-2">Observation</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Compiling knowledge rooted in lived experience, cultural memory, 
                and shared stewardship of place.
              </p>
            </div>

            <div className="rounded-2xl border border-border/40 bg-background px-6 py-6 shadow-sm">
              <BookOpen className="h-7 w-7 mx-auto mb-3 text-primary" strokeWidth={1.5} />
              <h4 className="font-semibold mb-2">Documentation</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Open, accessible learning materials that restore coherence 
                between environmental understanding and action.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* OUR COMMITMENT */}
      <section className="pt-20 pb-10">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-sm tracking-[0.25em] uppercase text-muted-foreground mb-4">
            Our Commitment
          </h2>

          <h3 className="text-2xl md:text-3xl font-semibold mb-6">
            Nothing Is Extracted Here
          </h3>

          <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto space-y-3">
            <span className="block">
              ZenTrust does not persuade, pressure, or solicit. 
            </span>
            <span className="block">
              Participation is always voluntary. 
              Stewardship emerges from alignment with the research.
            </span>
            <span className="block">
              If a collaboration grows here, it grows because 
              the ecological and social conditions were right.
            </span>
          </p>

        </div>
      </section>

      {/* CONTINUITY */}
      <section className="pt-10 pb-10 border-y border-border/50 bg-muted/10">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-sm tracking-[0.25em] uppercase text-muted-foreground mb-4">
            Continuity
          </h2>

          <h3 className="text-2xl md:text-3xl font-semibold mb-6">
            A Lamp Burns Only With Oil
          </h3>

          <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto space-y-4">
            <span>
              ZenTrust does not claim exemption from material reality. 
              Like any living system, our research depends on nourishment 
              and care to remain visible.
            </span>
            <span className="block italic">
              Voluntary contributions allow this work to persist. When contributions arrive, 
              the research continues. When they pause, operations scale back accordingly.
            </span>
            <span>
              We do not borrow against the future. If resources are unavailable, the work 
              simply slows, without debt, urgency, or pretense.
            </span>
          </p>

        </div>
      </section>

      {/* GOVERNANCE & TRANSPARENCY */}
      <section className="pt-20 pb-12">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-sm tracking-[0.25em] uppercase text-muted-foreground mb-4">
            Governance and Transparency
          </h2>

          <h3 className="text-2xl md:text-3xl font-semibold mb-8">
            Clarity Is a Form of Respect
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left max-w-3xl mx-auto mb-12">
            <div className="p-4 rounded-lg bg-muted/30 border border-border/50">
              <span className="text-xs font-bold block mb-1">Status</span>
              <span className="text-sm">501(c)(3) Public Charity</span>
            </div>
            <div className="p-4 rounded-lg bg-muted/30 border border-border/50">
              <span className="text-xs font-bold block mb-1">EIN</span>
              <span className="text-sm">33-4318487</span>
            </div>
            <div className="p-4 rounded-lg bg-muted/30 border border-border/50">
              <span className="text-xs font-bold block mb-1">Determined</span>
              <span className="text-sm">July 1, 2025</span>
            </div>
            <div className="p-4 rounded-lg bg-muted/30 border border-border/50">
              <span className="text-xs font-bold block mb-1">TLD</span>
              <span className="text-sm">zentrust.world</span>
            </div>
          </div>

        </div>
      </section>

      {/* OPERATING DISCIPLINE */}
      <section className="pb-24">
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">
            How We Work, Who We Answer To
          </h2>
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <p className="text-base leading-relaxed text-muted-foreground">
              ZenTrust operates with a simple mandate: every action must strengthen ecological integrity and human dignity. Our board reviews research charters quarterly, and community advisors from partner watersheds participate in those reviews to ensure our documentation reflects local reality.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              Governance is handled with calm discipline. Stewardship teams publish narrative field notes alongside financials so observers can see how resources are moving. Independent auditors and pro bono legal counsel verify our filings, and our public benefit statement is revisited annually.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              The public benefit pursued is meticulously documented: soil health patterns, water table observations, and community resilience indicators. Research partnerships with universities track patterns across biological, psychological, social, and meaning-based dimensions.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <Button asChild size="lg">
              <Link href="/financials">View Public Financials</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Contact the Board</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* INVITATION */}
      <section className="py-24 bg-primary/5 text-center">
        <div className="max-w-3xl mx-auto px-6">

          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Learning and Observation
          </h2>

          <p className="text-muted-foreground leading-relaxed mb-10">
            Our work documents patterns at the intersection of land systems, human health, and community resilience. Explore our open research.
          </p>

          <div className="grid sm:grid-cols-2 gap-8">

            <div className="glass-card p-8 rounded-2xl">
              <Waves className="h-7 w-7 mx-auto mb-3 text-primary" strokeWidth={1} />
              <h4 className="font-semibold mb-2">Research Updates</h4>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                Field notes and observations on regenerative systems and human health patterns.
              </p>
              <Button asChild variant="secondary" className="w-full">
                <Link href="/research">View Research</Link>
              </Button>
            </div>

            <div className="glass-card p-8 rounded-2xl">
              <Feather className="h-7 w-7 mx-auto mb-3 text-primary" strokeWidth={1} />
              <h4 className="font-semibold mb-2">Educational Materials</h4>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                Publications and learning resources on ecological and health systems.
              </p>
              <Button asChild variant="secondary" className="w-full">
                <Link href="/learn">Browse Learning</Link>
              </Button>
            </div>

          </div>

        </div>
      </section>

      </div>
    </div>
  )
}
