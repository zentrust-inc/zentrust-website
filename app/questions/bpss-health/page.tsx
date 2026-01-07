import type { Metadata } from "next";
import { QuestionFrame } from "@/components/questions/QuestionFrame";

export const metadata: Metadata = {
  title: "Why does treating the body succeed, yet suffering remain?",
  description:
    "A question-led exploration of why symptoms can improve while deeper suffering continues.",
  other: {
    category: "Health & Suffering",
  },
};

export default function BPSSHealthPage() {
  return (
    <QuestionFrame
      category="Health & Suffering"
      question="Why does treating the body succeed, yet suffering remain?"
      shortAnswer="Because relieving symptoms does not automatically change the conditions that keep the whole system under strain."
      heroMetaphor="Imagine living in a house with a slow leak in the roof. You mop the floor and place buckets until the room looks fine again. Each time it rains, you still listen for the drip."
      sections={[
        {
          title: "Why can improvement happen without real relief?",
          answer:
            "Because visible problems can ease while the deeper effort of holding life together continues.",
          children:
            "You notice that pain is quieter now. The numbers on reports look better. Daily tasks feel possible again. From the outside, things appear under control. Inside, you still move carefully through the day. You plan around limits that never fully disappeared. You rest, but never deeply. Even when nothing is wrong, something feels tense. Improvement arrived, but it did not bring the sense of ease you expected.",
          metaphor:
            "Imagine carrying a heavy bag a little lower than before. Your arm aches less than it did yesterday. You still haven’t put it down.",
        },
        {
          title: "What kind of suffering remains after treatment works?",
          answer:
            "A quiet, ongoing strain that doesn’t belong to one symptom or place.",
          children:
            "It doesn’t feel like sharp pain or crisis. It feels like waking up already tired. Like bracing before the day even begins. You function, you respond, you show up. But there is a thin layer of tension underneath everything. Nothing feels urgent enough to explain it. When asked how you are, you pause. The answer is complicated, even though nothing is obviously wrong.",
          metaphor:
            "Imagine a low humming sound in the background. You stop noticing it while you’re busy. The moment things go quiet, it’s still there.",
        },
        {
          title: "Why doesn’t medical success bring rest?",
          answer:
            "Because treatment changes the body faster than it changes the life around it.",
          children:
            "Appointments end, prescriptions stabilize, routines resume. The body responds as expected. Meanwhile, the pace of life stays the same. The responsibilities remain. The pressures that shaped the problem never really paused. You move forward because that’s what you’re supposed to do. Rest is something you plan for later. Later never quite arrives, even though the treatment did what it promised.",
          metaphor:
            "Imagine fixing a window on a windy day. The glass is clean and new. The air still moves through the room.",
        },
        {
          title: "What stays unchanged beneath the surface?",
          answer:
            "The patterns of demand, expectation, and uncertainty that shape daily life.",
          children:
            "Days fill quickly again. Work, family, finances, and responsibilities stack up. You adapt without noticing how much effort it takes. You stop asking whether the pace fits you. The body adjusts, but the adjustment costs energy. Nothing dramatic happens. It is the accumulation of small demands that never quite ease, even when the body is medically stable.",
          metaphor:
            "Imagine walking on a street that slowly slopes upward. You adjust your stride without thinking. Your legs never fully relax.",
        },
        {
          title: "Why does looking at the whole situation change what we notice?",
          answer:
            "Because strain often continues in several areas at once, not just one.",
          children:
            "One part improves, but others keep pulling. Emotions stay tight. Relationships feel demanding. Time feels scarce. You cope by balancing everything carefully. It works, but it requires constant attention. When you stop focusing on one problem and notice the entire picture, you see how much effort goes into staying okay. The strain was not in one place. It was spread out.",
          metaphor:
            "Imagine tuning one string on a guitar. That note sounds clearer than before. The chord still feels off.",
        },
        {
          title: "Why does the body stay alert?",
          answer:
            "Because unresolved pressure elsewhere keeps signaling that it isn’t time to relax.",
          children:
            "Even during calm moments, your body feels ready. You notice small noises. You wake easily. You feel tired but wired. It is not fear exactly, just readiness. The body does not wait for reassurance from test results. It reacts to daily signals. When those signals keep coming, alertness becomes the default, even after treatment has technically succeeded.",
          metaphor:
            "Imagine a door that never quite clicks shut. You lean back slightly, waiting for it to move. Your shoulders stay lifted.",
        },
        {
          title: "Why does ZenTrust focus on this kind of tension?",
          answer:
            "Because some strain only becomes visible when the focus moves beyond symptoms.",
          children:
            "ZenTrust looks at how effort persists across different parts of life at once. It does not assume something is wrong with you. It notices patterns that continue even when treatment works. The aim is not to fix quickly. It is to widen the view enough that ongoing strain can be seen clearly, without rushing to explain or resolve it.",
          metaphor:
            "Imagine stepping far enough back to see the entire house. The leak finally makes sense from there. Up close, it never did.",
        },
        {
          title: "What does this return to in lived experience?",
          answer:
            "That relief often begins when attention shifts from fixing parts to noticing the whole.",
          children:
            "If treatment helped but suffering stayed, it does not mean failure. It means you adapted. You learned how to function under pressure. Sometimes the next shift does not come from doing more. It comes from noticing how much effort has been required all along. That noticing can feel quiet, ordinary, and surprisingly honest.",
          metaphor:
            "Imagine realizing you have been walking uphill all day. You stop without planning to. Only then do you notice the slope.",
        },
      ]}
      ending={[
        "Improvement is not the same as rest.",
        "Relief does not always mean resolution.",
        "Some healing begins when the whole system enters view.",
      ]}
    />
  );
}
