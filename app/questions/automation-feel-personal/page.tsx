// app/questions/automation-feel-personal/page.tsx

import type { Metadata } from "next";
import { QuestionFrame } from "@/components/questions/QuestionFrame";

export const metadata: Metadata = {
  title: "Why does automation feel personal even when it is systemic?",
  description:
    "A question-led look at how automation strips away personal identity while the mind clings to self-judgment as a form of control.",
  other: {
    category: "Schools & Systems",
    subcategory: "automation-personalization",
  },
};

export default function QuestionPage() {
  return (
    <QuestionFrame
      category="Schools & Systems"
      question="Why does automation feel personal even when it is systemic?"
      shortAnswer="Because automation replaces human presence with an invisible logic, leaving the ego to interpret structural absence as a personal verdict on its own worth."
      heroMetaphor="A man stands on a stage performing a monologue to an audience of empty chairs. He tries to speak louder and move faster to earn the applause he remembers. He does not notice that the theater lights were turned off by a timer in the basement."
      sections={[
        {
          title: "Why does automation initially arrive as a shock to the self?",
          answer: "Automation fragments your sense of relevance by removing the mirror of social feedback and replacing it with the silence of a script.",
          metaphor: "A traveler reaches into his pocket for a key that has opened a door for many years. His fingers find only a smooth, empty lining. He stands at the entrance and begins to check his own hands for a mistake.",
          children: "You have spent years believing that your effort and presence were the glue holding your world together. When automation removes a task or a role, it does not argue with you or explain its arrival. It simply occupies the space where you once stood, offering no feedback or recognition. Because there is no one to fight, your mind begins to fight itself. You turn the mechanical silence into a loud story about your own obsolescence.",
        },
        {
          title: "Why do logical explanations for automation fail to quiet the body?",
          answer: "Because statistics about automation cannot satisfy the animal need for belonging that is severed when a role disappears.",
          metaphor: "A storm blows through a forest and snaps the branch of a single oak tree. The tree does not care that the wind is blowing everywhere. It only registers the weight of the wood resting on the ground.",
          children: "You can read the industry reports and understand the global shifts toward efficiency, but your nervous system is not interested in data. It notices that your morning routine has been interrupted and your status has been shifted. The mind attempts to bridge this gap by personalizing the loss. It is easier to feel like a failure than to admit you are being moved by a force that does not even see you.",
        },
        {
          title: "What is the mind avoiding by personalizing automation?",
          answer: "Personalizing automation masks the terrifying reality that the system is indifferent to your existence and operates without a witness.",
          metaphor: "A child builds a tall tower of blocks in the middle of a busy sidewalk. A gust of wind knocks it over while no one is looking. The child looks around for someone to blame for the ruin.",
          children: "If the loss is personal, it means you still matter; it means you could have done something differently to change the outcome. Personalization is the ego’s way of maintaining a sense of control in a world that has become automated. To accept that automation is systemic is to accept that you are being moved by an invisible tide. The mind prefers the pain of self-judgment over the emptiness of being irrelevant to the machine.",
        },
        {
          title: "How does the ego perform inside the cage of automation?",
          answer: "The ego attempts to outrun automation by perfecting its performance of a script it did not write.",
          metaphor: "A dancer continues to perform her routine long after the music has stopped playing. She watches the clock on the wall and tries to match her heartbeat to the ticking. She believes she is still being judged by the rhythm.",
          children: "You begin to monitor your own productivity and scan your behavior for flaws that might explain the systemic shift. You try to become more efficient, more adaptable, and more compliant, hoping to prove that you are still necessary. This performance is exhausting because the audience is a set of lines of code. You are straining to impress a mirror that has been painted over. You are perfecting a role in a play that was canceled years ago.",
        },
        {
          title: "Why does automation feel like rejection instead of neutrality?",
          answer: "Because automation removes the social warmth of being needed and replaces it with the cold efficiency of being managed.",
          metaphor: "A gardener finds that the fence around his garden has been moved three feet inward overnight. No one left a note and no one is standing nearby with a shovel. He feels smaller than he did the day before.",
          children: "Humans are evolved to read silence as a social signal of exclusion. When automation takes over, the silence is not a judgment, but a technical requirement of the system. However, your mind cannot distinguish between a machine's silence and a human's snub. You experience the absence of being consulted as a deliberate act of being cast out. The systemic shift is a ghost that you have mistaken for an enemy.",
        },
        {
          title: "How does the speed of automation deepen the personal sense of loss?",
          answer: "Automation scales at a pace that prevents the formation of shared meaning, leaving individuals to rot in solitary confusion.",
          metaphor: "A river changes its course in the middle of the night while the village sleeps. In the morning, the fishermen cast their nets into the dry sand. They look at each other and wonder if they have forgotten how to see.",
          children: "The change arrives in an inbox or a subtle software update, isolated from any collective orientation. Because everyone encounters automation at a different moment, there is no shared space to grieve the loss of the old ways. You are left alone with your screen, wondering why you are the only one struggling. This isolation reinforces the lie that the problem is you. You are a fragment of a crowd that is being moved in total silence.",
        },
        {
          title: "What does ZenTrust notice about automation here?",
          answer: "ZenTrust notices how automation turns the human struggle for meaning into a solitary labor of self-optimization.",
          metaphor: "A mirror hangs in a room where a man is trying to fix a broken watch. The mirror does not show him the gears or tell him how to turn the screw. It only reflects the look of concentration on his face.",
          children: "This Question does not offer a plan to stop the machine or a way to protect your ego. ZenTrust observes the moment when you stop looking at the system and start looking for your own faults. It pays attention to the script you have been handed—the one that says your worth is tied to your output. ZenTrust holds the space for you to see the cage. It does not open the door; it only asks if you noticed the bars.",
        },
        {
          title: "What remains when automation is seen clearly?",
          answer: "A quiet recognition that the pain of automation is real, but the story of personal failure is an unnecessary weight.",
          metaphor: "A person walking in the dark realizes that the shadow chasing them is actually their own coat. They do not stop walking, but they stop running. The coat remains, but the fear of the shadow vanishes.",
          children: "The disruption of your life does not disappear just because you see the system. The uncertainty and the loss of the role remain as they are. What can shift is the exhaustion of trying to fix a structural problem through personal penance. You can feel the coldness of the automated world without believing that you are the reason it is freezing. The hallway is empty. You are finally free to notice the silence.",
        },
      ]}
      ending={[
        "The machine does not see you.",
        "Your life is a script you did not write.",
        "Notice the silence in the room.",
      ]}
    />
  );
}
