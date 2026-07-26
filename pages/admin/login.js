import Head from 'next/head';
import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const API = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

export default function AdminLogin() {
  const router = useRouter();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const { data } = await axios.post(`${API}/auth/login`, form);
      localStorage.setItem('sk_token', data.token);
      router.push('/admin/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head><title>Admin Login — SK Interior</title></Head>
      <div className="min-h-screen bg-[#121212] flex items-center justify-center px-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-10">
            <h1 style={{fontFamily:"'Playfair Display',serif"}} className="text-3xl text-white font-semibold">SK Interior</h1>
            <p className="text-white/40 text-sm mt-2">Admin Panel</p>
          </div>
          <form onSubmit={handleSubmit} className="bg-[#1A1A1A] rounded-2xl p-8 border border-white/5 space-y-5">
            <div>
              <label className="text-white/40 text-[11px] tracking-widest uppercase block mb-2">Email</label>
              <input type="email" required value={form.email} onChange={e => setForm(p => ({...p, email: e.target.value}))}
                className="w-full bg-[#121212] border border-white/10 rounded-lg px-4 py-3.5 text-white text-sm outline-none focus:border-[#C8A96A] transition-colors placeholder:text-white/20"
                placeholder="admin@skinterior.in" />
            </div>
            <div>
              <label className="text-white/40 text-[11px] tracking-widest uppercase block mb-2">Password</label>
              <div className="relative">
                <input type={showPassword ? 'text' : 'password'} required value={form.password} onChange={e => setForm(p => ({...p, password: e.target.value}))}
                  className="w-full bg-[#121212] border border-white/10 rounded-lg pl-4 pr-12 py-3.5 text-white text-sm outline-none focus:border-[#C8A96A] transition-colors placeholder:text-white/20"
                  placeholder="••••••••" />
                <button type="button" onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors focus:outline-none">
                  {showPassword ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
            {error && <p className="text-red-400 text-sm">{error}</p>}
            <button type="submit" disabled={loading}
              className="w-full bg-[#C8A96A] text-[#121212] text-[11px] tracking-[0.3em] uppercase py-4 rounded-full font-semibold hover:bg-[#b8945a] transition-colors disabled:opacity-60">
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>
          <p className="text-center text-white/20 text-xs mt-6">
            Default: admin@skinterior.in / admin123
          </p>
        </div>
      </div>
    </>
  );
}
