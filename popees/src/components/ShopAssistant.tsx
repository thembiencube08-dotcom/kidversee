'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { searchChatProducts, type ChatProduct } from '@/lib/chatProducts';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  text: string;
  products?: ChatProduct[];
}

let counter = 0;
const uid = () => `m-${++counter}-${Date.now()}`;

const GREETING = "Hi! 👋 I'm the Popees shop assistant. Ask me about baby clothing, diapers, bamboo, maternity — I'll find it for you!";

function composeReply(query: string, results: ChatProduct[]): string {
  if (results.length === 0)
    return `I couldn't find anything for "${query}". Try words like "girls dress", "baby romper", "bamboo", or "diaper".`;
  return `Here's what I found for "${query}" — ${results.length} item${results.length !== 1 ? 's' : ''}!`;
}

// ── Product card ─────────────────────────────────────────────────────────────
function ProductCard({ product, onAdd }: { product: ChatProduct; onAdd?: (p: ChatProduct) => void }) {
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  return (
    <div className="flex-shrink-0 w-36 bg-white rounded-xl border border-pink-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
      <div className="relative h-36 bg-pink-50 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {discount && (
          <span className="absolute top-1.5 left-1.5 bg-[#ff2d78] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full">
            {discount}% OFF
          </span>
        )}
        {!product.inStock && (
          <div className="absolute inset-0 bg-white/60 flex items-center justify-center">
            <span className="text-[10px] font-bold text-gray-400">Sold out</span>
          </div>
        )}
      </div>
      <div className="p-2">
        <p className="text-[11px] text-gray-700 font-medium leading-snug line-clamp-2 mb-1">{product.name}</p>
        <p className="text-[10px] text-gray-400 mb-1.5">{product.ageRange}</p>
        <div className="flex items-center gap-1.5 mb-2">
          <span className="text-xs font-bold text-[#ff2d78]">₹{product.price}</span>
          {product.originalPrice && (
            <span className="text-[10px] text-gray-300 line-through">₹{product.originalPrice}</span>
          )}
        </div>
        <div className="flex gap-1">
          <Link
            href={product.href}
            className="flex-1 text-center text-[10px] font-semibold text-[#ff2d78] border border-pink-200 rounded-lg py-1 hover:bg-pink-50 transition-colors"
          >
            View
          </Link>
          {product.inStock && onAdd && (
            <button
              onClick={() => onAdd(product)}
              className="flex-1 text-[10px] font-semibold bg-[#ff2d78] text-white rounded-lg py-1 hover:bg-[#e91e63] transition-colors"
            >
              Add
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

// ── Main widget ──────────────────────────────────────────────────────────────
export default function ShopAssistant({ onAddToCart }: { onAddToCart?: (p: ChatProduct) => void }) {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: uid(), role: 'assistant', text: GREETING },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom on new messages
  useEffect(() => {
    if (listRef.current)
      listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [messages, loading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const query = input.trim();
    if (!query || loading) return;

    setMessages((p) => [...p, { id: uid(), role: 'user', text: query }]);
    setInput('');
    setLoading(true);

    // Simulate slight delay then search
    await new Promise((r) => setTimeout(r, 500));
    const results = searchChatProducts(query);
    setMessages((p) => [
      ...p,
      { id: uid(), role: 'assistant', text: composeReply(query, results), products: results },
    ]);
    setLoading(false);
  };

  const quickSearches = ['girls dress', 'bamboo', 'baby romper', 'diaper', 'maternity'];

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full flex items-center justify-center transition-all hover:scale-105 active:scale-95"
        style={{ background: 'white', boxShadow: '0 4px 24px rgba(255,45,120,0.35)' }}
        aria-label="Open shop assistant"
      >
        {/* White ring + pink circle */}
        <div className="w-[58px] h-[58px] rounded-full bg-[#ff2d78] flex items-center justify-center relative overflow-hidden"
          style={{ boxShadow: '0 0 0 3px white' }}>

          {/* Use actual Popees logo — mix-blend-multiply makes white transparent */}
          {open ? (
            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            /* Popees "p" icon — white circle loop with antenna */
            <svg viewBox="0 0 100 100" className="w-9 h-9" fill="white">
              {/* Main circular "o" part of the p */}
              <circle cx="58" cy="48" r="22" fill="none" stroke="white" strokeWidth="10" />
              {/* Vertical stem of the p going down-left */}
              <path d="M36 48 Q30 65 34 78 Q36 85 40 84" fill="none" stroke="white" strokeWidth="10" strokeLinecap="round" />
              {/* Antenna stem */}
              <path d="M36 48 Q32 34 38 26" fill="none" stroke="white" strokeWidth="7" strokeLinecap="round" />
              {/* Antenna dot */}
              <circle cx="38" cy="23" r="5" fill="white" />
            </svg>
          )}

          {/* Red notification badge — top right */}
          {!open && (
            <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-[10px] font-bold shadow-md">
              1
            </span>
          )}

          {/* Green online dot — bottom right */}
          <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white" />
        </div>
      </button>

      {/* Chat panel */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-[340px] sm:w-[380px] flex flex-col bg-white rounded-2xl shadow-2xl shadow-pink-100 border border-pink-100 overflow-hidden"
          style={{ maxHeight: '560px' }}>

          {/* Header */}
          <div className="flex items-center gap-3 px-4 py-3 bg-[#ff2d78]">
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-white leading-none">Popees Assistant</p>
              <p className="text-[10px] text-white/70 mt-0.5">Ask me anything about our products</p>
            </div>
            <div className="w-2 h-2 rounded-full bg-emerald-300 flex-shrink-0" />
          </div>

          {/* Messages */}
          <div ref={listRef} className="flex-1 overflow-y-auto p-3 space-y-3 bg-[#fff8fb]">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className="max-w-[90%]">
                  {msg.text && (
                    <div className={`px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-[#ff2d78] text-white rounded-br-sm'
                        : 'bg-white text-gray-700 border border-pink-100 rounded-bl-sm shadow-sm'
                    }`}>
                      {msg.text}
                    </div>
                  )}

                  {/* Product cards */}
                  {msg.products && msg.products.length > 0 && (
                    <div className="mt-2 flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
                      {msg.products.map((p) => (
                        <ProductCard key={p.id} product={p} onAdd={onAddToCart} />
                      ))}
                    </div>
                  )}

                  {msg.products && msg.products.length === 0 && (
                    <p className="mt-1.5 text-[11px] text-gray-400 italic">No matching products right now.</p>
                  )}
                </div>
              </div>
            ))}

            {/* Loading skeleton */}
            {loading && (
              <div className="flex justify-start">
                <div className="flex gap-2">
                  {[1, 2].map((i) => (
                    <div key={i} className="w-36 bg-white rounded-xl border border-pink-100 overflow-hidden shadow-sm">
                      <div className="h-36 bg-pink-100 animate-pulse" />
                      <div className="p-2 space-y-1.5">
                        <div className="h-2.5 bg-pink-100 rounded animate-pulse" />
                        <div className="h-2.5 bg-pink-100 rounded animate-pulse w-3/4" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Quick search pills */}
          <div className="px-3 py-2 bg-white border-t border-pink-50 flex gap-1.5 overflow-x-auto scrollbar-hide">
            {quickSearches.map((q) => (
              <button
                key={q}
                onClick={() => { setInput(q); }}
                className="flex-shrink-0 text-[11px] font-medium text-[#ff2d78] bg-pink-50 border border-pink-200 px-2.5 py-1 rounded-full hover:bg-pink-100 transition-colors whitespace-nowrap"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input bar */}
          <form onSubmit={handleSubmit} className="flex gap-2 px-3 py-3 bg-white border-t border-pink-100">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="e.g. girls dress 1-4 years…"
              disabled={loading}
              className="flex-1 bg-pink-50 border border-pink-200 rounded-xl px-3.5 py-2 text-sm text-gray-700 placeholder-gray-300 focus:outline-none focus:border-[#ff2d78] focus:bg-white transition-all"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="w-10 h-10 flex-shrink-0 bg-[#ff2d78] hover:bg-[#e91e63] text-white rounded-xl flex items-center justify-center transition-all disabled:opacity-40"
            >
              {loading ? (
                <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              )}
            </button>
          </form>
        </div>
      )}
    </>
  );
}
