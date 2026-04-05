import { Shield, Clock, Wrench, Award } from 'lucide-react';

export default function WarrantyPage() {
  const sections = [
    { icon: Shield, title: 'Timepieces — Lifetime Warranty', desc: 'Every AURUM & CO. watch is covered by our lifetime warranty against manufacturing defects in materials and workmanship. This warranty is transferable and is registered to the original purchase.', items: ['Movement failure due to manufacturing defect', 'Case or crown defects arising from production', 'Crystal delamination or factory edge defects', 'Strap stitching failure within 2 years of purchase'] },
    { icon: Award, title: 'Jewelry — 5-Year Warranty', desc: 'Our fine jewelry carries a 5-year warranty covering prong integrity, setting security, and metal defects.', items: ['Stone loss due to prong failure', 'Clasp mechanism failure', 'Gilding loss from manufacturing defects', 'Metal fatigue at joins and hinges'] },
    { icon: Clock, title: 'Leather Goods — 3-Year Warranty', desc: 'Our leather goods are warranted against manufacturing defects in stitching, hardware, and materials for 3 years.', items: ['Stitching failure', 'Hardware malfunction (zippers, clasps, locks)', 'Lining detachment', 'Leather delamination at factory joins'] },
  ];

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.4em] text-amber-600 dark:text-amber-400 uppercase mb-3">After-Sales</p>
          <h1 className="text-4xl font-bold font-serif text-neutral-900 dark:text-white">Warranty Information</h1>
          <p className="text-neutral-500 dark:text-neutral-400 mt-3 max-w-xl mx-auto">We stand behind every piece we create. Our warranty terms reflect our commitment to uncompromising quality.</p>
        </div>

        <div className="space-y-6 mb-10">
          {sections.map(s => (
            <div key={s.title} className="bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-8">
              <div className="flex items-start gap-4 mb-5">
                <div className="w-12 h-12 rounded-xl bg-amber-50 dark:bg-amber-900/20 flex items-center justify-center flex-shrink-0">
                  <s.icon className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-neutral-900 dark:text-white">{s.title}</h2>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1 leading-relaxed">{s.desc}</p>
                </div>
              </div>
              <div>
                <p className="text-xs font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-3">What's Covered</p>
                <ul className="space-y-2">
                  {s.items.map(item => <li key={item} className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400"><span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0" />{item}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-8">
          <div className="flex items-center gap-3 mb-5">
            <Wrench className="w-5 h-5 text-amber-600" />
            <h2 className="text-lg font-bold text-neutral-900 dark:text-white">What is NOT Covered</h2>
          </div>
          <ul className="space-y-2">
            {['Normal wear and tear (scratches, patina, aging)', 'Accidental damage or misuse', 'Water damage beyond stated resistance rating', 'Battery replacement', 'Strap replacement after 2 years', 'Damage from unauthorized repair or modification', 'Loss or theft'].map(item => (
              <li key={item} className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-300 flex-shrink-0" />{item}
              </li>
            ))}
          </ul>
          <div className="mt-6 pt-6 border-t border-neutral-100 dark:border-neutral-800 text-sm text-neutral-600 dark:text-neutral-400">
            <strong className="text-neutral-900 dark:text-white">To claim warranty service:</strong> Contact us at <span className="text-amber-600">service@aurum-co.com</span> with your order number and a description of the issue. We will arrange complimentary collection and repair.
          </div>
        </div>
      </div>
    </div>
  );
}
