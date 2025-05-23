'use client';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { CiMenuFries } from 'react-icons/ci';
import { links } from './Nav';

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className='flex items-center justify-center '>
        <CiMenuFries className='text-[32px] text-accent-default' />
      </SheetTrigger>
      <SheetContent className='flex flex-col'>
        {/* logo */}
        <div className='mt-32 mb-40 text-center text-2xl'>
          <Link href='/'>
            <h1 className='text-4xl font-semibold'>
              Joey <span className='text-accent-default'>.</span>
            </h1>
          </Link>
        </div>

        {/* nav links */}
        <nav className='flex flex-col gap-8 justify-center items-center'>
          {links.map((link, index) => {
            return (
              <Link
                key={index}
                href={link.path}
                className={`${
                  link.path === pathname && 'text-accent-default border-b-2 border-accent-default'
                } text-xl font-semibold hover:text-accent-hover transition-all`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
