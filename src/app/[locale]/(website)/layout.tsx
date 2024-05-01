import Footer from '@/app/[locale]/ui/footer';
import Header from '@/app/[locale]/ui/header';

export default function WebsiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  );
}
