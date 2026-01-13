// app/questions/land-benefit-existence/page.tsx

import type { Metadata } from "next";
import { QuestionFrame } from "@/components/questions/QuestionFrame";

export const metadata: Metadata = {
  title: "Does the land benefit from your existence?",
  description:
    "A question-led look at whether human presence leaves land diminished, unchanged, or quietly supported over time.",
  other: {
    category: "Nature & Land",
    subcategory: "land-extraction",
  },
};

export default function QuestionPage() {
  return (
    <QuestionFrame
      category="Nature & Land"
      question="Does the land benefit from your existence?"
      shortAnswer="Most human relationships with land are structured around extraction, even when they feel neutral or harmless."
      heroMetaphor="Imagine renting a room where you cook, wash, and sleep every day. You never clean the floor, fix the sink, or open the windows. When you leave, the room is quieter, but more worn than when you arrived."
      sections={[
        {
          title: "Where does extraction first appear in daily life?",
          answer:
            "Extraction often begins invisibly, built into ordinary ways land is used without renewal.",
          metaphor:
            "Imagine borrowing a neighbor’s tools every week. You return them dull, dirty, and sometimes broken. No argument happens, but the tools slowly stop working.",
          children:
            "Extraction does not usually feel aggressive. You wake up, use water, eat food, walk on surfaces, throw things away, and move on. The land absorbs footprints, waste, and removal quietly. Nothing interrupts your routine. Because there is no immediate feedback, it feels neutral. Over time, the ground compacts, soil thins, and life becomes less responsive. The absence of protest makes extraction seem like permission rather than imbalance.",
        },
        {
          title: "Why does extraction feel normal instead of harmful?",
          answer:
            "Extraction feels normal because its costs are delayed, dispersed, and rarely visible.",
          metaphor:
            "Imagine withdrawing small amounts from a shared jar each day. The jar never looks empty in the moment. One day, it is simply lighter than expected.",
          children:
            "Extraction hides behind time. You take a little today and nothing breaks tonight. The land does not send notices or warnings. Degradation happens slowly, below attention, across seasons. Because consequences do not align with action, the mind registers safety. What feels normal is not balance, but familiarity. When harm lacks drama, it blends into background life and becomes indistinguishable from ordinary living.",
        },
        {
          title: "What makes extraction persist even with good intentions?",
          answer:
            "Extraction persists because intention does not alter structure.",
          metaphor:
            "Imagine standing on a conveyor belt while facing the opposite direction. You walk gently, carefully, and with care. The belt still carries you forward.",
          children:
            "Many people care deeply about land while still participating in extraction. The issue is not motivation but arrangement. Housing, food systems, waste flows, and energy use are organized to pull from land, not feed it. Individual kindness cannot override design. You may recycle, garden, or conserve, yet remain embedded in patterns that remove more than they return. Good intentions soften feelings, not outcomes.",
        },
        {
          title: "How does extraction change land over time?",
          answer:
            "Extraction simplifies land until it can no longer respond.",
          metaphor:
            "Imagine a conversation where only one person speaks. The listener nods at first. Eventually, they stop reacting at all.",
          children:
            "Over time, extraction reduces diversity. Soil loses organisms, water loses clarity, and ecosystems lose redundancy. The land becomes quieter, flatter, and less resilient. It still functions, but with fewer options. When stress arrives, there is nothing to draw on. What looks like stability is actually brittleness. The land does not collapse suddenly. It slowly loses its ability to participate.",
        },
        {
          title: "Why does extraction feel efficient and rewarded?",
          answer:
            "Extraction aligns with systems that value speed, output, and predictability.",
          metaphor:
            "Imagine harvesting fruit by cutting down the tree. The yield is immediate and total. The orchard disappears the same day.",
          children:
            "Extraction produces quick results. Crops grow faster, buildings rise sooner, profits appear clearer. Regeneration takes time, observation, and uncertainty. Systems built on deadlines and returns favor what can be counted now. Extraction fits spreadsheets. Renewal does not. Over time, efficiency becomes a measure of worth, even when it empties the source. The reward structure trains repetition without asking what is being consumed.",
        },
        {
          title: "Why does extraction continue even when damage is known?",
          answer:
            "Extraction continues because stopping it threatens stability.",
          metaphor:
            "Imagine removing a load-bearing beam from a house you live in. You know it is causing strain. You also know the roof depends on it.",
          children:
            "Many livelihoods, identities, and comforts depend on extractive arrangements. Changing them feels risky, not moral. Awareness alone does not dissolve dependence. Knowing harm does not supply alternatives. As long as daily survival is tied to extraction, the pattern persists. The land absorbs the cost so human systems can remain intact. What continues is not ignorance, but fear of disruption.",
        },
        {
          title: "What does ZenTrust notice about extraction?",
          answer:
            "ZenTrust notices how extraction often appears as normal living rather than a choice.",
          metaphor:
            "Imagine a mirror placed beside a road everyone uses daily. No one is told to turn around. Some people simply notice where the road leads.",
          children:
            "ZenTrust does not ask for better behavior or cleaner habits. It observes assumptions. Extraction is rarely framed as extraction. It appears as housing, food, development, and progress. By noticing how language and structure hide the relationship, the pattern becomes visible without blame. ZenTrust holds attention at the level of perception, not instruction, allowing the question itself to do the work.",
        },
        {
          title: "What remains once extraction is seen clearly?",
          answer:
            "Once extraction is seen, the relationship becomes visible rather than automatic.",
          metaphor:
            "Imagine realizing the floor slopes after years of adjusting your posture. The room does not change. Your awareness does.",
          children:
            "Seeing extraction does not demand action. It removes confusion. The land is no longer a silent backdrop. It becomes a participant whose condition reflects the relationship. Nothing needs to be fixed immediately. The shift is internal and quiet. When the pattern is no longer hidden, repetition loses some of its grip. What happens next is not prescribed here.",
        },
      ]}
      ending={[
        "The land has always been responding.",
        "Most responses are slow and quiet.",
        "Noticing changes the relationship before anything else does.",
      ]}
    />
  );
}
