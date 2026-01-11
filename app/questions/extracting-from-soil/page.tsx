// app/questions/extracting-from-soil/page.tsx

import type { Metadata } from "next";
import { QuestionFrame } from "@/components/questions/QuestionFrame";

export const metadata: Metadata = {
  title: "Why do we keep extracting from soil instead of working with it?",
  description:
    "A question-led look at why short-term output stays easier to reward than long-term soil life.",
  other: {
    category: "Nature & Land",
    subcategory: "soil-extraction",
  },
};

export default function QuestionPage() {
  return (
    <QuestionFrame
      category="Nature & Land"
      question="Why do we keep extracting from soil instead of working with it?"
      shortAnswer="Because systems reward immediate output while pushing the cost of damage far enough into the future that no one feels responsible in the present."
      heroMetaphor="Imagine withdrawing a small amount of money from a shared account every day. The balance still looks fine for years, so no one worries. When the account finally empties, everyone is surprised."
      sections={[
        {
          title: "Why does this keep feeling normal?",
          answer:
            "Because harvest stays visible while the slow loss underneath stays easy to miss.",
          metaphor:
            "Imagine a wooden floor that still holds your weight. It does not creak, so nothing seems wrong. The rot spreads underneath until one step goes through.",
          children:
            "From the surface, the land still works. Crops grow, fields look familiar, and seasons repeat. What disappears first cannot be seen from above ground. Organic matter thins, soil clumps break apart, and the ground holds less water. Because food still arrives, the damage feels unreal. The question returns only when something finally fails, even though the change began long before anyone noticed.",
        },
        {
          title: "Why does the obvious explanation fall short?",
          answer:
            "Because blaming ignorance ignores the pressure people are operating under.",
          metaphor:
            "Imagine telling someone to slow down while the floor behind them is collapsing. They hear the words clearly. Their feet keep moving anyway.",
          children:
            "Many people working land already know soil is alive. That knowledge does not remove debt, contracts, weather risk, or market timing. Decisions happen inside deadlines and thin margins. When survival depends on the next yield, long-term care becomes secondary. Calling the pattern ignorance misses the condition. The behavior continues not because people do not know, but because stopping feels unsafe in the system they are inside.",
        },
        {
          title: "What is actually doing the extracting?",
          answer: "Time pressure built into how success is measured and paid for.",
          metaphor:
            "Imagine being paid only for speed, never for accuracy. Each day, you move faster to survive. The mistakes appear later, long after payment is complete.",
          children:
            "A season is short, and the reward often comes only if output is high right now. Slow-building soil life does not fit a quarterly clock. Practices that show immediate results get chosen again and again. Practices that rebuild quietly are treated as risky because the payoff is delayed. The extracting is not only a tool or a method. It is the calendar that is being enforced, and the fear of falling behind it.",
        },
        {
          title: "How does this play out over time?",
          answer:
            "The land becomes dependent on fixes while losing its own ability to recover.",
          metaphor:
            "Imagine leaning on a crutch long after the injury healed. The leg does less work each year. Eventually, standing feels impossible without support.",
          children:
            "At first, the field still produces, so the extra inputs feel like normal maintenance. Over time, the soil holds less water, roots stay shallower, and crops swing harder with weather. More correction is needed to get the same harvest. Costs rise. Stress rises. The land stops buffering shock and starts passing it through. The farm can look productive while becoming more fragile with each cycle.",
        },
        {
          title: "What makes regeneration hard to trust?",
          answer:
            "Because the earliest changes are subtle and mostly invisible at the surface.",
          metaphor:
            "Imagine fixing a leak behind a wall. For weeks, nothing looks different from the room. Only later does the damp stop spreading.",
          children:
            "Regeneration begins underground. Soil structure takes time to rebuild, and living communities return gradually. Early benefits can feel uncertain: slightly better moisture, fewer crusted patches, a steadier crop in a small corner. These signals do not look dramatic. In a world trained to trust only visible proof, quiet progress is treated like no progress. The work can be real while still not feeling convincing in the short term.",
        },
        {
          title: "Why does the pattern persist even when harm is known?",
          answer:
            "Because continuing feels safer than stepping into uncertainty while others keep racing.",
          metaphor:
            "Imagine standing on a conveyor belt moving the wrong direction. Walking against it feels harder than staying still. Even turning around draws attention you do not want.",
          children:
            "Changing how land is treated can threaten income, reputation, and relationships. There is also the fear of a bad year, the fear of being judged, and the fear of losing the farm before the soil recovers. When many people are locked into the same incentives, the system keeps everyone moving the same way. Participation becomes automatic. The cost of refusing the pattern can feel immediate, while the cost of continuing feels delayed.",
        },
        {
          title: "ZenTrust self-question: What was I assuming soil was for?",
          answer: "Output first, continuity second.",
          metaphor:
            "Imagine judging a library only by how many books leave the building. The shelves look active, so it feels successful. One day, the room is empty.",
          children:
            "ZenTrust asks you to notice the quiet assumption, not to adopt a position. If soil is framed mainly as a production surface, extraction becomes logical and even respectable. Care then looks optional, like decoration added only when convenient. If soil is framed as a living commons, the same actions can start to look different without anyone being blamed. The shift begins at the level of what is being taken for granted.",
        },
        {
          title: "What changes when the assumption loosens?",
          answer:
            "Pressure can drop before behavior changes, because the story driving urgency softens.",
          metaphor:
            "Imagine setting down a heavy bag you did not realize you were carrying. The road is the same. Your shoulders still relax.",
          children:
            "When the hidden assumption is seen, urgency can feel less absolute. The need to force results every season may not feel like the only way to survive. Nothing here requires a plan or a promise. This is simply what can happen when a living system is no longer treated like a bank account that can be withdrawn from forever. Sometimes the first shift is not a new practice, but a quieter mind around the same field.",
        },
      ]}
      ending={[
        "Extraction thrives where time is compressed.",
        "Regeneration begins where pressure eases.",
        "Seeing the condition clearly requires no agreement.",
      ]}
    />
  );
}
