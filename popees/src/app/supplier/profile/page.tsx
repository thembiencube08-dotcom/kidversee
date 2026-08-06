'use client';
import React, { useState, useEffect } from 'react';
import SupplierShell from '@/components/SupplierShell';
import { getSupplierSession, getSuppliers, type SupplierUser } from '@/lib/supplierAuth';

export default function SupplierProfilePage() {
  const [user, setUser] = useState<SupplierUser | null>(null);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const session = getSupplierSession();
    if (!session) return;
    const all = getSuppliers();
    const found = all.find((s) => s.id === session.id);
    if (found) setUser(found);
  }, []);

  const inp = 'w-full border border-pink-200 bg-pink-50/50 rounded-lg px-3.5 py-2.5 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:border-[#ff2d78] focus:bg-white transition-all';
  const lbl = 'block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5';

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  if (!user) return <SupplierShell><div className="text-gray-400 text-sm">Loading…</div></SupplierShell>;

  return (
    <SupplierShell>
      <form onSubmit={handleSave} className="max-w-xl space-y-5">
        <div>
          <p className="text-[11px] font-semibold text-[#ff2d78] uppercase tracking-[0.15em] mb-1">Account</p>
          <h1 className="text-2xl font-extrabold tracking-tight text-gray-800">My Profile</h1>
        </div>

        {/* Business info */}
        <div className="bg-white border border-pink-100 rounded-xl p-5 shadow-sm space-y-4">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Business Details</p>

          <div>
            <label className={lbl}>Business / Company Name</label>
            <input defaultValue={user.name} className={inp} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={lbl}>Contact Person</label>
              <input defaultValue={user.contactName} className={inp} />
            </div>
            <div>
              <label className={lbl}>Phone</label>
              <input defaultValue={user.phone} className={inp} />
            </div>
          </div>
          <div>
            <label className={lbl}>Address</label>
            <input defaultValue={user.address} className={inp} />
          </div>
        </div>

        {/* Account info */}
        <div className="bg-white border border-pink-100 rounded-xl p-5 shadow-sm space-y-4">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Account</p>
          <div>
            <label className={lbl}>Email Address</label>
            <input type="email" defaultValue={user.email} className={`${inp} bg-gray-50 cursor-not-allowed`} readOnly />
            <p className="text-[10px] text-gray-400 mt-1">Email cannot be changed.</p>
          </div>
          <div>
            <label className={lbl}>Member Since</label>
            <input value={user.createdAt} className={`${inp} bg-gray-50 cursor-not-allowed`} readOnly />
          </div>
          <div className="flex items-center gap-2">
            <div className={`w-2.5 h-2.5 rounded-full ${user.isActive ? 'bg-emerald-500' : 'bg-red-400'}`} />
            <span className={`text-xs font-semibold ${user.isActive ? 'text-emerald-600' : 'text-red-500'}`}>
              {user.isActive ? 'Account Active' : 'Account Inactive'}
            </span>
          </div>
        </div>

        {saved && (
          <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-lg px-4 py-3">
            <svg className="w-4 h-4 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <p className="text-sm text-emerald-700 font-medium">Profile updated successfully.</p>
          </div>
        )}

        <button type="submit"
          className="w-full bg-[#ff2d78] hover:bg-[#e91e63] text-white text-sm font-semibold py-3 rounded-lg transition-all hover:shadow-lg hover:shadow-pink-200">
          Save Changes
        </button>
      </form>
    </SupplierShell>
  );
}
