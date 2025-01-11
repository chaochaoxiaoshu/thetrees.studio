import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { MenuIcon } from 'lucide-react'
import TheTreesLogo from '@/components/thetrees-logo'

export default function Header() {
  return (
    <div className='z-50 sticky top-0 inset-x-0 h-16 bg-background/60 backdrop-blur-md'>
      <header className='container flex justify-between items-center h-full'>
        <a href='/' aria-label='TheTrees Logo'>
          <TheTreesLogo />
        </a>
        <nav>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant='outline'
                size='icon'
                className='size-9 md:hidden'
              >
                <MenuIcon className='size-4' />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent side='bottom' align='end'>
              <DropdownMenuItem asChild>
                <a href='/'>Home</a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href='/blog/1'>Blog</a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <ul className='hidden md:flex items-center gap-6 h-8 text-sm text-muted-foreground'>
            <li className='h-full'>
              <a
                href='/'
                className='flex items-center h-full hover:text-foreground transition-colors duration-300'
              >
                Home
              </a>
            </li>
            <li className='h-full'>
              <a
                href='/blog/1'
                className='flex items-center h-full hover:text-foreground transition-colors duration-300'
              >
                Blog
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  )
}
