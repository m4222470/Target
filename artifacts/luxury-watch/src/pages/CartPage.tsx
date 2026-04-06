import { Link, useLocation } from 'wouter';
import { motion } from 'framer-motion';
import { ShoppingBag, Trash2, Plus, Minus, ArrowRight, Tag } from 'lucide-react';
import useCartStore from '../store/cartStore';

export default function CartPage() {
  const [, navigate] = useLocation();
  const { items, removeItem, updateQuantity, clearCart } = useCartStore();
  const subtotal = items.reduce((s, i) => s + i.price * i.quantity, 0);

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold font-serif text-neutral-900 dark:text-white mb-8">Shopping Cart</h1>

        {items.length === 0 ? (
          <div className="text-center py-20 bg-white dark:bg-neutral-900 rounded-3xl border border-neutral-200 dark:border-neutral-800">
            <ShoppingBag className="w-14 h-14 text-neutral-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-neutral-700 dark:text-neutral-300">Your cart is empty</h3>
            <p className="text-neutral-400 mt-2 mb-8">Add some exceptional pieces to get started.</p>
            <Link href="/shop"><button className="px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-2xl transition-colors">Explore Shop</button></Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-3">
              {items.map((item, i) => (
                <motion.div key={`${item.id}-${item.colorId}`} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}
                  className="bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-5 flex gap-5">
                  <div className="w-20 h-20 rounded-xl overflow-hidden bg-neutral-100 dark:bg-neutral-800 flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between gap-3">
                      <div>
                        <p className="text-xs text-amber-600 font-medium uppercase tracking-wider">{item.brand}</p>
                        <h3 className="font-bold text-neutral-900 dark:text-white">{item.name}</h3>
                        {item.colorName && <p className="text-sm text-neutral-500 mt-0.5">Color: {item.colorName}</p>}
                      </div>
                      <button onClick={() => removeItem(item.id, item.colorId)} className="text-neutral-400 hover:text-red-500 transition-colors flex-shrink-0">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center border border-neutral-200 dark:border-neutral-700 rounded-xl overflow-hidden">
                        <button onClick={() => updateQuantity(item.id, item.colorId, item.quantity - 1)} className="px-3 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors">
                          <Minus className="w-3.5 h-3.5 text-neutral-600 dark:text-neutral-400" />
                        </button>
                        <span className="px-4 py-2 text-sm font-bold text-neutral-900 dark:text-white">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.colorId, item.quantity + 1)} className="px-3 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors">
                          <Plus className="w-3.5 h-3.5 text-neutral-600 dark:text-neutral-400" />
                        </button>
                      </div>
                      <span className="text-lg font-bold text-neutral-900 dark:text-white">${(item.price * item.quantity).toLocaleString()}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
              <button onClick={clearCart} className="text-sm text-red-400 hover:text-red-600 transition-colors flex items-center gap-1.5 mt-2">
                <Trash2 className="w-3.5 h-3.5" /> Clear Cart
              </button>
            </div>

            <div className="space-y-4">
              <div className="bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 space-y-4">
                <h2 className="text-lg font-bold text-neutral-900 dark:text-white">Order Summary</h2>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Tag className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                    <input placeholder="Promo code" className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-sm text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500 placeholder-neutral-400" />
                  </div>
                  <button className="px-4 py-2.5 bg-neutral-900 dark:bg-neutral-700 text-white text-sm font-semibold rounded-xl hover:bg-neutral-800 dark:hover:bg-neutral-600 transition-colors">Apply</button>
                </div>
                <div className="space-y-2.5 text-sm">
                  <div className="flex justify-between text-neutral-900 dark:text-white font-semibold"><span>Subtotal</span><span>${subtotal.toLocaleString()}</span></div>
                  <div className="flex justify-between text-neutral-900 dark:text-white font-semibold"><span>Shipping</span><span className="text-green-600 dark:text-green-400 font-bold">Free</span></div>
                  <div className="flex justify-between text-neutral-700 dark:text-neutral-200 font-medium"><span>Tax (est.)</span><span>${Math.round(subtotal * 0.08).toLocaleString()}</span></div>
                </div>
                <div className="flex justify-between font-bold text-neutral-900 dark:text-white text-lg border-t border-neutral-200 dark:border-neutral-700 pt-3">
                  <span>Total</span>
                  <span>${(subtotal + Math.round(subtotal * 0.08)).toLocaleString()}</span>
                </div>
                <button onClick={() => navigate('/checkout')} className="w-full py-4 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-2xl transition-colors flex items-center justify-center gap-2 shadow-lg shadow-amber-600/20">
                  Checkout <ArrowRight className="w-4 h-4" />
                </button>
                <Link href="/shop"><button className="w-full py-3 border border-neutral-200 dark:border-neutral-700 text-sm font-semibold text-neutral-600 dark:text-neutral-300 rounded-2xl hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors">Continue Shopping</button></Link>
              </div>
              <div className="bg-amber-50 dark:bg-amber-900/10 rounded-2xl p-4 text-xs text-amber-800 dark:text-amber-300 space-y-1">
                <p className="font-semibold">✓ Free worldwide shipping</p>
                <p className="font-semibold">✓ Certificate of authenticity included</p>
                <p className="font-semibold">✓ 60-day return guarantee</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
