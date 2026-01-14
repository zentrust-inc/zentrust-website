// app/questions/automation-feel-personal/page.tsx

import type { Metadata } from "next";
import { QuestionFrame } from "@/components/questions/QuestionFrame";

export const metadata: Metadata = {
  title: "Why does automation feel personal even when it is systemic?",
  description:
    "A question-led look at why large-scale automation is often experienced as personal rejection rather than structural change.",
  other: {
    category: "Schools & Systems",
    subcategory: "automation-personalization",
  },
};

export default function QuestionPage() {
  return (
    <QuestionFrame
      category="Schools & Systems"
      question="Why does automation feel personal even when it is systemic?"
      shortAnswer="Because systems operate invisibly while their effects arrive directly into individual lives, the nervous system often experiences structural change as personal rejection."
      heroMetaphor="Imagine a ceiling light that turns off without warning. The room goes dim, but no one touched the switch and no voice explains why. You stand there wondering what you did, even though nothing in the room has changed."
      sections={[
        {
          title: "What makes automation feel personal at first?",
          answer:
            "Automation often enters life through loss or exclusion, not through explanation, which makes it feel directed at you.",
          metaphor:
            "Imagine receiving a letter with no return address. Inside is a single sentence, and no signature. You read it again, trying to guess who sent it and why.",
          children:
            "The first contact with automation is rarely a diagram or announcement. It shows up as an email, a quiet role change, or a task that is suddenly no longer needed. There is no shared moment where everyone pauses together. Instead, the effect lands in your inbox or calendar. Because the experience is solitary, the mind fills the gap with personal meaning before structural understanding has time to form.",
        },
        {
          title: "Why does the obvious explanation for automation fail?",
          answer:
            "Because knowing something is widespread does not stop the body from registering loss as personal.",
          metaphor:
            "Imagine being caught in the rain with many others. You know the storm is large, but the water still runs down your own collar. Your clothes cling to you, not to the crowd.",
          children:
            "People can explain statistics, trends, and industry shifts, but those explanations arrive after the fact. The body reacts first. It notices interruption, uncertainty, and exposure. Even when you understand that many others are affected, your daily routines are the ones that break. The explanation may be correct, but it does not meet the sensation where it begins.",
        },
        {
          title: "What is actually being personalized?",
          answer:
            "What gets personalized is not the system itself, but the sudden loss of predictability in daily life.",
          metaphor:
            "Imagine walking a route you know by heart and finding one familiar turn blocked by tape. The street beyond still exists, but your feet stop automatically. You look around for a sign that is not there.",
          children:
            "Automation removes tasks, roles, or paths that once structured time. When that structure disappears, the nervous system searches for cause. Systems do not speak, so the search turns inward. The question quietly shifts from what changed to what is wrong with me. This happens even when nothing about your ability or effort has altered.",
        },
        {
          title: "How does this personalization unfold over time?",
          answer:
            "Over time, personalization can turn into self-monitoring, doubt, and a narrowing sense of permission.",
          metaphor:
            "Imagine adjusting your posture in a chair that keeps wobbling. You keep shifting, thinking the balance is off because of you. The floor underneath never comes into view.",
          children:
            "At first, you try to improve, adapt, or anticipate what might be coming next. Then you hesitate before committing to plans or speaking confidently. You may watch yourself more closely than before, scanning for mistakes that could explain the disruption. The longer the system remains abstract, the more effort goes into managing your own reactions instead of seeing the larger pattern.",
        },
        {
          title: "Why does automation trigger rejection rather than neutrality?",
          answer:
            "Because removal without acknowledgment often feels like rejection, even when no judgment was involved.",
          metaphor:
            "Imagine your name is removed from a list on the wall. No one crosses it out in front of you, and no one explains. You notice it is gone when you look up.",
          children:
            "Humans are tuned to notice exclusion quickly. When something you once belonged to no longer includes you, the experience carries social weight. Automation does not intend rejection, but it often produces the same signals: silence, absence, and lack of explanation. The mind interprets those signals using social rules, not technical ones.",
        },
        {
          title: "Why does this pattern keep repeating with automation?",
          answer:
            "Because systems scale faster than shared understanding, leaving individuals to absorb change alone.",
          metaphor:
            "Imagine watching a shadow move across a field while standing under it. From where you are, the shift feels sudden. From above, it is gradual.",
          children:
            "Automation advances through tools, code, and decisions that are distributed and distant. There is rarely a single moment of collective orientation. Each person encounters the change at a different point, without a shared frame. This staggered arrival makes it hard to feel accompanied, even when millions are experiencing similar disruptions.",
        },
        {
          title: "What does ZenTrust notice about personalization here?",
          answer:
            "ZenTrust notices how silence around systems encourages people to turn structural change into self-judgment.",
          metaphor:
            "Imagine standing in a room where the temperature keeps dropping. No one mentions it, and you begin to wonder if you are just more sensitive than others. You pull your sleeves down without saying anything.",
          children:
            "This Question is not about convincing you that automation is harmless or inevitable. ZenTrust pays attention to how meaning is formed when explanations arrive late or not at all. When systems remain unnamed, people fill the gap with stories about their own adequacy. Seeing that process can soften the added layer of personal blame that often attaches to an already difficult change.",
        },
        {
          title: "What changes when automation is seen as systemic?",
          answer:
            "When automation is seen as systemic, personal pain can exist without turning into personal fault.",
          metaphor:
            "Imagine stepping back from a mural and realizing the mark you thought was a stain is part of a larger image. The mark does not disappear, but it changes position in your view.",
          children:
            "You may still feel loss, disruption, or uncertainty. Those experiences do not vanish with insight. What can change is the story you add on top of them. When the scale becomes visible, the need to constantly explain yourself can loosen. The situation remains unfinished, but it no longer demands that you interpret it as a verdict on who you are.",
        },
      ]}
      ending={[
        "Systems can change without speaking to you.",
        "Their silence often feels directed, even when it is not.",
        "Seeing the scale can reduce the extra weight you were carrying alone.",
      ]}
    />
  );
}
