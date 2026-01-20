// app/questions/freedom-permitted-cages/page.tsx

import type { Metadata } from "next";
import { QuestionFrame } from "@/components/questions/QuestionFrame";

export const metadata: Metadata = {
  title: "Are you truly free, or just choosing between permitted cages?",
  description:
    "A question-led look at how freedom can feel like choice while the boundaries remain pre-arranged as permitted cages.",
  other: {
    category: "Mind & Experience",
    subcategory: "freedom-permitted-cages",
  },
};

export default function QuestionPage() {
  return (
    <QuestionFrame
      category="Mind & Experience"
      question="Are you truly free, or just choosing between permitted cages?"
      shortAnswer="Because most freedom is performed by selecting between cages that were pre-arranged to look like destinations, choice often replaces authorship and feels like freedom."
      heroMetaphor="A man sits in a theater watching a film of a wide, open road. He feels the wind on his face because a fan has been placed in the corner of the room. He believes he is traveling, but he is only sitting in the dark."
      sections={[
        {
          title: "Why do these cages rarely feel like cages?",
          answer:
            "Because cages are padded with social approval and predictable safety, the bars blend into rewards and stop registering as limits.",
          metaphor:
            "A bird lives in a cage made of polished gold. It spends the morning rubbing the bars until they shine. It sings toward the window and never touches the latch.",
          children:
            "You wake up and check your schedule, and the full day feels like proof of competence. Messages come in, you reply quickly, and small praise arrives like receipts. The routine is familiar, so it feels safe and self-chosen. Later, when the day ends, you feel strangely empty even after doing everything right. The pace was set elsewhere, but it arrives wearing your own handwriting.",
        },
        {
          title: "How do permitted cages shape a human life into cages?",
          answer:
            "Permitted cages fragment a life by rewarding the scripted performer while quietly starving the unscripted parts that do not fit.",
          metaphor:
            "A river is diverted into a concrete channel to power a distant city. The water moves faster and makes bright noise at the bends. The old riverbed dries and fills with dust and weeds.",
          children:
            "In one room you speak like a professional, in another like a partner, in another like a polite citizen. Each room has phrases that get smiles and phrases that bring silence. You switch quickly and call it maturity because it keeps things smooth. Over months, you notice you cannot find the voice that speaks when no one is watching. The roles still work, but the person behind them feels faint.",
        },
        {
          title: "Why does having many choices hide the cages as cages?",
          answer:
            "Because many options create a constant decision fever, attention stays on selecting items while the cages underneath remain unchanged.",
          metaphor:
            "A child is given a box of one hundred crayons. The paper already has a maze printed in faint gray. The child colors hard for an hour and never turns the page over.",
          children:
            "You stand in a supermarket aisle with dozens of cereals and feel the weight of a meaningful decision. You compare labels, prices, and brand stories, and the choosing feels like identity. The same pattern repeats with careers, hobbies, and opinions, each offered like a shelf. You stay busy selecting, adjusting, and optimizing, so it feels active and free. Meanwhile the shelves remain the shelves, and nothing else is considered.",
        },
        {
          title: "What quietly defines the limits of these cages as cages?",
          answer:
            "The environment sustains cages by training your imagination to stop at an invisible line that feels like common sense.",
          metaphor:
            "A mountain goat lives on a narrow ledge above a wide valley. It looks at the open sky each morning from the same spot. Its hooves stop at the edge without any rope or fence.",
          children:
            "As a child you learned which paths were respectable and which were embarrassing, risky, or strange. Some possibilities were never named, so they never became real options inside you. Years later, you look at your life and feel a wide horizon, yet your feet stop at the same familiar boundary. No one is blocking you in the moment. The limit feels like prudence, but it is an old lesson still running.",
        },
        {
          title: "Why does the mind defend its own cages as cages?",
          answer:
            "The mind defends cages because admitting the bars would expose wasted effort and invite uncertainty that the ego feels too tired to hold.",
          metaphor:
            "A prisoner is handed a key that fits the heavy iron door. He steps outside and hears insects and distant wind in the dark trees. He turns back, locks the door again, and sits on the cot.",
          children:
            "Someone calls your career a refined form of captivity, and heat rises in your chest before you think. You list benefits, weekends, travel, and the dignity of being responsible. The argument is fast because it protects the world you have built around familiar rules. In the quiet after, you notice how much energy it took to defend the frame. The defense is not about truth, it is about keeping the ground from moving under your feet.",
        },
        {
          title: 'Why does "free will" often keep us inside cages?',
          answer:
            'Modern "free will" keeps cages intact by rewarding people for improving their position inside the structure instead of noticing the structure itself.',
          metaphor:
            "A sailor polishes brass on the same ship every morning. He trims the sails to catch small gusts that pass through the harbor. The anchor chain stays tight and loud against the dock.",
          children:
            "On weekends you learn skills to become more valuable, and the progress feels clean and logical. You read about productivity so work takes less time, then you use the saved time to prepare for more work. Exercise becomes fuel for Monday, and rest becomes another form of efficiency. Each choice sounds like freedom because it is chosen deliberately. Over time, the choices circle the same center, and the structure stays unquestioned while you become excellent at fitting it.",
        },
        {
          title: "What does ZenTrust notice about cages here, and why do cages persist?",
          answer:
            'ZenTrust notices how "freedom" is used like a sedative that keeps attention away from cages, so choosing feels sufficient and questioning rarely begins.',
          metaphor:
            "A mirror is placed in the middle of a crowded marketplace. People pass, bargaining over fruit and cloth, and the mirror stays still. It reflects faces, hands, and motion without moving a single stall.",
          children:
            "ZenTrust watches people move from one acceptable room to another and call it progress. It sees the tiredness that comes from maintaining a life that feels like a script performed under bright lights. ZenTrust does not offer an exit map or a tool to break bars. It stays with the moment of choosing, when the chooser feels separate from the cage. In that still moment, the cage and the chooser appear as one continuous motion, without judgment.",
        },
        {
          title: "Why does the illusion of freedom survive even when cages are seen?",
          answer:
            "The illusion survives because the system replaces truth with comfort, and comfort makes cages feel livable again after the first sharp glance.",
          metaphor:
            "A gardener kneels all day pulling weeds from a flower bed. He fills a bucket and feels satisfied by the neat rows. When he finally stands, the high stone wall around the garden is already in shadow.",
          children:
            "You see the bars for a moment and a quiet panic rises, not dramatic, just sharp. If you stayed with that seeing, you might lose friends, status, and the story that holds your days together. Very quickly, a new project, purchase, or philosophy arrives and the pressure fades. The bars begin to look like decoration again, something normal and manageable. You keep living, and the old comfort returns, even while the memory lingers underneath.",
        },
      ]}
      ending={[
        "Choice and freedom are not the same thing.",
        "The cages are made of scripts that can feel like your own voice.",
        "The hallway stays quiet even when the rooms are loud.",
      ]}
    />
  );
}
