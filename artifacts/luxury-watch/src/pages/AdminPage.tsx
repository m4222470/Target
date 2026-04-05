import { Link, useLocation } from 'wouter';
import { motion } from 'framer-motion';
import {
  LayoutDashboard, Package, ShoppingBag, Users, TrendingUp, DollarSign,
  Eye, Edit, BarChart3, ArrowUpRight, ArrowDownRight, Clock
} from 'lucide-react';
import useAuthStore from '../store/authStore';
import { products, mockOrders, mockUsers } from '../data/mockData';

const statusColors: Record<string, string> = {
  pending: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
  processing: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
  shipped: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
  delivered: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
  cancelled: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
};

export default function AdminPage() {
  const [, navigate] = useLocation();
  const { user, isAuthenticated } = useAuthStore();

  if (!isAuthenticated || user?.role !== 'admin') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-neutral-50 dark:bg-neutral-950">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">Access Denied</h2>
          <p className="text-neutral-500 mb-6">Admin access required. Please sign in with admin credentials.</p>
          <Link href="/login"><button className="px-6 py-3 bg-amber-600 text-white rounded-xl font-semibold hover:bg-amber-700 transition-colors">Sign In</button></Link>
        </div>
      </div>
    );
  }

  const totalRevenue = mockOrders.reduce((s, o) => s + o.total, 0);
  const stats = [
    { label: 'Total Revenue', value: `$${totalRevenue.toLocaleString()}`, icon: DollarSign, change: '+12.5%', up: true, color: 'text-green-600', bg: 'bg-green-50 dark:bg-green-900/20' },
    { label: 'Total Orders', value: mockOrders.length, icon: ShoppingBag, change: '+8.2%', up: true, color: 'text-blue-600', bg: 'bg-blue-50 dark:bg-blue-900/20' },
    { label: 'Products', value: products.length, icon: Package, change: '+3 new', up: true, color: 'text-purple-600', bg: 'bg-purple-50 dark:bg-purple-900/20' },
    { label: 'Customers', value: mockUsers.filter(u => u.role === 'user').length, icon: Users, change: '+24 this month', up: true, color: 'text-amber-600', bg: 'bg-amber-50 dark:bg-amber-900/20' },
  ];

  const topProducts = [...products].sort((a, b) => b.reviews - a.reviews).slice(0, 5);

  return (
    <div className="min-h-screen bg-neutral-100 dark:bg-neutral-950">
      <div className="bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <BarChart3 className="w-6 h-6 text-amber-600" />
            <div>
              <h1 className="text-lg font-bold text-neutral-900 dark:text-white">Admin Dashboard</h1>
              <p className="text-xs text-neutral-500">Welcome back, {user.name.split(' ')[0]}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/"><button className="text-sm text-neutral-500 hover:text-amber-600 transition-colors">View Store</button></Link>
            <Link href="/admin/products"><button className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white text-sm font-semibold rounded-xl transition-colors">Manage Products</button></Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <motion.div key={stat.label} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}
              className="bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-5">
              <div className={`w-10 h-10 rounded-xl ${stat.bg} flex items-center justify-center mb-3`}>
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
              </div>
              <div className="text-2xl font-bold text-neutral-900 dark:text-white">{stat.value}</div>
              <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">{stat.label}</div>
              <div className={`flex items-center gap-1 mt-2 text-xs font-semibold ${stat.up ? 'text-green-600' : 'text-red-500'}`}>
                {stat.up ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                {stat.change}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-base font-bold text-neutral-900 dark:text-white">Recent Orders</h2>
              <Link href="/admin/orders"><span className="text-sm text-amber-600 cursor-pointer hover:text-amber-700 font-semibold">View All</span></Link>
            </div>
            <div className="space-y-3">
              {mockOrders.slice(0, 5).map(order => (
                <div key={order.id} className="flex items-center justify-between p-3 bg-neutral-50 dark:bg-neutral-800 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                      <ShoppingBag className="w-4 h-4 text-amber-600" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-neutral-900 dark:text-white">{order.id}</p>
                      <p className="text-xs text-neutral-400">{order.date}</p>
                    </div>
                  </div>
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold capitalize ${statusColors[order.status]}`}>{order.status}</span>
                  <span className="text-sm font-bold text-neutral-900 dark:text-white">${order.total.toLocaleString()}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-base font-bold text-neutral-900 dark:text-white">Top Products</h2>
              <Link href="/admin/products"><span className="text-sm text-amber-600 cursor-pointer hover:text-amber-700 font-semibold">Manage</span></Link>
            </div>
            <div className="space-y-3">
              {topProducts.map((p, i) => (
                <div key={p.id} className="flex items-center gap-3">
                  <span className="text-xs font-bold text-neutral-400 w-4">#{i + 1}</span>
                  <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0">
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold text-neutral-900 dark:text-white truncate">{p.name}</p>
                    <p className="text-xs text-neutral-400">{p.reviews} reviews</p>
                  </div>
                  <span className="text-xs font-bold text-neutral-900 dark:text-white">${p.price.toLocaleString()}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {[
            { href: '/admin/products', icon: Package, label: 'Manage Products', sub: `${products.length} total`, color: 'text-purple-600', bg: 'bg-purple-50 dark:bg-purple-900/20' },
            { href: '/admin/orders', icon: ShoppingBag, label: 'Manage Orders', sub: `${mockOrders.length} total`, color: 'text-blue-600', bg: 'bg-blue-50 dark:bg-blue-900/20' },
            { href: '/shop', icon: Eye, label: 'View Store', sub: 'Customer view', color: 'text-amber-600', bg: 'bg-amber-50 dark:bg-amber-900/20' },
          ].map(item => (
            <Link key={item.href} href={item.href}>
              <div className="bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-5 flex items-center gap-4 hover:border-amber-300 dark:hover:border-amber-700 transition-colors cursor-pointer group">
                <div className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center`}>
                  <item.icon className={`w-6 h-6 ${item.color}`} />
                </div>
                <div>
                  <p className="font-bold text-neutral-900 dark:text-white text-sm group-hover:text-amber-600 transition-colors">{item.label}</p>
                  <p className="text-xs text-neutral-400">{item.sub}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
