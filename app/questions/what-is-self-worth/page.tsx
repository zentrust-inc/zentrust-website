// app/questions/what-is-self-worth/page.tsx

import type { Metadata } from "next";
import { QuestionFrame } from "@/components/questions/QuestionFrame";

export const metadata: Metadata = {
  title: "What is self-worth, and why does it matter so much?",
  description:
    "Self-worth is the sense that you have value as a person, apart from success or approval. A calm look at what it is, where it comes from and how it grows.",
  other: {
    category: "Meaning & Mind",
    subcategory: "self-worth",
  },
};

export default function QuestionPage() {
  return (
    <QuestionFrame
      category={"Meaning & Mind"}
      question={"What is self-worth, and why does it matter so much?"}
      shortAnswer={"Self-worth is the sense that you have value as a person, not because of what you achieve, what you own or how others rate you. It overlaps with self-esteem and confidence but is often described as running deeper, and a steady sense of it can make setbacks easier to bear without feeling worthless."}
      heroMetaphor={"Imagine standing on a floor you cannot see. You only notice it when it starts to feel shaky. Self-worth is that floor."}
      sections={[
        {
          title: "What is self-worth, in simple terms?",
          answer:
            "Self-worth is the basic sense that you matter and deserve respect as a person, regardless of how well you perform or how others see you.",
          metaphor:
            "Imagine a house with a solid foundation. Storms still come and paint still peels. The house does not doubt that it is standing.",
          children:
            "Self-worth is less a thought than a background feeling. It shapes how you treat yourself after a mistake, how much you let others ask of you, and whether you feel you deserve rest or kindness. People with a steady sense of worth still have doubts and bad days. The difference is that their value does not feel up for negotiation each time something goes wrong. It is the floor beneath the weather, not the weather itself.",
        },
        {
          title: "How is self-worth different from self-esteem and confidence?",
          answer:
            "As the terms are often used, self-worth is about your value as a person, while self-esteem is how you judge yourself and confidence is trust in what you can do.",
          metaphor:
            "Imagine a violin, a concert and a review in the morning paper. The violin can play badly one night. It is still a violin.",
          children:
            "The words overlap and are often used loosely. Confidence tends to be specific: you can feel sure of yourself at work and unsure at a party. Self-esteem usually describes an overall evaluation, which can rise and fall with circumstances. Self-worth may run deeper. It is the sense that you are acceptable even when you fail at something. A person can be highly confident in skills and still feel, underneath, that they are only as good as their last result.",
        },
        {
          title: "Where does a sense of self-worth come from?",
          answer:
            "It often begins in early experiences of being cared for, and it keeps being shaped by relationships, culture and how we interpret what happens to us.",
          metaphor:
            "Imagine a young tree staked in a garden. The early support shapes how it grows. Later winds keep bending it, and it keeps adjusting.",
          children:
            "Children who feel accepted without having to earn it often carry that sense into adulthood, though not always. Children who mainly receive praise for results, or who face criticism, neglect or bullying, may learn that worth must be proven. Culture adds its own messages about looks, money, status and productivity. None of this is destiny. Later friendships, partners, mentors and personal reflection can all reshape the story a person tells about whether they matter.",
        },
        {
          title: "What happens when worth depends on success or approval?",
          answer:
            "When worth feels conditional, every setback or criticism can feel like a verdict on who you are, not just on what you did.",
          metaphor:
            "Imagine a bank account that resets to zero each morning. You must earn your balance again every day. Rest starts to feel like falling behind.",
          children:
            "Psychologists sometimes call this contingent self-worth: value that rises and falls with grades, income, appearance or other people's opinions. It can drive hard work, but it is often linked to anxiety, defensiveness and fear of failure. Praise can bring brief relief, but the need often returns. Social media can intensify this by turning approval into visible numbers. Noticing which conditions you have attached to your worth is often a first step toward loosening them.",
        },
        {
          title: "What can low self-worth feel like?",
          answer:
            "Low self-worth can show up as harsh self-criticism, people-pleasing and a quiet sense of not being enough.",
          metaphor:
            "Imagine carrying a backpack of stones you were handed long ago. You no longer notice the weight. You only notice that everything feels uphill.",
          children:
            "It may look like apologizing constantly, struggling to accept compliments, or staying in situations that hurt because leaving feels undeserved. Some people overwork to feel acceptable. Others avoid trying at all, so failure cannot confirm their fears. Low self-worth can travel with anxiety or depression, and it is not something to simply push through alone. If these feelings are heavy or persistent, talking to a doctor, counselor or someone you trust can help.",
        },
        {
          title: "How does self-worth shape relationships and boundaries?",
          answer:
            "People who feel they matter often find it easier to say no, ask for what they need and walk away from mistreatment.",
          metaphor:
            "Imagine a garden with a simple fence. The fence is not a wall against the world. It shows where care is needed.",
          children:
            "When worth feels fragile, other people's moods can seem like a measure of one's value. That can lead to accepting too little, giving too much, or clinging to approval. A steadier sense of worth does not make someone cold or selfish. It can make them more generous, because kindness is offered freely rather than traded for acceptance. Boundaries become a way of protecting relationships, not a threat to them. Saying no can be an act of respect for both people.",
        },
        {
          title: "Can self-worth be rebuilt later in life?",
          answer:
            "Many people do strengthen their sense of worth over time, usually through steady practice rather than a single breakthrough.",
          metaphor:
            "Imagine a path through a field that has grown over. Each walk presses the grass down a little more. Eventually the way is easy to see.",
          children:
            "Common approaches include noticing the inner critic and asking whether you would speak that way to a friend, practicing self-compassion, and acting in line with your own values rather than outside scores. Spending time with people who treat you as worthwhile matters too. Therapy can help, especially when old wounds run deep. Progress is rarely a straight line. Old feelings often return under stress, and that is part of the process, not proof of failure.",
        },
        {
          title: "What does the search for self-worth make easy to forget?",
          answer:
            "It makes it easy to forget that worth may not need to be built from scratch, only uncovered beneath years of conditions and comparisons.",
          metaphor:
            "Imagine a stone in a riverbed covered by silt. The river did not create its weight. It only hid it from view.",
          children:
            "Much advice treats self-worth as a project to complete, one more thing to achieve. Yet many traditions, religious and secular, suggest that human dignity is not earned at all. You might still want to grow, contribute and do good work. Those things can come from care rather than from a need to prove you deserve to exist. The question can shift from 'Am I enough?' to 'What do I want to give?'",
        },
      ]}
      ending={[
        "Your value is not a score you keep.",
        "Worth can be uncovered as much as built.",
        "A steady floor makes it easier to grow.",
      ]}
    />
  );
}
