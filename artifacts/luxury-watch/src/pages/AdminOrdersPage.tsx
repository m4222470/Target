import { useState } from 'react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { ArrowLeft, ShoppingBag, Search, Filter, Truck, Package, CheckCircle, Clock, XCircle } from 'lucide-react';
import { mockOrders } from '../data/mockData';
import useAuthStore from '../store/authStore';

const statusConfig: Record<string, { icon: any; color: string; bg: string; label: string }> = {
  pending: { icon: Clock, color: 'text-yellow-600', bg: 'bg-yellow-50 dark:bg-yellow-900/20', label: 'Pending' },
  processing: { icon: Package, color: 'text-blue-600', bg: 'bg-blue-50 dark:bg-blue-900/20', label: 'Processing' },
  shipped: { icon: Truck, color: 'text-purple-600', bg: 'bg-purple-50 dark:bg-purple-900/20', label: 'Shipped' },
  delivered: { icon: CheckCircle, color: 'text-green-600', bg: 'bg-green-50 dark:bg-green-900/20', label: 'Delivered' },
  cancelled: { icon: XCircle, color: 'text-red-500', bg: 'bg-red-50 dark:bg-red-900/20', label: 'Cancelled' },
};

export default function AdminOrdersPage() {
  const { user, isAuthenticated } = useAuthStore();
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  if (!isAuthenticated || user?.role !== 'admin') {
    return <div className="min-h-screen flex items-center justify-center"><Link href="/login"><button className="px-6 py-3 bg-amber-600 text-white rounded-xl font-semibold">Sign In as Admin</button></Link></div>;
  }

  const filtered = mockOrders.filter(o => {
    const matchStatus = statusFilter === 'all' || o.status === statusFilter;
    const matchSearch = !search || o.id.toLowerCase().includes(search.toLowerCase());
    return matchStatus && matchSearch;
  });

  const totalRevenue = filtered.reduce((s, o) => s + o.total, 0);

  return (
    <div className="min-h-screen bg-neutral-100 dark:bg-neutral-950">
      <div className="bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/admin"><span className="flex items-center gap-1.5 text-neutral-500 hover:text-amber-600 cursor-pointer text-sm"><ArrowLeft className="w-4 h-4" /> Dashboard</span></Link>
            <span className="text-neutral-300">/</span>
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-amber-600" />
              <h1 className="text-base font-bold text-neutral-900 dark:text-white">Orders</h1>
            </div>
          </div>
          <div className="text-sm font-semibold text-neutral-500">
            Total: <span className="text-amber-600">${totalRevenue.toLocaleString()}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-5 gap-3 mb-6">
          {[['all', 'All'], ...Object.entries(statusConfig).map(([k, v]) => [k, v.label])].map(([key, label]) => (
            <button key={key} onClick={() => setStatusFilter(key)}
              className={`py-2 px-3 rounded-xl text-xs font-semibold transition-colors ${statusFilter === key ? 'bg-amber-600 text-white' : 'bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400 hover:border-amber-400'}`}>
              {label} ({key === 'all' ? mockOrders.length : mockOrders.filter(o => o.status === key).length})
            </button>
          ))}
        </div>

        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search by order ID..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-sm text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500" />
        </div>

        <div className="space-y-3">
          {filtered.map((order, i) => {
            const st = statusConfig[order.status];
            const StatusIcon = st.icon;
            return (
              <motion.div key={order.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.04 }}
                className="bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-5">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full ${st.bg}`}>
                      <StatusIcon className={`w-3.5 h-3.5 ${st.color}`} />
                      <span className={`text-xs font-bold ${st.color}`}>{st.label}</span>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-neutral-900 dark:text-white">{order.id}</p>
                      <p className="text-xs text-neutral-400">{order.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="text-base font-bold text-neutral-900 dark:text-white">${order.total.toLocaleString()}</p>
                      <p className="text-xs text-neutral-400">{order.items.length} item{order.items.length !== 1 ? 's' : ''}</p>
                    </div>
                    <select defaultValue={order.status} className="text-xs px-3 py-2 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 focus:outline-none focus:ring-2 focus:ring-amber-500">
                      {Object.entries(statusConfig).map(([k, v]) => <option key={k} value={k}>{v.label}</option>)}
                    </select>
                  </div>
                </div>
                <div className="flex gap-3 overflow-x-auto">
                  {order.items.map(item => (
                    <div key={item.productId} className="flex items-center gap-2 flex-shrink-0">
                      <img src={item.image} alt={item.name} className="w-10 h-10 rounded-lg object-cover" />
                      <div>
                        <p className="text-xs font-semibold text-neutral-800 dark:text-neutral-200 max-w-28 line-clamp-1">{item.name}</p>
                        <p className="text-xs text-neutral-400">×{item.quantity} · ${item.price.toLocaleString()}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-neutral-400 mt-2">📍 {order.shippingAddress}</p>
                {order.trackingNumber && <p className="text-xs text-purple-500 mt-1 font-mono">🚚 {order.trackingNumber}</p>}
              </motion.div>
            );
          })}
          {filtered.length === 0 && (
            <div className="text-center py-12 bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 text-neutral-400">
              <ShoppingBag className="w-8 h-8 mx-auto mb-2 opacity-40" />
              <p className="text-sm">No orders match your filters.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
