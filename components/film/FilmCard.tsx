"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { NEPAL_FILM_YOUTUBE_ID } from "@/components/nepal/NepalFilm";
import ridgeCrown from "@/app/nepal/media/ridge-crown.webp";

/* A compact card for the "Hold the Water" film, shown on guide and question
   pages just before the sign-up box. It answers "who is behind this page?"
   in 75 seconds for visitors who won't read to the end.

   Same rules as the /nepal film: nothing loads from YouTube until the
   visitor presses play (fast page, no YouTube cookies), then the
   privacy-enhanced player loads. Each play sends a GA4 "video_start" event
   with the page as `source`, so we can compare plays and sign-ups by page. */

type Props = {
  /** Where the card is shown, e.g. "guide:cover-crops" or "question:feeling-stuck-in-life" */
  source: string;
  heading?: string;
  text?: string;
};

export function FilmCard({
  source,
  heading = "Who is behind this page?",
  text = "ZenTrust is a US 501(c)(3) planning a food forest and water work on a dry hillside in Chauthe, Nepal. Real drone footage of the site; the plan scenes are illustrations, and work has not started yet.",
}: Props) {
  const [playing, setPlaying] = useState(false);

  if (!NEPAL_FILM_YOUTUBE_ID) return null;

  const start = () => {
    setPlaying(true);
    const w = window as unknown as { gtag?: (...args: unknown[]) => void };
    if (typeof w.gtag === "function") {
      w.gtag("event", "video_start", {
        video_title: "Hold the Water: Chauthe",
        video_provider: "youtube",
        source,
      });
    }
  };

  return (
    <section
      aria-labelledby="film-card-title"
      className="mx-auto my-10 max-w-3xl rounded-2xl border border-neutral-200 bg-white p-5 sm:p-6 dark:border-neutral-800 dark:bg-neutral-900"
    >
      <h2 id="film-card-title" className="text-lg font-semibold">
        {heading}
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">{text}</p>

      <div className="relative mt-4 aspect-video w-full overflow-hidden rounded-xl bg-neutral-900">
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${NEPAL_FILM_YOUTUBE_ID}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
            title="Hold the Water: Chauthe (75-second film)"
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            className="absolute inset-0 h-full w-full"
          />
        ) : (
          <button
            type="button"
            onClick={start}
            aria-label="Play the 75-second film: Hold the Water"
            className="group absolute inset-0 h-full w-full"
          >
            <Image src={ridgeCrown} alt="" fill sizes="(min-width: 800px) 720px, 100vw" placeholder="blur" className="object-cover" />
            <span
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-emerald-800 shadow-lg transition group-hover:scale-105"
            >
              <svg viewBox="0 0 24 24" width="30" height="30"><path d="M8 5.5v13l11-6.5z" fill="currentColor" /></svg>
            </span>
            <span
              aria-hidden="true"
              className="absolute bottom-3 right-3 rounded-md bg-black/65 px-2 py-1 text-xs font-medium text-white"
            >
              Watch · 1:15
            </span>
          </button>
        )}
      </div>

      <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">
        Plays from YouTube.{" "}
        <Link href="/nepal" className="font-medium text-emerald-800 underline dark:text-emerald-300">
          See the Nepal plan
        </Link>
      </p>
    </section>
  );
}
