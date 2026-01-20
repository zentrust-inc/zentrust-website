// app/questions/insulin-unmeasured/page.tsx

import type { Metadata } from "next";
import { QuestionFrame } from "@/components/questions/QuestionFrame";

export const metadata: Metadata = {
  title:
    "Why is insulin almost never measured, even though it governs most chronic disease?",
  description:
    "A question-led look at why insulin is rarely measured, and what that avoidance protects in modern health narratives.",
  other: {
    category: "Health & Suffering",
    subcategory: "insulin-measurement-avoidance",
  },
};

export default function QuestionPage() {
  return (
    <QuestionFrame
      category="Health & Suffering"
      question="Why is insulin almost never measured, even though it governs most chronic disease?"
      shortAnswer="Because insulin exposes the ongoing performance that modern life depends on, systems avoid measuring insulin to preserve the appearance of health while demand remains uninterrupted."
      heroMetaphor="Imagine a factory where the noise level is never recorded. Managers track broken machines, sick workers, and missed quotas, but never the sound. Measuring it would reveal that the damage began long before anything broke."
      sections={[
        {
          title: "Why is insulin ignored at the beginning of illness?",
          answer:
            "Insulin is ignored because it rises early and quietly, revealing strain before symptoms justify intervention.",
          children:
            "A person feels tired but functions. They gain weight but work harder. They cope, adapt, and stay productive. Insulin rises during this phase, long before disease names appear. Because nothing has officially failed yet, this stage is treated as normal life. Insulin does not wait for permission to rise. It responds to the ongoing demand the body senses every day.",
          metaphor:
            "Imagine a bridge where hairline cracks appear years before collapse. Traffic continues without concern. No one inspects the cracks because the bridge is still standing.",
        },
        {
          title: "Why does measuring insulin disrupt familiar health stories?",
          answer:
            "Measuring insulin disrupts stories that locate disease in behavior rather than conditions.",
          children:
            "Many explanations rely on visible choices: food, exercise, discipline. Insulin rises even when these appear correct. It reflects readiness, not morality. Seeing it would show that effort and compliance do not prevent strain. This unsettles narratives that reward self control and blame failure. Insulin does not cooperate with those stories.",
          metaphor:
            "Imagine grading students by posture instead of learning. One day, someone measures comprehension. The rankings fall apart.",
        },
        {
          title: "What does insulin reveal about chronic stress?",
          answer:
            "Insulin reveals that chronic stress is not episodic but continuous and unresolved.",
          children:
            "Stress today rarely ends with physical action. Deadlines, evaluation, and vigilance repeat without release. The body prepares again and again. Glucose is mobilized. Insulin manages it. This loop continues quietly. Measuring insulin would show that stress is not occasional pressure but a permanent background condition.",
          metaphor:
            "Imagine resetting an alarm every hour without leaving the building. The system works perfectly. Exhaustion accumulates anyway.",
        },
        {
          title: "Why is insulin inconvenient for healthcare systems?",
          answer:
            "Insulin is inconvenient because it points to causes that medicine cannot easily individualize or resolve.",
          children:
            "Healthcare systems are designed to treat identifiable problems. Insulin reflects environments, workloads, and expectations. It does not isolate blame to an organ or habit. Measuring insulin would require acknowledging that many conditions are adaptive responses to how life is structured. That acknowledgment has no quick protocol.",
          metaphor:
            "Imagine repairing smoke detectors instead of asking why the building keeps filling with smoke. The alarms are easier to manage.",
        },
        {
          title: "How does insulin challenge the idea of being healthy?",
          answer:
            "Insulin challenges the idea that functioning well equals being well.",
          children:
            "Many people appear healthy because their bodies are compensating. Insulin stays high to maintain performance. Energy is stored, hunger increases, fatigue grows. The person continues working. Measuring insulin would show that health has already been traded for endurance. Function becomes camouflage.",
          metaphor:
            "Imagine a runner finishing races by bleeding internally. The medals distract from the damage.",
        },
        {
          title: "Why is insulin left out of routine conversations?",
          answer:
            "Insulin is left out because it asks questions systems are not prepared to answer.",
          children:
            "Talking about insulin invites uncomfortable discussions about pace, pressure, and constant evaluation. These are normalized, not questioned. Leaving insulin unmeasured keeps attention on manageable outcomes instead of persistent demand. Silence maintains continuity.",
          metaphor:
            "Imagine avoiding a clock in a room where everyone is exhausted. Time is still passing. No one wants to name it.",
        },
        {
          title: "What does ZenTrust notice about insulin?",
          answer:
            "ZenTrust notices that insulin reveals obedience to an invisible script rather than personal failure.",
          children:
            "ZenTrust does not frame insulin as a problem to fix. It observes insulin as a faithful responder to what is required. The body adapts precisely. Seeing insulin clearly shifts attention from self correction to script recognition. Nothing is demanded. The mirror is held, not used.",
          metaphor:
            "Imagine realizing the uniform was never mandatory. Everyone wore it anyway. The fabric still shows the creases.",
        },
        {
          title: "What becomes visible when insulin is finally seen?",
          answer:
            "When insulin is seen, the cost of constant readiness becomes undeniable.",
          children:
            "Nothing here prescribes change. Recognition alone alters perception. Insulin no longer looks mysterious. It looks consistent. The body has been answering a question that never stopped being asked. Seeing this does not solve anything. It simply clarifies what has been happening all along.",
          metaphor:
            "Imagine the lights turning on backstage. The performance continues. The machinery is no longer hidden.",
        },
      ]}
      ending={[
        "Some signals are avoided because they speak too early.",
        "Insulin speaks before permission is granted.",
        "Seeing is not the same as changing.",
      ]}
    />
  );
}
