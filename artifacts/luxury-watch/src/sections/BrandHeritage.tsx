import { motion } from 'framer-motion';
import watchFront from '@assets/watch_front_1775253265454.webp';

const milestones = [
  { year: '1985', title: 'Founded in Geneva', desc: 'Two master watchmakers unite their craft in a small Geneva atelier.' },
  { year: '1993', title: 'First International Award', desc: 'Our Chronograph I wins the Grand Prix at the Basel Watch Fair.' },
  { year: '2004', title: 'Italian Leather Partnership', desc: 'Exclusive collaboration with Florence\'s finest tanneries begins.' },
  { year: '2016', title: 'Sapphire Innovation', desc: 'We pioneer micro-etched sapphire crystal for unparalleled clarity.' },
  { year: '2024', title: 'Global Expansion', desc: 'Now available in 58 countries with dedicated service centers.' },
];

const BrandHeritage = () => {
  return (
    <section className="py-24 bg-neutral-950 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <p className="text-xs tracking-[0.3em] text-amber-400 uppercase mb-3">Our Heritage</p>
              <h2 className="text-4xl md:text-5xl font-bold font-serif leading-tight">
                Four Decades of Horological Mastery
              </h2>
            </div>
            <p className="text-neutral-400 leading-relaxed text-lg">
              Born from a passion for precision and an obsession with beauty, AURUM & CO. has spent four decades perfecting the art of watchmaking. Every timepiece we create carries the weight of tradition and the clarity of modern innovation.
            </p>
            <p className="text-neutral-400 leading-relaxed">
              We source only the finest materials — hand-selected sapphire crystals from Switzerland, hand-tanned leather from century-old Florentine tanneries, and movements from workshops that have served the greatest names in horology.
            </p>

            <div className="relative pl-6 border-l border-amber-600/40 space-y-8 mt-10">
              {milestones.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative"
                >
                  <div className="absolute -left-[1.6rem] w-3 h-3 rounded-full bg-amber-500 ring-4 ring-neutral-950 top-1" />
                  <span className="text-xs text-amber-400 font-semibold tracking-widest">{m.year}</span>
                  <h4 className="font-semibold text-neutral-100 mt-0.5">{m.title}</h4>
                  <p className="text-sm text-neutral-400 mt-1">{m.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[3/4] shadow-2xl">
              <img src={watchFront} alt="Heritage watch" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-amber-400 text-sm tracking-widest uppercase mb-1">Limited Edition</p>
                <p className="text-white text-2xl font-bold font-serif">Heritage No. 001</p>
                <p className="text-neutral-300 text-sm mt-1">One of only 85 pieces ever made</p>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 w-32 h-32 bg-amber-600/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-amber-600/5 rounded-full blur-3xl" />

            <div className="absolute top-8 -right-4 bg-amber-600 text-white rounded-2xl p-5 shadow-xl w-44">
              <p className="text-3xl font-bold">40+</p>
              <p className="text-sm text-amber-100 mt-1 leading-tight">Years of Swiss Precision</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BrandHeritage;
