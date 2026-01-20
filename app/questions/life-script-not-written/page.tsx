// app/questions/life-script-not-written/page.tsx

import type { Metadata } from "next";
import { QuestionFrame } from "@/components/questions/QuestionFrame";

export const metadata: Metadata = {
  title: "Why does your life follow a script you did not write?",
  description:
    "A question-led examination of how a script formed through repetition and reward can shape daily life without conscious authorship.",
  other: {
    category: "Mind & Experience",
    subcategory: "life-script-conditioning",
  },
};

export default function QuestionPage() {
  return (
    <QuestionFrame
      category="Mind & Experience"
      question="Why does your life follow a script you did not write?"
      shortAnswer="Your life follows a script you did not write because repeated reward and pressure train the nervous system to reuse familiar patterns long before awareness is present."
      heroMetaphor="Imagine opening a notebook and finding today’s plan already written in your handwriting. You do not remember writing it, yet the timing fits the day perfectly. The day begins whether you agree or not."
      sections={[
        {
          title: "Why does the script feel like your personality?",
          answer:
            "The script feels like personality because repetition converts learned responses into familiarity that is mistaken for nature.",
          metaphor:
            "Imagine wearing the same heavy jacket every day for years. One morning you put it on without noticing. Later you cannot remember how your shoulders feel without it.",
          children:
            "From early life, certain behaviors bring ease while others bring correction or silence. Over time, the body remembers which responses reduce friction. You reach for the same tone, posture, and role automatically. Because these patterns feel familiar, they are labeled as personality. The script hides by feeling ordinary, even though it was trained by environment rather than chosen freely.",
        },
        {
          title: "Why does free will not erase the script?",
          answer:
            "Free will does not erase the script because choice still occurs inside boundaries the script already defined.",
          metaphor:
            "Imagine a menu with many items listed. The kitchen prepares only a few. You decide carefully and still receive what the kitchen planned.",
          children:
            "Daily decisions create the sense of authorship. What remains unseen is how the range of options was filtered before choice appeared. The script quietly edits what feels realistic, embarrassing, or unreachable. You select among permitted paths and experience that selection as freedom. The script stays invisible because it speaks through your own reasoning and preferences.",
        },
        {
          title: "What is the script actually built from?",
          answer:
            "The script is built from accumulated incentives, threats, and social cues stored as automatic responses.",
          metaphor:
            "Imagine a narrow path worn through grass behind a building. No sign points the way. Your feet follow it because the ground is already pressed flat.",
          children:
            "The script forms through thousands of small moments rather than a single decision. Approval, avoidance of conflict, and the need to belong shape reactions that later run on their own. These shortcuts reduce uncertainty for the system and for the body. Over time, the script becomes the default route through life, even when circumstances change.",
        },
        {
          title: "Why does the script keep running after it is noticed?",
          answer:
            "The script keeps running because it is tied to biological safety rather than intellectual agreement.",
          metaphor:
            "Imagine a song playing quietly while you read. You recognize the melody. It continues underneath your thoughts.",
          children:
            "Recognition does not immediately undo conditioning. In moments of pressure, the body returns to what once reduced risk. People-pleasing, performing competence, or avoiding disagreement reappear automatically. Awareness may illuminate the pattern, but the nervous system still trusts what previously ensured belonging. The script persists because it was learned as protection.",
        },
        {
          title: "Why does the script discourage curiosity?",
          answer:
            "The script discourages curiosity because curiosity introduces variation that threatens predictability.",
          metaphor:
            "Imagine a group photo where everyone is told to hold still. One person shifts slightly to breathe. The image captures blur instead of symmetry.",
          children:
            "Curiosity slows routines and questions assumptions. For systems built on smooth operation, this creates friction. The script teaches anticipation of disapproval and trains curiosity to retreat before it surfaces. Over time, inquiry feels risky even when nothing is explicitly forbidden. The script survives by making exploration feel socially unsafe.",
        },
        {
          title: "Why does following the script feel easier than authorship?",
          answer:
            "Following the script feels easier because it offers approval and clarity while authorship brings uncertainty.",
          metaphor:
            "Imagine walking with a voice giving directions every few steps. You stop reading street signs. When the voice disappears, familiar roads feel confusing.",
          children:
            "The script reduces effort by preloading expectations. It tells you what to want, how to speak, and which risks to avoid. Stepping outside it feels exposed because cues disappear. Others reward your predictability with trust and inclusion. Authorship lacks that immediate reinforcement. The script feels easier because it has already been accepted.",
        },
        {
          title: "What does ZenTrust notice about the script?",
          answer:
            "ZenTrust notices the script as a pattern mistaken for identity rather than a failure of awareness.",
          metaphor:
            "Imagine reading a letter written in your exact voice. The phrasing feels familiar. Halfway through, you realize you never wrote it.",
          children:
            "ZenTrust does not offer a replacement story. It observes how scripts hide inside responsibility, maturity, and reliability. When actions feel automatic and curiosity feels dangerous, the script is active. ZenTrust holds attention on that condition without judgment. The mirror reflects the pattern, not a demand for change.",
        },
        {
          title: "What remains when the script is seen clearly?",
          answer:
            "When the script is seen clearly, it becomes observable rather than authoritative.",
          metaphor:
            "Imagine watching a familiar play from the back of an empty theater. You know every line. This time you notice the lighting and pauses.",
          children:
            "Seeing the script does not erase it. It changes relationship. The pattern stops proving that something is wrong with you. You may notice what it once protected and what it still restricts. The day is no longer fully lived by rehearsal. A small space opens where presence appears without instruction.",
        },
      ]}
      ending={[
        "The script was learned before it was noticed.",
        "Repetition felt like identity.",
        "Seeing the pattern changes the weight it carries.",
      ]}
    />
  );
}
