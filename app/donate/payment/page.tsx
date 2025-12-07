"use client"

import { Suspense, useEffect, useMemo, useState } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import Link from "next/link"
import { loadStripe } from "@stripe/stripe-js"
import {
  Elements,
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js"
import {
  Lock,
  ShieldCheck,
  Heart,
  ArrowLeft,
  ArrowRight,
  Leaf,
  TreePine,
  Users,
  Microscope,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { calculateDonationImpact } from "@/lib/calculator"

// ------------------------------------------------------------------
// Stripe Setup
// ------------------------------------------------------------------

const stripePublicKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY

const stripePromise = stripePublicKey ? loadStripe(stripePublicKey) : null

// ------------------------------------------------------------------
// Types
// ------------------------------------------------------------------

type Frequency = "once" | "monthly"

type PaymentStatus = "idle" | "loading" | "submitting" | "error"

// ------------------------------------------------------------------
// Page Component
// ------------------------------------------------------------------

export default function DonatePaymentPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center px-4 text-sm text-muted-foreground">
          Loading secure payment experience...
        </div>
      }
    >
      <DonatePaymentPageInner />
    </Suspense>
  )
}

function DonatePaymentPageInner() {
  const searchParams = useSearchParams()
  const router = useRouter()

  const amountFromQuery = Number(searchParams.get("amount") || "50")
  const frequencyFromQuery = (searchParams.get("frequency") as Frequency) || "once"
  const pathFromQuery = searchParams.get("path") || "flexible"

  const [clientSecret, setClientSecret] = useState<string | null>(null)
  const [status, setStatus] = useState<PaymentStatus>("loading")
  const [error, setError] = useState<string | null>(null)

  const amount = useMemo(
    () => (amountFromQuery > 0 ? amountFromQuery : 50),
    [amountFromQuery],
  )

  const frequency: Frequency =
    frequencyFromQuery === "monthly" ? "monthly" : "once"

  const impact = useMemo(
    () => calculateDonationImpact(amount),
    [amount],
  )

  const displayLabel =
    frequency === "monthly"
      ? `Donate $${amount.toLocaleString()}/month`
      : `Donate $${amount.toLocaleString()} once`

  // Create PaymentIntent via backend
  useEffect(() => {
    if (!stripePromise) {
      setError(
        "Stripe publishable key is missing. Please set NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY.",
      )
      setStatus("error")
      return
    }

    const createIntent = async () => {
      try {
        setStatus("loading")
        setError(null)

        const payload = {
          amount,
          frequency,
          impactPath: pathFromQuery,
        }

        const res = await fetch("/api/donations/create-intent", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        })

        if (!res.ok) {
          throw new Error("Unable to create payment session.")
        }

        const data = await res.json()
        if (!data.clientSecret) {
          throw new Error("Missing client secret from server.")
        }

        setClientSecret(data.clientSecret)
        setStatus("idle")
      } catch (err: any) {
        console.error(err)
        setError(
          err?.message ||
            "Something went wrong while preparing your secure payment. Please try again.",
        )
        setStatus("error")
      }
    }

    createIntent()
  }, [amount, frequency, pathFromQuery])

  if (!stripePromise) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center space-y-4">
          <h1 className="text-2xl font-bold text-foreground">
            Payment configuration incomplete
          </h1>
          <p className="text-muted-foreground text-sm">
            Stripe is not configured yet. Please set
            {" "}
            <code className="font-mono text-xs">NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY</code>
            {" "}
            in your environment variables and redeploy.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/40">
      <div className="border-b border-border/60 bg-background/80 backdrop-blur">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap items-center justify-between gap-2 text-xs text-muted-foreground">
          <div className="inline-flex items-center gap-2">
            <Lock className="h-3.5 w-3.5" />
            <span>Secure payment via Stripe</span>
          </div>
          <div className="inline-flex items-center gap-2">
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>ZenTrust · 501(c)(3) · EIN 33-4318487</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="mb-6">
          <Link
            href="/donate/checkout"
            className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-3 w-3" />
            Back to contribution details
          </Link>
        </div>

        <div className="grid lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1.2fr)] gap-10 lg:gap-16 items-start">
          {/* LEFT: Payment Form */}
          <div className="space-y-6">
            <div className="space-y-3">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
                Complete Your Contribution
              </h1>
              <p className="text-sm sm:text-base text-muted-foreground max-w-xl">
                Your payment details are encrypted and processed securely via Stripe.
                Once confirmed, you&apos;ll receive a receipt and a summary of the
                regenerative impact your contribution helps unlock.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-6">
              {/* Summary pill */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="space-y-1">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">
                    Contribution Summary
                  </p>
                  <p className="text-sm font-semibold text-foreground">
                    {displayLabel} ·{" "}
                    <span className="text-muted-foreground">
                      {pathFromQuery === "flexible"
                        ? "Where needed most"
                        : pathLabel(pathFromQuery)}
                    </span>
                  </p>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full bg-muted px-3 py-1 text-[11px] text-muted-foreground">
                  <Lock className="h-3 w-3" />
                  <span>256-bit encrypted</span>
                </div>
              </div>

              {/* Stripe Payment Form */}
              {status === "loading" && (
                <div className="rounded-xl border border-border/60 bg-muted/40 px-4 py-6 text-sm text-muted-foreground">
                  Preparing your secure payment session…
                </div>
              )}

              {status === "error" && (
                <div className="rounded-xl border border-destructive/40 bg-destructive/10 px-4 py-3 text-xs text-destructive">
                  {error}
                </div>
              )}

              {clientSecret && status !== "error" && (
                <Elements
                  stripe={stripePromise}
                  options={{
                    clientSecret,
                    appearance: {
                      theme: "flat",
                      variables: {
                        colorPrimary: "#16a34a",
                        colorBackground: "transparent",
                        colorText: "#020817",
                        colorDanger: "#f97373",
                        borderRadius: "12px",
                      },
                    },
                  }}
                >
                  <PaymentForm
                    amount={amount}
                    frequency={frequency}
                    displayLabel={displayLabel}
                    onSuccess={() => router.push("/donate/thank-you")}
                    setError={setError}
                    setStatus={setStatus}
                  />
                </Elements>
              )}

              <div className="space-y-2 pt-2 border-t border-border/50 mt-4">
                <p className="text-[11px] text-muted-foreground leading-relaxed">
                  ZenTrust, Inc. is a 501(c)(3) public charity recognized by the IRS
                  under Section 170(b)(1)(A)(vi). EIN:{" "}
                  <span className="font-mono">33-4318487</span>. No goods or
                  services were provided in exchange for this contribution. Donations
                  are tax-deductible as allowed by law.
                </p>
                <p className="text-[11px] text-muted-foreground">
                  All gifts support ZenTrust&apos;s charitable, educational, and
                  scientific mission in regenerative ecology, BPSS-integrative
                  wellness research, and open scientific education.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: Regenerative Impact Panel */}
          <aside className="space-y-6">
            <div className="glass-card rounded-2xl p-6 sm:p-7 border border-primary/20 space-y-5">
              <div className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-primary" />
                <h2 className="text-sm font-semibold text-foreground">
                  Your Regenerative Impact
                </h2>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Based on your selected amount, here is an approximate view of the
                regenerative transformations your contribution helps initiate. These
                are illustrative indicators; all donations support ZenTrust&apos;s
                full mission.
              </p>

              <div className="space-y-3 text-xs">
                <ImpactMetric
                  icon={TreePine}
                  label="Ecosystem Layers Regenerated"
                  value={impact.trees}
                  description="Layers of life awakened in emerging syntropic forest systems—canopy, understory, shrubs, herbs, and root networks."
                />
                <ImpactMetric
                  icon={Leaf}
                  label="Regenerative Cells Becoming Anti-Fragile"
                  value={impact.acres}
                  description="Micro-watershed and landscape units transitioning into self-renewing, drought-resilient ecological systems."
                />
                <ImpactMetric
                  icon={Users}
                  label="Families Moving Toward Self-Sufficiency"
                  value={impact.households}
                  description="Families gaining regenerative tools, ecological security, and long-term livelihood resilience."
                />
                {impact.research_plots > 0 && (
                  <ImpactMetric
                    icon={Microscope}
                    label="Research Initiatives Supported"
                    value={impact.research_plots}
                    description="Open scientific work in regenerative ecology, watershed behavior, and BPSS-aligned public health."
                  />
                )}
              </div>
            </div>

            <div className="glass-card rounded-2xl p-5 text-[11px] text-muted-foreground space-y-3">
              <p>
                Payments are processed securely by Stripe. ZenTrust never stores your
                full card details.
              </p>
              <p>
                If you have questions about your donation, reach out to{" "}
                <a
                  href="mailto:hello@zentrust.org"
                  className="underline underline-offset-2 hover:text-foreground"
                >
                  hello@zentrust.org
                </a>
                .
              </p>
              <p>
                By completing this contribution, you become part of a network of
                people regenerating ecosystems, communities, and ways of knowing that
                grow stronger under stress.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}

// ------------------------------------------------------------------
// Payment Form Component (inside Elements)
// ------------------------------------------------------------------

function PaymentForm({
  amount,
  frequency,
  displayLabel,
  onSuccess,
  setError,
  setStatus,
}: {
  amount: number
  frequency: Frequency
  displayLabel: string
  onSuccess: () => void
  setError: (msg: string | null) => void
  setStatus: (status: PaymentStatus) => void
}) {
  const stripe = useStripe()
  const elements = useElements()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    if (!stripe || !elements) {
      setError("Payment system is not ready yet. Please wait a moment and try again.")
      return
    }

    try {
      setStatus("submitting")

      const { error } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${window.location.origin}/donate/thank-you`,
        },
        redirect: "if_required",
      })

      if (error) {
        console.error(error)
        setError(error.message ?? "Your payment could not be processed. Please try again or use a different card.")
        setStatus("idle")
        return
      }

      // If no redirect was necessary and no error, treat as success.
      onSuccess()
    } catch (err: any) {
      console.error(err)
      setError("An unexpected error occurred while processing your payment. Please try again.")
      setStatus("idle")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="rounded-xl border border-border/60 bg-muted/40 p-4">
        <PaymentElement
          id="payment-element"
          options={{
            layout: "tabs",
          }}
        />
      </div>

      <Button
        type="submit"
        className="w-full inline-flex items-center justify-center gap-2"
      >
        {displayLabel}
        <ArrowRight className="h-4 w-4" />
      </Button>
    </form>
  )
}

// ------------------------------------------------------------------
// Small Presentational Helpers
// ------------------------------------------------------------------

function ImpactMetric({
  icon: Icon,
  label,
  value,
  description,
}: {
  icon: React.ComponentType<{ className?: string }>
  label: string
  value: number
  description: string
}) {
  return (
    <div className="rounded-xl bg-muted/60 p-3 space-y-1">
      <div className="flex items-baseline justify-between gap-2">
        <div className="inline-flex items-center gap-2 text-[11px] font-medium text-muted-foreground">
          <Icon className="h-3.5 w-3.5 text-primary" />
          <span>{label}</span>
        </div>
        <span className="text-sm font-semibold text-foreground">
          {value.toLocaleString()}
        </span>
      </div>
      <p className="text-[11px] text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  )
}

function pathLabel(path: string) {
  switch (path) {
    case "ecology":
      return "Regenerative Ecology"
    case "research":
      return "Regenerative & BPSS Research"
    case "education":
      return "Ecological Education"
    case "community":
      return "Community Self-Sufficiency"
    case "global":
      return "Global Regeneration Partnerships"
    default:
      return "ZenTrust’s Full Mission"
  }
}
