import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { motion } from 'framer-motion';
import { Eye, EyeOff, Lock, Mail, User } from 'lucide-react';

export default function RegisterPage() {
  const [, navigate] = useLocation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 1000));
    setLoading(false);
    setDone(true);
    setTimeout(() => navigate('/login'), 2000);
  };

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 flex items-center justify-center px-4 py-16">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/"><span className="text-2xl font-bold font-serif tracking-widest text-amber-600 cursor-pointer">AURUM & CO.</span></Link>
          <h1 className="text-3xl font-bold text-neutral-900 dark:text-white mt-4 font-serif">Create Account</h1>
          <p className="text-neutral-500 dark:text-neutral-400 mt-2">Join the AURUM Circle</p>
        </div>

        <div className="bg-white dark:bg-neutral-900 rounded-3xl shadow-xl border border-neutral-200 dark:border-neutral-800 p-8">
          {done ? (
            <div className="text-center py-6">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✓</span>
              </div>
              <h3 className="text-lg font-bold text-neutral-900 dark:text-white">Account Created!</h3>
              <p className="text-sm text-neutral-500 mt-2">Redirecting you to sign in…</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                  <input type="text" value={name} onChange={e => setName(e.target.value)} required placeholder="Your full name"
                    className="w-full pl-11 pr-4 py-3 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 placeholder-neutral-400" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">Email</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                  <input type="email" value={email} onChange={e => setEmail(e.target.value)} required placeholder="you@example.com"
                    className="w-full pl-11 pr-4 py-3 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 placeholder-neutral-400" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">Password</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                  <input type={showPass ? 'text' : 'password'} value={password} onChange={e => setPassword(e.target.value)} required placeholder="Min. 8 characters"
                    className="w-full pl-11 pr-12 py-3 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 placeholder-neutral-400" />
                  <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400">
                    {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <input type="checkbox" required id="terms" className="mt-1 accent-amber-600" />
                <label htmlFor="terms" className="text-xs text-neutral-500 dark:text-neutral-400">
                  I agree to the <Link href="/terms"><span className="text-amber-600 cursor-pointer">Terms of Sale</span></Link> and <Link href="/privacy"><span className="text-amber-600 cursor-pointer">Privacy Policy</span></Link>
                </label>
              </div>
              <button type="submit" disabled={loading}
                className="w-full py-3.5 bg-amber-600 hover:bg-amber-700 disabled:opacity-60 text-white font-bold rounded-xl transition-colors text-sm shadow-lg shadow-amber-600/20">
                {loading ? 'Creating Account…' : 'Create Account'}
              </button>
            </form>
          )}
          <p className="text-center text-sm text-neutral-500 dark:text-neutral-400 mt-6">
            Already have an account?{' '}
            <Link href="/login"><span className="text-amber-600 font-semibold hover:text-amber-700 cursor-pointer">Sign in</span></Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
