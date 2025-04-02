// src/i18n.ts
import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';

export const locales = ['en', 'ar'] as const;
export const defaultLocale = 'ar';
export type Locale = typeof locales[number];

export default getRequestConfig(async ({locale}) => {
  // Provided locale must be valid
  if (!locales.includes(locale as any)) notFound();

  return {
    messages: (await import(`@/messages/${locale}.json`)).default // Use alias
  };
});
