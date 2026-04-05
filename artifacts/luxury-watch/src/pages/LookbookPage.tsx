import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';

const editorials = [
  {
    title: 'The Art of Time',
    subtitle: 'Spring / Summer 2025',
    desc: 'A visual journey through the mountains of Switzerland. Movement, precision, and the quiet confidence of a man who knows exactly where he is going.',
    img: 'https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=800&q=85',
    products: ['Chronograph I Elite', 'Midnight Perpetual'],
    href: '/shop/watches',
    wide: true,
  },
  {
    title: 'Golden Hour',
    subtitle: 'Fine Jewelry',
    desc: 'Designed to be worn from morning to midnight — our new jewelry collection moves with you.',
    img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=85',
    products: ['Diamond Eternity Band', 'Sapphire Cocktail Ring'],
    href: '/shop/jewelry',
    wide: false,
  },
  {
    title: 'The Modern Executive',
    subtitle: 'Accessories & Leather',
    desc: "Everything a man of taste needs. Nothing he doesn't.",
    img: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=85',
    products: ['The Grand Attaché', 'Obsidian Cufflinks'],
    href: '/shop/accessories',
    wide: false,
  },
  {
    title: 'Invisible Luxury',
    subtitle: 'Haute Parfumerie',
    desc: 'The most personal accessory of all. Four new stories in scent, created in Grasse.',
    img: 'https://images.unsplash.com/photo-1541643600914-78b084683702?w=800&q=85',
    products: ['Nuit de Grasse', 'Oud Royale'],
    href: '/shop/fragrances',
    wide: true,
  },
  {
    title: 'A Life Well Lived',
    subtitle: 'Leather Goods',
    desc: 'Objects that tell the story of a life. Full-grain leather goods hand-stitched in our Florence atelier.',
    img: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=85',
    products: ['The Weekend Holdall', 'City Briefcase'],
    href: '/shop/leather',
    wide: false,
  },
];

export default function LookbookPage() {
  return (
    <div className="min-h-screen bg-neutral-950">
      {/* Hero */}
      <div className="relative h-screen overflow-hidden">
        <img src="https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=1800&q=90" alt="Lookbook" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-xs tracking-[0.8em] text-amber-400 uppercase mb-6">AURUM & CO.</motion.p>
          <motion.h1 initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-7xl md:text-9xl font-bold font-serif text-white mb-6">
            Lookbook
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-neutral-300 max-w-md text-lg">
            Spring — Summer 2025 Collection
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="absolute bottom-10">
            <div className="w-0.5 h-12 bg-white/40 mx-auto animate-bounce" />
          </motion.div>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-8">
        {[
          [editorials[0]],
          [editorials[1], editorials[2]],
          [editorials[3]],
          [editorials[4]],
        ].map((row, ri) => (
          <div key={ri} className={`grid gap-6 ${row.length > 1 ? 'md:grid-cols-2' : 'grid-cols-1'}`}>
            {row.map((ed, i) => (
              <motion.div key={ed.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}
                className="relative overflow-hidden rounded-3xl group cursor-pointer" style={{ height: row.length > 1 ? '500px' : '600px' }}>
                <img src={ed.img} alt={ed.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <p className="text-xs tracking-[0.4em] text-amber-400 uppercase mb-2">{ed.subtitle}</p>
                  <h2 className="text-3xl font-bold font-serif text-white mb-3">{ed.title}</h2>
                  <p className="text-neutral-300 text-sm leading-relaxed mb-4 max-w-md">{ed.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {ed.products.map(prod => (
                      <span key={prod} className="text-xs bg-white/10 border border-white/20 text-white px-3 py-1 rounded-full backdrop-blur-sm">{prod}</span>
                    ))}
                  </div>
                  <Link href={ed.href}>
                    <button className="flex items-center gap-2 text-sm font-bold text-white hover:text-amber-400 transition-colors group/btn">
                      Shop the Look <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        ))}
      </div>

      <div className="text-center pb-20 px-4">
        <Link href="/shop"><button className="px-10 py-5 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-full transition-colors text-lg">Shop The Full Collection</button></Link>
      </div>
    </div>
  );
}
