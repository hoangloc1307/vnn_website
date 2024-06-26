import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import { getMessages, unstable_setRequestLocale } from 'next-intl/server';
import { Montserrat } from 'next/font/google';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { locales } from '~/constants/locales';
import '~/styles/globals.css';

config.autoAddCss = false;

const montserrat = Montserrat({ subsets: ['vietnamese'] });

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function RootLayout({ children, params: { locale } }: Props) {
  unstable_setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} className='scroll-smooth'>
      <link rel='icon' type='image/png' sizes='32x32' href='/favicons/favicon-32x32.png' />
      <link rel='icon' type='image/png' sizes='16x16' href='/favicons/favicon-16x16.png' />
      <link rel='apple-touch-icon' href='/favicons/apple-touch-icon.png' />
      <link rel='manifest' href='/favicons/site.webmanifest' />
      <body className={`${montserrat.className} antialiased`}>
        <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
