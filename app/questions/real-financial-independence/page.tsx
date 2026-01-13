// app/questions/real-financial-independence/page.tsx

import type { Metadata } from "next";
import { QuestionFrame } from "@/components/questions/QuestionFrame";

export const metadata: Metadata = {
  title: "What does real financial independence actually look like?",
  description:
    "A question-led look at financial independence as low dependency and psychological safety, not dashboards, early retirement math, or escape fantasies.",
  other: {
    category: "Meaning & Seeking",
    subcategory: "real-financial-independence",
  },
};

export default function QuestionPage() {
  return (
    <QuestionFrame
      category="Meaning & Seeking"
      question="What does real financial independence actually look like?"
      shortAnswer="Real financial independence is when survival is no longer priced on a monthly timer, and your life can stay stable even if income pauses."
      heroMetaphor="Imagine a small home that can run for weeks even if the road is blocked. The pantry is full, the water is stored, and the lights still turn on at night. Nobody is celebrating, but nobody is panicking either."
      sections={[
        {
          title:
            "Why does financial independence still feel far away, even with decent income?",
          answer:
            "Because financial independence is often measured as a number while your nervous system measures it as exposure.",
          metaphor:
            "Imagine your phone battery says 80%, but the charging cable cuts in and out. You keep checking the icon because you do not trust it. The number looks fine, but the connection feels unreliable.",
          children: [],
        },
        {
          title:
            "Why doesn’t more money automatically create financial independence?",
          answer:
            "Because financial independence breaks when your expenses scale up with your identity.",
          metaphor:
            "Imagine pouring water into a bucket that has a slow crack near the bottom. You keep filling it and it keeps looking almost full. You never see it overflow.",
          children: [],
        },
        {
          title:
            "What kind of financial independence is built on low dependency instead of high income?",
          answer:
            "Financial independence grows when fewer essentials require permission from cash flow.",
          metaphor:
            "Imagine a kitchen where you can cook even if the market is closed. There is rice, lentils, salt, and a working stove. The door can stay shut for a while without drama.",
          children: [],
        },
        {
          title:
            "How does financial independence change when your life is not built on EMIs?",
          answer:
            "Financial independence feels calmer because the future stops demanding proof every month.",
          metaphor:
            "Imagine pushing a heavy cart uphill with a rope tied to your waist. Every few steps, someone tightens the rope and checks if you are still pulling. The hill is the same, but the tug never stops.",
          children: [],
        },
        {
          title:
            "What does financial independence look like in daily life, not spreadsheets?",
          answer:
            "Financial independence looks like ordinary days that do not require constant earning to stay safe.",
          metaphor:
            "Imagine waking up during heavy rain and realizing the roof is already repaired. You still hear the storm. But you do not run for buckets.",
          children: [],
        },
        {
          title:
            "Why does modern life resist financial independence and reward dependence?",
          answer:
            "Because financial independence threatens industries that profit from permanent monthly obligation.",
          metaphor:
            "Imagine a shop that sells umbrellas only on subscription. The umbrella works, but the payment never ends. When you try to cancel, the rain suddenly feels louder.",
          children: [],
        },
        {
          title:
            "What does ZenTrust notice when financial independence sounds like escape?",
          answer:
            "ZenTrust notices that financial independence is often imagined as a finish line, not as a safer way to live.",
          metaphor:
            "Imagine standing at a train station reading a timetable that never ends. Every train promises a better city. You keep holding your bag, waiting for the perfect departure.",
          children: [],
        },
        {
          title:
            "What if financial independence is the absence of fear, not the presence of more?",
          answer:
            "Financial independence may be the point where your life does not punish you for being human.",
          metaphor:
            "Imagine a chair that does not wobble when you sit down. You do not think about the chair at all. You only notice the room.",
          children: [],
        },
      ]}
      ending={[
        "A life can be rich without being fragile.",
        "A life can be stable without being impressive.",
        "A life can feel free without needing to escape.",
      ]}
    />
  );
}
