import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { X, Plus, Check, Minus, ShoppingBag } from 'lucide-react';
import { products } from '../data/mockData';
import useCartStore from '../store/cartStore';

const specs = [
  { key: 'category', label: 'Category' },
  { key: 'material', label: 'Material' },
  { key: 'movement', label: 'Movement' },
  { key: 'waterResistance', label: 'Water Resistance' },
  { key: 'caseDiameter', label: 'Case Diameter' },
  { key: 'powerReserve', label: 'Power Reserve' },
  { key: 'warranty', label: 'Warranty' },
];

const mockSpecs: Record<string, Record<string, string>> = {
  default: {
    material: '316L Stainless Steel',
    movement: 'Swiss Automatic',
    waterResistance: '100m',
    caseDiameter: '42mm',
    powerReserve: '48 hours',
    warranty: '5 Years',
  },
};

function getSpec(productId: string, key: string, product: any): string {
  if (key === 'category') return product.category.charAt(0).toUpperCase() + product.category.slice(1);
  return mockSpecs.default[key] || '—';
}

const MAX_COMPARE = 3;

export default function ComparisonPage() {
  const [selected, setSelected] = useState<string[]>(products.slice(0, 2).map(p => p.id));
  const [search, setSearch] = useState('');
  const { addItem } = useCartStore();

  const selectedProducts = selected.map(id => products.find(p => p.id === id)).filter(Boolean) as typeof products;
  const filteredProducts = products.filter(p =>
    !selected.includes(p.id) &&
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  const addToCompare = (id: string) => {
    if (selected.length < MAX_COMPARE) setSelected([...selected, id]);
  };

  const removeFromCompare = (id: string) => {
    setSelected(selected.filter(s => s !== id));
  };

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950">

      {/* Header */}
      <section className="bg-neutral-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-xs tracking-[0.5em] text-amber-400 uppercase mb-3">Side-by-Side</p>
            <h1 className="text-5xl font-bold font-serif mb-3">Compare Products</h1>
            <p className="text-neutral-400">Select up to {MAX_COMPARE} items to compare specifications and pricing.</p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

          {/* Sidebar — product picker */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <h2 className="text-sm font-bold text-neutral-900 dark:text-white mb-4 uppercase tracking-wider">Add Products</h2>
              <div className="relative mb-4">
                <input
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  placeholder="Search products..."
                  className="w-full px-4 py-2.5 text-sm bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-xl text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:border-amber-500"
                />
              </div>
              <div className="space-y-2 max-h-96 overflow-y-auto">
                {filteredProducts.map(p => (
                  <button
                    key={p.id}
                    onClick={() => addToCompare(p.id)}
                    disabled={selected.length >= MAX_COMPARE}
                    className="w-full flex items-center gap-3 p-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:border-amber-500/50 transition-colors text-left disabled:opacity-40 disabled:cursor-not-allowed group"
                  >
                    <img src={p.images[0]} alt={p.name} className="w-10 h-10 object-cover rounded-lg flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-neutral-900 dark:text-white truncate">{p.name}</p>
                      <p className="text-xs text-amber-600 dark:text-amber-400">${p.price.toLocaleString()}</p>
                    </div>
                    <Plus size={14} className="text-neutral-400 group-hover:text-amber-500 flex-shrink-0" />
                  </button>
                ))}
                {filteredProducts.length === 0 && (
                  <p className="text-sm text-neutral-400 text-center py-4">No more products to add</p>
                )}
              </div>
              <p className="text-xs text-neutral-400 mt-4 text-center">{selected.length}/{MAX_COMPARE} products selected</p>
            </div>
          </div>

          {/* Comparison Table */}
          <div className="lg:col-span-3">
            {selectedProducts.length === 0 ? (
              <div className="text-center py-24 text-neutral-400">
                <p className="text-lg font-semibold mb-2">No products selected</p>
                <p className="text-sm">Pick products from the left panel to compare them here.</p>
              </div>
            ) : (
              <div>
                {/* Product Cards Row */}
                <div className={`grid gap-4 mb-8`} style={{ gridTemplateColumns: `repeat(${selectedProducts.length}, 1fr)` }}>
                  {selectedProducts.map((p, i) => (
                    <motion.div
                      key={p.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-white/5 rounded-2xl p-4 relative"
                    >
                      <button
                        onClick={() => removeFromCompare(p.id)}
                        className="absolute top-3 right-3 w-6 h-6 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center hover:bg-red-100 dark:hover:bg-red-900/30 hover:text-red-500 transition-colors"
                      >
                        <X size={12} />
                      </button>
                      <img src={p.images[0]} alt={p.name} className="w-full h-40 object-cover rounded-xl mb-4" />
                      <p className="text-xs text-amber-500 uppercase tracking-wider mb-1">{p.category}</p>
                      <h3 className="font-bold text-neutral-900 dark:text-white text-sm mb-2 leading-tight">{p.name}</h3>
                      <p className="text-lg font-bold font-serif text-amber-600 dark:text-amber-400 mb-3">${p.price.toLocaleString()}</p>
                      <button
                        onClick={() => addItem(p)}
                        className="w-full flex items-center justify-center gap-2 py-2 bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold rounded-full transition-colors"
                      >
                        <ShoppingBag size={12} /> Add to Cart
                      </button>
                    </motion.div>
                  ))}
                </div>

                {/* Specs Table */}
                <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-white/5 rounded-2xl overflow-hidden">
                  <div className="px-6 py-4 border-b border-neutral-100 dark:border-white/5">
                    <h3 className="font-bold text-neutral-900 dark:text-white text-sm uppercase tracking-wider">Specifications</h3>
                  </div>
                  {specs.map((spec, i) => (
                    <div
                      key={spec.key}
                      className={`grid gap-0 ${i % 2 === 0 ? 'bg-neutral-50 dark:bg-neutral-900' : 'bg-white dark:bg-neutral-800/30'}`}
                      style={{ gridTemplateColumns: `180px repeat(${selectedProducts.length}, 1fr)` }}
                    >
                      <div className="px-6 py-4 flex items-center">
                        <span className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">{spec.label}</span>
                      </div>
                      {selectedProducts.map(p => (
                        <div key={p.id} className="px-4 py-4 flex items-center border-l border-neutral-100 dark:border-white/5">
                          <span className="text-sm text-neutral-700 dark:text-neutral-300">{getSpec(p.id, spec.key, p)}</span>
                        </div>
                      ))}
                    </div>
                  ))}

                  {/* Rating Row */}
                  <div
                    className="grid bg-neutral-50 dark:bg-neutral-900 border-t border-neutral-100 dark:border-white/5"
                    style={{ gridTemplateColumns: `180px repeat(${selectedProducts.length}, 1fr)` }}
                  >
                    <div className="px-6 py-4 flex items-center">
                      <span className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">Rating</span>
                    </div>
                    {selectedProducts.map(p => (
                      <div key={p.id} className="px-4 py-4 flex items-center gap-1 border-l border-neutral-100 dark:border-white/5">
                        {[1, 2, 3, 4, 5].map(s => (
                          <div key={s} className={`w-3 h-3 rounded-full ${s <= (p.rating || 4) ? 'bg-amber-400' : 'bg-neutral-200 dark:bg-neutral-700'}`} />
                        ))}
                        <span className="ml-1 text-xs text-neutral-500">{p.rating || '4.8'}</span>
                      </div>
                    ))}
                  </div>

                  {/* In Stock Row */}
                  <div
                    className="grid bg-white dark:bg-neutral-800/30"
                    style={{ gridTemplateColumns: `180px repeat(${selectedProducts.length}, 1fr)` }}
                  >
                    <div className="px-6 py-4 flex items-center">
                      <span className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">In Stock</span>
                    </div>
                    {selectedProducts.map(p => (
                      <div key={p.id} className="px-4 py-4 flex items-center border-l border-neutral-100 dark:border-white/5">
                        {p.inStock !== false ? (
                          <span className="flex items-center gap-1 text-green-500 text-sm font-semibold"><Check size={14} /> Yes</span>
                        ) : (
                          <span className="flex items-center gap-1 text-red-400 text-sm font-semibold"><Minus size={14} /> No</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Best Value Badge */}
                {selectedProducts.length > 1 && (
                  <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-500/20 rounded-xl flex items-center gap-3">
                    <Check className="text-amber-600 dark:text-amber-400 flex-shrink-0" size={18} />
                    <p className="text-sm text-amber-800 dark:text-amber-300">
                      <strong>{selectedProducts.reduce((a, b) => a.price < b.price ? a : b).name}</strong> offers the best value in this comparison.
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

    </div>
  );
}
