import Link from 'next/link'
import { categories } from '@/lib/content'

export function SiteFooter() {
  return (
    <footer className="bg-ink-paper text-ink-foreground">
      <div className="border-t-4 border-primary">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <span className="masthead text-3xl text-primary">INSURGÊNCIA</span>
              <p className="mt-4 max-w-xs font-serif text-sm leading-relaxed text-ink-muted">
                Tribuna revolucionária brasileira. Arsenal de teoria, tática e política.
                Herdeira direta dos jornais operários A Plebe e A Terra Livre.
              </p>
            </div>

            <nav aria-label="Seções">
              <h2 className="font-sans text-sm uppercase tracking-[0.3em] text-primary">Seções</h2>
              <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2">
                {categories.map((c) => (
                  <li key={c.slug}>
                    <Link
                      href={c.slug === 'manifesto' ? '/manifesto' : `/categoria/${c.slug}`}
                      className="font-serif text-sm text-ink-foreground/90 transition-colors hover:text-primary"
                    >
                      {c.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/sobre" className="font-serif text-sm text-ink-foreground/90 hover:text-primary">
                    Sobre
                  </Link>
                </li>
                <li>
                  <Link href="/contato" className="font-serif text-sm text-ink-foreground/90 hover:text-primary">
                    Contato
                  </Link>
                </li>
              </ul>
            </nav>

            <div>
              <h2 className="font-sans text-sm uppercase tracking-[0.3em] text-primary">Contribua</h2>
              <p className="mt-4 font-serif text-sm leading-relaxed text-ink-muted">
                Mande seu manifesto, relato, tradução ou manual. Este espaço também é seu.
              </p>
              <Link
                href="/contato"
                className="mt-4 inline-block border-2 border-primary bg-primary px-4 py-2 font-sans text-sm font-semibold uppercase tracking-wide text-primary-foreground transition-colors hover:bg-transparent hover:text-primary"
              >
                Mande seu manifesto
              </Link>
            </div>
          </div>

          <div className="mt-12 border-t-2 border-ink-muted/30 pt-6">
            <p className="masthead text-xl text-primary sm:text-2xl">
              A INSURGÊNCIA está de pé. Peguem suas armas.
            </p>
            <p className="mt-3 font-sans text-xs uppercase tracking-[0.3em] text-ink-muted">
              Fundada em 2026 · Órgão de combate · A emancipação dos trabalhadores será obra dos próprios trabalhadores
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
