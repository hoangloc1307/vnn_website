import createMiddleware from 'next-intl/middleware';
import { defaultLocale, localePrefix, locales } from '~/constants/locales';

export default createMiddleware({ locales, defaultLocale, localePrefix });

export const config = {
  matcher: ['/', '/(vi|en)/:path*'],
};
