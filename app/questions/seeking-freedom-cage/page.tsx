// app/questions/seeking-freedom-cage/page.tsx

import type { Metadata } from "next";
import { QuestionFrame } from "@/components/questions/QuestionFrame";

export const metadata: Metadata = {
  title: "Why does seeking freedom begin to feel like another cage?",
  description:
    "A question-led look at how freedom, once treated as a goal, becomes a managed project that quietly replaces seeing.",
  other: {
    category: "Meaning & Seeking",
    subcategory: "seeking-freedom-cage",
  },
};

export default function QuestionPage() {
  return (
    <QuestionFrame
      category="Meaning & Seeking"
      question="Why does seeking freedom begin to feel like another cage?"
      shortAnswer="Because once freedom is treated as something to achieve, it turns into a project that must be managed, maintained, and defended, quietly replacing seeing."
      heroMetaphor="Imagine refreshing your email every few minutes at work. Each time, the screen looks the same. Near the end of the day, you stop checking."
      sections={[
        {
          title: "Why does seeking freedom rarely seem to finish?",
          answer: "Because seeking freedom can shift from seeing into continuous self-management.",
          metaphor:
            "Imagine following a checklist long after the task is done. You keep reviewing items, correcting small details, and rewriting the same notes. The paper grows messy while the room stays the same.",
          children:
            "Many people enter practice hoping for relief, but slowly it becomes something to maintain. There is always another habit to refine, another rule to remember, another flaw to notice. Time passes, effort accumulates, yet completion never quite arrives. The day ends with a sense of unfinished business, even when nothing urgent is happening, and freedom starts to feel like a job that never clocks out.",
        },
        {
          title: "Why do rules make seeking freedom feel like identity?",
          answer:
            "Because rules can start organizing who you are, not just what you do, while seeking freedom continues.",
          metaphor:
            "Imagine wearing a uniform meant for a short task. Days pass and the fabric begins to feel normal on your skin. One morning you reach for it before showing your face.",
          children:
            "Rules can stabilize behavior at first, but over time they can define a person. Attention shifts from direct experience to correctness, then to self-monitoring. Small slips feel bigger than the original confusion that brought you here. You begin to measure your day by compliance and failure, not by ease. The sense of freedom becomes tied to staying inside approved lines, even when those lines feel tight.",
        },
        {
          title: "What keeps seeking freedom going when relief never arrives?",
          answer:
            "The belief that seeking freedom is still leading somewhere keeps effort alive even when nothing resolves.",
          metaphor:
            "Imagine walking toward a sign that always looks the same distance away. You speed up, then slow down, then check your watch. The sign stays put while your legs keep moving.",
          children:
            "When freedom is framed as a future result, effort becomes endless. Discomfort is tolerated because progress is assumed. The mind keeps a quiet scoreboard of how long you have been trying and how far you should be by now. Stopping feels like failure, not completion. Even rest can feel suspicious, as if pausing will erase what you have earned, so the loop continues without closure.",
        },
        {
          title: "Why does complexity keep seeking freedom trapped?",
          answer:
            "Because complexity can delay verification, making seeking freedom depend on authority and long study.",
          metaphor:
            "Imagine a machine with hundreds of buttons and tiny labels. You are told it works only after long training. Each day you press more buttons while the room remains quiet.",
          children:
            "Highly complex frameworks raise the cost of questioning. Doubt is reframed as not understanding enough, so you wait and study instead of checking what is happening right now. Clarity is deferred to experts and advanced stages. Over time, the effort invested becomes the reason to continue. Letting go feels like wasting years, so the structure is defended even when it no longer reduces strain.",
        },
        {
          title: "How does seeking freedom turn into a role you protect?",
          answer:
            "Because seeking freedom can provide belonging and status that replace the relief you expected.",
          metaphor:
            "Imagine being assigned a seat in a room and never moving. People begin to greet the seat before they greet you. One day you stand elsewhere and no one knows where to look.",
          children:
            "Practice can become a social and inner role that stabilizes life. Being a practitioner provides structure, language, and recognition, especially when daily life feels uncertain. The role becomes predictable even if relief does not appear. You may begin defending the identity more than the original intention. Freedom becomes something you represent and perform, while the underlying tension that started the journey stays largely unchanged.",
        },
        {
          title: "Why does a system reward seeking freedom more than finishing it?",
          answer:
            "Because seekers keep participating, while someone who stops seeking freedom no longer serves the cycle.",
          metaphor:
            "Imagine a workshop where everyone is polishing parts all day. The moment a part is finished, it is set aside and no one touches it again. The workers are praised for staying at the bench.",
          children:
            "Institutions depend on continuation. Practitioners attend, comply, repeat, and help the structure persist. Someone who no longer seeks has no obvious place and no measurable progress to display. They do not reinforce hierarchy or shared stories in the same way. The system naturally honors continuity over completion, not through cruelty, but through simple dependence on those who keep showing up and keep trying.",
        },
        {
          title: "ZenTrust: What changes when seeking freedom itself is questioned?",
          answer:
            "ZenTrust exists to notice how seeking freedom can become the structure that maintains dissatisfaction.",
          metaphor:
            "Imagine turning off a machine and hearing the room for the first time. The hum is gone, but nothing dramatic happens. You stand there with your hand still near the switch.",
          children:
            "ZenTrust does not offer a better method or a truer ladder. It points to the moment when the effort to fix experience is seen as unnecessary. When seeking pauses, there is no substitute project waiting to replace it. No new identity appears to hold onto. The absence of a task can feel strange, because so much meaning was carried by trying, improving, and staying oriented toward a future release.",
        },
        {
          title: "What remains when seeking freedom stops being a project?",
          answer:
            "Ordinary life remains, and seeking freedom no longer organizes perception, time, or identity.",
          metaphor:
            "Imagine setting down a heavy bag after a long walk and forgetting you were carrying it. The road looks the same and the sky does not change. Your shoulders feel different before you can name why.",
          children:
            "When the management project ends, life does not become special. It becomes simpler and more direct. Sensations arise without commentary, and decisions happen without reference to progress. Nothing needs to be preserved, defended, or proven. There is no urge to report results or hold a position. The absence of seeking can look unimpressive from the outside, but it quietly removes the pressure that kept the cycle running.",
        },
      ]}
      ending={[
        "Nothing has to be escaped.",
        "Nothing needs to be completed.",
        "When the project ends, what remains was never missing.",
      ]}
    />
  );
}
