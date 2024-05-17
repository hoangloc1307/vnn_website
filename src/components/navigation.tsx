'use client';

import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import LanguageSwitcher from '~/components/language-switchert';
import NavigationLink from '~/components/navigation-link';
import { MENUS } from '~/constants/menus';
import useScrollPosition from '~/hooks/useScrollPosition';

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
      {/* Mobile menu icon */}
      <span className='inline-block size-9 cursor-pointer p-2 lg:hidden' onClick={() => setShow(true)}>
        <FontAwesomeIcon icon={faBars} size='lg' />
      </span>

      {/* Navigation */}
      <nav
        className={clsx(
          'fixed right-0 top-0 z-20 h-screen w-60 bg-white p-4 duration-300',
          'lg:static lg:flex lg:h-auto lg:w-auto lg:translate-x-0 lg:items-center lg:gap-2 lg:bg-transparent lg:p-0',
          {
            'translate-x-full': !show,
            'translate-x-0': show,
            'lg:border-b-2 lg:border-primary lg:pb-2': position === 0,
          },
        )}
      >
        {/* Menu list */}
        <div>
          <ul className='flex flex-col lg:flex-row'>
            {MENUS.map((item) => (
              <li key={item.href}>
                <NavigationLink href={item.href} onClick={() => setShow(false)}>
                  {t(item.title)}
                </NavigationLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Language switcher */}
        <div>
          <LanguageSwitcher />
        </div>
      </nav>

      {/* Overlay when show menu on mobile */}
      <div
        className={clsx('fixed left-0 top-0 z-10 h-full w-full bg-black/60 duration-500 lg:hidden', {
          'pointer-events-auto opacity-100': show,
          'pointer-events-none opacity-0': !show,
        })}
        onClick={() => setShow(false)}
      />
    </div>
  );
}
