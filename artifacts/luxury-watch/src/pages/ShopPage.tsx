import { useState, useMemo } from 'react';
import { useRoute, useLocation } from 'wouter';
import { motion } from 'framer-motion';
import { Filter, SlidersHorizontal, X, ChevronDown, Search } from 'lucide-react';
import { products, categoryInfo, Category } from '../data/mockData';
import ProductCard from '../components/ProductCard';

const categoryKeys = Object.keys(categoryInfo) as Category[];
const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Highest Rated' },
  { value: 'newest', label: 'Newest First' },
];

export default function ShopPage() {
  const [matchCat, params] = useRoute('/shop/:category');
  const [location] = useLocation();
  const urlCategory = matchCat ? (params?.category as Category) : undefined;

  const urlParams = new URLSearchParams(location.split('?')[1] || '');
  const urlQuery = urlParams.get('q') || '';

  const [selectedCategory, setSelectedCategory] = useState<Category | 'all'>(urlCategory || 'all');
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);
  const [searchQuery, setSearchQuery] = useState(urlQuery);
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    let list = [...products];
    if (selectedCategory !== 'all') list = list.filter(p => p.category === selectedCategory);
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      list = list.filter(p => p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q) || p.tags.some(t => t.includes(q)));
    }
    list = list.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);
    switch (sortBy) {
      case 'price-asc': return list.sort((a, b) => a.price - b.price);
      case 'price-desc': return list.sort((a, b) => b.price - a.price);
      case 'rating': return list.sort((a, b) => b.rating - a.rating);
      case 'newest': return list.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
      default: return list.sort((a, b) => ((b.isBestseller || b.isNew ? 1 : 0) - (a.isBestseller || a.isNew ? 1 : 0)));
    }
  }, [selectedCategory, sortBy, priceRange, searchQuery]);

  const activeCategory = selectedCategory !== 'all' ? categoryInfo[selectedCategory as Category] : null;

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950">
      <div className="bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h1 className="text-4xl font-bold font-serif text-neutral-900 dark:text-white">
            {activeCategory ? activeCategory.label : 'All Collections'}
          </h1>
          <p className="text-neutral-500 dark:text-neutral-400 mt-2">
            {activeCategory ? activeCategory.description : 'Explore our full universe of luxury goods'}
            {' '}· <span className="font-medium text-amber-600">{filtered.length} pieces</span>
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className={`lg:w-56 flex-shrink-0 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-5 sticky top-24 space-y-6">
              <div>
                <h3 className="text-xs font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-widest mb-3">Category</h3>
                <div className="space-y-1">
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${selectedCategory === 'all' ? 'bg-amber-600 text-white' : 'text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800'}`}
                  >
                    All ({products.length})
                  </button>
                  {categoryKeys.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${selectedCategory === cat ? 'bg-amber-600 text-white' : 'text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800'}`}
                    >
                      {categoryInfo[cat].label} ({products.filter(p => p.category === cat).length})
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xs font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-widest mb-3">Price Range</h3>
                <div className="space-y-2">
                  {[[0, 500], [500, 1500], [1500, 5000], [5000, 10000]].map(([min, max]) => (
                    <button
                      key={`${min}-${max}`}
                      onClick={() => setPriceRange([min, max])}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${priceRange[0] === min && priceRange[1] === max ? 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400' : 'text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800'}`}
                    >
                      ${min.toLocaleString()} – {max === 10000 ? '$10,000+' : `$${max.toLocaleString()}`}
                    </button>
                  ))}
                  <button
                    onClick={() => setPriceRange([0, 10000])}
                    className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-neutral-400 hover:text-amber-600 transition-colors"
                  >
                    Clear filter
                  </button>
                </div>
              </div>
            </div>
          </aside>

          <div className="flex-1">
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                <input
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  placeholder="Search products..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-sm text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500 placeholder-neutral-400"
                />
                {searchQuery && (
                  <button onClick={() => setSearchQuery('')} className="absolute right-3 top-1/2 -translate-y-1/2">
                    <X className="w-4 h-4 text-neutral-400 hover:text-neutral-700" />
                  </button>
                )}
              </div>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={e => setSortBy(e.target.value)}
                  className="appearance-none pl-4 pr-10 py-2.5 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-sm text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                  {sortOptions.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 pointer-events-none" />
              </div>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden flex items-center gap-2 px-4 py-2.5 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-sm font-medium text-neutral-700 dark:text-neutral-300"
              >
                <Filter className="w-4 h-4" /> Filters
              </button>
            </div>

            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <SlidersHorizontal className="w-12 h-12 text-neutral-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-neutral-700 dark:text-neutral-300">No products found</h3>
                <p className="text-sm text-neutral-400 mt-1">Try adjusting your filters or search query.</p>
                <button onClick={() => { setSelectedCategory('all'); setSearchQuery(''); setPriceRange([0, 10000]); }}
                  className="mt-4 px-6 py-2.5 bg-amber-600 text-white rounded-xl text-sm font-semibold hover:bg-amber-700 transition-colors">
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
                {filtered.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
