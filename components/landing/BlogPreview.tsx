import { getLatestBlogPosts } from '@/lib/blog'
import { BlogPreviewClient } from './BlogPreviewClient'

export async function BlogPreview() {
  const posts = getLatestBlogPosts(3)
  return <BlogPreviewClient posts={posts} />
}
