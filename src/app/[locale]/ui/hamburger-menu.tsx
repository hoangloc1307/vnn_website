'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Bars3Icon } from '@heroicons/react/24/solid';

type Props = {
  menus: {
    href: string;
    title: string;
  }[];
};

export default function HamburgerMenu({ menus }: Props) {
  const pathname = usePathname();
  const [show, setShow] = useState(false);

  useEffect(() => {
    document.body.style.overflow = show ? 'hidden' : 'unset';
  }, [show]);

  return (
    <div>
      {/* Hamburger icon */}
      <span
        className='inline-block cursor-pointer p-3'
        onClick={() => setShow(true)}
      >
        <Bars3Icon className='size-6 text-dark' />
      </span>

      {/* List */}
      <nav
        className={clsx(
          'fixed right-0 top-0 z-20 h-screen overflow-hidden bg-white transition-all',
          {
            'w-60': show,
            'w-0': !show,
          },
        )}
      >
        <ul className='flex flex-col whitespace-nowrap p-4'>
          {menus.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={clsx(
                  'block p-3 font-semibold text-dark hover:text-primary',
                  {
                    'rounded-xl bg-primary text-white': item.href === pathname,
                  },
                )}
                onClick={() => setShow(false)}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Backdrop */}
      <div
        className={clsx(
          'fixed left-0 top-0 z-10 h-screen w-screen bg-black bg-opacity-40 transition-opacity',
          {
            'pointer-events-auto opacity-100': show,
            'pointer-events-none opacity-0': !show,
          },
        )}
        onClick={() => setShow(false)}
      />
    </div>
  );
}
