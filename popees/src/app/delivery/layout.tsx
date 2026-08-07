import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Popees Delivery',
  description: 'Popees delivery person app',
};

export default function DeliveryLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif", background: '#F0F2F8', minHeight: '100vh' }}>
      {children}
    </div>
  );
}
