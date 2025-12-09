"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Leaf, ArrowRight } from "lucide-react"

export default function StewardshipCheckoutPage() {
  const router = useRouter()
  const [amount, setAmount] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!amount || Number(amount) <= 0) return

    setIsSubmitting(true)

    try {
      const res = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount }),
      })

      const data = await res.json()
      if (data.url) router.push(data.url)
    } catch (error) {
      console.error(error)
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen pt-20 bg-background">

      {/* HERO */}
      <section className="py-20 text-center">
        <div className="max-w-3xl mx-auto px-4">

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Stewardship Flow
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
            A quiet portal for voluntary resource movement —  
            offered without request, pressure, or expectation.  
            <span className="italic block mt-2">
              Nature does not hurry, yet everything is accomplished.
            </span>
          </p>

        </div>
      </section>

      {/* FORM */}
      <section className="py-12">
        <div className="max-w-md mx-auto px-4">

          <div className="glass-card p-8 rounded-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">

              <div>
                <label className="text-sm font-medium mb-2 block">
                  Stewardship Amount (USD)
                </label>

                <input
                  type="number"
                  step="0.01"
                  placeholder="Enter an amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary/20"
                  required
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                <Leaf className="h-5 w-5 mr-2" />
                Continue
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>

              <p className="text-xs text-muted-foreground text-center mt-4">
                ZenTrust · 501(c)(3) Public Charity · EIN 33-4318487  
                <br />
                Stewardship flows are voluntary and used exclusively for ecological,
                scientific, and educational purposes.
              </p>
            </form>
          </div>

        </div>
      </section>

      {/* CLOSING */}
      <section className="py-20 text-center">
        <div className="max-w-lg mx-auto px-4">

          <p className="text-muted-foreground text-lg leading-relaxed">
            Stewardship is not a transaction —  
            it is a continuation of relationship.  
            A quiet offering that returns to the land,
            to research, and to communities.
          </p>

        </div>
      </section>

    </div>
  )
}
