export type QuestionCategory =
  | "Nature & Land"
  | "Health & Suffering"
  | "Mind & Experience"
  | "Schools & Systems"
  | "Meaning & Seeking"
  | "Tools & Technology";

export type QuestionMeta = {
  slug: string;
  question: string;
  category: QuestionCategory;
  order?: number;
};

import { questionMeta as bpssHealth } from "./bpss-health/question.meta";
import { questionMeta as mindExperience } from "./mind-experience/question.meta";
import { questionMeta as syntropicEcology } from "./syntropic-ecology/question.meta";
import { questionMeta as visualModeling } from "./visual-modeling/question.meta";

export const QUESTIONS: QuestionMeta[] = [
  syntropicEcology,
  bpssHealth,
  mindExperience,
  visualModeling,
];
