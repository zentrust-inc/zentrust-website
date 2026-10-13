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
 * Required environment variables:
 *   SUPABASE_URL               e.g. https://xxxx.supabase.co
 *   SUPABASE_PUBLISHABLE_KEY   the project's publishable (public) key
 *
 * The table's row-level security lets the public key INSERT only: it cannot
 * read, change or delete subscribers, so no secret key is needed here.
 * Duplicates hit the unique email constraint (HTTP 409) and count as success.
 */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function POST(req: Request) {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_PUBLISHABLE_KEY;

  if (!url || !key) {
    console.error("Newsletter: SUPABASE_URL / SUPABASE_PUBLISHABLE_KEY not set.");
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
      `${url.replace(/\/$/, "")}/rest/v1/newsletter_subscribers`,
      {
        method: "POST",
        headers: {
          apikey: key,
          "Content-Type": "application/json",
          Prefer: "return=minimal",
        },
        body: JSON.stringify({ email, source }),
      }
    );

    // 409 = already subscribed: treat as success, no duplicate stored.
    if (!res.ok && res.status !== 409) {
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
