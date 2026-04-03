import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import heroBanner from '@assets/hero_banner_1775253265317.webp';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="relative py-28 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBanner})` }}
      />
      <div className="absolute inset-0 bg-neutral-950/80" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <p className="text-xs tracking-[0.3em] text-amber-400 uppercase">Insider Access</p>
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-white leading-tight">
            First Access to Limited Editions
          </h2>
          <p className="text-neutral-300 text-lg leading-relaxed">
            Join over 18,000 enthusiasts who receive early access to new releases, exclusive events, and quarterly insight from our master watchmakers.
          </p>

          {submitted ? (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="flex items-center justify-center gap-3 text-green-400 text-lg font-semibold py-4"
            >
              <CheckCircle className="w-6 h-6" />
              You're on the list. Welcome to the inner circle.
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 px-5 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-neutral-400 focus:outline-none focus:border-amber-400 backdrop-blur-sm transition-colors"
              />
              <motion.button
                type="submit"
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 px-7 py-4 bg-amber-600 hover:bg-amber-500 text-white font-semibold rounded-xl transition-colors flex-shrink-0"
              >
                Join
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </form>
          )}

          <p className="text-xs text-neutral-500">No spam. Unsubscribe anytime. We respect your privacy.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
