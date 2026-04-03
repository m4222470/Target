import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag, Trash2, Plus, Minus, Instagram, Twitter, Facebook, Youtube, Mail, Phone, MapPin } from 'lucide-react';

import Watch3DViewer from './components/Watch3DViewer';
import ProductDetails from './components/ProductDetails';
import ColorSelector from './components/ColorSelector';
import QuantitySelector from './components/QuantitySelector';
import AddToCartButton from './components/AddToCartButton';
import DarkModeToggle from './components/DarkModeToggle';
import StickyCartBar from './components/StickyCartBar';
import FloatingConcierge from './components/FloatingConcierge';

import StatsBar from './sections/StatsBar';
import FeaturedCollection from './sections/FeaturedCollection';
import BrandHeritage from './sections/BrandHeritage';
import Craftsmanship from './sections/Craftsmanship';
import WhyChooseUs from './sections/WhyChooseUs';
import Testimonials from './sections/Testimonials';
import PressAwards from './sections/PressAwards';
import Newsletter from './sections/Newsletter';
import CountdownBanner from './sections/CountdownBanner';
import SpecsTable from './sections/SpecsTable';

import productData from './data/product.json';
import useCartStore, { CartItem } from './store/cartStore';
import useThemeStore from './store/themeStore';

import heroBanner from '@assets/hero_banner_1775253265317.webp';
import heroVideo from '@assets/hero_loop_1775253465787.mp4';

const navLinks = [
  { label: 'Collection', href: '#collection' },
  { label: 'Heritage', href: '#heritage' },
  { label: 'Craftsmanship', href: '#craftsmanship' },
  { label: 'Reviews', href: '#reviews' },
];

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
              <div>
                <h2 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">Your Cart</h2>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                  {items.length === 0 ? 'No items yet' : `${items.reduce((s, i) => s + i.quantity, 0)} item(s)`}
                </p>
              </div>
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
                  <ShoppingBag className="w-16 h-16 mb-4 opacity-20" />
                  <p className="text-lg font-medium">Your cart is empty</p>
                  <p className="text-sm mt-1 text-center">Browse our collection and find your perfect timepiece.</p>
                  <button
                    onClick={onClose}
                    className="mt-6 px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-xl text-sm transition-colors"
                  >
                    Explore Collection
                  </button>
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
                        <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 truncate">{item.name}</h3>
                        <p className="text-sm text-neutral-500 dark:text-neutral-400">{item.colorName}</p>
                        <p className="font-semibold text-amber-600 dark:text-amber-400">${item.price.toLocaleString()}</p>
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
              <div className="p-6 border-t border-neutral-200 dark:border-neutral-700 space-y-3">
                <div className="flex justify-between text-sm text-neutral-600 dark:text-neutral-400">
                  <span>Shipping</span>
                  <span className="text-green-600 font-medium">Free</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-neutral-900 dark:text-neutral-100">Total</span>
                  <span className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
                    ${totalPrice.toLocaleString()}
                  </span>
                </div>
                <button className="w-full py-4 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-semibold transition-colors shadow-lg mt-2">
                  Proceed to Checkout
                </button>
                <p className="text-center text-xs text-neutral-500 dark:text-neutral-500">
                  Secure checkout · SSL encrypted · All currencies
                </p>
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

const AnnouncementBar = () => (
  <div className="bg-amber-600 text-white text-center text-xs py-2.5 px-4 tracking-wide font-medium">
    Free worldwide shipping on all orders · Certificate of authenticity included · 60-day returns
  </div>
);

function App() {
  const [selectedColor, setSelectedColor] = useState(productData.colors[0].id);
  const [quantity, setQuantity] = useState(1);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const productSectionRef = useRef<HTMLElement>(null);
  const isCartOpen = useCartStore((state) => state.isCartOpen);
  const closeCart = useCartStore((state) => state.closeCart);
  const { isDarkMode } = useThemeStore();

  const selectedColorObj = productData.colors.find((c) => c.id === selectedColor);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 transition-colors duration-300">
      <AnnouncementBar />

      <header
        className={`sticky top-0 z-30 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md shadow-sm border-b border-neutral-200 dark:border-neutral-800'
            : 'bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <span className="text-2xl font-bold tracking-widest text-neutral-900 dark:text-neutral-100 font-serif">
              {productData.brand}
            </span>
            <nav className="hidden md:flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors tracking-wide"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <DarkModeToggle />
            <CartButton />
            <button
              className="md:hidden p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <div className="space-y-1.5">
                <span className="block w-5 h-0.5 bg-neutral-700 dark:bg-neutral-300" />
                <span className="block w-5 h-0.5 bg-neutral-700 dark:bg-neutral-300" />
                <span className="block w-5 h-0.5 bg-neutral-700 dark:bg-neutral-300" />
              </div>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden border-t border-neutral-200 dark:border-neutral-800"
            >
              <nav className="px-4 py-4 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <div className="relative h-[85vh] min-h-[500px] overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-center"
          poster={heroBanner}
        >
          <source src={heroVideo} type="video/mp4" />
          <img src={heroBanner} alt="Hero" className="absolute inset-0 w-full h-full object-cover" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/10 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-xs tracking-[0.4em] text-amber-400 uppercase mb-4"
            >
              Since 1985 · Geneva, Switzerland
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="text-5xl md:text-7xl font-bold text-white tracking-tight font-serif leading-tight"
            >
              Time Is the Only<br />
              <span className="text-amber-400">True Luxury.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg text-neutral-300 mt-5 max-w-md leading-relaxed"
            >
              Handcrafted by master watchmakers. Worn by those who understand the difference.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-wrap gap-4 mt-8"
            >
              <a
                href="#product"
                className="px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-full transition-colors shadow-lg text-sm tracking-wide"
              >
                Shop Now
              </a>
              <a
                href="#heritage"
                className="px-8 py-4 border border-white/40 hover:border-white text-white font-semibold rounded-full backdrop-blur-sm transition-colors text-sm tracking-wide"
              >
                Our Story
              </a>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center pt-2"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-white/80" />
          </motion.div>
        </div>
      </div>

      <StatsBar />

      <section id="product" ref={productSectionRef} className="py-20 bg-white dark:bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Watch3DViewer />
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
                <QuantitySelector quantity={quantity} onQuantityChange={setQuantity} max={10} />
              </div>
              <AddToCartButton
                product={productData}
                selectedColor={selectedColorObj}
                quantity={quantity}
              />

              <div className="grid grid-cols-3 gap-4 pt-2">
                {[
                  { label: 'Free Shipping', sub: 'Worldwide' },
                  { label: 'Lifetime Warranty', sub: 'Guaranteed' },
                  { label: '60-Day Returns', sub: 'No questions' },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="text-center py-4 px-3 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800"
                  >
                    <p className="text-xs font-bold text-neutral-900 dark:text-neutral-100">{item.label}</p>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">{item.sub}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CountdownBanner />

      <div id="collection">
        <FeaturedCollection />
      </div>

      <SpecsTable />

      <div id="heritage">
        <BrandHeritage />
      </div>

      <div id="craftsmanship">
        <Craftsmanship />
      </div>

      <WhyChooseUs />

      <div id="reviews">
        <Testimonials />
      </div>

      <PressAwards />

      <Newsletter />

      <footer className="bg-neutral-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
          <div className="grid md:grid-cols-4 gap-10 mb-14">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold font-serif tracking-widest text-amber-400">{productData.brand}</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Crafting extraordinary timepieces since 1985. Every watch is a commitment to the art of precision and the beauty of time.
              </p>
              <div className="flex items-center gap-3 pt-2">
                {[Instagram, Twitter, Facebook, Youtube].map((Icon, i) => (
                  <button
                    key={i}
                    className="w-9 h-9 rounded-full bg-neutral-800 hover:bg-amber-600 flex items-center justify-center transition-colors"
                  >
                    <Icon className="w-4 h-4 text-neutral-400 hover:text-white" />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-neutral-100 mb-5 text-sm uppercase tracking-widest">Collection</h4>
              <ul className="space-y-3 text-sm text-neutral-400">
                {['Chronograph I', 'Tourbillon S', 'Heritage XL', 'Artisan S', 'Limited Editions'].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-amber-400 transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-neutral-100 mb-5 text-sm uppercase tracking-widest">Company</h4>
              <ul className="space-y-3 text-sm text-neutral-400">
                {['Our Heritage', 'Craftsmanship', 'Atelier Visit', 'Press & Awards', 'Careers', 'Contact'].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-amber-400 transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-neutral-100 mb-5 text-sm uppercase tracking-widest">Contact</h4>
              <ul className="space-y-4 text-sm text-neutral-400">
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                  <span>14 Rue de Montbrillant, Geneva, Switzerland</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span>+41 22 999 0100</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span>atelier@aurum-co.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-neutral-500">
            <p>© {new Date().getFullYear()} {productData.brand}. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-amber-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-amber-400 transition-colors">Terms of Sale</a>
              <a href="#" className="hover:text-amber-400 transition-colors">Cookie Settings</a>
            </div>
          </div>
        </div>
      </footer>

      <StickyCartBar productRef={productSectionRef} />
      <FloatingConcierge />
      <CartDrawer isOpen={isCartOpen} onClose={closeCart} />
    </div>
  );
}

export default App;
