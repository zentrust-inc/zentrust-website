// app/questions/systemic-gaslighting-power/page.tsx

import type { Metadata } from "next";
import { QuestionFrame } from "@/components/questions/QuestionFrame";

export const metadata: Metadata = {
  title: "Why does modern power feel like gaslighting?",
  description:
    "A question-led look at how modern systems can blur shared reality through overload, denial, reframing, and blame shifting.",
  other: {
    category: "Schools & Systems",
    subcategory: "systemic-gaslighting",
  },
};

export default function QuestionPage() {
  return (
    <QuestionFrame
      category="Schools & Systems"
      question="Why does modern power feel like gaslighting?"
      shortAnswer="Because many systems keep control by flooding attention with competing stories, denying lived signals, and shifting responsibility onto individuals until shared reality feels unstable."
      heroMetaphor="Imagine walking through a city where a fog machine runs every hour. The street signs are still there, but each time you try to read one, a new cloud rolls in. You start wondering if your eyes are the problem, even though the fog is the policy."
      sections={[
        {
          title: "Why does it feel personal when it is structural?",
          answer:
            "Because the pressure lands on one nervous system at a time, so a collective pattern gets experienced as private confusion.",
          children:
            "When reality keeps getting bent in small ways, it rarely announces itself as a system. It arrives as a tone, a dismissal, a smile that contradicts the consequences. You feel the shift inside your own body first: hesitation, self checking, replaying a conversation to see if you misheard. If many people are living through the same pattern, they may still believe it is just their own sensitivity. The structure stays hidden because everyone is busy trying to stay functional.",
          metaphor:
            "Imagine a classroom where the lights flicker randomly all day. Each student thinks they are the only one getting headaches. No one sees the pattern because everyone is trying to focus.",
        },
        {
          title: "Why does the obvious explanation fall short?",
          answer:
            "Because it is not just lying. It is reality management through repetition, overload, and selective framing.",
          children:
            "A lie can be disproved. Reality management is harder to pin down. A claim is made, then softened, then denied, then reframed as a joke, then blamed on your interpretation. The point is not one false statement. The point is that you cannot hold one signal steady long enough to judge it. Over time, the effort required to keep checking begins to cost more than the truth seems to return.",
          metaphor:
            "Imagine a radio that changes stations every time you reach for the volume knob. You are not hearing one false song. You are losing the ability to keep a single signal long enough to judge it.",
        },
        {
          title: "What is actually doing the work?",
          answer:
            "Power often controls the frame, deciding what counts as reasonable, credible, or excessive.",
          children:
            "In many environments, the argument is settled before evidence is even discussed. Your concern becomes an attitude. Your request for clarity becomes disrespect. Your evidence becomes obsession. Once you are framed as unstable, sensitive, or disloyal, your words arrive already discredited. The system does not have to refute what you say. It only has to shape what you seem to be.",
          metaphor:
            "Imagine a game where the referee also writes the rulebook during the match. When you point at the rule, the referee points at a new page. You are not losing the game. You are losing the ground under it.",
        },
        {
          title: "How does this play out over time?",
          answer:
            "Confusion becomes exhaustion, and exhaustion becomes compliance, because pushing back starts to feel pointless.",
          children:
            "At first you argue with the contradiction. You try to be precise so no one can twist your words. Then you notice the twisting is not an accident. It is the rhythm. You begin choosing silence because it costs less. You accept vague answers because clarity keeps getting punished. The system does not always need you to agree. It often only needs you to stop insisting on a shared, checkable reality.",
          metaphor:
            "Imagine carrying a bucket with a tiny hole in it. At first you keep patching it. After weeks, you stop checking and just accept it will never stay full.",
        },
        {
          title: "Where does the digital world intensify it?",
          answer:
            "Digital systems reward certainty, speed, and outrage, so nuance looks weak and careful truth looks slow.",
          children:
            "Online, confidence travels farther than accuracy. Context arrives late or never. Two people can live inside different versions of the same day and still believe they are seeing the full picture. When you try to bridge the gap, it can feel like invalidation even if you are simply naming a mismatch. The medium trains suspicion because it rewards immediate alignment and punishes slow thinking.",
          metaphor:
            "Imagine a marketplace where the loudest stall gets all the foot traffic. Quiet stalls may sell better goods, but most people never even hear them. Volume starts to replace quality without anyone choosing it.",
        },
        {
          title: "Why does the pattern persist in workplaces and institutions?",
          answer:
            "Because shifting blame onto individuals protects the system, especially when the system is designed to extract more than people can sustainably give.",
          children:
            "When workloads are impossible, the problem can be renamed as time management. When culture is toxic, the solution can be renamed as resilience. Even kindness can be used as cover, like calling a workplace a family, which makes boundaries feel like betrayal. If the institution admits its design is harmful, it must change. If it convinces you that you are the issue, it can remain untouched.",
          metaphor:
            "Imagine a factory with a conveyor belt set too fast. Instead of slowing it, the supervisor hands workers a poster about positive mindset. When workers collapse, the belt is treated as innocent.",
        },
        {
          title: "Why does it feel like I am the one distorting reality?",
          answer:
            "Because repeated dismissal trains the mind to doubt itself first, and that self check can become a loop.",
          children:
            "After enough invalidation, your mind starts editing your memory while you are still living it. You pre explain, pre apologize, and pre shrink, just to avoid being framed. The danger is not only being misled. The danger is learning to abandon your own perception to stay safe. Reality becomes negotiable, and the first thing you bargain away is your own signal.",
          metaphor:
            "Imagine you keep smelling smoke, but everyone says the air is clean. After a while you stop trusting your nose, even when the smell returns.",
        },
        {
          title: "What does ZenTrust ask about this fog?",
          answer:
            "Whether belonging has been made conditional on accepting someone else’s frame.",
          children:
            "ZenTrust does not ask you to win arguments or expose anyone. It asks what trade is being offered: agree with our framing, or lose connection. When that trade is seen clearly, the spell weakens. You may still live inside the fog, but you stop mistaking the fog for a defect in your eyes. Shared reality may not instantly return, yet your relationship with your own perception becomes less negotiable.",
          metaphor:
            "Imagine standing on a shoreline as waves keep erasing your footprints. You cannot force the sand to hold them. You can still know where you walked.",
        },
      ]}
      ending={[
        "Some confusion is not a personal flaw.",
        "Some doubt is manufactured, not discovered.",
        "You are allowed to see clearly without rushing to prove it.",
      ]}
    />
  );
}
