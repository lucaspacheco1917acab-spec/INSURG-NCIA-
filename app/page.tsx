import Link from 'next/link'
import { getRecentPosts, getPost, formatDate } from '@/lib/content'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { PostCard } from '@/components/post-card'
import { Sidebar } from '@/components/sidebar'
import { CategoryBadge } from '@/components/category-badge'

export default function HomePage() {
  const featured = getPost('manifesto-de-lancamento')!
  const recent = getRecentPosts().filter((p) => p.slug !== featured.slug).slice(0, 6)

  return (
    <div className="min-h-screen">
      <SiteHeader />

      {/* faixa de tarja */}
      <div className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl overflow-hidden px-4 py-1.5">
          <p className="whitespace-nowrap font-sans text-xs uppercase tracking-[0.3em]">
            Edição de combate · Território hostil ao sistema, sagrado para a luta · Acumular para Irromper
          </p>
        </div>
      </div>

      <main className="mx-auto max-w-6xl px-4 py-10">
        {/* destaque principal */}
        <section aria-labelledby="destaque" className="mb-14">
          <h2 id="destaque" className="sr-only">
            Destaque principal
          </h2>
          <Link
            href={`/artigo/${featured.slug}`}
            className="group relative block overflow-hidden border-2 border-ink bg-ink text-ink-foreground"
          >
            <div className="absolute inset-0">
              <img
                src="/multidao-ascendente.png"
                alt=""
                aria-hidden="true"
                className="h-full w-full object-cover opacity-40 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/30" />
            </div>
            <div className="relative flex min-h-[22rem] flex-col justify-end gap-4 p-6 sm:min-h-[28rem] sm:p-10">
              <div className="flex items-center gap-3">
                <CategoryBadge slug={featured.category} asLink={false} />
                <span className="font-sans text-xs uppercase tracking-widest text-ink-muted">
                  {formatDate(featured.date)}
                </span>
              </div>
              <h3 className="max-w-3xl font-sans text-3xl font-bold uppercase leading-none tracking-tight text-balance sm:text-5xl">
                {featured.title}
              </h3>
              <p className="max-w-2xl font-serif text-base leading-relaxed text-ink-foreground/85 sm:text-lg">
                {featured.excerpt}
              </p>
              <span className="mt-2 inline-flex w-fit items-center gap-2 border-2 border-primary bg-primary px-4 py-2 font-sans text-sm font-semibold uppercase tracking-wide text-primary-foreground transition-colors group-hover:bg-transparent group-hover:text-primary">
                Ler o manifesto
              </span>
            </div>
          </Link>
        </section>

        {/* grade + barra lateral */}
        <div className="grid gap-10 lg:grid-cols-[1fr_20rem]">
          <section aria-labelledby="recentes">
            <div className="mb-6 flex items-center gap-4">
              <h2 id="recentes" className="font-sans text-2xl font-bold uppercase tracking-tight">
                Últimos disparos
              </h2>
              <span className="h-1 flex-1 bg-ink" />
            </div>
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {recent.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          </section>

          <Sidebar />
        </div>

        {/* chamada de leitura destacada */}
        <section className="mt-16 flex flex-col items-start gap-4 border-y-4 border-ink py-10 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-sans text-3xl font-bold uppercase leading-none tracking-tight text-balance sm:text-4xl">
              A palavra é uma arma.
            </p>
            <p className="mt-2 font-serif text-lg italic text-muted-foreground">
              Não a deixe enferrujar. Some-se à trincheira.
            </p>
          </div>
          <Link
            href="/contato"
            className="border-2 border-primary bg-primary px-6 py-3 font-sans text-base font-semibold uppercase tracking-wide text-primary-foreground transition-colors hover:bg-transparent hover:text-primary"
          >
            Mande seu manifesto
          </Link>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
