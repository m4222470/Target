import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ShoppingBag, Search, User, Heart, Menu, X, ChevronDown,
  Watch, Gem, Glasses, FlaskConical, Briefcase, LogOut, LayoutDashboard
} from 'lucide-react';
import useCartStore from '../../store/cartStore';
import useAuthStore from '../../store/authStore';
import useThemeStore from '../../store/themeStore';
import DarkModeToggle from '../DarkModeToggle';

const categories = [
  { id: 'watches', label: 'Timepieces', icon: Watch, href: '/collections/watches', shopHref: '/shop/watches' },
  { id: 'jewelry', label: 'Fine Jewelry', icon: Gem, href: '/collections/jewelry', shopHref: '/shop/jewelry' },
  { id: 'accessories', label: 'Accessories', icon: Glasses, href: '/collections/accessories', shopHref: '/shop/accessories' },
  { id: 'fragrances', label: 'Fragrances', icon: FlaskConical, href: '/collections/fragrances', shopHref: '/shop/fragrances' },
  { id: 'leather', label: 'Leather Goods', icon: Briefcase, href: '/collections/leather', shopHref: '/shop/leather' },
];

const navLinks = [
  { label: 'Collections', href: '/shop', hasDropdown: true },
  { label: 'Lookbook', href: '/lookbook' },
  { label: 'Journal', href: '/journal' },
  { label: 'Boutiques', href: '/boutiques' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [shopDropdown, setShopDropdown] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [location, navigate] = useLocation();

  const { items, openCart } = useCartStore();
  const { user, isAuthenticated, logout } = useAuthStore();
  const { isDarkMode } = useThemeStore();
  const totalItems = items.reduce((s, i) => s + i.quantity, 0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); setShopDropdown(false); }, [location]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setSearchQuery('');
    }
  };

  return (
    <>
      <div className="bg-neutral-950 text-center py-3 px-6">
        <p className="text-[0.68rem] tracking-[0.22em] text-[#c9a850] font-light uppercase">
          Free Worldwide Shipping&nbsp;&nbsp;·&nbsp;&nbsp;Certificate of Authenticity&nbsp;&nbsp;·&nbsp;&nbsp;60-Day Returns
        </p>
      </div>

      <header className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md shadow-sm'
          : 'bg-white dark:bg-neutral-900'
      } border-b border-neutral-200 dark:border-neutral-800`}>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/">
              <span className="text-xl font-bold tracking-widest text-neutral-900 dark:text-white font-serif cursor-pointer select-none">
                AURUM & CO.
              </span>
            </Link>

            <nav className="hidden lg:flex items-center gap-6">
              {navLinks.map(link => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => link.hasDropdown && setShopDropdown(true)}
                  onMouseLeave={() => link.hasDropdown && setShopDropdown(false)}
                >
                  {link.hasDropdown ? (
                    <button className="flex items-center gap-1 text-sm font-medium text-neutral-600 dark:text-neutral-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
                      {link.label}
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${shopDropdown ? 'rotate-180' : ''}`} />
                    </button>
                  ) : (
                    <Link href={link.href}>
                      <span className={`text-sm font-medium transition-colors cursor-pointer ${
                        location === link.href
                          ? 'text-amber-600 dark:text-amber-400'
                          : 'text-neutral-600 dark:text-neutral-300 hover:text-amber-600 dark:hover:text-amber-400'
                      }`}>
                        {link.label}
                      </span>
                    </Link>
                  )}

                  {link.hasDropdown && (
                    <AnimatePresence>
                      {shopDropdown && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.15 }}
                          className="absolute top-full left-0 pt-3 w-52"
                        >
                          <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-xl border border-neutral-100 dark:border-neutral-700 overflow-hidden">
                            {categories.map(cat => (
                              <Link key={cat.id} href={cat.href}>
                                <div className="flex items-center gap-3 px-4 py-3 hover:bg-amber-50 dark:hover:bg-neutral-700 transition-colors cursor-pointer group">
                                  <cat.icon className="w-4 h-4 text-amber-600 group-hover:scale-110 transition-transform" />
                                  <div>
                                    <span className="text-sm font-medium text-neutral-700 dark:text-neutral-200">{cat.label}</span>
                                    <span className="block text-xs text-neutral-400">Shop now →</span>
                                  </div>
                                </div>
                              </Link>
                            ))}
                            <div className="border-t border-neutral-100 dark:border-neutral-700 grid grid-cols-2">
                              <Link href="/gift-guide">
                                <div className="px-4 py-3 text-xs font-semibold text-neutral-600 dark:text-neutral-400 hover:bg-amber-50 dark:hover:bg-neutral-700 cursor-pointer hover:text-amber-600">🎁 Gift Guide</div>
                              </Link>
                              <Link href="/lookbook">
                                <div className="px-4 py-3 text-xs font-semibold text-neutral-600 dark:text-neutral-400 hover:bg-amber-50 dark:hover:bg-neutral-700 cursor-pointer hover:text-amber-600">📸 Lookbook</div>
                              </Link>
                              <Link href="/shop">
                                <div className="col-span-2 px-4 py-3 text-sm font-semibold text-amber-600 hover:bg-amber-50 dark:hover:bg-neutral-700 cursor-pointer">
                                  View All Collections →
                                </div>
                              </Link>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setSearchOpen(true)}
              className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors text-neutral-600 dark:text-neutral-300"
            >
              <Search className="w-5 h-5" />
            </button>

            <DarkModeToggle />

            {isAuthenticated ? (
              <div className="relative group hidden sm:block">
                <button className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors">
                  <User className="w-5 h-5 text-neutral-600 dark:text-neutral-300" />
                </button>
                <div className="absolute right-0 top-full pt-2 w-48 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity">
                  <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-xl border border-neutral-100 dark:border-neutral-700 overflow-hidden">
                    <div className="px-4 py-3 border-b border-neutral-100 dark:border-neutral-700">
                      <p className="text-xs font-semibold text-neutral-900 dark:text-white truncate">{user?.name}</p>
                      <p className="text-xs text-neutral-400 truncate">{user?.email}</p>
                    </div>
                    <Link href="/account">
                      <div className="flex items-center gap-2 px-4 py-2.5 hover:bg-neutral-50 dark:hover:bg-neutral-700 cursor-pointer text-sm text-neutral-700 dark:text-neutral-200">
                        <User className="w-4 h-4" /> My Account
                      </div>
                    </Link>
                    <Link href="/account/orders">
                      <div className="flex items-center gap-2 px-4 py-2.5 hover:bg-neutral-50 dark:hover:bg-neutral-700 cursor-pointer text-sm text-neutral-700 dark:text-neutral-200">
                        <ShoppingBag className="w-4 h-4" /> My Orders
                      </div>
                    </Link>
                    <Link href="/wishlist">
                      <div className="flex items-center gap-2 px-4 py-2.5 hover:bg-neutral-50 dark:hover:bg-neutral-700 cursor-pointer text-sm text-neutral-700 dark:text-neutral-200">
                        <Heart className="w-4 h-4" /> Wishlist
                      </div>
                    </Link>
                    {user?.role === 'admin' && (
                      <Link href="/admin">
                        <div className="flex items-center gap-2 px-4 py-2.5 hover:bg-neutral-50 dark:hover:bg-neutral-700 cursor-pointer text-sm text-amber-600">
                          <LayoutDashboard className="w-4 h-4" /> Admin Panel
                        </div>
                      </Link>
                    )}
                    <div className="border-t border-neutral-100 dark:border-neutral-700">
                      <button
                        onClick={logout}
                        className="flex items-center gap-2 w-full px-4 py-2.5 hover:bg-red-50 dark:hover:bg-red-900/20 text-sm text-red-500 transition-colors"
                      >
                        <LogOut className="w-4 h-4" /> Sign Out
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <Link href="/login">
                <button className="hidden sm:flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-neutral-600 dark:text-neutral-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
                  <User className="w-4 h-4" /> Sign In
                </button>
              </Link>
            )}

            <Link href="/wishlist">
              <button className="hidden sm:flex p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors text-neutral-600 dark:text-neutral-300">
                <Heart className="w-5 h-5" />
              </button>
            </Link>

            <button
              onClick={openCart}
              className="relative p-2 rounded-full bg-amber-600 hover:bg-amber-700 text-white transition-colors"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center"
                >
                  {totalItems > 9 ? '9+' : totalItems}
                </motion.span>
              )}
            </button>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            >
              {mobileOpen ? <X className="w-5 h-5 text-neutral-700 dark:text-neutral-300" /> : <Menu className="w-5 h-5 text-neutral-700 dark:text-neutral-300" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden overflow-hidden border-t border-neutral-200 dark:border-neutral-800"
            >
              <nav className="px-4 py-5 space-y-1">
                {navLinks.map(link => (
                  <Link key={link.label} href={link.href}>
                    <div className="px-3 py-2.5 rounded-xl text-sm font-medium text-neutral-700 dark:text-neutral-200 hover:bg-amber-50 dark:hover:bg-neutral-800 cursor-pointer">
                      {link.label}
                    </div>
                  </Link>
                ))}
                <div className="pt-2 border-t border-neutral-100 dark:border-neutral-800 mt-2 space-y-1">
                  {categories.map(cat => (
                    <Link key={cat.id} href={cat.href}>
                      <div className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-800 cursor-pointer">
                        <cat.icon className="w-4 h-4 text-amber-600" /> {cat.label}
                      </div>
                    </Link>
                  ))}
                </div>
                {!isAuthenticated && (
                  <div className="pt-2 border-t border-neutral-100 dark:border-neutral-800">
                    <Link href="/login">
                      <div className="px-3 py-2.5 rounded-xl text-sm font-medium text-amber-600 cursor-pointer">Sign In / Register</div>
                    </Link>
                  </div>
                )}
                {isAuthenticated && (
                  <div className="pt-2 border-t border-neutral-100 dark:border-neutral-800 space-y-1">
                    <Link href="/account"><div className="px-3 py-2.5 rounded-xl text-sm font-medium text-neutral-700 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-800 cursor-pointer">My Account</div></Link>
                    <Link href="/wishlist"><div className="px-3 py-2.5 rounded-xl text-sm font-medium text-neutral-700 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-800 cursor-pointer">Wishlist</div></Link>
                    {user?.role === 'admin' && <Link href="/admin"><div className="px-3 py-2.5 rounded-xl text-sm font-semibold text-amber-600 hover:bg-amber-50 cursor-pointer">Admin Panel</div></Link>}
                    <button onClick={logout} className="w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium text-red-500 hover:bg-red-50 cursor-pointer">Sign Out</button>
                  </div>
                )}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-start justify-center pt-20 px-4"
            onClick={() => setSearchOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, y: -20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: -20 }}
              onClick={e => e.stopPropagation()}
              className="w-full max-w-2xl"
            >
              <form onSubmit={handleSearch} className="relative">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                <input
                  autoFocus
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  placeholder="Search watches, jewelry, accessories..."
                  className="w-full pl-14 pr-6 py-5 text-lg bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
