"use client"

import { useMemo, useState } from "react"
import { useRouter } from "next/navigation"
import {
  Heart,
  ShieldCheck,
  Lock,
  ArrowRight,
  Sparkles,
  Activity,
  Globe2,
  BookOpen,
  Leaf,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group"

import { calculateDonationImpact, DONATION_TIERS } from "@/lib/calculator"

type Frequency = "once" | "monthly"

type ImpactPath =
  | "flexible"
  | "ecology"
  | "research"
  | "community"
  | "education"
  | "global"

// Simple helper for USD cents
const toStripeAmount = (amount: number) => Math.round(amount * 100)

export default function DonateCheckoutPage() {
  const router = useRouter()

  const [amount, setAmount] = useState(50)
  const [frequency, setFrequency] = useState<Frequency>("monthly")
  const [selectedTier, setSelectedTier] = useState<number | null>(50)
  const [impactPath, setImpactPath] = useState<ImpactPath>("flexible")

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [country, setCountry] = useState("")
  const [organization, setOrganization] = useState("")
  const [onBehalfOfOrg, setOnBehalfOfOrg] = useState(false)
  const [dedication, setDedication] = useState("")
  const [anonymous, setAnonymous] = useState(false)
  const [subscribe, setSubscribe] = useState(true)
  const [agreed, setAgreed] = useState(false)

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const impact = useMemo(() => calculateDonationImpact(amount), [amount])

  const handleTierClick = (tierAmount: number) => {
    setAmount(tierAmount)
    setSelectedTier(tierAmount)
  }

  const handleSliderChange = (value: string) => {
    const n = parseInt(value, 10)
    if (!Number.isNaN(n)) {
      setAmount(n)
      setSelectedTier(null)
    }
  }

  const handleCustomAmountChange = (value: string) => {
    const cleaned = value.replace(/[^\d]/g, "")
    const n = parseInt(cleaned || "0", 10)
    setAmount(n > 0 ? n : 0)
    setSelectedTier(null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    if (!agreed) {
      setError("Please confirm that you understand this is a charitable donation.")
      return
    }

    if (!email) {
      setError("Please provide an email so we can send your receipt.")
      return
    }

    if (amount <= 0) {
      setError("Please select a positive donation amount.")
      return
    }

    setIsSubmitting(true)

    try {
      // 🔐 This is where you’d call your backend to create a Stripe Checkout Session
      // or PaymentIntent. For now, we just log and simulate success.

      const payload = {
        amount,
        amount_cents: toStripeAmount(amount),
        frequency,
        impactPath,
        donor: {
          name,
          email,
          country,
          organization: onBehalfOfOrg ? organization : null,
          dedication,
          anonymous,
          subscribe,
        },
      }

      // Example (uncomment and implement /api/checkout on your side):
      // const res = await fetch("/api/checkout", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(payload),
      // })
      // if (!res.ok) {
      //   throw new Error("Unable to start checkout.")
      // }
      // const data = await res.json()
      // window.location.href = data.url

      console.log("Mock checkout payload:", payload)

      // For now, just route to a payment page
      router.push("/donate/payment")
    } catch (err: any) {
      console.error(err)
      setError("Something went wrong while starting your donation. Please try again.")
      setIsSubmitting(false)
    }
  }

  const displayLabel =
    frequency === "monthly"
      ? `Donate $${amount.toLocaleString()}/month`
      : `Donate $${amount.toLocaleString()} once`

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-[minmax(0,2fr)_minmax(0,1.4fr)] gap-12 lg:gap-16 items-start">
          {/* LEFT: Narrative + Form */}
          <div className="space-y-10">
            {/* Hero / Intro */}
            <section className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100/70 dark:bg-emerald-900/30 px-3 py-1 text-xs font-medium text-emerald-800 dark:text-emerald-100">
                <ShieldCheck className="h-4 w-4" />
                <span>Secure Charitable Donation</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
                You Are Helping Regenerate the Future.
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Your contribution helps regenerate multi-layered ecosystems, strengthen landscapes
                into anti-fragile, self-renewing systems, and empower families to build
                long-term self-sufficiency and regenerative livelihoods.
              </p>

              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <div className="inline-flex items-center gap-2">
                  <Lock className="h-4 w-4" />
                  <span>Encrypted & secure processing</span>
                </div>
                <div className="inline-flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4" />
                  <span>501(c)(3) public charity · EIN 33-4318487</span>
                </div>
              </div>
            </section>

            {/* Impact Path Selection */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-primary" />
                Choose Your Regeneration Path (Optional)
              </h2>
              <p className="text-sm text-muted-foreground max-w-2xl">
                By default, your donation supports ZenTrust’s full mission. You can optionally
                express a preferred focus area below; our Board retains full discretion to allocate
                funds according to our charitable purpose and policies.
              </p>

              <RadioGroup
                value={impactPath}
                onValueChange={(value: ImpactPath) => setImpactPath(value)}
                className="grid gap-3 md:grid-cols-2"
              >
                <ImpactPathCard
                  value="flexible"
                  title="Where Needed Most"
                  description="Allow ZenTrust to direct your donation toward the most urgent regenerative and scientific priorities."
                  selected={impactPath === "flexible"}
                />
                <ImpactPathCard
                  value="ecology"
                  title="Regenerative Ecology"
                  description="Support syntropic forests, watershed-based design, soil regeneration, and living landscape systems."
                  icon={Leaf}
                  selected={impactPath === "ecology"}
                />
                <ImpactPathCard
                  value="research"
                  title="Regenerative & BPSS Research"
                  description="Fuel open scientific research on climate resilience, syntropic design, and BPSS-aligned public health."
                  icon={Activity}
                  selected={impactPath === "research"}
                />
                <ImpactPathCard
                  value="education"
                  title="Ecological Education"
                  description="Back workshops, training, and open-access programs in ecological literacy and inner resilience."
                  icon={BookOpen}
                  selected={impactPath === "education"}
                />
                <ImpactPathCard
                  value="community"
                  title="Community Self-Sufficiency"
                  description="Help families and communities strengthen regenerative livelihoods and long-term autonomy."
                  icon={UsersIconShim}
                  selected={impactPath === "community"}
                />
                <ImpactPathCard
                  value="global"
                  title="Global Regeneration Partnerships"
                  description="Support aligned nonprofits and community-led regeneration efforts around the world."
                  icon={Globe2}
                  selected={impactPath === "global"}
                />
              </RadioGroup>
            </section>

            {/* Donation & Donor Form */}
            <section className="space-y-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Amount & Frequency */}
                <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <h2 className="text-xl font-semibold">Choose Your Donation</h2>
                    <div className="inline-flex items-center rounded-full bg-muted px-2 py-1 text-xs text-muted-foreground gap-2">
                      <InfoDot /> You can change or cancel recurring donations anytime.
                    </div>
                  </div>

                  {/* Tiers */}
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {DONATION_TIERS.map((tier) => (
                      <button
                        key={tier.amount}
                        type="button"
                        onClick={() => handleTierClick(tier.amount)}
                        className={`p-4 rounded-xl border-2 transition-all duration-200 text-left ${
                          selectedTier === tier.amount
                            ? "border-primary bg-primary/10 text-primary"
                            : "border-border hover:border-primary/40 hover:bg-muted/60"
                        }`}
                      >
                        <div className="text-lg font-bold">${tier.amount}</div>
                        <div className="text-xs text-muted-foreground">{tier.label}</div>
                      </button>
                    ))}
                  </div>

                  {/* Custom amount + frequency */}
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="amount">Or enter a custom amount (USD)</Label>
                      <div className="flex items-center gap-2">
                        <div className="relative flex-1">
                          <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
                            $
                          </span>
                          <Input
                            id="amount"
                            inputMode="numeric"
                            value={amount || ""}
                            onChange={(e) => handleCustomAmountChange(e.target.value)}
                            className="pl-7"
                          />
                        </div>
                        <div className="hidden sm:flex flex-col text-xs text-muted-foreground">
                          <span>Min $5 recommended</span>
                        </div>
                      </div>

                      <div className="relative mt-2">
                        <input
                          type="range"
                          min={5}
                          max={1000}
                          value={amount}
                          onChange={(e) => handleSliderChange(e.target.value)}
                          className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer slider"
                        />
                        <div className="flex justify-between text-[10px] text-muted-foreground mt-1">
                          <span>$5</span>
                          <span>$1000+</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Frequency</Label>
                      <RadioGroup
                        value={frequency}
                        onValueChange={(v: Frequency) => setFrequency(v)}
                        className="flex flex-wrap gap-3"
                      >
                        <FrequencyPill
                          value="once"
                          label="One-time"
                          selected={frequency === "once"}
                        />
                        <FrequencyPill
                          value="monthly"
                          label="Monthly"
                          selected={frequency === "monthly"}
                        />
                      </RadioGroup>
                    </div>
                  </div>
                </div>

                {/* Donor Info */}
                <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-6">
                  <h2 className="text-xl font-semibold">Your Details</h2>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2 sm:col-span-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Optional, but helpful for receipts"
                      />
                    </div>
                    <div className="space-y-2 sm:col-span-2">
                      <Label htmlFor="email">Email (required for receipt)</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.org"
                      />
                    </div>
                    <div className="space-y-2 sm:col-span-2">
                      <Label htmlFor="country">Country (optional)</Label>
                      <Input
                        id="country"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        placeholder="e.g., United States, Nepal"
                      />
                    </div>
                  </div>

                  {/* Org & dedication */}
                  <div className="space-y-4 pt-2 border-t border-border/60 mt-4">
                    <div className="flex items-start gap-2">
                      <Checkbox
                        id="onBehalfOfOrg"
                        checked={onBehalfOfOrg}
                        onCheckedChange={(v) => setOnBehalfOfOrg(Boolean(v))}
                      />
                      <div className="space-y-1">
                        <Label htmlFor="onBehalfOfOrg">I&apos;m donating on behalf of an organization</Label>
                        <p className="text-xs text-muted-foreground">
                          Add your organization name for records and acknowledgments.
                        </p>
                      </div>
                    </div>
                    {onBehalfOfOrg && (
                      <div className="space-y-2">
                        <Label htmlFor="organization">Organization Name</Label>
                        <Input
                          id="organization"
                          value={organization}
                          onChange={(e) => setOrganization(e.target.value)}
                          placeholder="Organization / Institution"
                        />
                      </div>
                    )}

                    <div className="space-y-2">
                      <Label htmlFor="dedication">Dedication (optional)</Label>
                      <Textarea
                        id="dedication"
                        value={dedication}
                        onChange={(e) => setDedication(e.target.value)}
                        placeholder="Add a note, or dedicate this gift in honor or memory of someone."
                        rows={3}
                      />
                    </div>

                    <div className="flex flex-col gap-3">
                      <div className="flex items-start gap-2">
                        <Checkbox
                          id="anonymous"
                          checked={anonymous}
                          onCheckedChange={(v) => setAnonymous(Boolean(v))}
                        />
                        <div className="space-y-1">
                          <Label htmlFor="anonymous">Make my donation anonymous</Label>
                          <p className="text-xs text-muted-foreground">
                            Your information will still be used to send a tax receipt but won&apos;t be shared publicly.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2">
                        <Checkbox
                          id="subscribe"
                          checked={subscribe}
                          onCheckedChange={(v) => setSubscribe(Boolean(v))}
                        />
                          <div className="space-y-1">
                          <Label htmlFor="subscribe">Send me updates on the impact of this gift</Label>
                          <p className="text-xs text-muted-foreground">
                            You can unsubscribe at any time. We share transparent stories and data on regenerative impact.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Payment + Legal */}
                <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-6">
                  <h2 className="text-xl font-semibold flex items-center gap-2">
                    <Lock className="h-5 w-5 text-primary" />
                    Secure Payment & Confirmation
                  </h2>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    You&apos;ll be redirected to a secure payment flow to complete your contribution.
                    We do not store full card details. After payment, you&apos;ll receive an email receipt
                    for your records.
                  </p>

                  {/* TODO: Stripe Elements / card fields go here in a real integration */}

                  <div className="space-y-3 text-xs text-muted-foreground border-t border-border/60 pt-4">
                    <p>
                      ZenTrust, Inc. is a 501(c)(3) public charity recognized by the IRS under Section 170(b)(1)(A)(vi).
                      EIN: <span className="font-mono">33-4318487</span>. No goods or services were provided in
                      exchange for this contribution. Donations are tax-deductible as allowed by law.
                    </p>
                    <p>
                      All gifts support ZenTrust&apos;s charitable, educational, and scientific mission in regenerative
                      ecology, BPSS-integrative wellness research, and open scientific education. Funds are
                      administered under Board oversight in line with our Fundraising & Revenue Allocation Policy.
                    </p>

                    <div className="flex items-start gap-2 pt-1">
                      <Checkbox
                        id="agree"
                        checked={agreed}
                        onCheckedChange={(v) => setAgreed(Boolean(v))}
                      />
                      <Label htmlFor="agree" className="text-xs font-normal">
                        I understand that this is a charitable donation to ZenTrust, Inc. and agree to the
                        terms, privacy policy, and charitable use of funds.
                      </Label>
                    </div>
                  </div>

                  {error && (
                    <div className="rounded-md bg-destructive/10 border border-destructive/40 px-3 py-2 text-xs text-destructive">
                      {error}
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-2">
                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? "Processing..." : displayLabel}
                      {!isSubmitting && <ArrowRight className="h-4 w-4" />}
                    </Button>

                    <p className="text-[11px] text-muted-foreground max-w-sm">
                      By donating, you become part of a living network of people helping to regenerate ecosystems,
                      communities, and ways of knowing that grow stronger under stress.
                    </p>
                  </div>
                </div>
              </form>
            </section>
          </div>

          {/* RIGHT: Impact Summary Card */}
          <aside className="space-y-6 lg:sticky lg:top-24">
            <div className="glass-card rounded-2xl p-6 sm:p-7 space-y-5 border border-primary/20">
              <h2 className="text-lg font-semibold flex items-center gap-2">
                <Heart className="h-5 w-5 text-primary" />
                Your Regenerative Impact Snapshot
              </h2>

              <p className="text-sm text-muted-foreground leading-relaxed">
                Based on your selected amount, here is an approximate view of the regenerative work your
                contribution helps unlock. These are illustrative indicators — all donations support ZenTrust’s
                full charitable mission.
              </p>

              <div className="space-y-3">
                <ImpactMetric
                  label="Ecosystem Layers Regenerated"
                  value={impact.trees}
                  description="Layers of life awakened in emerging syntropic forest systems — canopy, understory, shrubs, herbs, roots."
                />
                <ImpactMetric
                  label="Regenerative Cells Becoming Anti-Fragile"
                  value={impact.acres}
                  description="Micro-watershed and landscape units transitioning into self-renewing, drought-resilient systems."
                />
                <ImpactMetric
                  label="Families Moving Toward Self-Sufficiency"
                  value={impact.households}
                  description="Families gaining regenerative tools, ecological security, and pathways out of dependency."
                />
                {impact.research_plots > 0 && (
                  <ImpactMetric
                    label="Research Initiatives Supported"
                    value={impact.research_plots}
                    description="Open scientific work in regenerative ecology, watershed behavior, and BPSS-aligned public health."
                  />
                )}
              </div>
            </div>

            <div className="glass-card rounded-2xl p-5 space-y-3 text-xs text-muted-foreground">
              <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-primary" />
                How We Steward Your Gift
              </h3>
              <p>
                ZenTrust follows Board-approved budgets and policies to ensure all funds are used exclusively
                for charitable, educational, and scientific purposes — never for private gain.
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Regenerative ecology & watershed planning</li>
                <li>BPSS-integrative wellness & ecological research</li>
                <li>Open scientific education & community training</li>
                <li>Governance, compliance, and transparent reporting</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}

/* ------- Small Presentational Helpers ------- */

function ImpactPathCard({
  value,
  title,
  description,
  icon: Icon,
  selected,
}: {
  value: ImpactPath
  title: string
  description: string
  icon?: React.ComponentType<{ className?: string }>
  selected: boolean
}) {
  return (
    <Label
      htmlFor={value}
      className={`relative flex cursor-pointer flex-col rounded-2xl border px-4 py-3 text-sm transition-all duration-200 ${
        selected ? "border-primary bg-primary/5 shadow-sm" : "border-border hover:border-primary/40"
      }`}
    >
      <div className="flex items-start gap-3">
        <RadioGroupItem id={value} value={value} className="mt-1" />
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            {Icon && <Icon className="h-4 w-4 text-primary" />}
            <span className="font-semibold text-foreground">{title}</span>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </Label>
  )
}

function FrequencyPill({
  value,
  label,
  selected,
}: {
  value: Frequency
  label: string
  selected: boolean
}) {
  return (
    <Label
      htmlFor={`freq-${value}`}
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs cursor-pointer transition-colors ${
        selected
          ? "border-primary bg-primary/10 text-primary"
          : "border-border text-muted-foreground hover:border-primary/50"
      }`}
    >
      <RadioGroupItem id={`freq-${value}`} value={value} className="h-3 w-3" />
      <span>{label}</span>
    </Label>
  )
}

function ImpactMetric({
  label,
  value,
  description,
}: {
  label: string
  value: number
  description: string
}) {
  return (
    <div className="rounded-xl bg-muted/60 p-3 space-y-1">
      <div className="flex items-baseline justify-between gap-2">
        <span className="text-xs font-medium text-muted-foreground">{label}</span>
        <span className="text-lg font-semibold text-foreground">
          {value.toLocaleString()}
        </span>
      </div>
      <p className="text-[11px] text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  )
}

function InfoDot() {
  return (
    <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-primary/10 text-primary text-[9px]">
      i
    </span>
  )
}

// Tiny shim so we don't import the Users icon separately;
// you can swap this for lucide-react Users if you prefer.
function UsersIconShim(props: { className?: string }) {
  // re-use Activity or any icon; replace with Users from lucide-react in your real code if desired
  return <Activity {...props} />
}
