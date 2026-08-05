import { prisma } from '@/lib/prisma';
import { requireAdmin } from '@/lib/admin';
import Link from 'next/link';

async function getCustomers() {
  return prisma.customer.findMany({
    orderBy: { createdAt: 'desc' },
    take: 20,
    include: { orders: true },
  });
}

export default async function AdminCustomersPage() {
  const session = await requireAdmin();
  if (!session) return <p className="p-8">Unauthorized</p>;

  const customers = await getCustomers();

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-pink-600">Customers</p>
          <h1 className="text-3xl font-heading font-bold text-gray-900">Customer Management</h1>
        </div>
        <Link href="/admin" className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm ring-1 ring-gray-200 hover:bg-gray-50">
          Admin Dashboard
        </Link>
      </div>

      <div className="overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-sm">
        <table className="w-full border-collapse text-sm">
          <thead className="bg-[#fff0f3] text-left text-xs uppercase tracking-[0.2em] text-gray-600">
            <tr>
              <th className="px-4 py-3">Customer</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Orders</th>
              <th className="px-4 py-3">Joined</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {customers.map((customer) => (
              <tr key={customer.id} className="hover:bg-gray-50">
                <td className="px-4 py-4 font-medium text-gray-900">{customer.firstName} {customer.lastName}</td>
                <td className="px-4 py-4 text-gray-700">{customer.email}</td>
                <td className="px-4 py-4 text-gray-700">{customer.orders.length}</td>
                <td className="px-4 py-4 text-gray-500">{new Date(customer.createdAt).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
