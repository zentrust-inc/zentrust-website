// app/questions/complete-ways-fragmented-world/page.tsx

import type { Metadata } from "next";
import { QuestionFrame } from "@/components/questions/QuestionFrame";

export const metadata: Metadata = {
  title: "Why do complete ways of living struggle inside a world built for fragments?",
  description:
    "A sharp examination of why coherent ways of living fail to stabilize inside systems designed to fund, measure, and manage isolated parts.",
  other: {
    category: "Schools & Systems",
    subcategory: "wholeness-vs-fragmentation",
  },
};

export default function QuestionPage() {
  return (
    <QuestionFrame
      category="Schools & Systems"
      question="Why do complete ways of living struggle inside a world built for fragments?"
      shortAnswer="Because modern systems are optimized to support separable parts, while complete ways of living only function when relationships, timing, and conditions remain intact."
      heroMetaphor="A machine is designed to repair parts one at a time. A living body arrives instead. Each adjustment helps briefly, but the body never stabilizes because it was never meant to be handled in pieces."
      sections={[
        {
          title: "What is meant by a complete way of living?",
          answer:
            "A way of living where health, work, land, meaning, and belonging operate as a single system.",
          children:
            "In lived experience, food connects to land, rest connects to safety, and work connects to meaning. These elements regulate each other continuously. A complete way of living does not separate them into independent problems. Stability emerges from coordination, not optimization of parts. When one element is removed or delayed, the whole loses coherence.",
          metaphor:
            "A wheel turns because all spokes hold tension together.",
        },
        {
          title: "Why are fragmented solutions easier to support?",
          answer:
            "Because fragments can be measured, funded, and controlled independently.",
          children:
            "Institutions operate through budgets, metrics, and ownership. Parts fit these tools. Wholeness does not. Relationships, time, and mutual dependence resist clean accounting. Fragmentation simplifies responsibility by narrowing scope. What is lost is not effectiveness, but integrity across time.",
          metaphor:
            "Bricks are counted easily. A living wall is not.",
        },
        {
          title: "Why does fragmentation repeatedly fail to resolve problems?",
          answer:
            "Because symptoms are addressed while conditions remain unchanged.",
          children:
            "Treating isolated outcomes can reduce immediate harm. It rarely alters the environment that produced the problem. Health improves briefly, stress returns. Productivity rises, exhaustion follows. Each fix resets the same pattern. Failure repeats because causality was never allowed to reorganize.",
          metaphor:
            "Water is bailed from a boat while the leak remains.",
        },
        {
          title: "Why does wholeness appear slow or impractical?",
          answer:
            "Because living systems stabilize through simultaneity, not sequence.",
          children:
            "Living systems do not assemble one component at a time. Soil, water, organisms, and climate interact together or not at all. From outside, this looks inefficient. From inside, it is the only way stability forms. Speed applied to parts delays completion of the whole.",
          metaphor:
            "Bread baked halfway never becomes bread.",
        },
        {
          title: "What happens when complete ways are forced into fragments?",
          answer:
            "They lose their internal regulation and require constant intervention.",
          children:
            "Once separated, each part needs management to replace lost coordination. External control increases as internal balance disappears. The system becomes expensive, fragile, and dependent on oversight. What once self-regulated now survives only through maintenance.",
          metaphor:
            "A forest becomes a garden that must be watered daily.",
        },
        {
          title: "Why do institutions misread this failure?",
          answer:
            "Because success is measured locally while damage accumulates systemically.",
          children:
            "Metrics show improvement in isolated areas. Long-term instability appears elsewhere and later. Responsibility remains fragmented, so no single failure is acknowledged. The system concludes that more effort is needed, not that design is misaligned.",
          metaphor:
            "One gauge rises while the structure weakens.",
        },
        {
          title: "ZenTrust: What does ZenTrust notice here?",
          answer:
            "ZenTrust notices where wholeness collapses under part-based management.",
          children:
            "ZenTrust does not promote a program or alternative system. It observes how complete ways of living become invisible when evaluation tools cannot register them. By holding attention on coherence rather than outcomes, the underlying mismatch becomes visible without intervention.",
          metaphor:
            "A mirror reflects the whole landscape, not the checkpoints.",
        },
        {
          title: "What remains when this mismatch is seen clearly?",
          answer:
            "Clarity about why wholeness struggles without being defective.",
          children:
            "Seeing the mismatch removes confusion. Complete ways of living are not unrealistic. They are incompatible with systems designed for fragments. What remains is accuracy about the source of strain, without requiring change, agreement, or action.",
          metaphor:
            "Fog lifts while the terrain stays the same.",
        },
      ]}
      ending={[
        "Fragments are easy to support.",
        "Wholeness requires coherence, not optimization.",
        "Seeing the mismatch restores orientation.",
      ]}
    />
  );
}
