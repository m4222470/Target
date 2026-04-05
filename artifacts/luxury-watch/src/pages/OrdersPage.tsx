import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { Package, Truck, CheckCircle, Clock, XCircle, ChevronRight } from 'lucide-react';
import useAuthStore from '../store/authStore';
import { mockOrders } from '../data/mockData';

const statusConfig = {
  pending: { icon: Clock, color: 'text-yellow-600', bg: 'bg-yellow-50 dark:bg-yellow-900/20', label: 'Pending' },
  processing: { icon: Package, color: 'text-blue-600', bg: 'bg-blue-50 dark:bg-blue-900/20', label: 'Processing' },
  shipped: { icon: Truck, color: 'text-purple-600', bg: 'bg-purple-50 dark:bg-purple-900/20', label: 'Shipped' },
  delivered: { icon: CheckCircle, color: 'text-green-600', bg: 'bg-green-50 dark:bg-green-900/20', label: 'Delivered' },
  cancelled: { icon: XCircle, color: 'text-red-500', bg: 'bg-red-50 dark:bg-red-900/20', label: 'Cancelled' },
};

export default function OrdersPage() {
  const { user, isAuthenticated } = useAuthStore();

  if (!isAuthenticated || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">Please Sign In</h2>
          <Link href="/login"><button className="px-6 py-3 bg-amber-600 text-white rounded-xl font-semibold">Go to Login</button></Link>
        </div>
      </div>
    );
  }

  const userOrders = mockOrders.filter(o => o.userId === user.id);

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-8">
          <Link href="/account"><span className="text-sm text-neutral-500 hover:text-amber-600 cursor-pointer">Account</span></Link>
          <span className="text-neutral-300">/</span>
          <h1 className="text-2xl font-bold text-neutral-900 dark:text-white font-serif">My Orders</h1>
        </div>

        {userOrders.length === 0 ? (
          <div className="bg-white dark:bg-neutral-900 rounded-3xl border border-neutral-200 dark:border-neutral-800 p-16 text-center">
            <Package className="w-12 h-12 text-neutral-300 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-neutral-700 dark:text-neutral-300">No orders yet</h3>
            <p className="text-sm text-neutral-400 mt-2 mb-6">Discover our collections and find something exceptional.</p>
            <Link href="/shop"><button className="px-6 py-3 bg-amber-600 text-white rounded-xl font-semibold hover:bg-amber-700 transition-colors">Browse Shop</button></Link>
          </div>
        ) : (
          <div className="space-y-4">
            {userOrders.map((order, i) => {
              const st = statusConfig[order.status];
              const StatusIcon = st.icon;
              return (
                <motion.div key={order.id} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
                  className="bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden">
                  <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-100 dark:border-neutral-800">
                    <div className="flex items-center gap-4">
                      <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full ${st.bg}`}>
                        <StatusIcon className={`w-3.5 h-3.5 ${st.color}`} />
                        <span className={`text-xs font-bold ${st.color}`}>{st.label}</span>
                      </div>
                      <div>
                        <p className="text-sm font-bold text-neutral-900 dark:text-white">{order.id}</p>
                        <p className="text-xs text-neutral-500">{order.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-base font-bold text-neutral-900 dark:text-white">${order.total.toLocaleString()}</p>
                      <p className="text-xs text-neutral-400">{order.items.length} item{order.items.length !== 1 ? 's' : ''}</p>
                    </div>
                  </div>
                  <div className="px-6 py-4">
                    <div className="flex gap-3 overflow-x-auto pb-2">
                      {order.items.map(item => (
                        <div key={item.productId} className="flex items-center gap-3 flex-shrink-0">
                          <div className="w-12 h-12 rounded-xl overflow-hidden bg-neutral-100 dark:bg-neutral-800 flex-shrink-0">
                            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                          </div>
                          <div>
                            <p className="text-xs font-semibold text-neutral-900 dark:text-white line-clamp-1 max-w-32">{item.name}</p>
                            <p className="text-xs text-neutral-400">Qty: {item.quantity} · ${item.price.toLocaleString()}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    {order.trackingNumber && (
                      <div className="mt-3 pt-3 border-t border-neutral-100 dark:border-neutral-800 flex items-center gap-2 text-xs text-neutral-500">
                        <Truck className="w-3.5 h-3.5 text-purple-500" />
                        <span>Tracking: <span className="font-mono font-semibold text-neutral-700 dark:text-neutral-300">{order.trackingNumber}</span></span>
                      </div>
                    )}
                    <p className="mt-2 text-xs text-neutral-400">Ship to: {order.shippingAddress}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
