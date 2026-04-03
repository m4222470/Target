import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'James Whitmore',
    role: 'Architect, London',
    avatar: 'JW',
    color: '#7c3aed',
    rating: 5,
    text: "I've owned watches from the big Swiss houses, but nothing compares to the personal touch of AURUM & CO. The Chronograph I sits on my wrist like it was made for me — because in a sense, it was.",
    watch: 'Chronograph I — Midnight Black',
  },
  {
    name: 'Sophia Reinholt',
    role: 'Investment Director, Frankfurt',
    avatar: 'SR',
    color: '#d97706',
    rating: 5,
    text: "The attention to detail is extraordinary. I noticed the sapphire crystal has zero distortion from any angle. My colleagues keep asking where I got it — I tell them it's not something you find, it's something you earn.",
    watch: 'Tourbillon S — Cognac Brown',
  },
  {
    name: 'Marco Delacroix',
    role: 'Restaurateur, Paris',
    avatar: 'MD',
    color: '#16a34a',
    rating: 5,
    text: "Gifted one to my father for his 60th birthday. He wept. He's worn it every single day for two years without changing the battery once — Swiss quartz efficiency is remarkable. Customer service was also impeccable.",
    watch: 'Heritage XL — Forest Green',
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-white dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.3em] text-amber-600 dark:text-amber-400 uppercase mb-3">Client Stories</p>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-100 font-serif">
            Worn by Those Who Know
          </h2>
          <p className="mt-4 text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto">
            Our clients don't just buy a watch — they begin a relationship with time itself.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative bg-neutral-50 dark:bg-neutral-900 rounded-3xl p-8 border border-neutral-200 dark:border-neutral-800 hover:border-amber-500/50 dark:hover:border-amber-500/50 transition-colors"
            >
              <Quote className="w-8 h-8 text-amber-200 dark:text-amber-900 absolute top-6 right-6" />

              <div className="flex items-center gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-amber-500 text-amber-500" />
                ))}
              </div>

              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-sm mb-8 italic">
                "{t.text}"
              </p>

              <div className="flex items-center gap-4 mt-auto">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                  style={{ backgroundColor: t.color }}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="font-semibold text-neutral-900 dark:text-neutral-100">{t.name}</p>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">{t.role}</p>
                  <p className="text-xs text-amber-600 dark:text-amber-400 mt-0.5">{t.watch}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 bg-neutral-900 dark:bg-neutral-800 rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="text-center md:text-left">
            <p className="text-4xl font-bold text-amber-400">4.9 / 5</p>
            <div className="flex items-center justify-center md:justify-start gap-1 mt-2">
              {Array.from({ length: 5 }).map((_, j) => (
                <Star key={j} className="w-5 h-5 fill-amber-500 text-amber-500" />
              ))}
            </div>
            <p className="text-neutral-400 text-sm mt-2">Based on 760+ verified reviews</p>
          </div>
          <div className="w-px h-16 bg-neutral-700 hidden md:block" />
          <div className="text-center space-y-2">
            {[['5 star', 89], ['4 star', 8], ['3 star', 2], ['2–1 star', 1]].map(([label, pct]) => (
              <div key={label as string} className="flex items-center gap-3 text-sm">
                <span className="text-neutral-400 w-14 text-right">{label}</span>
                <div className="w-40 h-2 rounded-full bg-neutral-700 overflow-hidden">
                  <div className="h-full bg-amber-500 rounded-full" style={{ width: `${pct}%` }} />
                </div>
                <span className="text-neutral-400 w-8">{pct}%</span>
              </div>
            ))}
          </div>
          <div className="w-px h-16 bg-neutral-700 hidden md:block" />
          <div className="text-center">
            <p className="text-neutral-400 text-sm mb-4">Share your experience</p>
            <button className="px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-xl font-semibold text-sm transition-colors">
              Write a Review
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
