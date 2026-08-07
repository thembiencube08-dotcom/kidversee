'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import SupplierShell from '@/components/SupplierShell';
import { getSupplierSession, createSupplierProduct } from '@/lib/supplierAuth';

const CATEGORIES = ['Baby','Girls','Boys','Bamboo','Maternity','Diaper','Baby Basics','Accessories','Toys & Gaming'];
type Status = 'ACTIVE' | 'DRAFT' | 'PENDING';

export default function NewSupplierProductPage() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [originalPrice, setOriginalPrice] = useState('');
  const [stock, setStock] = useState('');
  const [category, setCategory] = useState('Baby');
  const [imgUrl, setImgUrl] = useState('');
  const [status, setStatus] = useState<Status>('PENDING');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  const inp = (err?: string) =>
    `w-full border ${err ? 'border-red-300' : 'border-pink-200'} bg-pink-50/50 rounded-lg px-3.5 py-2.5 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:border-[#ff2d78] focus:bg-white transition-all`;
  const lbl = 'block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5';

  const validate = () => {
    const e: Record<string, string> = {};
    if (!name.trim()) e.name = 'Required';
    if (!price || isNaN(Number(price)) || Number(price) <= 0) e.price = 'Enter a valid price';
    if (stock === '' || isNaN(Number(stock))) e.stock = 'Required';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSaving(true);
    await new Promise((r) => setTimeout(r, 700));
    const session = getSupplierSession();
    if (!session) return;
    createSupplierProduct(session.id, {
      name: name.trim(), description: description.trim(),
      price: Number(price),
      originalPrice: originalPrice ? Number(originalPrice) : undefined,
      stock: Number(stock), images: imgUrl ? [imgUrl] : [],
      category, status,
    });
    setSaving(false);
    setSaved(true);
    setTimeout(() => router.push('/supplier/products'), 1200);
  };

  if (saved) return (
    <SupplierShell>
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-gray-800 mb-1">Product submitted!</h2>
          <p className="text-sm text-gray-400">Pending review by Popees team.</p>
        </div>
      </div>
    </SupplierShell>
  );

  return (
    <SupplierShell>
      <form onSubmit={handleSubmit} noValidate>
        <div className="max-w-2xl space-y-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[11px] font-semibold text-[#ff2d78] uppercase tracking-[0.15em] mb-1">Catalogue</p>
              <h1 className="text-2xl font-extrabold tracking-tight text-gray-800">Add Product</h1>
            </div>
            <div className="flex gap-3">
              <button type="button" onClick={() => router.back()}
                className="text-sm text-gray-400 hover:text-gray-700 border border-gray-200 px-4 py-2 rounded-lg transition-all">Cancel</button>
              <button type="submit" disabled={saving}
                className="inline-flex items-center gap-2 bg-[#ff2d78] hover:bg-[#e91e63] text-white text-sm font-semibold px-5 py-2 rounded-lg transition-all disabled:opacity-60">
                {saving ? 'Submitting…' : 'Submit for Review'}
              </button>
            </div>
          </div>

          {/* Product info */}
          <div className="bg-white border border-pink-100 rounded-xl p-5 shadow-sm space-y-4">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Product Info</p>
            <div>
              <label className={lbl}>Product Name *</label>
              <input value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. Baby Girls Cotton Romper" className={inp(errors.name)} />
              {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
            </div>
            <div>
              <label className={lbl}>Description</label>
              <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={3}
                placeholder="Fabric, size range, features…" className={`${inp()} resize-none`} />
            </div>
            <div>
              <label className={lbl}>Category</label>
              <select value={category} onChange={(e) => setCategory(e.target.value)}
                className="w-full border border-pink-200 bg-pink-50/50 rounded-lg px-3.5 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-[#ff2d78]">
                {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
              </select>
            </div>
          </div>

          {/* Pricing */}
          <div className="bg-white border border-pink-100 rounded-xl p-5 shadow-sm space-y-4">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Pricing & Stock</p>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className={lbl}>Price (₹) *</label>
                <input type="number" min="0" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="499" className={inp(errors.price)} />
                {errors.price && <p className="text-xs text-red-400 mt-1">{errors.price}</p>}
              </div>
              <div>
                <label className={lbl}>MRP (₹)</label>
                <input type="number" min="0" value={originalPrice} onChange={(e) => setOriginalPrice(e.target.value)} placeholder="799" className={inp()} />
              </div>
              <div>
                <label className={lbl}>Stock *</label>
                <input type="number" min="0" value={stock} onChange={(e) => setStock(e.target.value)} placeholder="100" className={inp(errors.stock)} />
                {errors.stock && <p className="text-xs text-red-400 mt-1">{errors.stock}</p>}
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="bg-white border border-pink-100 rounded-xl p-5 shadow-sm space-y-3">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Product Image</p>
            <div className="grid sm:grid-cols-3 gap-3 items-start">
              <div className="sm:col-span-2">
                <label className={lbl}>Image URL</label>
                <input value={imgUrl} onChange={(e) => setImgUrl(e.target.value)} placeholder="https://…" className={inp()} />
              </div>
              <div>
                <label className={`${lbl} sm:invisible`}>Preview</label>
                <div className="h-20 rounded-lg border border-pink-100 bg-pink-50 overflow-hidden flex items-center justify-center">
                  {imgUrl
                    ? <img src={imgUrl} alt="preview" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                    : <svg className="w-6 h-6 text-pink-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>}
                </div>
              </div>
            </div>
          </div>

          {/* Status note */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-3">
            <svg className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-sm text-amber-700">Your product will be submitted as <strong>Pending Review</strong> and will be published after Popees team approval.</p>
          </div>

          <button type="submit" disabled={saving}
            className="w-full bg-[#ff2d78] hover:bg-[#e91e63] text-white text-sm font-semibold py-3 rounded-lg transition-all hover:shadow-lg hover:shadow-pink-200 disabled:opacity-60">
            {saving ? 'Submitting…' : 'Submit Product for Review'}
          </button>
        </div>
      </form>
    </SupplierShell>
  );
}
