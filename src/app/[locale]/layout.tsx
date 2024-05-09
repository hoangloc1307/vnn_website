import { config } from '@fortawesome/fontawesome-svg-core';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import { Montserrat } from 'next/font/google';

import '@/styles/globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

config.autoAddCss = false;

const montserrat = Montserrat({ subsets: ['vietnamese'] });

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export default function RootLayout({ children, params: { locale } }: Props) {
  return (
    <html lang={locale} className='scroll-smooth'>
      <body className={`${montserrat.className} antialiased`}>
        <NextIntlClientProvider messages={useMessages()} locale={locale}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
