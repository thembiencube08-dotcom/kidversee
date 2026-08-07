'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import '../delivery-app.css';

interface Profile {
  full_name: string;
  email: string;
  phone: string;
  rating: number;
}

export default function DeliveryProfilePage() {
  const router = useRouter();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [push, setPush] = useState(true);
  const [promoNotif, setPromoNotif] = useState(true);
  const [dark, setDark] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProfile();
  }, []);

  async function loadProfile() {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) { router.push('/delivery/login'); return; }

    const { data } = await supabase
      .from('delivery_persons')
      .select('full_name, email, phone, rating')
      .eq('id', user.id)
      .single();

    setProfile(data || {
      full_name: user.email?.split('@')[0] || 'Courier',
      email: user.email || '',
      phone: '',
      rating: 5.0,
    });
    setLoading(false);
  }

  async function handleLogout() {
    await supabase.auth.signOut();
    router.push('/delivery/login');
  }

  if (loading) {
    return (
      <div className="d-screen" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ color: '#6B7280' }}>Loading…</div>
      </div>
    );
  }

  const initials = profile?.full_name?.split(' ').map((n) => n[0]).join('').toUpperCase().slice(0, 2) || 'D';

  return (
    <div className="d-screen">
      {/* Profile hero */}
      <div className="d-profile-hero">
        <button
          onClick={() => router.back()}
          style={{ position: 'absolute', top: 16, left: 16, background: 'rgba(255,255,255,0.2)', border: 'none', color: '#fff', borderRadius: 99, padding: '6px 12px', cursor: 'pointer', fontSize: 13 }}
        >
          ← Back
        </button>
        <div className="d-avatar">{initials}</div>
        <div>
          <div className="d-profile-name">{profile?.full_name}</div>
          <div className="d-profile-email">{profile?.email}</div>
          <div className="d-stars">
            ⭐ <span>{profile?.rating?.toFixed(1) || '5.0'}</span>
            <span style={{ opacity: 0.6, marginLeft: 4 }}>rating</span>
          </div>
        </div>
      </div>

      {/* My Account */}
      <div className="d-menu-section">
        <h4>My Account</h4>
        <div className="d-menu-row">
          <div className="d-menu-icon">🏷️</div>
          <span className="d-menu-label">Promocode</span>
          <span className="chevron">›</span>
        </div>
        <div className="d-menu-row">
          <div className="d-menu-icon">🎁</div>
          <span className="d-menu-label">Rewards</span>
          <span className="chevron">›</span>
        </div>
        <div className="d-menu-row">
          <div className="d-menu-icon">💳</div>
          <span className="d-menu-label">Payments</span>
          <span className="chevron">›</span>
        </div>
        <Link href="/delivery/dashboard" className="d-menu-row">
          <div className="d-menu-icon">🛵</div>
          <span className="d-menu-label">My orders</span>
          <span className="chevron">›</span>
        </Link>
      </div>

      {/* Notifications */}
      <div className="d-menu-section">
        <h4>Notifications</h4>
        <div className="d-menu-row" onClick={() => setPush((v) => !v)}>
          <div className="d-menu-icon">🔔</div>
          <span className="d-menu-label">Push notification</span>
          <div className={`d-toggle ${push ? '' : 'off'}`} />
        </div>
        <div className="d-menu-row" onClick={() => setPromoNotif((v) => !v)}>
          <div className="d-menu-icon">📢</div>
          <span className="d-menu-label">Promocode notification</span>
          <div className={`d-toggle ${promoNotif ? '' : 'off'}`} />
        </div>
      </div>

      {/* More */}
      <div className="d-menu-section">
        <h4>More</h4>
        <div className="d-menu-row" onClick={() => setDark((v) => !v)}>
          <div className="d-menu-icon">🌙</div>
          <span className="d-menu-label">Dark mode</span>
          <div className={`d-toggle ${dark ? '' : 'off'}`} />
        </div>
        <div className="d-menu-row">
          <div className="d-menu-icon">💬</div>
          <span className="d-menu-label">Support</span>
          <span className="chevron">›</span>
        </div>
        <div className="d-menu-row">
          <div className="d-menu-icon">ℹ️</div>
          <span className="d-menu-label">About Us</span>
          <span className="chevron">›</span>
        </div>
        <div className="d-menu-row">
          <div className="d-menu-icon">🔒</div>
          <span className="d-menu-label">Privacy &amp; Security</span>
          <span className="chevron">›</span>
        </div>
        <div className="d-menu-row" onClick={handleLogout} style={{ color: '#EF4444' }}>
          <div className="d-menu-icon" style={{ background: '#FEE2E2' }}>🚪</div>
          <span className="d-menu-label" style={{ color: '#EF4444' }}>Log out</span>
          <span className="chevron" style={{ color: '#EF4444' }}>›</span>
        </div>
      </div>

      {/* Bottom Nav */}
      <nav className="d-bottom-nav">
        <Link href="/delivery/dashboard" className="d-nav-item">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 12l9-9 9 9v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/></svg>
          <span>Home</span>
        </Link>
        <Link href="/delivery/dashboard" className="d-nav-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
          <span>Search</span>
        </Link>
        <Link href="/delivery/dashboard" className="d-nav-fab">+</Link>
        <Link href="/delivery/dashboard" className="d-nav-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
          <span>Saved</span>
        </Link>
        <Link href="/delivery/profile" className="d-nav-item active">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          <span>Profile</span>
        </Link>
      </nav>
    </div>
  );
}
