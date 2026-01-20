// app/questions/hidden-modern-stressors/page.tsx

import type { Metadata } from "next";
import { QuestionFrame } from "@/components/questions/QuestionFrame";

export const metadata: Metadata = {
  title: "Why don’t we notice modern stressors anymore?",
  description:
    "A question-led look at how modern stressors normalize constant readiness and make chronic strain difficult to perceive.",
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
      shortAnswer="We stop noticing modern stressors because they no longer arrive as emergencies but as continuous conditions that keep the nervous system activated without resolution."
      heroMetaphor="Imagine standing next to a small generator that hums day and night. After a while, your ears stop registering the sound. Your body, however, never fully relaxes."
      sections={[
        {
          title: "Why do modern stressors feel like a baseline?",
          answer:
            "Modern stressors feel like a baseline because they persist without clear peaks, preventing the body from distinguishing danger from normal life.",
          metaphor:
            "Imagine holding a light object that never feels heavy enough to put down. Hours pass without complaint. By evening, your hand is locked in pain.",
          children:
            "Most days do not contain obvious crises. Work continues, messages arrive, and routines repeat. Nothing dramatic happens, yet the body remains subtly braced. Muscles stay tense, breathing stays shallow, and attention never fully drops. Because no single moment stands out, stressors blend into the background. The body adapts to ongoing demand by treating vigilance as normal, even though the load never truly ends.",
        },
        {
          title: "Why do stressors stop registering as stress?",
          answer:
            "Stressors stop registering because repeated exposure trains the nervous system to lower its alarm while maintaining activation.",
          metaphor:
            "Imagine living beside a busy road where traffic never stops. At first, the noise is overwhelming. Months later, you only notice it when silence briefly appears.",
          children:
            "When strain is constant, warning signals lose their contrast. Being reachable at all hours, holding unfinished tasks, and staying alert without closure becomes familiar. The body adapts by dampening conscious alarm, not by resolving tension. This creates the illusion that stress has faded. In reality, the activation remains active beneath awareness, quietly shaping mood, sleep, and energy.",
        },
        {
          title: "What are modern stressors actually doing to attention?",
          answer:
            "Modern stressors fragment attention by keeping it oriented toward possible demand rather than present completion.",
          metaphor:
            "Imagine waiting for a knock on the door that could come at any time. You never sit back fully. You never leave the room.",
          children:
            "Messages, evaluations, and responsibilities remain open-ended. Conversations pause rather than finish. Tasks overlap instead of ending. Attention stays partially open, scanning for what might be required next. This constant orientation prevents the nervous system from standing down. Stress does not come from activity itself, but from the inability to complete cycles and rest inside a finished moment.",
        },
        {
          title: "How do stressors reshape the sense of normal?",
          answer:
            "Stressors reshape normal by making readiness feel safer than rest.",
          metaphor:
            "Imagine keeping a winter coat on indoors because you might need to step outside again soon. The warmth of the room starts to feel suspicious. The weight of the coat feels like skin.",
          children:
            "Over time, stillness begins to feel wrong. Pauses feel provisional. Rest is interrupted by anticipation. Even leisure carries an edge of readiness. The body learns that nothing truly ends, so it remains prepared. What once would have felt like tension now feels ordinary. Stressors no longer stand out because the entire environment has been calibrated around constant readiness.",
        },
        {
          title: "How do stressors appear without being named?",
          answer:
            "Stressors appear as diffuse symptoms rather than clear distress because the body is suspended rather than overwhelmed.",
          metaphor:
            "Imagine static under a familiar radio station. The song still plays. The sharpness never returns.",
          children:
            "People describe feeling tired but alert, calm but uneasy, full but unsatisfied. Sleep happens without restoration. Hunger appears without appetite. Because nothing feels extreme, these signals are dismissed. The body is not in crisis. It is holding a posture of readiness that never resolves. Stressors show up as thinning presence rather than obvious pain.",
        },
        {
          title: "Why do systems reliably generate these stressors?",
          answer:
            "Systems generate stressors because sustained vigilance produces more usable output than genuine rest.",
          metaphor:
            "Imagine praising someone for standing longer each day without ever offering a chair. Their endurance becomes an example. Chairs quietly disappear.",
          children:
            "A rested person is harder to manage and less predictable. A vigilant person responds faster and consumes more. Systems reward availability, responsiveness, and polite endurance. Completion is rare, and recovery is partial. As long as people continue functioning, the system reads success. Stressors become built into the environment because they maintain momentum without triggering collapse.",
        },
        {
          title: "What does ZenTrust notice about stressors here?",
          answer:
            "ZenTrust notices stressors as environmental conditions rather than personal weaknesses.",
          metaphor:
            "Imagine assuming a smoke detector is broken because it has been beeping for years. You sleep through the sound. A visitor enters and immediately reacts.",
          children:
            "ZenTrust does not ask what stresses you personally. It observes how stressors persist without resolution until they disappear from awareness. The alarm fades, but the load remains. By shifting attention from individual resilience to environmental demand, blame loosens. ZenTrust holds the mirror to the conditions that made vigilance normal. Nothing is prescribed. The pattern is simply seen.",
        },
        {
          title: "What becomes visible when stressors are finally seen?",
          answer:
            "When stressors are seen, tension is understood as adaptation rather than defect.",
          metaphor:
            "Imagine realizing the floor was slanted for years. You were not failing to stand straight. You were working constantly to avoid sliding.",
          children:
            "Once the environment is recognized, self-blame softens. The body’s tension begins to make sense. Nothing here fixes the world or removes demand. What changes first is the story. Stress is no longer evidence of weakness. It is the trace of endurance. In that recognition, a small quiet appears where pressure once dominated.",
        },
      ]}
      ending={[
        "Not all stressors arrive as events.",
        "Some stressors hide by becoming normal.",
        "Seeing the condition already changes the weight.",
      ]}
    />
  );
}
