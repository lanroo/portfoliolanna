import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from "@/components/ui/toaster";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Portfólio Developer',
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
        <Toaster />
      </body>
    </html>
  );
}