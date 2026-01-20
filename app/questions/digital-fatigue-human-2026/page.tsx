// app/questions/digital-fatigue-human-2026/page.tsx

import type { Metadata } from "next";
import { QuestionFrame } from "@/components/questions/QuestionFrame";

export const metadata: Metadata = {
  title: "Why does digital fatigue make being human feel harder in 2026?",
  description:
    "A question-led look at how digital fatigue reshapes attention, time, and presence in everyday life.",
  other: {
    category: "Mind & Experience",
    subcategory: "digital-fatigue-2026",
  },
};

export default function QuestionPage() {
  return (
    <QuestionFrame
      category="Mind & Experience"
      question="Why does digital fatigue make being human feel harder in 2026?"
      shortAnswer="Digital fatigue makes being human feel harder in 2026 because continuous digital stimulation fragments attention, replaces lived participation with simulation, and sustains a state of low-level vigilance that prevents moments from fully beginning or ending."
      heroMetaphor="Imagine sitting at a dinner table where everyone is speaking at once through small speakers hidden under the plates. Each voice sounds familiar, but none pauses long enough to listen. You leave the table full yet oddly untouched."
      sections={[
        {
          title: "Why does fatigue feel constant in digital life in 2026?",
          answer:
            "Digital fatigue feels constant because continuous inputs interrupt attention before any moment can complete, sustaining unfinished cognitive loops.",
          metaphor:
            "Imagine carrying several open tabs in your hands instead of on a screen. Each one flutters in the wind as you walk. You never quite get to close any of them.",
          children:
            "From the moment you wake up, information is already waiting. Messages, alerts, and updates arrive faster than you can finish responding. Even when nothing is urgent, your attention stays slightly open, ready to receive the next signal. This constant restarting prevents the mind from settling. Fatigue builds not from effort alone, but from carrying many incomplete moments at once throughout the day.",
        },
        {
          title: "Why does the common explanation for fatigue fail in 2026?",
          answer:
            "The common explanation fails because it blames personal discipline for a fatigue that is structurally produced by digital environments.",
          metaphor:
            "Imagine being told to stay dry while standing under a leaking ceiling. You keep moving to avoid the drops. The water continues to fall.",
          children:
            "People often suggest that fatigue comes from poor boundaries or weak willpower. Yet work, relationships, and information now flow through the same digital channels. Many tools are designed to re-engage attention automatically. Avoiding them entirely can carry social or economic costs. Fatigue persists because the environment keeps restarting your attention, regardless of intention or effort.",
        },
        {
          title: "What is actually driving digital fatigue in 2026?",
          answer:
            "Digital fatigue is driven by simulation replacing participation, allowing life to continue without requiring full human presence.",
          metaphor:
            "Imagine watching a recording of yourself having a conversation. The timing is perfect. You are not needed to speak.",
          children:
            "Many experiences now arrive pre-shaped. Music selects itself, feeds predict interest, and responses appear instantly. The friction of waiting, choosing, or misunderstanding is reduced. Over time, fewer moments require your timing or judgment. The brain senses this displacement. Fatigue deepens as participation thins and observation takes its place.",
        },
        {
          title: "How does fatigue reshape attention over time in 2026?",
          answer:
            "Digital fatigue trains attention to skim and brace, fragmenting depth in favor of speed and readiness.",
          metaphor:
            "Imagine walking quickly across shallow stepping stones. You focus on balance, not scenery. The river passes unnoticed.",
          children:
            "At first, the pace feels manageable. Gradually, staying with one thing becomes difficult. Pauses feel uncomfortable, so they are filled. Attention jumps before settling. Memory becomes hazy because nothing stayed long enough to leave a mark. Life continues efficiently, yet the internal sense of depth fades. Fatigue emerges as constant motion without arrival.",
        },
        {
          title: "Why does fatigue flatten memory and meaning in 2026?",
          answer:
            "Fatigue flattens memory because fragmented attention prevents experiences from consolidating into coherent narrative.",
          metaphor:
            "Imagine stacking photos without glue into an album. They sit together but never bind. When you lift the book, they slide apart.",
          children:
            "Memory forms when experiences have weight and duration. When attention is repeatedly broken, moments fail to consolidate. Days blur together, even when they were busy. You recall tasks but not texture. This is not forgetfulness, but fragmentation. Fatigue grows as life feels thinner, less anchored, and harder to inhabit.",
        },
        {
          title: "Why does fatigue persist despite being disliked in 2026?",
          answer:
            "Digital fatigue persists because constant visibility and responsiveness are socially and economically rewarded.",
          metaphor:
            "Imagine a room where the lights stay on all night. You are tired, but leaving means missing something important. You stay under the glare.",
          children:
            "Many people remain connected not because they enjoy it, but because absence carries risk. Messages signal reliability. Silence can signal withdrawal. Over time, endurance is mistaken for strength. Fatigue becomes normalized as the cost of participation. The system does not require coercion. Reward is enough to sustain it.",
        },
        {
          title: "Why does ZenTrust observe fatigue rather than explain it away?",
          answer:
            "ZenTrust observes fatigue because it reveals how attention is shaped by environment before personal meaning is assigned.",
          metaphor:
            "Imagine noticing a quiet hum only after someone else points it out. You realize it was always there. You simply adapted to it.",
          children:
            "ZenTrust does not frame fatigue as failure. It notices the conditions under which fatigue reliably appears. By holding attention on the environment rather than the individual, blame softens. The pattern becomes visible without pressure to change. ZenTrust remains an observing presence, allowing recognition to arise on its own.",
        },
        {
          title: "What does fatigue make easy to forget about being human?",
          answer:
            "Fatigue makes it easy to forget that being human depends on slowness, gaps, and clear endings.",
          metaphor:
            "Imagine writing with a pen that never stops flowing. Words overlap before they finish forming. The page fills without meaning.",
          children:
            "Human life unfolds through beginnings and endings. Waiting, silence, and completion allow meaning to form. When every gap is filled, these rhythms fade. You forget how it feels to finish a thought or sit with nothing arriving. Fatigue crowds out these ordinary structures, leaving life efficient, continuous, and strangely ungrounded.",
        },
      ]}
      ending={[
        "A day can be busy and still feel thin.",
        "A life can be efficient and still feel unfinished.",
        "Fatigue is often the sound of interruption repeating.",
      ]}
    />
  );
}
