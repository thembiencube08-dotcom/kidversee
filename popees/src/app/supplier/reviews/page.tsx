'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import SupplierShell from '@/components/SupplierShell';
import {
  getSupplierSession, getSupplierReviews, deleteProductReview,
  type ProductReview,
} from '@/lib/supplierAuth';

function StarRow({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <svg key={s} className={`w-3.5 h-3.5 ${s <= rating ? 'text-amber-400' : 'text-gray-200'}`}
          fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function SupplierReviewsPage() {
  const [reviews, setReviews] = useState<ProductReview[]>([]);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const load = () => {
    const s = getSupplierSession();
    if (s) setReviews(getSupplierReviews(s.id));
  };

  useEffect(() => { load(); }, []);

  const handleDelete = (id: string) => {
    deleteProductReview(id);
    load();
    setDeleteId(null);
  };

  const avg = reviews.length
    ? (reviews.reduce((s, r) => s + r.rating, 0) / reviews.length).toFixed(1)
    : '—';

  const statusColor: Record<string, string> = {
    PUBLISHED: 'bg-emerald-50 text-emerald-600 border-emerald-200',
    PENDING:   'bg-amber-50 text-amber-600 border-amber-200',
  };

  return (
    <SupplierShell>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[11px] font-semibold text-[#ff2d78] uppercase tracking-[0.15em] mb-1">Quality</p>
            <h1 className="text-2xl font-extrabold tracking-tight text-gray-800">Product Reviews</h1>
          </div>
          <Link href="/supplier/reviews/new"
            className="inline-flex items-center gap-2 bg-[#ff2d78] hover:bg-[#e91e63] text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all shadow-sm hover:shadow-pink-200">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Write a Review
          </Link>
        </div>

        {/* Summary cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: 'Total Reviews', value: reviews.length },
            { label: 'Avg. Rating', value: avg },
            { label: 'Published', value: reviews.filter((r) => r.status === 'PUBLISHED').length },
            { label: 'Pending', value: reviews.filter((r) => r.status === 'PENDING').length },
          ].map((s) => (
            <div key={s.label} className="bg-white border border-pink-100 rounded-xl p-4 shadow-sm">
              <p className="text-[11px] text-gray-400 mb-1.5">{s.label}</p>
              <p className="text-2xl font-bold text-gray-800">{s.value}</p>
            </div>
          ))}
        </div>

        {/* Reviews list */}
        {reviews.length === 0 ? (
          <div className="bg-white border border-pink-100 rounded-xl p-16 text-center shadow-sm">
            <svg className="w-12 h-12 text-pink-200 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
            <p className="text-gray-400 text-sm mb-3">No reviews yet.</p>
            <Link href="/supplier/reviews/new"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#ff2d78] hover:underline">
              Write your first review →
            </Link>
          </div>
        ) : (
          <div className="space-y-3">
            {reviews.map((r) => (
              <div key={r.id} className="bg-white border border-pink-100 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <StarRow rating={r.rating} />
                      <span className="text-[11px] font-bold text-amber-500">{r.rating}.0</span>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${statusColor[r.status]}`}>
                        {r.status}
                      </span>
                      {r.recommend && (
                        <span className="text-[10px] font-bold bg-emerald-50 text-emerald-600 border border-emerald-200 px-2 py-0.5 rounded-full">
                          ✓ Recommends
                        </span>
                      )}
                    </div>
                    <p className="text-sm font-bold text-gray-800">{r.title}</p>
                    <p className="text-[11px] text-[#ff2d78] font-medium mt-0.5">Re: {r.productName}</p>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <span className="text-[11px] text-gray-400">{r.createdAt}</span>
                    <button onClick={() => setDeleteId(r.id)}
                      className="text-[11px] text-red-400 hover:text-red-600 transition-colors font-medium">
                      Delete
                    </button>
                  </div>
                </div>

                <p className="text-sm text-gray-600 leading-relaxed mb-4">{r.body}</p>

                {/* Sub-ratings */}
                <div className="grid grid-cols-3 gap-3 pt-3 border-t border-pink-50">
                  {[
                    { label: 'Quality', value: r.qualityRating },
                    { label: 'Packaging', value: r.packagingRating },
                    { label: 'Delivery', value: r.deliveryRating },
                  ].map((sub) => (
                    <div key={sub.label} className="text-center">
                      <p className="text-[10px] text-gray-400 mb-1">{sub.label}</p>
                      <StarRow rating={sub.value} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Delete modal */}
      {deleteId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4" onClick={() => setDeleteId(null)}>
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
          <div className="relative bg-white border border-pink-100 rounded-2xl p-6 max-w-sm w-full shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-base font-bold text-gray-800 text-center mb-1">Delete review?</h3>
            <p className="text-sm text-gray-400 text-center mb-5">This cannot be undone.</p>
            <div className="flex gap-3">
              <button onClick={() => setDeleteId(null)} className="flex-1 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-500 hover:text-gray-800 transition-all">Cancel</button>
              <button onClick={() => handleDelete(deleteId)} className="flex-1 py-2.5 rounded-lg bg-red-500 hover:bg-red-600 text-white text-sm font-semibold transition-all">Delete</button>
            </div>
          </div>
        </div>
      )}
    </SupplierShell>
  );
}
