import client from "@/tina/__generated__/client";
import Link from "next/link";

export default async function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const category = decodeURIComponent(params.category);

  let posts =
    (
      await client.queries.blogConnection().catch(() => null)
    )?.data?.blogConnection?.edges
      ?.map((edge) => edge?.node)
      .filter(Boolean) ?? [];

  posts =
    posts.filter(
      (post: any) =>
        post?.primaryCategory === category ||
        post?.categories?.includes?.(category)
    ) ?? [];

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Category: {category}</h1>

      {posts.length === 0 && (
        <p className="text-gray-500">No posts found.</p>
      )}

      <div className="space-y-6">
        {posts.map((post: any) => (
          <Link
            key={post?._sys?.filename}
            href={`/blog/${post?._sys?.filename}`}
            className="block border rounded-lg p-4 hover:border-primary transition-colors"
          >
            <h2 className="text-xl font-semibold">{post?.title}</h2>
            <p className="text-gray-600 text-sm mt-1">
              {post?.date || ""}{" "}
              {post?.primaryCategory ? `• ${post.primaryCategory}` : ""}
            </p>
            {post?.excerpt && (
              <p className="text-muted-foreground text-sm mt-3 line-clamp-3">
                {post.excerpt}
              </p>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
