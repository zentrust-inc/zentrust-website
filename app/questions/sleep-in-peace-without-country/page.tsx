// app/questions/sleep-safety-stateless/page.tsx

import type { Metadata } from "next";
import { QuestionFrame } from "@/components/questions/QuestionFrame";

export const metadata: Metadata = {
  title: "If no country claimed you, where would you sleep in peace for sleep safety?",
  description:
    "A question about sleep safety and how the body finds rest when permission, nationality, and identity protections are removed.",
  other: {
    category: "Nature & Land",
    subcategory: "sleep-safety",
  },
};

export default function QuestionPage() {
  return (
    <QuestionFrame
      category="Nature & Land"
      question="If no country claimed you, where would you sleep in peace for sleep safety?"
      shortAnswer="You would sleep in peace where the night is predictable, the shelter is trusted, and nothing requires you to stay alert."
      heroMetaphor="Imagine arriving at night with no documents and nowhere to explain yourself. Streetlights glare and every sound feels sharp. Then you step into a small place where the air softens and your shoulders drop without effort."
      sections={[
        {
          title: "Why does sleep safety feel urgent the moment identity disappears?",
          answer:
            "Because sleep safety is the first place where protection becomes physical instead of symbolic.",
          children:
            "During the day, uncertainty can be managed with movement and distraction. At night, the body must surrender control in order to sleep. Without sleep safety, rest becomes shallow and fragmented. The body listens for danger instead of releasing into recovery. This makes the loss of nationality feel immediate and visceral, not abstract. Sleep safety exposes whether a place can actually hold you when vigilance must stop.",
          metaphor:
            "Imagine lying down while a door behind you keeps clicking open and shut. The room looks quiet. Your body stays awake anyway.",
        },
        {
          title: "Why is sleep safety not guaranteed by having a bed?",
          answer:
            "Because sleep safety depends on threat absence, not physical comfort.",
          children:
            "A bed solves tired muscles, but it does not calm alert systems. Thin walls, unfamiliar sounds, or uncertain access can keep the nervous system active. Sleep safety requires predictability and containment, not softness alone. This is why luxury can still feel unsafe and simplicity can feel restful. The body prioritizes protection cues over comfort cues when deciding whether to sleep deeply.",
          metaphor:
            "Imagine lying on a soft mattress in a room where footsteps pass the door all night. The sheets are clean. Your ears never rest.",
        },
        {
          title: "What does the body look for to establish sleep safety?",
          answer:
            "The body looks for consistent shelter, low noise, and reliable boundaries.",
          children:
            "Sleep safety emerges when nights behave the same way repeatedly. The body learns whether sounds escalate or settle, whether doors remain closed, whether morning arrives predictably. These patterns matter more than explanations. Over time, the body relaxes its scanning. Sleep deepens not because conditions are perfect, but because they are familiar and non-threatening.",
          metaphor:
            "Imagine a cat returning to the same corner every evening. No one trains it. The corner never surprises it.",
        },
        {
          title: "Why do systems replace land in defining sleep safety?",
          answer:
            "Because systems promise protection without requiring familiarity with place.",
          children:
            "Documents, borders, and status act as portable assurances. They reduce friction and offer access, but they bypass direct relationship with land. Over time, people rely on permission rather than environment for sleep safety. When permission disappears, many realize they do not know which places actually let their bodies rest. This question reverses that reliance.",
          metaphor:
            "Imagine carrying an umbrella that only opens if someone recognizes the logo. It looks official. The rain keeps falling.",
        },
        {
          title: "How does land quietly teach sleep safety over time?",
          answer:
            "Through repeated nights of uninterrupted rest.",
          children:
            "Land becomes associated with sleep safety when the body repeatedly sleeps without interruption. Temperature, airflow, sound, and light begin to feel predictable. The body stops negotiating with the night. Over time, sleep arrives faster and lasts longer. This learning happens without conscious effort or belief.",
          metaphor:
            "Imagine waking to the same dawn light through the same window. You stop checking the clock. Your body expects rest there.",
        },
        {
          title: "Why does losing sleep safety feel more frightening than losing status?",
          answer:
            "Because sleep safety determines whether recovery is possible at all.",
          children:
            "Status loss threatens identity, but sleep safety loss threatens regulation. Without sleep, the body accumulates stress and confusion. Hunger, fear, and vigilance intensify. This makes uncertainty feel unbearable. The fear is not about reputation, but about whether the body will ever stand down long enough to restore itself.",
          metaphor:
            "Imagine trying to recharge a phone while the charger sparks on and off. The battery never fills. The warning light stays on.",
        },
        {
          title: "What does ZenTrust notice about sleep safety in this question?",
          answer:
            "ZenTrust notices how rarely sleep safety is named as a requirement for belonging.",
          children:
            "ZenTrust does not ask where someone is legally allowed to live. It notices where the body can rest without guarding itself. When people answer quickly, they often name countries or identities. When they slow down, they describe rooms, sounds, climates, and rhythms. ZenTrust holds attention on that shift without judging it.",
          metaphor:
            "Imagine being asked for your address every day and never being asked where you sleep best. One question feels normal. The other feels strangely personal.",
        },
        {
          title: "What if sleep safety comes from a small place, not a nation?",
          answer:
            "Then sleep safety becomes measurable through the body rather than identity.",
          children:
            "The answer may be modest: a courtyard, a hillside, a quiet room, a familiar climate. It may not align with official narratives of home. That mismatch is not failure. It reveals how sleep safety operates at human scale. The body recognizes what allows rest, even when language struggles to justify it.",
          metaphor:
            "Imagine finding one warm step in winter sunlight. You pause there without planning to. Your body stays.",
        },
      ]}
      ending={[
        "Sleep is where safety becomes undeniable.",
        "Land can hold a body without paperwork.",
        "Home may be where vigilance finally stops.",
      ]}
    />
  );
}
