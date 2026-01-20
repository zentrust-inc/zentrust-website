// app/questions/extracting-from-soil/page.tsx

import type { Metadata } from "next";
import { QuestionFrame } from "@/components/questions/QuestionFrame";

export const metadata: Metadata = {
  title: "Why do we keep extracting from soil instead of working with it?",
  description:
    "A question-led look at how extraction becomes structurally rewarded while living soil is asked to absorb the cost.",
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
      shortAnswer="We keep extracting from soil because extraction converts living systems into immediate output, allowing economic continuity to proceed while pushing biological cost into an invisible future."
      heroMetaphor="Imagine withdrawing a small amount of money from a shared account every day. The balance still looks fine for years, so no one worries. When the account finally empties, everyone is surprised."
      sections={[
        {
          title: "Why does extraction feel necessary for survival?",
          answer:
            "Extraction feels necessary because systems translate biological life into measurable yield and reward that conversion directly.",
          metaphor:
            "Imagine walking across a wooden floor that feels solid underfoot. Nothing creaks or bends. Rot spreads underneath until one step finally breaks through.",
          children:
            "From the surface, fields still produce and seasons repeat. Harvest arrives, markets function, and food continues to move. What disappears first cannot be seen from above ground. Soil structure weakens, life thins, and water drains faster. Because food still comes, the loss feels abstract. Extraction appears necessary because the system only registers what is removed, not what quietly disappears underneath.",
        },
        {
          title: "Why does the obvious explanation for extraction fail?",
          answer:
            "The obvious explanation fails because it blames individual choice while ignoring the structural pressure to extract.",
          metaphor:
            "Imagine telling someone to slow down while the floor behind them collapses. They hear the words clearly. Their feet keep moving anyway.",
          children:
            "Many people working land already know soil is alive. That knowledge does not erase debt, contracts, or narrow margins. Decisions occur inside schedules that do not pause for regeneration. Choosing care can feel like risking everything at once. Extraction continues not because of ignorance, but because the system penalizes anyone who slows down first. The cage is economic, not informational.",
        },
        {
          title: "What is actually performing the extraction from soil?",
          answer:
            "Extraction is performed by time compression that forces living cycles into artificial deadlines.",
          metaphor:
            "Imagine being paid only for speed, never for accuracy. Each day you move faster to survive. The mistakes appear later, long after payment ends.",
          children:
            "Soil life rebuilds slowly through cycles of return, rest, and decay. These rhythms do not align with quarterly metrics or seasonal debt. When success is paid only for immediate output, future capacity becomes expendable. Extraction is not just a tool or chemical. It is the enforced calendar that demands readiness before the land is ready. The soil is asked to keep pace with machines and markets.",
        },
        {
          title: "How does extraction change the human role over time?",
          answer:
            "Extraction turns participation into management, replacing relationship with constant control.",
          metaphor:
            "Imagine leaning on a crutch long after the injury healed. The leg does less work each year. Eventually standing feels impossible without support.",
          children:
            "Over time, attention shifts from observing life to correcting failures. Pests, erosion, and yield swings become emergencies to manage. The person moves from steward to operator of a declining system. This creates fatigue that feels like hard work but is actually vigilance. The land becomes dependent on inputs, and the human becomes dependent on managing them. Extraction reshapes both sides of the relationship.",
        },
        {
          title: "Why is regeneration difficult to trust under extraction?",
          answer:
            "Regeneration is difficult to trust because its earliest signals are quiet and unrewarded.",
          metaphor:
            "Imagine fixing a leak behind a wall. For weeks nothing looks different. Only later does the damp stop spreading.",
          children:
            "Regeneration begins underground in microbial life and structure. Early benefits are subtle and uneven. Slightly better moisture or steadier growth does not look convincing in a system trained to demand proof. Quiet recovery feels like risk because it offers no immediate guarantee. Extraction persists because it produces visible results quickly, while regeneration asks for patience the system does not pay for.",
        },
        {
          title: "Why does extraction continue even when harm is visible?",
          answer:
            "Extraction continues because performing productivity is rewarded more than sustaining life.",
          metaphor:
            "Imagine standing on a conveyor belt moving the wrong direction. Walking against it feels harder than staying still. Even turning around draws attention.",
          children:
            "Identity and survival become tied to output. Being seen as a producer carries social and financial safety. Slowing down risks judgment, isolation, or loss of credit. When many people face the same incentives, the pattern locks in. Continuing extraction feels safer than stepping into uncertainty alone. The system rewards motion, not repair.",
        },
        {
          title: "What does ZenTrust notice about extraction here?",
          answer:
            "ZenTrust notices extraction as a condition, not a moral failure.",
          metaphor:
            "Imagine judging a library only by how many books leave the building. The shelves look active and successful. One day the room is empty.",
          children:
            "ZenTrust does not prescribe a method or demand change. It observes the assumption that soil exists mainly for output. Under that assumption, extraction becomes logical and respectable. Care appears optional, even irresponsible. ZenTrust holds attention on the frame itself, allowing the mechanism to be seen without blame. The mirror shows the rule, not the solution.",
        },
        {
          title: "What remains when the extraction script is seen?",
          answer:
            "When the extraction script is seen, pressure softens before behavior changes.",
          metaphor:
            "Imagine setting down a heavy bag you did not realize you were carrying. The road stays the same. Your shoulders relax anyway.",
          children:
            "Seeing the mechanism does not immediately fix the soil or resolve debt. What changes first is the sense of urgency. The belief that force is the only option begins to loosen. The land is no longer framed as failing. It is seen as responding faithfully to impossible demands. Silence appears where performance once dominated.",
        },
      ]}
      ending={[
        "Extraction thrives where time is compressed.",
        "Living systems fail when forced to perform.",
        "Seeing the condition changes the weight carried.",
      ]}
    />
  );
}
