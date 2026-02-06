"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group";
import { GlobalHero } from "@/components/hero/GlobalHero";

type Frequency = "once" | "monthly";

export default function StewardshipCheckoutPage() {
  const router = useRouter();

  const [amount, setAmount] = useState(50);
  const [frequency, setFrequency] = useState<Frequency>("once");
  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCheckout = async () => {
    setError(null);

    if (!agreed) {
      setError("Please acknowledge this voluntary contribution.");
      return;
    }

    if (amount < 5) {
      setError("Minimum amount is $5.");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("/api/stewardship/create-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount, frequency }),
      });

      const data = await res.json();

      if (!res.ok || !data.url) {
        throw new Error(data?.error || "Unable to process request.");
      }

      window.location.href = data.url;
    } catch (err: any) {
      setError(err.message || "Unable to process request.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      <GlobalHero
        kicker="Contribution"
        headline="Support public research on regenerative systems."
        dek="Contributions support educational research on ecological patterns and land stewardship."
        belowAnchorId="content"
        mode="confirm"
      />

      <div id="content" className="container mx-auto px-4 py-16 max-w-2xl scroll-mt-24">

        {/* Header */}
        <div className="space-y-4 mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Make a Contribution
          </h1>

          <p className="text-muted-foreground text-lg">
            Choose an amount and frequency. Payment is processed securely through Stripe.
          </p>

          <div className="flex items-start gap-3 text-sm text-muted-foreground">
            <Lock className="h-4 w-4 mt-0.5" />
            <span>
              ZenTrust is a 501(c)(3) public charity (EIN 33-4318487).
              Secure payment processing.
            </span>
          </div>
        </div>

        {/* Amount Card */}
        <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-6">

          {/* Amount */}
          <div className="text-center">
            <div className="text-4xl font-bold">
              ${amount.toLocaleString()}
            </div>
            <div className="text-xs text-muted-foreground mt-1">
              {frequency === "monthly" ? "per month" : "one-time"}
            </div>
          </div>

          <input
            type="range"
            min={5}
            max={1000}
            step={5}
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="w-full h-2 bg-muted rounded-lg cursor-pointer"
          />

          <div className="flex justify-between text-[11px] text-muted-foreground">
            <span>$5</span>
            <span>$1000+</span>
          </div>

          {/* Frequency */}
          <div className="pt-4 space-y-2">
            <Label>Frequency</Label>
            <RadioGroup
              value={frequency}
              onValueChange={(v: Frequency) => setFrequency(v)}
              className="flex gap-3"
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

        {/* Confirmation */}
        <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-4 mt-6 text-xs text-muted-foreground">
          <label className="flex items-start gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="mt-1"
            />
            <span>
              I understand this is a voluntary contribution to ZenTrust, Inc.,
              a registered public charity.
            </span>
          </label>

          {error && (
            <div className="rounded-md bg-destructive/10 border border-destructive/40 px-3 py-2 text-xs text-destructive">
              {error}
            </div>
          )}

          <Button
            onClick={handleCheckout}
            disabled={loading}
            size="lg"
            className="w-full inline-flex items-center justify-center gap-2"
          >
            {loading ? "Processing..." : "Continue to secure payment"}
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}

/* ---------- Small Component ---------- */

function FrequencyPill({
  value,
  label,
  selected,
}: {
  value: Frequency;
  label: string;
  selected: boolean;
}) {
  return (
    <Label
      htmlFor={`freq-${value}`}
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs cursor-pointer ${
        selected
          ? "border-primary bg-primary/10 text-primary"
          : "border-border text-muted-foreground hover:border-primary/50"
      }`}
    >
      <RadioGroupItem id={`freq-${value}`} value={value} className="h-3 w-3" />
      {label}
    </Label>
  );
}
