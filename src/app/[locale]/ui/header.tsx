'use client';

import NavLinks from '@/app/[locale]/ui/nav-links';
import useScrollPosition from '@/hooks/useScrollPosition';
import { Link } from '@/navigation';
import clsx from 'clsx';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

export default function Header() {
  const position = useScrollPosition();

  return (
    <header
      className={clsx('fixed left-0 top-0 z-50 w-full border-b bg-gradient-to-b from-[#94D9FF] to-white duration-500', {
        'lg:shadow-md': position !== 0,
      })}
    >
      <div className='vnn-container'>
        <div
          className={twMerge(
            clsx('flex items-center justify-between py-1 duration-500', {
              'lg:py-2': position === 0,
            }),
          )}
        >
          {/* Logo */}
          <div className='flex'>
            <Link href='/' className='flex items-center self-stretch'>
              <Image src='/images/logo.png' alt='Logo NOK' width={100} height={31} quality={100} priority />
            </Link>
            <Image
              src='/images/vietnam.png'
              alt='Vietnam flag'
              width={40}
              height={37}
              className={clsx('duration-500 ease-in-out', {
                'lg:translate-y-1': position !== 0,
                'lg:translate-y-2': position === 0,
              })}
            />
          </div>

          {/* Menu */}
          <NavLinks />
        </div>
      </div>
    </header>
  );
}
