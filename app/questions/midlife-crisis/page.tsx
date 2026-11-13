// app/questions/midlife-crisis/page.tsx

import type { Metadata } from "next";
import { QuestionFrame } from "@/components/questions/QuestionFrame";

export const metadata: Metadata = {
  title: "What is a midlife crisis, really?",
  description:
    "A question-led look at the midlife crisis: why the middle years can bring restlessness and doubt, and what the feeling may be pointing at.",
  other: {
    category: "Mind & Experience",
    subcategory: "midlife-crisis",
  },
};

export default function QuestionPage() {
  return (
    <QuestionFrame
      category="Mind & Experience"
      question="What is a midlife crisis, really?"
      shortAnswer="A midlife crisis is a period of restlessness and doubt, often in the forties or fifties, when the life a person built stops answering the question of what it is for. It is less a breakdown than a reckoning between the plan that was followed and the time that remains."
      heroMetaphor="Imagine reaching the top of a long staircase you were told to climb. The landing is solid and the view is fine. You stand there holding the railing, unsure which way the next step goes."
      sections={[
        {
          title: "What does a midlife crisis actually feel like?",
          answer:
            "It often feels like quiet restlessness: a sense that the days are full while something central has gone missing.",
          metaphor:
            "Imagine a house where every room is furnished. You walk through it at night and cannot find the one you wanted to sit in.",
          children:
            "The popular picture is dramatic: a sudden purchase, a sudden departure. For most people it is quieter. It may show up as boredom with work that once mattered, envy of people who chose differently, or a habit of counting years. Researchers who study adult life note that a sharp crisis is far from universal. Many people report a gradual questioning instead. The word crisis names the loudest version of a common, slower turn.",
        },
        {
          title: "Why does it tend to arrive in the middle of life?",
          answer:
            "It arrives in the middle because that is when time stops feeling open-ended and starts feeling counted.",
          metaphor:
            "Imagine reading a long book and noticing, for the first time, that fewer pages remain in your right hand than in your left.",
          children:
            "In early adulthood, most choices feel provisional. There will be time to change course. By the middle years, some doors have closed without anyone announcing it. Parents age. Children grow. The body gives small signals. Careers reach a plateau or a peak. None of this is a failure. It simply changes the arithmetic. Questions that could once be postponed begin to ask for an answer.",
        },
        {
          title: "Why can success make the feeling stronger?",
          answer:
            "Success can sharpen it because reaching the goals removes the hope that reaching them would be enough.",
          metaphor:
            "Imagine saving for years to visit a famous lookout. You arrive, take the photograph, and feel the wind. Then you wonder what to do with the afternoon.",
          children:
            "Many people spend two decades pursuing a list that was handed to them early: qualification, position, home, security. While the list is unfinished, dissatisfaction has an obvious cause. When the list is complete, or clearly out of reach, the dissatisfaction has nowhere to hide. This is why people who appear settled can feel the most unsettled. The structure worked. It simply never said what it was for.",
        },
        {
          title: "Why does the usual advice fall short?",
          answer:
            "The usual advice falls short because it treats the question as a mood to be managed and not as a question.",
          metaphor:
            "Imagine a smoke alarm sounding in the hallway. Someone hands you earplugs. The house becomes quiet again.",
          children:
            "People in the middle of this are often told to be grateful, take a holiday, start a hobby, or wait for it to pass. Each can bring relief. None addresses what the restlessness is asking: whether the next decades should simply repeat the last ones. When the feeling is only soothed, it tends to return. When it is only acted out, through abrupt change, the same question often travels along to the new setting.",
        },
        {
          title: "Is a midlife crisis a sign that something is wrong?",
          answer:
            "It is more often a sign that something is being re-examined than a sign that something is broken.",
          metaphor:
            "Imagine a river reaching flat ground. It slows, spreads out, and seems to lose its way. It is finding a new course.",
          children:
            "Surveys in many countries have found that reported life satisfaction tends to dip in midlife and rise again later, though the pattern is debated and varies between people and places. Whatever the statistics, the experience is rarely meaningless. It marks the point where borrowed goals run out and a person's own questions come forward. That can be uncomfortable. It is also how many people begin to live more deliberately.",
        },
        {
          title: "Why does ZenTrust look at the life script, not just the person?",
          answer:
            "ZenTrust looks at the script because a crisis that so many people meet at the same age is not only a personal event.",
          metaphor:
            "Imagine a crowd of travelers who all stall at the same crossing. It makes sense to look at the road as well as the travelers.",
          children:
            "ZenTrust does not frame the midlife crisis as a private weakness. It notices the shared pattern underneath: a life organized around accumulation and status reaches a point where more of the same stops satisfying. Seeing that pattern can ease self-blame. It also widens the question. Instead of asking only what is wrong with me, a person can ask what the first half of life was organized around, and whether that still fits.",
        },
        {
          title: "What does a midlife crisis make easy to forget?",
          answer:
            "It makes it easy to forget that the second half of life can be shaped by different measures than the first.",
          metaphor:
            "Imagine an orchard in late summer. The planting is long done. The work now is tending, and the fruit is only beginning.",
          children:
            "The first half of life often asks what can I build and prove. The middle years open other questions: what is worth tending, what can be passed on, what can be set down. Many people find that contribution, care, and attention to place and people matter more as status matters less. The restlessness does not promise an answer. It does suggest that the old measures were never the only ones available.",
        },
      ]}
      ending={[
        "A finished list is not the same as a finished life.",
        "Restlessness in the middle years is often a question, not a malfunction.",
        "The second half does not have to be measured like the first.",
      ]}
    />
  );
}
