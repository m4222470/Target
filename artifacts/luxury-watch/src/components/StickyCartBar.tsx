import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';
import productData from '../data/product.json';
import useCartStore from '../store/cartStore';

export default function StickyCartBar({ productRef }: { productRef: React.RefObject<HTMLElement | null> }) {
  const [visible, setVisible] = useState(false);
  const openCart = useCartStore((s) => s.openCart);
  const addItem = useCartStore((s) => s.addItem);

  useEffect(() => {
    if (!productRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0.1 }
    );
    observer.observe(productRef.current);
    return () => observer.disconnect();
  }, [productRef]);

  const handleQuickAdd = () => {
    const color = productData.colors[0];
    if (!color) return;
    addItem(productData, color, 1);
    openCart();
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 28, stiffness: 300 }}
          className="fixed bottom-0 left-0 right-0 z-40 bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-700 shadow-2xl px-4 py-4"
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                <ShoppingBag className="w-6 h-6 text-amber-600 dark:text-amber-400" />
              </div>
              <div className="hidden sm:block">
                <p className="font-bold text-neutral-900 dark:text-neutral-100">{productData.name}</p>
                <p className="text-sm text-amber-600 dark:text-amber-400">${productData.price.toLocaleString()}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="hidden md:block text-sm text-neutral-500 dark:text-neutral-400">
                Free shipping · Lifetime warranty
              </span>
              <motion.button
                whileTap={{ scale: 0.97 }}
                onClick={handleQuickAdd}
                className="px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-xl shadow-lg transition-colors text-sm tracking-wide"
              >
                Add to Cart — ${productData.price.toLocaleString()}
              </motion.button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
