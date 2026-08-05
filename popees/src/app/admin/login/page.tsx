'use client';

import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('admin@popees.local');
  const [password, setPassword] = useState('password');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError('');

    const result = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });

    setLoading(false);

    if (result?.error) {
      setError('Invalid credentials.');
      return;
    }

    router.push('/admin');
  };

  return (
    <div className="min-h-screen bg-[#f8f7f6] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md rounded-[2rem] bg-white p-8 shadow-2xl border border-gray-200">
        <div className="mb-8 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-pink-600">Admin Access</p>
          <h1 className="mt-4 text-3xl font-heading font-bold text-gray-900">Popees Admin Login</h1>
          <p className="mt-2 text-sm text-gray-500">Secure administrator login for your store management dashboard.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 w-full rounded-3xl border border-gray-300 bg-gray-50 px-4 py-3 text-sm text-gray-900 focus:border-pink-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-2 w-full rounded-3xl border border-gray-300 bg-gray-50 px-4 py-3 text-sm text-gray-900 focus:border-pink-500 focus:outline-none"
            />
          </div>

          {error && <p className="text-sm text-red-600">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-3xl bg-pink-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-pink-700 disabled:opacity-70"
          >
            {loading ? 'Signing in...' : 'Sign in'}
          </button>
        </form>
      </div>
    </div>
  );
}
