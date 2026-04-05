import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';
import { products } from '../../data/mockData';
import ProductCard from '../../components/ProductCard';

const accessories = products.filter(p => p.category === 'accessories');

export default function AccessoriesCollectionPage() {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950">
      <section className="relative h-[75vh] overflow-hidden">
        <img src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=1800&q=90" alt="Accessories" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
        <div className="absolute bottom-0 inset-x-0 pb-16 px-8 md:px-16 max-w-7xl mx-auto">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs tracking-[0.5em] text-amber-400 uppercase mb-3">The Finishing Touch</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-6xl font-bold font-serif text-white mb-4">Accessories</motion.h1>
          <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-neutral-300 max-w-xl text-lg leading-relaxed mb-8">
            The details that define a man. Each AURUM & CO. accessory is crafted with the same rigour as our timepieces — because perfection is in the particulars.
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
            <Link href="/shop/accessories"><button className="px-8 py-4 bg-white text-neutral-900 font-bold rounded-full hover:bg-neutral-100 transition-colors">Shop Accessories</button></Link>
          </motion.div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs tracking-[0.4em] text-amber-600 uppercase mb-2">The Edit</p>
            <h2 className="text-4xl font-bold font-serif text-neutral-900 dark:text-white">Curated Accessories</h2>
          </div>
          <Link href="/shop/accessories"><span className="flex items-center gap-2 text-amber-600 font-semibold text-sm hover:gap-3 transition-all cursor-pointer">View All <ArrowRight className="w-4 h-4" /></span></Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {accessories.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
        </div>

        <div className="bg-neutral-900 rounded-3xl p-10 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-xs tracking-[0.4em] text-amber-400 uppercase mb-3">Bespoke</p>
            <h2 className="text-3xl font-bold font-serif text-white mb-4">Made to Order</h2>
            <p className="text-neutral-300 leading-relaxed mb-6">From engraved cufflinks to hand-monogrammed card cases, our atelier offers a bespoke service that transforms any accessory into a personal statement. Allow 4–6 weeks for delivery.</p>
            <Link href="/private-client"><button className="px-6 py-3 border border-amber-400/40 text-amber-300 hover:border-amber-400/70 font-semibold rounded-full transition-colors text-sm">Enquire About Bespoke</button></Link>
          </div>
          <img src="https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=600&q=80" alt="Bespoke" className="rounded-2xl w-full h-64 object-cover" />
        </div>
      </section>
    </div>
  );
}
