// app/questions/why-do-we-keep-mining-soil-instead/page.tsx

import type { Metadata } from "next";
import { QuestionFrame } from "@/components/questions/QuestionFrame";

export const metadata: Metadata = {
  title: "Why do we keep mining soil instead?",
  description:
    "A question-led exploration of why short-term yield keeps beating long-term soil stewardship.",
  other: {
    category: "Nature & Land",
    subcategory: "soil-health",
  },
};

export default function QuestionPage() {
  return (
    <QuestionFrame
      category="Nature & Land"
      question="Why do we keep mining soil instead?"
      shortAnswer="Because systems reward immediate output while pushing the cost of damage far enough into the future that no one feels responsible in the present."
      heroMetaphor="Imagine withdrawing a small amount of money from a shared account every day. The balance still looks fine for years, so no one worries. When the account finally empties, everyone is surprised."
      sections={[
        {
          title: "Why does this confusion keep returning?",
          answer:
            "Because visible harvest can continue even as the soil's invisible support quietly thins out.",
          metaphor:
            "Imagine a wooden floor that still holds your weight. It does not creak, so nothing seems wrong. The rot spreads underneath until one step goes through.",
          children:
            "From the surface, the land still works. Crops grow, fields look familiar, and seasons repeat. What disappears first cannot be seen from above ground. Microbes thin out, organic matter fades, and soil structure weakens quietly. Because food still arrives, concern feels unnecessary. The question only returns when something finally fails, even though the change began long before anyone noticed.",
        },
        {
          title: "Why does the obvious explanation fail?",
          answer:
            "Because blaming awareness ignores the pressure people are operating under.",
          metaphor:
            "Imagine telling someone to slow down while the floor behind them is collapsing. They hear the advice. Their feet keep moving anyway.",
          children:
            "Many people working land already know soil is alive. That knowledge does not remove debt, contracts, weather risk, or market timing. Decisions happen inside constraints. When survival depends on the next yield, long-term care becomes secondary. Calling this ignorance misses the condition. The behavior persists not because people do not know better, but because stopping can feel unsafe.",
        },
        {
          title: "What is actually doing the extracting?",
          answer: "Time compression imposed by economic design.",
          metaphor:
            "Imagine being paid only for speed, never for accuracy. Each day, you move faster. The mistakes appear later, long after payment is complete.",
          children:
            "The system rewards output per season, not stability across decades. Fast returns matter more than slow resilience. Inputs that act immediately fit this clock. Processes that take years do not. Extraction can look like the only rational move when the timeline is forced and the penalties for falling short arrive quickly. The soil carries the hidden cost because it cannot invoice the present.",
        },
        {
          title: "How does this pattern unfold over time?",
          answer: "Dependency replaces capacity, so the land needs more correction to look normal.",
          metaphor:
            "Imagine leaning on a crutch long after the injury healed. The leg does less work each year. Eventually, standing feels impossible without support.",
          children:
            "As soil loses structure and life, it holds less water and fewer nutrients. Each season requires more correction just to keep output steady. Inputs increase, costs rise, and margins thin. The land becomes less able to buffer stress. Floods hit harder, droughts last longer, and pests swing wider. The farm still functions, but it functions by adding more force where quiet capacity used to be.",
        },
        {
          title: "Why does regeneration appear inefficient?",
          answer:
            "Because rebuilding happens underground before results become visible above ground.",
          metaphor:
            "Imagine fixing a leak behind a wall. For weeks, nothing looks different. Only later does the damp stop spreading.",
          children:
            "Regeneration starts with changes you cannot easily point to. Roots deepen, microbes return, and soil aggregates form slowly. Early benefits feel subtle and uncertain, not dramatic. In a system trained to trust only what is measurable this season, invisible progress is treated as no progress. What is slow gets labeled risky, even when the current path is already producing long-term loss.",
        },
        {
          title: "Why does the pattern persist even when harm is known?",
          answer:
            "Because continuing feels safer than stepping into uncertainty inside a competitive system.",
          metaphor:
            "Imagine standing on a conveyor belt moving the wrong direction. Walking against it feels harder than staying still. You end up drifting anyway.",
          children:
            "Changing practices can threaten income, identity, and belonging. Even when degradation is recognized, reducing extraction can feel like falling behind peers or missing a payment. The safest move inside a harmful structure is often to keep cooperating with it. The system then reads cooperation as proof that the system is fine. This is how known harm becomes normal, not by denial, but by dependency.",
        },
        {
          title: "ZenTrust self-question: What was I assuming soil was for?",
          answer: "Output, not continuity.",
          metaphor:
            "Imagine measuring a library only by how many books leave the building. The shelves look active and successful. The emptiness appears later.",
          children:
            "When soil is framed mainly as a production surface, extraction becomes logical and care looks optional. This assumption often goes unnamed, yet it shapes every decision around land use. It also shifts blame onto individuals when outcomes degrade, even though the incentives were steering behavior all along. Noticing the assumption does not demand action. It simply makes the pattern visible without needing a villain.",
        },
        {
          title: "What changes first when that assumption loosens?",
          answer:
            "Pressure drops before behavior changes, because the spell of urgency weakens.",
          metaphor:
            "Imagine setting down a heavy bag you did not realize you were carrying. Nothing else changes in the room. Your shoulders still relax.",
          children:
            "When soil is seen as a living system rather than a resource pool, urgency softens. The need to force outcomes every season becomes easier to question. This is not a method and not a pledge. It is a shift in what feels normal to demand from a living thing. The moment pressure drops, different choices become imaginable, even if nothing changes right away.",
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
