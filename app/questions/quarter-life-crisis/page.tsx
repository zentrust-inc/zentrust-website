// app/questions/quarter-life-crisis/page.tsx

import type { Metadata } from "next";
import { QuestionFrame } from "@/components/questions/QuestionFrame";

export const metadata: Metadata = {
  title: "Why does a quarter-life crisis feel like falling behind?",
  description:
    "A question-led look at the quarter-life crisis: why people in their twenties and early thirties feel lost, stuck or behind in life.",
  other: {
    category: "Meaning & Seeking",
    subcategory: "quarter-life-crisis",
  },
};

export default function QuestionPage() {
  return (
    <QuestionFrame
      category="Meaning & Seeking"
      question="Why does a quarter-life crisis feel like falling behind?"
      shortAnswer="A quarter-life crisis often feels like falling behind because young adults inherit a fixed script of milestones just as the conditions for reaching them have become less certain, so ordinary uncertainty gets read as personal failure."
      heroMetaphor="Imagine being handed a map at the start of a long walk. Halfway along, you notice the roads on the page no longer match the land. Everyone around you is still holding the same map."
      sections={[
        {
          title: "Why does the quarter-life crisis feel so heavy?",
          answer:
            "It feels heavy because many important decisions arrive at once, while the path ahead feels less clear than expected.",
          metaphor:
            "Imagine standing at a crossroads with many signposts. Each one points somewhere promising. None of them tells you where it ends.",
          children:
            "The quarter-life crisis describes a period, often in the twenties or early thirties, when people feel lost, anxious, or behind. Questions about work, relationships, money, and identity crowd together. Choices seem permanent. The structure of school has ended, and nothing equally clear replaces it. People can feel unsure who they are while also feeling pressure to have already decided.",
        },
        {
          title: "Why does the usual reassurance not help much?",
          answer:
            "The usual reassurance does not help because it tells people the feeling will pass without explaining why it arrived.",
          metaphor:
            "Imagine being told a storm is temporary while you stand in it without a coat. The forecast may be right. You are still getting wet.",
          children:
            "People in this stage often hear that everyone goes through it, or that they are still young. These words can be kind, yet they leave the confusion unexplained. The feeling is not just a phase of personal growth. It reflects real changes in how adult life is structured. Without seeing those changes, people tend to conclude that the problem must be them.",
        },
        {
          title: "What actually drives the sense of falling behind?",
          answer:
            "It is driven by an old timeline of milestones meeting a world where those milestones are harder and slower to reach.",
          metaphor:
            "Imagine a clock on the wall that runs faster than the sun. By the clock, you are late. By daylight, it is still morning.",
          children:
            "Many people carry an inherited idea of when adult life should come together: stable job, home, partner, family. That idea took shape in different economic conditions. Today, housing, education, and secure work can take longer to reach. Careers change more often. The old timeline still sets expectations. Measured against it, ordinary progress can feel like failure, and delay can feel like a verdict.",
        },
        {
          title: "How does comparison deepen the crisis?",
          answer:
            "Comparison deepens it because people see their peers' highlights while living their own uncertainty in full.",
          metaphor:
            "Imagine looking through windows at night along a quiet street. Every room you see is lit and tidy. Your own house is the only one you see from inside.",
          children:
            "Social media shows engagements, promotions, travel, and new homes. It rarely shows doubt, debt, or quiet confusion. Each person compares their inside to everyone else's outside. Even people who are doing well can feel behind. The result is a shared feeling of lagging that almost everyone experiences privately, while assuming that others have found the path they are still looking for.",
        },
        {
          title: "Why do choices in this period feel so final?",
          answer:
            "Choices feel final because people are told this is when their future is decided, even though lives keep changing later.",
          metaphor:
            "Imagine being told you can only write once on a page. Each word becomes heavy. You hesitate so long that the ink dries on the pen.",
          children:
            "Many young adults believe that one wrong career move or relationship will close every door. This belief raises the stakes of each decision. People may delay choosing, or choose and then doubt constantly. Yet most adult lives include several turns, restarts, and changes of direction. The sense of permanence comes less from reality than from the pressure to have it all figured out early.",
        },
        {
          title: "Why does the crisis often bring questions about meaning?",
          answer:
            "It brings questions about meaning because the first goals of adult life often turn out to be less fulfilling than promised.",
          metaphor:
            "Imagine reaching the top of a hill you were told to climb. The view is fine. You wonder why you expected it to answer something.",
          children:
            "Some people in a quarter-life crisis have followed the expected path and find it empty. Others have not found it and feel excluded. Both groups end up asking similar questions: what is this for, and what do I actually want? These questions can feel destabilizing. They can also be the beginning of a life built more on chosen values than on inherited scripts.",
        },
        {
          title: "Why does ZenTrust look at the timeline, not just the individual?",
          answer:
            "ZenTrust looks at the timeline because the sense of failure often comes from an outdated measure, not from the person.",
          metaphor:
            "Imagine measuring a growing tree against a ruler made for a different tree. It always seems short. The tree is simply growing at its own pace.",
          children:
            "ZenTrust does not treat the quarter-life crisis as a personal defect. It observes how inherited expectations, economic change, and constant comparison combine. Seeing that structure can ease self-blame. It also opens space for different questions: which milestones actually matter to me, what kind of work feels worth doing, and what would a good life look like if no one were keeping score.",
        },
        {
          title: "What does the quarter-life crisis make easy to forget?",
          answer:
            "It makes it easy to forget that a life is long, and that direction can be found while walking.",
          metaphor:
            "Imagine a river that turns many times before reaching the sea. No single bend decides where it ends. It keeps moving, and the land shapes it along the way.",
          children:
            "In the middle of uncertainty, it can seem that everything must be settled now. Yet many people find their most meaningful work, relationships, and places later than expected. Some arrive through detours that once felt like mistakes. Remembering this does not remove the discomfort. It reminds you that being unsure at twenty-five is not the same as being lost for good.",
        },
      ]}
      ending={[
        "Being unsure is not the same as being behind.",
        "Old timelines can make ordinary lives feel late.",
        "Direction often appears while you are already walking.",
      ]}
    />
  );
}
