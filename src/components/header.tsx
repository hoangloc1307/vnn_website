'use client';

import clsx from 'clsx';
import Image from 'next/image';
import NavLinks from '~/components/navigation';
import useScrollPosition from '~/hooks/useScrollPosition';
import { Link } from '~/navigation';

export default function Header() {
  const position = useScrollPosition();

  return (
    <header
      className={clsx(
        'fixed left-0 top-0 z-50 w-full select-none border-b bg-gradient-to-b from-[#94D9FF] to-white duration-300',
        {
          'lg:shadow-md': position !== 0,
        },
      )}
    >
      <div className='container'>
        <div
          className={clsx('flex items-center justify-between py-1 duration-300', {
            'lg:py-2': position === 0,
          })}
        >
          {/* Logo */}
          <div>
            <Link href='/' className='flex items-center self-stretch'>
              <Image src='/images/logo.png' alt='Logo Vietnam NOK' width={100} height={31} quality={100} priority />
              <Image src='/images/vietnam.png' alt='Vietnam flag' width={40} height={37} className='lg:translate-y-1' />
            </Link>
          </div>

          {/* Menu */}
          <div>
            <NavLinks />
          </div>
        </div>
      </div>
    </header>
  );
}
