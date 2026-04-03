import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag, Trash2, Plus, Minus } from 'lucide-react';

import Gallery from './components/Gallery';
import ProductDetails from './components/ProductDetails';
import ColorSelector from './components/ColorSelector';
import QuantitySelector from './components/QuantitySelector';
import AddToCartButton from './components/AddToCartButton';
import DarkModeToggle from './components/DarkModeToggle';

import productData from './data/product.json';
import useCartStore, { CartItem } from './store/cartStore';
import useThemeStore from './store/themeStore';

import heroBanner from '@assets/hero_banner_1775253265317.webp';

const CartDrawer = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const { items, removeItem, updateQuantity } = useCartStore();
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          />

          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white dark:bg-neutral-900 shadow-2xl z-50 flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-neutral-200 dark:border-neutral-700">
              <h2 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">Your Cart</h2>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              >
                <X className="w-6 h-6 text-neutral-600 dark:text-neutral-400" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-neutral-500 dark:text-neutral-400">
                  <ShoppingBag className="w-16 h-16 mb-4 opacity-50" />
                  <p className="text-lg font-medium">Your cart is empty</p>
                  <p className="text-sm mt-1">Add a watch to get started</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item: CartItem) => (
                    <div
                      key={`${item.id}-${item.colorId}`}
                      className="flex gap-4 p-4 rounded-xl bg-neutral-50 dark:bg-neutral-800"
                    >
                      <div
                        className="w-16 h-16 rounded-lg flex-shrink-0 border-4"
                        style={{ backgroundColor: item.colorHex, borderColor: item.colorHex + '80' }}
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 truncate">
                          {item.name}
                        </h3>
                        <p className="text-sm text-neutral-500 dark:text-neutral-400">{item.colorName}</p>
                        <p className="font-semibold text-amber-600 dark:text-amber-400">
                          ${item.price.toLocaleString()}
                        </p>
                      </div>
                      <div className="flex flex-col items-end justify-between">
                        <button
                          onClick={() => removeItem(item.id, item.colorId)}
                          className="p-1 text-neutral-400 hover:text-red-500 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.colorId, item.quantity - 1)}
                            className="p-1 rounded hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-6 text-center font-medium text-neutral-900 dark:text-neutral-100">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.colorId, item.quantity + 1)}
                            className="p-1 rounded hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {items.length > 0 && (
              <div className="p-6 border-t border-neutral-200 dark:border-neutral-700">
                <div className="flex justify-between mb-4">
                  <span className="text-neutral-600 dark:text-neutral-400">Subtotal</span>
                  <span className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
                    ${totalPrice.toLocaleString()}
                  </span>
                </div>
                <button className="w-full py-4 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-semibold transition-colors shadow-lg">
                  Checkout
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const CartButton = () => {
  const items = useCartStore((state) => state.items);
  const openCart = useCartStore((state) => state.openCart);
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <motion.button
      onClick={openCart}
      className="relative p-3 rounded-full bg-amber-600 hover:bg-amber-700 text-white shadow-lg transition-colors"
      whileTap={{ scale: 0.95 }}
    >
      <ShoppingBag className="w-6 h-6" />
      {totalItems > 0 && (
        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 text-white text-xs font-bold flex items-center justify-center"
        >
          {totalItems > 9 ? '9+' : totalItems}
        </motion.span>
      )}
    </motion.button>
  );
};

function App() {
  const [selectedColor, setSelectedColor] = useState(productData.colors[0].id);
  const [quantity, setQuantity] = useState(1);
  const isCartOpen = useCartStore((state) => state.isCartOpen);
  const closeCart = useCartStore((state) => state.closeCart);
  const { isDarkMode } = useThemeStore();

  const selectedColorObj = productData.colors.find((c) => c.id === selectedColor);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 transition-colors duration-300">
      <header className="sticky top-0 z-30 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold tracking-widest text-neutral-900 dark:text-neutral-100 font-serif">
              {productData.brand}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <DarkModeToggle />
            <CartButton />
          </div>
        </div>
      </header>

      <div className="relative h-72 md:h-96 overflow-hidden">
        <img
          src={heroBanner}
          alt="Hero banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold text-white tracking-widest font-serif"
            >
              Premium Collection
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg text-amber-300 mt-2 tracking-wide"
            >
              Handcrafted Excellence Since 1985
            </motion.p>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Gallery images={productData.gallery} selectedColor={selectedColor} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-8"
          >
            <ProductDetails product={productData} />

            <div className="border-t border-neutral-200 dark:border-neutral-800" />

            <div className="space-y-6">
              <ColorSelector
                colors={productData.colors}
                selectedColor={selectedColor}
                onColorChange={setSelectedColor}
              />
              <QuantitySelector
                quantity={quantity}
                onQuantityChange={setQuantity}
                max={10}
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <AddToCartButton
                product={productData}
                selectedColor={selectedColorObj}
                quantity={quantity}
              />
            </motion.div>
          </motion.div>
        </div>
      </main>

      <footer className="border-t border-neutral-200 dark:border-neutral-800 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-neutral-900 dark:text-neutral-100 mb-4 tracking-widest uppercase text-sm">
                About
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Crafting timeless timepieces since 1985. Each watch is a masterpiece of precision engineering and artisanal craftsmanship.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-neutral-900 dark:text-neutral-100 mb-4 tracking-widest uppercase text-sm">
                Support
              </h3>
              <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                <li className="hover:text-amber-600 dark:hover:text-amber-400 cursor-pointer transition-colors">Shipping & Returns</li>
                <li className="hover:text-amber-600 dark:hover:text-amber-400 cursor-pointer transition-colors">Warranty Information</li>
                <li className="hover:text-amber-600 dark:hover:text-amber-400 cursor-pointer transition-colors">Care Instructions</li>
                <li className="hover:text-amber-600 dark:hover:text-amber-400 cursor-pointer transition-colors">Contact Us</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-neutral-900 dark:text-neutral-100 mb-4 tracking-widest uppercase text-sm">
                Connect
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Follow us for exclusive releases and behind-the-scenes content from our workshops.
              </p>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-neutral-200 dark:border-neutral-800 text-center text-sm text-neutral-500 dark:text-neutral-500">
            {new Date().getFullYear()} {productData.brand}. All rights reserved.
          </div>
        </div>
      </footer>

      <CartDrawer isOpen={isCartOpen} onClose={closeCart} />
    </div>
  );
}

export default App;
