'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { loginSupplier, registerSupplier, isSupplierLoggedIn } from '@/lib/supplierAuth';

type Mode = 'login' | 'register';

export default function SupplierLoginPage() {
  const router = useRouter();
  const [mode, setMode] = useState<Mode>('login');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [contactName, setContactName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [showPw, setShowPw] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => { if (isSupplierLoggedIn()) router.replace('/supplier'); }, [router]);

  const reset = () => { setError(''); setSuccess(''); };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(''); setSuccess('');

    if (mode === 'register') {
      if (!name.trim()) return setError('Business name is required.');
      if (password.length < 6) return setError('Password must be at least 6 characters.');
      if (password !== confirm) return setError('Passwords do not match.');
      setLoading(true);
      await new Promise((r) => setTimeout(r, 600));
      const result = registerSupplier(name, email, password, contactName, phone, address);
      setLoading(false);
      if (!result.ok) return setError(result.error!);
      setSuccess('Account created! You can now sign in.');
      setMode('login');
      setName(''); setPassword(''); setConfirm(''); setContactName(''); setPhone(''); setAddress('');
      return;
    }

    setLoading(true);
    await new Promise((r) => setTimeout(r, 600));
    const result = loginSupplier(email, password);
    setLoading(false);
    if (!result.ok) return setError(result.error!);
    router.replace('/supplier');
  };

  const inp = 'w-full border border-pink-200 bg-pink-50/50 rounded-lg px-4 py-2.5 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:border-[#ff2d78] focus:bg-white transition-all';
  const lbl = 'block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5';

  return (
    <div className="min-h-screen bg-[#fff0f5] flex items-center justify-center px-5 py-12">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#ff2d78]/08 blur-[80px]" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-[#ff2d78]/06 blur-[80px]" />
      </div>

      <div className="relative w-full max-w-md">
        {/* Logo */}
        <div className="flex flex-col items-center mb-6 gap-1">
          <img src="https://www.popees.com/cdn/shop/files/popees_logo.gif?v=1775814201&width=500"
            alt="Popees" className="h-14 w-auto object-contain mix-blend-multiply" />
          <span className="text-[11px] text-[#ff2d78] font-semibold tracking-widest uppercase">Supplier Portal</span>
        </div>

        <div className="bg-white rounded-2xl shadow-xl shadow-pink-100 border border-pink-100 p-8">
          {/* Tabs */}
          <div className="flex bg-pink-50 rounded-xl p-1 mb-6">
            {(['login', 'register'] as Mode[]).map((m) => (
              <button key={m} type="button" onClick={() => { setMode(m); reset(); }}
                className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-all ${mode === m ? 'bg-white text-[#ff2d78] shadow-sm' : 'text-gray-400 hover:text-gray-600'}`}>
                {m === 'login' ? 'Sign In' : 'Create Account'}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} noValidate className="space-y-4">
            {mode === 'register' && (
              <>
                <div>
                  <label className={lbl}>Business / Company Name *</label>
                  <input value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. ABC Textiles Ltd." required className={inp} />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className={lbl}>Contact Person</label>
                    <input value={contactName} onChange={(e) => setContactName(e.target.value)} placeholder="Full name" className={inp} />
                  </div>
                  <div>
                    <label className={lbl}>Phone</label>
                    <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+91 98765 43210" className={inp} />
                  </div>
                </div>
                <div>
                  <label className={lbl}>Address</label>
                  <input value={address} onChange={(e) => setAddress(e.target.value)} placeholder="City, State, Country" className={inp} />
                </div>
              </>
            )}

            <div>
              <label className={lbl}>Email Address</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@company.com" required className={inp} />
            </div>

            <div>
              <label className={lbl}>Password</label>
              <div className="relative">
                <input type={showPw ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)}
                  placeholder={mode === 'register' ? 'Min. 6 characters' : '••••••••'} required className={`${inp} pr-10`} />
                <button type="button" onClick={() => setShowPw(!showPw)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300 hover:text-gray-500" tabIndex={-1}>
                  {showPw
                    ? <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" /></svg>
                    : <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>}
                </button>
              </div>
            </div>

            {mode === 'register' && (
              <div>
                <label className={lbl}>Confirm Password</label>
                <input type={showPw ? 'text' : 'password'} value={confirm} onChange={(e) => setConfirm(e.target.value)} placeholder="Repeat your password" required className={inp} />
              </div>
            )}

            {error && (
              <div className="flex items-start gap-2 bg-red-50 border border-red-200 rounded-lg px-3.5 py-3">
                <svg className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <p className="text-sm text-red-600">{error}</p>
              </div>
            )}
            {success && (
              <div className="flex items-start gap-2 bg-emerald-50 border border-emerald-200 rounded-lg px-3.5 py-3">
                <svg className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <p className="text-sm text-emerald-700">{success}</p>
              </div>
            )}

            <button type="submit" disabled={loading}
              className="w-full bg-[#ff2d78] hover:bg-[#e91e63] text-white text-sm font-semibold py-3 rounded-lg transition-all hover:shadow-lg hover:shadow-pink-200 disabled:opacity-60 flex items-center justify-center gap-2 mt-2">
              {loading
                ? <><svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>{mode === 'login' ? 'Signing in…' : 'Creating account…'}</>
                : mode === 'login' ? 'Sign In to Supplier Portal' : 'Create Supplier Account'}
            </button>
          </form>

          <p className="text-center text-sm text-gray-400 mt-5">
            {mode === 'login'
              ? <>Don&apos;t have an account?{' '}<button onClick={() => { setMode('register'); reset(); }} className="text-[#ff2d78] font-semibold hover:underline">Create one</button></>
              : <>Already have an account?{' '}<button onClick={() => { setMode('login'); reset(); }} className="text-[#ff2d78] font-semibold hover:underline">Sign in</button></>}
          </p>
        </div>

        <p className="text-center text-xs text-gray-400 mt-5">
          <Link href="/" className="hover:text-[#ff2d78] transition-colors">← Back to Popees Store</Link>
        </p>
      </div>
    </div>
  );
}
