// app/questions/identity-without-status-possessions/page.tsx

import type { Metadata } from "next";
import { QuestionFrame } from "@/components/questions/QuestionFrame";

export const metadata: Metadata = {
  title: "Who are you without status or possessions, identity?",
  description:
    "A question-led exploration of identity when titles, rank, and ownership are removed.",
  other: {
    category: "Meaning & Seeking",
    subcategory: "identity-without-status-possessions",
  },
};

export default function QuestionPage() {
  return (
    <QuestionFrame
      category="Meaning & Seeking"
      question="Who are you without status or possessions, identity?"
      shortAnswer="You are awareness that observes, a patterned will that inclines you, and a capacity to relate and act. You remain as perception, choice, and presence when roles, titles, and possessions fall away. You are the verb of living, not the labels or objects attached to it."
      heroMetaphor="Imagine waking up in a plain room with no name on the door and nothing laid out to claim as yours. Your phone is gone, your clothes are simple, and no one recognizes you. The room is quiet, and nothing is asking you to perform."
      sections={[
        {
          title: "Why does identity cling to status so quickly?",
          answer:
            "Because status gives identity a visible outline that others can recognize.",
          metaphor:
            "Imagine walking into a room with a badge pinned to your shirt. People greet the badge before they greet you. Your hands feel for the badge again as the conversation starts.",
          children:
            "Status simplifies interaction. Titles and ranks tell others how to treat you without conversation. Over time, identity fuses with these signals because they reduce uncertainty. You notice it in small moments, how rooms open or close when a title is mentioned. When status disappears, identity can feel thinner, like your outline was borrowed from the room. What vanished was recognition and position, not the basic fact of being here in your body.",
        },
        {
          title: "Why do possessions slide from tools into identity?",
          answer:
            "Because possessions become proof that life is moving in the right direction.",
          metaphor:
            "Imagine a keyring that jingles with every step you take. The sound follows you through the day. When the keys are gone, your pocket feels oddly light.",
          children:
            "Possessions begin as practical, but they slowly absorb meaning. They signal effort, progress, and belonging, even when no one says it out loud. Identity starts leaning on what is owned to confirm worth, especially on quiet days. Losing possessions can feel like losing selfhood, not because the self depended on objects, but because reassurance was stored in them. The empty space is loud before it becomes neutral, and your hands keep reaching.",
        },
        {
          title: "What kind of identity collapses when status and possessions vanish?",
          answer: "The identity built from comparison and display.",
          metaphor:
            "Imagine standing on a small step while others stand on the floor. The step is removed without warning. You blink and look around at eye level.",
          children:
            "An identity built on comparison needs contrast to survive. Status and possessions provide that contrast by separating higher from lower, more from less. When those markers vanish, the comparison-based identity loses its reference points. What collapses is not presence or awareness, but the structure that relied on being seen a certain way. The discomfort comes from losing orientation, not from losing existence. The floor was always there.",
        },
        {
          title: "How does achievement quietly replace lived identity?",
          answer:
            "Achievement offers a ready-made answer to the question of who you are.",
          metaphor:
            "Imagine a wall covered with certificates in neat frames. The frames look solid from across the room. Up close, the glass reflects your face instead.",
          children:
            "Achievements give identity a clean narrative. They provide milestones that can be listed and repeated, especially when inner clarity is thin. Over time, knowing yourself is replaced by recounting accomplishments, like reading a resume to feel real. When achievements lose relevance or context, identity can feel hollow. The record remains, but it no longer answers the question it used to answer. The gap exposes how much was carried by proof and applause.",
        },
        {
          title: "Why does losing identity markers feel frightening?",
          answer:
            "Because the mind confuses undefined identity with disappearance.",
          metaphor:
            "Imagine stepping onto a stage after the lights go out. The set is still there under your feet. You wait for a cue that does not arrive.",
          children:
            "Markers create continuity. They reassure the mind that the story is still intact. When they vanish, the gap that follows can feel like erasure, even if nothing hurts. Fear arises not from loss of being, but from unfamiliarity with identity that is not named or validated. The pause can feel wrong simply because it is quiet. The mind searches for a label to stand on and a role to resume.",
        },
        {
          title: "Why does culture resist identity without status or possessions?",
          answer:
            "Because undefined identity cannot be easily categorized or managed.",
          metaphor:
            "Imagine filling out a form where every box is required. One box has no matching option. You hover with the pen and feel your patience thin.",
          children:
            "Social life relies on legibility. Status and possessions make identity easy to place, so interaction stays efficient. An identity without visible markers slows expectation and disrupts routines in workplaces, families, and even casual greetings. Culture therefore encourages constant signaling, not because it is truer, but because it keeps sorting simple. When signals drop, people reach for quick explanations. The need to categorize arrives before curiosity does, and judgment arrives after.",
        },
        {
          title: "ZenTrust: What does ZenTrust notice about identity here?",
          answer:
            "ZenTrust notices how identity is mistaken for the structures built around it.",
          metaphor:
            "Imagine a building wrapped in scaffolding for months. One morning the scaffolding is gone. People slow down and stare at the bare walls.",
          children:
            "ZenTrust does not argue against roles, titles, or ownership. It observes how quickly identity is equated with its supports, like a house being confused with its scaffolding. When those supports fall away, what remains is often overlooked because it does not announce itself. ZenTrust holds attention on that remainder without trying to define it. This is not a demand for change or purity. It is a pause long enough to notice what still persists.",
        },
        {
          title: "What remains when identity is no longer displayed?",
          answer:
            "A continuous presence that does not need to be earned.",
          metaphor:
            "Imagine scraping labels off a window until the glass is clear. The view outside does not change. Your eyes keep adjusting to the light.",
          children:
            "Without status or possessions, identity stops performing. What remains may feel subtle and ordinary at first, which can be disappointing to the part that expects fireworks. There is less to point to and more to notice in breath, attention, and choice. This is not a conclusion or solution. It is simply identity experienced without props for a moment, before the usual signals return. Even a brief glimpse can change what feels necessary tomorrow.",
        },
      ]}
      ending={[
        "Nothing here asks you to reject status or possessions.",
        "Nothing here asks you to redefine identity.",
        "It only asks what was present before anything needed to be claimed.",
      ]}
    />
  );
}
