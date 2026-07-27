'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  getStoredUser,
  logoutUser,
  MOCK_ORDERS,
  MOCK_ADDRESSES,
  MOCK_WISHLIST,
  type User,
  type Order,
  type Address,
  type WishlistItem,
} from '../../lib/mockAuth';

type Tab = 'overview' | 'orders' | 'addresses' | 'wishlist' | 'profile';

const STATUS_STYLES: Record<Order['status'], string> = {
  Delivered: 'bg-green-50 text-green-700 border-green-200',
  Processing: 'bg-blue-50 text-blue-700 border-blue-200',
  Shipped: 'bg-orange-50 text-orange-700 border-orange-200',
  Cancelled: 'bg-red-50 text-red-600 border-red-200',
};

export default function AccountPage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [tab, setTab] = useState<Tab>('overview');
  const [orders] = useState<Order[]>(MOCK_ORDERS);
  const [addresses, setAddresses] = useState<Address[]>(MOCK_ADDRESSES);
  const [wishlist, setWishlist] = useState<WishlistItem[]>(MOCK_WISHLIST);
  const [expandedOrder, setExpandedOrder] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const u = getStoredUser();
    if (!u) {
      router.replace('/login');
    } else {
      setUser(u);
    }
  }, [router]);

  const handleLogout = () => {
    logoutUser();
    router.push('/');
  };

  const removeWishlistItem = (id: string) => {
    setWishlist((prev) => prev.filter((item) => item.id !== id));
  };

  const setDefaultAddress = (id: string) => {
    setAddresses((prev) =>
      prev.map((a) => ({ ...a, isDefault: a.id === id }))
    );
  };

  const removeAddress = (id: string) => {
    setAddresses((prev) => prev.filter((a) => a.id !== id));
  };

  if (!mounted || !user) {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="flex flex-col items-center gap-3">
            <svg className="w-8 h-8 animate-spin text-[#e21a5a]" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            <p className="text-sm text-gray-500">Loading your account…</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const navItems: { id: Tab; label: string; icon: React.ReactNode }[] = [
    {
      id: 'overview',
      label: 'Overview',
      icon: (
        <svg className="w-4.5 h-4.5 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
    {
      id: 'orders',
      label: 'Order History',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
    },
    {
      id: 'addresses',
      label: 'Saved Addresses',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      id: 'wishlist',
      label: 'Wishlist',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
    {
      id: 'profile',
      label: 'My Profile',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-[#fef5ee] flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="max-w-[1200px] mx-auto px-4 py-8">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-6">
            <Link href="/" className="hover:text-[#e21a5a]">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-800">My Account</span>
          </nav>

          <div className="flex flex-col lg:flex-row gap-6">
            {/* Sidebar */}
            <aside className="lg:w-64 flex-shrink-0">
              <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                {/* User info */}
                <div className="bg-gradient-to-br from-[#e21a5a] to-[#ff5870] px-5 py-6 text-white">
                  <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center mb-3 text-xl font-bold">
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                  <p className="font-semibold text-base leading-tight">{user.name}</p>
                  <p className="text-white/80 text-xs mt-0.5 truncate">{user.email}</p>
                </div>

                {/* Nav */}
                <nav className="p-2">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setTab(item.id)}
                      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors duration-150 ${
                        tab === item.id
                          ? 'bg-[#fff0f3] text-[#e21a5a]'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                      }`}
                    >
                      <span className={tab === item.id ? 'text-[#e21a5a]' : 'text-gray-400'}>{item.icon}</span>
                      {item.label}
                    </button>
                  ))}

                  <div className="border-t border-gray-100 mt-2 pt-2">
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-gray-500 hover:bg-red-50 hover:text-red-600 transition-colors duration-150"
                    >
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                      </svg>
                      Sign Out
                    </button>
                  </div>
                </nav>
              </div>
            </aside>

            {/* Main content */}
            <div className="flex-1 min-w-0">
              {/* OVERVIEW */}
              {tab === 'overview' && (
                <div className="space-y-5">
                  <h1 className="text-xl font-heading font-bold text-gray-900">
                    Hello, {user.name.split(' ')[0]}! 👋
                  </h1>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { label: 'Total Orders', value: orders.length, color: 'text-[#e21a5a]', bg: 'bg-[#fff0f3]' },
                      { label: 'Saved Addresses', value: addresses.length, color: 'text-blue-600', bg: 'bg-blue-50' },
                      { label: 'Wishlist Items', value: wishlist.length, color: 'text-purple-600', bg: 'bg-purple-50' },
                    ].map((stat) => (
                      <div key={stat.label} className="bg-white rounded-2xl border border-gray-100 p-5 text-center">
                        <p className={`text-3xl font-bold ${stat.color}`}>{stat.value}</p>
                        <p className="text-xs text-gray-500 mt-1">{stat.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Recent order */}
                  {orders[0] && (
                    <div className="bg-white rounded-2xl border border-gray-100 p-5">
                      <div className="flex items-center justify-between mb-4">
                        <h2 className="font-heading font-bold text-gray-900 text-base">Recent Order</h2>
                        <button onClick={() => setTab('orders')} className="text-xs text-[#e21a5a] hover:underline font-medium">
                          View all →
                        </button>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="flex -space-x-2">
                          {orders[0].items.slice(0, 2).map((item) => (
                            <div key={item.id} className="w-12 h-12 rounded-lg overflow-hidden border-2 border-white">
                              <Image src={item.image} alt={item.name} width={48} height={48} className="w-full h-full object-cover" unoptimized />
                            </div>
                          ))}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900">{orders[0].id}</p>
                          <p className="text-xs text-gray-500 mt-0.5">{orders[0].date} · {orders[0].items.length} item{orders[0].items.length > 1 ? 's' : ''}</p>
                          <div className="flex items-center gap-3 mt-2">
                            <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full border ${STATUS_STYLES[orders[0].status]}`}>
                              {orders[0].status}
                            </span>
                            <span className="text-sm font-semibold text-gray-900">{orders[0].total}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Quick links */}
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: 'Manage Addresses', sub: `${addresses.length} saved`, tab: 'addresses' as Tab },
                      { label: 'My Wishlist', sub: `${wishlist.length} items`, tab: 'wishlist' as Tab },
                    ].map((card) => (
                      <button
                        key={card.label}
                        onClick={() => setTab(card.tab)}
                        className="bg-white rounded-2xl border border-gray-100 p-5 text-left hover:border-[#e21a5a]/30 hover:shadow-sm transition-all"
                      >
                        <p className="font-semibold text-gray-900 text-sm">{card.label}</p>
                        <p className="text-xs text-gray-400 mt-0.5">{card.sub}</p>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* ORDERS */}
              {tab === 'orders' && (
                <div>
                  <h2 className="text-xl font-heading font-bold text-gray-900 mb-5">Order History</h2>
                  {orders.length === 0 ? (
                    <div className="bg-white rounded-2xl border border-gray-100 p-12 text-center">
                      <p className="text-gray-400 text-sm">No orders yet.</p>
                      <Link href="/collections/all" className="mt-4 inline-block text-sm text-[#e21a5a] font-medium hover:underline">
                        Start shopping →
                      </Link>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {orders.map((order) => (
                        <div key={order.id} className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                          {/* Order header */}
                          <div
                            className="flex items-center justify-between px-5 py-4 cursor-pointer hover:bg-gray-50/50 transition-colors"
                            onClick={() => setExpandedOrder(expandedOrder === order.id ? null : order.id)}
                          >
                            <div className="flex items-center gap-4">
                              <div>
                                <p className="text-sm font-semibold text-gray-900">{order.id}</p>
                                <p className="text-xs text-gray-500 mt-0.5">{order.date}</p>
                              </div>
                              <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full border ${STATUS_STYLES[order.status]}`}>
                                {order.status}
                              </span>
                            </div>
                            <div className="flex items-center gap-4">
                              <span className="text-sm font-bold text-gray-900">{order.total}</span>
                              <svg
                                className={`w-4 h-4 text-gray-400 transition-transform ${expandedOrder === order.id ? 'rotate-180' : ''}`}
                                fill="none" stroke="currentColor" viewBox="0 0 24 24"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            </div>
                          </div>

                          {/* Order items */}
                          {expandedOrder === order.id && (
                            <div className="border-t border-gray-100 px-5 py-4 space-y-3">
                              {order.items.map((item) => (
                                <div key={item.id} className="flex items-center gap-3">
                                  <div className="w-14 h-14 rounded-xl overflow-hidden bg-gray-50 flex-shrink-0">
                                    <Image src={item.image} alt={item.name} width={56} height={56} className="w-full h-full object-cover" unoptimized />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <p className="text-sm text-gray-800 line-clamp-2 leading-snug">{item.name}</p>
                                    <p className="text-xs text-gray-400 mt-0.5">
                                      {item.size && `Size: ${item.size} · `}Qty: {item.qty}
                                    </p>
                                  </div>
                                  <p className="text-sm font-semibold text-gray-900 flex-shrink-0">{item.price}</p>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* ADDRESSES */}
              {tab === 'addresses' && (
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <h2 className="text-xl font-heading font-bold text-gray-900">Saved Addresses</h2>
                    <button className="text-sm bg-[#e21a5a] text-white px-4 py-2 rounded-xl hover:bg-[#c4134b] transition-colors font-medium">
                      + Add New
                    </button>
                  </div>
                  {addresses.length === 0 ? (
                    <div className="bg-white rounded-2xl border border-gray-100 p-12 text-center">
                      <p className="text-gray-400 text-sm">No saved addresses.</p>
                    </div>
                  ) : (
                    <div className="grid sm:grid-cols-2 gap-4">
                      {addresses.map((addr) => (
                        <div
                          key={addr.id}
                          className={`bg-white rounded-2xl border p-5 relative ${addr.isDefault ? 'border-[#e21a5a]/40' : 'border-gray-100'}`}
                        >
                          {addr.isDefault && (
                            <span className="absolute top-4 right-4 text-[10px] font-bold bg-[#fff0f3] text-[#e21a5a] px-2 py-0.5 rounded-full uppercase tracking-wide">
                              Default
                            </span>
                          )}
                          <div className="flex items-center gap-2 mb-3">
                            <svg className="w-4 h-4 text-[#e21a5a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span className="text-sm font-semibold text-gray-900">{addr.label}</span>
                          </div>
                          <p className="text-sm text-gray-700 font-medium">{addr.name}</p>
                          <p className="text-sm text-gray-500 mt-0.5">{addr.line1}</p>
                          {addr.line2 && <p className="text-sm text-gray-500">{addr.line2}</p>}
                          <p className="text-sm text-gray-500">{addr.city}, {addr.state} – {addr.pincode}</p>
                          <p className="text-sm text-gray-500 mt-0.5">{addr.phone}</p>

                          <div className="flex items-center gap-3 mt-4 pt-3 border-t border-gray-100">
                            {!addr.isDefault && (
                              <button
                                onClick={() => setDefaultAddress(addr.id)}
                                className="text-xs text-[#e21a5a] font-medium hover:underline"
                              >
                                Set as default
                              </button>
                            )}
                            <button
                              onClick={() => removeAddress(addr.id)}
                              className="text-xs text-gray-400 hover:text-red-500 transition-colors ml-auto"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* WISHLIST */}
              {tab === 'wishlist' && (
                <div>
                  <h2 className="text-xl font-heading font-bold text-gray-900 mb-5">
                    My Wishlist
                    {wishlist.length > 0 && (
                      <span className="ml-2 text-sm font-normal text-gray-400">({wishlist.length} items)</span>
                    )}
                  </h2>
                  {wishlist.length === 0 ? (
                    <div className="bg-white rounded-2xl border border-gray-100 p-12 text-center">
                      <div className="w-16 h-16 bg-[#fff0f3] rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-[#e21a5a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </div>
                      <p className="text-gray-500 text-sm mb-4">Your wishlist is empty.</p>
                      <Link href="/collections/all" className="text-sm text-[#e21a5a] font-medium hover:underline">
                        Explore products →
                      </Link>
                    </div>
                  ) : (
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {wishlist.map((item) => (
                        <div key={item.id} className="bg-white rounded-2xl border border-gray-100 overflow-hidden group">
                          <div className="relative aspect-square overflow-hidden bg-gray-50">
                            <Image
                              src={item.image}
                              alt={item.name}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                              unoptimized
                            />
                            <button
                              onClick={() => removeWishlistItem(item.id)}
                              className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full shadow flex items-center justify-center hover:bg-red-50 transition-colors"
                              aria-label="Remove from wishlist"
                            >
                              <svg className="w-4 h-4 text-[#e21a5a]" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                              </svg>
                            </button>
                          </div>
                          <div className="p-4">
                            <p className="text-sm text-gray-800 line-clamp-2 leading-snug font-medium">{item.name}</p>
                            <p className="text-sm font-bold text-gray-900 mt-1.5">{item.price}</p>
                            <Link
                              href={item.href}
                              className="mt-3 block w-full text-center text-xs font-semibold bg-[#e21a5a] text-white py-2 rounded-xl hover:bg-[#c4134b] transition-colors"
                            >
                              Shop Now
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* PROFILE */}
              {tab === 'profile' && (
                <div>
                  <h2 className="text-xl font-heading font-bold text-gray-900 mb-5">My Profile</h2>
                  <div className="bg-white rounded-2xl border border-gray-100 p-6">
                    <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-100">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#e21a5a] to-[#ff5870] flex items-center justify-center text-white text-2xl font-bold">
                        {user.name.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{user.name}</p>
                        <p className="text-sm text-gray-500">{user.email}</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {[
                        { label: 'Full Name', value: user.name, type: 'text' },
                        { label: 'Email Address', value: user.email, type: 'email' },
                        { label: 'Phone Number', value: user.phone ?? '', type: 'tel' },
                      ].map((field) => (
                        <div key={field.label}>
                          <label className="block text-sm font-medium text-gray-700 mb-1.5">{field.label}</label>
                          <input
                            type={field.type}
                            defaultValue={field.value}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#e21a5a] focus:ring-2 focus:ring-[#e21a5a]/10 transition-all"
                          />
                        </div>
                      ))}
                      <button className="mt-2 bg-[#e21a5a] hover:bg-[#c4134b] text-white font-semibold py-3 px-6 rounded-xl transition-colors text-sm">
                        Save Changes
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
