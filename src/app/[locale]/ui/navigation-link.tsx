'use client';

import { Link } from '@/navigation';
import clsx from 'clsx';
import { useSelectedLayoutSegment } from 'next/navigation';
import { ComponentProps } from 'react';

export default function NavigationLink({ href, ...rest }: ComponentProps<typeof Link>) {
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/';
  const isActive = pathname === href;

  return (
    <Link
      className={clsx('block px-4 py-2 text-sm font-medium capitalize lg:px-3 lg:py-1', {
        'rounded bg-primary text-white': isActive,
        'hover:text-primary': !isActive,
      })}
      href={href}
      {...rest}
    />
  );
}
