// app/questions/constant-connection-rest/page.tsx

import type { Metadata } from "next";
import { QuestionFrame } from "@/components/questions/QuestionFrame";

export const metadata: Metadata = {
  title: "Why does constant connection make rest feel harder instead of easier?",
  description:
    "A question-led examination of how constant connection maintains vigilance and prevents biological closure.",
  other: {
    category: "Tools & Technology",
    subcategory: "constant-connection-rest",
  },
};

export default function QuestionPage() {
  return (
    <QuestionFrame
      category="Tools & Technology"
      question="Why does constant connection make rest feel harder instead of easier?"
      shortAnswer="Because constant connection replaces biological completion with permanent availability, keeping the nervous system in a state of unfinished readiness."
      pauseLine="▶ Pause here ▷"
      heroMetaphor="Imagine sitting in a quiet room while a doorbell rings at random intervals. You are told you do not have to answer it, but you never know when it will ring again. Even in silence, part of your body stays alert."
      sections={[
        {
          title: "Why does connection prevent the body from entering rest?",
          answer:
            "Connection prevents rest by keeping the nervous system oriented toward interruption rather than completion.",
          children:
            "At night, you lie down with no tasks left, yet your phone stays beside you. Nothing is happening, but your attention remains angled outward. A vibration could arrive at any moment. Your body never receives the signal that the day has ended. You are still reachable. Sleep arrives late and lightly because something is still expected of you, even if no one is asking.",
          metaphor:
            "Imagine leaving a car engine running while parked overnight. The vehicle does not move. Fuel is still burned.",
        },
        {
          title: "How does connection turn rest into a partial state?",
          answer:
            "Connection fragments rest by replacing closure with a permanent sense of 'not finished.'",
          children:
            "You stop working and scroll for a while. Messages appear, disappear, and remain unanswered. Conversations never fully close. Even leisure carries open threads. When you stand up, your body feels heavier than before you sat down. Nothing demanded effort, yet nothing ended. Rest was attempted without completion.",
          metaphor:
            "Imagine trying to finish a meal while plates are removed mid-bite. Hunger fades. Tension remains.",
        },
        {
          title: "What does constant connection extract from rest?",
          answer:
            "Connection extracts unoccupied attention by converting quiet moments into standby availability.",
          children:
            "During short pauses in the day, your hand reaches for the phone without decision. These moments once belonged to drifting, waiting, or simply being still. Now they are filled before they settle. Attention is captured before it can land. Over time, even silence feels incomplete unless it is filled with something moving.",
          metaphor:
            "Imagine a field never allowed to lie fallow. Nothing is planted. Nothing recovers.",
        },
        {
          title: "Why is connection mistaken for recovery?",
          answer:
            "Connection is mistaken for recovery because stimulation masks fatigue without resolving it.",
          children:
            "After a long day, you watch videos or scroll feeds. Your body remains still, but your eyes and nervous system keep tracking change. Dopamine flickers replace depth. When you stop, tiredness returns stronger. You rested in posture, not in physiology.",
          metaphor:
            "Imagine sitting down while still carrying a heavy backpack. Your legs rest. Your spine does not.",
        },
        {
          title: "How does connection alter the baseline of safety?",
          answer:
            "Connection lowers the baseline of safety by making availability feel necessary for belonging.",
          children:
            "You learn that being unreachable means missing something important. Silence becomes suspicious. The phone becomes a form of insurance against exclusion. Even when nothing happens, your body stays alert. Safety is no longer found in stillness, but in responsiveness.",
          metaphor:
            "Imagine keeping lights on all night in case someone knocks. Darkness becomes dangerous.",
        },
        {
          title: "Why does disconnection feel like failure under connection?",
          answer:
            "Disconnection feels like failure because connection has been framed as proof of relevance.",
          children:
            "When you step away, discomfort appears quickly. You feel behind, forgotten, or irresponsible. This feeling is not personal weakness. It is the nervous system reacting to the withdrawal of a signal it learned to associate with safety. The system prefers you reachable, not rested.",
          metaphor:
            "Imagine a badge that opens every door. Without it, hallways feel hostile.",
        },
        {
          title: "What does ZenTrust notice about connection in this room?",
          answer:
            "ZenTrust notices that connection has replaced boundaries with permanent exposure.",
          children:
            "ZenTrust does not suggest better tools or stricter rules. It observes how connection quietly erased the moments when nothing was required of you. It notices how rest was redefined as passive engagement rather than withdrawal. By seeing the mechanism, the pressure to remain available loosens. ZenTrust remains an observer. ZenTrust holds the mirror. Nothing more.",
          metaphor:
            "Imagine discovering that a window has been open for years. The draft felt normal. The room was never still.",
        },
        {
          title: "What remains when connection is clearly seen?",
          answer:
            "What remains is the recognition that fatigue was a logical response to a world without endings.",
          children:
            "When the pattern becomes visible, self-blame recedes. You were not bad at resting. You were never allowed to finish. This recognition does not change technology or expectations, but it ends the argument with your own body. Stillness no longer feels like absence. It feels like the first closed door.",
          metaphor:
            "Imagine finally closing a door that had been rattling all night. The house is unchanged. Your shoulders drop.",
        },
      ]}
      ending={[
        "Connection is not the same as presence.",
        "Rest requires endings, not pauses.",
        "Notice the silence that remains.",
      ]}
    />
  );
}
