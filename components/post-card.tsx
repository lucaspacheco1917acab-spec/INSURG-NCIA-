import Link from 'next/link'
import { Clock } from 'lucide-react'
import { formatDate, type Post } from '@/lib/content'
import { CategoryBadge } from '@/components/category-badge'

export function PostCard({ post }: { post: Post }) {
  return (
    <article className="flex h-full flex-col border-2 border-ink bg-card">
      <div className="flex items-center justify-between border-b-2 border-ink bg-ink px-3 py-2">
        <CategoryBadge slug={post.category} />
        <span className="font-sans text-xs uppercase tracking-wider text-ink-muted">
          {formatDate(post.date)}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-4">
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
