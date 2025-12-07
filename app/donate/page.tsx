"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Heart,
  Shield,
  Leaf,
  Microscope,
  Users,
  TreePine,
  Zap,
  Globe2,
  BookOpen,
  TrendingUp,
  Activity,
} from "lucide-react"

/* --------------------------------------------------------------------------
   DONATION TIERS — Fully aligned with regeneration, sovereignty, anti-fragility
-------------------------------------------------------------------------- */
const donationTiers = [
  {
    icon: Leaf,
    title: "Seed the Soil",
    amount: "$50",
    description:
      "Ignites early-stage regeneration — microbial activation, groundcover, and root-layer vitality that make ecosystems self-renewing.",
    futureImpact:
      "Supports ecological intelligence at the earliest level: soil, moisture retention, and micro-life scaffolding.",
    popular: true,
  },
  {
    icon: TreePine,
    title: "Regenerative Cell Sponsor",
    amount: "$150",
    description:
      "Funds the design of regenerative cells — micro-watershed units engineered to become anti-fragile under stress.",
    futureImpact:
      "Enables hydrological diagnostics, succession planning, and multi-layer ecosystem activation.",
  },
  {
    icon: Microscope,
    title: "Research & BPSS Champion",
    amount: "$500",
    description:
      "Advances open scientific research in syntropic succession, hydrological intelligence, soil microbiomes, and BPSS-integrative wellness.",
    futureImpact:
      "Accelerates global regenerative knowledge accessible to all communities and ecosystems.",
  },
  {
    icon: Users,
    title: "Sovereignty & Self-Sufficiency Partner",
    amount: "$1,000",
    description:
      "Strengthens community autonomy through regenerative livelihoods and BPSS-informed resilience pathways.",
    futureImpact:
      "Supports sovereignty frameworks built on ecological literacy, cooperative governance, and regenerative economics.",
  },
]

/* --------------------------------------------------------------------------
   REGENERATIVE IMPACT METRICS — replacing old NGO-style metrics
-------------------------------------------------------------------------- */
const projectedImpact = [
  {
    icon: TreePine,
    title: "Ecosystem Layers to Activate",
    description:
      "Target: 50,000+ layers of ecological life awakened across syntropic forest systems — canopy, understory, shrubs, herbs, roots.",
    note: "Represents ecosystem intelligence, not tree planting.",
  },
  {
    icon: Leaf,
    title: "Regenerative Cells Entering Succession",
    description:
      "Goal: 2,500+ micro-watershed regenerative cells transitioning into anti-fragile ecological progression.",
    note: "Measured through hydration resilience and soil vitality.",
  },
  {
    icon: Users,
    title: "Families Gaining Sovereignty",
    description:
      "Target: 1,200+ families strengthening ecological security, regenerative livelihoods, and inner–outer resilience.",
    note: "Aligned with Ubuntu: ‘I am because we are.’",
  },
  {
    icon: Microscope,
    title: "Open Scientific Research Initiatives",
    description:
      "Goal: 15+ open-access regenerative studies integrating syntropy, hydrology, soil intelligence, and BPSS wellness.",
    note: "Baseline ecological assessments begin 2025.",
  },
]

/* --------------------------------------------------------------------------
   FOUNDING PRINCIPLES — Interdependence, sovereignty, open science
-------------------------------------------------------------------------- */
const foundingPrinciples = [
  {
    icon: Shield,
    title: "Radical Transparency (Sunlight)",
    description:
      "Every action is governed by transparency — ecological, financial, and ethical. Sunlight strengthens ecosystems and institutions.",
  },
  {
    icon: TrendingUp,
    title: "Open Scientific Knowledge",
    description:
      "All research is made publicly available, supporting global movements in regeneration, syntropy, BPSS wellness, and ecological intelligence.",
  },
  {
    icon: Globe2,
    title: "Interdependence — Ubuntu",
    description:
      "‘I am because we are.’ Regeneration is relational — land, water, people, microbes, forests, and the larger living world evolve together.",
  },
  {
    icon: Users,
    title: "Sovereignty & Self-Sufficiency",
    description:
      "Communities thrive when they own their knowledge, regenerate their lands, and build systems that remain strong under stress.",
  },
]

/* --------------------------------------------------------------------------
   EARLY SUPPORT BENEFITS — Sovereignty, regeneration, inner/outer resilience
-------------------------------------------------------------------------- */
const earlySupportBenefits = [
  "Activation of early-stage regenerative cells and landscape intelligence.",
  "Hydrological diagnostics and syntropic succession planning.",
  "BPSS-aligned ecological literacy and inner resilience learning.",
  "Development of sovereignty pathways and regenerative livelihood models.",
  "Open scientific research accessible to communities worldwide.",
  "Establishment of long-term monitoring, governance, and transparency systems.",
  "Strengthening interdependence between people, land, and ecosystems.",
]

/* --------------------------------------------------------------------------
   COMPONENT: TransparencyItem
-------------------------------------------------------------------------- */
function TransparencyItem({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <div>
      <h4 className="font-semibold text-foreground mb-2">{title}</h4>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  )
}

/* --------------------------------------------------------------------------
   MAIN PAGE
-------------------------------------------------------------------------- */
export default function DonatePage() {
  return (
    <div className="min-h-screen pt-16">

      {/* --------------------------------------------------------------------
         HERO — Regeneration, Sovereignty, Anti-Fragility, Interdependence
      --------------------------------------------------------------------- */}
      <section className="py-24 bg-gradient-to-br from-primary/10 via-background to-emerald-600/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Support the <span className="gradient-text">Regeneration of Life</span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              ZenTrust regenerates living systems by activating ecological intelligence,  
              strengthening community sovereignty, and cultivating landscapes that  
              grow stronger under stress.  
              Rooted in Ubuntu and <span className="italic">Vasudhaiva Kutumbakam</span> —  
              <strong>the world is one family</strong>.
            </p>

            <div className="bg-primary/10 rounded-2xl p-6 mb-8">
              <p className="text-foreground font-medium italic">
                “Regeneration is not charity — it is kinship with all life.”
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                — ZenTrust Founding Ethos
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="group">
                <Link href="/donate/checkout">
                  <Heart className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                  Begin Your Contribution
                </Link>
              </Button>

              <Button variant="outline" size="lg" asChild>
                <Link href="#why-early-support">Why Early Support Matters</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>


      {/* --------------------------------------------------------------------
         DONATION TIERS — “Choose Your Regenerative Role”
      --------------------------------------------------------------------- */}
      <section className="py-24">
        <div className="container mx-auto px-4">

          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              Choose Your <span className="gradient-text">Regenerative Role</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">
              These invitation levels represent different ways of stewarding  
              ecological intelligence, sovereignty, and regeneration.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {donationTiers.map((tier, i) => {
              const Icon = tier.icon
              return (
                <div
                  key={i}
                  className={`glass-card rounded-2xl p-6 transition-all hover:scale-105 ${
                    tier.popular ? "border-primary/40 bg-primary/5" : ""
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                        Most Chosen
                      </span>
                    </div>
                  )}

                  <div className="text-center">
                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>

                    <div className="text-2xl font-black text-primary mb-2">
                      {tier.amount}
                    </div>

                    <h3 className="text-lg font-bold mb-3">{tier.title}</h3>

                    <p className="text-sm text-muted-foreground mb-4">
                      {tier.description}
                    </p>

                    <div className="bg-muted/50 rounded-lg p-3 mb-4">
                      <p className="text-xs text-muted-foreground">
                        <strong>Future Impact:</strong> {tier.futureImpact}
                      </p>
                    </div>

                    <Button asChild variant={tier.popular ? "default" : "outline"} className="w-full">
                      <Link href="/donate/checkout">Choose This Level</Link>
                    </Button>
                  </div>
                </div>
              )
            })}
          </div>

          <p className="text-center text-sm text-muted-foreground mt-10">
            ZenTrust is a 501(c)(3) public charity. EIN: 33-4318487. Donations are tax-deductible.
          </p>
        </div>
      </section>


      {/* --------------------------------------------------------------------
         PROJECTED IMPACT — Regeneration, sovereignty, ecological intelligence
      --------------------------------------------------------------------- */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">

          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              Projected <span className="gradient-text">Regenerative Milestones</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">
              These milestones express ecological awakening, sovereignty-building,  
              and the evolution of anti-fragile landscapes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projectedImpact.map((item, index) => {
              const Icon = item.icon
              return (
                <div key={index} className="glass-card rounded-2xl p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>

                  <h3 className="text-lg font-bold mb-3">
                    {item.title}
                  </h3>

                  <p className="text-muted-foreground mb-3">
                    {item.description}
                  </p>

                  <div className="bg-amber-100 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-2">
                    <p className="text-xs text-amber-800 dark:text-amber-200">
                      <strong>Target:</strong> {item.note}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </section>


      {/* --------------------------------------------------------------------
         WHY EARLY SUPPORT MATTERS — Sovereignty, Ubuntu, Interdependence
      --------------------------------------------------------------------- */}
      <section id="why-early-support" className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">

            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">
                Why <span className="gradient-text">Early Support</span> Matters
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Early supporters are not donors — they are **co-creators of sovereignty, ecological intelligence,  
                and interdependent regeneration**.  
                Your contribution shapes the systems that will thrive for generations.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">

              {/* Benefits List */}
              <div>
                <h3 className="text-2xl font-bold mb-6">
                  Your Early Investment Enables:
                </h3>

                <div className="space-y-4">
                  {earlySupportBenefits.map((b, i) => (
                    <div key={i} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                      <p className="text-muted-foreground">{b}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-primary/10 rounded-xl p-6 mt-8">
                  <h4 className="font-bold mb-2">The Power of Foundations</h4>
                  <p className="text-sm text-muted-foreground">
                    Regeneration flows from root-level intelligence —  
                    water, soil, micro-life, governance, and community connection.  
                    Your early support enables the architecture that creates enduring  
                    ecological and human sovereignty.
                  </p>
                </div>
              </div>

              {/* Circle Membership Card */}
              <div className="glass-card rounded-2xl p-8">
                <div className="text-center mb-6">
                  <Zap className="text-primary h-12 w-12 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">
                    Join the Regeneration Circle
                  </h3>
                  <p className="text-muted-foreground">
                    Become part of the founding network stewarding ecological intelligence.
                  </p>
                </div>

                <div className="space-y-4 text-center">
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-1">Sunlight Reports</h4>
                    <p className="text-sm text-muted-foreground">
                      Transparent ecological + scientific updates quarterly.
                    </p>
                  </div>

                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-1">Early Research Access</h4>
                    <p className="text-sm text-muted-foreground">
                      Open-access papers and ecological models as they develop.
                    </p>
                  </div>

                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-1">Community Connection</h4>
                    <p className="text-sm text-muted-foreground">
                      Meet regenerative designers, watershed stewards,  
                      and BPSS researchers.
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>


      {/* --------------------------------------------------------------------
         TRANSPARENCY — Sunlight philosophy + IRS alignment + open science
      --------------------------------------------------------------------- */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">

          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              Our Commitment to <span className="gradient-text">Sunlight & Integrity</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Transparency is ecological. Sunlight strengthens forests, communities,  
              and institutions — including ZenTrust.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {foundingPrinciples.map((p, i) => {
              const Icon = p.icon
              return (
                <div key={i} className="glass-card rounded-2xl p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-3">{p.title}</h3>
                  <p className="text-sm text-muted-foreground">{p.description}</p>
                </div>
              )
            })}
          </div>

          <div className="max-w-4xl mx-auto glass-card rounded-2xl p-8">
            <h3 className="text-xl font-bold text-center mb-4">
              How Your Contribution Is Stewarded
            </h3>

            <p className="text-muted-foreground text-center mb-6">
              Every gift strengthens the ecological, scientific, and community architecture  
              necessary for long-term regeneration and sovereignty.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <TransparencyItem
                title="Regenerative Ecology Systems"
                description="Syntropic design, hydrological flow mapping, soil intelligence, and multi-layer ecosystem activation."
              />
              <TransparencyItem
                title="Scientific Research & Open Access"
                description="Studies on climate resilience, hydrological dynamics, soil microbiomes, and BPSS wellbeing."
              />
              <TransparencyItem
                title="Community Sovereignty & Livelihoods"
                description="Regenerative economic pathways, cooperative governance, and resilience frameworks."
              />
              <TransparencyItem
                title="Governance & Ethical Operations"
                description="501(c)(3) compliance, transparent reporting, mission alignment, and long-term stewardship."
              />
            </div>

            <div className="mt-6 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <p className="text-sm text-blue-800 dark:text-blue-200 text-center">
                <strong>IRS Notice:</strong> ZenTrust, Inc. is a 501(c)(3) public charity (EIN 33-4318487).  
                All contributions are used exclusively for charitable, scientific,  
                and educational purposes in line with IRS Section 170(b)(1)(A)(vi).
              </p>
            </div>
          </div>

        </div>
      </section>


      {/* --------------------------------------------------------------------
         FINAL CALL TO ACTION — Interdependence & regeneration
      --------------------------------------------------------------------- */}
      <section className="py-24 bg-gradient-to-br from-primary/10 to-emerald-600/10">
        <div className="container mx-auto px-4 text-center">

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Become a <span className="gradient-text">Steward of Regeneration</span>
          </h2>

          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Regeneration is the return to relationship —  
            between soil and water, people and land, science and spirit.  
            Your contribution strengthens this web of interdependence.
          </p>

          <div className="glass-card rounded-2xl p-8 mb-8">
            <p className="italic text-lg text-foreground mb-2">
              “When one ecosystem heals, the whole family of life benefits.”
            </p>
            <p className="text-sm text-muted-foreground">
              Reflecting the principle of Vasudhaiva Kutumbakam:  
              <strong> The World is ONE Family</strong>.
            </p>
          </div>

          <Button size="lg" asChild className="group">
            <Link href="/donate/checkout">
              <Heart className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
              Begin Your Contribution
            </Link>
          </Button>

          <p className="text-sm text-muted-foreground mt-6">
            Tax-deductible • 501(c)(3) Public Charity • EIN 33-4318487
          </p>

        </div>
      </section>

    </div>
  )
}
