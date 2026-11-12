// components/newsletter/InlineSignup.tsx
// Compact newsletter box for content pages (questions, guides).
// Uses the same /api/newsletter endpoint and GA4 sign_up event as the homepage box.

"use client";

import { useState } from "react";
import { subscribeToNewsletter } from "@/lib/newsletter";

type InlineSignupProps = {
  /** Stored with the subscriber, e.g. "question:chronic-fawning" (max 64 chars). */
  source: string;
  heading?: string;
  body?: string;
};

export function InlineSignup({
  source,
  heading = "Get the next question by email",
  body = "New questions, and field notes from our food forest in the hills of Nepal. A few emails a year.",
}: InlineSignupProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setStatus("loading");
    const result = await subscribeToNewsletter(email, source.slice(0, 64));
    if (result.ok) {
      setStatus("done");
    } else {
      setError(result.error);
      setStatus("error");
    }
  }

  return (
    <aside
      aria-label="Newsletter sign-up"
      className="mx-auto my-10 max-w-3xl rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900"
    >
      {status === "done" ? (
        <p className="text-center text-sm text-neutral-800 dark:text-neutral-200">
          Thank you. You&apos;re on the list.
        </p>
      ) : (
        <>
          <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
            {heading}
          </h2>
          <p className="mt-1 text-sm text-neutral-700 dark:text-neutral-300">{body}</p>
          <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-3 sm:flex-row">
            <label htmlFor={`signup-${source}`} className="sr-only">
              Email address
            </label>
            <input
              id={`signup-${source}`}
              type="email"
              required
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="min-w-0 flex-1 rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-emerald-600 dark:border-neutral-700 dark:bg-neutral-950 dark:text-neutral-50"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="rounded-lg bg-emerald-700 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-800 disabled:opacity-60"
            >
              {status === "loading" ? "Signing up…" : "Sign up"}
            </button>
          </form>
          {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
          <p className="mt-3 text-xs text-neutral-500">
            We respect your privacy and never share your email. Unsubscribe anytime.
          </p>
        </>
      )}
    </aside>
  );
}
