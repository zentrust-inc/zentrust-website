import client from "@/tina/__generated__/client";
import type { QuestionsConnectionQuery } from "@/tina/__generated__/types";
import fs from "node:fs/promises";
import path from "node:path";

type QuestionsEdge = NonNullable<
  NonNullable<QuestionsConnectionQuery["questionsConnection"]>["edges"]
>[number];

export type QuestionDocument = NonNullable<QuestionsEdge>["node"];

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

export async function getQuestionSlugs(): Promise<string[]> {
  const questionsDir = path.join(process.cwd(), "content/questions");
  const entries = await fs
    .readdir(questionsDir, { withFileTypes: true })
    .catch(() => []);

  const slugs: string[] = [];

  for (const entry of entries) {
    if (!entry.isFile() || !entry.name.endsWith(".mdx")) continue;

    const slug = entry.name.replace(/\.mdx$/, "").toLowerCase();
    const fullPath = path.join(questionsDir, entry.name);
    const fileContents = await fs.readFile(fullPath, "utf8").catch(() => "");

    const frontmatterMatch = fileContents.match(/^---\s*([\s\S]*?)---/);
    const frontmatter = frontmatterMatch?.[1] ?? "";
    const isPublished = /status:\s*["']?published["']?/i.test(frontmatter);

    if (isPublished) {
      slugs.push(slug);
    }
  }

  return Array.from(new Set(slugs));
}
