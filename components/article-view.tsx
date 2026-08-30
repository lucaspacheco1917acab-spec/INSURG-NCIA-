'use client'

import Link from 'next/link'
import { useState } from 'react'
import { BookOpen, Clock, X } from 'lucide-react'
import { formatDate, type Post } from '@/lib/content'
import { CategoryBadge } from '@/components/category-badge'
import { ArticleBody } from '@/components/article-body'
import { PostCard } from '@/components/post-card'
import { Sidebar } from '@/components/sidebar'

export function ArticleView({
  post,
  related,
}: {
  post: Post
  related: Post[]
}) {
  const [readingMode, setReadingMode] = useState(false)
  const isTrincheira = post.category === 'trincheira-de-fogo'

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <nav aria-label="trilha" className="mb-6 font-sans text-xs uppercase tracking-widest text-muted-foreground">
        <Link href="/" className="hover:text-primary">
          Início
        </Link>
        <span className="px-2">/</span>
        <CategoryBadge slug={post.category} />
      </nav>

      <div
        className={
          readingMode
            ? 'mx-auto max-w-2xl'
            : 'grid gap-10 lg:grid-cols-[1fr_20rem]'
        }
      >
        <article className="min-w-0">
          <header className="border-b-4 border-ink pb-6">
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="font-sans text-xs uppercase tracking-widest text-muted-foreground">
                {formatDate(post.date)}
              </span>
              <span className="flex items-center gap-1 font-sans text-xs uppercase tracking-widest text-muted-foreground">
                <Clock className="h-3 w-3" />
                {post.readingMinutes} min de leitura
              </span>
              <button
                onClick={() => setReadingMode((v) => !v)}
                className="ml-auto flex items-center gap-2 border-2 border-ink px-3 py-1.5 font-sans text-xs font-semibold uppercase tracking-wide transition-colors hover:bg-ink hover:text-ink-foreground"
                aria-pressed={readingMode}
              >
                {readingMode ? <X className="h-4 w-4" /> : <BookOpen className="h-4 w-4" />}
                {readingMode ? 'Sair do modo leitura' : 'Modo leitura'}
              </button>
            </div>
            <h1 className="font-sans text-4xl font-bold uppercase leading-none tracking-tight text-balance sm:text-5xl">
              {post.title}
            </h1>
            <p className="mt-4 font-serif text-lg italic leading-relaxed text-muted-foreground">
              {post.excerpt}
            </p>
            <p className="mt-4 font-sans text-sm uppercase tracking-widest text-primary">
              Por {post.author}
            </p>
          </header>

          {isTrincheira && (
            <aside className="mt-8 border-l-8 border-primary bg-ink p-5 text-ink-foreground">
              <p className="font-sans text-sm font-bold uppercase tracking-widest text-primary">
                Nota de repúdio · Trincheira de Fogo
              </p>
              <p className="mt-3 font-serif text-sm leading-relaxed text-ink-foreground/90">
                O texto a seguir <strong>diverge frontalmente da linha editorial da INSURGÊNCIA</strong>.
                Publicamo-lo no espírito do debate franco entre revolucionários. A responsabilidade pelas
                ideias é de quem as assina. Ao final, a contraparte do Conselho Editorial.
              </p>
            </aside>
          )}

          <div className={readingMode ? 'mt-8' : 'mt-8'}>
            <ArticleBody body={post.body} />
          </div>

          {isTrincheira && (
            <aside className="mt-10 border-4 border-ink bg-card p-6">
              <p className="font-sans text-lg font-bold uppercase tracking-tight text-primary">
                Contraparte do Conselho Editorial
              </p>
              <div className="mt-4 flex flex-col gap-4 font-serif text-base leading-relaxed text-foreground/90">
                <p>
                  Discordamos, ponto por ponto. A história da classe trabalhadora está pavimentada de
                  conquistas arrancadas na luta direta e depois administradas — e frequentemente
                  desfeitas — nos gabinetes. A "paciência institucional" tantas vezes foi o nome
                  educado da desmobilização.
                </p>
                <p>
                  Não recusamos toda disputa de espaços, mas recusamos a subordinação da organização
                  autônoma da classe ao calendário eleitoral. A correlação de forças não é um dado
                  fixo a se aguardar: é algo que se constrói na ação. Publicamos o texto porque o
                  debate nos fortalece — e porque a resposta, feita à luz do dia, também.
                </p>
              </div>
            </aside>
          )}

          {/* etiquetas */}
          <div className="mt-10 flex flex-wrap items-center gap-2 border-t-2 border-border/50 pt-6">
            <span className="font-sans text-xs uppercase tracking-widest text-muted-foreground">
              Munição:
            </span>
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="border border-ink bg-secondary px-2 py-0.5 font-sans text-xs uppercase tracking-wide text-secondary-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </article>

        {!readingMode && <Sidebar />}
      </div>

      {/* relacionados */}
      {!readingMode && related.length > 0 && (
        <section className="mt-16" aria-labelledby="relacionados">
          <div className="mb-6 flex items-center gap-4">
            <h2 id="relacionados" className="font-sans text-2xl font-bold uppercase tracking-tight">
              Leia também
            </h2>
            <span className="h-1 flex-1 bg-ink" />
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </div>
        </section>
      )}
    </main>
  )
}
