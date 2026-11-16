// app/questions/how-to-be-present/page.tsx

import type { Metadata } from "next";
import { QuestionFrame } from "@/components/questions/QuestionFrame";

export const metadata: Metadata = {
  title: "How do you learn to be present in your own life?",
  description:
    "Being present means noticing what is happening now instead of rushing past it. A calm look at why it is hard and small ways to practice it.",
  other: {
    category: "Meaning & Mind",
    subcategory: "presence",
  },
};

export default function QuestionPage() {
  return (
    <QuestionFrame
      category={"Meaning & Mind"}
      question={"How do you learn to be present in your own life?"}
      shortAnswer={"Being present means placing your attention on what is happening right now, in your body, your surroundings and the people in front of you, rather than drifting into plans, memories or screens. It is less a state you reach than a skill you practice, by noticing when your mind has wandered and gently bringing it back."}
      heroMetaphor={"Imagine walking the same street every day for years. One morning you look up and see a tree you never noticed. It was there the whole time."}
      sections={[
        {
          title: "What does it actually mean to be present?",
          answer:
            "It means resting your attention on what is happening now, rather than living mostly in thoughts about the past or future.",
          metaphor:
            "Imagine reading a page and realizing you took in none of it. Your eyes moved across every line. You were somewhere else.",
          children:
            "Most of the time, attention drifts. We wash dishes while rehearsing a conversation, or eat lunch while reading messages. Being present means noticing the warm water, the taste of food, the sound of a voice. It does not require special settings or a quiet mind. Thoughts will still come. The difference is that you notice them as thoughts and return to what is here. Presence is ordinary attention, given fully, to an ordinary moment.",
        },
        {
          title: "Why is it so hard to stay in the moment?",
          answer:
            "The mind naturally wanders, and modern life adds constant pulls on attention from screens, noise and pressure.",
          metaphor:
            "Imagine trying to hear a friend in a crowded station. Announcements keep breaking in. You lean closer, then lose the thread again.",
          children:
            "A wandering mind is not a flaw. Planning, remembering and imagining likely helped humans survive, so the mind keeps doing them. But phones, notifications and full schedules add a steady stream of interruptions. Worry also pulls attention forward, toward what might go wrong. Many people find that the harder they try to force focus, the more restless they feel. It helps to expect wandering and treat each return as the practice itself, not a failure.",
        },
        {
          title: "Is being present the same as mindfulness?",
          answer:
            "Mindfulness is one common name for training presence, but presence itself does not depend on any single method.",
          metaphor:
            "Imagine a path through a field. Some people walk it with a map. Others found it by walking, and both arrive at the same view.",
          children:
            "Mindfulness practices draw on contemplative traditions, especially Buddhist ones, and have been adapted into secular programs. They often use the breath or body as an anchor. But many people find presence elsewhere: in prayer, gardening, music, craft or a long walk. What these share is attention held kindly on one thing. No single method is required. It can help to notice when you already feel most present and build from there.",
        },
        {
          title: "What small practices can help?",
          answer:
            "Brief pauses that bring attention to the breath, the senses or a single task can gently train presence over time.",
          metaphor:
            "Imagine stepping off a busy road onto a quiet porch for a minute. The traffic keeps going. You remember you can step aside.",
          children:
            "Simple practices are often the easiest to keep. Before opening a message, take one slow breath. Name a few things you can see, hear and feel. Eat the first bites of a meal without a screen. Do one task at a time, such as washing a cup and only washing it. Leave the phone in another room for part of the evening. These moments are small, but repeated often, they can make returning easier.",
        },
        {
          title: "How can you be present with other people?",
          answer:
            "Being present with someone means listening to understand them, not only waiting for your turn to speak.",
          metaphor:
            "Imagine a friend telling you something that matters to them. You put down what you are holding. Their face changes when they notice.",
          children:
            "Much conversation is half-attention: one eye on a screen, part of the mind preparing a reply. Presence with others starts with small choices. Put the phone away. Let pauses happen. Ask a question about what they just said rather than changing the subject. You do not need perfect words. People often remember less of what was said than how it felt to be heard. Attention may be one of the simplest forms of care.",
        },
        {
          title: "What if the present moment feels painful?",
          answer:
            "Presence does not mean forcing yourself to stay with pain, and it is fine to step back, steady yourself or ask for help.",
          metaphor:
            "Imagine wading into cold water. You can go in slowly, ankles first. You can also step back onto the shore.",
          children:
            "When people slow down, difficult feelings sometimes surface: grief, anxiety, old memories. That is understandable, not a sign of doing it wrong. Gentle anchors can help, such as feeling your feet on the floor or noticing sounds around you. Keep practices short and kind. If stillness brings up distress that feels overwhelming or lasts, talking to a doctor, counselor or someone you trust can help. Presence is meant to support you, not to test you.",
        },
        {
          title: "Does being present mean never planning or looking back?",
          answer:
            "No, presence simply means choosing when to plan or remember, instead of being pulled there all the time.",
          metaphor:
            "Imagine a sailor checking the chart, then looking up at the water. Both matter. Trouble comes from staring at the chart while the wind shifts.",
          children:
            "Planning a week, learning from mistakes and enjoying memories are healthy parts of life. Being present does not ask you to give them up. The difference lies between thinking on purpose and drifting without noticing. You might set aside time to plan, then return to what you are doing. When an old regret replays, you can notice it and choose whether it needs attention now. Presence adds gentle choice, not strict rules.",
        },
        {
          title: "What does a hurried life make easy to forget?",
          answer:
            "It makes it easy to forget that life is only ever lived in the present moment, one ordinary day at a time.",
          metaphor:
            "Imagine saving a letter to read when you have more time. Years pass. It is still sealed in the drawer.",
          children:
            "Many people postpone presence until things calm down: after this project, this move, this busy season. Yet the calm rarely arrives on its own. The days that feel like waiting are still the days of a life. This is not a reason for guilt. It is an invitation to notice small moments already here, such as morning light, a shared meal or a quiet walk. Presence often begins with one returned glance.",
        },
      ]}
      ending={[
        "Presence is a return, not a destination.",
        "Wandering is part of the practice.",
        "This moment is the one you have.",
      ]}
    />
  );
}
