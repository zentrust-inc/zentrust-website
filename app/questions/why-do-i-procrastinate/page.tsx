// app/questions/why-do-i-procrastinate/page.tsx

import type { Metadata } from "next";
import { QuestionFrame } from "@/components/questions/QuestionFrame";

export const metadata: Metadata = {
  title: "Why do I procrastinate on the things that matter most to me?",
  description:
    "A question-led look at procrastination: why we delay the tasks we care about most, and why it is rarely about laziness.",
  other: {
    category: "Mind & Experience",
    subcategory: "why-do-i-procrastinate",
  },
};

export default function QuestionPage() {
  return (
    <QuestionFrame
      category="Mind & Experience"
      question="Why do I procrastinate on the things that matter most to me?"
      shortAnswer="People often procrastinate on what matters most because those tasks carry the most weight, uncertainty and risk of judgment, so delay offers short relief from uncomfortable feelings, even though it costs more later."
      heroMetaphor="Imagine standing at the edge of a cold lake you want to swim in. You dip a toe, step back and look at the sky. The water is not getting any warmer."
      sections={[
        {
          title: "Why does procrastination feel so hard to explain?",
          answer:
            "It feels hard to explain because people delay things they genuinely want to do, not only things they dislike.",
          metaphor:
            "Imagine holding a letter from someone you love. You set it aside to open later. Days pass, and it stays sealed on the table.",
          children:
            "Procrastination often appears around tasks that matter: creative projects, important applications, conversations, or goals tied to identity. People may complete small chores easily while avoiding the one thing they care about most. This can feel confusing and shameful. If it matters so much, why not just do it? The answer lies less in time management and more in how those tasks feel.",
        },
        {
          title: "Why doesn't better time management usually fix it?",
          answer:
            "Time management rarely fixes it because the problem is often emotional discomfort, not a lack of schedule.",
          metaphor:
            "Imagine buying a better calendar to help you visit a dentist you fear. The appointment is clearly written down. You still find reasons to reschedule.",
          children:
            "Planners, apps, and productivity systems assume that people delay because they lack organization. Many procrastinators are highly organized in other areas. They know what to do and when. The delay comes from what the task brings up: fear of failure, uncertainty about where to start, or worry about being judged. Tools can help, but they rarely address the feeling that makes starting hard.",
        },
        {
          title: "What actually drives procrastination?",
          answer:
            "Procrastination is often a way to escape uncomfortable feelings in the short term.",
          metaphor:
            "Imagine touching a hot stove and pulling your hand away. The reflex is fast and automatic. It protects you now, even if dinner goes uncooked.",
          children:
            "When a task triggers anxiety, boredom, confusion, or self-doubt, avoiding it brings immediate relief. Scrolling, cleaning, or small tasks feel easier and safer. The mind favors that relief over a distant benefit. Later, guilt and pressure rise, making the task feel even heavier. The cycle repeats. Procrastination is less about laziness and more about trying to manage how something feels.",
        },
        {
          title: "Why do important tasks attract the most delay?",
          answer:
            "Important tasks attract delay because they carry the most meaning, and therefore the most potential for disappointment.",
          metaphor:
            "Imagine carrying a fragile vase across a room. An ordinary cup you would carry quickly. The vase makes every step feel risky.",
          children:
            "When a task is connected to who we want to be, failure feels like a statement about ourselves. Writing the book, applying for the role, or starting the project becomes a test. Delaying keeps the outcome undecided. As long as it is unfinished, it cannot fail. This protective logic is understandable, yet it can keep meaningful work waiting for years.",
        },
        {
          title: "How does procrastination shape how we see ourselves?",
          answer:
            "Repeated delay can lead people to believe they are lazy or undisciplined, which deepens avoidance.",
          metaphor:
            "Imagine being told every day that you are clumsy. You start to move carefully and hesitantly. Then you trip more often.",
          children:
            "After many cycles of delay and guilt, people often label themselves as procrastinators. This identity can become self-fulfilling. Each new task carries the expectation of failure to start. Shame adds more discomfort, which the mind tries to escape. The very feeling people hope will motivate them often becomes another reason to avoid the task altogether.",
        },
        {
          title: "Why is procrastination so common today?",
          answer:
            "It is common because modern work is often unclear and judged, while distraction is always within reach.",
          metaphor:
            "Imagine trying to read a book in a room full of open doors. Each doorway leads somewhere easier. You find yourself standing in the hallway.",
          children:
            "Much modern work has no clear finish line and is evaluated by others. Tasks are abstract, open-ended, and visible. At the same time, phones and screens offer instant relief from any discomfort. The gap between a hard task and an easy distraction is only a second wide. Under these conditions, delay becomes a common response rather than a rare personal flaw.",
        },
        {
          title: "Why does ZenTrust look at feelings and conditions, not willpower?",
          answer:
            "ZenTrust looks at feelings and conditions because they explain delay better than character judgments do.",
          metaphor:
            "Imagine a seed that will not sprout in dry soil. Calling it lazy changes nothing. Water does.",
          children:
            "ZenTrust does not treat procrastination as moral weakness. It observes how uncertainty, fear of judgment, and constant distraction shape behavior. Seeing this can reduce shame, which itself can make starting easier. It also points to gentler questions: what feels uncomfortable about this task, how could the first step be made smaller, and who could keep me company while I begin.",
        },
        {
          title: "What does procrastination make easy to forget?",
          answer:
            "It makes it easy to forget that starting small often feels very different from imagining the whole task.",
          metaphor:
            "Imagine standing at the bottom of a long staircase. From there, it looks endless. Once you begin, you only ever climb one step.",
          children:
            "Before starting, the mind tends to picture the entire task, with every difficulty at once. This makes it feel overwhelming. Once begun, attention narrows to the next small action, and the task often becomes more manageable. Remembering this does not remove fear. It suggests that beginning, even briefly and imperfectly, can change how the whole task feels.",
        },
      ]}
      ending={[
        "Delay is often a way to avoid a feeling, not a task.",
        "The tasks we care about most can feel the heaviest.",
        "A small beginning can lighten what imagination made large.",
      ]}
    />
  );
}
