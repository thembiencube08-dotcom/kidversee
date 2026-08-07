'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import '../delivery-app.css';

export default function DeliveryRegisterPage() {
  const router = useRouter();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    if (password !== confirm) {
      setError('Passwords do not match.');
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }
    setLoading(true);
    try {
      // 1. Create auth user
      const { data, error: signUpError } = await supabase.auth.signUp({
        email,
        password,
        options: { data: { full_name: fullName } },
      });
      if (signUpError) throw signUpError;

      // 2. Insert delivery_persons profile
      if (data.user) {
        const { error: profileError } = await supabase.from('delivery_persons').insert({
          id: data.user.id,
          full_name: fullName,
          email,
          phone,
        });
        if (profileError) throw profileError;
      }

      setSuccess('Account created! Check your email to confirm, then sign in.');
      setTimeout(() => router.push('/delivery/login'), 3000);
    } catch (err: any) {
      setError(err.message || 'Registration failed. Try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="d-auth">
      <div className="d-auth-hero">
        <div style={{ fontSize: 36, marginBottom: 14 }}>📦</div>
        <h1>Create account</h1>
        <p>Join the Popees delivery team</p>
      </div>

      {error && <div className="d-error">{error}</div>}
      {success && (
        <div style={{ background: '#DCFCE7', color: '#16A34A', borderRadius: 8, padding: '10px 14px', fontSize: 13, marginBottom: 16 }}>
          {success}
        </div>
      )}

      <form onSubmit={handleRegister} style={{ flex: 1 }}>
        <div className="d-field">
          <label>Full Name</label>
          <input
            type="text"
            placeholder="e.g. Priya Menon"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div className="d-field">
          <label>Email</label>
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
          />
        </div>
        <div className="d-field">
          <label>Phone Number</label>
          <input
            type="tel"
            placeholder="+91 90XXXXXXXX"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="d-field">
          <label>Password</label>
          <input
            type="password"
            placeholder="Min. 6 characters"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="new-password"
          />
        </div>
        <div className="d-field">
          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="Re-enter your password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            required
          />
        </div>

        <button className="d-btn" type="submit" disabled={loading}>
          {loading ? 'Creating account…' : 'Create Account'}
        </button>
      </form>

      <p className="d-auth-switch">
        Already have an account? <Link href="/delivery/login">Sign in</Link>
      </p>
    </div>
  );
}
