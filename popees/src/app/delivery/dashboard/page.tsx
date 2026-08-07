'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import '../delivery-app.css';

interface Stop {
  id: string;
  tracking_no: string;
  customer_name: string;
  address: string;
  city: string;
  status: string;
  cod_amount: number;
  seq: number;
}

interface Profile {
  full_name: string;
  email: string;
}

export default function DeliveryDashboard() {
  const router = useRouter();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [stops, setStops] = useState<Stop[]>([]);
  const [trackingInput, setTrackingInput] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuthAndLoad();

    const channel = supabase
      .channel('dashboard-stops')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'delivery_stops' }, () => {
        loadStops();
      })
      .subscribe();

    return () => { channel.unsubscribe(); };
  }, []);

  async function checkAuthAndLoad() {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) { router.push('/delivery/login'); return; }

    const { data: prof } = await supabase
      .from('delivery_persons')
      .select('full_name, email')
      .eq('id', user.id)
      .single();

    setProfile(prof || { full_name: user.email || 'Courier', email: user.email || '' });
    await loadStops(user.id);
    setLoading(false);
  }

  async function loadStops(userId?: string) {
    const { data: { user } } = await supabase.auth.getUser();
    const uid = userId || user?.id;
    if (!uid) return;

    const { data } = await supabase
      .from('delivery_stops')
      .select('id,tracking_no,customer_name,address,city,status,cod_amount,seq')
      .eq('assigned_to', uid)
      .order('seq', { ascending: true });

    setStops(data || []);
  }

  function handleTrack(e: React.FormEvent) {
    e.preventDefault();
    if (!trackingInput.trim()) return;
    const found = stops.find(
      (s) => s.tracking_no.toLowerCase() === trackingInput.trim().toLowerCase()
    );
    if (found) router.push(`/delivery/package/${found.id}`);
    else alert('No package found with that tracking number.');
  }

  const firstName = profile?.full_name?.split(' ')[0] || 'Courier';
  const activeStops = stops.filter((s) => s.status === 'pending' || s.status === 'out' || s.status === 'picked_up');
  const deliveredToday = stops.filter((s) => s.status === 'delivered').length;

  if (loading) {
    return (
      <div className="d-screen" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ color: '#6B7280', fontSize: 14 }}>Loading…</div>
      </div>
    );
  }

  return (
    <div className="d-screen">
      {/* Top bar */}
      <div className="d-topbar">
        <div>
          <div style={{ fontSize: 12, color: '#9CA3AF', marginBottom: 2 }}>Good morning,</div>
          <div style={{ fontSize: 16, fontWeight: 700, color: '#1A1D2E' }}>{firstName} 👋</div>
        </div>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <div className="d-topbar-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
              <path d="M13.73 21a2 2 0 0 1-3.46 0" />
            </svg>
          </div>
          <Link href="/delivery/profile">
            <div className="d-topbar-icon" style={{ background: '#e21a5a', color: '#fff', fontWeight: 700, fontSize: 14 }}>
              {firstName[0]}
            </div>
          </Link>
        </div>
      </div>

      {/* Stats strip */}
      <div style={{ display: 'flex', gap: 10, padding: '14px 20px' }}>
        {[
          { label: 'Total', val: stops.length, color: '#e21a5a' },
          { label: 'Active', val: activeStops.length, color: '#F97316' },
          { label: 'Done today', val: deliveredToday, color: '#22C55E' },
        ].map((s) => (
          <div key={s.label} className="d-card" style={{ flex: 1, textAlign: 'center', padding: '12px 8px' }}>
            <div style={{ fontSize: 22, fontWeight: 800, color: s.color }}>{s.val}</div>
            <div style={{ fontSize: 11, color: '#9CA3AF', marginTop: 2 }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Track your Package */}
      <div style={{ padding: '0 20px 16px' }}>
        <div className="d-card-blue">
          <div style={{ fontSize: 20, fontWeight: 800, marginBottom: 4 }}>Track your Package</div>
          <div style={{ fontSize: 13, opacity: 0.8, marginBottom: 12 }}>Enter tracking number to start tracking</div>
          <form onSubmit={handleTrack}>
            <div className="d-track-input">
              <svg viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2" width="18" height="18">
                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
              </svg>
              <input
                value={trackingInput}
                onChange={(e) => setTrackingInput(e.target.value)}
                placeholder="For ex: RU93474764"
              />
              <button type="submit" className="d-track-btn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="18" height="18">
                  <path d="M4 6h16M4 12h16M4 18h7"/>
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* More Services */}
      <div className="d-section-title">
        <h3>More Services</h3>
        <svg viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" width="18" height="18">
          <path d="M7 16V4m0 0L3 8m4-4 4 4M17 8v12m0 0 4-4m-4 4-4-4"/>
        </svg>
      </div>
      <div className="d-services">
        <div className="d-service-card blue">
          <h4>Pick &amp; Drop</h4>
          <p>Safe &amp; Secure</p>
          <div className="d-service-arrow">→</div>
          <div style={{ position: 'absolute', right: 10, bottom: 10, fontSize: 36, opacity: 0.25 }}>🛵</div>
        </div>
        <div className="d-service-card peach">
          <h4>Shipping</h4>
          <p>Upto 200kg</p>
          <div className="d-service-arrow">→</div>
          <div style={{ position: 'absolute', right: 10, bottom: 10, fontSize: 36, opacity: 0.25 }}>📦</div>
        </div>
        <div className="d-service-card" style={{ background: '#F0FDF4', width: 140 }}>
          <h4>Express</h4>
          <p>Same day</p>
          <div className="d-service-arrow" style={{ background: '#22C55E', color: '#fff' }}>→</div>
          <div style={{ position: 'absolute', right: 10, bottom: 10, fontSize: 36, opacity: 0.25 }}>⚡</div>
        </div>
      </div>

      {/* Orders in Progress */}
      <div className="d-section-title">
        <h3>Orders in Progress</h3>
        <svg viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" width="18" height="18">
          <path d="M7 16V4m0 0L3 8m4-4 4 4M17 8v12m0 0 4-4m-4 4-4-4"/>
        </svg>
      </div>

      {activeStops.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '40px 20px', color: '#9CA3AF' }}>
          <div style={{ fontSize: 40, marginBottom: 8 }}>🎉</div>
          <div style={{ fontWeight: 600, color: '#1A1D2E' }}>All done for today!</div>
          <div style={{ fontSize: 13, marginTop: 4 }}>No active deliveries.</div>
        </div>
      ) : (
        activeStops.map((s) => (
          <Link key={s.id} href={`/delivery/package/${s.id}`} style={{ textDecoration: 'none' }}>
            <div className="d-order-row">
              <div className={`d-order-icon ${s.status === 'pending' ? 'orange' : 'green'}`}>
                {s.status === 'pending' ? '🛵' : '📦'}
              </div>
              <div className="d-order-body">
                <strong>{s.tracking_no}</strong>
                <span>{s.city || s.address?.split(',').pop()?.trim() || 'Unknown location'}</span>
              </div>
              <div className={`d-status-pill ${s.status === 'pending' ? 'pending' : s.status === 'picked_up' ? 'picked' : 'accepted'}`}>
                {s.status === 'pending' ? 'Pending' : s.status === 'picked_up' ? 'Picked up' : 'Active'}
              </div>
            </div>
          </Link>
        ))
      )}

      {/* Completed section */}
      {stops.filter(s => s.status === 'delivered' || s.status === 'failed').length > 0 && (
        <>
          <div className="d-section-title" style={{ marginTop: 8 }}>
            <h3>Completed</h3>
          </div>
          {stops.filter(s => s.status === 'delivered' || s.status === 'failed').map((s) => (
            <Link key={s.id} href={`/delivery/package/${s.id}`} style={{ textDecoration: 'none' }}>
              <div className="d-order-row">
                <div className={`d-order-icon ${s.status === 'delivered' ? 'green' : ''}`}
                     style={s.status === 'failed' ? { background: '#FEE2E2' } : {}}>
                  {s.status === 'delivered' ? '✅' : '❌'}
                </div>
                <div className="d-order-body">
                  <strong>{s.tracking_no}</strong>
                  <span>{s.city || s.address?.split(',').pop()?.trim()}</span>
                </div>
                <div className={`d-status-pill ${s.status === 'delivered' ? 'delivered' : 'failed'}`}>
                  {s.status === 'delivered' ? 'Delivered' : 'Failed'}
                </div>
              </div>
            </Link>
          ))}
        </>
      )}

      {/* Bottom Nav */}
      <nav className="d-bottom-nav">
        <Link href="/delivery/dashboard" className="d-nav-item active">
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
        <Link href="/delivery/profile" className="d-nav-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          <span>Profile</span>
        </Link>
      </nav>
    </div>
  );
}
