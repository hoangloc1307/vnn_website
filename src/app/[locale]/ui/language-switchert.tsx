'use client';

import { locales } from '@/constants/locales';
import { Link, usePathname } from '@/navigation';
import Image from 'next/image';

export default function LanguageSwitcher() {
  const pathname = usePathname();

  return (
    <ul className='flex items-center justify-center gap-4 lg:gap-2'>
      {locales.map((locale, index) => (
        <li key={index}>
          <Link href={pathname} locale={locale}>
            <Image src={`/images/lang_${locale}.png`} alt={locale} width={32} height={32} className='cursor-pointer' />
          </Link>
        </li>
      ))}
    </ul>
  );
}
