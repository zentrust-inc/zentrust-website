"use client";

import { useState } from "react";
import Image, { type StaticImageData } from "next/image";

/* The 75-second "Hold the Water" film, hosted on YouTube (@RascalTrust).

   Privacy and speed: nothing loads from YouTube until the visitor presses
   play. Until then we show our own still (a real drone frame of the site),
   so the page sets no YouTube cookies and stays fast. After the click we
   load the privacy-enhanced player (youtube-nocookie.com).

   To publish: paste the video's ID (the part after "watch?v=" or after
   "youtu.be/") into NEPAL_FILM_YOUTUBE_ID. While it is empty, the whole
   section stays hidden. */
export const NEPAL_FILM_YOUTUBE_ID = "";

type Props = { poster: StaticImageData };

export function NepalFilm({ poster }: Props) {
  const [playing, setPlaying] = useState(false);

  if (!NEPAL_FILM_YOUTUBE_ID) return null;

  const start = () => {
    setPlaying(true);
    const w = window as unknown as { gtag?: (...args: unknown[]) => void };
    if (typeof w.gtag === "function") {
      w.gtag("event", "video_start", {
        video_title: "Hold the Water: Chauthe",
        video_provider: "youtube",
        source: "nepal_page",
      });
    }
  };

  return (
    <section id="film" className="np-film" aria-labelledby="np-film-title">
      <div className="np-wrap">
        <div className="np-film-head">
          <h2 id="np-film-title">The story in 75 seconds</h2>
          <p>
            Drone footage of the Chauthe hills, and our plan to help the rain
            soak in. The plan scenes are illustrations; work has not started yet.
          </p>
        </div>
        <div className="np-film-frame">
          {playing ? (
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${NEPAL_FILM_YOUTUBE_ID}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
              title="Hold the Water: Chauthe (75-second film)"
              allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          ) : (
            <button type="button" className="np-film-poster" onClick={start} aria-label="Play the 75-second film: Hold the Water">
              <Image src={poster} alt="" fill sizes="(min-width: 1220px) 1180px, 100vw" placeholder="blur" />
              <span className="np-film-play" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="34" height="34"><path d="M8 5.5v13l11-6.5z" fill="currentColor" /></svg>
              </span>
              <span className="np-film-len" aria-hidden="true">Watch · 1:15</span>
            </button>
          )}
        </div>
        <p className="np-film-note">
          Plays from YouTube. Prefer to read? <a href="#rain">Follow a raindrop down the hill</a>.
        </p>
      </div>
    </section>
  );
}
