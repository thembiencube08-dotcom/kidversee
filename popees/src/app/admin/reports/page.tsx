import { requireAdmin } from '@/lib/admin';
import Link from 'next/link';

export default async function AdminReportsPage() {
  const session = await requireAdmin();
  if (!session) return <p className="p-8">Unauthorized</p>;

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-pink-600">Reports</p>
          <h1 className="text-3xl font-heading font-bold text-gray-900">Store Reports</h1>
        </div>
        <Link href="/admin" className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm ring-1 ring-gray-200 hover:bg-gray-50">
          Admin Dashboard
        </Link>
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        {[
          { title: 'Sales Report', desc: 'View revenue and order trends.' },
          { title: 'Customer Growth', desc: 'Track new customer growth.' },
          { title: 'Inventory Report', desc: 'Monitor stock and low inventory alerts.' },
        ].map((report) => (
          <div key={report.title} className="rounded-[2rem] border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900">{report.title}</h2>
            <p className="mt-3 text-sm text-gray-600">{report.desc}</p>
            <div className="mt-6 flex items-center justify-between text-sm text-pink-600 font-semibold">
              <span>View details</span>
              <span>→</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
