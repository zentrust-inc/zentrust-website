// app/questions/incentives-altruism-egoism/page.tsx

import type { Metadata } from "next";
import { QuestionFrame } from "@/components/questions/QuestionFrame";

export const metadata: Metadata = {
  title: "Why do incentives demand altruism but reward egoism?",
  description:
    "A question-led look at how incentives shape behavior by asking for care while distributing advantage elsewhere.",
  other: {
    category: "Schools & Systems",
    subcategory: "incentives-altruism-egoism",
  },
};

export default function QuestionPage() {
  return (
    <QuestionFrame
      category="Schools & Systems"
      question="Why do incentives demand altruism but reward egoism?"
      shortAnswer="Because incentives stabilize systems by extracting altruism while allocating safety, status, and power to egoism."
      heroMetaphor="A workplace praises teamwork every morning. One person quietly absorbs extra tasks so nothing breaks. Another person presents the results and receives the promotion."
      sections={[
        {
          title: "Why do incentives rely on altruism?",
          answer:
            "Incentives rely on altruism because care absorbs friction that would otherwise destabilize the system.",
          metaphor:
            "A shock absorber sits beneath a car. It compresses every time the road is uneven. The ride stays smooth while the absorber wears down.",
          children:
            "Incentives are designed to keep systems functioning without constant conflict. Altruism fills gaps, smooths tension, and prevents visible failure. Because it works quietly, it becomes assumed rather than protected. Over time, care is treated as an unlimited resource instead of a finite contribution. The system remains stable while the cost accumulates elsewhere.",
        },
        {
          title: "How do incentives reward egoism?",
          answer:
            "Incentives reward egoism by concentrating recognition and protection around visible self-advantage.",
          metaphor:
            "Two people cross a river. One builds the bridge while the other cuts the ribbon. The crowd applauds the ribbon.",
          children:
            "Egoistic behavior announces itself through speed, confidence, and claims of ownership. Incentives are built to notice outputs, not maintenance. The person who takes credit becomes legible to the system. The person who prevents collapse often disappears into normality. Over time, visibility becomes confused with value.",
        },
        {
          title: "Why do incentives create moral confusion?",
          answer:
            "Incentives create moral confusion by praising one behavior in language while rewarding another in outcomes.",
          metaphor:
            "A sign says quiet is required. The loudest table gets served first. Everyone notices but keeps eating.",
          children:
            "People are taught that goodness will be protected. Incentives then contradict that lesson through lived experience. The mismatch creates unease rather than rebellion. Individuals begin to doubt themselves instead of the structure. Confusion persists because the rules are split between speech and consequence.",
        },
        {
          title: "How do incentives make altruism invisible?",
          answer:
            "Incentives hide altruism by normalizing it once it becomes reliable.",
          metaphor:
            "A clock keeps perfect time for years. No one mentions it. When it stops, everyone complains.",
          children:
            "When care is consistent, it fades into expectation. The system stops registering it as an action and starts treating it as background. This invisibility makes altruism easy to assign and hard to defend. The person giving care may feel unnecessary even while being essential. The structure continues unchanged.",
        },
        {
          title: "Why do incentives train egoism as strength?",
          answer:
            "Incentives train egoism as strength by rewarding certainty and boundary enforcement under pressure.",
          metaphor:
            "One person claims the last chair without asking. Others stand. The seated person is called decisive.",
          children:
            "Egoism reduces ambiguity. It signals self-protection and speed. Incentives often equate these signals with reliability. Consideration and restraint appear slower and less certain. The system selects for what moves quickly, not what sustains quietly.",
        },
        {
          title: "Why do incentives repeat this pattern everywhere?",
          answer:
            "Incentives repeat the pattern by reproducing the same reward logic across institutions.",
          metaphor:
            "Different games use different boards. The scoring system stays the same. Players adapt quickly.",
          children:
            "Schools, families, and workplaces use different language but similar rewards. Compliance stabilizes environments. Assertion captures resources. People learn early which role brings safety. The repetition makes the pattern feel natural rather than designed.",
        },
        {
          title: "What does ZenTrust notice about incentives here?",
          answer:
            "ZenTrust notices how incentives extract care while redirecting reward without acknowledgment.",
          metaphor:
            "A mirror hangs in a hallway. People pass through carrying different loads. The mirror stays still.",
          children:
            "ZenTrust does not argue for or against incentives. It observes how they quietly shape behavior and expectation. It notices the exhaustion that follows unprotected care. ZenTrust holds attention on the moment where the structure becomes visible. Nothing is corrected or replaced.",
        },
        {
          title: "Why do incentives remain unquestioned once seen?",
          answer:
            "Incentives remain unquestioned because comfort replaces clarity after initial recognition.",
          metaphor:
            "A gardener trims plants inside a walled garden. The rows look neat at dusk. The wall stays tall.",
          children:
            "Seeing the structure creates brief discomfort. Acting on that recognition would disrupt identity and belonging. The system offers comfort in return for compliance. Over time, the discomfort fades and routines resume. The incentive logic continues intact.",
        },
      ]}
      ending={[
        "Care can hold systems together.",
        "Rewards often follow a different path.",
        "Clarity begins when incentives are seen.",
      ]}
    />
  );
}
