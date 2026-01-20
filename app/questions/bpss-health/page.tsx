// app/questions/medical-suffering/page.tsx

import type { Metadata } from "next";
import { QuestionFrame } from "@/components/questions/QuestionFrame";

export const metadata: Metadata = {
  title: "Why does treating the body help, yet suffering remain?",
  description:
    "An exploration of the friction between clinical success and the internal script of ongoing suffering.",
  other: {
    category: "Health & Suffering",
    subcategory: "medical-suffering",
  },
};

export default function QuestionPage() {
  return (
    <QuestionFrame
      category="Health & Suffering"
      question="Why does treating the body help, yet suffering remain?"
      shortAnswer="Because clinical intervention replaces the symptom but leaves the underlying script of systemic strain untouched."
      heroMetaphor="A mechanic replaces a worn tire on a car that is being driven over broken glass every morning. The car moves smoothly for a single mile before the vibration returns. The driver stares at the new rubber and wonders why the road still feels like an enemy."
      sections={[
        {
          title: "Why does clinical success feel like a hollow victory?",
          answer: "Success in the body often arrives as a technical correction that fails to reach the deeper rhythm of lived suffering.",
          metaphor: "A clockmaker cleans the dust from the gears of a grandfather clock. The hands move perfectly across the face. The chimes still sound like a funeral in the quiet house.",
          children: "You receive the news that the labs are clear and the scans are stable. The experts nod and sign the papers, signaling that your time in the room of crisis has ended. You walk out into the sunlight expecting a surge of joy, but you find only a heavy, familiar stillness. The body has been repaired, but the person who inhabited the pain has no instructions on how to put it down. You are technically well, yet internally you are still bracing for the next blow.",
        },
        {
          title: "How does the medical script mask the nature of suffering?",
          answer: "The script of modern medicine rewards the disappearance of data points while ignoring the continuity of the organism's exhaustion.",
          metaphor: "A painter covers a damp stain on the wall with three coats of thick white paint. The room looks bright and fresh for the afternoon guests. By midnight, the cold moisture begins to seep through the pigment again.",
          children: "You are taught to speak about your life in symptoms and scores, translating your exhaustion into a language the system can bill. When the scores improve, the system assumes the problem is solved and withdraws its attention. This leaves you alone with a body that functions but a spirit that remains in survival mode. You have optimized the machine, but you have not addressed the ghost that is tired of running it. The suffering is not a bug; it is the sound of the machine working too hard.",
        },
        {
          title: "Why do we cling to suffering even after the body heals?",
          answer: "Suffering provides a familiar identity that the mind uses to navigate a world that demands constant, productive movement.",
          metaphor: "A prisoner is told that the heavy iron door has been unlocked and he is free to walk into the forest. He looks at the vast, unmapped trees and feels a sudden chill. He sits back down on his cot and begins to count the stones in the wall.",
          children: "For months or years, your illness was the only script that made sense of your limitations. It gave you permission to rest, to say no, and to step out of the frantic race for success. Now that the body is 'fixed,' the permission is revoked, and the world expects you to return to the script of the high-achiever. You find yourself holding onto the ghost of the pain because, without it, you are once again a servant to a system that does not know how to pause. The pain was a cage, but it was a cage that protected you from the storm.",
        },
        {
          title: "What is the body protecting by refusing to feel relief?",
          answer: "The body maintains a state of high alertness because it recognizes that the environment that caused the collapse remains unchanged.",
          metaphor: "A soldier returns home to a quiet village and sleeps in a bed with soft linen sheets. He wakes up every hour to check the locks on the doors. He listens for the sound of boots on the gravel path.",
          children: "You have repaired the vessel, but you are still sailing in the same rough seas that broke the hull. Your nervous system is smarter than your doctor; it knows that the stressors of your career, your relationships, and your expectations are still there. It refuses to relax because relaxation in a dangerous environment is a threat to survival. The suffering stays because the threat stays. Your body is not broken; it is simply being honest about the conditions you are living in.",
        },
        {
          title: "Why does the mind interpret systemic strain as personal failure?",
          answer: "Personalizing the strain allows the ego to maintain the illusion of control over a life that is being dictated by invisible systems.",
          metaphor: "A man tries to row a boat against a massive, incoming tide. He blames the weakness in his shoulders for the fact that he is moving backward. He does not look at the moon that is pulling the water.",
          children: "If the suffering is your fault, then you can fix it with more effort, more therapy, or more discipline. This story is a bribe you pay to avoid the realization that you are caught in a script you did not write. You blame your lack of 'resilience' instead of questioning why the world demands so much of it. By keeping the suffering personal, you stay in the driver's seat of a car that is being towed by a crane. You are exhausted by the effort of pretending to steer.",
        },
        {
          title: "How does the search for a 'cure' extend the suffering?",
          answer: "The pursuit of a final resolution creates a fever of seeking that prevents the body from entering the silence of the present moment.",
          metaphor: "A woman runs through a maze looking for a door that leads to the garden. She runs so fast that she never notices the benches placed along the way for rest. She believes that peace is a destination she must earn by running.",
          children: "You move from one specialist to another, seeking a name for the heaviness that remains. Each new supplement or protocol is a new hope that adds to the noise in your mind. This seeking is itself a form of stress, a refusal to be with the body as it is right now. You are waiting for a day when the clouds part and the suffering is gone forever. In that waiting, you miss the quiet, gray beauty of the overcast sky. You are trying to solve a mystery that only wants to be witnessed.",
        },
        {
          title: "What does ZenTrust notice about this remaining suffering?",
          answer: "ZenTrust notices how the focus on 'health' often obscures the reality of a body that is successfully adapting to an unhealthy world.",
          metaphor: "A mirror hangs in a hospital hallway where people are rushing to and fro. It does not offer a diagnosis or a prescription. It reflects the frantic movement and the occasional moment of stillness.",
          children: "ZenTrust does not look for a cure or a cause. It observes the friction between the clinical result and the lived reality. It notices how the word 'wellness' is used to sell you back a peace that was stolen by the pace of the system. ZenTrust holds the space for the suffering that has no name and no lab value. It does not ask you to change your life; it only asks if you can see the script that is exhausting you. The mirror shows the weight you are carrying.",
        },
        {
          title: "What remains when the need for relief is surrendered?",
          answer: "A quiet recognition that suffering and healing are not opposites, but two sides of a single, flowing movement.",
          metaphor: "A person stops trying to push a heavy stone up a muddy hill. They sit down on the stone and watch the rain fall on the trees. The hill is still steep, but the struggle has vanished.",
          children: "The tension in the body may not leave, and the exhaustion may remain as a guest in your house. When you stop demanding that the suffering go away, the suffering stops being an enemy. It becomes a teacher, a signal, or simply a part of the weather. You realize that you are not a project to be finished, but a process to be observed. The medical script ends, the silence begins, and you are finally free to notice the room. The hallway is empty.",
        },
      ]}
      ending={[
        "The body is an honest witness.",
        "Your suffering is a script you did no write.",
        "Notice the silence that remains.",
      ]}
    />
  );
}
