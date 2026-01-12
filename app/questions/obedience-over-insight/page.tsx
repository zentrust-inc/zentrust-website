// app/questions/obedience-over-insight/page.tsx

import type { Metadata } from "next";
import { QuestionFrame } from "@/components/questions/QuestionFrame";

export const metadata: Metadata = {
  title: "Why do systems reward obedience over insight?",
  description:
    "A question-led exploration of why many systems optimize for predictability and compliance rather than intelligence, creativity, or independent judgment.",
  other: {
    category: "Schools & Systems",
    subcategory: "obedience-risk-minimization",
  },
};

export default function QuestionPage() {
  return (
    <QuestionFrame
      category="Schools & Systems"
      question="Why do systems reward obedience over insight?"
      shortAnswer="Because systems are designed to minimize risk and variability, and independent thinking introduces uncertainty they are not built to absorb."
      heroMetaphor="Imagine a conveyor belt calibrated for objects of one exact shape. Anything uniform moves smoothly. Anything unusual, even if valuable, causes friction and is quietly removed so the belt can keep running."
      sections={[
        {
          title: "What are systems actually optimizing for?",
          answer:
            "Stability, predictability, and outcomes they can measure and explain.",
          children:
            "Most systems are judged not by how much truth they uncover, but by how reliably they continue operating. Budgets, timelines, rankings, and reports reward continuity. Insight often challenges assumptions or introduces new variables. From the system’s point of view, this is not progress. It is exposure to risk.",
          metaphor:
            "Imagine a building designed to withstand storms by sealing every window. It remains standing, but no fresh air ever enters.",
        },
        {
          title: "Why does obedience resemble competence?",
          answer:
            "Because compliance produces consistent results with low variation.",
          children:
            "Obedience is easy to evaluate. It looks like reliability. Tasks are completed on time, language aligns with expectations, and conflict is avoided. Insight, by contrast, may slow processes, question authority, or reveal flaws. Over time, systems begin to confuse smooth operation with effectiveness.",
          metaphor:
            "Imagine praising the quietest student as the best learner simply because they never interrupt the class.",
        },
        {
          title: "Why does insight feel costly to a system?",
          answer:
            "Because insight implies that something must change.",
          children:
            "If an insight is correct, it often requires revising rules, redistributing power, or admitting past errors. These changes carry political and emotional costs. Ignoring insight is frequently cheaper than acting on it. Filtering out those who raise difficult questions becomes an efficient strategy.",
          metaphor:
            "Picture a road built straight through a mountain. A warning sign appears too late. Rerouting now costs more than pretending the danger does not exist.",
        },
        {
          title: "How are independent thinkers filtered out quietly?",
          answer:
            "Through incentives, evaluations, and exhaustion rather than direct exclusion.",
          children:
            "Systems rarely say they do not want thinkers. Instead, they reward availability, agreeableness, and consistency. Promotions favor those who fit existing norms. Those who challenge assumptions are labeled impractical, difficult, or not aligned. Many eventually leave on their own.",
          metaphor:
            "Imagine a river where smooth stones settle easily while sharp edges are carried away downstream.",
        },
        {
          title: "Where does creativity go when it is not welcomed?",
          answer:
            "To the margins, side projects, or outside the system entirely.",
          children:
            "Creativity does not disappear. It relocates. When insight cannot be integrated safely, it survives in informal spaces, personal work, or entirely different structures. The system remains intact, but less capable of understanding the world it operates in.",
          metaphor:
            "Think of plants growing through cracks in concrete. Life persists, but never where it was planned.",
        },
        {
          title: "Why do people adapt instead of resisting?",
          answer:
            "Because obedience is rewarded immediately, while insight often is not.",
          children:
            "Most people are not choosing compliance because they lack intelligence. They are choosing survival. Obedience pays quickly through security, income, and belonging. Insight often pays slowly or not at all. Over time, the system teaches what is safe to think and what should remain unspoken.",
          metaphor:
            "Imagine choosing between a daily wage and an invention that may never be accepted. Hunger decides faster than vision.",
        },
        {
          title: "What does this do to truth inside the system?",
          answer:
            "It creates blind spots that feel like consensus.",
          children:
            "When independent judgment is filtered out, errors persist. Agreement forms easily because dissent is absent, not because understanding is complete. The system becomes skilled at repeating itself and poor at noticing when reality has shifted.",
          metaphor:
            "Picture a room where everyone faces the same wall. Agreement is effortless about what is visible there.",
        },
        {
          title: "Why do systems still need insight?",
          answer:
            "Because obedience cannot adapt when conditions change.",
          children:
            "In stable environments, obedience works. When conditions shift, insight becomes essential. Systems that suppress independent judgment may appear strong, but they grow brittle. Eventually, the trait they filtered out is the one they urgently require.",
          metaphor:
            "A machine can run smoothly until a missing sensor causes a sudden breakdown.",
        },
      ]}
      ending={[
        "Obedience keeps systems running.",
        "Insight keeps them honest.",
        "Most systems choose what feels safer today.",
      ]}
    />
  );
}
