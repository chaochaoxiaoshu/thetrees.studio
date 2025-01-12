import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ArrowLeft, ArrowRight } from 'lucide-react'

interface PostNavigationProps {
  className?: string
  previousPost: { title: string; slug: string } | null
  nextPost: { title: string; slug: string } | null
}

export default function PostNavigation(props: PostNavigationProps) {
  const { previousPost, nextPost, className } = props

  return (
    <div className={cn('flex flex-col md:flex-row gap-4', className)}>
      {previousPost && (
        <Button
          variant='outline'
          className='md:flex-1 flex gap-4 min-h-16 h-auto'
          asChild
        >
          <a href={`/blog/${previousPost?.slug}`}>
            <ArrowLeft className='flex-none' />
            <div className='flex-auto flex flex-col gap-2'>
              <span className='text-xs text-muted-foreground'>上一篇</span>
              <span className='text-ellipsis text-pretty text-left text-sm'>
                {previousPost?.title ?? '无'}
              </span>
            </div>
          </a>
        </Button>
      )}
      {nextPost && (
        <Button
          variant='outline'
          className='md:flex-1 flex gap-4 min-h-16 h-auto'
          asChild
        >
          <a href={`/blog/${nextPost?.slug}`}>
            <div className='flex-auto flex flex-col items-end gap-1.5'>
              <span className='text-xs text-muted-foreground'>下一篇</span>
              <span className='text-ellipsis text-pretty text-left text-sm'>
                {nextPost?.title ?? '无'}
              </span>
            </div>
            <ArrowRight className='flex-none' />
          </a>
        </Button>
      )}
    </div>
  )
}
