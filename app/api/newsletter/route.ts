export const runtime = "nodejs";

import { NextResponse } from "next/server";

/**
 * POST /api/newsletter
 * Body: { email: string, source?: string }
 *
 * Stores the subscriber in Supabase table `newsletter_subscribers`
 * (see supabase/newsletter_subscribers.sql) using the REST API, so no
 * extra npm dependency is needed.
 *
 * Required environment variables (server-side only, never NEXT_PUBLIC_):
 *   SUPABASE_URL                e.g. https://xxxx.supabase.co
 *   SUPABASE_SERVICE_ROLE_KEY   service role key (bypasses RLS)
 */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function POST(req: Request) {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !key) {
    console.error("Newsletter: SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY not set.");
    return NextResponse.json(
      { error: "Signups are temporarily unavailable. Please try again later." },
      { status: 503 }
    );
  }

  let body: { email?: unknown; source?: unknown };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const email =
    typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  const source =
    typeof body.source === "string" ? body.source.slice(0, 64) : "website";

  if (!email || email.length > 254 || !EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  try {
    const res = await fetch(
      `${url.replace(/\/$/, "")}/rest/v1/newsletter_subscribers?on_conflict=email`,
      {
        method: "POST",
        headers: {
          apikey: key,
          Authorization: `Bearer ${key}`,
          "Content-Type": "application/json",
          // Existing subscribers are left as-is (no error, no duplicate).
          Prefer: "resolution=ignore-duplicates,return=minimal",
        },
        body: JSON.stringify({ email, source }),
      }
    );

    if (!res.ok) {
      console.error("Newsletter insert failed:", res.status, await res.text());
      return NextResponse.json(
        { error: "Could not subscribe right now. Please try again." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Newsletter error:", err);
    return NextResponse.json(
      { error: "Could not subscribe right now. Please try again." },
      { status: 502 }
    );
  }
}
