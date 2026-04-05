import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { Clock, ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/mockData';

const categories = ['All', 'Craftsmanship', 'Style', 'Lifestyle', 'Heritage', 'Education', 'New Arrivals'];

export default function JournalPage() {
  const [featured, ...rest] = blogPosts;

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950">
      <div className="bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs tracking-[0.4em] text-amber-600 dark:text-amber-400 uppercase mb-3">Insights & Stories</p>
          <h1 className="text-5xl font-bold font-serif text-neutral-900 dark:text-white">The AURUM Journal</h1>
          <p className="text-neutral-500 dark:text-neutral-400 mt-3 max-w-xl">Craftsmanship, heritage, and the art of refined living — stories from our atelier and beyond.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href={`/journal/${featured.slug}`}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="group grid md:grid-cols-2 gap-8 mb-16 cursor-pointer">
            <div className="overflow-hidden rounded-3xl aspect-[4/3]">
              <img src={featured.image} alt={featured.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-xs font-bold text-amber-600 uppercase tracking-widest mb-3">{featured.category} · Featured</span>
              <h2 className="text-3xl font-bold font-serif text-neutral-900 dark:text-white leading-tight group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">{featured.title}</h2>
              <p className="text-neutral-500 dark:text-neutral-400 mt-4 leading-relaxed">{featured.excerpt}</p>
              <div className="flex items-center gap-4 mt-6">
                <div>
                  <p className="text-sm font-semibold text-neutral-900 dark:text-white">{featured.author}</p>
                  <p className="text-xs text-neutral-400">{featured.date} · {featured.readTime} min read</p>
                </div>
              </div>
              <div className="flex items-center gap-2 mt-4 text-sm font-semibold text-amber-600 group-hover:text-amber-700">
                Read Article <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </motion.div>
        </Link>

        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat, i) => (
            <button key={cat} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${i === 0 ? 'bg-amber-600 text-white' : 'bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400 hover:border-amber-400 hover:text-amber-600'}`}>
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rest.map((post, i) => (
            <motion.div key={post.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.07 }} viewport={{ once: true }}>
              <Link href={`/journal/${post.slug}`}>
                <div className="group cursor-pointer">
                  <div className="overflow-hidden rounded-2xl aspect-video mb-4">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <span className="text-xs font-bold text-amber-600 uppercase tracking-widest">{post.category}</span>
                  <h3 className="text-lg font-bold text-neutral-900 dark:text-white mt-1.5 leading-snug group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors line-clamp-2">{post.title}</h3>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-2 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center gap-2 mt-3 text-xs text-neutral-400">
                    <Clock className="w-3 h-3" />
                    <span>{post.readTime} min</span>
                    <span>·</span>
                    <span>{post.author}</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
