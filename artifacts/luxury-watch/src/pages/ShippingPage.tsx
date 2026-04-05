import { Truck, RefreshCw, Shield, Globe } from 'lucide-react';

export default function ShippingPage() {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.4em] text-amber-600 dark:text-amber-400 uppercase mb-3">Policies</p>
          <h1 className="text-4xl font-bold font-serif text-neutral-900 dark:text-white">Shipping & Returns</h1>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 mb-12">
          {[
            { icon: Truck, title: 'Free Worldwide Shipping', desc: 'Complimentary express delivery on all orders, to all 58 countries we serve.' },
            { icon: Globe, title: 'Ships in 1–2 Business Days', desc: 'Orders placed before 2PM CET Monday–Friday are dispatched same day.' },
            { icon: RefreshCw, title: '60-Day Returns', desc: 'Changed your mind? Return any unworn item within 60 days, no questions asked.' },
            { icon: Shield, title: 'Fully Insured Transit', desc: 'All shipments are fully insured against loss or damage up to the full purchase value.' },
          ].map(item => (
            <div key={item.title} className="bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 flex gap-4">
              <div className="w-11 h-11 rounded-xl bg-amber-50 dark:bg-amber-900/20 flex items-center justify-center flex-shrink-0">
                <item.icon className="w-5 h-5 text-amber-600" />
              </div>
              <div>
                <h3 className="font-bold text-sm text-neutral-900 dark:text-white">{item.title}</h3>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {[
          { title: 'Shipping Methods & Timeframes', content: [
            ['Express (Standard)', '3–5 business days', 'Free'],
            ['Priority Express', '1–2 business days', '$35'],
            ['White Glove Delivery (select cities)', 'By appointment', '$150'],
          ], type: 'table' },
          { title: 'How to Return an Item', content: `To initiate a return:\n\n1. Email concierge@aurum-co.com with your order number and reason for return.\n2. We will arrange a complimentary courier collection from your address within 2 business days.\n3. Once we receive the item in original condition, your refund will be processed within 5 business days.\n\nAll items must be returned in their original, unworn/unused condition, with all packaging, documentation, and certificates intact. Items that show signs of wear, alteration, or damage will not be accepted for return.`, type: 'text' },
          { title: 'Non-returnable Items', content: 'The following items cannot be returned:\n\n• Items that have been engraved or personalised\n• Bespoke commissions and made-to-order pieces\n• Items with hygiene concerns (certain fragrance testers)\n\nIf you have any questions about whether your item is eligible for return, please contact us before shipping.', type: 'text' },
        ].map(section => (
          <div key={section.title} className="bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-8 mb-6">
            <h2 className="text-xl font-bold font-serif text-neutral-900 dark:text-white mb-5">{section.title}</h2>
            {section.type === 'table' ? (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead><tr className="border-b border-neutral-100 dark:border-neutral-800">{['Method', 'Timeframe', 'Cost'].map(h => <th key={h} className="text-left py-2 pr-6 text-xs font-bold text-neutral-500 uppercase tracking-wider">{h}</th>)}</tr></thead>
                  <tbody className="divide-y divide-neutral-50 dark:divide-neutral-800">
                    {(section.content as string[][]).map(row => (
                      <tr key={row[0]}>
                        {row.map((cell, i) => <td key={i} className={`py-3 pr-6 ${i === 0 ? 'font-medium text-neutral-900 dark:text-white' : 'text-neutral-500 dark:text-neutral-400'}`}>{cell}</td>)}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed whitespace-pre-line">{section.content as string}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
