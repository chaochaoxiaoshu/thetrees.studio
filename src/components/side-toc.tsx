import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'
import type { MarkdownHeading } from 'astro'

interface SideTocProps {
  headings: MarkdownHeading[]
  className?: string
}

export default function SideToc(props: SideTocProps) {
  const { headings, className } = props

  const [activeId, setActiveId] = useState<string>('')

  // 添加滚动监听
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-100px 0% -66%' }
    )

    // 观察所有标题元素
    headings.forEach((heading) => {
      const element = document.getElementById(heading.slug)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [headings])

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
                  className={cn(
                    'text-muted-foreground hover:text-foreground',
                    activeId === heading.slug && 'text-foreground'
                  )}
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
