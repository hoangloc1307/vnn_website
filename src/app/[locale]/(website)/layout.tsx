import { Metadata } from 'next';
import Footer from '~/components/footer/footer';
import Header from '~/components/header';

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
