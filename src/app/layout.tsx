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
        <Script strategy="afterInteractive" src="/tag.js" />
        <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-YCWGZB20CY"></Script>
        <Script strategy="afterInteractive" src="/analytics.js" />
        <Script strategy="lazyOnload" src="https://topmate-embed.s3.ap-south-1.amazonaws.com/v1/topmate-embed.js" user-profile="https://topmate.io/embed/profile/msawood?theme=E18C45" btn-style='{"backgroundColor":"#000","color":"#fff","border":"1px solid #000"}' embed-version="v1" button-text="Let's Connect" position-right="30px" position-bottom="30px" custom-padding="0px" custom-font-size="16px" custom-font-weight="500" custom-width="200px" ></Script>
      </head>
      <body className={inter.className}>
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-THDJ56GX"
          height="0" width="0" className="display:none;visibility:hidden"></iframe></noscript>
        {children}
      </body>
    </html>
  );
}
