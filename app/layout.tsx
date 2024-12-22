"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import Script from "next/script";
import { I18nextProvider } from "react-i18next";
import i18n from "@/src/i18n";
import { useState, useEffect } from "react";
import LoadingPage from "@/components/LoadingPage"; // Certifique-se de ter o componente no local correto

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simula o carregamento inicial da aplicação
    const timer = setTimeout(() => setIsLoading(false), 2000); // Tempo de 2 segundos
    return () => clearTimeout(timer); // Limpa o timer ao desmontar o componente
  }, []);

  if (isLoading) {
    // Renderiza a página de carregamento
    return (
      <html lang="en">
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Carregando...</title>
        </head>
        <body className={`${inter.className} relative`}>
          <LoadingPage />
        </body>
      </html>
    );
  }

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Portfólio Developer</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Meu portfólio como desenvolvedora Web."
        />
      </head>
      <body className={`${inter.className} relative`}>
        {/* Google Analytics */}
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

        {/* Provedor de Tradução */}
        <I18nextProvider i18n={i18n}>{children}</I18nextProvider>

        <Toaster />
      </body>
    </html>
  );
}
