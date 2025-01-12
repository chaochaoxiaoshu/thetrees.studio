import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowUpIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ScrollToTopButtonProps {
  className?: string
}

export default function ScrollToTopButton(props: ScrollToTopButtonProps) {
  const { className } = props

  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // 当页面滚动超过 200px 时显示按钮
      setShow(window.scrollY > 200)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // 添加平滑滚动效果
    })
  }

  if (!show) return null

  return (
    <Button
      variant='outline'
      size='icon'
      className={cn(className)}
      aria-label='Scroll to top'
      onClick={scrollToTop}
    >
      <ArrowUpIcon className='size-4' />
    </Button>
  )
}
