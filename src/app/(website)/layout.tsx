import Footer from "@/app/ui/footer";
import Header from "@/app/ui/header";

export default function WebsiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <Header />
      <div className="vnn-container min-h-screen">{children}</div>
      <Footer />
    </main>
  );
}
