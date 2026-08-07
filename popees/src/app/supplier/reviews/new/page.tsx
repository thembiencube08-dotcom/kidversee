'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import SupplierShell from '@/components/SupplierShell';
import {
  getSupplierSession, getSupplierProducts,
  createProductReview, type SupplierProduct,
} from '@/lib/supplierAuth';

// ── Star picker ───────────────────────────────────────────────────────────────
function StarPicker({ label, value, onChange }: { label: string; value: number; onChange: (v: number) => void }) {
  const [hover, setHover] = useState(0);
  return (
    <div className="flex items-center justify-between py-2.5 border-b border-pink-50 last:border-0">
      <span className="text-sm font-medium text-gray-700">{label}</span>
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((s) => (
          <button key={s} type="button"
            onMouseEnter={() => setHover(s)}
            onMouseLeave={() => setHover(0)}
            onClick={() => onChange(s)}>
            <svg className={`w-6 h-6 transition-colors ${s <= (hover || value) ? 'text-amber-400' : 'text-gray-200'}`}
              fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </button>
        ))}
        {value > 0 && <span className="ml-1 text-xs font-bold text-amber-500 w-4">{value}</span>}
      </div>
    </div>
  );
}

// ── Main page ─────────────────────────────────────────────────────────────────
export default function NewReviewPage() {
  const router = useRouter();
  const [products, setProducts] = useState<SupplierProduct[]>([]);
  const [productId, setProductId] = useState('');
  const [overallRating, setOverallRating] = useState(0);
  const [qualityRating, setQualityRating] = useState(0);
  const [packagingRating, setPackagingRating] = useState(0);
  const [deliveryRating, setDeliveryRating] = useState(0);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [recommend, setRecommend] = useState<boolean | null>(null);
  const [submitError, setSubmitError] = useState('');
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const s = getSupplierSession();
    if (!s) return;
    const prods = getSupplierProducts(s.id);
    setProducts(prods);
    if (prods.length > 0) setProductId(prods[0].id);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError('');

    // Simple inline validation — show one message at a time
    if (!productId) return setSubmitError('Please select a product.');
    if (overallRating === 0) return setSubmitError('Please select an overall star rating.');
    if (!title.trim()) return setSubmitError('Please add a review title.');
    if (body.trim().length < 10) return setSubmitError('Review text must be at least 10 characters.');
    if (qualityRating === 0 || packagingRating === 0 || deliveryRating === 0)
      return setSubmitError('Please rate Quality, Packaging, and Delivery.');
    if (recommend === null) return setSubmitError('Please indicate if you recommend this product.');

    setSaving(true);
    await new Promise((r) => setTimeout(r, 700));

    const session = getSupplierSession();
    if (!session) return setSaving(false);

    const product = products.find((p) => p.id === productId);
    createProductReview(session.id, {
      productId,
      productName: product?.name ?? 'Product',
      rating: overallRating,
      title: title.trim(),
      body: body.trim(),
      qualityRating,
      packagingRating,
      deliveryRating,
      recommend,
    });

    setSaving(false);
    setSaved(true);
    setTimeout(() => router.push('/supplier/reviews'), 1400);
  };

  const inp = 'w-full border border-pink-200 bg-pink-50/50 rounded-lg px-3.5 py-2.5 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:border-[#ff2d78] focus:bg-white transition-all';
  const lbl = 'block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5';

  // ── Success screen ─────────────────────────────────────────────────────────
  if (saved) return (
    <SupplierShell>
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <div className="w-16 h-16 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-gray-800 mb-1">Review submitted!</h2>
          <p className="text-sm text-gray-400">Pending approval by the Popees team.</p>
        </div>
      </div>
    </SupplierShell>
  );

  // ── Form ───────────────────────────────────────────────────────────────────
  return (
    <SupplierShell>
      <form onSubmit={handleSubmit} noValidate>
        <div className="max-w-xl space-y-5">

          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[11px] font-semibold text-[#ff2d78] uppercase tracking-[0.15em] mb-1">Quality</p>
              <h1 className="text-2xl font-extrabold tracking-tight text-gray-800">Write a Review</h1>
            </div>
            <button type="button" onClick={() => router.back()}
              className="text-sm text-gray-400 hover:text-gray-700 border border-gray-200 px-4 py-2 rounded-lg transition-all">
              Cancel
            </button>
          </div>

          {/* Error banner */}
          {submitError && (
            <div className="flex items-center gap-2.5 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
              <svg className="w-4 h-4 text-red-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-sm text-red-600 font-medium">{submitError}</p>
            </div>
          )}

          {/* 1 — Product */}
          <div className="bg-white border border-pink-100 rounded-xl p-5 shadow-sm space-y-3">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">1. Select Product</p>
            {products.length === 0 ? (
              <div className="text-center py-4">
                <p className="text-sm text-gray-400 mb-2">No products added yet.</p>
                <a href="/supplier/products/new" className="text-sm font-semibold text-[#ff2d78] hover:underline">
                  Add a product first →
                </a>
              </div>
            ) : (
              <select value={productId} onChange={(e) => setProductId(e.target.value)}
                className="w-full border border-pink-200 bg-pink-50/50 rounded-lg px-3.5 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-[#ff2d78] transition-all">
                {products.map((p) => (
                  <option key={p.id} value={p.id}>{p.name}</option>
                ))}
              </select>
            )}
          </div>

          {/* 2 — Overall rating */}
          <div className="bg-white border border-pink-100 rounded-xl p-5 shadow-sm space-y-4">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">2. Overall Rating</p>

            <div>
              <label className={lbl}>Overall star rating *</label>
              <div className="flex items-center gap-1.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <button key={s} type="button" onClick={() => setOverallRating(s)}>
                    <svg className={`w-8 h-8 transition-colors ${s <= overallRating ? 'text-amber-400' : 'text-gray-200'}`}
                      fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </button>
                ))}
                {overallRating > 0 && (
                  <span className="ml-2 text-sm font-bold text-amber-500">
                    {['', 'Poor', 'Fair', 'Good', 'Very Good', 'Excellent'][overallRating]}
                  </span>
                )}
              </div>
            </div>

            <div>
              <label className={lbl}>Review title *</label>
              <input value={title} onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. Excellent fabric quality" className={inp} />
            </div>

            <div>
              <label className={lbl}>Your review *</label>
              <textarea value={body} onChange={(e) => setBody(e.target.value)} rows={4}
                placeholder="Share details about quality, fabric, sizing, packaging experience…"
                className={`${inp} resize-none`} />
              <p className={`text-[11px] mt-1 text-right ${body.trim().length >= 10 ? 'text-emerald-500' : 'text-gray-300'}`}>
                {body.trim().length} / 10 min chars
              </p>
            </div>
          </div>

          {/* 3 — Detailed ratings */}
          <div className="bg-white border border-pink-100 rounded-xl p-5 shadow-sm">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">3. Detailed Ratings</p>
            <StarPicker label="Product Quality" value={qualityRating} onChange={setQualityRating} />
            <StarPicker label="Packaging" value={packagingRating} onChange={setPackagingRating} />
            <StarPicker label="Delivery Speed" value={deliveryRating} onChange={setDeliveryRating} />
          </div>

          {/* 4 — Recommend */}
          <div className="bg-white border border-pink-100 rounded-xl p-5 shadow-sm">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">4. Would you recommend this product?</p>
            <div className="flex gap-3">
              <button type="button" onClick={() => setRecommend(true)}
                className={`flex-1 py-3 rounded-xl border-2 text-sm font-semibold transition-all flex items-center justify-center gap-2 ${
                  recommend === true
                    ? 'border-emerald-400 bg-emerald-50 text-emerald-700'
                    : 'border-gray-200 text-gray-400 hover:border-gray-300'
                }`}>
                👍 Yes, recommend
              </button>
              <button type="button" onClick={() => setRecommend(false)}
                className={`flex-1 py-3 rounded-xl border-2 text-sm font-semibold transition-all flex items-center justify-center gap-2 ${
                  recommend === false
                    ? 'border-red-300 bg-red-50 text-red-600'
                    : 'border-gray-200 text-gray-400 hover:border-gray-300'
                }`}>
                👎 Not recommended
              </button>
            </div>
          </div>

          {/* Submit */}
          <button type="submit" disabled={saving || products.length === 0}
            className="w-full bg-[#ff2d78] hover:bg-[#e91e63] text-white text-sm font-semibold py-3.5 rounded-lg transition-all hover:shadow-lg hover:shadow-pink-200 disabled:opacity-50 flex items-center justify-center gap-2">
            {saving
              ? <><svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>Submitting…</>
              : 'Submit Review'}
          </button>
        </div>
      </form>
    </SupplierShell>
  );
}
