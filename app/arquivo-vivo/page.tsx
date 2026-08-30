import type { Metadata } from 'next'
import Link from 'next/link'
import { getPostsByCategory, formatDate } from '@/lib/content'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'Arquivo Vivo — INSURGÊNCIA',
  description:
    'Republicação de jornais e manifestos históricos. A memória da classe não se apaga.',
}

export default function ArquivoVivoPage() {
  const documentos = getPostsByCategory('arquivo-vivo')

  return (
    <div className="min-h-screen">
      <SiteHeader />

      <div className="bg-ink-paper text-ink-foreground">
        <div className="mx-auto max-w-5xl px-4 py-14">
          <p className="font-sans text-xs uppercase tracking-[0.4em] text-primary">Memória de combate</p>
          <h1 className="mt-2 masthead text-4xl text-primary sm:text-6xl">Arquivo Vivo</h1>
          <p className="mt-4 max-w-2xl font-serif text-lg leading-relaxed text-ink-foreground/85">
            Republicamos jornais e manifestos históricos da classe trabalhadora. Que sirvam de fogo,
            não de relíquia. A memória da luta não se apaga — se transmite.
          </p>
        </div>
      </div>

      <main className="mx-auto max-w-4xl px-4 py-14">
        <ul className="flex flex-col gap-6">
          {documentos.map((doc) => (
            <li key={doc.slug}>
              <Link
                href={`/artigo/${doc.slug}`}
                className="group flex flex-col gap-3 border-2 border-ink bg-card p-6 transition-colors hover:bg-ink hover:text-ink-foreground sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <span className="font-sans text-xs uppercase tracking-[0.3em] text-primary">
                    Documento histórico
                  </span>
                  <h2 className="mt-2 font-sans text-2xl font-bold uppercase leading-tight tracking-tight">
                    {doc.title}
                  </h2>
                  <p className="mt-2 max-w-xl font-serif text-sm leading-relaxed opacity-80">
                    {doc.excerpt}
                  </p>
                </div>
                <div className="shrink-0 text-left sm:text-right">
                  <p className="font-serif text-sm italic opacity-80">{doc.author}</p>
                  <p className="font-sans text-xs uppercase tracking-widest opacity-70">
                    {formatDate(doc.date)}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </main>

      <SiteFooter />
    </div>
  )
}
