import Link from 'next/link'
import { categories, getPostsByCategory, formatDate } from '@/lib/content'

export function Sidebar() {
  const arquivo = getPostsByCategory('arquivo-vivo')

  return (
    <aside className="flex flex-col gap-8">
      {/* categorias em destaque */}
      <section className="border-2 border-ink bg-card">
        <h2 className="border-b-2 border-ink bg-ink px-4 py-2 font-sans text-sm uppercase tracking-[0.25em] text-primary">
          Categorias
        </h2>
        <ul className="flex flex-col">
          {categories.map((c) => (
            <li key={c.slug} className="border-b border-border/40 last:border-b-0">
              <Link
                href={c.slug === 'manifesto' ? '/manifesto' : `/categoria/${c.slug}`}
                className="block px-4 py-2.5 font-sans text-sm font-medium uppercase tracking-wide transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                {c.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* arquivo vivo */}
      <section className="border-2 border-ink bg-card">
        <h2 className="border-b-2 border-ink bg-ink px-4 py-2 font-sans text-sm uppercase tracking-[0.25em] text-primary">
          Do Arquivo Vivo
        </h2>
        <ul className="flex flex-col">
          {arquivo.map((p) => (
            <li key={p.slug} className="border-b border-border/40 px-4 py-3 last:border-b-0">
              <Link href={`/artigo/${p.slug}`} className="font-sans text-sm font-medium uppercase leading-tight transition-colors hover:text-primary">
                {p.title}
              </Link>
              <p className="mt-1 font-serif text-xs italic text-muted-foreground">
                {formatDate(p.date)}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* chamada para envio */}
      <section className="bg-ink-paper p-5 text-ink-foreground">
        <h2 className="masthead text-2xl text-primary">Mande seu manifesto</h2>
        <p className="mt-3 font-serif text-sm leading-relaxed text-ink-muted">
          A tribuna é aberta. Envie textos, relatos, traduções e manuais. Acumular para irromper começa com a sua contribuição.
        </p>
        <Link
          href="/contato"
          className="mt-4 inline-block border-2 border-primary bg-primary px-4 py-2 font-sans text-sm font-semibold uppercase tracking-wide text-primary-foreground transition-colors hover:bg-transparent hover:text-primary"
        >
          Enviar contribuição
        </Link>
      </section>
    </aside>
  )
}
