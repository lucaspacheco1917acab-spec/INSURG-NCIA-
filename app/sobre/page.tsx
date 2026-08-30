import type { Metadata } from 'next'
import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'Sobre — INSURGÊNCIA',
  description:
    'Quem somos: uma tribuna revolucionária brasileira, herdeira dos jornais operários A Plebe e A Terra Livre.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <div className="bg-ink-paper text-ink-foreground">
        <div className="mx-auto flex max-w-5xl flex-col items-start gap-8 px-4 py-14 md:flex-row md:items-center">
          <img
            src="/emblema-facao-caneta.png"
            alt="Emblema da INSURGÊNCIA: facão e caneta cruzados sobre círculo"
            className="h-40 w-40 shrink-0 object-contain mix-blend-multiply"
          />
          <div>
            <p className="font-sans text-xs uppercase tracking-[0.4em] text-primary">Quem somos</p>
            <h1 className="mt-2 masthead text-4xl text-primary sm:text-6xl">Uma tribuna de combate</h1>
            <p className="mt-4 max-w-2xl font-serif text-lg leading-relaxed text-ink-foreground/85">
              A INSURGÊNCIA é um órgão de imprensa revolucionária: espaço de acúmulo de forças
              teóricas, táticas e políticas para o movimento. Não somos uma revista de opinião — somos
              um arsenal.
            </p>
          </div>
        </div>
      </div>

      <main className="mx-auto max-w-3xl px-4 py-14">
        <div className="flex flex-col gap-12">
          <section>
            <h2 className="border-l-4 border-primary pl-4 font-sans text-2xl font-bold uppercase tracking-tight">
              Nossa linhagem
            </h2>
            <div className="mt-5 flex flex-col gap-5 font-serif text-lg leading-relaxed text-foreground/90">
              <p>
                Reivindicamos a tradição dos jornais operários que atravessaram a madrugada da
                história brasileira: <strong>A Plebe</strong>, <strong>A Terra Livre</strong> e tantas
                folhas impressas às pressas em porões, distribuídas de mão em mão sob risco de prisão.
              </p>
              <p>
                Reivindicamos <strong>Edgard Leuenroth</strong> e as greves de 1917, quando São Paulo
                parou e a burguesia descobriu que a paz dela depende da paciência de quem ela explora.
                Aquela imprensa não informava apenas: organizava, formava, convocava.
              </p>
            </div>
          </section>

          <section>
            <h2 className="border-l-4 border-primary pl-4 font-sans text-2xl font-bold uppercase tracking-tight">
              O que defendemos
            </h2>
            <ul className="mt-5 flex flex-col gap-3 font-serif text-lg leading-relaxed text-foreground/90">
              <li className="border-l-2 border-ink pl-4">
                Curadoria teórica rigorosa, sem concessões ao reformismo.
              </li>
              <li className="border-l-2 border-ink pl-4">
                Tribuna aberta aos movimentos e coletivos de base — a responsabilidade é de quem assina.
              </li>
              <li className="border-l-2 border-ink pl-4">
                Debate franco, inclusive com quem diverge de nós, sempre à luz do dia.
              </li>
              <li className="border-l-2 border-ink pl-4">
                Formação prática: autodefesa, segurança e organização para quem luta.
              </li>
            </ul>
          </section>

          <section className="border-y-4 border-ink py-10">
            <blockquote className="masthead text-2xl leading-tight text-primary sm:text-3xl">
              “A emancipação dos trabalhadores será obra dos próprios trabalhadores.”
            </blockquote>
            <p className="mt-4 font-serif italic text-muted-foreground">
              É esse princípio que orienta cada linha que publicamos.
            </p>
          </section>

          <section className="text-center">
            <p className="font-sans text-xl font-bold uppercase tracking-tight">
              Este espaço também é seu.
            </p>
            <Link
              href="/contato"
              className="mt-5 inline-block border-2 border-primary bg-primary px-6 py-3 font-sans text-base font-semibold uppercase tracking-wide text-primary-foreground transition-colors hover:bg-transparent hover:text-primary"
            >
              Mande seu manifesto
            </Link>
          </section>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
