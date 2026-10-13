// app/abhilekh/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  FileText,
  Lock,
  Share2,
  ScanText,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Abhilekh — A Patient-Controlled Health Record for Nepal",
  description:
    "Abhilekh is a portable, patient-controlled health record for Nepal, supported by ZenTrust. Your medical history follows you — not a plastic bag of paper reports.",
  alternates: { canonical: "/abhilekh" },
};

const DONATE_HREF = "/stewardship/checkout?program=abhilekh&amount=50";

const features = [
  {
    icon: FileText,
    title: "One record that travels with you",
    text: "Reports, prescriptions and test results from different hospitals and labs, kept together in one place the patient controls.",
  },
  {
    icon: ScanText,
    title: "Built for real Nepali documents",
    text: "Designed to read the paperwork patients actually carry — handwritten notes, mixed Nepali and English, and Bikram Sambat dates.",
  },
  {
    icon: Share2,
    title: "Share only what you choose",
    text: "Patients decide which documents a doctor can see, one document at a time, with PIN protection.",
  },
  {
    icon: Lock,
    title: "Minimal data by design",
    text: "No national ID, insurance number or home address required. We collect only what is needed to keep a useful record.",
  },
];

export default function AbhilekhPage() {
  return (
    <div className="min-h-screen">
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-background via-background to-muted/40 pt-28 pb-16 sm:pt-32 sm:pb-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-[13px] font-medium uppercase tracking-[0.18em] text-foreground/70">
            ZenTrust Program · Abhilekh (अभिलेख)
          </p>
          <h1 className="mt-5 text-balance text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
            Your medical history should follow you — not a plastic bag
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-8 text-foreground/80">
            In Nepal, most patients carry their medical history as loose paper
            reports from hospital to hospital — and pieces get lost along the
            way. Abhilekh is a portable, patient-controlled health record that
            keeps it together and puts the patient in charge of who sees it.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href={DONATE_HREF}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              Support Abhilekh
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition hover:border-foreground/50"
            >
              Partner with us
            </Link>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-6 py-16 space-y-16">
        {/* FEATURES */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            What Abhilekh does
          </h2>
          <ul className="grid gap-4 sm:grid-cols-2">
            {features.map(({ icon: Icon, title, text }) => (
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

        {/* STATUS */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Where things stand
          </h2>
          <p className="text-base leading-7 text-foreground/80">
            Abhilekh is in development. Working prototypes have been built and
            tested with synthetic data only — no real patient information is
            used. Before any real patient data is handled, the system will go
            through an independent security review.
          </p>
          <p className="text-base leading-7 text-foreground/80">
            Support at this stage funds the core build, the security review and
            a first pilot with clinics and patients in Nepal.
          </p>
        </section>

        {/* PRIVACY */}
        <section className="flex gap-4 rounded-2xl border border-border p-6">
          <ShieldCheck
            className="h-6 w-6 shrink-0 text-primary"
            aria-hidden="true"
          />
          <div className="space-y-2 text-sm leading-6 text-foreground/75">
            <h2 className="text-base font-semibold text-foreground">
              Privacy first
            </h2>
            <p>
              Abhilekh is built on proven, managed infrastructure with
              encryption, collects as little personal data as possible, and
              gives patients control over every share. Abhilekh does not provide
              medical advice; it keeps records so patients and their doctors can
              see them.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-2xl border border-border bg-muted/30 p-6 sm:p-8 space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Help build it
          </h2>
          <p className="text-base leading-7 text-foreground/80">
            Contributions are made to ZenTrust, Inc., a US 501(c)(3) public
            charity (EIN 33-4318487), and are tax-deductible as allowed by law.
            We honor program preferences wherever possible; final use of funds
            remains at the discretion of ZenTrust&apos;s board in furtherance
            of its charitable purposes.
          </p>
          <Link
            href={DONATE_HREF}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            Give to Abhilekh
            <ArrowRight className="h-4 w-4" />
          </Link>
        </section>
      </div>
    </div>
  );
}
