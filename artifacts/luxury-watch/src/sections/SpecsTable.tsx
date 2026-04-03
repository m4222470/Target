import { motion } from 'framer-motion';

const specs = [
  { category: 'Case', rows: [
    ['Diameter', '42 mm'],
    ['Thickness', '11.2 mm'],
    ['Material', '316L Stainless Steel / PVD Gold'],
    ['Water Resistance', '100 m (10 ATM)'],
    ['Crystal', 'Double-domed AR Sapphire, 0.6mm'],
    ['Crown', 'Screw-down, signed'],
  ]},
  { category: 'Movement', rows: [
    ['Calibre', 'AURUM Cal. 7040 (Swiss Made)'],
    ['Type', 'Automatic, 25 jewels'],
    ['Frequency', '28,800 vph (4 Hz)'],
    ['Power Reserve', '72 hours'],
    ['Functions', 'Hours, Minutes, Seconds, Date'],
    ['COSC Certified', 'Yes (±2 sec/day)'],
  ]},
  { category: 'Strap & Clasp', rows: [
    ['Strap', 'Hand-stitched Italian calfskin'],
    ['Width', '22 mm lug / 20 mm buckle'],
    ['Clasp', 'Deployant, signed AURUM'],
    ['Lug Width', '22 mm'],
    ['Interchangeable', 'Quick-release system'],
    ['Included Straps', '2 (leather + NATO)'],
  ]},
];

export default function SpecsTable() {
  return (
    <section className="py-24 bg-white dark:bg-neutral-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.3em] text-amber-600 dark:text-amber-400 uppercase mb-3">Technical Data</p>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-100 font-serif">
            Specifications
          </h2>
          <p className="mt-4 text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto">
            Every component is specified to exacting tolerances. Nothing is left to chance.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {specs.map((group, gi) => (
            <motion.div
              key={gi}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.1 }}
              className="rounded-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden"
            >
              <div className="bg-neutral-900 dark:bg-neutral-800 px-6 py-4">
                <h3 className="font-bold text-amber-400 text-sm uppercase tracking-widest">{group.category}</h3>
              </div>
              <div className="divide-y divide-neutral-100 dark:divide-neutral-800">
                {group.rows.map(([label, value], i) => (
                  <div key={i} className="flex items-start justify-between px-6 py-3.5 hover:bg-amber-50 dark:hover:bg-amber-900/10 transition-colors">
                    <span className="text-sm text-neutral-500 dark:text-neutral-400 flex-shrink-0 mr-4">{label}</span>
                    <span className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 text-right">{value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 p-6 rounded-2xl bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left"
        >
          <div>
            <p className="font-bold text-neutral-900 dark:text-neutral-100">Need the full technical dossier?</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-0.5">
              Download our complete 24-page watchmaker specification sheet, including movement schematics.
            </p>
          </div>
          <button className="flex-shrink-0 px-7 py-3 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 rounded-xl font-semibold text-sm transition-colors hover:bg-neutral-700 dark:hover:bg-neutral-300">
            Download PDF
          </button>
        </motion.div>
      </div>
    </section>
  );
}
