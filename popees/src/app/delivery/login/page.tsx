'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';

export default function DeliveryLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const supabaseConfigured =
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
    !process.env.NEXT_PUBLIC_SUPABASE_URL.includes('dummy');

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setError('');

    if (!supabaseConfigured) {
      setError('Supabase is not configured yet. Please add your NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY to the .env file.');
      return;
    }

    setLoading(true);
    try {
      const { error: authError } = await supabase.auth.signInWithPassword({ email, password });
      if (authError) throw authError;
      router.push('/delivery/dashboard');
    } catch (err: any) {
      setError(err.message || 'Login failed. Check your credentials.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: '#fff',
      maxWidth: 420,
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: "'Inter', sans-serif",
    }}>
      {/* Hero banner — brand pink */}
      <div style={{
        background: 'linear-gradient(135deg, #e21a5a 0%, #ff5580 100%)',
        padding: '60px 28px 40px',
        borderRadius: '0 0 32px 32px',
        color: '#fff',
        marginBottom: 32,
      }}>
        {/* Popees logo text */}
        <div style={{ fontSize: 13, fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', opacity: 0.85, marginBottom: 20 }}>
          POPEES BABY CARE
        </div>
        <div style={{ fontSize: 40, marginBottom: 12 }}>🛵</div>
        <h1 style={{ fontSize: 28, fontWeight: 800, margin: '0 0 6px', letterSpacing: '-0.01em' }}>
          Welcome back
        </h1>
        <p style={{ fontSize: 14, opacity: 0.85, margin: 0 }}>
          Sign in to your delivery account
        </p>
      </div>

      <div style={{ padding: '0 28px 40px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Supabase not configured warning */}
        {!supabaseConfigured && (
          <div style={{
            background: '#FFF3CD', color: '#856404',
            border: '1px solid #FFECB5',
            borderRadius: 10, padding: '12px 14px',
            fontSize: 12, lineHeight: 1.5,
            marginBottom: 16,
          }}>
            <strong>⚠️ Supabase not connected.</strong><br />
            Add your real <code>NEXT_PUBLIC_SUPABASE_URL</code> and <code>NEXT_PUBLIC_SUPABASE_ANON_KEY</code> to <strong>.env</strong>, then restart the server.
          </div>
        )}

        {error && (
          <div style={{
            background: '#FEE2E2', color: '#DC2626',
            borderRadius: 10, padding: '12px 14px',
            fontSize: 13, marginBottom: 16,
          }}>
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div>
            <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: '#6B7280', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Email
            </label>
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
              style={{
                width: '100%', border: '1.5px solid #E5E7EB',
                borderRadius: 10, padding: '13px 14px',
                fontSize: 14, background: '#FAFAFA',
                color: '#1A1D2E', outline: 'none', boxSizing: 'border-box',
              }}
              onFocus={(e) => e.target.style.borderColor = '#e21a5a'}
              onBlur={(e) => e.target.style.borderColor = '#E5E7EB'}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: '#6B7280', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
              style={{
                width: '100%', border: '1.5px solid #E5E7EB',
                borderRadius: 10, padding: '13px 14px',
                fontSize: 14, background: '#FAFAFA',
                color: '#1A1D2E', outline: 'none', boxSizing: 'border-box',
              }}
              onFocus={(e) => e.target.style.borderColor = '#e21a5a'}
              onBlur={(e) => e.target.style.borderColor = '#E5E7EB'}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%',
              background: loading ? '#f4a0b5' : '#e21a5a',
              color: '#fff',
              border: 'none',
              borderRadius: 10,
              padding: '14px',
              fontSize: 15,
              fontWeight: 700,
              cursor: loading ? 'not-allowed' : 'pointer',
              marginTop: 8,
              fontFamily: 'inherit',
              transition: 'background 0.15s',
            }}
          >
            {loading ? 'Signing in…' : 'Sign In'}
          </button>
        </form>

        <p style={{ textAlign: 'center', marginTop: 24, fontSize: 13, color: '#6B7280' }}>
          Don&apos;t have an account?{' '}
          <Link href="/delivery/register" style={{ color: '#e21a5a', fontWeight: 700, textDecoration: 'none' }}>
            Create one
          </Link>
        </p>

        <Link href="/" style={{ display: 'block', textAlign: 'center', marginTop: 12, fontSize: 13, color: '#9CA3AF', textDecoration: 'none' }}>
          ← Back to store
        </Link>
      </div>
    </div>
  );
}
