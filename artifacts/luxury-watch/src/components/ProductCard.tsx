import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { Heart, ShoppingBag, Star, Sparkles } from 'lucide-react';
import { Product } from '../data/mockData';
import useCartStore from '../store/cartStore';
import useAuthStore from '../store/authStore';

interface Props {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: Props) {
  const { addItem } = useCartStore();
  const { isAuthenticated, isInWishlist, addToWishlist, removeFromWishlist } = useAuthStore();
  const inWishlist = isInWishlist(product.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image,
      colorId: product.colors?.[0]?.id,
      colorName: product.colors?.[0]?.name,
      colorHex: product.colors?.[0]?.hex,
      category: product.category,
      brand: product.brand,
    });
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!isAuthenticated) return;
    if (inWishlist) removeFromWishlist(product.id);
    else addToWishlist(product.id);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className="group relative"
    >
      <Link href={`/product/${product.id}`}>
        <div className="relative overflow-hidden rounded-2xl bg-neutral-100 dark:bg-neutral-800 aspect-[4/5] mb-4">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <div className="absolute top-3 left-3 flex flex-col gap-1.5">
            {product.isNew && (
              <span className="flex items-center gap-1 px-2.5 py-1 bg-amber-600 text-white text-[10px] font-bold rounded-full tracking-wider">
                <Sparkles className="w-2.5 h-2.5" /> NEW
              </span>
            )}
            {product.isBestseller && (
              <span className="px-2.5 py-1 bg-neutral-900/80 text-white text-[10px] font-bold rounded-full tracking-wider">
                BESTSELLER
              </span>
            )}
            {product.discount && (
              <span className="px-2.5 py-1 bg-red-500 text-white text-[10px] font-bold rounded-full">
                -{product.discount}%
              </span>
            )}
          </div>

          <button
            onClick={handleWishlist}
            className={`absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 ${
              inWishlist
                ? 'bg-red-500 text-white scale-100'
                : 'bg-white/80 dark:bg-neutral-800/80 text-neutral-600 dark:text-neutral-400 opacity-0 group-hover:opacity-100 hover:bg-red-500 hover:text-white'
            }`}
          >
            <Heart className={`w-4 h-4 ${inWishlist ? 'fill-current' : ''}`} />
          </button>

          <button
            onClick={handleAddToCart}
            className="absolute bottom-3 left-3 right-3 py-2.5 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white text-sm font-semibold rounded-xl flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-lg hover:bg-amber-600 hover:text-white"
          >
            <ShoppingBag className="w-4 h-4" /> Add to Cart
          </button>
        </div>
      </Link>

      <div>
        <p className="text-[10px] text-amber-600 dark:text-amber-400 font-semibold uppercase tracking-[0.12em] mb-1">{product.brand}</p>
        <Link href={`/product/${product.id}`}>
          <h3 className="font-semibold text-neutral-900 dark:text-white text-sm leading-snug hover:text-amber-600 dark:hover:text-amber-400 transition-colors cursor-pointer line-clamp-2 mb-2">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 text-amber-400 fill-amber-400 flex-shrink-0" />
            <span className="text-xs font-semibold text-neutral-700 dark:text-neutral-300">{product.rating}</span>
            <span className="text-xs text-neutral-500 dark:text-neutral-400">({product.reviews})</span>
          </div>
          <div className="flex items-center gap-1.5 flex-shrink-0">
            <span className="text-sm font-bold text-neutral-900 dark:text-white">${product.price.toLocaleString()}</span>
            {product.originalPrice && (
              <span className="text-xs text-neutral-400 line-through">${product.originalPrice.toLocaleString()}</span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
