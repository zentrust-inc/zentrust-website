"use client";

import { TinaMarkdown, Components } from "tinacms/dist/rich-text";
import { useTina } from "tinacms/dist/react";
import Image from "next/image";
import { FC } from "react";
import ReadingProgress from "@/components/ReadingProgress";
import { calculateReadTime } from "@/lib/readTime";

interface TinaBlogClientProps {
  data: any;
  query: string;
  variables: any;
  relatedPosts?: any[];
  prevPost?: any | null;
  nextPost?: any | null;
}

const richTextComponents: Components<{}> = {
  h1: (props) => (
    <h1 className="text-4xl font-bold mt-10 mb-6 leading-tight" {...props} />
  ),
  h2: (props) => (
    <h2 className="text-3xl font-semibold mt-10 mb-4" {...props} />
  ),
  h3: (props) => (
    <h3 className="text-2xl font-semibold mt-8 mb-3" {...props} />
  ),
  h4: (props) => (
    <h4 className="text-xl font-semibold mt-6 mb-2" {...props} />
  ),
  p: (props) => (
    <p className="leading-relaxed my-4 text-gray-800" {...props} />
  ),
  a: (props) => (
    <a
      className="text-blue-600 underline hover:text-blue-800 transition"
      {...props}
    />
  ),
  ul: (props) => <ul className="list-disc pl-6 my-4 space-y-2" {...props} />,
  ol: (props) => (
    <ol className="list-decimal pl-6 my-4 space-y-2" {...props} />
  ),
  li: (props) => <li className="leading-relaxed text-gray-800" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="border-l-4 border-gray-300 pl-4 italic text-gray-600 my-6"
      {...props}
    />
  ),
  code: (props) => (
    <code
      className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono text-red-500"
      {...props}
    />
  ),
  img: (props) => (
    <img
      className="rounded-lg my-6 mx-auto shadow-md max-w-full"
      {...props}
    />
  ),
};

const TinaBlogClient: FC<TinaBlogClientProps> = ({
  data,
  query,
  variables,
  relatedPosts = [],
  prevPost,
  nextPost,
}) => {
  // Use Tina with correct envelope
  const tina = useTina({ data, query, variables });

  const post = tina.data?.post;
 // Tina Cloud returns images as objects: { src, alt }
// Local images are strings
const heroSrc =
  typeof post?.heroImage === "string"
    ? post.heroImage
    : post?.heroImage?.src
    ? post.heroImage.src
    : "/images/default.jpg";
  const bodyContent =
    typeof post?.body === "string"
      ? post.body
      : JSON.stringify(post?.body ?? "");
  const readTime = calculateReadTime(bodyContent || "");
  const formattedDate = post?.date
    ? new Date(post.date).toLocaleDateString()
    : "";
  const metaParts = [
    post?.author,
    formattedDate,
    `${readTime} min read`,
  ].filter(Boolean);

  console.log("POST HEROIMAGE", post?.heroImage, "resolved:", heroSrc);

  if (!post) {
    return <div className="text-center py-20">Post not found.</div>;
  }

  return (
    <>
      <ReadingProgress />
      <article className="max-w-4xl mx-auto px-6 pb-20 pt-10">
        {heroSrc && (
          <div className="mb-10">
            <Image
              src={heroSrc}
              alt={post.title}
              width={1600}
              height={900}
              sizes="100vw"
              className="object-cover w-full h-auto rounded-xl shadow-md"
              priority
            />
          </div>
        )}

        <h1 className="text-5xl font-bold leading-tight mb-6">
          {post.title}
        </h1>

        <p className="text-sm text-gray-500 mb-8">
          {metaParts.join(" • ")}
        </p>

        {post.audio && (
          <audio controls className="w-full my-6">
            <source src={post.audio} type="audio/mpeg" />
          </audio>
        )}

        <div className="flex flex-wrap gap-3 mb-10">
          {post.primaryCategory && (
            <a
              href={`/blog/category/${encodeURIComponent(post.primaryCategory)}`}
              className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold hover:bg-blue-200"
            >
              {post.primaryCategory}
            </a>
          )}

          {post.categories?.map((cat: string) => (
            <a
              key={cat}
              href={`/blog/category/${encodeURIComponent(cat)}`}
              className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-200"
            >
              {cat}
            </a>
          ))}

          {post.tags?.map((tag: string, i: number) => (
            <span
              key={i}
              className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
            >
              {tag}
            </span>
          ))}

          {post.tones?.map((tone: string, i: number) => (
            <span
              key={i}
              className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-medium"
            >
              {tone}
            </span>
          ))}
        </div>

        <div className="prose prose-lg prose-gray max-w-none">
          <TinaMarkdown content={post.body} components={richTextComponents} />
        </div>

        {relatedPosts.length > 0 && (
          <section className="mt-14">
            <h3 className="text-xl font-semibold mb-4">Related Posts</h3>
            <div className="space-y-4">
              {relatedPosts.map((rel: any) => {
                const relHero =
                  rel?.heroImage && rel.heroImage.startsWith("/")
                    ? rel.heroImage
                    : rel?.heroImage
                    ? `/${rel.heroImage}`
                    : null;

                return (
                  <a
                    key={rel?._sys?.filename}
                    href={`/blog/${rel?._sys?.filename}`}
                    className="flex items-center gap-4 p-4 border rounded-xl hover:bg-gray-50 transition"
                  >
                    {relHero ? (
                      <img
                        src={relHero}
                        alt={rel?.title || "Related post image"}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                    ) : (
                      <div className="w-20 h-20 rounded-lg bg-gray-200" aria-hidden />
                    )}
                    <div className="min-w-0">
                      <h4 className="text-lg font-semibold line-clamp-2">
                        {rel?.title}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {rel?.date ? new Date(rel.date).toLocaleDateString() : ""}
                        {rel?.primaryCategory ? ` • ${rel.primaryCategory}` : ""}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>
          </section>
        )}

        {(prevPost || nextPost) && (
          <div className="flex justify-between mt-12 text-sm font-medium">
            {prevPost ? (
              <a
                href={`/blog/${prevPost?._sys?.filename}`}
                className="text-blue-600 hover:underline"
              >
                ← {prevPost?.title}
              </a>
            ) : (
              <span />
            )}
            {nextPost && (
              <a
                href={`/blog/${nextPost?._sys?.filename}`}
                className="text-blue-600 hover:underline"
              >
                {nextPost?.title} →
              </a>
            )}
          </div>
        )}
      </article>
    </>
  );
};

export default TinaBlogClient;
