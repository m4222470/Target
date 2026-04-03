import { motion } from 'framer-motion';
import { ShoppingBag, Star } from 'lucide-react';
import watchFront from '@assets/watch_front_1775253265454.webp';
import watchSide from '@assets/watch_side_1775253265433.webp';
import watchDetail from '@assets/watch_detail_1775253265391.webp';
import watchStrap from '@assets/watch_strap_1775253265477.webp';

const collection = [
  {
    id: 'chronograph-i',
    name: 'Chronograph I',
    tagline: 'The icon. Reborn.',
    price: 1299,
    rating: 4.8,
    reviews: 247,
    badge: 'Best Seller',
    badgeColor: 'bg-amber-500',
    image: watchFront,
  },
  {
    id: 'tourbillon-s',
    name: 'Tourbillon S',
    tagline: 'Precision at its finest.',
    price: 2490,
    rating: 4.9,
    reviews: 132,
    badge: 'New Arrival',
    badgeColor: 'bg-green-600',
    image: watchSide,
  },
  {
    id: 'heritage-xl',
    name: 'Heritage XL',
    tagline: 'Bold. Classic. Timeless.',
    price: 1850,
    rating: 4.7,
    reviews: 89,
    badge: 'Limited',
    badgeColor: 'bg-red-600',
    image: watchDetail,
  },
  {
    id: 'artisan-s',
    name: 'Artisan S',
    tagline: 'Handstitched. Hand-wound.',
    price: 975,
    rating: 4.6,
    reviews: 314,
    badge: '',
    badgeColor: '',
    image: watchStrap,
  },
];

const FeaturedCollection = () => {
  return (
    <section className="py-24 bg-white dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.3em] text-amber-600 dark:text-amber-400 uppercase mb-3">
            Our Collection
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-100 font-serif">
            Crafted for Every Occasion
          </h2>
          <p className="mt-4 text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto">
            Each timepiece in our collection is individually numbered and comes with a certificate of authenticity.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {collection.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative bg-neutral-50 dark:bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 hover:border-amber-500 dark:hover:border-amber-500 transition-all duration-300 hover:shadow-xl"
            >
              {item.badge && (
                <span className={`absolute top-4 left-4 z-10 text-xs text-white font-semibold px-3 py-1 rounded-full ${item.badgeColor}`}>
                  {item.badge}
                </span>
              )}

              <div className="aspect-square overflow-hidden bg-neutral-100 dark:bg-neutral-800">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-5 space-y-3">
                <div>
                  <h3 className="font-bold text-neutral-900 dark:text-neutral-100 text-lg">{item.name}</h3>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">{item.tagline}</p>
                </div>

                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star
                      key={j}
                      className={`w-3.5 h-3.5 ${j < Math.floor(item.rating) ? 'fill-amber-500 text-amber-500' : 'text-neutral-300 dark:text-neutral-600'}`}
                    />
                  ))}
                  <span className="text-xs text-neutral-500 dark:text-neutral-400 ml-1">({item.reviews})</span>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <p className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
                    ${item.price.toLocaleString()}
                  </p>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white text-sm font-semibold rounded-lg transition-colors"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    Add
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <motion.button
            whileTap={{ scale: 0.98 }}
            className="px-10 py-4 border-2 border-neutral-900 dark:border-neutral-100 text-neutral-900 dark:text-neutral-100 font-semibold rounded-full hover:bg-neutral-900 hover:text-white dark:hover:bg-neutral-100 dark:hover:text-neutral-900 transition-all duration-300 tracking-widest text-sm uppercase"
          >
            View Full Collection
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;
