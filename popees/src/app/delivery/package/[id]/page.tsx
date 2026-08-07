'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, useParams } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import '../../delivery-app.css';

interface Stop {
  id: string;
  tracking_no: string;
  customer_name: string;
  phone: string;
  address: string;
  city: string;
  note: string;
  window: string;
  status: string;
  fail_reason: string;
  cod_amount: number;
  weight_kg: number;
  picked_at: string | null;
  delivered_at: string | null;
  created_at: string;
  assigned_to: string;
}

interface Profile {
  full_name: string;
  rating: number;
}

function fmt(iso: string | null) {
  if (!iso) return '—';
  return new Date(iso).toLocaleString(undefined, {
    day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit',
  });
}

export default function PackageDetailPage() {
  const router = useRouter();
  const { id } = useParams<{ id: string }>();
  const [stop, setStop] = useState<Stop | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const [failReason, setFailReason] = useState('');
  const [showFailSheet, setShowFailSheet] = useState(false);
  const [toast, setToast] = useState('');

  useEffect(() => {
    loadData();
  }, [id]);

  async function loadData() {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) { router.push('/delivery/login'); return; }

    const { data: stopData } = await supabase
      .from('delivery_stops')
      .select('*')
      .eq('id', id)
      .single();

    const { data: prof } = await supabase
      .from('delivery_persons')
      .select('full_name, rating')
      .eq('id', user.id)
      .single();

    setStop(stopData);
    setProfile(prof);
    setLoading(false);
  }

  async function updateStatus(status: string, reason = '') {
    const updates: Record<string, any> = { status };
    if (reason) updates.fail_reason = reason;
    if (status === 'picked_up') updates.picked_at = new Date().toISOString();
    if (status === 'delivered') updates.delivered_at = new Date().toISOString();

    const { error } = await supabase.from('delivery_stops').update(updates).eq('id', id);
    if (error) { showToast('Could not update status'); return; }

    setStop((prev) => prev ? { ...prev, ...updates } : prev);
    showToast(status === 'delivered' ? '✅ Marked delivered!' : status === 'failed' ? '❌ Marked failed' : '📦 Picked up!');
    if (status === 'delivered' || status === 'failed') {
      setTimeout(() => router.push('/delivery/dashboard'), 1500);
    }
    setShowFailSheet(false);
  }

  function showToast(msg: string) {
    setToast(msg);
    setTimeout(() => setToast(''), 2000);
  }

  if (loading) {
    return (
      <div className="d-screen" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ color: '#6B7280' }}>Loading…</div>
      </div>
    );
  }

  if (!stop) {
    return (
      <div className="d-screen" style={{ padding: 20 }}>
        <Link href="/delivery/dashboard" className="d-back">← Back</Link>
        <div style={{ textAlign: 'center', padding: '60px 20px', color: '#9CA3AF' }}>Package not found</div>
      </div>
    );
  }

  const isActive = stop.status === 'pending' || stop.status === 'out' || stop.status === 'picked_up';

  return (
    <div className="d-screen">
      {/* Map placeholder */}
      <div className="d-pkg-map">
        <div className="d-pkg-map-grid" />
        <div className="d-pkg-map-route">
          {/* Route line SVG */}
          <svg width="200" height="80" viewBox="0 0 200 80">
            <path d="M 20 60 C 60 60 80 20 160 20" stroke="#e21a5a" strokeWidth="3" fill="none" strokeDasharray="6 4" />
            <circle cx="20" cy="60" r="6" fill="#e21a5a" />
            <circle cx="160" cy="20" r="8" fill="#e21a5a" />
            <text x="155" y="12" fill="#e21a5a" fontSize="10" fontWeight="700">📍</text>
          </svg>
          <div style={{
            position: 'absolute', top: '50%', left: '60%',
            transform: 'translate(-50%,-50%)',
            background: '#e21a5a', color: '#fff',
            fontSize: 11, fontWeight: 700,
            padding: '4px 10px', borderRadius: 99,
            boxShadow: '0 2px 8px rgba(226,26,90,0.4)'
          }}>
            {stop.window || '~20 min'}
          </div>
        </div>
        {/* Back button over map */}
        <button
          onClick={() => router.back()}
          className="d-back"
          style={{ position: 'absolute', top: 16, left: 8, background: 'rgba(255,255,255,0.85)', borderRadius: 99, zIndex: 5 }}
        >
          ← Back
        </button>
      </div>

      {/* Courier card */}
      <div className="d-pkg-courier-card">
        <div className="d-pkg-courier-avatar">
          {profile?.full_name?.[0] || 'D'}
        </div>
        <div style={{ flex: 1 }}>
          <div className="d-pkg-courier-name">{profile?.full_name || 'Delivery Person'}</div>
          <div className="d-pkg-courier-role">Personal Courier</div>
          <div className="d-rating">
            ⭐ <span>{profile?.rating?.toFixed(1) || '5.0'}</span>
          </div>
        </div>
        <div className="d-pkg-actions">
          {stop.phone && (
            <a href={`tel:${stop.phone}`} className="d-pkg-action-btn" title="Call customer">📞</a>
          )}
          {stop.address && (
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(stop.address)}`}
              target="_blank" rel="noopener noreferrer"
              className="d-pkg-action-btn" title="Navigate"
            >🗺️</a>
          )}
        </div>
      </div>

      {/* Package info */}
      <div style={{ padding: '16px 20px 0' }}>
        <div className="d-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
            <span style={{ fontSize: 15, fontWeight: 700, color: '#1A1D2E' }}>Package Status</span>
            <span style={{ fontSize: 12, color: '#3B3DBF', fontWeight: 600, cursor: 'pointer' }}>Details ›</span>
          </div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 8 }}>
            <span style={{ background: '#fce4ec', color: '#e21a5a', fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 99 }}>
              {stop.tracking_no}
            </span>
            <span className={`d-status-pill ${
              stop.status === 'delivered' ? 'delivered'
              : stop.status === 'failed' ? 'failed'
              : stop.status === 'picked_up' ? 'picked'
              : 'pending'
            }`}>
              {stop.status === 'picked_up' ? 'Picked Up'
               : stop.status === 'delivered' ? 'Delivered'
               : stop.status === 'failed' ? 'Failed'
               : 'Pending'}
            </span>
          </div>
          {stop.cod_amount > 0 && (
            <div style={{ fontSize: 13, color: '#6B7280' }}>
              💵 COD Amount: <strong style={{ color: '#1A1D2E' }}>₹{stop.cod_amount}</strong>
            </div>
          )}
          {stop.weight_kg > 0 && (
            <div style={{ fontSize: 13, color: '#6B7280', marginTop: 4 }}>
              ⚖️ Weight: <strong style={{ color: '#1A1D2E' }}>{stop.weight_kg} kg</strong>
            </div>
          )}
          {stop.note && (
            <div style={{ fontSize: 13, color: '#6B7280', marginTop: 4 }}>
              📝 Note: <span style={{ color: '#1A1D2E' }}>{stop.note}</span>
            </div>
          )}
        </div>
      </div>

      {/* Timeline */}
      <div className="d-timeline">
        <h3>
          Delivery Timeline
          <span style={{ fontSize: 12, color: '#9CA3AF', fontWeight: 400 }}>
            {stop.fail_reason ? `Failed: ${stop.fail_reason}` : ''}
          </span>
        </h3>

        <div className="d-timeline-row">
          <div className="d-timeline-dot blue">📦</div>
          <div className="d-timeline-body">
            <strong>Order Created</strong>
            <span>Package registered in system</span>
          </div>
          <div className="d-timeline-time">{fmt(stop.created_at)}</div>
        </div>

        <div className="d-timeline-row">
          <div className={`d-timeline-dot ${stop.picked_at ? 'green' : 'grey'}`}>
            {stop.picked_at ? '🛵' : '⏳'}
          </div>
          <div className="d-timeline-body">
            <strong>{stop.picked_at ? 'Picked Up' : 'Awaiting Pickup'}</strong>
            <span>
              {stop.picked_at
                ? `30 minutes ago`
                : 'Not yet picked up'}
            </span>
          </div>
          <div className="d-timeline-time">{fmt(stop.picked_at)}</div>
        </div>

        <div className="d-timeline-row">
          <div className="d-timeline-dot grey">📍</div>
          <div className="d-timeline-body">
            <strong>Delivery On</strong>
            <span>{stop.address}</span>
          </div>
          <div className="d-timeline-time">{stop.window || '—'}</div>
        </div>

        <div className="d-timeline-row">
          <div className={`d-timeline-dot ${stop.status === 'delivered' ? 'green' : 'grey'}`}>
            {stop.status === 'delivered' ? '✅' : '💳'}
          </div>
          <div className="d-timeline-body">
            <strong>
              {stop.status === 'delivered' ? 'Delivered' : 'Payment Method'}
            </strong>
            <span>{stop.cod_amount > 0 ? `Cash on Delivery — ₹${stop.cod_amount}` : 'Prepaid'}</span>
          </div>
          <div className="d-timeline-time">{fmt(stop.delivered_at)}</div>
        </div>
      </div>

      {/* Action buttons */}
      {isActive && (
        <div style={{ padding: '0 20px 100px', display: 'flex', flexDirection: 'column', gap: 10 }}>
          {stop.status === 'pending' && (
            <button className="d-btn" onClick={() => updateStatus('picked_up')}>
              📦 Mark as Picked Up
            </button>
          )}
          {(stop.status === 'picked_up' || stop.status === 'out') && (
            <button className="d-btn" onClick={() => updateStatus('delivered')}>
              ✅ Mark as Delivered
            </button>
          )}
          <button
            className="d-btn"
            style={{ background: '#EF4444' }}
            onClick={() => setShowFailSheet(true)}
          >
            ❌ Mark as Failed
          </button>
        </div>
      )}

      {/* Fail sheet */}
      {showFailSheet && (
        <>
          <div
            style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)', zIndex: 40 }}
            onClick={() => setShowFailSheet(false)}
          />
          <div style={{
            position: 'fixed', bottom: 0, left: '50%', transform: 'translateX(-50%)',
            width: '100%', maxWidth: 420,
            background: '#fff', borderRadius: '20px 20px 0 0',
            padding: '20px 20px 36px', zIndex: 50,
          }}>
            <h2 style={{ fontFamily: 'inherit', fontSize: 18, fontWeight: 700, margin: '0 0 16px' }}>
              Mark as Failed
            </h2>
            <div className="d-field">
              <label>Reason</label>
              <input
                value={failReason}
                onChange={(e) => setFailReason(e.target.value)}
                placeholder="e.g. Customer unavailable, wrong address"
              />
            </div>
            <div style={{ display: 'flex', gap: 10, marginTop: 16 }}>
              <button
                className="d-btn d-btn-ghost"
                onClick={() => setShowFailSheet(false)}
                style={{ flex: 1 }}
              >
                Cancel
              </button>
              <button
                className="d-btn"
                style={{ flex: 1, background: '#EF4444' }}
                onClick={() => updateStatus('failed', failReason || 'Not specified')}
              >
                Confirm
              </button>
            </div>
          </div>
        </>
      )}

      {/* Toast */}
      <div className={`d-toast ${toast ? 'show' : ''}`}>{toast}</div>
    </div>
  );
}
