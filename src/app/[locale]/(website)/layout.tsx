import Footer from '@/app/ui/footer';
import Header from '@/app/ui/header';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Vietnam NOK',
    default: 'Vietnam NOK',
  },
};

export default function WebsiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main className='bg-[#f1f2f6] pt-12 lg:pt-[58px]'>{children}</main>
      <Footer />
    </>
  );
}
