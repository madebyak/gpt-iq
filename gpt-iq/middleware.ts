import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n'; // Import from i18n.ts

export default createMiddleware({
  // A list of all locales that are supported
  locales: locales,

  // Used when no locale matches
  defaultLocale: defaultLocale
});

export const config = {
  // Match only internationalized pathnames
  // Skip API routes, static files (_next), etc.
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|fonts).*)']
};
