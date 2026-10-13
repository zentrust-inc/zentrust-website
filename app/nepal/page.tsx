// app/nepal/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Droplets,
  Sprout,
  Mountain,
  Users,
  ShieldCheck,
  MapPin,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Nepal Food Forest & Watershed Restoration",
  description:
    "ZenTrust's program to restore a 150-hectare hillside in Kakani, Nepal with watershed management and a syntropic food forest. Help fund the Year-1 nursery and watershed work.",
  alternates: { canonical: "/nepal" },
};

const DONATE_HREF = "/stewardship/checkout?program=nepal&amount=100";

const facts = [
  { label: "Area", value: "150 hectares" },
  { label: "Elevation", value: "1,200–1,600 m" },
  { label: "Location", value: "Chauthe, Ward 3, Kakani Rural Municipality" },
  { label: "Year-1 goal", value: "$100,000" },
];

const plan = [
  {
    icon: Droplets,
    title: "Watershed management",
    text: "Slow, spread and sink monsoon rain so it recharges springs instead of washing soil downhill — using proven low-cost measures such as contour trenches, gully plugs, small check dams, recharge ponds and protection of spring sources.",
  },
  {
    icon: Sprout,
    title: "Community nursery",
    text: "Raise native trees, fodder, fruit and support species on site, so planting stock is adapted to the hills and local families gain nursery skills.",
  },
  {
    icon: Mountain,
    title: "Syntropic food forest",
    text: "Plant layered systems — canopy, fruit, shrubs and ground cover together — that rebuild soil and shade over time while producing food and fodder.",
  },
  {
    icon: Users,
    title: "Community-led stewardship",
    text: "Work with the people who live with this land, so the forest, the water and the income it creates are managed locally for the long term.",
  },
];

export default function NepalProgramPage() {
  return (
    <div className="min-h-screen">
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-background via-background to-muted/40 pt-28 pb-16 sm:pt-32 sm:pb-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-[13px] font-medium uppercase tracking-[0.18em] text-foreground/70">
            ZenTrust Program · Nepal
          </p>
          <h1 className="mt-5 text-balance text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
            Bringing water back to a Himalayan hillside
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-8 text-foreground/80">
            On 150 hectares of steep hill country in Kakani, Nepal, we are
            starting a watershed restoration and syntropic food forest — so
            rain soaks in, springs recover, and degraded slopes become living
            forest that feeds the community around it.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href={DONATE_HREF}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              Fund the Year-1 work
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="#plan"
              className="inline-flex items-center rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition hover:border-foreground/50"
            >
              See the plan
            </a>
          </div>
          <p className="mt-5 text-xs text-foreground/60">
            ZenTrust, Inc. is a 501(c)(3) public charity (EIN 33-4318487). US
            donations are tax-deductible as allowed by law.
          </p>
        </div>
      </section>

      {/* FACTS */}
      <section className="border-y border-border bg-muted/30">
        <dl className="mx-auto grid max-w-5xl grid-cols-2 gap-px px-6 py-10 md:grid-cols-4">
          {facts.map((f) => (
            <div key={f.label} className="px-2 py-3 text-center">
              <dt className="text-xs uppercase tracking-wide text-muted-foreground">
                {f.label}
              </dt>
              <dd className="mt-1 text-lg font-semibold text-foreground">
                {f.value}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <div className="mx-auto max-w-3xl px-6 py-16 space-y-16">
        {/* PROBLEM */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Why this land, why now
          </h2>
          <p className="text-base leading-7 text-foreground/80">
            In Nepal&apos;s middle hills, most rain arrives in a few monsoon
            months. On bare or degraded slopes it runs straight off — taking
            topsoil with it — and the springs that villages depend on in the
            dry season weaken. Restoring forest cover and the way water moves
            through a hillside is one of the most direct ways to reverse that.
          </p>
          <p className="text-base leading-7 text-foreground/80">
            Our site sits between 1,200 and 1,600 metres in Chauthe, Ward 3 of
            Kakani Rural Municipality. Its range of elevations and aspects makes
            it a working example that neighbouring communities can see, visit
            and copy.
          </p>
        </section>

        {/* PLAN */}
        <section id="plan" className="scroll-mt-24 space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              The plan
            </h2>
            <p className="text-base leading-7 text-foreground/80">
              The first year focuses on the two foundations everything else
              depends on: water and planting stock.
            </p>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {plan.map(({ icon: Icon, title, text }) => (
              <li
                key={title}
                className="rounded-2xl border border-border bg-card p-5"
              >
                <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
                <h3 className="mt-3 text-base font-semibold text-foreground">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-foreground/75">
                  {text}
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* YEAR 1 GOAL */}
        <section className="rounded-2xl border border-border bg-muted/30 p-6 sm:p-8 space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Year-1 goal: $100,000
          </h2>
          <p className="text-base leading-7 text-foreground/80">
            Our first-year target funds the watershed works and the community
            nursery that will supply the food forest. Every contribution —
            one-time or monthly — moves this work forward, and we will report
            progress openly as it happens.
          </p>
          <Link
            href={DONATE_HREF}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            Give to the Nepal program
            <ArrowRight className="h-4 w-4" />
          </Link>
        </section>

        {/* STATUS & PARTNERS */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Where things stand
          </h2>
          <p className="text-base leading-7 text-foreground/80">
            The program is in its planning and setup stage. The site lies
            within community forest managed by the Thumki Danda Gairikharka
            Community Forest User Group, and work will proceed under the
            group&apos;s forest management arrangements and the local approvals
            it requires. A Nepal-registered not-for-profit implementing entity
            is being established to carry out the work on the ground.
          </p>
          <p className="text-base leading-7 text-foreground/80">
            We will publish updates, photos and spending reports here as the
            work begins.
          </p>
        </section>

        {/* ACCOUNTABILITY */}
        <section className="flex gap-4 rounded-2xl border border-border p-6">
          <ShieldCheck
            className="h-6 w-6 shrink-0 text-primary"
            aria-hidden="true"
          />
          <div className="space-y-2 text-sm leading-6 text-foreground/75">
            <h2 className="text-base font-semibold text-foreground">
              How your gift is governed
            </h2>
            <p>
              Contributions are made to ZenTrust, Inc., a US 501(c)(3) public
              charity. ZenTrust&apos;s board approves and oversees all program
              funding, including any grants to implementing partners, under
              written agreements with reporting requirements. We honor donor
              program preferences wherever possible; final use of funds remains
              at the discretion of ZenTrust&apos;s board in furtherance of its
              charitable purposes.
            </p>
            <p>
              <Link href="/financials" className="underline underline-offset-4">
                Governance &amp; policies
              </Link>
            </p>
          </div>
        </section>

        {/* LOCATION NOTE */}
        <p className="flex items-center gap-2 text-xs text-muted-foreground">
          <MapPin className="h-4 w-4" aria-hidden="true" />
          Chauthe, Ward 3, Kakani Rural Municipality, Nepal
        </p>
      </div>
    </div>
  );
}
