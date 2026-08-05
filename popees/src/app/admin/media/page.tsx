import { requireAdmin } from '@/lib/admin';
import Link from 'next/link';

const mediaItems = [
  { id: 'm1', name: 'Homepage Hero', url: '/assets/images/hero-banner.jpg' },
  { id: 'm2', name: 'Category Card', url: '/assets/images/category-card.jpg' },
  { id: 'm3', name: 'Promotional Banner', url: '/assets/images/promo-banner.jpg' },
];

export default async function AdminMediaPage() {
  const session = await requireAdmin();
  if (!session) return <p className="p-8">Unauthorized</p>;

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-pink-600">Media Library</p>
          <h1 className="text-3xl font-heading font-bold text-gray-900">Media Management</h1>
        </div>
        <Link href="/admin" className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm ring-1 ring-gray-200 hover:bg-gray-50">
          Admin Dashboard
        </Link>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {mediaItems.map((item) => (
          <div key={item.id} className="rounded-[2rem] border border-gray-200 bg-white p-6 shadow-sm">
            <div className="h-48 overflow-hidden rounded-3xl bg-gray-100">
              <img src={item.url} alt={item.name} className="h-full w-full object-cover" />
            </div>
            <div className="mt-4">
              <p className="font-semibold text-gray-900">{item.name}</p>
              <p className="mt-2 text-sm text-gray-600">{item.url}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
