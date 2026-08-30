import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getPost, getRelatedPosts, posts } from '@/lib/content'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ArticleView } from '@/components/article-view'

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return { title: 'Texto não encontrado — INSURGÊNCIA' }
  return {
    title: `${post.title} — INSURGÊNCIA`,
    description: post.excerpt,
  }
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  const related = getRelatedPosts(post)

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <ArticleView post={post} related={related} />
      <SiteFooter />
    </div>
  )
}
