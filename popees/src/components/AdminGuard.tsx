'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { isAdminLoggedIn } from '@/lib/adminAuth';

export default function AdminGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    if (!isAdminLoggedIn()) {
      router.replace('/admin/login');
    } else {
      setChecking(false);
    }
  }, [router]);

  if (checking) {
    return (
      <div className="min-h-screen bg-[#fff0f5] flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-[#ff2d78] flex items-center justify-center shadow-lg shadow-pink-200 animate-pulse">
            <span className="text-white font-black text-lg leading-none">P</span>
          </div>
          <p className="text-sm text-gray-400">Checking session…</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
