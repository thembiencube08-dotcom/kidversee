'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { getSupplierSession, logoutSupplier, isSupplierLoggedIn } from '@/lib/supplierAuth';

const navItems = [
  { label: 'Dashboard', href: '/supplier', icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg> },
  { label: 'My Products', href: '/supplier/products', icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg> },
  { label: 'Add Product', href: '/supplier/products/new', icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" /></svg> },
  { label: 'Reviews', href: '/supplier/reviews', icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg> },
  { label: 'Orders', href: '/supplier/orders', icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg> },
  { label: 'Profile', href: '/supplier/profile', icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg> },
];

export default function SupplierShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [session, setSession] = useState<{ name: string; email: string } | null>(null);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    if (!isSupplierLoggedIn()) {
      router.replace('/supplier/login');
    } else {
      setSession(getSupplierSession());
      setChecking(false);
    }
  }, [router]);

  const handleLogout = () => {
    logoutSupplier();
    router.replace('/supplier/login');
  };

  if (checking) return (
    <div className="min-h-screen bg-[#fff0f5] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 rounded-xl bg-[#ff2d78] flex items-center justify-center shadow-lg shadow-pink-200 animate-pulse">
          <span className="text-white font-black text-lg">P</span>
        </div>
        <p className="text-sm text-gray-400">Loading supplier portal…</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#fff0f5] flex">
      {sidebarOpen && <div className="fixed inset-0 z-30 bg-black/40 lg:hidden" onClick={() => setSidebarOpen(false)} />}

      {/* Sidebar */}
      <aside className={`fixed top-0 left-0 z-40 h-full w-[220px] bg-white border-r border-pink-100 shadow-sm flex flex-col transition-transform duration-300
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:static lg:z-auto`}>
        <div className="flex items-center gap-2 px-5 h-14 border-b border-pink-100 flex-shrink-0">
          <img src="https://www.popees.com/cdn/shop/files/popees_logo.gif?v=1775814201&width=500"
            alt="Popees" className="h-8 w-auto object-contain mix-blend-multiply" />
          <span className="text-[10px] text-[#ff2d78] font-bold tracking-widest uppercase">Supplier</span>
        </div>

        <nav className="flex-1 py-4 px-3 overflow-y-auto">
          <p className="text-[10px] font-semibold text-pink-300 uppercase tracking-widest px-2 mb-2">Menu</p>
          <ul className="space-y-0.5">
            {navItems.map((item) => {
              const active = pathname === item.href || (item.href !== '/supplier' && pathname.startsWith(item.href));
              return (
                <li key={item.href}>
                  <Link href={item.href} onClick={() => setSidebarOpen(false)}
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                      active ? 'bg-[#ff2d78] text-white shadow-sm' : 'text-gray-500 hover:text-[#ff2d78] hover:bg-pink-50'
                    }`}>
                    <span className={active ? 'text-white' : 'text-gray-400'}>{item.icon}</span>
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="px-3 py-4 border-t border-pink-100 flex-shrink-0">
          <Link href="/" className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-gray-400 hover:text-[#ff2d78] hover:bg-pink-50 transition-all">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
            View Store
          </Link>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-14 border-b border-pink-100 bg-white shadow-sm flex items-center justify-between px-5 sticky top-0 z-20">
          <button className="lg:hidden p-2 rounded-md text-gray-400 hover:text-[#ff2d78] hover:bg-pink-50"
            onClick={() => setSidebarOpen(!sidebarOpen)}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
          <div className="hidden lg:block" />
          <div className="flex items-center gap-3">
            {session && (
              <div className="hidden sm:block text-right">
                <p className="text-xs font-semibold text-gray-700 leading-none">{session.name}</p>
                <p className="text-[10px] text-gray-400 mt-0.5">{session.email}</p>
              </div>
            )}
            <div className="w-7 h-7 rounded-full bg-[#ff2d78] flex items-center justify-center">
              <span className="text-white text-xs font-bold">{session?.name?.[0]?.toUpperCase() ?? 'S'}</span>
            </div>
            <button onClick={handleLogout}
              className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-red-500 border border-gray-200 hover:border-red-200 px-2.5 py-1.5 rounded-lg transition-all">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
              Sign out
            </button>
          </div>
        </header>

        <main className="flex-1 p-6 overflow-auto bg-[#fff0f5]">
          {children}
        </main>
      </div>
    </div>
  );
}
