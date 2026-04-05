import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';
import { products } from '../../data/mockData';
import ProductCard from '../../components/ProductCard';

const leather = products.filter(p => p.category === 'leather');

const leatherTypes = [
  { name: 'Full-Grain Calfskin', origin: 'Italian tanneries, Tuscany', desc: 'The highest grade of leather. The full surface grain is preserved, showing natural markings and developing a unique patina over years of use.', colour: '#8B6914' },
  { name: 'Exotic Skins', origin: 'CITES-regulated farms, globally', desc: 'Crocodile, ostrich, and python leathers sourced exclusively from CITES-certified, regulated farms. Documentation provided with each purchase.', colour: '#4A4A3A' },
  { name: 'Suede & Nubuck', origin: 'Selected European tanneries', desc: 'Soft-brushed interiors and linings, chosen for their tactile quality and comfort. Treated for stain resistance at the tannery level.', colour: '#C4A882' },
];

export default function LeatherCollectionPage() {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950">
      <section className="relative h-[80vh] overflow-hidden">
        <img src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=1800&q=90" alt="Leather Goods" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/20" />
        <div className="absolute inset-0 max-w-7xl mx-auto px-8 md:px-16 flex items-center">
          <div>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs tracking-[0.5em] text-amber-400 uppercase mb-4">Maroquinerie</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-6xl md:text-7xl font-bold font-serif text-white mb-4 leading-tight">
              Leather<br />Goods
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-neutral-300 max-w-md text-lg leading-relaxed mb-8">
              Each bag and case is hand-stitched using the tradition of sellier — every stitch placed individually by a single artisan.
            </motion.p>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="flex gap-4">
              <Link href="/shop/leather"><button className="px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-full transition-colors">Shop Leather Goods</button></Link>
              <Link href="/private-client"><button className="px-8 py-4 border border-white/30 text-white hover:border-white/60 font-semibold rounded-full transition-colors">Commission Bespoke</button></Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-stone-100 dark:bg-neutral-900 py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-xs tracking-[0.4em] text-amber-600 uppercase mb-3">Our Materials</p>
          <h2 className="text-3xl font-bold font-serif text-neutral-900 dark:text-white mb-8">Leather Selection</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {leatherTypes.map((lt, i) => (
              <motion.div key={lt.name} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}
                className="bg-white dark:bg-neutral-800 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-700 text-left">
                <div className="w-10 h-10 rounded-xl mb-4" style={{ background: lt.colour }} />
                <h3 className="font-bold text-neutral-900 dark:text-white mb-1">{lt.name}</h3>
                <p className="text-xs text-amber-600 font-semibold mb-3">{lt.origin}</p>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">{lt.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs tracking-[0.4em] text-amber-600 uppercase mb-2">The Collection</p>
            <h2 className="text-4xl font-bold font-serif text-neutral-900 dark:text-white">Leather Goods</h2>
          </div>
          <Link href="/shop/leather"><span className="flex items-center gap-2 text-amber-600 font-semibold text-sm hover:gap-3 transition-all cursor-pointer">View All <ArrowRight className="w-4 h-4" /></span></Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {leather.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
        </div>
      </section>
    </div>
  );
}
