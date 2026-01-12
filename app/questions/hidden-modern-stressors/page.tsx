// app/questions/hidden-modern-stressors/page.tsx

import type { Metadata } from "next";
import { QuestionFrame } from "@/components/questions/QuestionFrame";

export const metadata: Metadata = {
  title: "Why don’t we notice modern stressors anymore?",
  description:
    "A question-led exploration of how everyday conditions normalize constant readiness without resolution.",
  other: {
    category: "Health & Suffering",
    subcategory: "invisible-chronic-stress",
  },
};

export default function QuestionPage() {
  return (
    <QuestionFrame
      category="Health & Suffering"
      question="Why don’t we notice modern stressors anymore?"
      shortAnswer="Because what surrounds us never becomes intense enough to alarm, yet never ends long enough to resolve."
      heroMetaphor="Imagine standing near a quiet generator that hums all day. You stop noticing the sound, but your body never fully relaxes. Silence feels unfamiliar, even when it finally arrives."
      sections={[
        {
          title: "Why does life feel tense even when nothing is wrong?",
          answer: "Because strain can exist without crisis.",
          children:
            "Most days do not contain emergencies. Work continues. Conversations remain polite. Nothing breaks. Yet the body carries a background tightness that does not match what actually happened. By evening, there is tiredness without a story. Sleep helps, but not completely. When no clear cause appears, tension is assumed to be personal rather than situational.",
          metaphor:
            "Imagine holding a light object for hours. It never feels heavy enough to put down. By the end, your hand aches anyway.",
        },
        {
          title: "Why do we stop recognizing these conditions as stress?",
          answer: "Because familiarity replaces warning.",
          children:
            "When a stimulus is constant, the mind stops labeling it. Being reachable all the time feels normal. Stopping work without finishing feels normal. Staying informed without resolution feels normal. Adaptation occurs quietly. What once would have stood out becomes background noise, even as the body continues to respond.",
          metaphor:
            "Imagine living beside a road with steady traffic. At first the noise is obvious. Months later, you only notice it when it stops.",
        },
        {
          title: "What is the body responding to instead?",
          answer: "Patterns of demand rather than single events.",
          children:
            "The body listens for signals that say something might be required at any moment. Messages can arrive. Decisions remain pending. Responsibility continues beyond authority. Attention is pulled without closure. None of this demands action right now, but together they prevent standing down.",
          metaphor:
            "Imagine waiting for a knock on the door that could come at any time. You never sit fully. You never leave.",
        },
        {
          title: "How does this change our sense of normal?",
          answer: "Readiness becomes the baseline.",
          children:
            "Over time, calm begins to feel strange. Stillness carries a sense of missing something. Rest includes anticipation. Even quiet moments feel provisional. Tasks pause rather than end. The body learns that nothing truly finishes, and constant readiness becomes ordinary.",
          metaphor:
            "Imagine keeping your coat on indoors because you might need to step outside again soon. Eventually warmth feels suspicious.",
        },
        {
          title: "How does this show up without being named?",
          answer: "As subtle symptoms rather than clear distress.",
          children:
            "People describe being tired but alert, calm but uneasy. Hunger appears without appetite. Irritation surfaces without a target. Sleep occurs without restoration. Because nothing feels severe, these signals are dismissed. The body is not in crisis. It is in suspension.",
          metaphor:
            "Imagine static under a radio signal. The song plays, but clarity never fully arrives.",
        },
        {
          title: "Why does modern life create this condition so reliably?",
          answer: "Because continuation is valued more than completion.",
          children:
            "Systems reward availability, responsiveness, and polite endurance. Breaks exist, but they are partial. Recovery is scheduled, measured, or justified. Being able to continue is praised. Finishing is rare. The system functions as long as people do.",
          metaphor:
            "Imagine applauding someone for standing longer each time, without ever offering them a chair.",
        },
        {
          title: "What question does ZenTrust ask here?",
          answer:
            "What if stress became invisible not because it disappeared, but because it never ends?",
          children:
            "ZenTrust does not ask what stresses you. It asks why stress stopped registering at all. When conditions persist without resolution, the body adapts by lowering the alarm. The signal fades, but the load remains. Attention shifts from personal resilience to environmental demand.",
          metaphor:
            "Imagine assuming the smoke detector is broken because it has been beeping for years.",
        },
        {
          title: "What changes when this becomes visible?",
          answer: "Blame loosens before solutions appear.",
          children:
            "Nothing here requires action. Recognition alone changes the story. When stress is seen as environmental rather than personal, the body no longer looks weak or defective. Tension becomes understandable. Rest becomes imaginable, even if not yet available.",
          metaphor:
            "Imagine realizing the floor was slanted all along. You were not failing to stand straight.",
        },
      ]}
      ending={[
        "Not all stress announces itself.",
        "Some stress hides by becoming normal.",
        "Seeing it is already a shift.",
      ]}
    />
  );
}
