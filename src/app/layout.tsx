import type { Metadata } from "next";
import "./globals.css";
import { Locale, locales } from "@/i18n"; 

export const metadata: Metadata = {
  title: "gpt-iq",
  description: "Your intelligent Iraqi dialect AI assistant",
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: Locale;
  };
}

export default function RootLayout({
  children,
  params: { locale }
}: Readonly<RootLayoutProps>) {

  if (!locales.includes(locale)) {
     console.warn(`[Layout] Received invalid locale param: ${locale}`);
  }

  const direction = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <html lang={locale} dir={direction}>
      <body>
        {children}
      </body>
    </html>
  );
}
