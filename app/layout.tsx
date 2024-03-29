import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Elgosoft | Web Tasarım, Mobil Uygulama ve IT Hizmetleri - İleri Düzey Çözümler",
  description:
    "Elgosoft ile dijital dünyada öne çıkın. Web tasarım, mobil uygulama ve IT hizmetlerinde uzman çözümler. Hemen iletişime geçin!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <script src="./TW-ELEMENTS-PATH/dist/js/tw-elements.umd.min.js"></script>
      </body>
    </html>
  );
}
