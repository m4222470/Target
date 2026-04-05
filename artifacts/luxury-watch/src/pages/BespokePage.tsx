import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowRight, Pencil, Gem, Clock, CheckCircle, Phone } from 'lucide-react';

const steps = [
  {
    num: '01',
    title: 'Initial Consultation',
    desc: 'Meet with our master craftsman in person at our Geneva atelier or via private video call. Share your vision, lifestyle, and the story you want your timepiece to tell.',
    icon: Phone,
  },
  {
    num: '02',
    title: 'Design & Sketching',
    desc: 'Our in-house designer creates hand-rendered sketches based on your brief. We refine together until every detail is perfect — from case shape to dial texture.',
    icon: Pencil,
  },
  {
    num: '03',
    title: 'Material Selection',
    desc: 'Choose from our curated vault of rare materials: platinum, rose gold, black ceramic, meteorite dials, gem-set bezels, exotic leathers, and more.',
    icon: Gem,
  },
  {
    num: '04',
    title: 'Crafting & Assembly',
    desc: 'A team of dedicated artisans handcrafts your piece over 8 to 16 weeks. Every component is finished, assembled, and tested to COSC standards.',
    icon: Clock,
  },
  {
    num: '05',
    title: 'Delivery & Ceremony',
    desc: 'Your creation arrives in a bespoke presentation box with full provenance documentation, lifetime warranty, and a personal letter from your craftsman.',
    icon: CheckCircle,
  },
];

const materials = [
  { name: 'Platinum 950', category: 'Case', img: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=300&q=80' },
  { name: 'Rose Gold 18K', category: 'Case', img: 'https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?w=300&q=80' },
  { name: 'Meteorite', category: 'Dial', img: 'https://images.unsplash.com/photo-1614642264762-d0a3b8bf3700?w=300&q=80' },
  { name: 'Grand Feu Enamel', category: 'Dial', img: 'https://images.unsplash.com/photo-1606041011872-596597976b25?w=300&q=80' },
  { name: 'Alligator Leather', category: 'Strap', img: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=300&q=80' },
  { name: 'Diamonds VVS1', category: 'Setting', img: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=300&q=80' },
];

const gallery = [
  'https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=600&q=90',
  'https://images.unsplash.com/photo-1548171915-c8975cd438b3?w=600&q=90',
  'https://images.unsplash.com/photo-1622434641406-a158123450f9?w=600&q=90',
  'https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?w=600&q=90',
];

export default function BespokePage() {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950">

      {/* Hero */}
      <section className="relative h-[85vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=1800&q=90"
          alt="Bespoke Atelier"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
        <div className="absolute inset-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="max-w-xl">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xs tracking-[0.5em] text-amber-400 uppercase mb-4"
            >
              Aurum & Co. Atelier
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-7xl font-bold font-serif text-white mb-6 leading-tight"
            >
              Bespoke<br />Creation
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-neutral-300 text-lg leading-relaxed mb-8"
            >
              Your life is unique. Your timepiece should be too. From a single conversation, we craft a watch that carries your story — built entirely to your specification.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/contact">
                <button className="px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-full transition-colors flex items-center gap-2">
                  Begin Your Journey <ArrowRight size={16} />
                </button>
              </Link>
              <Link href="/boutiques">
                <button className="px-8 py-4 border border-white/30 hover:border-white/60 text-white font-semibold rounded-full transition-colors backdrop-blur-sm">
                  Visit Our Atelier
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
          <div className="flex gap-12">
            {[{ v: '8–16', l: 'Weeks to craft' }, { v: '500+', l: 'Bespoke pieces made' }, { v: '∞', l: 'Possibilities' }].map(s => (
              <div key={s.l}>
                <p className="text-2xl font-bold text-amber-400 font-serif">{s.v}</p>
                <p className="text-xs text-neutral-400">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.4em] text-amber-500 uppercase mb-3">The Process</p>
          <h2 className="text-5xl font-bold font-serif text-neutral-900 dark:text-white mb-4">From Vision to Reality</h2>
          <p className="text-neutral-500 dark:text-neutral-400 max-w-2xl mx-auto">Five steps. One masterpiece. A lifetime of meaning.</p>
        </div>
        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-amber-500/30 to-transparent -translate-x-1/2" />
          <div className="space-y-16">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={`flex flex-col lg:flex-row items-center gap-8 ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={`flex-1 ${i % 2 === 1 ? 'lg:text-right' : ''}`}>
                  <p className="text-6xl font-black text-amber-500/20 font-serif mb-2">{step.num}</p>
                  <h3 className="text-2xl font-bold font-serif text-neutral-900 dark:text-white mb-3">{step.title}</h3>
                  <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-md">{step.desc}</p>
                </div>
                <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center flex-shrink-0">
                  <step.icon className="text-amber-500" size={24} />
                </div>
                <div className="flex-1 hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="bg-neutral-100 dark:bg-neutral-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs tracking-[0.4em] text-amber-500 uppercase mb-3">The Vault</p>
            <h2 className="text-4xl font-bold font-serif text-neutral-900 dark:text-white">Rare Materials</h2>
            <p className="text-neutral-500 dark:text-neutral-400 mt-3">Sourced from the world's finest suppliers. Used only in your piece.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {materials.map((m, i) => (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                className="group overflow-hidden rounded-xl border border-white/10 dark:border-white/5"
              >
                <img src={m.img} alt={m.name} className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="p-3 bg-white dark:bg-neutral-800">
                  <p className="text-xs text-amber-500 mb-0.5">{m.category}</p>
                  <p className="text-xs font-semibold text-neutral-900 dark:text-white leading-tight">{m.name}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.4em] text-amber-500 uppercase mb-3">Past Commissions</p>
          <h2 className="text-4xl font-bold font-serif text-neutral-900 dark:text-white">Stories We've Told</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {gallery.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`overflow-hidden rounded-2xl ${i === 0 ? 'md:row-span-2' : ''}`}
            >
              <img src={img} alt={`Commission ${i + 1}`} className={`w-full object-cover hover:scale-105 transition-transform duration-700 ${i === 0 ? 'h-full min-h-[400px]' : 'h-48'}`} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-neutral-900 py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <p className="text-xs tracking-[0.4em] text-amber-400 uppercase mb-4">Private Consultation</p>
          <h2 className="text-5xl font-bold font-serif mb-4">Ready to Begin?</h2>
          <p className="text-neutral-400 mb-8 max-w-xl mx-auto leading-relaxed">
            Starting price from $45,000. All commissions are reviewed personally by our Head of Bespoke. Your journey begins with a conversation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact">
              <button className="px-10 py-4 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-full transition-colors flex items-center gap-2">
                Schedule Consultation <ArrowRight size={16} />
              </button>
            </Link>
            <Link href="/boutiques">
              <button className="px-10 py-4 border border-white/20 hover:border-white/50 text-white font-semibold rounded-full transition-colors">
                Find an Atelier
              </button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
