import { useState } from 'react';
import { Ruler, Watch, Gem } from 'lucide-react';

const watchSizes = [
  { case: '32–34mm', wrist: '5.5–6.5"', desc: 'Classic feminine proportion. Elegant and understated.' },
  { case: '36–38mm', wrist: '6–7"', desc: 'Versatile size, suits most wrists. Our most popular range.' },
  { case: '40–42mm', wrist: '6.5–7.5"', desc: 'Contemporary and bold. The modern standard for men.' },
  { case: '44mm+', wrist: '7.5"+', desc: 'A statement piece. Best on larger wrists.' },
];

const ringSizes = [
  { us: '5', uk: 'J', eu: '49', diameter: '15.7mm' },
  { us: '6', uk: 'L', eu: '51', diameter: '16.5mm' },
  { us: '7', uk: 'N', eu: '54', diameter: '17.3mm' },
  { us: '8', uk: 'P', eu: '57', diameter: '18.1mm' },
  { us: '9', uk: 'R', eu: '59', diameter: '18.9mm' },
  { us: '10', uk: 'T', eu: '62', diameter: '19.8mm' },
  { us: '11', uk: 'V', eu: '64', diameter: '20.6mm' },
  { us: '12', uk: 'X', eu: '67', diameter: '21.4mm' },
];

export default function SizeGuidePage() {
  const [activeTab, setActiveTab] = useState<'watches' | 'rings'>('watches');

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.4em] text-amber-600 dark:text-amber-400 uppercase mb-3">Fit Guide</p>
          <h1 className="text-4xl font-bold font-serif text-neutral-900 dark:text-white">Size Guide</h1>
          <p className="text-neutral-500 dark:text-neutral-400 mt-3">Find your perfect fit before you buy.</p>
        </div>

        <div className="flex bg-neutral-100 dark:bg-neutral-800 rounded-xl p-1 mb-10 max-w-xs mx-auto">
          {[{ key: 'watches', label: 'Watches', icon: Watch }, { key: 'rings', label: 'Rings', icon: Gem }].map(t => (
            <button key={t.key} onClick={() => setActiveTab(t.key as any)}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold transition-all ${activeTab === t.key ? 'bg-white dark:bg-neutral-700 text-amber-600 shadow-sm' : 'text-neutral-500'}`}>
              <t.icon className="w-4 h-4" /> {t.label}
            </button>
          ))}
        </div>

        {activeTab === 'watches' && (
          <div>
            <div className="bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-8 mb-8">
              <h2 className="font-bold text-neutral-900 dark:text-white text-lg mb-2">How to Measure Your Wrist</h2>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed mb-5">Wrap a flexible tape measure or a strip of paper around your wrist just above the wrist bone. Note the measurement. If using paper, mark where the end meets the strip and measure the length with a ruler.</p>
              <div className="flex items-center gap-3 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-xl border border-amber-100 dark:border-amber-900/30">
                <Ruler className="w-5 h-5 text-amber-600 flex-shrink-0" />
                <p className="text-sm text-amber-800 dark:text-amber-300">For a comfortable fit, add 0.5–1cm to your wrist circumference to find your strap size.</p>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800">
              <table className="w-full">
                <thead className="bg-neutral-100 dark:bg-neutral-800">
                  <tr>{['Case Diameter', 'Wrist Size', 'Fit Style'].map(h => <th key={h} className="text-left text-xs font-bold text-neutral-500 uppercase tracking-wider px-5 py-3">{h}</th>)}</tr>
                </thead>
                <tbody className="bg-white dark:bg-neutral-900 divide-y divide-neutral-100 dark:divide-neutral-800">
                  {watchSizes.map(row => (
                    <tr key={row.case} className="hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors">
                      <td className="px-5 py-4 font-bold text-sm text-neutral-900 dark:text-white">{row.case}</td>
                      <td className="px-5 py-4 text-sm text-neutral-600 dark:text-neutral-400">{row.wrist}</td>
                      <td className="px-5 py-4 text-sm text-neutral-500 dark:text-neutral-400">{row.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'rings' && (
          <div>
            <div className="bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-8 mb-8">
              <h2 className="font-bold text-neutral-900 dark:text-white text-lg mb-2">How to Find Your Ring Size</h2>
              <ol className="text-sm text-neutral-600 dark:text-neutral-400 space-y-2 leading-relaxed">
                {['Wrap a thin strip of paper around the base of the finger you intend to wear the ring on.', 'Mark where the paper overlaps and measure the length in millimetres.', 'Divide by π (3.14159) to get the inner diameter.', 'Find your diameter in the table below to identify your size.'].map((s, i) => (
                  <li key={i} className="flex gap-3"><span className="font-bold text-amber-600 flex-shrink-0">{i + 1}.</span>{s}</li>
                ))}
              </ol>
            </div>
            <div className="overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800">
              <table className="w-full">
                <thead className="bg-neutral-100 dark:bg-neutral-800">
                  <tr>{['US Size', 'UK Size', 'EU Size', 'Inner Diameter'].map(h => <th key={h} className="text-left text-xs font-bold text-neutral-500 uppercase tracking-wider px-5 py-3">{h}</th>)}</tr>
                </thead>
                <tbody className="bg-white dark:bg-neutral-900 divide-y divide-neutral-100 dark:divide-neutral-800">
                  {ringSizes.map(row => (
                    <tr key={row.us} className="hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors">
                      <td className="px-5 py-3 font-bold text-sm text-neutral-900 dark:text-white">{row.us}</td>
                      <td className="px-5 py-3 text-sm text-neutral-600 dark:text-neutral-400">{row.uk}</td>
                      <td className="px-5 py-3 text-sm text-neutral-600 dark:text-neutral-400">{row.eu}</td>
                      <td className="px-5 py-3 text-sm text-amber-600 font-semibold">{row.diameter}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-neutral-400 mt-4 text-center">Not sure of your size? We offer complimentary ring sizers — contact our concierge to request one.</p>
          </div>
        )}
      </div>
    </div>
  );
}
