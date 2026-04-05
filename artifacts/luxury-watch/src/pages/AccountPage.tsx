import { Link, useLocation } from 'wouter';
import { motion } from 'framer-motion';
import { User, ShoppingBag, Heart, Settings, LogOut, Package, Clock, TrendingUp } from 'lucide-react';
import useAuthStore from '../store/authStore';
import { mockOrders } from '../data/mockData';

export default function AccountPage() {
  const [, navigate] = useLocation();
  const { user, isAuthenticated, logout } = useAuthStore();

  if (!isAuthenticated || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-neutral-50 dark:bg-neutral-950">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">Please Sign In</h2>
          <Link href="/login"><button className="px-6 py-3 bg-amber-600 text-white rounded-xl font-semibold hover:bg-amber-700 transition-colors">Go to Login</button></Link>
        </div>
      </div>
    );
  }

  const userOrders = mockOrders.filter(o => o.userId === user.id);
  const recentOrders = userOrders.slice(0, 3);

  const statusColors: Record<string, string> = {
    pending: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
    processing: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
    shipped: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
    delivered: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
    cancelled: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
  };

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-8">
          <aside className="lg:col-span-1">
            <div className="bg-white dark:bg-neutral-900 rounded-3xl border border-neutral-200 dark:border-neutral-800 p-6 text-center mb-4">
              <div className="w-16 h-16 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl font-bold text-amber-600">{user.name[0]}</span>
              </div>
              <h3 className="font-bold text-neutral-900 dark:text-white">{user.name}</h3>
              <p className="text-xs text-neutral-500 mt-0.5">{user.email}</p>
              {user.role === 'admin' && (
                <span className="inline-block mt-2 px-2 py-0.5 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 text-xs font-bold rounded-full">Admin</span>
              )}
            </div>
            <nav className="bg-white dark:bg-neutral-900 rounded-3xl border border-neutral-200 dark:border-neutral-800 overflow-hidden">
              {[
                { href: '/account', label: 'My Profile', icon: User },
                { href: '/account/orders', label: 'My Orders', icon: ShoppingBag },
                { href: '/wishlist', label: 'Wishlist', icon: Heart },
              ].map(item => (
                <Link key={item.href} href={item.href}>
                  <div className="flex items-center gap-3 px-5 py-3.5 hover:bg-amber-50 dark:hover:bg-neutral-800 transition-colors cursor-pointer border-b border-neutral-100 dark:border-neutral-800 last:border-0">
                    <item.icon className="w-4 h-4 text-amber-600" />
                    <span className="text-sm font-medium text-neutral-700 dark:text-neutral-200">{item.label}</span>
                  </div>
                </Link>
              ))}
              {user.role === 'admin' && (
                <Link href="/admin">
                  <div className="flex items-center gap-3 px-5 py-3.5 hover:bg-amber-50 dark:hover:bg-neutral-800 transition-colors cursor-pointer border-b border-neutral-100 dark:border-neutral-800">
                    <Settings className="w-4 h-4 text-amber-600" />
                    <span className="text-sm font-medium text-amber-600">Admin Panel</span>
                  </div>
                </Link>
              )}
              <button onClick={() => { logout(); navigate('/'); }} className="flex items-center gap-3 w-full px-5 py-3.5 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors text-sm font-medium text-red-500">
                <LogOut className="w-4 h-4" /> Sign Out
              </button>
            </nav>
          </aside>

          <div className="lg:col-span-3 space-y-6">
            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: Package, value: userOrders.length, label: 'Total Orders', color: 'text-blue-600' },
                { icon: TrendingUp, value: `$${userOrders.reduce((s, o) => s + o.total, 0).toLocaleString()}`, label: 'Total Spent', color: 'text-amber-600' },
                { icon: Clock, value: userOrders.filter(o => o.status !== 'delivered' && o.status !== 'cancelled').length, label: 'Active Orders', color: 'text-purple-600' },
              ].map(stat => (
                <motion.div key={stat.label} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                  className="bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-5 text-center">
                  <stat.icon className={`w-6 h-6 ${stat.color} mx-auto mb-2`} />
                  <div className="text-2xl font-bold text-neutral-900 dark:text-white">{stat.value}</div>
                  <div className="text-xs text-neutral-500 mt-0.5">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <div className="bg-white dark:bg-neutral-900 rounded-3xl border border-neutral-200 dark:border-neutral-800 p-6">
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-lg font-bold text-neutral-900 dark:text-white">Recent Orders</h2>
                <Link href="/account/orders">
                  <span className="text-sm text-amber-600 font-semibold cursor-pointer hover:text-amber-700">View All</span>
                </Link>
              </div>
              <div className="space-y-3">
                {recentOrders.length === 0 ? (
                  <p className="text-sm text-neutral-400 text-center py-6">No orders yet.</p>
                ) : recentOrders.map(order => (
                  <div key={order.id} className="flex items-center justify-between p-4 bg-neutral-50 dark:bg-neutral-800 rounded-2xl">
                    <div>
                      <p className="text-sm font-bold text-neutral-900 dark:text-white">{order.id}</p>
                      <p className="text-xs text-neutral-500 mt-0.5">{order.date} · {order.items.length} item{order.items.length !== 1 ? 's' : ''}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-semibold capitalize ${statusColors[order.status]}`}>{order.status}</span>
                      <span className="text-sm font-bold text-neutral-900 dark:text-white">${order.total.toLocaleString()}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-neutral-900 rounded-3xl border border-neutral-200 dark:border-neutral-800 p-6">
              <h2 className="text-lg font-bold text-neutral-900 dark:text-white mb-5">Profile Information</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { label: 'Full Name', value: user.name },
                  { label: 'Email Address', value: user.email },
                  { label: 'Member Since', value: new Date(user.joinDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long' }) },
                  { label: 'Account Type', value: user.role === 'admin' ? 'Administrator' : 'Member' },
                ].map(field => (
                  <div key={field.label} className="p-4 bg-neutral-50 dark:bg-neutral-800 rounded-xl">
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-1">{field.label}</p>
                    <p className="font-semibold text-neutral-900 dark:text-white text-sm">{field.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
