import Link from "next/link";

export default function IndexPage({
  title,
  description,
  links,
}: {
  title: string;
  description?: string;
  links: { href: string; label: string }[];
}) {
  return (
    <main className="min-h-screen px-6 py-20 max-w-3xl mx-auto">
      <h1 className="text-3xl font-semibold mb-6">{title}</h1>
      {description && <p className="mb-10 text-neutral-600">{description}</p>}
      <ul className="space-y-4">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="underline text-blue-600">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
