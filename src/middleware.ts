// src/middleware.ts
import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n'; // Import from sibling file

// Optional: Add console.log here for debugging if needed later
// console.log(`[Middleware File] Evaluating middleware.ts at ${new Date().toISOString()}`);

export default createMiddleware({
  locales: locales,
  defaultLocale: defaultLocale,
  localePrefix: 'always' // Explicit prefix strategy
});

export const config = {
  // Match all paths except ones starting with /api, /_next/static, /_next/image, or contain a dot (likely assets)
  // Also exclude favicon.ico and fonts/ explicitly if needed
  matcher: ['/((?!api|_next/static|_next/image|.*\\..*).*)']
  // Simpler alternative matcher if the above is too complex:
  // matcher: ['/', '/(ar|en)/:path*'] // Match root and locale prefixes
};
