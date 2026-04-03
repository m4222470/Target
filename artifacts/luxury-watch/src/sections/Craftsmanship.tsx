import { motion } from 'framer-motion';
import { Gem, Layers, Settings, Wrench } from 'lucide-react';
import watchDetail from '@assets/watch_detail_1775253265391.webp';
import watchStrap from '@assets/watch_strap_1775253265477.webp';

const steps = [
  {
    icon: Gem,
    title: 'Material Selection',
    desc: 'Every component begins as a hand-selected raw material. Our procurement team visits suppliers personally to inspect quality.',
  },
  {
    icon: Layers,
    title: 'Movement Assembly',
    desc: 'Each movement is assembled by a single master watchmaker — 87 individual components, placed with tweezers under magnification.',
  },
  {
    icon: Wrench,
    title: 'Case & Strap Finishing',
    desc: 'The case is hand-polished for 12 hours. The strap is stitched by hand with waxed linen thread, eight stitches per centimeter.',
  },
  {
    icon: Settings,
    title: 'Quality Control',
    desc: 'Every watch undergoes 72 hours of wear simulation and three rounds of water resistance testing before leaving our atelier.',
  },
];

const Craftsmanship = () => {
  return (
    <section className="py-24 bg-neutral-50 dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.3em] text-amber-600 dark:text-amber-400 uppercase mb-3">The Process</p>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-100 font-serif">
            200 Hours. One Watch.
          </h2>
          <p className="mt-4 text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Every AURUM & CO. timepiece passes through the hands of our master craftsmen at each stage of its creation. No shortcuts. No compromises.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="grid grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden aspect-square"
            >
              <img src={watchDetail} alt="Watch detail" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-2xl overflow-hidden aspect-square mt-8"
            >
              <img src={watchStrap} alt="Leather strap" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="col-span-2 rounded-2xl bg-amber-600 p-6 text-white"
            >
              <p className="text-5xl font-bold">200h</p>
              <p className="text-amber-100 mt-1">Average time to craft a single watch, from raw material to your wrist.</p>
            </motion.div>
          </div>

          <div className="space-y-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-5"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                  <step.icon className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-xs font-bold text-amber-600 dark:text-amber-400 tracking-widest">
                      STEP {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h4 className="font-bold text-neutral-900 dark:text-neutral-100 text-lg">{step.title}</h4>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm mt-1 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { number: '87', unit: 'components', label: 'In every movement' },
            { number: '8', unit: 'stitches/cm', label: 'On every leather strap' },
            { number: '72h', unit: 'testing', label: 'Before leaving the atelier' },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white dark:bg-neutral-800 rounded-2xl p-8 text-center border border-neutral-200 dark:border-neutral-700"
            >
              <p className="text-4xl font-bold text-neutral-900 dark:text-neutral-100">{item.number}</p>
              <p className="text-amber-600 dark:text-amber-400 font-medium">{item.unit}</p>
              <p className="text-neutral-500 dark:text-neutral-400 text-sm mt-1">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Craftsmanship;
