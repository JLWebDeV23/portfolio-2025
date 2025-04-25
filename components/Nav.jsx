'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  {
    name: 'home',
    path: '/',
  },
  {
    name: 'services',
    path: '/services',
  },
  {
    name: 'resume',
    path: '/resume',
  },
  {
    name: 'work',
    path: '/work',
  },
  {
    name: 'contact',
    path: '/contact',
  },
];

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className='flex items-center gap-8'>
      {links.map((link, index) => {
        return (
          <Link
            key={index}
            href={`${link.path}`}
            className={`${
              link.path === pathname && 'text-accent-default border-b-2 border-accent-default '
            } capitalize font-medium hover:text-accent-hover transition-all 
              `}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export { Nav, links };
