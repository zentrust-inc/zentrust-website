// app/questions/people-pleasing/page.tsx

import type { Metadata } from "next";
import { QuestionFrame } from "@/components/questions/QuestionFrame";

export const metadata: Metadata = {
  title: "Why do I keep people-pleasing?",
  description:
    "A question-led look at people-pleasing: why saying no feels so hard, where the habit comes from, and what it costs over time.",
  other: {
    category: "Mind & Experience",
    subcategory: "people-pleasing",
  },
};

export default function QuestionPage() {
  return (
    <QuestionFrame
      category="Mind & Experience"
      question="Why do I keep people-pleasing?"
      shortAnswer="People-pleasing persists because, at some point, keeping others comfortable became the most reliable way to stay safe and connected. The habit is not weakness. It is an old strategy that keeps running after the conditions that required it have changed."
      heroMetaphor="Imagine a host who never sits down. Every glass is filled and every guest is asked if they need anything. At the end of the evening, the host's own plate is still untouched."
      sections={[
        {
          title: "What is people-pleasing, exactly?",
          answer:
            "People-pleasing is the habit of putting other people's wishes and comfort ahead of your own, even when no one asked you to.",
          metaphor:
            "Imagine a radio that tunes itself to whatever station the nearest person likes. It plays clearly. No one knows what it would choose.",
          children:
            "A people pleaser says yes when they mean no, apologizes quickly, avoids disagreement, and feels responsible for how others feel. It is different from kindness. Kindness is a choice made freely. People-pleasing is driven by unease about what will happen if the other person is disappointed. The behavior can look generous. The feeling underneath is closer to vigilance.",
        },
        {
          title: "Why is it so hard to say no?",
          answer:
            "Saying no is hard because, for a people pleaser, another person's displeasure registers as a threat and not as a normal event.",
          metaphor:
            "Imagine a door that sets off an alarm whenever it closes. You learn to leave it open, whatever the weather.",
          children:
            "For many people, a refused request is a small moment that passes. For someone who learned to keep the peace, it can bring a rush of guilt or dread out of proportion to the situation. The body reacts before the mind has weighed anything. Agreeing makes the discomfort stop at once, which teaches the habit all over again. The cost arrives later, in time, energy, and a quiet resentment that is hard to explain.",
        },
        {
          title: "Where does people-pleasing come from?",
          answer:
            "It usually comes from settings where approval was conditional and conflict felt unsafe.",
          metaphor:
            "Imagine a child who learns to read the weather in a room before speaking. The skill becomes automatic. It never switches off.",
          children:
            "Many people pleasers grew up attentive to the moods of others: a parent under strain, a household where harmony was fragile, a school or community where fitting in mattered a great deal. Being agreeable, helpful, and easy was rewarded. Having needs was not. Some writers describe a related pattern as fawning, a way of staying safe by appeasing. Whatever the name, it began as a sensible response to the surroundings.",
        },
        {
          title: "Why do people pleasers end up exhausted or resentful?",
          answer:
            "They end up exhausted because they are doing the work of two people: living their own life and managing everyone else's reactions.",
          metaphor:
            "Imagine carrying your own bag and quietly picking up every bag set down near you. No one asked. No one notices when your arms give out.",
          children:
            "Constantly scanning for what others want is tiring. So is suppressing preferences, rehearsing conversations, and smoothing over tension. Because the giving is not fully chosen, it rarely feels returned. Resentment builds, then guilt about the resentment. Others may not even know anything is wrong, since the people pleaser has made sure they never had to. The relationship looks peaceful and feels lonely from the inside.",
        },
        {
          title: "Why does the usual advice about boundaries fall short?",
          answer:
            "It falls short because it offers a script for saying no without addressing why no feels dangerous.",
          metaphor:
            "Imagine being handed the words to a song in a language you do not speak. You can pronounce them. They do not yet mean anything in your mouth.",
          children:
            "People are told to set boundaries, to put themselves first, to just say no. The words are easy to learn. Using them means tolerating another person's disappointment, which is exactly what the habit was built to prevent. Without understanding that, people try, feel terrible, and conclude they are bad at boundaries. The difficulty was never vocabulary. It was that the old alarm still rings when someone is displeased.",
        },
        {
          title: "Why does ZenTrust look at the setting, not just the person?",
          answer:
            "ZenTrust looks at the setting because many workplaces, families, and cultures quietly depend on people who cannot refuse.",
          metaphor:
            "Imagine a bridge that holds because one beam carries more than its share. The bridge is praised. The beam is not examined.",
          children:
            "ZenTrust does not frame people-pleasing as a defect of character. It notices how often the habit is rewarded: the colleague who always covers, the relative who always hosts, the friend who always listens. Systems come to rely on that labor and call it being nice. Seeing this can replace self-blame with a clearer picture. It also raises a fair question about who benefits when one person never says no.",
        },
        {
          title: "What does people-pleasing make easy to forget?",
          answer:
            "It makes it easy to forget that a relationship able to survive only agreement has not really been tested.",
          metaphor:
            "Imagine two trees growing side by side. Each has its own roots. Their branches still meet.",
          children:
            "People-pleasing assumes that connection depends on never being inconvenient. Yet closeness between people often deepens after an honest no, a stated preference, or a disagreement that both survive. Being known includes being known to have limits. The habit protects against rejection by hiding the person who might be rejected. Remembering this does not make refusing easy. It suggests that being agreeable and being close were never the same thing.",
        },
      ]}
      ending={[
        "Keeping everyone comfortable is not the same as being close to them.",
        "The habit began as protection, and it can be understood before it is judged.",
        "A no that is survived can make a yes mean more.",
      ]}
    />
  );
}
