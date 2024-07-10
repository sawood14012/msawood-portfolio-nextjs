import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Meer Sawood",
  description: "Portfolio of Meer Sawood",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script strategy="beforeInteractive" src="/tag.js" />
        <Script strategy="beforeInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-YCWGZB20CY"></Script>
        <Script strategy="beforeInteractive" src="/analytics.js" />
      </head>
      <body className={inter.className}>
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-THDJ56GX"
          height="0" width="0" className="display:none;visibility:hidden"></iframe></noscript>
        {children}
      </body>
    </html>
  );
}
