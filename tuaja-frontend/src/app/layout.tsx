'use client'
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from './providers';
import NavBar from '@/components/shared/header/NavBar';
import { LanguageProvider } from '@/components/context/LanguageContext';

const inter = Inter({ subsets: ['latin'] });

const metadata: Metadata = {
  title: 'tuaja',
  description: 'tuaja luxury resorts',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <LanguageProvider>
            <header >
              <link rel="icon" href="/NavLogo.png" />
            <NavBar />
          </header>
          {children}
          </LanguageProvider>
        </Providers>
      </body>
    </html>
  );
}
