// components/programs/HomePrograms.tsx
import Link from "next/link";
import { ArrowRight, Droplets, FileHeart } from "lucide-react";

const programs = [
  {
    icon: Droplets,
    kicker: "Nepal · Land & water",
    title: "Food Forest & Watershed Restoration",
    text: "Restoring 150 hectares of hillside in Kakani, Nepal — recharging springs, rebuilding soil and planting a syntropic food forest with the local community.",
    href: "/nepal",
    cta: "Explore the program",
  },
  {
    icon: FileHeart,
    kicker: "Nepal · Health",
    title: "Abhilekh Health Record",
    text: "A portable, patient-controlled health record so Nepali patients stop losing their medical history between hospitals.",
    href: "/abhilekh",
    cta: "Learn about Abhilekh",
  },
];

export function HomePrograms() {
  return (
    <section
      aria-labelledby="programs-heading"
      className="mx-auto max-w-5xl px-6 py-16"
    >
      <div className="mb-8 text-center">
        <p className="text-[13px] font-medium uppercase tracking-[0.18em] text-foreground/70">
          What we fund
        </p>
        <h2
          id="programs-heading"
          className="mt-3 text-3xl font-semibold tracking-tight text-foreground"
        >
          Our programs
        </h2>
      </div>

      <ul className="grid gap-6 md:grid-cols-2">
        {programs.map(({ icon: Icon, kicker, title, text, href, cta }) => (
          <li
            key={href}
            className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm"
          >
            <Icon className="h-7 w-7 text-primary" aria-hidden="true" />
            <p className="mt-4 text-xs uppercase tracking-wide text-muted-foreground">
              {kicker}
            </p>
            <h3 className="mt-1 text-xl font-semibold text-foreground">
              {title}
            </h3>
            <p className="mt-3 flex-1 text-sm leading-6 text-foreground/75">
              {text}
            </p>
            <Link
              href={href}
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary underline-offset-4 hover:underline"
            >
              {cta}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </li>
        ))}
      </ul>

      <div className="mt-10 text-center">
        <Link
          href="/stewardship/checkout"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
        >
          Support ZenTrust
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
