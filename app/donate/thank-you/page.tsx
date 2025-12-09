"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export const dynamic = "force-dynamic";

function StewardshipAcknowledgementInner() {
  const searchParams = useSearchParams();
  const amount = Number(searchParams.get("amount") || 0);

  // GA event (renamed to avoid "donation" language)
  useEffect(() => {
    if (typeof window !== "undefined" && window.gtag && amount > 0) {
      window.gtag("event", "stewardship_exchange_completed", {
        value: amount,
        currency: "USD",
      });
    }
  }, [amount]);

  return (
    <div className="py-20 px-4 text-center max-w-3xl mx-auto">
      {/* Heading */}
      <h1 className="text-4xl font-extrabold mb-6 gradient-text">
        Stewardship Exchange Received
      </h1>

      {/* Tao-Inspired Amount Line */}
      <p className="text-lg text-muted-foreground leading-relaxed mb-6">
        Your voluntary resource flow of{" "}
        <span className="font-semibold text-foreground">
          ${amount.toLocaleString()}
        </span>{" "}
        has entered the living ecosystem of ZenTrust.
      </p>

      {/* Tao-Inspired Quote + Meaning */}
      <div className="glass-card rounded-2xl p-8 mx-auto mb-8">
        <p className="italic text-foreground text-xl mb-3">
          “When a river gives without effort, valleys flourish without seeking.”
        </p>

        <p className="text-sm text-muted-foreground leading-relaxed">
          This exchange is not a transaction — it is a movement of intention.
          A quiet alignment with regeneration, joining the long work of soil,
          water, community, and science as they remember how to heal
          themselves. Your offering becomes part of a widening field of
          interdependence, where resources move where they are needed and
          ecosystems strengthen by being seen.
        </p>
      </div>

      {/* Receipt Notice */}
      <p className="text-sm text-muted-foreground mb-4">
        A stewardship receipt has been sent to your email.  
        May this moment reflect your place in a renewing world.
      </p>

      {/* Return Button */}
      <a
        href="/"
        className="inline-flex items-center gap-2 px-6 py-3 mt-4 rounded-xl text-sm font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-all"
      >
        Return to ZenTrust
      </a>

      {/* Legal Footer */}
      <p className="mt-6 text-xs text-muted-foreground">
        ZenTrust · 501(c)(3) Public Charity · EIN 33-4318487  
        Stewardship exchanges are voluntary and are used exclusively for
        charitable, scientific, and educational purposes.
      </p>
    </div>
  );
}

export default function Page() {
  return (
    <Suspense
      fallback={
        <div className="p-10 text-center text-muted-foreground">
          Integrating stewardship…
        </div>
      }
    >
      <StewardshipAcknowledgementInner />
    </Suspense>
  );
}
