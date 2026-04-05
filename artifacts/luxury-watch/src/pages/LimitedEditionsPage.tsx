import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { Clock, Star, ArrowRight, Flame } from 'lucide-react';
import { products } from '../data/mockData';

const limited = products.slice(0, 6);

const editions = [
  {
    id: 1,
    name: 'Celestial Noir — Tourbillon',
    number: '01/50',
    price: '$148,000',
    remaining: 3,
    image: 'https://images.unsplash.com/photo-1548171915-c8975cd438b3?w=800&q=90',
    year: '2024',
    desc: 'A stellar collaboration between our master watchmakers and the Geneva Observatory. Each piece calibrated to atomic precision.',
    features: ['18K Black Gold Case', 'Hand-engraved Movement', 'Sapphire Exhibition Back', 'Numbered Certificate'],
  },
  {
    id: 2,
    name: 'Jade Dragon Collection',
    number: '01/25',
    price: '$220,000',
    remaining: 7,
    image: 'https://images.unsplash.com/photo-1594534475808-b18fc33b045e?w=800&q=90',
    year: '2024',
    desc: 'Inspired by the ancient Chinese art of jade carving. The dial features a hand-carved jade stone sourced from Myanmar.',
    features: ['Natural Jade Dial', 'Dragon Motif Caseback', 'Crocodile Strap', 'Custom Display Box'],
  },
  {
    id: 3,
    name: 'Sahara Sunset — Gold',
    number: '01/100',
    price: '$89,500',
    remaining: 18,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=90',
    year: '2024',
    desc: 'The shifting sands of the Sahara inspired this gradient enamel dial — no two pieces are identical.',
    features: ['Grand Feu Enamel Dial', 'Yellow Gold Bezel', 'Desert Sand Patina', 'Artist Signed'],
  },
];

const pastEditions = [
  { name: 'Midnight Ice 2023', sold: '50/50', year: '2023', image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=400&q=80' },
  { name: 'Royal Oak Tribute 2022', sold: '30/30', year: '2022', image: 'https://images.unsplash.com/photo-1622434641406-a158123450f9?w=400&q=80' },
  { name: 'Aurora Borealis 2022', sold: '75/75', year: '2022', image: 'https://images.unsplash.com/photo-1542496658-e33a6d0d370f?w=400&q=80' },
  { name: 'Black Pearl 2021', sold: '20/20', year: '2021', image: 'https://images.unsplash.com/photo-1518131672697-613becd4fab5?w=400&q=80' },
];

export default function LimitedEditionsPage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">

      {/* Hero */}
      <section className="relative h-[70vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=1800&q=90"
          alt="Limited Editions"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/60 via-transparent to-neutral-950" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/40 text-amber-400 text-xs font-bold tracking-[0.3em] uppercase px-4 py-2 rounded-full mb-6">
              <Flame size={12} />
              Exclusive Releases
            </div>
            <h1 className="text-6xl md:text-8xl font-bold font-serif mb-4">Limited Editions</h1>
            <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
              Each piece tells a story. Each number marks history. Our limited editions are created in collaboration with artists, explorers, and visionaries from across the world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Current Editions */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-xs tracking-[0.4em] text-amber-400 uppercase mb-2">2024 Collection</p>
            <h2 className="text-4xl font-bold font-serif">Available Now</h2>
          </div>
          <div className="flex items-center gap-2 text-sm text-neutral-400">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Live inventory updated
          </div>
        </div>

        <div className="space-y-8">
          {editions.map((ed, i) => (
            <motion.div
              key={ed.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-white/10 group"
            >
              <div className={`relative h-72 lg:h-auto overflow-hidden ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                <img src={ed.image} alt={ed.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-4 left-4 bg-amber-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                  {ed.number} Pieces
                </div>
                <div className="absolute top-4 right-4 bg-neutral-900/80 backdrop-blur-sm border border-white/10 text-white text-xs px-3 py-1 rounded-full">
                  {ed.remaining} Remaining
                </div>
              </div>
              <div className={`bg-neutral-900 p-10 flex flex-col justify-center ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                <p className="text-xs tracking-[0.3em] text-amber-400 uppercase mb-3">{ed.year} Limited Edition</p>
                <h3 className="text-3xl font-bold font-serif mb-4">{ed.name}</h3>
                <p className="text-neutral-400 leading-relaxed mb-6">{ed.desc}</p>
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {ed.features.map(f => (
                    <div key={f} className="flex items-center gap-2 text-sm text-neutral-300">
                      <Star size={12} className="text-amber-400 flex-shrink-0" />
                      {f}
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-3xl font-bold font-serif text-amber-400">{ed.price}</p>
                  <Link href="/private-client">
                    <button className="flex items-center gap-2 px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-full transition-colors text-sm">
                      Reserve Yours <ArrowRight size={14} />
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Countdown Timer Banner */}
      <section className="bg-gradient-to-r from-amber-900/40 via-amber-800/30 to-amber-900/40 border-y border-amber-500/20 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-xs tracking-[0.3em] text-amber-400 uppercase mb-1">Next Drop</p>
            <h3 className="text-2xl font-bold font-serif">The Obsidian Series — Announced May 2025</h3>
            <p className="text-neutral-400 text-sm mt-1">Only 15 pieces. Register your interest now.</p>
          </div>
          <div className="flex gap-6 text-center">
            {[{ v: '42', l: 'Days' }, { v: '17', l: 'Hours' }, { v: '08', l: 'Minutes' }].map(t => (
              <div key={t.l} className="bg-white/5 border border-white/10 rounded-xl px-6 py-4">
                <p className="text-3xl font-bold font-serif text-amber-400">{t.v}</p>
                <p className="text-xs text-neutral-500 mt-1">{t.l}</p>
              </div>
            ))}
          </div>
          <Link href="/private-client">
            <button className="px-6 py-3 border border-amber-500/50 hover:border-amber-500 text-amber-400 hover:text-amber-300 font-semibold rounded-full transition-all text-sm whitespace-nowrap">
              Register Interest
            </button>
          </Link>
        </div>
      </section>

      {/* Past Editions */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="mb-12">
          <p className="text-xs tracking-[0.4em] text-neutral-500 uppercase mb-2">Archive</p>
          <h2 className="text-4xl font-bold font-serif">Sold Out Editions</h2>
          <p className="text-neutral-400 mt-2">These pieces have found their owners. Each one is now part of history.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {pastEditions.map((ed, i) => (
            <motion.div
              key={ed.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-xl border border-white/5"
            >
              <img src={ed.image} alt={ed.name} className="w-full h-48 object-cover grayscale group-hover:grayscale-0 transition-all duration-500 opacity-60 group-hover:opacity-100" />
              <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-xs text-neutral-400 mb-1">{ed.year}</p>
                <p className="text-sm font-semibold">{ed.name}</p>
                <span className="text-xs text-red-400 font-bold mt-1">{ed.sold} — Sold Out</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 text-center">
        <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 border border-white/10 rounded-3xl p-16">
          <Clock className="mx-auto mb-6 text-amber-400" size={40} />
          <h2 className="text-4xl font-bold font-serif mb-4">Never Miss a Drop</h2>
          <p className="text-neutral-400 mb-8 max-w-lg mx-auto">Join the Private Client Program to receive early access and first refusal on all limited editions before public release.</p>
          <Link href="/private-client">
            <button className="px-10 py-4 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-full transition-colors">
              Become a Private Client
            </button>
          </Link>
        </div>
      </section>

    </div>
  );
}
