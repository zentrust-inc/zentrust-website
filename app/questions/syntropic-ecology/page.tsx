// app/questions/syntropic-ecology/page.tsx
import type { Metadata } from "next";
import { GlobalHero } from "@/components/hero/GlobalHero";

export const metadata: Metadata = {
  title: "Why does land keep degrading, even as we invest more into fixing it?",
  description:
    "A question-led exploration of why land fails when systems prevent it from repairing itself.",
  other: {
    category: "Nature & Land",
  },
};

function AccordionItem({
  title,
  answer,
  children,
}: {
  title: string;
  answer: string;
  children: React.ReactNode;
}) {
  return (
    <details className="group rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm transition dark:border-neutral-800 dark:bg-neutral-950">
      <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
        <div>
          <h3 className="text-base font-semibold tracking-tight sm:text-lg">
            {title}
          </h3>
          <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">
            <span className="font-medium text-neutral-900 dark:text-neutral-100">
              {answer}
            </span>
          </p>
        </div>

        <span
          className="mt-1 shrink-0 rounded-full border border-neutral-200 px-3 py-1 text-xs text-neutral-600 transition group-open:bg-neutral-50 dark:border-neutral-800 dark:text-neutral-400 dark:group-open:bg-neutral-900/40"
          aria-hidden="true"
        >
          Expand
        </span>
      </summary>

      <div className="mt-4 space-y-3 text-sm leading-relaxed text-neutral-800 dark:text-neutral-200">
        {children}
      </div>
    </details>
  );
}

export default function SyntropicEcologyPage() {
  const contentId = "content";

  return (
    <main className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-50">
      {/* ================= HERO ================= */}
      <GlobalHero
        mode="confirm"
        headline={`Why does land keep degrading,
even as we invest more into fixing it?`}
        dek={
          <>
            <p>
              Many assume degradation means depleted soil, climate change, or
              not enough effort.
            </p>
            <p>
              That assumption quietly causes harm.
            </p>
            <p>
              When land is treated as an extractive system, effort hides failure
              instead of restoring function.
            </p>
            <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">
              The detailed answer is unfolded below, one layer at a time.
            </p>
          </>
        }
        belowAnchorId={contentId}
      />

      {/* ================= CONTENT ================= */}
      <section
        id={contentId}
        className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16"
      >
        <div className="max-w-3xl space-y-4">
          <AccordionItem
            title="Why does this land keep needing repair?"
            answer="Because the system no longer allows the land to repair itself."
          >
            <p>Imagine land where crops once grew easily.</p>
            <p>Seeds sprouted. Rain soaked in. Soil stayed dark and alive.</p>
            <p>Over time, harvests shrink.</p>
            <p>More effort is applied.</p>
            <p>Fertilizer turns the field green again. For a while, it looks fixed.</p>
            <p>But something subtle has changed.</p>
            <p>
              What soil life once handled is now replaced by products.
              What structure once existed is now replaced by inputs.
            </p>
            <p>Nothing here is careless or wrong.</p>
            <p>
              But together, these changes remove the land’s ability to recover
              on its own.
            </p>
          </AccordionItem>

          <AccordionItem
            title="Why does each fix only work for a short time?"
            answer="Because visible problems are treated while deeper losses remain."
          >
            <p>Fertilizer dries soil faster. Irrigation is added.</p>
            <p>Pests appear. Chemicals follow.</p>
            <p>Each fix solves exactly what it targets.</p>
            <p>
              None of them rebuild the relationships beneath the surface.
            </p>
          </AccordionItem>

          <AccordionItem
            title="Why does something new break every season?"
            answer="Because the land’s internal cycles are no longer completing."
          >
            <p>In healthy land, what is taken is replaced.</p>
            <p>When cycles break, nothing finishes.</p>
            <p>Each season removes more than the last one rebuilt.</p>
          </AccordionItem>

          <AccordionItem
            title="Why does the forest nearby not collapse?"
            answer="Because its relationships remain intact."
          >
            <p>No fertilizer. No irrigation. No intervention.</p>
            <p>Leaves feed soil. Roots hold water. Life supports life.</p>
            <p>The difference is not effort.</p>
            <p>It is design.</p>
          </AccordionItem>

          <AccordionItem
            title="What was the real problem all along?"
            answer="The system prevented the land from helping itself."
          >
            <p>Effort was never the issue.</p>
            <p>Design was.</p>
          </AccordionItem>

          {/* ======== MANDATORY ZENTRUST SUB-QUESTION ======== */}
          <AccordionItem
            title="Why does ZenTrust seem slow or fragile by comparison?"
            answer="Because it is structured to restore relationships, not extract results."
          >
            <p>
              ZenTrust does not optimize for speed, yield spikes, or visible
              short-term success.
            </p>
            <p>
              It works at the level of relationships—soil, water, people, time.
            </p>
            <p>
              Inside systems that reward quick fixes, this can look inefficient.
            </p>
          </AccordionItem>

          <AccordionItem
            title="Orientation"
            answer="Understanding clarifies why fixing more often heals less."
          >
            <p>Land fails when systems block its ability to recover.</p>
            <p>Repair works when function is restored.</p>
          </AccordionItem>
        </div>

        <footer className="mt-14 border-t pt-6 text-sm text-neutral-600 dark:text-neutral-400">
          ZenTrust, Inc. | EIN 33-4318487 | 501(c)(3)
        </footer>
      </section>
    </main>
  );
}
