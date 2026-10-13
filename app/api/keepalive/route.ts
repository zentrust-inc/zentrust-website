export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";

/**
 * GET /api/keepalive — called once a day by a Vercel cron (see vercel.json).
 * Free Supabase projects pause after a week without activity, which would
 * silently break newsletter signups. This calls the public `ping()` function
 * (returns 1, reads no data) to keep the project awake.
 */
export async function GET() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_PUBLISHABLE_KEY;
  if (!url || !key) {
    return NextResponse.json({ ok: false, error: "not configured" }, { status: 503 });
  }
  try {
    const res = await fetch(`${url.replace(/\/$/, "")}/rest/v1/rpc/ping`, {
      method: "POST",
      headers: { apikey: key, "Content-Type": "application/json" },
      body: "{}",
      cache: "no-store",
    });
    return NextResponse.json({ ok: res.ok, status: res.status }, { status: res.ok ? 200 : 502 });
  } catch (err) {
    console.error("Keepalive error:", err);
    return NextResponse.json({ ok: false }, { status: 502 });
  }
}
