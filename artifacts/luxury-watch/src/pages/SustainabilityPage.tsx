import { motion } from 'framer-motion';
import { Leaf, Recycle, Globe, Heart } from 'lucide-react';

export default function SustainabilityPage() {
  const pillars = [
    { icon: Leaf, title: 'Responsible Sourcing', desc: 'Every material we use is traced to its origin. Our leather is sourced from tanneries certified by the Leather Working Group. Our diamonds are Kimberley Process certified. Our gold is recycled or Fairmined certified.' },
    { icon: Recycle, title: 'Zero Waste Atelier', desc: 'Since 2022, our Geneva atelier has operated with zero waste to landfill. Metal offcuts are recycled back into production. Leather offcuts are donated to artisan schools. All packaging is made from recycled or FSC-certified materials.' },
    { icon: Globe, title: 'Carbon Commitment', desc: 'We have committed to being carbon neutral by 2026 across all operations, including supply chain, shipping, and retail. We currently offset all shipping emissions through verified reforestation projects in Switzerland and Kenya.' },
    { icon: Heart, title: 'Community', desc: 'We partner with three watchmaking schools in Switzerland to fund scholarships for students from underprivileged backgrounds. In 2024, we funded 12 full-year scholarships. We also support gemstone mining communities through our "Artisan Premium" programme.' },
  ];

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950">
      <div className="relative h-[50vh] overflow-hidden">
        <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1600&q=80" alt="Nature" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs tracking-[0.4em] text-green-400 uppercase mb-3">Our Responsibility</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl font-bold font-serif text-white">Sustainability</motion.h1>
            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-neutral-300 mt-4 max-w-lg">
              Luxury and responsibility are not opposites. We believe the finest things are made with care — for the craftsperson, the community, and the planet.
            </motion.p>
          </div>
        </div>
      </div>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {pillars.map((p, i) => (
            <motion.div key={p.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}
              className="bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-7">
              <div className="w-12 h-12 rounded-xl bg-green-50 dark:bg-green-900/20 flex items-center justify-center mb-4">
                <p.icon className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">{p.title}</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="bg-neutral-900 rounded-3xl p-10 text-center text-white">
          <p className="text-xs tracking-[0.4em] text-green-400 uppercase mb-4">2025 Report</p>
          <h2 className="text-3xl font-bold font-serif mb-6">Our Progress This Year</h2>
          <div className="grid grid-cols-3 gap-8">
            {[
              { value: '100%', label: 'Shipping carbon offset' },
              { value: '92%', label: 'Recycled packaging' },
              { value: '12', label: 'Scholarships funded' },
            ].map(s => (
              <div key={s.label}>
                <div className="text-4xl font-bold text-green-400 font-serif">{s.value}</div>
                <div className="text-xs text-neutral-400 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
