import { createSharedPathnamesNavigation } from 'next-intl/navigation';
import { localePrefix, locales } from '~/constants/locales';

export const { Link, redirect, usePathname, useRouter } = createSharedPathnamesNavigation({ locales, localePrefix });
