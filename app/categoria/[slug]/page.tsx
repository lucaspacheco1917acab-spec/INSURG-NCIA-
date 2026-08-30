import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import {
  categories,
  getCategory,
  getPostsByCategory,
  type CategorySlug,
} from '@/lib/content'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { PostCard } from '@/components/post-card'
import { Sidebar } from '@/components/sidebar'

export function generateStaticParams() {
  return categories
    .filter((c) => c.slug !== 'manifesto' && c.slug !== 'arquivo-vivo')
    .map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const category = getCategory(slug)
  if (!category) return { title: 'Seção não encontrada — INSURGÊNCIA' }
  return {
    title: `${category.name} — INSURGÊNCIA`,
    description: category.description,
  }
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const category = getCategory(slug)
  if (!category) notFound()

  const list = getPostsByCategory(slug as CategorySlug)

  return (
    <div className="min-h-screen">
      <SiteHeader />

      <div className="bg-ink-paper text-ink-foreground">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <p className="font-sans text-xs uppercase tracking-[0.35em] text-primary">Seção</p>
          <h1 className="mt-2 font-sans text-4xl font-bold uppercase leading-none tracking-tight text-balance sm:text-6xl">
            {category.name}
          </h1>
          <p className="mt-4 max-w-2xl font-serif text-lg leading-relaxed text-ink-foreground/85">
            {category.description}
          </p>
        </div>
      </div>

      <main className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-10 lg:grid-cols-[1fr_20rem]">
          <section>
            {list.length === 0 ? (
              <p className="border-2 border-ink bg-card p-8 text-center font-serif text-lg italic text-muted-foreground">
                Ainda não há disparos nesta trincheira. Em breve.
              </p>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2">
                {list.map((post) => (
                  <PostCard key={post.slug} post={post} />
                ))}
              </div>
            )}
          </section>
          <Sidebar />
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
