import { prisma } from '@/lib/prisma';
import { requireAdmin } from '@/lib/admin';
import Link from 'next/link';

async function getCategories() {
  return prisma.category.findMany({
    orderBy: { name: 'asc' },
    include: { products: true },
  });
}

export default async function AdminCategoriesPage() {
  const session = await requireAdmin();
  if (!session) return <p className="p-8">Unauthorized</p>;

  const categories = await getCategories();

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-pink-600">Categories</p>
          <h1 className="text-3xl font-heading font-bold text-gray-900">Manage Categories</h1>
        </div>
        <Link href="/admin" className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm ring-1 ring-gray-200 hover:bg-gray-50">
          Admin Dashboard
        </Link>
      </div>

      <div className="overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-sm">
        <table className="w-full border-collapse text-sm">
          <thead className="bg-[#fff0f3] text-left text-xs uppercase tracking-[0.2em] text-gray-600">
            <tr>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Slug</th>
              <th className="px-4 py-3">Products</th>
              <th className="px-4 py-3">Created</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {categories.map((category) => (
              <tr key={category.id} className="hover:bg-gray-50">
                <td className="px-4 py-4 font-medium text-gray-900">{category.name}</td>
                <td className="px-4 py-4 text-gray-700">{category.slug}</td>
                <td className="px-4 py-4 text-gray-700">{category.products.length}</td>
                <td className="px-4 py-4 text-gray-500">{new Date(category.createdAt).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
