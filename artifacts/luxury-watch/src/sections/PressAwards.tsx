import { motion } from 'framer-motion';

const awards = [
  {
    year: '2023',
    title: 'Best Luxury Brand',
    org: 'Geneva Horology Awards',
  },
  {
    year: '2022',
    title: 'Craftsmanship Excellence',
    org: 'WatchWorld Annual',
  },
  {
    year: '2021',
    title: 'Innovation in Design',
    org: 'Basel Premier',
  },
  {
    year: '2020',
    title: 'Editor\'s Choice',
    org: 'Robb Report',
  },
];

const press = [
  { name: 'The Wall Street Journal', quote: '"AURUM & CO. represents the future of independent watchmaking."' },
  { name: 'Robb Report', quote: '"The Chronograph I is simply one of the finest watches under $2,000."' },
  { name: 'Financial Times', quote: '"A brand that refuses to compromise, even when the market tempts it to."' },
  { name: 'GQ Magazine', quote: '"We tested it for six months. It never skipped a second. Literally."' },
];

const PressAwards = () => {
  return (
    <section className="py-24 bg-neutral-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.3em] text-amber-400 uppercase mb-3">Recognition</p>
          <h2 className="text-4xl md:text-5xl font-bold font-serif">
            Internationally Acclaimed
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6 mb-20">
          {awards.map((award, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center bg-neutral-900 rounded-2xl p-7 border border-neutral-800 hover:border-amber-600/50 transition-colors"
            >
              <div className="w-16 h-16 rounded-full bg-amber-600/10 border border-amber-600/30 flex items-center justify-center mx-auto mb-4">
                <span className="text-amber-400 font-bold text-sm">{award.year}</span>
              </div>
              <h3 className="font-bold text-neutral-100 mb-1">{award.title}</h3>
              <p className="text-xs text-neutral-500 uppercase tracking-wider">{award.org}</p>
            </motion.div>
          ))}
        </div>

        <div className="border-t border-neutral-800 pt-16">
          <p className="text-center text-xs tracking-[0.3em] text-neutral-500 uppercase mb-12">As Featured In</p>
          <div className="grid sm:grid-cols-2 gap-6">
            {press.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-neutral-900 rounded-2xl p-6 border border-neutral-800"
              >
                <p className="text-neutral-400 italic text-sm leading-relaxed mb-4">{p.quote}</p>
                <p className="text-amber-400 font-semibold text-sm">— {p.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PressAwards;
