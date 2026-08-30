'use client'

import { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { categories } from '@/lib/content'

export default function ContatoPage() {
  const [sent, setSent] = useState(false)

  const secoes = categories.filter((c) => c.slug !== 'manifesto')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="min-h-screen">
      <SiteHeader />

      <div className="bg-ink-paper text-ink-foreground">
        <div className="mx-auto max-w-5xl px-4 py-14">
          <p className="font-sans text-xs uppercase tracking-[0.4em] text-primary">Tribuna aberta</p>
          <h1 className="mt-2 masthead text-4xl text-primary sm:text-6xl">Mande seu manifesto</h1>
          <p className="mt-4 max-w-2xl font-serif text-lg leading-relaxed text-ink-foreground/85">
            Textos, relatos, traduções, manuais. A responsabilidade pelas ideias é de quem assina —
            mas o espaço é da classe. Acumular para irromper começa com a sua contribuição.
          </p>
        </div>
      </div>

      <main className="mx-auto max-w-2xl px-4 py-14">
        {sent ? (
          <div className="border-4 border-ink bg-card p-10 text-center">
            <CheckCircle2 className="mx-auto h-14 w-14 text-primary" />
            <h2 className="mt-4 font-sans text-3xl font-bold uppercase tracking-tight">
              Contribuição recebida
            </h2>
            <p className="mt-3 font-serif text-lg leading-relaxed text-foreground/85">
              Sua munição chegou à trincheira. O Conselho Editorial fará a leitura e a curadoria. A luta
              continua — e agora, com a sua voz.
            </p>
            <button
              onClick={() => setSent(false)}
              className="mt-6 border-2 border-primary bg-primary px-5 py-2 font-sans text-sm font-semibold uppercase tracking-wide text-primary-foreground transition-colors hover:bg-transparent hover:text-primary"
            >
              Enviar outra
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 border-2 border-ink bg-card p-6 sm:p-8">
            <div className="flex flex-col gap-2">
              <label htmlFor="nome" className="font-sans text-sm font-semibold uppercase tracking-wide">
                Nome ou pseudônimo de combate
              </label>
              <input
                id="nome"
                name="nome"
                required
                className="border-2 border-ink bg-background px-3 py-2 font-serif text-base focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="font-sans text-sm font-semibold uppercase tracking-wide">
                Contato (e-mail seguro)
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="border-2 border-ink bg-background px-3 py-2 font-serif text-base focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="secao" className="font-sans text-sm font-semibold uppercase tracking-wide">
                Seção pretendida
              </label>
              <select
                id="secao"
                name="secao"
                className="border-2 border-ink bg-background px-3 py-2 font-serif text-base focus:outline-none focus:ring-2 focus:ring-primary"
              >
                {secoes.map((c) => (
                  <option key={c.slug} value={c.slug}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="texto" className="font-sans text-sm font-semibold uppercase tracking-wide">
                Seu texto
              </label>
              <textarea
                id="texto"
                name="texto"
                required
                rows={8}
                placeholder="Escreva sua contribuição, cole seu texto ou descreva o material que deseja enviar."
                className="border-2 border-ink bg-background px-3 py-2 font-serif text-base leading-relaxed focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <p className="font-serif text-sm italic leading-relaxed text-muted-foreground">
              Ao enviar, você declara ciência de que a curadoria é da equipe e que a responsabilidade
              pelas ideias é de quem as assina.
            </p>

            <button
              type="submit"
              className="border-2 border-primary bg-primary px-6 py-3 font-sans text-base font-semibold uppercase tracking-wide text-primary-foreground transition-colors hover:bg-transparent hover:text-primary"
            >
              Disparar contribuição
            </button>
          </form>
        )}
      </main>

      <SiteFooter />
    </div>
  )
}
