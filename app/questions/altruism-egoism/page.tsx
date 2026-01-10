// app/questions/altruism-egoism/page.tsx
import type { Metadata } from "next";
import { QuestionFrame } from "@/components/questions/QuestionFrame";

export const metadata: Metadata = {
  title: "Why does society demand altruism but reward egoism?",
  description:
    "A question-led look at how moral language can demand care while incentives advance self-interest.",
  other: {
    category: "Schools & Systems",
    subcategory: "moral-incentives",
  },
};

export default function AltruismEgoismPage() {
  return (
    <QuestionFrame
      category="Schools & Systems"
      question="Why does society demand altruism but reward egoism?"
      shortAnswer="Because many systems depend on people acting selflessly, yet they allocate status and security to those who protect their own advantage."
      heroMetaphor="Imagine a team that keeps repeating, “We are a family.” One person stays late to cover gaps so nobody gets blamed. Another person takes the visible wins and leaves on time, and that is what gets noticed."
      sections={[
        {
          title: "Why does this contradiction feel so unsettling?",
          answer:
            "Because what is praised in words often does not match what is rewarded in outcomes.",
          metaphor:
            "Imagine being told at home to speak honestly. When you finally name what hurts, the room goes cold. Later, you are asked why you are so quiet.",
          children:
            "You grow up hearing that good people share, forgive, and think of others first. Then you enter workplaces, families, or communities where those traits are admired in speeches but rarely protected in practice. You watch someone who sacrifices get taken for granted. You watch someone who pushes for themselves get promoted, trusted, or excused. The mismatch creates a strange unease, because the rules you were taught sound noble, yet the scoreboard keeps rewarding something else.",
        },
        {
          title: "What role does moral language play in this pattern?",
          answer:
            "It sets expectations for cooperation without changing the incentives that drive decisions.",
          metaphor:
            "Imagine a company poster that says, “Well-being matters.” The workload still grows every week. The poster stays clean while people look tired.",
          children:
            "Moral language makes systems smoother. It encourages patience, restraint, and forgiveness, especially from those who already carry more. It also reduces open conflict, which helps leaders and institutions maintain calm surfaces. But words do not automatically shift pay, promotions, attention, or protection. Over time, people learn that values are often used as atmosphere, not as structure. The language remains, but it starts functioning like decoration, while incentives keep steering behavior underneath.",
        },
        {
          title: "What kinds of behavior do systems actually select for?",
          answer:
            "They tend to select for behavior that secures resources, attention, and leverage under pressure.",
          metaphor:
            "Imagine a meeting where only the last speaker shapes the decision. The quiet person with the best information is skipped. The confident person reframes the whole plan in two minutes.",
          children:
            "In competitive environments, resources feel scarce and evaluation feels constant. People who promote themselves, take credit, or hold firm boundaries often appear decisive. People who hesitate, double-check impact, or share credit can look slower and less certain. The system does not reliably measure inner intention. It measures visible outputs, signals of confidence, and the ability to claim space. Over time, this creates a quiet selection effect that favors self-protection over consideration.",
        },
        {
          title: "How does altruism become costly over time?",
          answer:
            "It absorbs stress and responsibility while remaining hard to see and easy to assign.",
          metaphor:
            "Imagine the dependable coworker who always says yes. The moment they ask for help, everyone is suddenly busy. Next week, the same person is asked to cover again.",
          children:
            "Altruistic people often become the hidden supports of a system. They fix mistakes, smooth tensions, and prevent small failures from becoming visible problems. Because they do it quietly, their contribution can blend into the background and start looking like a natural resource. Others assume it will always be there. Over months and years, the person carrying extra load starts to feel tired, confused, and sometimes ashamed, even though the pattern was built into expectations around them.",
        },
        {
          title: "Why is egoism so often mistaken for strength?",
          answer:
            "Because it produces quick, visible outcomes and signals confidence in environments that reward certainty.",
          metaphor:
            "Imagine a family dinner where one person talks over everyone. The room reorganizes around their mood. Later, they are described as “the strong one.”",
          children:
            "Self-interested behavior can look clean and direct. It reduces inner debate, avoids second-guessing, and moves fast toward a goal. In systems that prize momentum, that speed reads as competence. Meanwhile, restraint looks like hesitation, and consideration looks like weakness. The costs often appear later, in trust damage, burnout, or resentment, which are harder to quantify. So the early signals of confidence get rewarded, even when the long-term effects quietly spread across others.",
        },
        {
          title: "Why does this pattern repeat across families, schools, and workplaces?",
          answer:
            "Because similar incentive structures shape behavior in many settings, even when the language changes.",
          metaphor:
            "Imagine different classrooms using the same grading rubric. The student who performs for the teacher gets rewarded. The student who asks honest questions is seen as difficult.",
          children:
            "A child learns that being agreeable keeps adults calm. A student learns that compliance is safer than challenge. A worker learns that sacrifice is normal if they want to belong. Each setting feels unique, but the logic is familiar: stability depends on some people yielding more than others. Altruism keeps the surface smooth. Egoism captures attention and resources. Because these lessons start early and repeat often, the pattern can feel like human nature, even when it is partly design.",
        },
        {
          title: "Why does it appear that altruism fails?",
          answer:
            "Because systems can rely on care quietly while directing rewards toward self-interest.",
          metaphor:
            "Imagine a house where the cleanest room is the one nobody notices. The messiest room gets all the attention. The cleaning keeps happening anyway.",
          children:
            "When care does not bring recognition or safety, it can look pointless. But altruism may be doing the invisible work that prevents collapse: calming conflicts, covering gaps, maintaining trust, keeping things humane. The system benefits from that steadiness, yet it may not reward it, because rewarding it would change the incentive structure. So care remains a quiet foundation, while status flows toward those who claim wins loudly. What looks like failure may be unregistered contribution.",
        },
        {
          title: "What becomes possible once this contradiction is seen clearly?",
          answer:
            "Clarity becomes possible without needing to idealize altruism or demonize egoism.",
          metaphor:
            "Imagine reading the fine print on a contract. Nothing changes in the room, but your confusion drops. You can finally name what the agreement actually rewards.",
          children:
            "Seeing the pattern does not require anger or a new identity. It simply removes a layer of confusion. You can notice when moral language is being used to request sacrifice, and notice when incentives are steering toward self-advantage. You stop treating outcomes as proof of personal worth. You also stop expecting every environment to recognize care. The situation becomes legible, and that legibility creates space inside you, even before anything else changes.",
        },
      ]}
      ending={[
        "Some systems run on care.",
        "Some reward self-interest.",
        "Confusion fades when the difference is seen.",
      ]}
    />
  );
}
