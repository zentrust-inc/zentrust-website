export function calculateReadTime(text: string): number {
  const wordsPerMinute = 200;
  const wordCount = text?.trim().split(/\s+/).length || 0;
  return Math.ceil(wordCount / wordsPerMinute);
}
