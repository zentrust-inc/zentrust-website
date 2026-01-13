// app/questions/life-script-not-written/page.tsx

import type { Metadata } from "next";
import { QuestionFrame } from "@/components/questions/QuestionFrame";

export const metadata: Metadata = {
  title: "Why does your life follow a script you did not write?",
  description:
    "A question-led exploration of how conditioned scripts shape daily life, even when awareness is present.",
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
      shortAnswer="Because the script is formed through repetition, reward, and pressure long before it is noticed, so daily life runs on learned patterns that feel personal."
      heroMetaphor="Imagine opening a notebook and finding today’s plan already written in your handwriting. You cannot remember writing it, but the ink looks fresh and the timing fits the day. You stare at the page while the day begins anyway."
      sections={[
        {
          title: "Why does the script feel like your personality?",
          answer:
            "Because repetition turns learned responses into something familiar that gets mistaken for identity.",
          metaphor:
            "Imagine wearing the same jacket every day for years. One morning you put it on without noticing. Later you cannot remember how your shoulders feel without it.",
          children:
            "From early on, you learn which parts of you bring ease and which bring friction. The script forms through praise, correction, silence, and attention. Over time you stop noticing the choices you are not making because the script handles them for you. You reach for the same words, tone, and role in familiar situations. It can feel like personality, even though it is also practice repeated until it feels natural.",
        },
        {
          title: "Why does free will not cancel the script?",
          answer:
            "Because choosing inside a script still limits what feels possible to choose.",
          metaphor:
            "Imagine a menu with many items, but the kitchen only prepares a few. You take time deciding. The plate arrives different in name, but similar in taste.",
          children:
            "You make decisions all day, which makes the script harder to see. The question is where the options came from. The script defines what feels realistic, embarrassing, or out of reach. You may choose the safer sentence, job, or relationship pattern and call it preference. The script stays hidden because it speaks in your own voice and uses familiar reasons to justify itself.",
        },
        {
          title: "What is the script actually made of?",
          answer:
            "The script is built from repeated incentives, threats, and roles that trained your nervous system.",
          metaphor:
            "Imagine a narrow path worn through grass behind a building. No sign directs you there. Your feet follow it because the ground is already pressed down.",
          children:
            "The script is not a single decision but an accumulation of small moments. It forms from what earned approval, reduced conflict, or kept you included. The script stores shortcuts so you do not have to face uncertainty every time. It guides how you act around authority, family, friends, and strangers. It can be useful, but it can also keep you living by rules that no longer match your present life.",
        },
        {
          title: "Why does the script keep running after you notice it?",
          answer:
            "Because the script is tied to safety, not understanding.",
          metaphor:
            "Imagine a song playing quietly in your head while you try to read. You recognize the melody. It continues underneath your thoughts anyway.",
          children:
            "Seeing the script does not automatically stop it, especially under pressure. In tense moments, the body reaches for what once reduced risk. People-pleasing, freezing, performing competence, or avoiding disagreement can return without effort. Awareness may arrive like light in a room, but the furniture remains arranged the same way. The script continues because it once protected you from something real.",
        },
        {
          title: "Why does the script discourage curiosity?",
          answer:
            "Because curiosity threatens the conditions the script was designed to preserve.",
          metaphor:
            "Imagine a group photo where everyone is told to hold still. One person shifts to breathe. The photographer snaps even though the pose was uncomfortable.",
          children:
            "Many scripts are built around staying acceptable and included. Curiosity can slow things down, question rules, or expose discomfort others rely on. The script trains you to anticipate that reaction and avoid it. This is how a system quietly teaches you that curiosity is a problem. The danger is not curiosity itself, but learning to distrust it in order to belong.",
        },
        {
          title: "Why does following the script feel easier than writing your own life?",
          answer:
            "Because the script offers clarity and approval, while authorship brings uncertainty.",
          metaphor:
            "Imagine walking with a voice giving directions every few steps. You stop reading street signs. When the voice goes silent, familiar roads suddenly feel confusing.",
          children:
            "The script reduces effort by telling you what to say, want, and avoid. Stepping outside it can feel slow or exposed, even if nothing bad happens. The script also protects others from your unpredictability, which is why it is rewarded. Writing your own life can feel like standing without cues. The script feels easier because it is already approved.",
        },
        {
          title: "ZenTrust: What does ZenTrust notice about the script?",
          answer:
            "ZenTrust notices how the script borrows your voice so completely that it rarely feels like a script.",
          metaphor:
            "Imagine reading a letter that sounds exactly like you. The phrases feel familiar. Halfway through, you realize you never wrote it.",
          children:
            "ZenTrust does not claim to know your true story. It observes how scripts hide inside normal behavior. A script can look like responsibility, politeness, ambition, or maturity. ZenTrust holds attention on moments where actions feel automatic and curiosity feels risky. It does not demand change. It only questions whether the script has been mistaken for you.",
        },
        {
          title: "What changes when the script is seen without fear?",
          answer:
            "The script becomes something observable, not a verdict about who you are.",
          metaphor:
            "Imagine watching a familiar play from the back row. You know the lines already. This time you notice the pauses and lighting.",
          children:
            "When the script is seen calmly, it stops proving that you are trapped or broken. You may notice what it protected and what it still protects. You may also see where it creates unnecessary strain. The point is not to erase the script. The point is to notice when a day is being lived by a pattern written long ago, and when something real is trying to speak.",
        },
      ]}
      ending={[
        "Nothing here asks you to rewrite your life today.",
        "Nothing here calls your script a mistake.",
        "It only asks when the script began and what it has been protecting.",
      ]}
    />
  );
}
