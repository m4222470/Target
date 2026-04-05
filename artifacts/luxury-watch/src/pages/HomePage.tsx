import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Shield, Truck, RefreshCw, Sparkles } from 'lucide-react';
import { products, categoryInfo, blogPosts } from '../data/mockData';
import ProductCard from '../components/ProductCard';
import heroBanner from '@assets/hero_banner_1775253265317.webp';
import heroVideo from '@assets/hero_loop_1775253465787.mp4';

const featured = products.filter(p => p.isBestseller || p.isNew).slice(0, 8);
const recentBlog = blogPosts.slice(0, 3);

const promises = [
  { icon: Truck, title: 'Free Worldwide Shipping', sub: 'On all orders, always' },
  { icon: Shield, title: 'Lifetime Authenticity', sub: 'Certificate included' },
  { icon: RefreshCw, title: '60-Day Returns', sub: 'No questions asked' },
  { icon: Star, title: '5-Star Rated', sub: 'Across 2,000+ reviews' },
];

const stats = [
  { value: '40+', label: 'Years of Excellence' },
  { value: '58', label: 'Countries Served' },
  { value: '12K+', label: 'Happy Clients' },
  { value: '200h', label: 'Per Masterpiece' },
];

export default function HomePage() {
  return (
    <div className="bg-neutral-50 dark:bg-neutral-950">
      <section className="relative h-[90vh] min-h-[600px] overflow-hidden">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover" poster={heroBanner}>
          <source src={heroVideo} type="video/mp4" />
          <img src={heroBanner} alt="Hero" className="absolute inset-0 w-full h-full object-cover" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
              className="text-xs tracking-[0.5em] text-amber-400 uppercase mb-4">
              Since 1985 · Geneva, Switzerland
            </motion.p>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }}
              className="text-5xl md:text-7xl font-bold text-white font-serif leading-tight max-w-2xl">
              The Art of<br /><span className="text-amber-400">Refined Living.</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
              className="text-lg text-neutral-300 mt-5 max-w-lg leading-relaxed">
              Discover our curated universe of luxury timepieces, fine jewelry, and rare accessories.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 mt-8">
              <Link href="/shop">
                <button className="px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-full transition-colors shadow-xl text-sm tracking-wide flex items-center gap-2">
                  Shop Collection <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
              <Link href="/about">
                <button className="px-8 py-4 border border-white/40 hover:border-white text-white font-semibold rounded-full backdrop-blur-sm transition-colors text-sm tracking-wide">
                  Our Story
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}
            className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center pt-2">
            <div className="w-1.5 h-1.5 rounded-full bg-white/80" />
          </motion.div>
        </div>
      </section>

      <section className="bg-neutral-900 dark:bg-neutral-900 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map(s => (
              <div key={s.value} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-amber-400 font-serif">{s.value}</div>
                <div className="text-xs text-neutral-400 mt-1 tracking-wider uppercase">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.4em] text-amber-600 dark:text-amber-400 uppercase mb-3">Our Universe</p>
          <h2 className="text-4xl font-bold text-neutral-900 dark:text-white font-serif">Shop by Category</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {(Object.entries(categoryInfo) as [string, typeof categoryInfo.watches][]).map(([key, cat], i) => (
            <Link key={key} href={`/shop/${key}`}>
              <motion.div
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }} viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl aspect-[3/4] cursor-pointer"
              >
                <img src={cat.hero} alt={cat.label} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="text-2xl mb-1">{cat.icon}</div>
                  <h3 className="text-white font-bold text-sm leading-tight">{cat.label}</h3>
                  <p className="text-neutral-300 text-xs mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity">{cat.description}</p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-xs tracking-[0.4em] text-amber-600 dark:text-amber-400 uppercase mb-3">
                <Sparkles className="inline w-3.5 h-3.5 mr-1" />Curated Selection
              </p>
              <h2 className="text-4xl font-bold text-neutral-900 dark:text-white font-serif">Featured Pieces</h2>
            </div>
            <Link href="/shop">
              <button className="hidden md:flex items-center gap-2 text-sm font-semibold text-amber-600 hover:text-amber-700 transition-colors">
                View All <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {featured.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
          </div>
          <div className="text-center mt-10 md:hidden">
            <Link href="/shop">
              <button className="px-8 py-3 border border-amber-600 text-amber-600 rounded-full font-semibold text-sm hover:bg-amber-600 hover:text-white transition-colors">
                View All Products
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-amber-50 dark:bg-amber-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {promises.map(p => (
              <div key={p.title} className="flex flex-col items-center text-center gap-3">
                <div className="w-12 h-12 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                  <p.icon className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <p className="text-sm font-bold text-neutral-900 dark:text-white">{p.title}</p>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">{p.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-xs tracking-[0.4em] text-amber-600 dark:text-amber-400 uppercase mb-3">Insights & Stories</p>
            <h2 className="text-4xl font-bold text-neutral-900 dark:text-white font-serif">The AURUM Journal</h2>
          </div>
          <Link href="/journal">
            <button className="hidden md:flex items-center gap-2 text-sm font-semibold text-amber-600 hover:text-amber-700 transition-colors">
              All Articles <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {recentBlog.map((post, i) => (
            <motion.div key={post.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }} viewport={{ once: true }}>
              <Link href={`/journal/${post.slug}`}>
                <div className="group cursor-pointer">
                  <div className="overflow-hidden rounded-2xl aspect-video mb-4">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <span className="text-xs font-bold text-amber-600 uppercase tracking-widest">{post.category}</span>
                  <h3 className="text-lg font-bold text-neutral-900 dark:text-white mt-2 leading-snug group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-2 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center gap-3 mt-3 text-xs text-neutral-400">
                    <span>{post.author}</span>
                    <span>·</span>
                    <span>{post.readTime} min read</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-neutral-900 dark:bg-neutral-900">
        <div className="max-w-3xl mx-auto text-center px-4">
          <p className="text-xs tracking-[0.4em] text-amber-400 uppercase mb-4">Exclusive Access</p>
          <h2 className="text-4xl font-bold text-white font-serif mb-4">Join the AURUM Circle</h2>
          <p className="text-neutral-400 mb-8">Receive early access to new collections, private events, and the refinements of the art of living.</p>
          <form className="flex gap-3 max-w-md mx-auto" onSubmit={e => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-5 py-3.5 rounded-xl bg-neutral-800 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-amber-500 text-sm"
            />
            <button className="px-6 py-3.5 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-xl transition-colors text-sm whitespace-nowrap">
              Subscribe
            </button>
          </form>
          <p className="text-xs text-neutral-600 mt-4">No spam. Unsubscribe at any time.</p>
        </div>
      </section>
    </div>
  );
}
