import type { Metadata } from "next";
import "./globals.css";
import { notFound } from 'next/navigation';
import { locales } from "../../i18n"; // Import locales

// No need for NextIntlClientProvider here if using Server Components primarily for text

export const metadata: Metadata = {
  title: "gpt-iq", // We can internationalize this later if needed
  description: "Your intelligent Iraqi dialect AI assistant",
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export default function RootLayout({
  children,
  params: { locale }
}: Readonly<RootLayoutProps>) {

  // Validate locale
  if (!locales.includes(locale)) {
       console.warn(`Invalid locale detected: ${locale}. Add it to i18n.ts if needed.`);
       // Decide how to handle invalid locale, maybe redirect or use default? For now log warning.
       // notFound(); // Or uncomment this to show a 404 for invalid locales
  }

  // Determine text direction
  const direction = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <html lang={locale} dir={direction}>
      <body>
        {/* We will add Providers (Theme, Auth) here later */}
        {children}
      </body>
    </html>
  );
}
