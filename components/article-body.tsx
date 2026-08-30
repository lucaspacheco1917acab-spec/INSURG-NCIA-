export function ArticleBody({ body }: { body: string[] }) {
  return (
    <div className="flex flex-col gap-6">
      {body.map((block, i) => {
        if (block.startsWith('## ')) {
          return (
            <h2
              key={i}
              className="mt-4 border-l-4 border-primary pl-4 font-sans text-2xl font-bold uppercase tracking-tight text-foreground"
            >
              {block.replace('## ', '')}
            </h2>
          )
        }
        if (block.startsWith('> ')) {
          return (
            <blockquote
              key={i}
              className="border-y-2 border-primary bg-ink px-6 py-5 font-sans text-xl font-medium uppercase leading-snug tracking-tight text-ink-foreground"
            >
              <span className="text-primary">“</span>
              {block.replace('> ', '')}
              <span className="text-primary">”</span>
            </blockquote>
          )
        }
        return (
          <p key={i} className="font-serif text-lg leading-relaxed text-foreground/90">
            {block}
          </p>
        )
      })}
    </div>
  )
}
