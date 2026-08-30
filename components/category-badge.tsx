import Link from 'next/link'
import { getCategory, type CategorySlug } from '@/lib/content'

export function CategoryBadge({
  slug,
  asLink = true,
}: {
  slug: CategorySlug
  asLink?: boolean
}) {
  const category = getCategory(slug)
  if (!category) return null

  const className =
    'inline-block border-2 border-primary bg-primary px-2 py-0.5 font-sans text-xs font-semibold uppercase tracking-[0.15em] text-primary-foreground'

  if (!asLink) {
    return <span className={className}>{category.short}</span>
  }

  return (
    <Link
      href={category.slug === 'manifesto' ? '/manifesto' : `/categoria/${category.slug}`}
      className={`${className} transition-colors hover:bg-transparent hover:text-primary`}
    >
      {category.short}
    </Link>
  )
}
