'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import useScrollPosition from '@/hooks/useScrollPosition';

type Props = {
  menus: {
    href: string;
    title: string;
  }[];
};

export default function NavLinks({ menus }: Props) {
  const pathname = usePathname();
  const position = useScrollPosition();

  return (
    <nav>
      <ul
        className={clsx('flex transition-all', {
          'border-b-2 border-primary pb-2': position === 0,
        })}
      >
        {menus.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={clsx('block px-4 py-2 font-semibold text-dark', {
                'rounded bg-primary text-white': item.href === pathname,
                'hover:text-primary': item.href !== pathname,
              })}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
