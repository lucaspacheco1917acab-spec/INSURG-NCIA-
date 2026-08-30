import type { Metadata } from 'next'
import Link from 'next/link'
import { getPost, formatDate } from '@/lib/content'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ArticleBody } from '@/components/article-body'

export const metadata: Metadata = {
  title: 'Manifesto de Lançamento — INSURGÊNCIA',
  description:
    'O manifesto de lançamento da INSURGÊNCIA. Nossa linha, nossa trincheira. Acumular para irromper.',
}

export default function ManifestoPage() {
  const post = getPost('manifesto-de-lancamento')!

  return (
    <div className="min-h-screen">
      <SiteHeader />

      <div className="relative overflow-hidden bg-ink text-ink-foreground">
        <img
          src="/multidao-ascendente.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/85 to-ink/50" />
        <div className="relative mx-auto max-w-3xl px-4 py-20 text-center">
          <p className="font-sans text-sm uppercase tracking-[0.4em] text-primary">Documento fundador</p>
          <h1 className="mt-4 masthead text-5xl text-primary sm:text-7xl">Manifesto</h1>
          <p className="mt-6 font-serif text-xl italic leading-relaxed text-ink-foreground/90">
            Não nascemos para comentar o mundo, mas para virá-lo do avesso.
          </p>
          <p className="mt-6 font-sans text-xs uppercase tracking-widest text-ink-muted">
            {post.author} · {formatDate(post.date)}
          </p>
        </div>
      </div>

      <main className="mx-auto max-w-3xl px-4 py-14">
        <ArticleBody body={post.body} />

        <div className="mt-14 border-t-4 border-ink pt-10 text-center">
          <p className="masthead text-3xl text-primary sm:text-4xl">
            A INSURGÊNCIA está de pé.
          </p>
          <Link
            href="/contato"
            className="mt-6 inline-block border-2 border-primary bg-primary px-6 py-3 font-sans text-base font-semibold uppercase tracking-wide text-primary-foreground transition-colors hover:bg-transparent hover:text-primary"
          >
            Some-se à trincheira
          </Link>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
