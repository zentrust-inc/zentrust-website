// app/questions/prevention-invisible/page.tsx

import type { Metadata } from "next";
import { QuestionFrame } from "@/components/questions/QuestionFrame";

export const metadata: Metadata = {
  title: "Why does prevention feel invisible compared to treatment?",
  description:
    "A sharp examination of how prevention removes events rather than producing them, leaving no signal for systems that reward visible intervention.",
  other: {
    category: "Health & Suffering",
    subcategory: "prevention-systemic-invisibility",
  },
};

export default function PreventionInvisiblePage() {
  return (
    <QuestionFrame
      category="Health & Suffering"
      question="Why does prevention feel invisible compared to treatment?"
      shortAnswer="Because prevention removes future events before they form, leaving no measurable signal for systems that depend on visible action and crisis-based validation."
      heroMetaphor="A bridge is inspected every morning and never collapses. No crowds gather, no sirens sound, and no story is told. The absence of disaster looks identical to neglect."
      sections={[
        {
          title: "Why does prevention feel like nothing is happening?",
          answer:
            "Because prevention succeeds by eliminating events rather than producing outcomes that can be seen.",
          children:
            "Days pass without incident when prevention is working. No emergency interrupts routines. No moment announces success. Over time, the absence of disruption blends into the background of daily life. The body remains steady, and nothing demands attention. What is removed leaves no memory. The system cannot point to a moment and say this is where prevention worked.",
          metaphor:
            "A smoke alarm battery is replaced months before it is needed. The house remains quiet. No one remembers the battery when nothing burns.",
        },
        {
          title: "Why does prevention receive less recognition than treatment?",
          answer:
            "Because recognition is attached to visible intervention, not to avoided harm.",
          children:
            "Treatment creates a clear sequence of before and after. Pain is present, action is taken, and change is observed. Prevention interrupts this sequence by removing the starting point. Without a visible problem, there is no narrative arc. Systems built on documentation and response reward what can be recorded. Prevention leaves the record blank.",
          metaphor:
            "A fire truck arrives with lights and noise. A fire extinguisher checked earlier stays on the wall. Only one draws a crowd.",
        },
        {
          title: "How does prevention challenge system accounting?",
          answer:
            "Prevention reduces measurable events, which appear as a lack of activity rather than success.",
          children:
            "Systems count visits, procedures, and interventions. When prevention works, these numbers decline. Fewer entries appear on dashboards. The reduction looks like inactivity rather than achievement. Over time, prevention is interpreted as underperformance because it produces less data. The absence of crisis is not treated as evidence.",
          metaphor:
            "A ledger shows fewer entries after maintenance improves. The page looks empty. The balance depends on what is not written.",
        },
        {
          title: "Why does prevention require sustained effort without feedback?",
          answer:
            "Because prevention operates continuously without providing immediate confirmation.",
          children:
            "Preventive work repeats daily without producing milestones. There is no finish line to cross and no signal to stop. Effort continues without applause or relief. Over time, this creates a sense of unreality. The body keeps working while the mind searches for proof. Prevention asks for endurance without reward.",
          metaphor:
            "A watchmaker oils gears each morning. The clock keeps time. No one thanks the oil.",
        },
        {
          title: "Why is prevention often reframed as inaction?",
          answer:
            "Because systems mistake the absence of visible struggle for lack of contribution.",
          children:
            "When nothing goes wrong, prevention appears passive. Activity is measured by response, not by restraint. Choosing not to intervene aggressively is read as disengagement. The system confuses calm with neglect. Prevention becomes invisible precisely because it prevents the signals that would prove effort.",
          metaphor:
            "A lifeguard watches a calm pool all day. No rescues occur. Observers assume nothing was done.",
        },
        {
          title: "How does prevention affect personal identity?",
          answer:
            "Prevention shifts achievement into private time rather than public moments.",
          children:
            "Living without crisis removes social validation. There is no role to perform and no story to tell. Stability becomes a solitary condition. Over time, people question whether they are doing enough. Prevention offers no audience. The absence of recognition can feel like absence of value.",
          metaphor:
            "A runner trains alone before dawn. No finish tape is crossed. The legs still carry the miles.",
        },
        {
          title: "ZenTrust: What does ZenTrust notice about prevention?",
          answer:
            "ZenTrust notices how prevention conflicts with systems that depend on visible urgency.",
          children:
            "ZenTrust does not recommend programs or strategies. It observes how prevention removes the very signals that justify intervention. It notices how quiet stability is mistaken for emptiness. By holding attention on this mismatch, prevention becomes visible as a structural blind spot rather than a personal failure. ZenTrust remains an observing presence only.",
          metaphor:
            "A mirror is placed in an empty hallway. Nothing new appears. The space becomes noticeable.",
        },
        {
          title: "What remains when prevention is fully seen?",
          answer:
            "The recognition that absence can be the most complete outcome.",
          children:
            "When prevention is understood, the demand for visible proof loosens. Stability no longer needs justification. The body recognizes that nothing happening is not nothing. The quiet years regain weight. Prevention is seen as a condition, not an event.",
          metaphor:
            "A lake stays frozen through the winter. No waves form. The surface holds.",
        },
      ]}
      ending={[
        "Prevention leaves no spectacle.",
        "A quiet day is its only record.",
        "What did not happen still counts.",
      ]}
    />
  );
}
