import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["vietnamese"] });

export const metadata: Metadata = {
  title: "Việt Nam NOK",
  description:
    "Việt Nam NOK thuộc tập đoàn NOK Nhật Bản là nhà sản xuất hàng đầu thế giới cho các sản phẩm roon-phốt chặn kín cao su, phục vụ trong ngành sản xuất xe hơi, xe máy và 1 số máy móc chính xác khác, ...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={`${montserrat.className} antialiased`}>{children}</body>
    </html>
  );
}
