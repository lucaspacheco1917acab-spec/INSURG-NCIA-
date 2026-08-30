import type { Metadata } from 'next'
import { searchPosts } from '@/lib/content'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { PostCard } from '@/components/post-card'

export const metadata: Metadata = {
  title: 'Busca — INSURGÊNCIA',
  description: 'Busque no arsenal da INSURGÊNCIA.',
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>
}) {
  const { q = '' } = await searchParams
  const results = searchPosts(q)

  return (
    <div className="min-h-screen">
      <SiteHeader />

      <div className="bg-ink-paper text-ink-foreground">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <p className="font-sans text-xs uppercase tracking-[0.35em] text-primary">Busca no arsenal</p>
          <h1 className="mt-2 font-sans text-4xl font-bold uppercase leading-none tracking-tight text-balance sm:text-5xl">
            {q ? `Resultados para “${q}”` : 'Buscar'}
          </h1>
          {q && (
            <p className="mt-4 font-serif text-lg text-ink-foreground/85">
              {results.length} {results.length === 1 ? 'texto encontrado' : 'textos encontrados'}.
            </p>
          )}
        </div>
      </div>

      <main className="mx-auto max-w-6xl px-4 py-10">
        {!q ? (
          <p className="border-2 border-ink bg-card p-8 text-center font-serif text-lg italic text-muted-foreground">
            Use a barra de busca no topo para vasculhar o arsenal.
          </p>
        ) : results.length === 0 ? (
          <p className="border-2 border-ink bg-card p-8 text-center font-serif text-lg italic text-muted-foreground">
            Nenhum texto encontrado. Tente outra palavra de ordem.
          </p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </main>

      <SiteFooter />
    </div>
  )
}
