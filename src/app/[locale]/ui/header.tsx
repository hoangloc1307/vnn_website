'use client';

import HamburgerMenu from '@/app/[locale]/ui/hamburger-menu';
import NavLinks from '@/app/[locale]/ui/nav-links';
import useScrollPosition from '@/hooks/useScrollPosition';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

export const MENUS = [
  { href: '/about-us', title: 'Thông tin' },
  { href: '/products', title: 'Sản phẩm' },
  { href: '/news', title: 'Tin tức' },
  { href: '/csr', title: 'Hoạt động CSR' },
  { href: '/jobs', title: 'Tuyển dụng' },
  { href: '/contact', title: 'Liên hệ' },
] as const;

export default function Header() {
  const position = useScrollPosition();

  return (
    <header
      className={clsx(
        'sticky top-0 z-50 border-b bg-gradient-to-b from-[#94D9FF] to-white transition-shadow',
        {
          'drop-shadow-md': position !== 0,
        },
      )}
    >
      <div className='vnn-container'>
        <div
          className={twMerge(
            clsx(
              'flex items-center justify-between py-1 transition-all lg:py-4',
              {
                'lg:py-2': position !== 0,
              },
            ),
          )}
        >
          {/* Logo */}
          <div className='flex items-center'>
            <Link href='/' className='flex items-center self-stretch'>
              <Image
                src='/images/logo.png'
                alt='Logo NOK'
                width={100}
                height={31}
                quality={100}
                priority
              />
            </Link>
            <Image
              src='/images/vietnam.png'
              alt='Vietnam flag'
              width={50}
              height={47}
              quality={100}
            />
          </div>
          {/* Menu mobile */}
          <div className='block lg:hidden'>
            <HamburgerMenu menus={[...MENUS]} />
          </div>

          {/* Menu */}
          <div className='hidden lg:block'>
            <NavLinks menus={[...MENUS]} />
          </div>
        </div>
      </div>
    </header>
  );
}
