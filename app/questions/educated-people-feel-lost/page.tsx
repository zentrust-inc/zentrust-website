// app/questions/educated-people-feel-lost/page.tsx
import type { Metadata } from "next";
import { QuestionFrame } from "@/components/questions/QuestionFrame";

export const metadata: Metadata = {
  title:
    "Why do so many educated people feel lost, even after doing everything they were taught to succeed?",
  description:
    "A question-led exploration of how schooling can create outward competence while leaving inner orientation undeveloped.",
  other: {
    category: "Schools & Systems",
    subcategory: "education-conditioning",
  },
};

export default function EducatedPeopleFeelLostPage() {
  return (
    <QuestionFrame
      category="Schools & Systems"
      question="Why do so many educated people feel lost, even after doing everything they were taught to succeed?"
      shortAnswer="Because education trained many people to meet expectations and perform well inside systems, without helping them develop inner orientation or self-understanding."
      heroMetaphor="Imagine following a map for years that promises a clear destination. You arrive exactly where it said you would. When you stop walking, there is no sign telling you why you came."
      sections={[
        {
          title: "Why does life look successful but feel strangely empty?",
          answer:
            "Because visible achievement can be completed while inner orientation remains untouched.",
          metaphor:
            "Imagine finishing a long checklist handed to you at the start of the day. Every box is marked exactly as required. When you look up, there is no next page.",
          children:
            "Many people reach milestones that were presented as proof of arrival. Degrees are earned, careers established, routines stabilized. On the outside, things appear settled. Inside, something feels unfinished. The education system focused on outputs that could be measured and rewarded. It rarely addressed how a person relates to their own desires or doubts. When the external path ends, there is no inner reference point to continue from.",
        },
        {
          title: "Why doesn’t intelligence protect against this confusion?",
          answer:
            "Because intelligence was trained to solve assigned problems, not to question the frame itself.",
          metaphor:
            "Imagine being excellent at games where the rules are printed clearly. One day the board is set down without instructions. You keep waiting for someone to explain how to begin.",
          children:
            "Education rewards accuracy and correctness within predefined boundaries. Intelligence becomes the ability to operate well inside those boundaries. When life presents questions without grading or clear criteria, that intelligence feels disoriented. The mind keeps searching for the correct move, assuming one exists. The difficulty is not lack of capacity, but the absence of a frame chosen by the person themselves.",
        },
        {
          title: "What was education actually training people to do?",
          answer:
            "It trained reliability, compliance, and adaptation to existing structures.",
          metaphor:
            "Imagine learning how to operate a machine perfectly. You know every lever and sound. No one explains why the machine exists.",
          children:
            "Modern education developed alongside systems that required predictable behavior. Schools emphasized punctuality, repetition, and following directions. These skills help systems function smoothly. Less attention was given to self-inquiry or inner navigation. Students learned how to fit into roles that already existed, rarely examining whether those roles aligned with who they were becoming.",
        },
        {
          title: "How does this training show up later in adult life?",
          answer:
            "It creates adults who function well with structure but feel unsettled without it.",
          metaphor:
            "Imagine walking on a moving walkway for a long time. Your pace adjusts automatically. When the walkway ends, the ground feels unstable.",
          children:
            "Many adults feel calm when expectations are defined and roles are clear. Titles and schedules provide orientation. When those structures weaken through career shifts or personal changes, uncertainty grows. Decisions feel heavy and rest feels undeserved. Without external reference points, people struggle to trust their own sense of direction.",
        },
        {
          title: "Why did curiosity fade instead of deepen?",
          answer:
            "Because curiosity became associated with risk, evaluation, and deviation.",
          metaphor:
            "Imagine reaching for objects freely in a room. Later, each reach is watched and scored. Eventually, your hands stay still.",
          children:
            "Early curiosity often wandered beyond assigned topics. Over time, questions were timed or redirected. Students learned which curiosities were safe and which caused friction. Exploration slowly gave way to strategy. Curiosity did not disappear, but it learned to stay quiet and cautious.",
        },
        {
          title: "Why does this pattern repeat across generations?",
          answer:
            "Because systems reward adaptation more reliably than awareness.",
          metaphor:
            "Imagine living in a house with strict rules for every room. You teach the rules so others stay safe. No one asks whether the house could be redesigned.",
          children:
            "Parents and institutions often pass on what brought stability. When a system appears to work, questioning it feels risky. The rewards of conformity are visible and immediate. The costs are subtle and delayed. As a result, the same structures are reproduced without examining their long-term impact on inner life.",
        },
        {
          title:
            "Why does it appear, from a ZenTrust perspective, that something is wrong with me rather than with how I was educated?",
          answer:
            "Because conditioning teaches people to turn systemic limits into personal doubt.",
          metaphor:
            "Imagine wearing shoes that slowly pinch. Instead of examining the shoes, you blame your feet. You keep adjusting how you walk.",
          children:
            "ZenTrust questions do not assume something inside you is broken. When education presents itself as complete and neutral, confusion has nowhere external to land. It turns inward. Uncertainty becomes interpreted as inadequacy. This appearance reflects training that never included self-orientation, not personal failure.",
        },
        {
          title: "What remains once this conditioning is noticed?",
          answer:
            "A quieter space where learning can begin without external permission.",
          metaphor:
            "Imagine stepping out of a crowded hallway into an empty room. There is no sign telling you what to do. At first the silence feels uncomfortable.",
          children:
            "Noticing conditioning does not provide instant clarity. It creates space. The need to perform softens. Questions are allowed to remain open. Learning shifts from achievement to understanding. Something personal begins to grow where obedience once provided direction.",
        },
      ]}
      ending={[
        "Education may have taught you how to move forward.",
        "It may never have asked where you were going.",
        "Noticing that difference changes what success feels like.",
      ]}
    />
  );
}
