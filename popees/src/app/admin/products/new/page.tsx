'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import AdminShell from '@/components/AdminShell';
import { createProduct } from '@/lib/productStore';

const CATEGORIES = ['Baby','Girls','Boys','Bamboo','Maternity','Diaper','Baby Basics','Accessories','Toys & Gaming'];
const COLLECTIONS = ["What's New",'Trending Now','Best Sellers','Bamboo Collection','Girls T-Shirts','Girls Tops','Girls Pants','Girls Shorts','Girls Dresses','Baby Tops','Diaper Range','End of Season Sale','Combo Packs'];
const ALL_SIZES = ['NB','0-3M','3-6M','6-9M','9-12M','1-2Y','2-3Y','3-4Y','4-5Y','5-6Y','6-8Y'];
type Status = 'ACTIVE' | 'DRAFT' | 'ARCHIVED';

export default function NewProductPage() {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [shortName, setShortName] = useState('');
  const [description, setDescription] = useState('');
  const [sku, setSku] = useState('');
  const [price, setPrice] = useState('');
  const [originalPrice, setOriginalPrice] = useState('');
  const [stock, setStock] = useState('');
  const [status, setStatus] = useState<Status>('ACTIVE');
  const [category, setCategory] = useState('Girls');
  const [collection, setCollection] = useState("What's New");
  const [imgUrl, setImgUrl] = useState('');
  const [img2, setImg2] = useState('');
  const [img3, setImg3] = useState('');
  const [sizes, setSizes] = useState<string[]>([]);
  const [tags, setTags] = useState('');
  const [weight, setWeight] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  const toggleSize = (s: string) =>
    setSizes((p) => p.includes(s) ? p.filter((x) => x !== s) : [...p, s]);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!title.trim()) e.title = 'Required';
    if (!price || isNaN(Number(price)) || Number(price) <= 0) e.price = 'Enter a valid price';
    if (stock === '' || isNaN(Number(stock))) e.stock = 'Enter stock quantity';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSaving(true);
    await new Promise((r) => setTimeout(r, 700));
    const images = [imgUrl, img2, img3].filter(Boolean);
    createProduct({
      title: title.trim(),
      shortName: shortName.trim() || title.slice(0, 40),
      description: description.trim(),
      sku: sku.trim(),
      price: Number(price),
      originalPrice: originalPrice ? Number(originalPrice) : undefined,
      stockQuantity: Number(stock),
      status,
      category,
      collection,
      img: images[0] || '/assets/images/no_image.png',
      images,
      sizes,
      tags: tags.trim(),
      weight: weight.trim(),
    });
    setSaving(false);
    setSaved(true);
    setTimeout(() => router.push('/admin/products'), 1400);
  };

  const inp = (err?: string) =>
    `w-full bg-white/[0.04] border ${err ? 'border-red-500/40' : 'border-white/[0.08]'} rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#ff2d78]/50 focus:bg-white/[0.06] transition-all`;
  const lbl = 'block text-[11px] font-semibold text-white/35 uppercase tracking-wider mb-1.5';

  if (saved) return (
    <AdminShell>
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center mx-auto mb-5">
            <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-white mb-1">Product created!</h2>
          <p className="text-sm text-white/30">Redirecting to products list…</p>
        </div>
      </div>
    </AdminShell>
  );

  return (
    <AdminShell>
      <form onSubmit={handleSubmit} noValidate>
        <div className="max-w-[1000px] space-y-6">

          {/* ── Page header ── */}
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[11px] font-semibold text-[#ff2d78] uppercase tracking-[0.15em] mb-1">Catalogue</p>
              <h1 className="text-2xl font-extrabold tracking-tight text-white">New Product</h1>
            </div>
            <div className="flex gap-3">
              <button type="button" onClick={() => router.push('/admin/products')}
                className="text-sm text-white/40 hover:text-white border border-white/[0.08] hover:border-white/[0.16] bg-white/[0.03] px-4 py-2 rounded-lg transition-all">
                Cancel
              </button>
              <button type="submit" disabled={saving}
                className="inline-flex items-center gap-2 bg-[#ff2d78] hover:bg-[#e91e63] text-white text-sm font-semibold px-5 py-2 rounded-lg transition-all hover:shadow-[0_0_20px_rgba(255,45,120,0.45)] disabled:opacity-55">
                {saving
                  ? <><svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>Saving…</>
                  : <><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>Save Product</>}
              </button>
            </div>
          </div>

          {/* ── Two-column layout ── */}
          <div className="grid xl:grid-cols-3 gap-5">

            {/* Left — main fields (2/3 width) */}
            <div className="xl:col-span-2 space-y-5">

              {/* Basic info card */}
              <div className="bg-[#111] border border-white/[0.07] rounded-xl p-5 space-y-4">
                <p className="text-xs font-bold text-white/50 uppercase tracking-widest">Product Info</p>

                <div>
                  <label className={lbl}>Title *</label>
                  <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="e.g. Baby Girls Ribbed Polo Co-Ord Set" className={inp(errors.title)} />
                  {errors.title && <p className="text-[11px] text-red-400 mt-1">{errors.title}</p>}
                </div>

                <div>
                  <label className={lbl}>Short Name <span className="normal-case text-white/20 font-normal">(shown on cards)</span></label>
                  <input value={shortName} onChange={(e) => setShortName(e.target.value)} placeholder="e.g. Ribbed Polo Co-Ord Set" className={inp()} />
                </div>

                <div>
                  <label className={lbl}>Description</label>
                  <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={4}
                    placeholder="Describe the product — fabric, fit, age range, certifications…"
                    className={`${inp()} resize-none leading-relaxed`} />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={lbl}>SKU</label>
                    <input value={sku} onChange={(e) => setSku(e.target.value)} placeholder="e.g. KF-G-TB-957F" className={inp()} />
                  </div>
                  <div>
                    <label className={lbl}>Weight</label>
                    <input value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="e.g. 150g" className={inp()} />
                  </div>
                </div>

                <div>
                  <label className={lbl}>Tags</label>
                  <input value={tags} onChange={(e) => setTags(e.target.value)} placeholder="girls, cotton, summer, polo" className={inp()} />
                  <p className="text-[10px] text-white/20 mt-1">Comma-separated keywords</p>
                </div>
              </div>

              {/* Pricing card */}
              <div className="bg-[#111] border border-white/[0.07] rounded-xl p-5 space-y-4">
                <p className="text-xs font-bold text-white/50 uppercase tracking-widest">Pricing & Stock</p>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className={lbl}>Price (₹) *</label>
                    <input type="number" min="0" step="0.01" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="899" className={inp(errors.price)} />
                    {errors.price && <p className="text-[11px] text-red-400 mt-1">{errors.price}</p>}
                  </div>
                  <div>
                    <label className={lbl}>Original Price (₹)</label>
                    <input type="number" min="0" step="0.01" value={originalPrice} onChange={(e) => setOriginalPrice(e.target.value)} placeholder="1199" className={inp()} />
                    <p className="text-[10px] text-white/20 mt-1">Shows strikethrough</p>
                  </div>
                  <div>
                    <label className={lbl}>Stock Qty *</label>
                    <input type="number" min="0" value={stock} onChange={(e) => setStock(e.target.value)} placeholder="50" className={inp(errors.stock)} />
                    {errors.stock && <p className="text-[11px] text-red-400 mt-1">{errors.stock}</p>}
                  </div>
                </div>

                {price && originalPrice && Number(originalPrice) > Number(price) && (
                  <div className="flex items-center gap-2 bg-[#ff2d78]/08 border border-[#ff2d78]/15 rounded-lg px-3 py-2">
                    <svg className="w-4 h-4 text-[#ff2d78] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                    <span className="text-[12px] text-[#ff6eb4] font-semibold">
                      {Math.round(((Number(originalPrice) - Number(price)) / Number(originalPrice)) * 100)}% discount will be shown
                    </span>
                  </div>
                )}
              </div>

              {/* Sizes card */}
              <div className="bg-[#111] border border-white/[0.07] rounded-xl p-5">
                <p className="text-xs font-bold text-white/50 uppercase tracking-widest mb-4">Sizes / Age Groups</p>
                <div className="flex flex-wrap gap-2">
                  {ALL_SIZES.map((s) => (
                    <button key={s} type="button" onClick={() => toggleSize(s)}
                      className={`text-xs font-semibold px-3 py-1.5 rounded-lg border transition-all ${
                        sizes.includes(s)
                          ? 'bg-[#ff2d78]/15 text-[#ff2d78] border-[#ff2d78]/40'
                          : 'text-white/35 border-white/[0.08] hover:border-white/[0.18] hover:text-white/70'
                      }`}>
                      {s}
                    </button>
                  ))}
                </div>
                {sizes.length > 0 && (
                  <p className="text-[11px] text-white/25 mt-3">Selected: {sizes.join(', ')}</p>
                )}
              </div>

              {/* Images card */}
              <div className="bg-[#111] border border-white/[0.07] rounded-xl p-5 space-y-4">
                <p className="text-xs font-bold text-white/50 uppercase tracking-widest">Product Images</p>
                <p className="text-[11px] text-white/25">Paste image URLs from popees.com or any CDN</p>

                {[
                  { label: 'Main Image URL *', val: imgUrl, set: setImgUrl },
                  { label: 'Image 2 URL', val: img2, set: setImg2 },
                  { label: 'Image 3 URL', val: img3, set: setImg3 },
                ].map(({ label, val, set }) => (
                  <div key={label} className="grid sm:grid-cols-3 gap-3 items-start">
                    <div className="sm:col-span-2">
                      <label className={lbl}>{label}</label>
                      <input value={val} onChange={(e) => set(e.target.value)} placeholder="https://…" className={inp()} />
                    </div>
                    <div className="flex-shrink-0">
                      <label className={`${lbl} sm:invisible`}>Preview</label>
                      <div className="w-full h-20 rounded-lg border border-white/[0.06] bg-white/[0.03] overflow-hidden flex items-center justify-center">
                        {val ? (
                          <img src={val} alt="preview" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                        ) : (
                          <svg className="w-6 h-6 text-white/15" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right sidebar (1/3 width) */}
            <div className="space-y-5">

              {/* Status */}
              <div className="bg-[#111] border border-white/[0.07] rounded-xl p-5">
                <p className="text-xs font-bold text-white/50 uppercase tracking-widest mb-4">Status</p>
                <div className="space-y-2">
                  {(['ACTIVE','DRAFT','ARCHIVED'] as Status[]).map((s) => {
                    const colors: Record<Status, string> = {
                      ACTIVE: 'border-emerald-500/40 bg-emerald-500/10 text-emerald-400',
                      DRAFT: 'border-white/[0.12] bg-white/[0.05] text-white/50',
                      ARCHIVED: 'border-red-500/30 bg-red-500/08 text-red-400',
                    };
                    return (
                      <button key={s} type="button" onClick={() => setStatus(s)}
                        className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg border text-sm font-semibold transition-all ${
                          status === s ? colors[s] : 'border-white/[0.06] text-white/25 hover:text-white/50'
                        }`}>
                        {s}
                        {status === s && (
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Category & Collection */}
              <div className="bg-[#111] border border-white/[0.07] rounded-xl p-5 space-y-4">
                <p className="text-xs font-bold text-white/50 uppercase tracking-widest">Organisation</p>
                <div>
                  <label className={lbl}>Category *</label>
                  <select value={category} onChange={(e) => setCategory(e.target.value)}
                    className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#ff2d78]/50 transition-all">
                    {CATEGORIES.map((c) => <option key={c} value={c} className="bg-[#111]">{c}</option>)}
                  </select>
                </div>
                <div>
                  <label className={lbl}>Collection</label>
                  <select value={collection} onChange={(e) => setCollection(e.target.value)}
                    className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#ff2d78]/50 transition-all">
                    {COLLECTIONS.map((c) => <option key={c} value={c} className="bg-[#111]">{c}</option>)}
                  </select>
                </div>
              </div>

              {/* Preview summary */}
              <div className="bg-[#111] border border-white/[0.07] rounded-xl p-5">
                <p className="text-xs font-bold text-white/50 uppercase tracking-widest mb-4">Preview</p>
                <div className="rounded-lg overflow-hidden border border-white/[0.06] bg-white/[0.02] aspect-[4/5] mb-3 flex items-center justify-center">
                  {imgUrl ? (
                    <img src={imgUrl} alt="preview" className="w-full h-full object-cover" />
                  ) : (
                    <div className="text-center text-white/15 px-4">
                      <svg className="w-8 h-8 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <p className="text-[11px]">Add image URL above</p>
                    </div>
                  )}
                </div>
                {title && <p className="text-[13px] text-white/70 line-clamp-2 leading-snug mb-1">{shortName || title}</p>}
                {price && (
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className={`text-sm font-bold ${originalPrice ? 'text-[#ff2d78]' : 'text-white'}`}>₹{price}</span>
                    {originalPrice && <span className="text-xs text-white/25 line-through">₹{originalPrice}</span>}
                    {price && originalPrice && Number(originalPrice) > Number(price) && (
                      <span className="text-[10px] font-bold bg-[#ff2d78] text-white px-1.5 py-0.5 rounded">
                        {Math.round(((Number(originalPrice) - Number(price)) / Number(originalPrice)) * 100)}% OFF
                      </span>
                    )}
                  </div>
                )}
              </div>

              {/* Save button (repeated for convenience) */}
              <button type="submit" disabled={saving}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#ff2d78] hover:bg-[#e91e63] text-white text-sm font-semibold py-3 rounded-lg transition-all hover:shadow-[0_0_20px_rgba(255,45,120,0.45)] disabled:opacity-55">
                {saving ? 'Saving…' : 'Save Product'}
              </button>
            </div>
          </div>
        </div>
      </form>
    </AdminShell>
  );
}
