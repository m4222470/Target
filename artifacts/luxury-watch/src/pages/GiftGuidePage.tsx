import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { products } from '../data/mockData';
import ProductCard from '../components/ProductCard';

const occasions = [
  { label: 'Anniversary', icon: '💑', budget: 'All budgets', categories: ['jewelry', 'watches'] },
  { label: 'Wedding Gift', icon: '💍', budget: '$500–$10,000+', categories: ['jewelry', 'leather'] },
  { label: 'Birthday', icon: '🎂', budget: '$200–$5,000', categories: ['accessories', 'fragrances'] },
  { label: 'Graduation', icon: '🎓', budget: '$200–$2,000', categories: ['accessories', 'leather'] },
  { label: 'Father\'s Day', icon: '👔', budget: '$300–$5,000', categories: ['watches', 'accessories'] },
  { label: 'Mother\'s Day', icon: '🌸', budget: '$300–$8,000', categories: ['jewelry', 'fragrances'] },
];

const budgetSections = [
  { title: 'Under $500', desc: 'Thoughtful gifts that make an impression', products: products.filter(p => p.price < 500).slice(0, 4) },
  { title: '$500 – $2,000', desc: 'For milestones worth celebrating', products: products.filter(p => p.price >= 500 && p.price < 2000).slice(0, 4) },
  { title: '$2,000 and above', desc: 'Extraordinary gifts for extraordinary people', products: products.filter(p => p.price >= 2000).slice(0, 4) },
];

export default function GiftGuidePage() {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950">
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-950 via-neutral-900 to-neutral-950 py-24 text-center px-4">
        <div className="absolute inset-0 opacity-20">
          {[...Array(30)].map((_, i) => (
            <div key={i} style={{ position: 'absolute', left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, fontSize: `${Math.random() * 16 + 8}px`, opacity: Math.random() * 0.5 + 0.2 }}>✦</div>
          ))}
        </div>
        <div className="relative">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs tracking-[0.5em] text-amber-400 uppercase mb-4">The Gift of Luxury</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-6xl font-bold font-serif text-white mb-5">Gift Guide</motion.h1>
          <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="text-neutral-300 max-w-xl mx-auto text-lg leading-relaxed">
            The perfect AURUM & CO. gift for every occasion and every budget. Complimentary gift wrapping included.
          </motion.p>
        </div>
      </section>

      {/* Occasions */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold font-serif text-neutral-900 dark:text-white mb-8 text-center">Shop by Occasion</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {occasions.map((o, i) => (
            <motion.div key={o.label} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.07 }} viewport={{ once: true }}
              className="bg-white dark:bg-neutral-900 rounded-2xl p-5 text-center border border-neutral-200 dark:border-neutral-800 hover:border-amber-300 dark:hover:border-amber-700 transition-colors cursor-pointer group">
              <span className="text-3xl block mb-2">{o.icon}</span>
              <p className="font-bold text-sm text-neutral-900 dark:text-white group-hover:text-amber-600 transition-colors">{o.label}</p>
              <p className="text-xs text-neutral-400 mt-1">{o.budget}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* By Budget */}
      {budgetSections.map((section, si) => (
        <section key={section.title} className={`py-14 ${si % 2 === 1 ? 'bg-neutral-100 dark:bg-neutral-900' : ''}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-8">
              <div>
                <p className="text-xs tracking-[0.4em] text-amber-600 uppercase mb-1">Budget</p>
                <h2 className="text-3xl font-bold font-serif text-neutral-900 dark:text-white">{section.title}</h2>
                <p className="text-neutral-400 text-sm mt-1">{section.desc}</p>
              </div>
              <Link href="/shop"><span className="text-amber-600 font-semibold text-sm cursor-pointer hover:text-amber-700">View all →</span></Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {section.products.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
            </div>
          </div>
        </section>
      ))}

      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <div className="bg-amber-600 rounded-3xl p-12 text-white">
          <h2 className="text-3xl font-bold font-serif mb-3">Need Help Choosing?</h2>
          <p className="text-amber-100 mb-6 leading-relaxed">Our gift concierge team is available to help you select the perfect piece for any occasion. All gifts include complimentary wrapping, a personalised card, and free worldwide delivery.</p>
          <Link href="/contact"><button className="px-8 py-4 bg-white text-amber-700 font-bold rounded-full hover:bg-amber-50 transition-colors">Talk to our Concierge</button></Link>
        </div>
      </section>
    </div>
  );
}
