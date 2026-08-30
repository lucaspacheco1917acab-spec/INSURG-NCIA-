import Link from 'next/link'
import { Clock } from 'lucide-react'
import { formatDate, type Post } from '@/lib/content'
import { CategoryBadge } from '@/components/category-badge'

export function PostCard({ post }: { post: Post }) {
  return (
    <article className="surface-card group flex h-full flex-col overflow-hidden rounded-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-[0_12px_40px_-12px_oklch(0.585_0.238_27_/_0.5)]">
      <div className="flex items-center justify-between border-b border-border/60 px-4 py-2.5">
        <CategoryBadge slug={post.category} />
        <span className="font-sans text-xs uppercase tracking-wider text-muted-foreground">
          {formatDate(post.date)}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-sans text-xl font-bold uppercase leading-tight tracking-tight text-pretty">
          <Link href={`/artigo/${post.slug}`} className="transition-colors hover:text-primary">
            {post.title}
          </Link>
        </h3>
        <p className="mt-3 flex-1 font-serif text-sm leading-relaxed text-foreground/80">
          {post.excerpt}
        </p>
        <div className="mt-4 flex items-center justify-between border-t border-border/40 pt-3">
          <span className="font-serif text-xs italic text-muted-foreground">{post.author}</span>
          <span className="flex items-center gap-1 font-sans text-xs uppercase tracking-wide text-muted-foreground">
            <Clock className="h-3 w-3" />
            {post.readingMinutes} min
          </span>
        </div>
      </div>
    </article>
  )
}
