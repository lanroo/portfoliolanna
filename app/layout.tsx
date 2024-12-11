'use client';

import './globals.css';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';

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
        <meta name="description" content="Meu portfólio como desenvolvedora fullstack." />
      </head>
      <body className={`${inter.className} relative`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
