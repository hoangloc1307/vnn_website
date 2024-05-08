import Footer from '@/app/[locale]/ui/footer';
import Header from '@/app/[locale]/ui/header';

export default function WebsiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main className='min-h-screen bg-[#f1f2f6] pt-12 lg:pt-[58px]'>{children}</main>
      <Footer />
    </>
  );
}
