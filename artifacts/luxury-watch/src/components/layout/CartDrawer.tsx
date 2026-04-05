import { Link } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag, Trash2, Plus, Minus, ArrowRight } from 'lucide-react';
import useCartStore from '../../store/cartStore';

export default function CartDrawer() {
  const { items, isCartOpen, closeCart, removeItem, updateQuantity } = useCartStore();
  const total = items.reduce((s, i) => s + i.price * i.quantity, 0);
  const count = items.reduce((s, i) => s + i.quantity, 0);

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white dark:bg-neutral-900 shadow-2xl z-50 flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-neutral-200 dark:border-neutral-700">
              <div>
                <h2 className="text-lg font-bold text-neutral-900 dark:text-white">Shopping Cart</h2>
                <p className="text-xs text-neutral-500 mt-0.5">
                  {count === 0 ? 'No items' : `${count} item${count !== 1 ? 's' : ''}`}
                </p>
              </div>
              <button onClick={closeCart} className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors">
                <X className="w-5 h-5 text-neutral-600 dark:text-neutral-400" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-neutral-400 dark:text-neutral-500">
                  <ShoppingBag className="w-16 h-16 mb-4 opacity-20" />
                  <p className="text-base font-medium text-neutral-700 dark:text-neutral-300">Your cart is empty</p>
                  <p className="text-sm mt-1 text-center text-neutral-500">Discover our curated collection.</p>
                  <Link href="/shop">
                    <button onClick={closeCart} className="mt-6 px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-xl text-sm transition-colors">
                      Explore Shop
                    </button>
                  </Link>
                </div>
              ) : (
                <div className="space-y-3">
                  {items.map(item => (
                    <div key={`${item.id}-${item.colorId}`} className="flex gap-4 p-4 rounded-xl bg-neutral-50 dark:bg-neutral-800">
                      <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-neutral-200 dark:bg-neutral-700">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-sm text-neutral-900 dark:text-white truncate">{item.name}</h3>
                        {item.colorName && <p className="text-xs text-neutral-500 dark:text-neutral-400">{item.colorName}</p>}
                        <p className="text-sm font-bold text-amber-600 dark:text-amber-400 mt-1">${item.price.toLocaleString()}</p>
                      </div>
                      <div className="flex flex-col items-end justify-between">
                        <button onClick={() => removeItem(item.id, item.colorId)} className="p-1 text-neutral-400 hover:text-red-500 transition-colors">
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                        <div className="flex items-center gap-1.5">
                          <button onClick={() => updateQuantity(item.id, item.colorId, item.quantity - 1)} className="w-6 h-6 rounded flex items-center justify-center hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors">
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-5 text-center text-sm font-semibold text-neutral-900 dark:text-white">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, item.colorId, item.quantity + 1)} className="w-6 h-6 rounded flex items-center justify-center hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors">
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {items.length > 0 && (
              <div className="p-6 border-t border-neutral-200 dark:border-neutral-700 space-y-3 bg-white dark:bg-neutral-900">
                <div className="flex justify-between text-sm text-neutral-500">
                  <span>Shipping</span>
                  <span className="text-green-600 font-medium">Free Worldwide</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-neutral-900 dark:text-white">Total</span>
                  <span className="text-xl font-bold text-neutral-900 dark:text-white">${total.toLocaleString()}</span>
                </div>
                <Link href="/checkout">
                  <button onClick={closeCart} className="w-full py-4 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-semibold transition-colors flex items-center justify-center gap-2 shadow-lg">
                    Checkout <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
                <Link href="/cart">
                  <button onClick={closeCart} className="w-full py-2.5 rounded-xl border border-neutral-200 dark:border-neutral-700 text-sm font-medium text-neutral-600 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors">
                    View Full Cart
                  </button>
                </Link>
                <p className="text-center text-xs text-neutral-400">Secure checkout · SSL encrypted</p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
