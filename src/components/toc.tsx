import { cn } from '@/lib/utils'
import type { MarkdownHeading } from 'astro'

interface TocProps {
  className?: string
  headings: MarkdownHeading[]
}

export default function Toc(props: TocProps) {
  const { headings, className } = props
  return (
    <div className={className}>
      <nav className={cn('p-4 rounded-xl border xl:hidden')}>
        <h2 className='text-lg font-medium mb-2'>目录</h2>
        <ul className='flex flex-col gap-y-1'>
          {headings.map((heading) => (
            <li
              key={heading.slug}
              className='text-sm leading-loose list-disc'
              style={{ marginLeft: `${heading.depth * 0.75}rem` }}
            >
              <a
                href={`#${heading.slug}`}
                className='text-muted-foreground hover:text-foreground'
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
