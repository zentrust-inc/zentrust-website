// app/questions/land-extraction-progress/page.tsx

import type { Metadata } from "next";
import { QuestionFrame } from "@/components/questions/QuestionFrame";

export const metadata: Metadata = {
  title: "Does the land benefit from your extraction?",
  description:
    "A question-led examination of whether extraction benefits land or primarily serves human systems of progress.",
  other: {
    category: "Nature & Land",
    subcategory: "land-extraction",
  },
};

export default function QuestionPage() {
  return (
    <QuestionFrame
      category="Nature & Land"
      question="Does the land benefit from your extraction?"
      shortAnswer="The land does not benefit from extraction because extraction converts living systems into short-term output while transferring long-term biological cost into the future."
      heroMetaphor="Imagine renting a room where you cook, wash, and sleep every day. You never clean the floor, fix the sink, or open the windows. When you leave, the room is quieter, but more worn than when you arrived."
      sections={[
        {
          title: "Why does extraction feel necessary for survival?",
          answer:
            "Extraction feels necessary because systems translate biological removal into immediate proof of productivity.",
          metaphor:
            "Imagine a wooden floor that still holds your weight. It does not creak or bend. Rot spreads underneath until one step finally breaks through.",
          children:
            "Daily life depends on outputs that arrive on schedule. Food appears, houses stand, and income continues. Because the land does not protest immediately, removal feels justified. Soil compacts, water drains faster, and diversity thins quietly. Extraction feels like survival because the system only registers what arrives today, not what disappears slowly underneath. The future is asked to absorb the cost so the present can remain stable.",
        },
        {
          title: "Why does extraction rarely feel like harm?",
          answer:
            "Extraction rarely feels like harm because its effects unfold beyond human emotional timescales.",
          metaphor:
            "Imagine removing one page from a book each day. The book still looks complete on the shelf. One day, the story no longer holds together.",
          children:
            "Land responds slowly. Erosion, depletion, and exhaustion accumulate across seasons rather than moments. Because no single action appears decisive, routines continue uninterrupted. The absence of crisis is mistaken for balance. Extraction hides inside normalcy, making harm difficult to feel while it is still reversible. Quiet loss is easier to live with than visible collapse.",
        },
        {
          title: "Why does careful extraction still remain extraction?",
          answer:
            "Careful extraction remains extraction because the structural direction of flow stays one-sided.",
          metaphor:
            "Imagine walking gently across a frozen lake. Your steps are light and deliberate. The ice still cracks under your weight.",
          children:
            "Intention can soften impact but cannot reverse design. Most infrastructure treats land as an input rather than a partner. Resources move outward toward human stability without mechanisms for biological return. Even careful use assumes the land exists to serve human continuity first. As long as direction remains unchanged, extraction persists regardless of care. The system drains slowly, not maliciously.",
        },
        {
          title: "How does extraction simplify land over time?",
          answer:
            "Extraction simplifies land by removing redundancy that supports resilience.",
          metaphor:
            "Imagine a choir losing one singer at a time. The melody remains recognizable. Depth and richness quietly disappear.",
          children:
            "Complex ecosystems handle stress through diversity. Extraction removes that diversity to maximize a narrow output. Soil loses organisms, water loses clarity, and plants lose buffering capacity. The land continues functioning but with fewer options. Stability becomes thin and fragile. What appears efficient is often a simplified system surviving on borrowed time.",
        },
        {
          title: "Why is extraction rewarded while care is delayed?",
          answer:
            "Extraction is rewarded because it produces fast, countable results.",
          metaphor:
            "Imagine burning furniture to heat a house during winter. Warmth arrives immediately. The room slowly empties.",
          children:
            "Systems favor outputs that can be measured and scheduled. Crops, buildings, and profit appear quickly through extraction. Regeneration unfolds quietly and unevenly. Because reward structures favor speed, extraction looks like success while care looks uncertain. The system pays for removal today and defers restoration indefinitely. Growth is counted while depletion is postponed.",
        },
        {
          title: "Why does the extraction script persist when it is seen?",
          answer:
            "The extraction script persists because stopping it threatens immediate human stability.",
          metaphor:
            "Imagine noticing a crack in a bridge you cross every day. You see it clearly. You still cross because there is no alternate route.",
          children:
            "Many lives depend on arrangements that remove more from land than they return. Debt, housing, and food systems lock people into continuation. Awareness does not instantly create alternatives. The land absorbs strain so social systems can remain intact. Persistence reflects dependence rather than ignorance. The cost is transferred to what cannot refuse.",
        },
        {
          title: "What does ZenTrust notice about extraction here?",
          answer:
            "ZenTrust notices extraction as a normalized relationship rather than a conscious choice.",
          metaphor:
            "Imagine a road so familiar no one remembers where it leads. Cars follow the lines automatically. The destination is never questioned.",
          children:
            "ZenTrust does not accuse or prescribe. It observes how extraction is framed as ordinary living under names like progress, housing, and productivity. When framed this way, the land disappears from awareness. ZenTrust holds attention on that disappearance. The mirror reveals how removal became routine before intention was considered.",
        },
        {
          title: "What remains when extraction is seen clearly?",
          answer:
            "When extraction is seen, the relationship becomes visible rather than automatic.",
          metaphor:
            "Imagine realizing the ground has been sloped for years. The ground stays the same. You stop compensating with your muscles.",
          children:
            "Seeing extraction does not repair damage or resolve dependency. It changes perception. The land is no longer background but participant. Its condition reflects the truth of the relationship rather than a personal failure. Awareness does not demand action here. It ends invisibility. What follows is not decided inside this room.",
        },
      ]}
      ending={[
        "The land has always been responding.",
        "Extraction compresses time into progress.",
        "Seeing precedes repair.",
      ]}
    />
  );
}
