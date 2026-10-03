'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Demo login: set cookie and redirect
    document.cookie = 'admin_session=demo_active; path=/';
    setTimeout(() => {
      setLoading(false);
      router.push('/admin');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#000] text-[#DDD] font-mono flex items-center justify-center p-4">
      <div className="w-full max-w-md border border-[#333] p-8 bg-[#0a0a0a]">
        <div className="mb-8 text-center">
          <h1 className="text-2xl text-white mb-2">admin_auth</h1>
          <p className="text-sm text-[#888]">Please authenticate to continue.</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-xs uppercase tracking-wider text-[#888] mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-[#111] border border-[#333] p-3 text-white focus:outline-none focus:border-[#666]"
              placeholder="admin@anvith.dev"
              required
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-[#888] mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-[#111] border border-[#333] p-3 text-white focus:outline-none focus:border-[#666]"
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-white text-black py-3 px-4 hover:bg-[#DDD] transition-colors disabled:opacity-50 font-bold"
          >
            {loading ? 'AUTHENTICATING...' : 'LOGIN_'}
          </button>
        </form>

        <div className="mt-8 pt-4 border-t border-[#222] text-center">
          <p className="text-xs text-[#666]">
            SYSTEM: Demo Mode Active. Any credentials will work.
          </p>
        </div>
      </div>
    </div>
  );
}
