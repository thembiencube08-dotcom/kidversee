'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { getStoredUser, logoutUser } from '@/lib/mockAuth';
import { useCart } from '@/lib/cartContext';
import CartDrawer from '@/components/CartDrawer';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Shop All', href: '/collections/all' },
  { label: 'New Arrivals', href: '/collections/whats-new-baby-care' },
  { label: 'Trending Now', href: '/collections/trending-now-baby-care' },
  { label: 'Blogs', href: '/blogs/all-blog' },
  { label: 'Contact', href: '/pages/contact' },
];

const categoryLinks = [
  { label: 'Shop By Category', href: '#', badge: null, external: false },
  { label: 'Baby', href: '/collections/baby-new', badge: null, external: false },
  { label: 'Girls', href: '/collections/girls-new', badge: null, external: false },
  { label: 'Boys', href: '/collections/boys-new', badge: null, external: false },
  { label: 'Smart Pick', href: '/collections/end-of-season-sale', badge: 'SALE', badgeColor: 'bg-red-500', external: false },
  { label: 'Bamboo', href: '/collections/bamboo', badge: null, external: false },
  { label: 'Maternity', href: '/collections/maternity-wear', badge: null, external: false },
  { label: 'Toys & Gaming', href: '/collections/toys-gaming-new', badge: null, external: false },
  { label: 'Accessories', href: '/collections/accessories-new', badge: null, external: false },
  { label: 'Diaper', href: '/collections/diaper-new', badge: null, external: false },
  { label: 'Baby Basics', href: '/collections/fmcg', badge: 'POPULAR', badgeColor: 'bg-pink-500', external: false },
  { label: 'Shop By Price', href: '#', badge: null, external: false },
];

export default function Header() {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [accountOpen, setAccountOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const searchInputRef = useRef<HTMLInputElement>(null);
  const accountRef = useRef<HTMLDivElement>(null);
  const { totalCount, openCart } = useCart();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const user = getStoredUser();
    setIsLoggedIn(!!user);
    setUserName(user?.name ?? '');
  }, []);

  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (accountRef.current && !accountRef.current.contains(e.target as Node)) {
        setAccountOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setSearchQuery('');
    }
  };

  const handleLogout = () => {
    logoutUser();
    setIsLoggedIn(false);
    setUserName('');
    setAccountOpen(false);
    router.push('/');
  };

  return (
    <>
      <header className={`sticky top-0 z-50 w-full transition-shadow duration-300 ${scrolled ? 'shadow-md' : ''}`}>
        {/* Top Nav */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-[1400px] mx-auto px-4 flex items-center justify-between h-[80px]">
            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 hover:text-[#e21a5a] transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* Desktop Nav Links */}
            <nav className="hidden md:flex items-center gap-6">
              {navLinks?.map((link) => (
                <Link
                  key={link?.label}
                  href={link?.href}
                  className="text-sm font-medium text-gray-700 hover:text-[#e21a5a] transition-colors duration-200"
                >
                  {link?.label}
                </Link>
              ))}
            </nav>

            {/* Logo */}
            <Link href="/" className="flex items-center justify-center absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
              <Image
                src="/assets/images/kidverse-logo.png"
                alt="KidVerse - Every Little Smile"
                width={320}
                height={100}
                className="h-20 w-auto object-contain"
                priority
              />
            </Link>

            {/* Right Actions */}
            <div className="flex items-center gap-2">
              {/* Search */}
              <button
                className="p-2 hover:text-[#e21a5a] transition-colors"
                aria-label="Search"
                onClick={() => setSearchOpen(!searchOpen)}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>

              {/* Wishlist */}
              <Link href="/pages/wishlist" className="p-2 hover:text-[#e21a5a] transition-colors relative" aria-label="Wishlist">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </Link>

              {/* Account */}
              <div className="relative" ref={accountRef}>
                <button
                  className="p-2 hover:text-[#e21a5a] transition-colors"
                  aria-label="Account"
                  onClick={() => {
                    if (!isLoggedIn) {
                      router.push('/login');
                    } else {
                      setAccountOpen(!accountOpen);
                    }
                  }}
                >
                  {isLoggedIn ? (
                    <div className="w-7 h-7 rounded-full bg-[#e21a5a] flex items-center justify-center text-white text-xs font-bold">
                      {userName.charAt(0).toUpperCase()}
                    </div>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  )}
                </button>

                {/* Account dropdown */}
                {accountOpen && isLoggedIn && (
                  <div className="absolute right-0 top-full mt-2 w-52 bg-white rounded-2xl shadow-lg border border-gray-100 py-2 z-50">
                    <div className="px-4 py-2.5 border-b border-gray-100">
                      <p className="text-sm font-semibold text-gray-900 truncate">{userName}</p>
                      <p className="text-xs text-gray-400">My Account</p>
                    </div>
                    {[
                      { label: 'Dashboard', href: '/account' },
                      { label: 'Order History', href: '/account' },
                      { label: 'Saved Addresses', href: '/account' },
                      { label: 'Wishlist', href: '/account' },
                    ].map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={() => setAccountOpen(false)}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#e21a5a] transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                    <div className="border-t border-gray-100 mt-1 pt-1">
                      <button
                        onClick={handleLogout}
                        className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-red-50 transition-colors"
                      >
                        Sign Out
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Cart */}
              <button
                onClick={openCart}
                className="p-2 hover:text-[#e21a5a] transition-colors relative"
                aria-label="Cart"
              >
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

          {/* Search bar dropdown */}
          {searchOpen && (
            <div className="border-t border-gray-100 bg-white px-4 py-3">
              <form onSubmit={handleSearchSubmit} className="max-w-2xl mx-auto relative">
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for baby clothing, diapers, bamboo…"
                  className="w-full pl-4 pr-24 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#e21a5a] focus:ring-2 focus:ring-[#e21a5a]/10 transition-all"
                />
                <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
                  <button
                    type="submit"
                    className="bg-[#e21a5a] text-white text-xs font-medium px-3 py-1.5 rounded-lg hover:bg-[#c4134b] transition-colors"
                  >
                    Search
                  </button>
                  <button
                    type="button"
                    onClick={() => { setSearchOpen(false); setSearchQuery(''); }}
                    className="p-1 text-gray-400 hover:text-gray-600"
                    aria-label="Close search"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>

        {/* Category Nav */}
        <div className="bg-white border-b border-gray-100 overflow-x-auto scrollbar-hide">
          <div className="max-w-[1400px] mx-auto px-4">
            <ul className="flex items-center gap-0 whitespace-nowrap">
              {categoryLinks?.map((link) => (
                <li key={link?.label}>
                  <Link
                    href={link?.href}
                    target={link?.external ? '_blank' : undefined}
                    rel={link?.external ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-1 px-3 py-3 text-sm font-medium text-gray-700 hover:text-[#e21a5a] transition-colors duration-200 relative"
                  >
                    {link?.label}
                    {link?.badge && (
                      <span className={`${link?.badgeColor} text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full ml-0.5 uppercase tracking-wide`}>
                        {link?.badge}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-gray-200 shadow-lg z-50">
            <nav className="px-4 py-4 flex flex-col gap-1">
              {navLinks?.map((link) => (
                <Link
                  key={link?.label}
                  href={link?.href}
                  className="text-sm font-medium text-gray-700 hover:text-[#e21a5a] transition-colors py-2 border-b border-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link?.label}
                </Link>
              ))}
              {/* Auth links in mobile */}
              <div className="pt-2 mt-1 border-t border-gray-100">
                {isLoggedIn ? (
                  <>
                    <Link href="/account" className="block text-sm font-medium text-gray-700 hover:text-[#e21a5a] py-2" onClick={() => setMobileMenuOpen(false)}>
                      My Account
                    </Link>
                    <button onClick={() => { handleLogout(); setMobileMenuOpen(false); }} className="block text-sm text-red-500 py-2">
                      Sign Out
                    </button>
                  </>
                ) : (
                  <>
                    <Link href="/login" className="block text-sm font-medium text-gray-700 hover:text-[#e21a5a] py-2" onClick={() => setMobileMenuOpen(false)}>
                      Sign In
                    </Link>
                    <Link href="/register" className="block text-sm font-medium text-[#e21a5a] py-2" onClick={() => setMobileMenuOpen(false)}>
                      Create Account
                    </Link>
                  </>
                )}
              </div>
              <div className="pt-2 mt-1">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Categories</p>
                {categoryLinks?.filter((l) => l?.href !== '#')?.slice(0, 8)?.map((link) => (
                  <Link
                    key={link?.label}
                    href={link?.href}
                    target={link?.external ? '_blank' : undefined}
                    rel={link?.external ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-1 text-sm text-gray-600 hover:text-[#e21a5a] transition-colors py-1.5"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link?.label}
                    {link?.badge && (
                      <span className={`${link?.badgeColor} text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full uppercase`}>
                        {link?.badge}
                      </span>
                    )}
                  </Link>
                ))}
              </div>
            </nav>
          </div>
        )}
      </header>
      <CartDrawer />
    </>
  );
}
