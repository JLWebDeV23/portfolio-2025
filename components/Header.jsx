import Link from 'next/link';

// components
import Nav from './Nav';
import { Button } from './ui/button';
import MobileNav from './MobileNav';

const Header = () => {
  return (
    <header className='relative  py-8 xl:py-12 text-white'>
      <div className='container mx-auto flex justify-between items-center'>
        {/* logo */}
        <Link href='/'>
          <h1 className='text-4xl font-semibold'>
            Joey <span className='text-accent-default'>.</span>
          </h1>
        </Link>

        {/* desktop nav & hire me button */}
        <div className='hidden xl:flex items-center justify-between gap-8'>
          <Nav />
          <Link href='/contact' className='btn btn-accent'>
            <Button variant='outline' className='text-white'>
              Hire me
            </Button>
          </Link>
        </div>

        {/* mobile nav */}
        <div className='xl:hidden'>
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
