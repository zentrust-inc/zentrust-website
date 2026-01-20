// app/questions/mind-returning-thoughts/page.tsx

import type { Metadata } from "next";
import { QuestionFrame } from "@/components/questions/QuestionFrame";

export const metadata: Metadata = {
  title: "Why does the mind keep returning to thoughts that make life harder?",
  description:
    "A question-led look at why thoughts repeat, and how repetition functions as vigilance rather than failure.",
  other: {
    category: "Mind & Experience",
    subcategory: "repeating-thoughts",
  },
};

export default function QuestionPage() {
  return (
    <QuestionFrame
      category="Mind & Experience"
      question="Why does the mind keep returning to thoughts that make life harder?"
      shortAnswer="Because returning thoughts operate as a vigilance mechanism, rehearsing danger to maintain readiness in environments that rarely signal safety."
      heroMetaphor="Imagine a smoke detector that goes off every time you light a candle for dinner. The alarm is loud enough to stop the meal before it begins. Eventually, you stop lighting candles and start watching the ceiling instead."
      sections={[
        {
          title: "Why do thoughts return even when they cause pain?",
          answer:
            "Because returning thoughts simulate control in situations where real control is absent.",
          metaphor:
            "Imagine checking your pockets for keys every few minutes on a quiet street. Your hands stay busy even though nothing is missing. The walking continues without you noticing where you are.",
          children:
            "You notice the same thought arriving while washing dishes, lying in bed, or waiting in line. Each time, the body tightens slightly as if something important is about to happen. The repetition feels urgent even when nothing changes afterward. The thought does not solve anything, but it keeps you alert. The loop continues because alertness once felt safer than stillness.",
        },
        {
          title: "Why do these thoughts feel automatic?",
          answer:
            "Because repeated thoughts are trained responses, not deliberate choices.",
          metaphor:
            "Imagine ducking when a stick flies past your head. Later, leaves fall and your body still ducks. The movement happens before thinking.",
          children:
            "At some point, the thought helped you anticipate loss, criticism, or danger. The body learned the pattern and stored it. Now the return happens without invitation, often before you notice it starting. The repetition is not a decision. It is a reflex that never received an ending signal.",
        },
        {
          title: "Why do thoughts return more strongly when you resist them?",
          answer:
            "Because attention feeds the vigilance loop it tries to shut down.",
          metaphor:
            "Imagine being told not to think about a bright red object. The color appears immediately. The effort to avoid it sharpens the image.",
          children:
            "When you argue with a thought or try to push it away, the body reads the effort as confirmation that something is wrong. The loop tightens because resistance signals importance. The thought returns to make sure nothing is missed. The struggle becomes the fuel.",
        },
        {
          title: "How do returning thoughts change the sense of time?",
          answer:
            "They fragment time into unfinished moments that never resolve.",
          metaphor:
            "Imagine watching a film where the same scene repeats. You know every word. The story never moves forward.",
          children:
            "Repetitive thoughts pull attention backward or forward, away from what is happening now. Meals, conversations, and rest feel thin because they are never fully entered. Life becomes a series of pauses rather than a flow. The clock keeps moving, but nothing feels complete.",
        },
        {
          title: "Why doesn’t understanding stop the thoughts?",
          answer:
            "Because the loop is maintained by the nervous system, not by logic.",
          metaphor:
            "Imagine painting over a warning light on a dashboard. The glow disappears. The engine continues to overheat.",
          children:
            "You may know the thought is irrational or outdated. Still, the body stays braced as if impact is coming. Understanding operates too slowly to interrupt a reflex designed for survival. The thought keeps returning because the system believes danger is still active.",
        },
        {
          title: "Why are returning thoughts often praised as ‘processing’?",
          answer:
            "Because naming exhaustion as work prevents questioning the environment that produced it.",
          metaphor:
            "Imagine being praised for breathing heavily while climbing stairs. The praise encourages you to keep climbing. No one asks why the stairs never end.",
          children:
            "Culture often treats rumination as effort or responsibility. This framing keeps attention focused inward rather than on the conditions creating strain. The loop is mistaken for progress. Fatigue becomes proof of commitment instead of a signal of overload.",
        },
        {
          title: "What does ZenTrust notice about returning thoughts?",
          answer:
            "ZenTrust notices how thoughts repeat when silence has been labeled unsafe.",
          metaphor:
            "Imagine turning up a radio to hear static more clearly. The noise fills the room. Someone else turns the radio off.",
          children:
            "ZenTrust does not try to stop thoughts or replace them. It observes the moment when repetition became a requirement for safety. The return of the thought is seen as a learned alarm, not a defect. ZenTrust holds attention on that mechanism without offering correction. ZenTrust remains an observing presence only.",
        },
        {
          title: "What remains when the vigilance behind thoughts is seen?",
          answer:
            "A quieter space where thoughts lose their authority to define reality.",
          metaphor:
            "Imagine a siren that finally shuts off after a long night. Your ears ring. The air itself is still.",
          children:
            "The thoughts may still appear, but they no longer dominate the room. Their urgency fades when they are no longer treated as commands. Life begins to feel less like rehearsal and more like participation. The noise loses its job. Notice the silence that remains.",
        },
      ]}
      ending={[
        "Thoughts repeat when safety was never confirmed.",
        "Vigilance is not the same as truth.",
        "Notice the silence that remains.",
      ]}
    />
  );
}
