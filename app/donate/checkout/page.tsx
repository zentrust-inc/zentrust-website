"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

export default function MinimalCheckoutPage() {
  const router = useRouter()

  const [amount, setAmount] = useState<number | null>(50)
  const [email, setEmail] = useState("")
  const [intention, setIntention] = useState("")
  const [agreed, setAgreed] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    if (!amount || amount <= 0) return setError("Please enter a valid amount.")
    if (!email) return setError("Email is required for your stewardship receipt.")
    if (!agreed) return setError("Please acknowledge the stewardship statement.")

    setLoading(true)
    router.push(`/donate/payment?amount=${amount}`)
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-24">
      <div className="max-w-md w-full space-y-10">

        {/* Title */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-semibold">Stewardship Flow Setup</h1>
          <p className="text-sm text-muted-foreground">
            When intention is clear, movement becomes effortless.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">

          {/* Amount */}
          <div className="space-y-2">
            <Label htmlFor="amount">Resource Amount (USD)</Label>
            <Input
              id="amount"
              type="number"
              min={1}
              value={amount ?? ""}
              onChange={(e) => setAmount(Number(e.target.value))}
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email">Email for Receipt</Label>
            <Input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Optional intention */}
          <div className="space-y-2">
            <Label htmlFor="intention">Intention (optional)</Label>
            <Textarea
              id="intention"
              rows={3}
              value={intention}
              onChange={(e) => setIntention(e.target.value)}
            />
          </div>

          {/* Agreement */}
          <div className="flex items-start gap-3">
            <Checkbox
              id="agree"
              checked={agreed}
              onCheckedChange={(v) => setAgreed(Boolean(v))}
            />
            <Label htmlFor="agree" className="text-sm text-muted-foreground">
              I acknowledge this is a voluntary stewardship exchange
              supporting ZenTrust’s charitable and scientific mission.
            </Label>
          </div>

          {/* Error */}
          {error && (
            <div className="text-red-500 text-sm">{error}</div>
          )}

          {/* Submit */}
          <Button
            type="submit"
            className="w-full"
            size="lg"
            disabled={loading}
          >
            {loading ? "Preparing…" : "Proceed"}
          </Button>

          {/* Compliance line */}
          <p className="text-xs text-muted-foreground text-center">
            ZenTrust · 501(c)(3) Public Charity · EIN 33-4318487
          </p>
        </form>
      </div>
    </div>
  )
}
