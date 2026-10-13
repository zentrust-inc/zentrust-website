"use client";

import { useEffect, useState } from "react";
import { Sprout, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const dynamic = "force-dynamic";

export default function ThankYouPage() {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowMessage(true), 500);
    return () => clearTimeout(timer);
  }, []);

  /* ----------------------------------------------------------------
     GOOGLE ADS / GA4 DONATION CONVERSION
     - Reports the real gift amount (passed in the Stripe success URL)
     - Fires once per Stripe session (reloads don't double count)
     - transaction_id lets Google de-duplicate as well
     ---------------------------------------------------------------- */
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const sessionId = params.get("session_id") || "";
      const amount = Number(params.get("amount"));
      const value =
        Number.isFinite(amount) && amount > 0 ? amount : 5;

      const key = `zt_donation_conversion_${sessionId || "nosession"}`;
      if (sessionStorage.getItem(key)) return;
      sessionStorage.setItem(key, "true");

      const w = window as any;
      w.dataLayer = w.dataLayer || [];
      const gtag =
        typeof w.gtag === "function"
          ? w.gtag
          : function () {
              // eslint-disable-next-line prefer-rest-params
              w.dataLayer.push(arguments);
            };

      gtag("event", "conversion", {
        send_to: "AW-17898582360/BssVCI6UwuwbENji2tZC",
        value,
        currency: "USD",
        transaction_id: sessionId || undefined,
      });

      // GA4 recommended event for donations/purchases
      gtag("event", "purchase", {
        transaction_id: sessionId || undefined,
        value,
        currency: "USD",
        items: [{ item_name: `Donation (${params.get("frequency") || "once"})` }],
      });
    } catch {
      // fail silently
    }
  }, []);

  return (
    <>
      <main className="min-h-[100svh] flex items-center justify-center px-6 py-16 bg-[#F6F0E6] dark:bg-[#0f1110]">
        <div className="max-w-md w-full text-center">
          <div className="flex justify-center mb-4">
            <Sprout
              className="h-12 w-12 text-green-600/80 dark:text-green-400/70"
              strokeWidth={1.6}
              aria-hidden="true"
            />
          </div>

          <p className="mb-4 text-[13px] tracking-[0.18em] uppercase font-medium text-black/70 dark:text-white/60">
            Contribution Received
          </p>

          <h1 className="text-2xl sm:text-3xl font-semibold text-black/85 dark:text-white leading-tight mb-6">
            Thank you for your contribution
          </h1>

          <p
            className={`text-base text-black/70 dark:text-white/70 mb-6 transition-opacity duration-500 ${
              showMessage ? "opacity-100" : "opacity-0"
            }`}
          >
            Your contribution has been processed successfully. A receipt will be
            sent to your email address.
          </p>

          <div className="mx-auto my-6 h-px w-20 bg-black/15 dark:bg-white/20" />

          <p className="text-sm text-black/55 dark:text-white/55 mb-7">
            ZenTrust is a 501(c)(3) public charity (EIN 33-4318487).
          </p>

          <Button asChild className="rounded-full px-7 py-3 text-sm font-semibold">
            <a href="/">
              Return to Home
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>

          <p className="mt-6 text-[11px] text-black/40 dark:text-white/40">
            ZenTrust · 501(c)(3) Public Charity · EIN 33-4318487
          </p>
        </div>
      </main>
    </>
  );
}
