import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { Star, Gift, Zap, Crown, Shield, ArrowRight } from 'lucide-react';
import useAuthStore from '../store/authStore';

const tiers = [
  { name: 'Silver', threshold: '$0 – $4,999', multiplier: '1×', color: '#94a3b8', bg: 'bg-neutral-100 dark:bg-neutral-800', perks: ['1 point per $1 spent', 'Birthday gift', 'Early sale access', 'Free standard shipping'] },
  { name: 'Gold', threshold: '$5,000 – $19,999', multiplier: '2×', color: '#f59e0b', bg: 'bg-amber-50 dark:bg-amber-900/20', perks: ['2 points per $1 spent', 'Quarterly luxury gift', 'Priority customer service', 'Complimentary engraving', 'Exclusive member events'] },
  { name: 'Platinum', threshold: '$20,000+', multiplier: '3×', color: '#8b5cf6', bg: 'bg-violet-50 dark:bg-violet-900/20', perks: ['3 points per $1 spent', 'Dedicated personal advisor', 'Annual watch service', 'First access to new releases', 'VIP event invitations', 'Bespoke commission priority', 'Private client benefits'], featured: true },
];

const howItWorks = [
  { icon: Star, step: '01', title: 'Earn Points', desc: 'Earn points on every purchase — automatically, with no card to carry. Points are credited within 48 hours of delivery.' },
  { icon: Gift, step: '02', title: 'Redeem Rewards', desc: 'Redeem points for discounts, complimentary services, or unique experiences — like a private tour of our Geneva atelier.' },
  { icon: Crown, step: '03', title: 'Unlock Benefits', desc: 'Spend your way to Gold and Platinum status and unlock an escalating range of exclusive privileges and personal services.' },
];

export default function LoyaltyPage() {
  const { user } = useAuthStore();

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950">
      <section className="relative py-28 overflow-hidden" style={{ background: 'linear-gradient(135deg, #1c1008 0%, #2d1d00 50%, #0f0f0f 100%)' }}>
        <div className="absolute inset-0 opacity-10">
          {[...Array(6)].map((_, i) => <div key={i} className="absolute rounded-full border border-amber-400/20" style={{ width: `${(i + 1) * 200}px`, height: `${(i + 1) * 200}px`, top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />)}
        </div>
        <div className="relative text-center px-4">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs tracking-[0.5em] text-amber-400 uppercase mb-4">AURUM Rewards</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-6xl font-bold font-serif text-white mb-5">The Loyalty<br />Programme</motion.h1>
          <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="text-neutral-300 max-w-xl mx-auto text-lg leading-relaxed mb-8">
            Every purchase brings you closer to our most exclusive privileges. Join AURUM Rewards and be recognised as a true connoisseur.
          </motion.p>
          {!user ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="flex justify-center gap-4">
              <Link href="/register"><button className="px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-full transition-colors">Join Free</button></Link>
              <Link href="/login"><button className="px-8 py-4 border border-white/20 text-white hover:border-white/40 font-semibold rounded-full transition-colors">Sign In</button></Link>
            </motion.div>
          ) : (
            <div className="inline-block bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-4 border border-white/20">
              <p className="text-amber-400 font-bold">Welcome back, {user.name.split(' ')[0]}!</p>
              <p className="text-white text-sm">Your current status: <span className="font-bold text-amber-400">Gold Member</span></p>
            </div>
          )}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-2xl font-bold font-serif text-center text-neutral-900 dark:text-white mb-10">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {howItWorks.map((step, i) => (
            <motion.div key={step.step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}
              className="bg-white dark:bg-neutral-900 rounded-2xl p-7 border border-neutral-200 dark:border-neutral-800 text-center">
              <div className="w-14 h-14 rounded-2xl bg-amber-50 dark:bg-amber-900/20 flex items-center justify-center mx-auto mb-4">
                <step.icon className="w-7 h-7 text-amber-600" />
              </div>
              <p className="text-xs font-bold text-neutral-300 dark:text-neutral-600 mb-1">{step.step}</p>
              <h3 className="font-bold text-neutral-900 dark:text-white mb-2">{step.title}</h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        <h2 className="text-2xl font-bold font-serif text-center text-neutral-900 dark:text-white mb-8">Membership Tiers</h2>
        <div className="grid md:grid-cols-3 gap-5">
          {tiers.map((tier, i) => (
            <motion.div key={tier.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}
              className={`rounded-2xl p-7 border-2 relative ${tier.featured ? 'border-violet-400 dark:border-violet-600 shadow-xl shadow-violet-500/10' : 'border-neutral-200 dark:border-neutral-800'} ${tier.bg}`}>
              {tier.featured && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-violet-600 text-white text-xs font-bold px-3 py-1 rounded-full">Most Exclusive</div>}
              <div className="text-center mb-5">
                <Crown className="w-8 h-8 mx-auto mb-2" style={{ color: tier.color }} />
                <h3 className="text-2xl font-bold font-serif" style={{ color: tier.color }}>{tier.name}</h3>
                <p className="text-xs text-neutral-400 mt-1">{tier.threshold}</p>
                <p className="text-xl font-bold text-neutral-900 dark:text-white mt-2">{tier.multiplier} <span className="text-sm font-normal text-neutral-400">points</span></p>
              </div>
              <ul className="space-y-2">
                {tier.perks.map(perk => (
                  <li key={perk} className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: tier.color }} />
                    {perk}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
