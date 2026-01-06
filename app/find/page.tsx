import { redirect } from "next/navigation";
import { searchZenTrust } from "@/lib/search/search";

type Props = {
  searchParams: { q?: string };
};

export default function SearchPage({ searchParams }: Props) {
  const query = searchParams.q?.trim() ?? "";

  const result = searchZenTrust(query);

  if (result.type === "found") {
    // Do NOT render URLs or slugs
    // Just move the user to the questions index with a highlight hint
    redirect(`/questions?highlight=${encodeURIComponent(query)}`);
  }

  // Absent case — render exactly what search returns
  return (
    <main className="mx-auto max-w-2xl px-4 py-10">
      <p>{result.absence}</p>
    </main>
  );
}
