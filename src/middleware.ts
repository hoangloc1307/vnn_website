import { defaultLocale, locales, localePrefix } from '@/constants/locales';
import createMiddleware from 'next-intl/middleware';

export default createMiddleware({ locales, defaultLocale, localePrefix });

export const config = {
  matcher: ['/', '/(vi|en)/:path*'],
};
