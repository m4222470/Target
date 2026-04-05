import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { Star, Diamond, Phone, Plane, Gift, Lock } from 'lucide-react';

const services = [
  { icon: Star, title: 'Bespoke Commissions', desc: 'Work directly with our lead designer to create a one-of-a-kind timepiece, jewel, or leather good. No piece is replicated. Your commission begins with a private consultation in Geneva.' },
  { icon: Diamond, title: 'Stone Sourcing', desc: 'Access to our private network of gem merchants in Antwerp, Geneva, and Bangkok. We present stones in person before purchase — no buying blind.' },
  { icon: Plane, title: 'White Glove Delivery', desc: 'For acquisitions above $25,000, we offer personal delivery by our courier anywhere in the world — hand-carried, insured, and presented with ceremony.' },
  { icon: Phone, title: 'Dedicated Advisor', desc: 'A single point of contact for all your AURUM & CO. needs. Available 7 days a week, with response times under 30 minutes during business hours.' },
  { icon: Gift, title: 'Priority Access', desc: 'First access to limited editions, pre-release collections, and sold-out pieces before they reach the general public or secondary market.' },
  { icon: Lock, title: 'Private Archive', desc: 'Exclusive access to archive and vintage pieces not available for general purchase — sourced specifically for our private clients.' },
];

export default function PrivateClientPage() {
  return (
    <div className="min-h-screen bg-neutral-950">
      <section className="relative h-screen overflow-hidden">
        <img src="https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=1800&q=90" alt="Private Client" className="w-full h-full object-cover scale-105" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/30" />
        <div className="absolute inset-0 max-w-7xl mx-auto px-8 md:px-16 flex items-center">
          <div className="max-w-xl">
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs tracking-[0.6em] text-amber-400 uppercase mb-5">By Invitation</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-6xl md:text-7xl font-bold font-serif text-white mb-5 leading-tight">
              Private<br />Client
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="text-neutral-300 text-lg leading-relaxed mb-8">
              For those for whom the extraordinary is a minimum standard. AURUM & CO.'s Private Client programme offers a level of service that no public channel can match.
            </motion.p>
            <motion.a href="#enquire" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
              <button className="px-10 py-5 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-full transition-colors text-sm uppercase tracking-wider">Request an Introduction</button>
            </motion.a>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.4em] text-amber-400 uppercase mb-3">Our Services</p>
          <h2 className="text-4xl font-bold font-serif text-white">Tailored to You</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }} viewport={{ once: true }}
              className="p-7 rounded-2xl border border-white/10 hover:border-amber-500/30 transition-all group"
              style={{ background: 'rgba(255,255,255,0.03)' }}>
              <div className="w-12 h-12 rounded-xl bg-amber-900/20 flex items-center justify-center mb-5 group-hover:bg-amber-900/40 transition-colors">
                <s.icon className="w-6 h-6 text-amber-400" />
              </div>
              <h3 className="font-bold text-white text-lg mb-3">{s.title}</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="enquire" className="max-w-2xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold font-serif text-white mb-4">Request an Introduction</h2>
        <p className="text-neutral-400 mb-8 text-sm leading-relaxed">Membership in the Private Client programme is by introduction. Please complete the form below and a member of our team will contact you within one business day.</p>
        <form className="space-y-4 text-left">
          {[{ l: 'Full Name', t: 'text', ph: 'Your full name' }, { l: 'Email', t: 'email', ph: 'you@example.com' }, { l: 'Phone', t: 'tel', ph: '+1 (000) 000-0000' }].map(f => (
            <div key={f.l}>
              <label className="block text-xs font-bold text-neutral-500 uppercase tracking-wider mb-1.5">{f.l}</label>
              <input type={f.t} placeholder={f.ph} className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-neutral-600 text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none" />
            </div>
          ))}
          <div>
            <label className="block text-xs font-bold text-neutral-500 uppercase tracking-wider mb-1.5">How did you hear about us?</label>
            <textarea rows={3} placeholder="Please share a few words about your interest and how you were introduced to AURUM & CO." className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-neutral-600 text-sm resize-none focus:ring-2 focus:ring-amber-500 focus:outline-none" />
          </div>
          <button type="button" className="w-full py-4 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-xl transition-colors text-sm uppercase tracking-wider">Submit Enquiry</button>
        </form>
      </section>
    </div>
  );
}
