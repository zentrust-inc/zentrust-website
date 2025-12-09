"use client"

import { useEffect, useState } from "react"
import { loadStripe } from "@stripe/stripe-js"
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js"
import { Button } from "@/components/ui/button"

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY || "")

function PaymentForm() {
  const stripe = useStripe()
  const elements = useElements()
  const [isProcessing, setIsProcessing] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!stripe || !elements) return

    setIsProcessing(true)
    setErrorMessage(null)

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${process.env.NEXT_PUBLIC_SITE_URL}/donate/thank-you`,
      },
    })

    if (error) {
      setErrorMessage(error.message || "An error occurred.")
      setIsProcessing(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <PaymentElement />

      <Button type="submit" size="lg" disabled={isProcessing} className="w-full">
        {isProcessing ? "Processing..." : "Confirm Stewardship Flow"}
      </Button>

      {errorMessage && (
        <p className="text-sm text-red-500 text-center mt-2">{errorMessage}</p>
      )}

      <p className="text-xs text-muted-foreground text-center mt-4">
        ZenTrust · 501(c)(3) Public Charity · EIN 33-4318487  
        <br />
        Stewardship exchanges are voluntary and used exclusively for  
        ecological, scientific, and educational purposes.
      </p>
    </form>
  )
}

export default function PaymentPage() {
  const [clientSecret, setClientSecret] = useState<string | null>(null)

  useEffect(() => {
    const createIntent = async () => {
      const res = await fetch("/api/create-payment-intent", { method: "POST" })
      const data = await res.json()
      setClientSecret(data.clientSecret)
    }
    createIntent()
  }, [])

  if (!clientSecret) {
    return (
      <div className="min-h-screen flex items-center justify-center text-muted-foreground">
        Preparing…
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Quiet Header */}
      <section className="pb-12 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">
          Stewardship Confirmation
        </h1>
        <p className="text-muted-foreground max-w-md mx-auto">
          A simple, intentional step.
        </p>
      </section>

      {/* Payment Element */}
      <section className="pb-24">
        <div className="max-w-md mx-auto px-4">
          <Elements
            stripe={stripePromise}
            options={{
              clientSecret,
              appearance: {
                theme: "flat",
                variables: {
                  colorPrimary: "#3b855b",
                  borderRadius: "8px"
                }
              }
            }}
          >
            <PaymentForm />
          </Elements>
        </div>
      </section>
    </div>
  )
}
