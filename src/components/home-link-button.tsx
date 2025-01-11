import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { ArrowUpRightIcon } from 'lucide-react'

interface LinkButtonProps {
  className?: string
  href: string
}

export default function LinkButton(props: LinkButtonProps) {
  const { className, href } = props
  return (
    <Button
      asChild
      variant='outline'
      size='icon'
      className={cn(
        'group size-10 rounded-full border hover:border-[#B3E5C8] hover:border-1.5 transition-all duration-300 ease-out',
        className
      )}
    >
      <a href={href} target='_blank' aria-label='link button'>
        <ArrowUpRightIcon className='group-hover:text-[#B3E5C8] group-hover:rotate-12 transition-transform duration-300 ease-out' />
      </a>
    </Button>
  )
}
