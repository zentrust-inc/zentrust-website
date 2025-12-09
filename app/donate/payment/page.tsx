"use client"

import { useSearchParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { loadStripe } from "@stripe/stripe-js"
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js"
import { Button } from "@/components/ui/button"
import { Lock, ShieldCheck, ArrowRight } from "lucide-react"

// Load Stripe
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY || ""
)

export default function Page() {
  const params = useSearchParams()
  const router = useRouter()

  const amount = Number(params.get("amount") || "50")
  const [clientSecret, setClientSecret] = useState<string | null>(null)
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading")
  const [error, setError] = useState<string | null>(null)

  // Create a PaymentIntent
  useEffect(() => {
    if (!amount) return

    const createIntent = async () => {
      try {
        const res = await fetch("/api/create-payment-intent", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ amount }),
        })

        if (!res.ok) throw new Error("Unable to create payment intent.")

        const data = await res.json()
        setClientSecret(data.clientSecret)
        setStatus("ready")
      } catch (err: any) {
        setError(err.message)
        setStatus("error")
      }
    }

    createIntent()
  }, [amount])

  // Loading UI
  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center text-muted-foreground">
        Preparing secure flow…
      </div>
    )
  }

  // Error UI
  if (status === "error" || !stripePromise) {
    return (
      <div className="min-h-screen flex items-center justify-center text-destructive text-sm">
        {error || "Unexpected issue. Please try again."}
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background px-4 py-16 max-w-xl mx-auto">
      {/* Header */}
      <div className="mb-8 space-y-2 text-center">
        <h1 className="text-2xl font-semibold">Finalize Stewardship Exchange</h1>
        <p className="text-muted-foreground text-sm">
          Secure, encrypted processing via Stripe.
        </p>

        <div className="flex items-center justify-center gap-3 text-xs text-muted-foreground">
          <Lock className="h-3 w-3" />
          <span>Encrypted & Private</span>
          <ShieldCheck className="h-3 w-3" />
        </div>
      </div>

      {/* Stripe Form */}
      {clientSecret && (
        <Elements
          stripe={stripePromise}
          options={{
            clientSecret,
            appearance: {
              theme: "flat",
              variables: { borderRadius: "10px" },
            },
          }}
        >
          <PaymentForm amount={amount} />
        </Elements>
      )}

      {/* Legal line */}
      <p className="text-[11px] text-muted-foreground text-center mt-6 leading-relaxed">
        ZenTrust · 501(c)(3) Public Charity · EIN 33-4318487  
        <br />
        Stewardship exchanges are voluntary and support ecological, educational,  
        and scientific regeneration. No goods/services are exchanged.
      </p>
    </div>
  )
}

function PaymentForm({ amount }: { amount: number }) {
  const stripe = useStripe()
  const elements = useElements()
  const router = useRouter()

  const [processing, setProcessing] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    if (!stripe || !elements) {
      setError("Payment system is not ready yet.")
      return
    }

    setProcessing(true)

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/donate/thank-you`,
      },
      redirect: "if_required",
    })

    if (error) {
      setError(error.message || "Unable to complete payment.")
      setProcessing(false)
      return
    }

    router.push("/donate/thank-you")
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="rounded-xl border border-border bg-muted/40 p-4">
        <PaymentElement id="payment-element" options={{ layout: "tabs" }} />
      </div>

      <Button className="w-full flex items-center justify-center gap-2" type="submit" disabled={processing}>
        {processing ? "Processing…" : `Complete $${amount.toLocaleString()} Stewardship Flow`}
        {!processing && <ArrowRight className="h-4 w-4" />}
      </Button>

      {error && <p className="text-red-500 text-sm text-center">{error}</p>}
    </form>
  )
}
