import { QUESTIONS, type QuestionCategory, type QuestionMeta } from "./questionRegistry";

export type { QuestionCategory, QuestionMeta };

export async function getQuestions(): Promise<QuestionMeta[]> {
  return QUESTIONS;
}
