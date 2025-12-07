import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export type BlogPost = {
  title: string
  excerpt: string
  author?: string
  date?: string
  category?: string
  heroImage?: string
  slug: string
}

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog')

export function getLatestBlogPosts(limit = 3): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return []

  const files = fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith('.md'))

  const posts = files.map((file) => {
    const slug = file.replace(/\.md$/, '')
    const raw = fs.readFileSync(path.join(BLOG_DIR, file), 'utf8')
    const { data, content } = matter(raw)

    return {
      title: data.title ?? slug,
      excerpt: data.excerpt ?? content.slice(0, 160),
      author: data.author,
      date: data.date,
      category: data.category,
      heroImage: data.heroImage,
      slug,
    } as BlogPost
  })

  return posts
    .sort((a, b) => {
      const dateA = a.date ? new Date(a.date).getTime() : 0
      const dateB = b.date ? new Date(b.date).getTime() : 0
      return dateB - dateA
    })
    .slice(0, limit)
}
