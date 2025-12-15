// app/ads/[slug]/layout.tsx
import Link from "next/link";
import { TRUST } from "@/lib/ads/adsContent";

export default function AdsSlugLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen text-zinc-900 dark:text-zinc-50">

      {/* Minimal top bar (no CTA) */}
      <div className="mx-auto max-w-6xl px-4 pt-8 sm:px-6">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-sm font-medium text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-100"
          >
            ZenTrust
          </Link>
          {/* Preserve spacing while keeping acquisition language out of the UI */}
          <div aria-hidden className="text-xs text-zinc-500 dark:text-zinc-400" />
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        {children}
      </div>

      {/* Trust footer (Appendix A3) — always present */}
      <footer className="mx-auto max-w-6xl px-4 pb-10 sm:px-6">
        <div className="h-px w-full bg-zinc-200/70 dark:bg-zinc-800/70" />
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div>
            <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              {TRUST.legalName}
            </div>
            <p className="mt-2 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
              {TRUST.statusLine} · EIN {TRUST.ein} · Public Charity Status{" "}
              {TRUST.publicCharity}
            </p>
            <p className="mt-2 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
              This page is educational. It is not a commercial offer.
            </p>
          </div>

          <div className="md:justify-self-end">
            <div className="grid gap-2 text-sm text-zinc-700 dark:text-zinc-300">
              <Link className="underline underline-offset-4" href={TRUST.determinationHref}>
                IRS determination letter
              </Link>
              <Link className="underline underline-offset-4" href={TRUST.privacyHref}>
                Privacy (no data selling)
              </Link>
              <Link className="underline underline-offset-4" href={TRUST.financialsHref}>
                Financial transparency
              </Link>
              <Link className="underline underline-offset-4" href={TRUST.contactHref}>
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
