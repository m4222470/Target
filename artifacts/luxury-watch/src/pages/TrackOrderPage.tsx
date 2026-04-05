import { useState } from 'react';
import { Search, Package, Truck, CheckCircle, Clock, MapPin } from 'lucide-react';
import { mockOrders } from '../data/mockData';
import useAuthStore from '../store/authStore';

const statusSteps = ['Processing', 'Shipped', 'In Transit', 'Out for Delivery', 'Delivered'];

function getStepIndex(status: string) {
  const map: Record<string, number> = { pending: 0, processing: 0, shipped: 1, delivered: 4 };
  return map[status] ?? 2;
}

export default function TrackOrderPage() {
  const { user } = useAuthStore();
  const [query, setQuery] = useState('');
  const [result, setResult] = useState<typeof mockOrders[0] | null | 'not_found'>(null);

  function handleSearch() {
    const found = mockOrders.find(o => o.id.toLowerCase() === query.toLowerCase().trim() || (o.trackingNumber && o.trackingNumber.toLowerCase() === query.toLowerCase().trim()));
    setResult(found || 'not_found');
  }

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 py-16">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.4em] text-amber-600 dark:text-amber-400 uppercase mb-3">After-Sales</p>
          <h1 className="text-4xl font-bold font-serif text-neutral-900 dark:text-white">Track Your Order</h1>
          <p className="text-neutral-500 dark:text-neutral-400 mt-3">Enter your order number or tracking number below.</p>
        </div>

        {user && (
          <div className="bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-900/40 rounded-xl p-4 mb-8 flex items-center gap-3 text-sm">
            <Clock className="w-4 h-4 text-amber-600 flex-shrink-0" />
            <span className="text-amber-800 dark:text-amber-300">You can also view all your orders from your <a href="/account/orders" className="font-bold underline">account page</a>.</span>
          </div>
        )}

        <div className="bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 mb-8">
          <label className="block text-xs font-bold text-neutral-500 uppercase tracking-wider mb-2">Order / Tracking Number</label>
          <div className="flex gap-3">
            <input
              value={query} onChange={e => setQuery(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSearch()}
              placeholder="e.g. ORD-2024-001 or AU1234567890"
              className="flex-1 px-4 py-3 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-sm text-neutral-900 dark:text-white focus:ring-2 focus:ring-amber-500 outline-none transition"
            />
            <button onClick={handleSearch} className="px-5 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-xl font-bold transition-colors flex items-center gap-2 text-sm">
              <Search className="w-4 h-4" /> Track
            </button>
          </div>
          {!user && (
            <p className="text-xs text-neutral-400 mt-3">Try order number: <button onClick={() => { setQuery('ORD-2024-001'); }} className="text-amber-600 font-semibold">ORD-2024-001</button></p>
          )}
        </div>

        {result === 'not_found' && (
          <div className="bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-900/40 rounded-xl p-5 text-center">
            <p className="font-semibold text-red-700 dark:text-red-400">Order Not Found</p>
            <p className="text-sm text-red-600 dark:text-red-500 mt-1">Please check the order number and try again, or <a href="/contact" className="underline font-semibold">contact us</a>.</p>
          </div>
        )}

        {result && result !== 'not_found' && (
          <div className="bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6">
            <div className="flex items-start justify-between mb-6 pb-6 border-b border-neutral-100 dark:border-neutral-800">
              <div>
                <p className="text-xs text-neutral-400 mb-1">Order Number</p>
                <p className="font-bold text-neutral-900 dark:text-white">{result.id}</p>
                {result.trackingNumber && <p className="text-xs text-neutral-400 mt-1">Tracking: <span className="text-amber-600 font-semibold">{result.trackingNumber}</span></p>}
              </div>
              <span className={`px-3 py-1.5 rounded-full text-xs font-bold capitalize ${result.status === 'delivered' ? 'bg-green-50 dark:bg-green-900/20 text-green-600' : result.status === 'shipped' ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600' : 'bg-amber-50 dark:bg-amber-900/20 text-amber-600'}`}>{result.status}</span>
            </div>

            <div className="mb-6">
              <div className="flex items-center gap-0 mb-2">
                {statusSteps.map((step, i) => {
                  const current = getStepIndex(result.status);
                  return (
                    <div key={step} className="flex items-center flex-1">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold ${i <= current ? 'bg-amber-500 text-white' : 'bg-neutral-200 dark:bg-neutral-700 text-neutral-400'}`}>{i <= current ? '✓' : i + 1}</div>
                      {i < statusSteps.length - 1 && <div className={`h-0.5 flex-1 ${i < current ? 'bg-amber-500' : 'bg-neutral-200 dark:bg-neutral-700'}`} />}
                    </div>
                  );
                })}
              </div>
              <div className="flex justify-between">
                {statusSteps.map((step, i) => <span key={step} className={`text-[9px] font-semibold ${i <= getStepIndex(result.status) ? 'text-amber-600' : 'text-neutral-400'}`}>{step}</span>)}
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400 mb-5">
              <MapPin className="w-4 h-4 text-amber-500" />
              <span>{result.shippingAddress}</span>
            </div>

            <div className="space-y-3">
              {result.items.map(item => (
                <div key={item.productId} className="flex items-center gap-3 p-3 bg-neutral-50 dark:bg-neutral-800 rounded-xl">
                  <img src={item.image} alt={item.name} className="w-12 h-12 rounded-lg object-cover" />
                  <div className="flex-1">
                    <p className="font-semibold text-sm text-neutral-900 dark:text-white">{item.name}</p>
                    <p className="text-xs text-neutral-400">Qty: {item.quantity}</p>
                  </div>
                  <p className="font-bold text-sm text-amber-600">${item.price.toLocaleString()}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
