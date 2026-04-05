import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowRight, Diamond, Gem } from 'lucide-react';
import { products } from '../../data/mockData';
import ProductCard from '../../components/ProductCard';

const jewelry = products.filter(p => p.category === 'jewelry');

const gemstones = [
  { name: 'Diamonds', origin: 'Botswana, Canada', cert: 'GIA Certified', img: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=300&q=80' },
  { name: 'Sapphires', origin: 'Sri Lanka, Burma', cert: 'AGL Certified', img: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=300&q=80' },
  { name: 'Emeralds', origin: 'Colombia, Zambia', cert: 'Gubelin Certified', img: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=300&q=80' },
  { name: 'Rubies', origin: 'Mozambique, Burma', cert: 'AGL Certified', img: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=300&q=80' },
];

export default function JewelryCollectionPage() {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950">
      <section className="relative h-[85vh] overflow-hidden">
        <img src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=1800&q=90" alt="Fine Jewelry" className="w-full h-full object-cover object-top" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div>
            <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-xs tracking-[0.6em] text-amber-300 uppercase mb-5">Fine Jewelry</motion.p>
            <motion.h1 initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1 }} className="text-7xl font-bold font-serif text-white mb-6">
              Wear<br /><span className="text-amber-300">What Endures</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="text-neutral-300 max-w-md mx-auto text-lg leading-relaxed mb-8">
              Each jewel is a conversation between light and metal — designed to be passed down through generations.
            </motion.p>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}>
              <Link href="/shop/jewelry"><button className="px-10 py-4 bg-amber-400 hover:bg-amber-500 text-neutral-900 font-bold rounded-full transition-colors text-sm uppercase tracking-wider">Discover the Collection</button></Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs tracking-[0.4em] text-amber-600 uppercase mb-2">The Collection</p>
            <h2 className="text-4xl font-bold font-serif text-neutral-900 dark:text-white">Fine Jewelry</h2>
          </div>
          <Link href="/shop/jewelry"><span className="flex items-center gap-2 text-amber-600 font-semibold text-sm hover:gap-3 transition-all cursor-pointer">View All <ArrowRight className="w-4 h-4" /></span></Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {jewelry.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
        </div>

        <div className="bg-neutral-100 dark:bg-neutral-900 rounded-3xl p-10">
          <div className="text-center mb-10">
            <p className="text-xs tracking-[0.4em] text-amber-600 uppercase mb-3">Our Stones</p>
            <h2 className="text-3xl font-bold font-serif text-neutral-900 dark:text-white">Ethically Sourced Gemstones</h2>
            <p className="text-neutral-500 dark:text-neutral-400 mt-3 text-sm max-w-lg mx-auto">We work only with suppliers who can trace the full journey of each stone — from mine to setting.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {gemstones.map((g, i) => (
              <motion.div key={g.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}
                className="bg-white dark:bg-neutral-800 rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-700">
                <img src={g.img} alt={g.name} className="w-full h-36 object-cover" />
                <div className="p-4">
                  <h3 className="font-bold text-neutral-900 dark:text-white">{g.name}</h3>
                  <p className="text-xs text-neutral-400 mt-1">Origin: {g.origin}</p>
                  <span className="inline-block mt-2 text-xs bg-amber-50 dark:bg-amber-900/20 text-amber-600 px-2 py-0.5 rounded-full font-semibold">{g.cert}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
