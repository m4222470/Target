import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowRight, Clock, Shield, Award, Star } from 'lucide-react';
import { products } from '../../data/mockData';
import ProductCard from '../../components/ProductCard';

const watches = products.filter(p => p.category === 'watches');

const movements = [
  { name: 'Swiss Automatic', desc: 'Self-winding mechanical movement, no battery required. The pinnacle of watchmaking tradition.', icon: '⚙️' },
  { name: 'Tourbillon', desc: 'The most complex of all complications. Counters the effects of gravity on the movement.', icon: '🌀' },
  { name: 'Perpetual Calendar', desc: 'Displays date, day, month and year — automatically accounting for leap years.', icon: '📅' },
  { name: 'Minute Repeater', desc: 'Chimes the hours, quarter-hours and minutes on demand. A masterpiece of acoustic engineering.', icon: '🔔' },
];

export default function WatchesCollectionPage() {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950">

      {/* Hero */}
      <section className="relative h-[80vh] overflow-hidden">
        <img src="https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=1800&q=90" alt="Timepieces" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        <div className="absolute inset-0 flex items-end pb-20 px-8 md:px-16 max-w-7xl mx-auto">
          <div>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs tracking-[0.5em] text-amber-400 uppercase mb-3">Swiss Haute Horlogerie</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-6xl md:text-7xl font-bold font-serif text-white mb-4">
              Timepieces
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-neutral-300 max-w-lg text-lg leading-relaxed mb-8">
              Each AURUM & CO. watch is assembled by hand in our Geneva atelier — a confluence of centuries-old craft and modern precision.
            </motion.p>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="flex gap-4">
              <Link href="/shop/watches"><button className="px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-full transition-colors">Shop All Watches</button></Link>
              <Link href="/about"><button className="px-8 py-4 border border-white/30 hover:border-white/60 text-white font-semibold rounded-full transition-colors backdrop-blur-sm">Our Atelier</button></Link>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-8 right-8 md:right-16 flex gap-8 text-center">
          {[{ v: '1985', l: 'Founded' }, { v: '47K+', l: 'Timepieces sold' }, { v: 'Geneva', l: 'Manufacture' }].map(s => (
            <div key={s.l}>
              <p className="text-2xl font-bold text-amber-400 font-serif">{s.v}</p>
              <p className="text-xs text-neutral-400">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured collection */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs tracking-[0.4em] text-amber-600 uppercase mb-2">The Collection</p>
            <h2 className="text-4xl font-bold font-serif text-neutral-900 dark:text-white">Our Timepieces</h2>
          </div>
          <Link href="/shop/watches"><span className="flex items-center gap-2 text-amber-600 font-semibold text-sm hover:gap-3 transition-all cursor-pointer">View All <ArrowRight className="w-4 h-4" /></span></Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {watches.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
        </div>
      </section>

      {/* Movement types */}
      <section className="bg-neutral-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs tracking-[0.4em] text-amber-400 uppercase mb-3">Mechanics</p>
            <h2 className="text-3xl font-bold font-serif text-white">The Heart of Every Watch</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {movements.map((m, i) => (
              <motion.div key={m.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}
                className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-amber-500/30 transition-colors">
                <span className="text-3xl mb-4 block">{m.icon}</span>
                <h3 className="font-bold text-white mb-2">{m.name}</h3>
                <p className="text-sm text-neutral-400 leading-relaxed">{m.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Award, title: 'Lifetime Warranty', desc: 'Every AURUM & CO. timepiece is warranted for life against manufacturing defects.' },
            { icon: Shield, title: 'Certificate of Origin', desc: 'Each watch ships with a numbered certificate of authenticity and movement specification sheet.' },
            { icon: Clock, title: 'Free Servicing', desc: 'First service at 5 years is complimentary at our Geneva atelier or any of our boutiques worldwide.' },
          ].map(item => (
            <div key={item.title} className="flex gap-5">
              <div className="w-12 h-12 rounded-xl bg-amber-50 dark:bg-amber-900/20 flex items-center justify-center flex-shrink-0">
                <item.icon className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <h3 className="font-bold text-neutral-900 dark:text-white mb-1">{item.title}</h3>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
