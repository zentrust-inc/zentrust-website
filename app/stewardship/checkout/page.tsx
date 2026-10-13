"use client";

import { useEffect, useState } from "react";
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
type Program = "general" | "nepal" | "abhilekh";

const PROGRAM_OPTIONS: { value: Program; label: string }[] = [
  { value: "general", label: "Where most needed" },
  { value: "nepal", label: "Nepal Food Forest & Watershed" },
  { value: "abhilekh", label: "Abhilekh Health Record" },
];

function isProgram(v: string | null): v is Program {
  return v === "general" || v === "nepal" || v === "abhilekh";
}

export default function StewardshipCheckoutPage() {
  const router = useRouter();

  const [amount, setAmount] = useState(50);
  const [frequency, setFrequency] = useState<Frequency>("once");
  const [program, setProgram] = useState<Program>("general");

  // Preselect program/amount from links such as /stewardship/checkout?program=nepal&amount=100
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const p = params.get("program");
      if (isProgram(p)) setProgram(p);
      const a = Number(params.get("amount"));
      if (Number.isFinite(a) && a >= 5) {
        setAmount(Math.min(1000, Math.round(a / 5) * 5));
      }
    } catch {
      // ignore malformed query strings
    }
  }, []);
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
        body: JSON.stringify({ amount, frequency, program }),
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
        headline="Support land, water and health in Nepal."
        dek="Contributions fund ZenTrust's charitable programs — watershed and food-forest restoration in Nepal, the Abhilekh health record, and open research."
        belowAnchorId="content"
        mode="confirm"
      />

      <div
        id="content"
        className="container mx-auto px-4 py-16 max-w-2xl scroll-mt-24"
      >
        {/* Header */}
        <div className="space-y-4 mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Make a Contribution
          </h1>

          <p className="text-muted-foreground text-lg">
            Choose an amount and frequency. Payment is processed securely
            through Stripe.
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

          {/* Program preference (non-binding) */}
          <fieldset className="pt-4 space-y-2">
            <legend className="text-sm font-medium leading-none mb-2">
              Program preference (optional)
            </legend>
            <div className="flex flex-wrap gap-2">
              {PROGRAM_OPTIONS.map((opt) => (
                <label
                  key={opt.value}
                  className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs cursor-pointer ${
                    program === opt.value
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border text-muted-foreground hover:border-primary/50"
                  }`}
                >
                  <input
                    type="radio"
                    name="program"
                    value={opt.value}
                    checked={program === opt.value}
                    onChange={() => setProgram(opt.value)}
                    className="h-3 w-3 accent-current"
                  />
                  {opt.label}
                </label>
              ))}
            </div>
            <p className="text-[11px] text-muted-foreground">
              We honor program preferences wherever possible. Final use of
              funds is at the discretion of ZenTrust&apos;s board in furtherance
              of its charitable purposes.
            </p>
          </fieldset>
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

          {/* Quiet exit */}
          <div className="pt-2 text-center">
            <a
              href="/stewardship"
              className="text-xs underline text-muted-foreground"
            >
              Return to stewardship research
            </a>
          </div>
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
      <RadioGroupItem
        id={`freq-${value}`}
        value={value}
        className="h-3 w-3"
      />
      {label}
    </Label>
  );
}
