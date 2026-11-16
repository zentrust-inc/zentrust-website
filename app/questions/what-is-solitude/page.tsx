// app/questions/what-is-solitude/page.tsx

import type { Metadata } from "next";
import { QuestionFrame } from "@/components/questions/QuestionFrame";

export const metadata: Metadata = {
  title: "What is solitude, and how is it different from loneliness?",
  description:
    "Solitude is time alone that feels chosen and can be restful, unlike loneliness. A calm look at what it is, why it helps, and how to make room for it.",
  other: {
    category: "Meaning & Mind",
    subcategory: "solitude",
  },
};

export default function QuestionPage() {
  return (
    <QuestionFrame
      category={"Meaning & Mind"}
      question={"What is solitude, and how is it different from loneliness?"}
      shortAnswer={"Solitude is being alone, or apart from others, in a way that feels chosen or welcome rather than painful. Unlike loneliness, it can be a source of rest, clarity and self-understanding, and many people find they need some of it."}
      heroMetaphor={"Imagine a pond after the wind drops. The surface grows still. For the first time all day, you can see to the bottom."}
      sections={[
        {
          title: "What is the difference between solitude and loneliness?",
          answer:
            "Loneliness is feeling disconnected against one's wishes, while solitude is time alone that feels chosen or at least welcome.",
          metaphor:
            "Imagine two people sitting alone on the same bench. One is waiting for someone who will not come. The other came there to watch the evening light.",
          children:
            "Loneliness is the painful sense that our connections fall short of what we need. It can happen in a crowded room or a busy marriage. Solitude is different. It is being alone, or apart, in a way that feels chosen or at least acceptable. The same quiet evening can feel like either one depending on mood, circumstances and whether connection is available when wanted. The difference lies less in the setting than in the relationship to it.",
        },
        {
          title: "Why can time alone feel restful?",
          answer:
            "Time alone gives the mind a break from constantly reading and responding to other people.",
          metaphor:
            "Imagine putting down a bag you forgot you were carrying. Your shoulders drop. Only then do you notice how heavy it was.",
          children:
            "Much of daily life involves reading other people: their moods, needs and expectations. Even pleasant company asks for attention and small adjustments. Alone, that work pauses. Thoughts can wander, settle or finish themselves without interruption. Many people find that ideas, feelings and decisions become clearer after quiet time. Solitude can also be a space to notice what one actually wants, apart from what others want. For many, that recovery makes later company more enjoyable, not less.",
        },
        {
          title: "Why do some people find solitude uncomfortable?",
          answer:
            "Quiet removes distractions, so feelings that were easy to ignore can come forward.",
          metaphor:
            "Imagine turning off a loud fan in a quiet house. Suddenly you hear the clock, the fridge and the creak of the floor. They were there all along.",
          children:
            "Without distractions, thoughts and feelings that were waiting in the background can surface. Worries, regrets or restlessness may arrive first. Some people also learned early that being alone meant being left out, so quiet can carry an old sting. Busy cultures can treat time alone as something to fix. Discomfort at first is common and does not mean solitude is wrong for someone. If what surfaces feels heavy or frightening, talking with a counselor or someone trusted can help.",
        },
        {
          title: "How much solitude does a person need?",
          answer:
            "The amount varies widely with temperament, circumstances and season of life.",
          metaphor:
            "Imagine a tide that comes in and goes out. Neither high nor low water is the right one. The shore needs both.",
          children:
            "There is no single right amount. Temperament plays a part: some people recharge mainly alone, others mainly with company, and many shift between the two. Life stage matters too. A parent of small children may crave an hour of quiet, while someone living alone may need more contact. A useful guide is how one feels afterward. Solitude that leaves a person steadier is usually serving them. Solitude that leaves them heavier may be worth rebalancing.",
        },
        {
          title: "Is time alone with a phone still solitude?",
          answer:
            "Being physically alone is not always being mentally alone, because feeds and messages can fill the space solitude would open.",
          metaphor:
            "Imagine a room with every window open to a busy street. You are alone in it. You still cannot hear yourself think.",
          children:
            "A phone brings other voices, opinions and demands into quiet moments. Scrolling can feel like rest, yet the mind keeps reacting to what others post and say. Real solitude usually involves some freedom from input, even briefly. That might mean a walk without headphones, a meal without a screen, or sitting with a cup of tea and nothing else. Many people notice that their own thoughts come more easily once the noise fades.",
        },
        {
          title: "When can time alone become a problem?",
          answer:
            "Time alone can become a problem when it stops being a choice and turns into withdrawal or isolation.",
          metaphor:
            "Imagine a quiet harbor where boats come to rest. It is a good place to anchor. It becomes a problem only when no boat can leave.",
          children:
            "Healthy solitude usually has a door that opens both ways. A person can step out into company when they want to. Isolation feels different: avoiding people out of fear, shame or exhaustion, or having no one to turn to. Long stretches of unwanted isolation are linked to poorer mood, sleep and physical health. If being alone has started to feel like hiding, or low mood lingers, talking to a doctor, counselor or trusted person is a sensible step.",
        },
        {
          title: "How can someone make room for solitude?",
          answer:
            "Small, regular pockets of quiet often work better than waiting for a long retreat.",
          metaphor:
            "Imagine filling a jar with a few drops of water each day. No single drop looks like much. Over weeks, the jar holds something real.",
          children:
            "Solitude does not require a cabin or a week away. It can be ten minutes before others wake, a short walk at lunch, or a drive with the radio off. Some people journal, sketch, garden or simply sit by a window. Starting small can make any discomfort easier to meet. It can help to tell others what you are doing, so quiet time reads as care for yourself rather than distance from them.",
        },
        {
          title: "What does solitude make easier to remember?",
          answer:
            "Solitude can remind people that their own company is worth keeping, and that their inner life is something to tend, not escape.",
          metaphor:
            "Imagine a lamp left on in a small window. No one else is home. The room is still warm and lit.",
          children:
            "Many traditions, religious and secular, have treated time apart as a place to reflect, grieve, pray or simply rest. People often return from quiet with a clearer sense of what matters to them. Solitude and connection are not opposites. For some, time alone makes it easier to listen and be present with others. Being comfortable in one's own company is a quiet kind of strength, and it can be built slowly, one small pause at a time.",
        },
      ]}
      ending={[
        "Alone is not the same as lonely.",
        "Quiet can be a place to return to, not escape from.",
        "Time with yourself can make time with others richer.",
      ]}
    />
  );
}
