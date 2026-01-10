// app/questions/technology-and-future-orientation/page.tsx
import type { Metadata } from "next";
import { QuestionFrame } from "@/components/questions/QuestionFrame";

export const metadata: Metadata = {
  title:
    "Why does planning for the future feel harder just as technology becomes more powerful?",
  description:
    "A question-led exploration of how rapid technological acceleration disrupts long-held assumptions about work, security, and orientation.",
  other: {
    category: "Schools & Systems",
    subcategory: "technology-disruption-and-orientation",
  },
};

export default function TechnologyAndFutureOrientationPage() {
  return (
    <QuestionFrame
      category="Schools & Systems"
      question="Why does planning for the future feel harder just as technology becomes more powerful?"
      shortAnswer="Because rapid technological change reshapes how value, work, and security are created faster than people and institutions can adapt their assumptions."
      heroMetaphor="Imagine learning to navigate using familiar landmarks. Roads, buildings, and signs stay mostly the same. One day, the terrain begins shifting while you are still walking."
      sections={[
        {
          title: "Why does technological acceleration create unease instead of confidence?",
          answer:
            "Because speed removes the sense of stable ground people rely on to plan.",
          metaphor:
            "Imagine standing on a moving walkway that keeps speeding up. At first it helps. Eventually, balance becomes harder to maintain.",
          children:
            "When change happens gradually, people adjust expectations alongside it. Jobs, education, and savings strategies evolve slowly. Rapid acceleration breaks that rhythm. Skills lose relevance faster and long-term plans feel fragile. Even when technology promises abundance, the pace of change creates uncertainty about where to stand and what will still matter next.",
        },
        {
          title: "Why does advanced automation threaten so many professions at once?",
          answer:
            "Because it replaces patterns of thinking, not just physical labor.",
          metaphor:
            "Imagine many doors that once required different keys. Suddenly, one master key opens them all.",
          children:
            "Earlier technologies automated muscles. New systems automate judgment, analysis, and coordination. This reaches into law, finance, medicine, and administration simultaneously. When many roles rely on similar cognitive patterns, disruption spreads broadly instead of sector by sector. Concern shifts from specific jobs to how work itself is defined.",
        },
        {
          title: "What happens when technology advances faster than social agreement?",
          answer:
            "Trust in systems begins to weaken.",
          metaphor:
            "Imagine playing a game where the rules keep changing mid-round. Eventually, players stop believing the score matters.",
          children:
            "Institutions depend on shared belief that rules are fair and outcomes are legitimate. When technological change outpaces governance, disagreement intensifies. Loss is experienced differently and interpreted as injustice. Without trusted ways to resolve tension, polarization grows and cooperation becomes harder to sustain.",
        },
        {
          title: "Why do periods of technological dominance often lead to conflict?",
          answer:
            "Because control over powerful tools reshapes economic and political balance.",
          metaphor:
            "Imagine one team suddenly gaining a much faster vehicle in a race. The race continues, but its meaning changes.",
          children:
            "Across history, groups that gain decisive technological advantages accumulate influence quickly. Others feel threatened or left behind. Competition intensifies and technology becomes both an engine of progress and a source of fear. The same tools that create growth can amplify rivalry when trust erodes.",
        },
        {
          title: "Why does financial preparation alone feel insufficient in uncertain times?",
          answer:
            "Because money protects outcomes, not orientation.",
          metaphor:
            "Imagine packing supplies for a journey without knowing which direction the road will take.",
          children:
            "Saving and investing help buffer shocks, but they do not address deeper questions about purpose, belonging, or adaptability. When systems shift, knowing where to move, what to learn, and whom to trust matters as much as financial reserves. Security becomes multidimensional rather than purely monetary.",
        },
        {
          title: "Why does flexibility of location and skill become more valuable than stability?",
          answer:
            "Because change favors those who can move and reorient.",
          metaphor:
            "Imagine having several exits in a building instead of only one. You may never use them, but they change how safe the space feels.",
          children:
            "In uncertain environments, the ability to relocate, retrain, or adjust lifestyle becomes a form of resilience. History shows that those who could adapt geographically or professionally often fared better during major transitions. Stability still matters, but rigidity becomes a liability when conditions shift rapidly.",
        },
        {
          title:
            "Why does it appear, from a ZenTrust perspective, that individuals are failing rather than the assumptions guiding the system?",
          answer:
            "Because systems rarely question the beliefs they were built on.",
          metaphor:
            "Imagine blaming yourself for being lost while following a map drawn for a different city.",
          children:
            "From a ZenTrust perspective, anxiety emerges when old expectations are applied to new conditions. Productivity, career paths, and success were shaped by earlier technological eras. When those assumptions stop matching reality, confusion is internalized as personal inadequacy rather than recognized as a mismatch of models.",
        },
        {
          title:
            "What remains meaningful when work, money, and systems feel uncertain?",
          answer:
            "Relationships, contribution, and adaptability retain their grounding role.",
          metaphor:
            "Imagine a ship at sea during changing weather. The anchor does not stop the storm, but it prevents drifting completely.",
          children:
            "Across societies and eras, well-being correlates strongly with connection and meaningful engagement. When external structures wobble, these elements continue to support people. They do not eliminate uncertainty, but they anchor experience. Meaning shifts from fixed outcomes to ongoing participation in life with others.",
        },
      ]}
      ending={[
        "Technology changes the terrain faster than belief.",
        "Anxiety often marks where assumptions lag behind reality.",
        "Orientation begins when we notice that gap.",
      ]}
    />
  );
}
