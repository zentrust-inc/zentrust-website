// app/questions/chronic-stress-insulin/page.tsx

import type { Metadata } from "next";
import { QuestionFrame } from "@/components/questions/QuestionFrame";

export const metadata: Metadata = {
  title: "Why does chronic stress keep insulin elevated?",
  description:
    "A question-led look at how chronic stress and social performance sustain insulin activity long after its original purpose has passed.",
  other: {
    category: "Health & Suffering",
    subcategory: "stress-hyperinsulinemia",
  },
};

export default function QuestionPage() {
  return (
    <QuestionFrame
      category="Health & Suffering"
      question="Why does chronic stress keep insulin elevated?"
      shortAnswer="Because chronic stress is maintained by ongoing social performance, insulin stays elevated to manage glucose for demands that are rehearsed but never completed."
      heroMetaphor="Imagine a stage where the curtain never closes. The actor keeps adjusting posture, voice, and timing even when the audience has left. The body stays ready because the role never officially ends."
      sections={[
        {
          title: "Why does insulin remain elevated under chronic stress?",
          answer:
            "Because insulin responds to sustained readiness created by unfinished social demands.",
          children:
            "Days are filled with anticipation, monitoring, and self correction. The body prepares for meetings, evaluations, messages, and judgments that may or may not arrive. Glucose is released to support that readiness. Insulin manages it repeatedly. Nothing fully resolves. The performance resets each morning. Insulin remains active because the body is kept in rehearsal, not recovery.",
          metaphor:
            "Imagine a theater rehearsal that restarts every hour. Costumes stay on, lights stay warm, and actors never hear the word finished. The stage is quiet, but never closed.",
        },
        {
          title: "Why does effort fail to lower insulin during chronic stress?",
          answer:
            "Because insulin follows the role being played, not the effort applied to escape it.",
          children:
            "People diet, exercise, track, and optimize while staying inside the same expectations. The body continues preparing to be productive, responsive, and acceptable. Insulin stays elevated because the role has not changed. Effort becomes part of the performance. The signal to stand down never arrives.",
          metaphor:
            "Imagine polishing a uniform between drills. The fabric shines, but the marching never stops. The polishing becomes another duty.",
        },
        {
          title: "What does chronic stress actually signal to insulin?",
          answer:
            "That availability must be constant because evaluation may happen at any moment.",
          children:
            "Chronic stress does not require danger. It only requires being watched, measured, or compared. Glucose is released so the body can respond instantly. Insulin stays active to control that fuel. The signal repeats even in stillness. The body remains on call for a judgment that never fully lands.",
          metaphor:
            "Imagine keeping your phone unlocked all day waiting for a message. The screen glows, the battery drains, and silence feels tense.",
        },
        {
          title: "How does chronic stress redefine insulin’s role?",
          answer:
            "Insulin becomes the manager of constant readiness rather than short-term survival.",
          children:
            "Insulin shifts from handling brief emergencies to supporting continuous performance. Energy is stored, not accessed. Fatigue grows alongside weight. The body adapts to being always available. This is not a malfunction. It is compliance with the conditions it senses.",
          metaphor:
            "Imagine a warehouse that never closes because orders might come. Boxes pile up, aisles narrow, and movement slows. Nothing is technically wrong.",
        },
        {
          title: "How does elevated insulin feel inside daily life?",
          answer:
            "As hunger, fatigue, and the sense of being managed rather than living.",
          children:
            "Hunger appears without need. Rest does not restore. The day feels heavy before it begins. These sensations are often treated as personal problems. They are signals of ongoing regulation. Insulin continues to manage a life lived on display.",
          metaphor:
            "Imagine wearing a badge that never comes off. Even alone, posture stays upright. Rest feels incomplete.",
        },
        {
          title: "Why does chronic stress keep insulin elevated over years?",
          answer:
            "Because modern systems reward visible coping more than actual completion.",
          children:
            "Work, health culture, and social norms reward endurance. Being functional is praised. Standing down is rare. Insulin remains elevated because the body learns that readiness is safer than rest. The role becomes identity.",
          metaphor:
            "Imagine applause that only happens while you keep moving. Stopping feels like disappearing.",
        },
        {
          title: "What does ZenTrust notice about insulin in this pattern?",
          answer:
            "That insulin often reflects obedience to an unspoken script rather than biological failure.",
          children:
            "ZenTrust observes insulin as a faithful responder to expectation. The body adapts to what is demanded, not to what is said. Seeing this shifts the mirror. The question is no longer why insulin will not calm down, but what keeps being silently performed.",
          metaphor:
            "Imagine realizing the mirror was never judging you. It was showing the costume you never took off.",
        },
        {
          title: "What remains when insulin is seen without the role?",
          answer:
            "A pause where the performance briefly loosens.",
          children:
            "Nothing here asks for change. Recognition alone alters the room. Insulin no longer looks like an enemy or a defect. The script becomes visible. The body waits, as it always has, for a different signal.",
          metaphor:
            "Imagine the rehearsal stopping mid sentence. No applause. No instruction. Just stillness.",
        },
      ]}
      ending={[
        "The body prepares for the roles it is given.",
        "Insulin follows readiness, not worth.",
        "Seeing the script is not the same as leaving it.",
      ]}
    />
  );
}
