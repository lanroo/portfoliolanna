'use client';

import './globals.css';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Portfólio Developer</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Meu portfólio como desenvolvedora Web." />
      </head>
      <body className={`${inter.className} relative`}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-BDPGCGDZV6"
          strategy="afterInteractive" 
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BDPGCGDZV6');
          `}
        </Script>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
