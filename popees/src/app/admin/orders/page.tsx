'use client';
import React from 'react';
import AdminShell from '@/components/AdminShell';
import { mockOrders } from '@/lib/mockData';

const statusColor: Record<string, string> = {
  PENDING:   'bg-amber-50 text-amber-600 border-amber-200',
  CONFIRMED: 'bg-blue-50 text-blue-600 border-blue-200',
  SHIPPED:   'bg-purple-50 text-purple-600 border-purple-200',
  DELIVERED: 'bg-emerald-50 text-emerald-600 border-emerald-200',
  CANCELLED: 'bg-red-50 text-red-500 border-red-200',
};

export default function AdminOrdersPage() {
  return (
    <AdminShell>
      <div className="space-y-6">
        <div>
          <p className="text-[11px] font-semibold text-[#ff2d78] uppercase tracking-[0.15em] mb-1">Sales</p>
          <h1 className="text-2xl font-extrabold tracking-tight text-gray-800">Orders</h1>
        </div>

        {/* Summary pills */}
        <div className="flex flex-wrap gap-3">
          {(['PENDING','CONFIRMED','SHIPPED','DELIVERED','CANCELLED'] as const).map((s) => {
            const count = mockOrders.filter((o) => o.status === s).length;
            return (
              <div key={s} className={`flex items-center gap-2 text-xs font-bold px-3 py-1.5 rounded-full border ${statusColor[s]}`}>
                <span>{s}</span>
                <span className="bg-black/5 px-1.5 py-0.5 rounded-full">{count}</span>
              </div>
            );
          })}
        </div>

        {/* Table */}
        <div className="bg-white border border-pink-100 rounded-xl overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-pink-100 bg-pink-50">
                  {['Order ID','Customer','Email','Status','Items','Total','Date'].map((h) => (
                    <th key={h} className="text-left px-4 py-3 text-[11px] font-semibold text-gray-400 uppercase tracking-widest whitespace-nowrap">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-pink-50">
                {mockOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-pink-50/50 transition-colors">
                    <td className="px-4 py-3 font-mono text-xs text-[#ff2d78] font-semibold">{order.id}</td>
                    <td className="px-4 py-3 font-medium text-gray-800">{order.customer}</td>
                    <td className="px-4 py-3 text-gray-400 text-xs">{order.email}</td>
                    <td className="px-4 py-3">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${statusColor[order.status]}`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-500">{order.items}</td>
                    <td className="px-4 py-3 font-semibold text-gray-800">₹{order.totalAmount.toLocaleString('en-IN')}</td>
                    <td className="px-4 py-3 text-gray-400 text-xs">{order.createdAt}</td>
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
