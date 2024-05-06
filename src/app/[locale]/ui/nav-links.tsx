'use client';

import LanguageSwitcher from '@/app/[locale]/ui/language-switchert';
import NavigationLink from '@/app/[locale]/ui/navigation-link';
import { MENUS } from '@/constants/menus';
import useScrollPosition from '@/hooks/useScrollPosition';
import { Bars3Icon } from '@heroicons/react/24/solid';
import clsx from 'clsx';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';

export default function NavLinks() {
  const t = useTranslations('NavLinks');
  const position = useScrollPosition();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (show) {
      document.body.classList.add('overflow-y-hidden');
    } else {
      document.body.classList.remove('overflow-y-hidden');
    }
  }, [show]);

  return (
    <div className='flex items-center'>
      <span className='inline-block cursor-pointer p-3 lg:hidden' onClick={() => setShow(true)}>
        <Bars3Icon className='size-6' />
      </span>

      <nav
        className={clsx(
          'fixed right-0 top-0 z-20 flex h-screen w-60 flex-col gap-2 bg-white p-4 duration-500 lg:static lg:h-auto lg:w-auto lg:translate-x-0 lg:flex-row lg:items-center lg:bg-transparent lg:p-0',
          {
            'translate-x-full': !show,
            'translate-x-0': show,
            'lg:border-b-2 lg:border-primary lg:pb-2': position === 0,
          },
        )}
      >
        <ul className={clsx('flex flex-col lg:flex-row')}>
          {MENUS.map((item) => (
            <li key={item.href}>
              <NavigationLink href={item.href} onClick={() => setShow(false)}>
                {t(item.title)}
              </NavigationLink>
            </li>
          ))}
        </ul>

        <LanguageSwitcher />
      </nav>

      <div
        className={clsx('fixed left-0 top-0 z-10 h-full w-full bg-black/40 duration-500 lg:hidden', {
          'pointer-events-auto opacity-100': show,
          'pointer-events-none opacity-0': !show,
        })}
        onClick={() => setShow(false)}
      />
    </div>
  );
}
