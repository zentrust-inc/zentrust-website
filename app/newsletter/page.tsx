"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Mail, Leaf, Search, BookOpen, BarChart3 } from "lucide-react"
import { GlobalHero } from "@/components/hero/GlobalHero"

export default function ResearchNewsletterPage() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubscribed(true)
  }

  if (isSubscribed) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center bg-neutral-50">
        <div className="max-w-lg mx-auto text-center bg-white border border-neutral-200 rounded-2xl p-10 shadow-sm">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Leaf className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-3xl font-bold mb-4">Subscription Confirmed</h1>
          <p className="text-muted-foreground mb-8">
            You have successfully joined our research digest. Technical updates 
            regarding soil health, watershed documentation, and literature 
            reviews will arrive as data is validated.
          </p>
          <Button asChild>
            <a href="/">Return to Research Hub</a>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <GlobalHero
        kicker="Research Dispatch"
        headline="Documenting systems science through technical updates."
        dek="A periodic digest of research findings, ecological monitoring data, and educational benchmarks. No marketing. No urgency."
        belowAnchorId="content"
        mode="confirm"
      />

      <div id="content" className="pt-10 scroll-mt-24">
        <section className="py-20 text-center border-b border-neutral-100">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-neutral-900">
              Subscribe to Research Findings
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Stay updated on validated data from our soil health observations, 
              watershed mapping efforts, and systems science reviews.
            </p>

            {/* Structured Form */}
            <div className="bg-white p-8 rounded-2xl border border-neutral-200 shadow-sm max-w-md mx-auto">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="text-left">
                  <label htmlFor="email" className="text-xs font-bold uppercase text-neutral-500 mb-1 block">
                    Institutional or Personal Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="name@organization.org"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-neutral-200 bg-neutral-50 focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                </div>
                <Button type="submit" className="w-full" size="lg">
                  <Mail className="mr-2 h-4 w-4" /> Subscribe to Digest
                </Button>
                <div className="pt-4 border-t border-neutral-100">
                  <p className="text-[11px] text-muted-foreground text-center leading-tight">
                    By subscribing, you agree to receive educational research 
                    updates. We value your privacy and never share data with 
                    third parties. Unsubscribe at any time.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* What to Expect - REFRAMED FOR COMPLIANCE */}
        <section className="py-24 bg-neutral-50/50">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
              What the Dispatch Includes
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white border border-neutral-100 rounded-2xl p-8 shadow-sm">
                <div className="w-10 h-10 bg-primary/5 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-bold mb-2">Field Data</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Quantitative updates from our active watershed monitoring 
                  stations and soil carbon sequestration measurements.
                </p>
              </div>

              <div className="bg-white border border-neutral-100 rounded-2xl p-8 shadow-sm">
                <div className="w-10 h-10 bg-primary/5 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-bold mb-2">Literature Reviews</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Summaries of recent academic findings in systems science 
                  and contextual health research (Social-Biological interactions).
                </p>
              </div>

              <div className="bg-white border border-neutral-100 rounded-2xl p-8 shadow-sm">
                <div className="w-10 h-10 bg-primary/5 rounded-lg flex items-center justify-center mb-4">
                  <Search className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-bold mb-2">Research Staging</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Documentation of the baseline-setting phases for our 2026 
                  comparative studies on regenerative land management.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="py-24 text-center">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-neutral-900">
              Open Scientific Communication
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We publish only when research milestones are reached or 
              notable ecological patterns are recorded. This ensures the 
              digest remains a high-value resource for stewards and researchers.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
