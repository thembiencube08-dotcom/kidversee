'use client';
import React from 'react';
import AdminShell from '@/components/AdminShell';
import { mockCustomers } from '@/lib/mockData';

export default function AdminCustomersPage() {
  return (
    <AdminShell>
      <div className="space-y-6">
        <div>
          <p className="text-[11px] font-semibold text-[#ff2d78] uppercase tracking-[0.15em] mb-1">People</p>
          <h1 className="text-2xl font-extrabold tracking-tight text-gray-800">Customers</h1>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {[
            { label: 'Total Customers', value: mockCustomers.length },
            { label: 'Total Orders', value: mockCustomers.reduce((s, c) => s + c.orders, 0) },
            { label: 'Total Revenue', value: `₹${mockCustomers.reduce((s, c) => s + c.totalSpent, 0).toLocaleString('en-IN')}` },
          ].map((s) => (
            <div key={s.label} className="bg-white border border-pink-100 rounded-xl p-4 shadow-sm">
              <p className="text-[11px] text-gray-400 mb-1.5">{s.label}</p>
              <p className="text-xl font-bold text-gray-800">{s.value}</p>
            </div>
          ))}
        </div>

        {/* Table */}
        <div className="bg-white border border-pink-100 rounded-xl overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-pink-100 bg-pink-50">
                  {['Customer','Email','Phone','Orders','Total Spent','Joined'].map((h) => (
                    <th key={h} className="text-left px-4 py-3 text-[11px] font-semibold text-gray-400 uppercase tracking-widest whitespace-nowrap">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-pink-50">
                {mockCustomers.map((c) => (
                  <tr key={c.id} className="hover:bg-pink-50/50 transition-colors">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-full bg-[#ff2d78] flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-[11px] font-bold">{c.name[0]}</span>
                        </div>
                        <span className="font-medium text-gray-800">{c.name}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-gray-400 text-xs">{c.email}</td>
                    <td className="px-4 py-3 text-gray-400 text-xs">{c.phone}</td>
                    <td className="px-4 py-3 text-gray-600">{c.orders}</td>
                    <td className="px-4 py-3 font-semibold text-gray-800">₹{c.totalSpent.toLocaleString('en-IN')}</td>
                    <td className="px-4 py-3 text-gray-400 text-xs">{c.createdAt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminShell>
  );
}
