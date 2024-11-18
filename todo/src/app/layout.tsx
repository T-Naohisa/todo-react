import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';
import { Header } from 'components/Header';
import { Sidebar } from 'components/Sidebar';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className="flex flex-row">
          <div className="w-1/5">
            <Sidebar />
          </div>
          <div className="w-4/5">{children}</div>
        </div>
      </body>
    </html>
  );
}
