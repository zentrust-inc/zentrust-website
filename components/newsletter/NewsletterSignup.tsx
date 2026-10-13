// components/newsletter/NewsletterSignup.tsx

"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { subscribeToNewsletter } from "@/lib/newsletter"

export function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle")
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    setStatus("loading")
    const result = await subscribeToNewsletter(email, "homepage")
    if (result.ok) {
      setStatus("done")
    } else {
      setError(result.error)
      setStatus("error")
    }
  }

  return (
    <section className="w-full pt-10 md:pt-12">
      <motion.div
        className="max-w-[720px] mx-auto px-6 text-center"
        initial={{ opacity: 0, y: 6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* HEADING */}
        <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
          Stay Connected
        </h2>

        {/* DESCRIPTION */}
        <p className="text-[16px] md:text-[17px] text-muted-foreground leading-relaxed mb-6">
          Get updates from the Nepal watershed and food-forest work, Abhilekh,
          and new research — a few times a year.
        </p>

        {status === "done" ? (
          <p role="status" className="text-base font-medium text-primary">
            Thank you — you&apos;re subscribed.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <label htmlFor="home-newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="home-newsletter-email"
              type="email"
              required
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="
                flex-1
                px-4 py-3
                bg-background
                text-foreground
                placeholder:text-muted-foreground
                border border-border
                rounded-lg
                focus:outline-none
                focus:ring-2 focus:ring-primary
                focus:ring-offset-0
              "
            />
            <Button type="submit" className="px-6 py-3" disabled={status === "loading"}>
              {status === "loading" ? "Subscribing…" : "Subscribe"}
            </Button>
          </form>
        )}

        {error && (
          <p role="alert" className="text-sm text-destructive mt-3">
            {error}
          </p>
        )}

        {/* PRIVACY LINE */}
        <p className="text-xs text-muted-foreground mt-4">
          We respect your privacy. Unsubscribe anytime.
        </p>
      </motion.div>
    </section>
  )
}
