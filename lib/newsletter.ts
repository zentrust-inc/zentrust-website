// lib/newsletter.ts
// Client helper shared by the homepage box and the /newsletter page.

export async function subscribeToNewsletter(
  email: string,
  source: string
): Promise<{ ok: true } | { ok: false; error: string }> {
  try {
    const res = await fetch("/api/newsletter", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, source }),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      return { ok: false, error: data?.error || "Could not subscribe. Please try again." };
    }

    // Analytics: GA4 recommended sign_up event (no-op if tags aren't loaded)
    try {
      const w = window as any;
      if (typeof w.gtag === "function") {
        w.gtag("event", "sign_up", { method: "newsletter", source });
      }
    } catch {
      /* ignore */
    }

    return { ok: true };
  } catch {
    return { ok: false, error: "Network error. Please try again." };
  }
}
