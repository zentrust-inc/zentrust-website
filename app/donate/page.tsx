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
   PARTICIPATION PATHWAYS — Non-solicitation, voluntary participation
-------------------------------------------------------------------------- */
const donationTiers = [
  {
    icon: Leaf,
    title: "Seed the Soil",
    amount: "$50",
    description:
      "A pathway that nurtures early-stage ecological intelligence — microbial activity, groundcover vitality, and root-layer awakening.",
    futureImpact:
      "Supports foundational ecological processes: soil hydration, structural integrity, and micro-life scaffolding.",
    popular: true,
  },
  {
    icon: TreePine,
    title: "Regenerative Cell Initiator",
    amount: "$150",
    description:
      "A pathway aligned with the activation of regenerative micro-watershed units engineered for anti-fragility.",
    futureImpact:
      "Enables hydrological mapping, succession design, and multi-layer ecosystem ignition.",
  },
  {
    icon: Microscope,
    title: "Research & BPSS Contributor",
    amount: "$500",
    description:
      "A pathway for those attuned to open science — integrating syntropic succession, hydrological intelligence, soil microbiomes, and BPSS wellness.",
    futureImpact:
      "Strengthens global regenerative knowledge accessible to all communities and ecosystems.",
  },
  {
    icon: Users,
    title: "Sovereignty Pathway Steward",
    amount: "$1,000",
    description:
      "A pathway reflecting community autonomy, regenerative livelihoods, and long-term resilience frameworks.",
    futureImpact:
      "Supports sovereignty pathways based on ecological literacy, cooperative governance, and regenerative economics.",
  },
]

/* --------------------------------------------------------------------------
   REGENERATIVE IMPACT METRICS — Descriptive, non-solicitation
-------------------------------------------------------------------------- */
const projectedImpact = [
  {
    icon: TreePine,
    title: "Ecosystem Layers in Activation",
    description:
      "50,000+ ecological layers anticipated across syntropic forest systems — canopy, understory, shrubs, herbs, roots.",
    note: "Represents ecosystem intelligence, beyond tree-count metrics.",
  },
  {
    icon: Leaf,
    title: "Regenerative Cells in Succession",
    description:
      "2,500+ micro-watershed regenerative cells projected to enter anti-fragile ecological progression.",
    note: "Measured by hydration resilience and soil vitality.",
  },
  {
    icon: Users,
    title: "Families Strengthening Sovereignty",
    description:
      "1,200+ families expected to deepen ecological security, regenerative livelihoods, and inner–outer resilience.",
    note: "Reflects relational development, not charity distribution.",
  },
  {
    icon: Microscope,
    title: "Open Research Pathways",
    description:
      "15+ open-access studies integrating syntropy, hydrology, soil intelligence, and BPSS wellness.",
    note: "Baseline ecological assessments begin 2025.",
  },
]

/* --------------------------------------------------------------------------
   FOUNDING PRINCIPLES
-------------------------------------------------------------------------- */
const foundingPrinciples = [
  {
    icon: Shield,
    title: "Radical Transparency (Sunlight)",
    description:
      "Ecological, scientific, and ethical transparency as the foundation of institutional integrity.",
  },
  {
    icon: TrendingUp,
    title: "Open Scientific Knowledge",
    description:
      "All findings made accessible to support global regenerative movements and communities.",
  },
  {
    icon: Globe2,
    title: "Interdependence — Ubuntu",
    description:
      "‘I am because we are.’ Regeneration flows from relational coherence between land, water, people, and micro-life.",
  },
  {
    icon: Users,
    title: "Sovereignty & Self-Sufficiency",
    description:
      "Communities thrive when they own their knowledge, restore their lands, and cultivate anti-fragile systems.",
  },
]

/* --------------------------------------------------------------------------
   EARLY PARTICIPATION BENEFITS
-------------------------------------------------------------------------- */
const earlySupportBenefits = [
  "Activation of regenerative cells and ecological intelligence.",
  "Hydrological diagnostics and syntropic succession architecture.",
  "BPSS-aligned ecological literacy and inner resilience cultivation.",
  "Development of sovereignty-oriented livelihood pathways.",
  "Open scientific research accessible to communities worldwide.",
  "Long-term monitoring, governance, and ecological transparency.",
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
   MAIN PAGE — FULLY NON-SOLICITATIONAL VERSION
-------------------------------------------------------------------------- */
export default function DonatePage() {
  return (
    <div className="min-h-screen pt-16">

      {/* --------------------------------------------------------------------
         HERO — Non-solicitation, regenerative invitation field
      --------------------------------------------------------------------- */}
      <section className="py-24 bg-gradient-to-br from-primary/10 via-background to-emerald-600/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              The <span className="gradient-text">Regeneration of Life</span> Emerges Through Awareness
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              ZenTrust cultivates ecological intelligence, community sovereignty,  
              and landscapes that strengthen under stress. Rooted in Ubuntu and  
              <span className="italic">Vasudhaiva Kutumbakam</span> —  
              <strong>the world is one family</strong>.
            </p>

            <div className="bg-primary/10 rounded-2xl p-6 mb-8">
              <p className="text-foreground font-medium italic">
                “Regeneration is not charity — it is kinship with all life.”
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="group">
                <Link href="/donate/checkout">
                  <Heart className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                  Enter the Regeneration Portal
                </Link>
              </Button>

              <Button variant="outline" size="lg" asChild>
                <Link href="#why-early-support">Understanding Early Participation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>


      {/* --------------------------------------------------------------------
         PARTICIPATION PATHWAYS — Non-soliciting framework
      --------------------------------------------------------------------- */}
      <section className="py-24">
        <div className="container mx-auto px-4">

          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              Explore <span className="gradient-text">Regenerative Pathways</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">
              These pathways symbolize forms of relational participation within ecological and scientific regeneration.
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
                        <strong>Impact Field:</strong> {tier.futureImpact}
                      </p>
                    </div>

                    <Button asChild variant={tier.popular ? "default" : "outline"} className="w-full">
                      <Link href="/donate/checkout">Proceed</Link>
                    </Button>
                  </div>
                </div>
              )
            })}
          </div>

          <p className="text-center text-sm text-muted-foreground mt-10">
            ZenTrust is a 501(c)(3) public charity. EIN: 33-4318487.
          </p>
        </div>
      </section>


      {/* --------------------------------------------------------------------
         PROJECTED IMPACT — Informational only
      --------------------------------------------------------------------- */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">

          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              Projected <span className="gradient-text">Ecological Milestones</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">
              These reflect anticipated ecological and sovereignty outcomes as regenerative architectures evolve.
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

                  <h3 className="text-lg font-bold mb-3">{item.title}</h3>

                  <p className="text-muted-foreground mb-3">
                    {item.description}
                  </p>

                  <div className="bg-amber-100 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-2">
                    <p className="text-xs text-amber-800 dark:text-amber-200">
                      <strong>Note:</strong> {item.note}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </section>


      {/* --------------------------------------------------------------------
         EARLY PARTICIPATION — Non-solicitation reframing
      --------------------------------------------------------------------- */}
      <section id="why-early-support" className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">

            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">
                The Role of <span className="gradient-text">Early Participation</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Early participants help shape the ecological, scientific,  
                and sovereignty frameworks that grow over generations.  
                This is shared stewardship — not solicitation.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">

              <div>
                <h3 className="text-2xl font-bold mb-6">
                  Participation Enables:
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
                  <h4 className="font-bold mb-2">Foundational Architecture</h4>
                  <p className="text-sm text-muted-foreground">
                    Regeneration flows from root-level intelligence — water, soil,  
                    micro-life, governance, and relational coherence.
                  </p>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-8">
                <div className="text-center mb-6">
                  <Zap className="text-primary h-12 w-12 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">
                    The Regeneration Circle
                  </h3>
                  <p className="text-muted-foreground">
                    A community of individuals aligned with ecological intelligence,  
                    open science, and interdependent sovereignty.
                  </p>
                </div>

                <div className="space-y-4 text-center">
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-1">Sunlight Insights</h4>
                    <p className="text-sm text-muted-foreground">
                      Transparent quarterly ecological and scientific observations.
                    </p>
                  </div>

                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-1">Early Research Access</h4>
                    <p className="text-sm text-muted-foreground">
                      Open-access papers and ecological models released as they evolve.
                    </p>
                  </div>

                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-1">Community Ecosystem</h4>
                    <p className="text-sm text-muted-foreground">
                      Connect with regenerative designers, watershed architects,  
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
         TRANSPARENCY — Informational, NOT solicitation
      --------------------------------------------------------------------- */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">

          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              Our Commitment to <span className="gradient-text">Sunlight & Integrity</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Transparency is ecological — strengthening forests, communities,  
              and institutions alike.
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
              Stewardship of Resources
            </h3>

            <p className="text-muted-foreground text-center mb-6">
              Resources are applied toward ecological, scientific, and sovereignty  
              frameworks aligned with long-term regeneration.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <TransparencyItem
                title="Regenerative Ecology Systems"
                description="Syntropic design, hydrological mapping, soil intelligence, multi-layer activation."
              />
              <TransparencyItem
                title="Scientific Research & Open Access"
                description="Climate resilience, hydrological dynamics, soil microbiomes, BPSS wellbeing."
              />
              <TransparencyItem
                title="Community Sovereignty"
                description="Regenerative livelihoods, governance systems, interdependent resilience."
              />
              <TransparencyItem
                title="Ethical Stewardship"
                description="501(c)(3) compliance, transparent reporting, mission alignment."
              />
            </div>

            <div className="mt-6 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <p className="text-sm text-blue-800 dark:text-blue-200 text-center">
                ZenTrust, Inc. is a 501(c)(3) public charity (EIN 33-4318487).  
                All resources are stewarded exclusively for charitable, scientific,  
                and educational purposes under IRS Section 170(b)(1)(A)(vi).
              </p>
            </div>
          </div>

        </div>
      </section>


      {/* --------------------------------------------------------------------
         FINAL REFLECTION — No solicitation
      --------------------------------------------------------------------- */}
      <section className="py-24 bg-gradient-to-br from-primary/10 to-emerald-600/10">
        <div className="container mx-auto px-4 text-center">

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Regeneration Emerges Through Relationship
          </h2>

          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Regeneration is the return to relationship —  
            between soil and water, people and land, science and spirit.
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
              Continue
            </Link>
          </Button>

          <p className="text-sm text-muted-foreground mt-6">
            ZenTrust welcomes voluntary participation. No solicitation is conducted.  
            Contributions, if made, arise entirely from individual free choice.
          </p>

        </div>
      </section>

    </div>
  )
}
