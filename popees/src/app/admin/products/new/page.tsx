'use client';

import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const productSchema = z.object({
  title: z.string().min(3),
  description: z.string().optional(),
  sku: z.string().optional(),
  price: z.number().min(0),
  salePrice: z.number().min(0).optional(),
  stockQuantity: z.number().min(0),
  status: z.enum(['ACTIVE', 'DRAFT', 'ARCHIVED']).default('ACTIVE'),
  categories: z.string().optional(),
  collections: z.string().optional(),
});

type ProductFormValues = z.infer<typeof productSchema>;

export default function ProductNewPage() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ProductFormValues>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      title: '',
      description: '',
      sku: '',
      price: 0,
      salePrice: undefined,
      stockQuantity: 0,
      status: 'ACTIVE',
      categories: '',
      collections: '',
    },
  });

  const onSubmit = async (values: ProductFormValues) => {
    console.log(values);
  };

  return (
    <div className="min-h-screen bg-[#fbfaf8] text-gray-900">
      <main className="max-w-[1100px] mx-auto px-4 py-10">
        <div className="mb-10 rounded-[2rem] bg-white p-8 shadow-sm border border-gray-200">
          <h1 className="text-3xl font-heading font-bold text-gray-900 mb-2">Add New Product</h1>
          <p className="text-sm text-gray-500">Create a product entry for your store catalog.</p>

          <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <label className="block">
                <span className="text-sm font-medium text-gray-700">Product Title</span>
                <input className="mt-2 w-full rounded-3xl border border-gray-300 bg-gray-50 px-4 py-3 text-sm" {...register('title')} />
                {errors.title && <p className="mt-1 text-xs text-red-600">{errors.title.message}</p>}
              </label>
              <label className="block">
                <span className="text-sm font-medium text-gray-700">SKU</span>
                <input className="mt-2 w-full rounded-3xl border border-gray-300 bg-gray-50 px-4 py-3 text-sm" {...register('sku')} />
              </label>
            </div>

            <label className="block">
              <span className="text-sm font-medium text-gray-700">Description</span>
              <textarea className="mt-2 w-full rounded-3xl border border-gray-300 bg-gray-50 px-4 py-3 text-sm min-h-[120px]" {...register('description')} />
            </label>

            <div className="grid gap-6 md:grid-cols-3">
              <label className="block">
                <span className="text-sm font-medium text-gray-700">Price</span>
                <input type="number" step="0.01" className="mt-2 w-full rounded-3xl border border-gray-300 bg-gray-50 px-4 py-3 text-sm" {...register('price', { valueAsNumber: true })} />
                {errors.price && <p className="mt-1 text-xs text-red-600">{errors.price.message}</p>}
              </label>
              <label className="block">
                <span className="text-sm font-medium text-gray-700">Sale Price</span>
                <input type="number" step="0.01" className="mt-2 w-full rounded-3xl border border-gray-300 bg-gray-50 px-4 py-3 text-sm" {...register('salePrice', { valueAsNumber: true })} />
              </label>
              <label className="block">
                <span className="text-sm font-medium text-gray-700">Stock Quantity</span>
                <input type="number" className="mt-2 w-full rounded-3xl border border-gray-300 bg-gray-50 px-4 py-3 text-sm" {...register('stockQuantity', { valueAsNumber: true })} />
                {errors.stockQuantity && <p className="mt-1 text-xs text-red-600">{errors.stockQuantity.message}</p>}
              </label>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <label className="block">
                <span className="text-sm font-medium text-gray-700">Status</span>
                <select className="mt-2 w-full rounded-3xl border border-gray-300 bg-gray-50 px-4 py-3 text-sm" {...register('status')}>
                  <option value="ACTIVE">Active</option>
                  <option value="DRAFT">Draft</option>
                  <option value="ARCHIVED">Archived</option>
                </select>
              </label>
              <label className="block">
                <span className="text-sm font-medium text-gray-700">Categories</span>
                <input className="mt-2 w-full rounded-3xl border border-gray-300 bg-gray-50 px-4 py-3 text-sm" {...register('categories')} />
              </label>
              <label className="block">
                <span className="text-sm font-medium text-gray-700">Collections</span>
                <input className="mt-2 w-full rounded-3xl border border-gray-300 bg-gray-50 px-4 py-3 text-sm" {...register('collections')} />
              </label>
            </div>

            <button type="submit" disabled={isSubmitting} className="rounded-3xl bg-pink-600 px-6 py-3 text-sm font-semibold text-white hover:bg-pink-700 transition disabled:opacity-70">
              {isSubmitting ? 'Saving...' : 'Create product'}
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
