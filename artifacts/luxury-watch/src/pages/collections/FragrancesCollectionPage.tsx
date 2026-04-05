import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowRight, Sparkles } from 'lucide-react';
import { products } from '../../data/mockData';
import ProductCard from '../../components/ProductCard';

const fragrances = products.filter(p => p.category === 'fragrances');

const notes = [
  { category: 'Top Notes', examples: 'Bergamot · Lemon · Pepper · Grapefruit', desc: 'The first impression — bright, fleeting, lasting 15–30 minutes.' },
  { category: 'Heart Notes', examples: 'Rose · Oud · Iris · Jasmine · Amber', desc: 'The soul of the fragrance. Develops over 1–3 hours and defines the scent\'s character.' },
  { category: 'Base Notes', examples: 'Sandalwood · Vetiver · Musk · Vanilla', desc: 'The foundation. Lingers for 6–12 hours, giving depth and longevity.' },
];

const concentrations = [
  { name: 'Parfum', pct: '20–30%', longevity: '12–24 hrs', desc: 'The most intense and lasting concentration. A few drops suffice.' },
  { name: 'Eau de Parfum', pct: '15–20%', longevity: '8–12 hrs', desc: 'Rich and long-lasting. The preferred choice for most occasions.' },
  { name: 'Eau de Toilette', pct: '8–15%', longevity: '4–6 hrs', desc: 'Lighter and fresher. Ideal for daytime and warmer climates.' },
];

export default function FragrancesCollectionPage() {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950">
      <section className="relative h-[85vh] overflow-hidden">
        <img src="https://images.unsplash.com/photo-1541643600914-78b084683702?w=1800&q=90" alt="Fragrances" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/70 via-neutral-900/50 to-transparent" />
        <div className="absolute inset-0 flex items-center px-8 md:px-20 max-w-7xl mx-auto">
          <div>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs tracking-[0.6em] text-amber-300 uppercase mb-5">Haute Parfumerie</motion.p>
            <motion.h1 initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="text-6xl md:text-7xl font-bold font-serif text-white mb-4 leading-tight">
              The Art of<br />Scent
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }} className="text-amber-100 max-w-md text-lg leading-relaxed mb-8">
              Created by master perfumers in Grasse, each AURUM & CO. fragrance is a narrative in scent — complex, evocative, and utterly personal.
            </motion.p>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }} className="flex gap-4">
              <Link href="/shop/fragrances"><button className="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-neutral-900 font-bold rounded-full transition-colors">Explore Fragrances</button></Link>
              <Link href="/size-guide"><button className="px-8 py-4 border border-amber-300/40 text-amber-100 hover:border-amber-300/70 font-semibold rounded-full transition-colors">Fragrance Guide</button></Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-neutral-900 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-xs tracking-[0.4em] text-amber-400 uppercase mb-4">Understanding Fragrance</p>
          <h2 className="text-3xl font-bold font-serif text-white mb-10">The Fragrance Pyramid</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {notes.map((n, i) => (
              <motion.div key={n.category} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}
                className="bg-white/5 rounded-2xl p-7 border border-white/10 text-left">
                <div className="w-8 h-1 bg-amber-400 rounded mb-4" />
                <h3 className="font-bold text-amber-300 mb-2">{n.category}</h3>
                <p className="text-xs text-neutral-400 italic mb-3">{n.examples}</p>
                <p className="text-sm text-neutral-300 leading-relaxed">{n.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs tracking-[0.4em] text-amber-600 uppercase mb-2">The Collection</p>
            <h2 className="text-4xl font-bold font-serif text-neutral-900 dark:text-white">Our Fragrances</h2>
          </div>
          <Link href="/shop/fragrances"><span className="flex items-center gap-2 text-amber-600 font-semibold text-sm hover:gap-3 transition-all cursor-pointer">View All <ArrowRight className="w-4 h-4" /></span></Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {fragrances.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {concentrations.map(c => (
            <div key={c.name} className="bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-neutral-900 dark:text-white">{c.name}</h3>
                <span className="text-xs font-mono text-amber-600 bg-amber-50 dark:bg-amber-900/20 px-2 py-0.5 rounded-full">{c.pct}</span>
              </div>
              <p className="text-xs text-amber-500 font-semibold mb-2">Longevity: {c.longevity}</p>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
