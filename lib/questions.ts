import fs from "fs";
import path from "path";
import matter from "gray-matter";

import client from "@/tina/__generated__/client";
import type {
  QuestionsConnectionQuery,
  QuestionsQuery,
} from "@/tina/__generated__/types";

type QuestionsEdge = NonNullable<
  NonNullable<QuestionsConnectionQuery["questionsConnection"]>["edges"]
>[number];

export type QuestionDocument = NonNullable<QuestionsEdge>["node"];
const QUESTIONS_DIR = path.join(process.cwd(), "content", "questions");

export async function fetchQuestions(): Promise<QuestionDocument[]> {
  const questionsRes = await client.queries
    .questionsConnection()
    .catch(() => null);

  const questions =
    questionsRes?.data?.questionsConnection?.edges
      ?.map((edge) => edge?.node)
      .filter((node): node is QuestionDocument => Boolean(node)) ?? [];

  return questions;
}

export async function fetchQuestionBySlug(
  slug: string,
): Promise<QuestionsQuery["questions"] | null> {
  const relativePath = `${slug}.mdx`;

  try {
    const result = await client.queries.questions({
      relativePath,
    });

    return result?.data?.questions ?? null;
  } catch (error) {
    return null;
  }
}

export function getPublishedQuestionSlugsFromFiles(): string[] {
  if (!fs.existsSync(QUESTIONS_DIR)) {
    return [];
  }

  return fs
    .readdirSync(QUESTIONS_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const filePath = path.join(QUESTIONS_DIR, file);
      const { data } = matter.read(filePath);

      if (data?.status !== "published") {
        return null;
      }

      return path.parse(file).name;
    })
    .filter((slug): slug is string => Boolean(slug));
}
