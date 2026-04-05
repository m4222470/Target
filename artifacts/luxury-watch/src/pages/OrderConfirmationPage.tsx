import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { CheckCircle, Package, Mail, ArrowRight } from 'lucide-react';

export default function OrderConfirmationPage() {
  const orderId = `ORD-2025-${String(Math.floor(Math.random() * 900) + 100)}`;

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 flex items-center justify-center px-4 py-16">
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="max-w-lg w-full text-center">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2, type: 'spring', damping: 12 }}
          className="w-24 h-24 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-12 h-12 text-green-600" />
        </motion.div>

        <h1 className="text-4xl font-bold font-serif text-neutral-900 dark:text-white mb-3">Order Confirmed!</h1>
        <p className="text-neutral-500 dark:text-neutral-400 mb-2">Thank you for your purchase. Your order has been received and is being prepared.</p>
        <p className="text-sm font-mono font-bold text-amber-600 mb-8">{orderId}</p>

        <div className="bg-white dark:bg-neutral-900 rounded-3xl border border-neutral-200 dark:border-neutral-800 p-6 mb-8 space-y-4">
          <div className="flex items-center gap-4 text-left">
            <div className="w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center flex-shrink-0">
              <Mail className="w-5 h-5 text-amber-600" />
            </div>
            <div>
              <p className="font-semibold text-sm text-neutral-900 dark:text-white">Confirmation Email Sent</p>
              <p className="text-xs text-neutral-500">Check your inbox for order details and receipt.</p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-left">
            <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center flex-shrink-0">
              <Package className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <p className="font-semibold text-sm text-neutral-900 dark:text-white">Estimated Delivery: 3–5 Business Days</p>
              <p className="text-xs text-neutral-500">Complimentary express shipping worldwide. Tracking will be emailed to you.</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/account/orders">
            <button className="flex-1 py-3.5 border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 font-semibold rounded-2xl hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors text-sm">
              View My Orders
            </button>
          </Link>
          <Link href="/shop">
            <button className="flex-1 py-3.5 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-2xl transition-colors flex items-center justify-center gap-2 text-sm">
              Continue Shopping <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
