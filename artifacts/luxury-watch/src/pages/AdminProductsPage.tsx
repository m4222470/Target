import { useState } from 'react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { Plus, Search, Edit, Trash2, Star, Package, ArrowLeft } from 'lucide-react';
import { products, categoryInfo } from '../data/mockData';
import useAuthStore from '../store/authStore';

export default function AdminProductsPage() {
  const { user, isAuthenticated } = useAuthStore();
  const [search, setSearch] = useState('');
  const [catFilter, setCatFilter] = useState('all');

  if (!isAuthenticated || user?.role !== 'admin') {
    return <div className="min-h-screen flex items-center justify-center"><Link href="/login"><button className="px-6 py-3 bg-amber-600 text-white rounded-xl font-semibold">Sign In as Admin</button></Link></div>;
  }

  const filtered = products.filter(p => {
    const matchCat = catFilter === 'all' || p.category === catFilter;
    const matchSearch = !search || p.name.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="min-h-screen bg-neutral-100 dark:bg-neutral-950">
      <div className="bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/admin"><span className="flex items-center gap-1.5 text-neutral-500 hover:text-amber-600 cursor-pointer text-sm"><ArrowLeft className="w-4 h-4" /> Dashboard</span></Link>
            <span className="text-neutral-300">/</span>
            <div className="flex items-center gap-2">
              <Package className="w-5 h-5 text-amber-600" />
              <h1 className="text-base font-bold text-neutral-900 dark:text-white">Products</h1>
              <span className="px-2 py-0.5 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 text-xs font-bold rounded-full">{products.length}</span>
            </div>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white text-sm font-semibold rounded-xl transition-colors">
            <Plus className="w-4 h-4" /> Add Product
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
            <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search products..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-sm text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500" />
          </div>
          <select value={catFilter} onChange={e => setCatFilter(e.target.value)}
            className="px-4 py-2.5 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-sm text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500">
            <option value="all">All Categories</option>
            {Object.entries(categoryInfo).map(([key, cat]) => <option key={key} value={key}>{cat.label}</option>)}
          </select>
        </div>

        <div className="bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden">
          <table className="w-full">
            <thead className="bg-neutral-50 dark:bg-neutral-800 border-b border-neutral-200 dark:border-neutral-700">
              <tr>
                <th className="text-left px-5 py-3 text-xs font-bold text-neutral-500 uppercase tracking-wider">Product</th>
                <th className="text-left px-5 py-3 text-xs font-bold text-neutral-500 uppercase tracking-wider hidden sm:table-cell">Category</th>
                <th className="text-left px-5 py-3 text-xs font-bold text-neutral-500 uppercase tracking-wider">Price</th>
                <th className="text-left px-5 py-3 text-xs font-bold text-neutral-500 uppercase tracking-wider hidden md:table-cell">Rating</th>
                <th className="text-left px-5 py-3 text-xs font-bold text-neutral-500 uppercase tracking-wider hidden lg:table-cell">Status</th>
                <th className="px-5 py-3 text-xs font-bold text-neutral-500 uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100 dark:divide-neutral-800">
              {filtered.map((p, i) => (
                <motion.tr key={p.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.03 }} className="hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors">
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-3">
                      <img src={p.image} alt={p.name} className="w-10 h-10 rounded-xl object-cover flex-shrink-0" />
                      <div>
                        <p className="text-sm font-semibold text-neutral-900 dark:text-white line-clamp-1">{p.name}</p>
                        <p className="text-xs text-neutral-400">{p.brand}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-3 hidden sm:table-cell">
                    <span className="px-2.5 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 text-xs rounded-lg capitalize">{categoryInfo[p.category]?.label}</span>
                  </td>
                  <td className="px-5 py-3">
                    <div>
                      <p className="text-sm font-bold text-neutral-900 dark:text-white">${p.price.toLocaleString()}</p>
                      {p.originalPrice && <p className="text-xs text-neutral-400 line-through">${p.originalPrice.toLocaleString()}</p>}
                    </div>
                  </td>
                  <td className="px-5 py-3 hidden md:table-cell">
                    <div className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                      <span className="text-sm text-neutral-700 dark:text-neutral-300">{p.rating}</span>
                      <span className="text-xs text-neutral-400">({p.reviews})</span>
                    </div>
                  </td>
                  <td className="px-5 py-3 hidden lg:table-cell">
                    <div className="flex gap-1.5 flex-wrap">
                      {p.inStock && <span className="px-2 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-[10px] font-bold rounded-full">In Stock</span>}
                      {p.isNew && <span className="px-2 py-0.5 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 text-[10px] font-bold rounded-full">New</span>}
                      {p.isBestseller && <span className="px-2 py-0.5 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 text-[10px] font-bold rounded-full">Bestseller</span>}
                    </div>
                  </td>
                  <td className="px-5 py-3">
                    <div className="flex items-center justify-end gap-2">
                      <Link href={`/product/${p.id}`}>
                        <button className="p-1.5 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 text-neutral-500 hover:text-amber-600 transition-colors">
                          <Edit className="w-4 h-4" />
                        </button>
                      </Link>
                      <button className="p-1.5 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 text-neutral-500 hover:text-red-500 transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
          {filtered.length === 0 && (
            <div className="text-center py-12 text-neutral-400">
              <Package className="w-8 h-8 mx-auto mb-2 opacity-40" />
              <p className="text-sm">No products match your filters.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
