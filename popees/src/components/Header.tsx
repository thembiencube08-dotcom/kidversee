'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useCart } from '@/lib/cartContext';
import CartDrawer from '@/components/CartDrawer';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Shop All', href: '/collections/all' },
  { label: 'New Arrivals', href: '/collections/whats-new-baby-care' },
  { label: 'Trending Now', href: '/collections/trending-now-baby-care' },
  { label: 'Blogs', href: '/blogs/all-blog' },
  { label: 'Contact', href: '/pages/contact' },
  { label: 'Admin', href: '/admin' },
];

const categoryLinks = [
  { label: 'Independence Day', href: '/collections/independence-day', external: false, hasMegaMenu: false, badge: null },
  { label: 'Baby Shoes', href: '/collections/baby-shoes', external: false, hasMegaMenu: false, badge: null },
  { label: 'Shop By Category', href: '#', external: false, hasMegaMenu: true, badge: null },
  { label: 'Baby', href: '/collections/baby-new', external: false, hasMegaMenu: false, badge: null },
  { label: 'Girls', href: '/collections/girls-new', external: false, hasMegaMenu: false, badge: null },
  { label: 'Boys', href: '/collections/boys-new', external: false, hasMegaMenu: false, badge: null },
  { label: 'Smart Pick', href: '/collections/end-of-season-sale', external: false, hasMegaMenu: false, badge: 'SALE' },
  { label: 'Bamboo', href: '/collections/bamboo', external: false, hasMegaMenu: false, badge: null },
  { label: 'Maternity', href: '/collections/maternity-wear', external: false, hasMegaMenu: false, badge: null },
  { label: 'Toys & Gaming', href: '/collections/toys-gaming-new', external: false, hasMegaMenu: false, badge: null },
  { label: 'Accessories', href: '/collections/accessories-new', external: false, hasMegaMenu: false, badge: null },
  { label: 'Diaper', href: '/collections/diaper-new', external: false, hasMegaMenu: false, badge: null },
  { label: 'Baby Basics', href: '/collections/fmcg', external: false, hasMegaMenu: false, badge: 'POPULAR' },
];

const megaMenuColumns = [
  {
    title: 'Baby',
    href: '/collections/baby-new',
    items: [
      { label: 'Baby Jhabla', href: '/collections/baby-jhabla-new' },
      { label: 'Baby Tops', href: '/collections/baby-top-new' },
      { label: 'Baby T-shirt', href: '/collections/baby-t-shirt-new' },
      { label: 'Baby Shirt', href: '/collections/baby-shirt-new' },
      { label: 'Baby Dress', href: '/collections/baby-dresses-1' },
      { label: 'Baby Shorts', href: '/collections/baby-shorts-new' },
      { label: 'Baby Pants', href: '/collections/baby-pants-new' },
      { label: 'Baby Cord Set', href: '/collections/baby-co-ord-sets-new' },
      { label: 'Baby Sleepsuit', href: '/collections/baby-sleepsuit-new' },
      { label: 'Baby Dungaree', href: '/collections/baby-dungaree-new' },
    ],
  },
  {
    title: 'Girls',
    href: '/collections/girls-new',
    items: [
      { label: 'T shirt', href: '/collections/girls-t-shirt-new' },
      { label: 'Top', href: '/collections/girls-top-new' },
      { label: 'Dress', href: '/collections/girls-dresses-new' },
      { label: 'Pants', href: '/collections/girls-pants-new' },
      { label: 'Shorts', href: '/collections/girls-shorts-new' },
    ],
  },
  {
    title: 'Boys',
    href: '/collections/boys-new',
    items: [
      { label: 'Shirt', href: '/collections/boys-shirt-new' },
      { label: 'T shirt', href: '/collections/boys-t-shirt-new' },
      { label: 'Pants', href: '/collections/boys-pants-new' },
      { label: 'Shorts', href: '/collections/boys-shorts-new' },
      { label: 'Dungaree', href: '/collections/boys-dungaree-new' },
    ],
  },
  {
    title: 'Baby Basics',
    href: '/collections/fmcg',
    items: [
      { label: 'Fabric Wash', href: '/collections/fabric-wash-new' },
      { label: 'Wipes', href: '/collections/Baby-wipes' },
      { label: 'Diaper', href: '/collections/diaper-new' },
      { label: 'Baby Soap', href: '/collections/soap-new' },
      { label: 'Baby Shampoo', href: '/collections/shampoo-new' },
    ],
  },
  {
    title: 'Accessories',
    href: '/collections/accessories-new',
    items: [
      { label: 'Pillow', href: '/collections/pillow-new' },
      { label: 'Towel', href: '/collections/baby-towels-new' },
      { label: 'Swaddle Wrap', href: '/collections/swaddle-wrap-new' },
      { label: 'Bibs', href: '/collections/bibs' },
      { label: 'Mittens', href: '/collections/mittens-new' },
    ],
  },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [thumbs, setThumbs] = useState<Record<string, string | null>>({});
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { totalCount, openCart } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    // fetch the index written by the scraper (publicly available)
    fetch('/assets/images/collections/index.json')
      .then((r) => r.ok ? r.json() : {})
      .then((data) => setThumbs(data || {}))
      .catch(() => setThumbs({}));
  }, []);

  const openMega = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setMegaOpen(true);
  };

  const closeMega = () => {
    timeoutRef.current = setTimeout(() => setMegaOpen(false), 150);
  };

  return (
    <>
      <header className={`sticky top-0 z-50 w-full bg-white transition-shadow duration-300 ${scrolled ? 'shadow-md' : ''}`}>
        {/* Top Nav */}
        <div className="border-b border-gray-100">
          <div className="max-w-[1400px] mx-auto px-4 flex items-center justify-between h-[60px]">
            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 hover:text-[#e21a5a] transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* Desktop Nav Links */}
            <nav className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-gray-700 hover:text-[#e21a5a] transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Logo */}
            <Link href="/" className="flex items-center justify-center absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
              <img
                src="https://www.popees.com/cdn/shop/files/popees_logo.gif?v=1775814201&width=500"
                alt="Popees Baby Care"
                className="h-12 w-auto object-contain drop-shadow-md"
              />
            </Link>

            {/* Right Actions */}
            <div className="flex items-center gap-2">
              <button className="p-2 hover:text-[#e21a5a] transition-colors" aria-label="Search">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>

              <Link href="/pages/wishlist" className="p-2 hover:text-[#e21a5a] transition-colors relative" aria-label="Wishlist">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </Link>

              <button onClick={openCart} className="p-2 hover:text-[#e21a5a] transition-colors relative" aria-label="Cart">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                {totalCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-[#e21a5a] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                    {totalCount > 9 ? '9+' : totalCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* ── Category strip ── */}
        <div className="bg-white border-t border-b border-gray-100 overflow-x-auto scrollbar-hide">
          <div className="max-w-[1400px] mx-auto px-4">
            <ul className="flex items-center whitespace-nowrap">
              {categoryLinks.map((link) => (
                <li
                  key={link.label}
                  className="flex-shrink-0"
                  onMouseEnter={() => link.hasMegaMenu && openMega()}
                  onMouseLeave={() => link.hasMegaMenu && closeMega()}
                >
                  <Link
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    onClick={(e) => link.href === '#' && e.preventDefault()}
                    className={`flex items-center gap-1 px-3 py-3 text-sm font-medium transition-colors duration-200 ${
                      link.hasMegaMenu && megaOpen
                        ? 'text-[#e21a5a]'
                        : 'text-gray-700 hover:text-[#e21a5a]'
                    }`}
                  >
                    {link.label}
                    {link.hasMegaMenu && (
                      <svg
                        className={`w-3 h-3 transition-transform duration-200 ${megaOpen ? 'rotate-180' : ''}`}
                        fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                    {link.badge && (
                      <span
                        className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full uppercase tracking-wide ml-0.5 ${
                          link.badge === 'SALE'
                            ? 'bg-red-500 text-white'
                            : 'bg-pink-500 text-white'
                        }`}
                      >
                        {link.badge}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Mobile drawer ── */}
        {mobileOpen && (
          <div className="md:hidden bg-white border-b border-gray-200 shadow-lg">
            <nav className="px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-medium text-gray-700 hover:text-[#e21a5a] transition-colors py-2 border-b border-gray-50"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2 mt-1 border-t border-gray-100">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                  Shop By Category
                </p>
                {megaMenuColumns.map((col) => (
                  <div key={col.title} className="mb-3">
                    <Link
                      href={col.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setMobileOpen(false)}
                      className="block text-xs font-bold text-[#e21a5a] uppercase tracking-wider py-1"
                    >
                      {col.title}
                    </Link>
                    {col.items.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setMobileOpen(false)}
                        className="block text-sm text-gray-600 hover:text-[#e21a5a] transition-colors py-1"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            </nav>
          </div>
        )}
      </header>

      <CartDrawer />

      {/* ── Mega Menu — white dropdown matching the reference design ── */}
      {megaOpen && (
        <div
          className="fixed left-0 right-0 z-[9999]"
          style={{ top: '97px' }}
          onMouseEnter={openMega}
          onMouseLeave={closeMega}
        >
          <div className="bg-white border-t-2 border-[#ff2d78] shadow-[0_8px_40px_rgba(0,0,0,0.15)]">
            <div className="max-w-[1400px] mx-auto px-8 py-8">
              <div className="flex gap-12">
                {megaMenuColumns.map((col) => (
                  <div key={col.title} className="flex-1 min-w-0">
                    {/* Column title — pink, bold */}
                    <div className="flex items-center gap-3 mb-4">
                      {(() => {
                        // derive slug from href
                        const slug = col.href ? col.href.split('/').pop() : '';
                        const src = thumbs[slug];
                        if (src) {
                          return (
                            <img src={src} alt={col.title} className="w-16 h-12 object-cover rounded-md shadow-sm" />
                          );
                        }
                        return (
                          <div className="w-16 h-12 bg-gray-50 rounded-md" />
                        );
                      })()}
                      <Link
                        href={col.href}
                        onClick={() => setMegaOpen(false)}
                        className="block text-base font-bold text-[#ff2d78] hover:text-[#e91e63] transition-colors"
                      >
                        {col.title}
                      </Link>
                    </div>

                    {/* Items — plain dark text, generous line height */}
                    <ul className="flex flex-col">
                      {col.items.map((item) => (
                        <li key={item.label}>
                          <Link
                            href={item.href}
                            onClick={() => setMegaOpen(false)}
                            className="block py-1.5 text-[15px] text-gray-700 hover:text-[#ff2d78] transition-colors duration-150"
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
