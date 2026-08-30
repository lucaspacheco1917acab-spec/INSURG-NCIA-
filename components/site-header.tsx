'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'
import { Menu, Search, X } from 'lucide-react'
import { categories } from '@/lib/content'

const navItems = [
  { href: '/', label: 'Início' },
  { href: '/manifesto', label: 'Manifesto' },
  { href: '/categoria/teoria-tatica', label: 'Teoria & Tática' },
  { href: '/categoria/cronicas-da-resistencia', label: 'Crônicas da Resistência' },
  { href: '/categoria/trincheira-de-fogo', label: 'Trincheira de Fogo' },
  { href: '/categoria/autodefesa-organizacao', label: 'Autodefesa & Organização' },
  { href: '/arquivo-vivo', label: 'Arquivo Vivo' },
  { href: '/categoria/internacional', label: 'Internacional' },
  { href: '/sobre', label: 'Sobre' },
]

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [query, setQuery] = useState('')
  const router = useRouter()
  const pathname = usePathname()

  function submitSearch(e: React.FormEvent) {
    e.preventDefault()
    const q = query.trim()
    if (!q) return
    setMenuOpen(false)
    router.push(`/busca?q=${encodeURIComponent(q)}`)
  }

  return (
    <header className="bg-ink-paper text-ink-foreground">
      {/* faixa superior — masthead */}
      <div className="border-b-4 border-primary">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-6">
          <Link href="/" className="group flex items-center gap-3" aria-label="INSURGÊNCIA — página inicial">
            <span aria-hidden="true" className="h-12 w-2 shrink-0 bg-primary sm:h-16" />
            <span className="flex flex-col leading-none">
              <span className="masthead text-4xl text-ink-foreground sm:text-6xl">
                INSURGÊNCIA
              </span>
              <span className="mt-2 font-sans text-xs uppercase tracking-[0.35em] text-ink-muted sm:text-sm">
                Acumular para Irromper
              </span>
            </span>
          </Link>

          {/* busca — desktop */}
          <form
            onSubmit={submitSearch}
            className="hidden items-center border-2 border-ink-muted/50 bg-ink/40 lg:flex"
            role="search"
          >
            <label htmlFor="busca-desktop" className="sr-only">
              Buscar textos
            </label>
            <input
              id="busca-desktop"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar no arsenal..."
              className="w-52 bg-transparent px-3 py-2 font-sans text-sm text-ink-foreground placeholder:text-ink-muted focus:outline-none"
            />
            <button
              type="submit"
              className="flex h-full items-center border-l-2 border-ink-muted/50 px-3 text-ink-foreground transition-colors hover:bg-primary"
              aria-label="Buscar"
            >
              <Search className="h-4 w-4" />
            </button>
          </form>

          {/* botão menu — mobile */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="flex items-center gap-2 border-2 border-ink-muted/60 px-3 py-2 font-sans text-sm uppercase tracking-wide lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="menu-principal"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            Menu
          </button>
        </div>
      </div>

      {/* navegação — desktop */}
      <nav aria-label="Navegação principal" className="hidden border-b-2 border-ink-muted/30 lg:block">
        <ul className="mx-auto flex max-w-6xl flex-wrap items-stretch px-2">
          {navItems.map((item) => {
            const active =
              item.href === '/'
                ? pathname === '/'
                : pathname.startsWith(item.href)
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block px-3 py-3 font-sans text-sm font-medium uppercase tracking-wide transition-colors hover:bg-primary hover:text-primary-foreground ${
                    active ? 'bg-primary text-primary-foreground' : ''
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>

      {/* menu — mobile */}
      {menuOpen && (
        <nav
          id="menu-principal"
          aria-label="Navegação principal"
          className="border-b-2 border-ink-muted/30 lg:hidden"
        >
          <form onSubmit={submitSearch} role="search" className="flex border-b border-ink-muted/30 p-3">
            <label htmlFor="busca-mobile" className="sr-only">
              Buscar textos
            </label>
            <input
              id="busca-mobile"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar no arsenal..."
              className="w-full border-2 border-ink-muted/50 bg-ink/40 px-3 py-2 font-sans text-sm text-ink-foreground placeholder:text-ink-muted focus:outline-none"
            />
            <button type="submit" className="ml-2 border-2 border-ink-muted/50 px-3" aria-label="Buscar">
              <Search className="h-4 w-4" />
            </button>
          </form>
          <ul className="flex flex-col">
            {navItems.map((item) => (
              <li key={item.href} className="border-b border-ink-muted/20">
                <Link
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-4 py-3 font-sans text-base font-medium uppercase tracking-wide"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}

export { categories }
