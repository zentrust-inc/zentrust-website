// app/questions/division-fixer-flaw/page.tsx

import type { Metadata } from "next";
import { QuestionFrame } from "@/components/questions/QuestionFrame";

export const metadata: Metadata = {
  title: "Why does Division keep the fixer and the flaw fighting?",
  description:
    "A sharp look at how Division sustains inner conflict by creating a permanent opponent inside experience.",
  other: {
    category: "Mind & Experience",
    subcategory: "division-fixer-flaw",
  },
};

export default function QuestionPage() {
  return (
    <QuestionFrame
      category="Mind & Experience"
      question="Why does Division keep the fixer and the flaw fighting?"
      shortAnswer="Division sustains conflict because splitting experience into a fixer and a flaw creates a permanent opponent that keeps control running."
      heroMetaphor="A magnet is snapped in half to remove the south pole from the north. The snap creates two new magnets, each with a fresh south pole at the break. The pile grows as the hands keep breaking what they believe can finally be separated."
      sections={[
        {
          title: "What starts Division inside the mind?",
          answer:
            "Division starts when the mind marks one inner state as self and the other as threat, so control can feel necessary.",
          children:
            "A child sits by a stream and decides only the water moving left is allowed to stay. Every few seconds, a ripple drifts toward the right bank, and the child uses a plastic shovel to push it back. The sun moves across the sky while the child stays crouched in mud. Each shove makes more splashing and more ripples. The work continues because the stream never agreed to the rule.",
          metaphor:
            "A gardener labels the shadows under an oak tree as intruders. He brings a flashlight into the yard at noon to erase the dark patches. The batteries drain while the branches keep casting their shape on the ground.",
        },
        {
          title: "How does Division turn rest into a defect?",
          answer:
            "Division makes rest look like failure, so finishing becomes impossible and effort stays self-justified.",
          children:
            "A person stands at a kitchen counter with a list of tasks that must be done before sitting down. Each crossed-off item reveals another smudge on glass or a crumb on the floor. The legs feel heavy, but the eyes keep scanning for what is still wrong. The chair stays empty as daylight fades. The list grows because the rule says peace arrives only after perfection.",
          metaphor:
            "An architect stacks bricks without mortar. When the wall wobbles, he orders more bricks. The structure grows taller and less stable with every solid addition.",
        },
        {
          title: "Why does Division make unwanted emotion stick around?",
          answer:
            "Division anchors emotion by resisting it, because resistance keeps attention glued to what it tries to remove.",
          children:
            "Someone hears a low hum from the refrigerator and decides it is unbearable. They spend the afternoon pressing an ear to the metal, stepping across tiles, testing whether the vibration changes. When the kitchen gets quiet, they hold their breath waiting for the sound to return. The hum becomes the main event of the day. The fight gives the noise a throne in awareness.",
          metaphor:
            "A swimmer forces a bright orange beach ball to the bottom of a pool. Her muscles burn as she leans her weight into it. When her grip shifts, the ball rockets to the surface.",
        },
        {
          title: "How does Division grow through language?",
          answer:
            "Division grows when a feeling is labeled as an object, because the label creates distance that invites management.",
          children:
            "A tightness appears in the chest and is immediately named anxiety. The clock is checked to count how long it should last. Each heartbeat is compared to an inner chart of what a normal person should feel. The body is watched like a machine that must be corrected. The label turns raw sensation into a thing on a table. Attention moves from feeling to monitoring.",
          metaphor:
            "A man finds a red leaf on his porch and names it proof the forest is dying. He inspects every green leaf for signs of rust. The wind in the trees continues while his notebook fills.",
        },
        {
          title: "Why does Division intensify when joy is chased?",
          answer:
            "Division tries to freeze a preferred state, and that freezing makes the loss of it feel like danger.",
          children:
            "A hiker reaches a summit and decides the rush must be kept. He takes many photos, checks his pulse, and tries to hold the exact feeling in place. The wind sharpens and the temperature drops. Thoughts shift to the long descent and the shadows below. The peak is still under his feet, yet he is already mourning it. Holding the high point turns time into an enemy.",
          metaphor:
            "A musician presses one high note and refuses to lift her finger. The sound fills the room until it becomes pressure on the ears. Silence is treated as a threat to the performance.",
        },
        {
          title: "What safety does Division secretly provide?",
          answer:
            "Division offers a familiar purpose through inner warfare, because conflict can feel like control in an uncertain life.",
          children:
            "A man lies in bed replaying everything he did wrong at work and with friends. The harsh review feels like work, like fuel for future improvement. He feels a strange comfort in the sharpness because it means he is paying attention. The quiet room feels more dangerous than the noise of judgment. The criticism becomes a nightly ritual that substitutes motion for ground.",
          metaphor:
            "A soldier stays in a trench long after an armistice. He cleans his rifle each morning and peers through grass for enemies. A bird landing nearby makes him duck and check his ammunition.",
        },
        {
          title: "What does ZenTrust observe in Division?",
          answer:
            "ZenTrust observes Division as the moment the mind draws a line through experience and calls one side self.",
          children:
            "You sit reading and notice tension in your shoulders. ZenTrust observes the subtle move where the mind tries to relax the muscle while judging the tension as failure. There is awareness of effort trying to stop effort. The moment is split into me and my tension without any outside push. Nothing is demanded, and nothing is fixed. The line is simply seen as it is drawn.",
          metaphor:
            "A mirror hangs on a wall in an empty hallway. It reflects window light and dust drifting in the air. It does not move when shadows lengthen.",
        },
        {
          title: "When does Division dissolve without a winner?",
          answer:
            "Division dissolves when the choosing process stops, because the fixer loses its opponent when nothing is selected as enemy.",
          children:
            "A person is caught in heavy rain without an umbrella and huddles under a narrow eave. Clothes dampen and shivering starts while they wait for the clouds to break. After minutes, they step into the open street and let the water soak through the shirt. The cold remains, but the frantic search for dryness ends. Rain falls on skin, and the moment stops arguing with itself.",
          metaphor:
            "A weaver stops pulling dark threads out of a tapestry. She sees how the dark lines shape the mountain against the pale sky. The shuttle moves across the full width of the loom.",
        },
      ]}
      ending={[
        "Division is sustained by the act of choosing sides.",
        "Visibility does not require resolution.",
        "The room remains open.",
      ]}
    />
  );
}
