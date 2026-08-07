import React from 'react';
import type { Metadata, Viewport } from 'next';
import '../styles/tailwind.css';
import { CartProvider } from '@/lib/cartContext';
import ShopAssistant from '@/components/ShopAssistant';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'Popees — Premium Baby Care',
  description: 'Trusted baby clothing, diapers, bamboo collection and care products. Crafted with love for your little ones.',
  icons: {
    icon: [{ url: '/favicon.ico', type: 'image/x-icon' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&family=Pacifico&display=swap" rel="stylesheet" />
      </head>
      <body>
        <CartProvider>
          {children}
          <ShopAssistant />
        </CartProvider>
      </body>
    </html>
  );
}
