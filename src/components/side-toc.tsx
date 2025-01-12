import { cn } from '@/lib/utils'
import type { MarkdownHeading } from 'astro'

interface SideTocProps {
  headings: MarkdownHeading[]
  className?: string
}

export default function SideToc(props: SideTocProps) {
  const { headings, className } = props
  return (
    <nav
      className={cn(
        'sticky top-[5.5rem] hidden xl:block h-[calc(100vh-8rem)] overflow-y-auto',
        className
      )}
    >
      <div className='flex justify-end'>
        <div className='flex flex-col gap-y-2'>
          <h2 className='text-lg font-medium mb-2 ml-6'>目录</h2>
          <ul className='flex flex-col gap-y-1'>
            {headings.map((heading) => (
              <li
                key={heading.slug}
                className='text-sm leading-loose'
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
        </div>
      </div>
    </nav>
  )
}
