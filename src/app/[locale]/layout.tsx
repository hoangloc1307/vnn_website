import '@/app/globals.css';
import type { Metadata } from 'next';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['vietnamese'] });

export const metadata: Metadata = {
  title: 'Việt Nam NOK',
  description:
    'Việt Nam NOK thuộc tập đoàn NOK Nhật Bản là nhà sản xuất hàng đầu thế giới cho các sản phẩm roon-phốt chặn kín cao su, phục vụ trong ngành sản xuất xe hơi, xe máy và 1 số máy móc chính xác khác, ...',
};

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export default function RootLayout({ children, params: { locale } }: Props) {
  return (
    <html lang={locale}>
      <body className={`${montserrat.className} antialiased lg:overflow-y-auto`}>
        <NextIntlClientProvider messages={useMessages()} locale={locale}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
