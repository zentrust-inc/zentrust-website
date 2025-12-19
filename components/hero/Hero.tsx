import Link from "next/link";
import { Sprout } from "lucide-react";
import { Button } from "@/components/ui/button";

const DETERMINATION_LETTER_URL =
  "https://apps.irs.gov/pub/epostcard/dl/FinalLetter_33-4318487_ZENTRUSTINC_04072025_00.pdf";

export function Hero() {
  return (
    <section className="min-h-[85svh] flex items-center justify-center px-6 pt-20 pb-16">
      <div className="max-w-3xl w-full text-center">
        {/* Icon */}
        <div className="flex justify-center mb-5">
          <Sprout
            className="h-12 w-12 text-green-700 dark:text-green-400"
            strokeWidth={1.6}
            aria-hidden="true"
          />
        </div>

        {/* Institutional identity */}
        <p className="mb-4 text-[13px] tracking-[0.18em] uppercase font-medium text-black/80 dark:text-white/80">
          ZenTrust · 501(c)(3) Public Charity · EIN 33-4318487
        </p>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-black dark:text-white leading-tight mb-6">
          Healing land.
          <br />
          Supporting people.
          <br />
          Science for recovery.
        </h1>

        {/* Supporting text */}
        <p className="text-lg text-black/70 dark:text-white/70 max-w-2xl mx-auto mb-8">
          ZenTrust is a public charity helping nature and communities heal together through research, learning, and long-term stewardship.
        </p>

        {/* Trust confirmation */}
        <p className="mb-4 text-sm text-black/60 dark:text-white/60">
          Recognized as a 170(b)(1)(A)(vi) public charity.{" "}
          <a
            href={DETERMINATION_LETTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 font-medium
                       text-black/80 hover:text-black
                       dark:text-white/80 dark:hover:text-white"
          >
            View official determination letter
          </a>
        </p>

        {/* CTA — LINK (SERVER-RENDERED, FAST) */}
        <div className="flex justify-center mt-8">
          <Button asChild size="lg" className="px-8 py-5 text-lg rounded-xl">
            <Link href="/stewardship">
              Enter the Stewardship Portal
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
