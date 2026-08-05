'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Box, ShoppingBag, ClipboardList, Users, Sparkles, Home, CreditCard, ShieldCheck, ChevronRight } from 'lucide-react';

const navItems = [
  { label: 'Dashboard', href: '/admin', icon: LayoutDashboard },
  { label: 'Products', href: '/admin/products', icon: Box },
  { label: 'Orders', href: '/admin/orders', icon: CreditCard },
  { label: 'Customers', href: '/admin/customers', icon: Users },
  { label: 'Collections', href: '/admin/collections', icon: Sparkles },
  { label: 'Categories', href: '/admin/categories', icon: ClipboardList },
  { label: 'Media Library', href: '/admin/media', icon: Home },
  { label: 'Reports', href: '/admin/reports', icon: ShieldCheck },
];

export default function AdminShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-[#f8f7f6] text-gray-900">
      <div className="grid min-h-screen grid-cols-1 xl:grid-cols-[280px_1fr]">
        <aside className="border-r border-gray-200 bg-white px-5 py-7 shadow-sm">
          <div className="mb-10 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-pink-100 text-pink-700">
              <Sparkles size={22} />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-600">Popees Admin</p>
              <p className="text-xs text-gray-500">Store Manager</p>
            </div>
          </div>
          <nav className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group flex items-center justify-between rounded-3xl px-4 py-3 text-sm font-medium transition ${
                    active ? 'bg-pink-600 text-white shadow-sm' : 'text-gray-700 hover:bg-pink-50 hover:text-pink-700'
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <Icon className="h-4 w-4" />
                    {item.label}
                  </span>
                  <ChevronRight className="h-4 w-4" />
                </Link>
              );
            })}
          </nav>
        </aside>

        <section className="px-4 py-6 sm:px-6 lg:px-8">{children}</section>
      </div>
    </div>
  );
}
