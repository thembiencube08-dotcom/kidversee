import React from 'react';
import '../../styles/tailwind.css';

export const metadata = {
  title: 'Popees Admin',
  description: 'Admin panel for Popees store management.',
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
