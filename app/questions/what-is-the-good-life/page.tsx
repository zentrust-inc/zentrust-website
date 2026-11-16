// app/questions/what-is-the-good-life/page.tsx

import type { Metadata } from "next";
import { QuestionFrame } from "@/components/questions/QuestionFrame";

export const metadata: Metadata = {
  title: "What is the good life, and how do people know they are living it?",
  description:
    "What is the good life? What philosophers and ordinary people mean by it, and why meaning, relationships and enough often matter more than more.",
  other: {
    category: "Meaning & Mind",
    subcategory: "the-good-life",
  },
};

export default function QuestionPage() {
  return (
    <QuestionFrame
      category={"Meaning & Mind"}
      question={"What is the good life, and how do people know they are living it?"}
      shortAnswer={"The good life usually means a life that feels worthwhile as a whole: not only pleasant, but meaningful, connected and lived with some integrity. Philosophers have argued about it for thousands of years, and while their answers differ, most include close relationships, enough security, purposeful activity and good character."}
      heroMetaphor={"Imagine asking ten travelers for the best road up a mountain. Each points a different way. Yet all of them describe the same view from the top."}
      sections={[
        {
          title: "What do people usually mean by \"the good life\"?",
          answer:
            "Most people mean a life that feels worthwhile, not just pleasant, though what counts as worthwhile is still debated.",
          metaphor:
            "Imagine judging a song by a single note. You would miss the melody. A life, too, makes sense when heard as a whole.",
          children:
            "In everyday speech, the good life can mean comfort: a nice home, travel, free time. Philosophers usually mean something deeper, a life that is worth living as a whole. The question is old and still open. Answers tend to include health, security, close relationships, meaningful work and some sense of acting well. Many traditions agree that a good life is not only about how it feels moment to moment, but about what it adds up to.",
        },
        {
          title: "What did ancient philosophers say about the good life?",
          answer:
            "Ancient thinkers often tied the good life to character, wisdom and how one lives, not only to what one has.",
          metaphor:
            "Imagine three gardeners tending different plots. One prunes, one waters, one simply watches the weather. All of them are learning the same patience.",
          children:
            "Aristotle used the Greek word eudaimonia, often translated as flourishing. For him, a good life meant developing virtues such as courage, honesty and practical wisdom, and living them out among others. Epicurus focused on calm pleasures: friendship, simple food and freedom from fear. The Stoics taught that what matters most is how we respond to events, not the events themselves. These schools disagreed on much, yet all treated the good life as something practiced daily.",
        },
        {
          title: "Is a good life the same as a happy life?",
          answer:
            "Not quite, because happiness is part of it, but many people also want meaning, which can come with effort and even discomfort.",
          metaphor:
            "Imagine a climb that leaves your legs aching. The path is steep and slow. At the top, you would not trade the tiredness away.",
          children:
            "Psychologists sometimes separate two kinds of wellbeing. One is about pleasure and comfort: feeling good, avoiding pain. The other is about meaning and growth: doing things that matter, even when they are hard. Raising a child, caring for a sick parent or learning a difficult craft can be tiring and still deeply worthwhile. A life built only on pleasant moments can feel thin. A life with purpose often feels richer, though rarely easier.",
        },
        {
          title: "Does money or success make a life good?",
          answer:
            "Enough money for security matters a great deal, but beyond that, more tends to add less than people expect.",
          metaphor:
            "Imagine a boat that needs ballast to stay upright. Too little and it tips over. Past a point, extra weight only slows it down.",
          children:
            "Having enough matters. Without secure food, shelter, health care and some stability, it is hard to think about anything else. Beyond that point, many people find that more money or status adds less than expected. People adapt quickly to new comforts, and comparison with others can keep satisfaction just out of reach. Money can still buy time, safety and the chance to help others. Trouble can begin when it becomes the goal rather than a tool.",
        },
        {
          title: "Why do relationships matter so much?",
          answer:
            "Most accounts of the good life place other people near their center.",
          metaphor:
            "Imagine a single log in a fire pit. Alone, it smolders and fades. Laid beside others, the flames keep each other going.",
          children:
            "Across cultures and philosophies, close relationships appear again and again in descriptions of a good life. Friends, family and community offer support in hard times and shared joy in good ones. They also give us people to care for, which can matter as much as being cared for. Loneliness, by contrast, tends to weigh on both mood and health. Relationships take time and attention, which modern schedules often squeeze. They rarely thrive on leftovers.",
        },
        {
          title: "Can a good life include pain and difficulty?",
          answer:
            "Yes, many traditions see a good life as one that can hold difficulty with meaning, not one free of it.",
          metaphor:
            "Imagine a valley after heavy rain. The flood leaves damage behind. It also leaves new soil where things can grow.",
          children:
            "No life escapes loss, illness or disappointment. Many traditions suggest that a good life is not one without pain, but one where pain can be faced with some meaning and support. Hard seasons can deepen compassion and clarify what matters. That does not make suffering good, and it should not be romanticized. If sadness or distress lasts or feels heavy, talking to a doctor, counselor or someone trusted can help carry it.",
        },
        {
          title: "Where do nature and place fit into a good life?",
          answer:
            "Many people find that contact with nature and a healthy local environment are quiet foundations of a good life.",
          metaphor:
            "Imagine a house with strong walls but a failing well. The rooms look fine for a while. Slowly, everything inside begins to thirst.",
          children:
            "Many people feel calmer and more themselves outdoors, whether in a forest, a park or a small garden. Philosophers from many eras wrote about living in step with nature, and many older ways of life were closely bound to a particular landscape. Modern life can cut those ties, keeping us indoors and on screens. A good life may depend partly on the health of the places we live: the water, soil and trees that quietly hold everything up.",
        },
        {
          title: "What does the question of the good life make easy to forget?",
          answer:
            "It makes it easy to forget that a good life is lived in ordinary days, not found at the end of a search.",
          metaphor:
            "Imagine searching the whole house for your glasses. You check every drawer and shelf. Then you notice they are already on your face.",
          children:
            "Searching for the good life can turn it into a distant prize: the right job, the right house, the right moment. Yet many descriptions point to plain things done with care. A shared meal, honest work, a walk, a kept promise. These rarely feel dramatic. Asking small questions can help: what am I glad I did today, who did I connect with, what felt worth the effort? The answers may already be close by.",
        },
      ]}
      ending={[
        "A good life is not only felt; it is lived.",
        "Enough is a foundation, not a finish line.",
        "Most of it happens on ordinary days.",
      ]}
    />
  );
}
