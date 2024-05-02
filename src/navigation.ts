import { localePrefix, locales } from '@/constants/locales';
import { createSharedPathnamesNavigation } from 'next-intl/navigation';

export const { Link, redirect, usePathname, useRouter } = createSharedPathnamesNavigation({ locales, localePrefix });
