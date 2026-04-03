import { motion } from 'framer-motion';

const stats = [
  { value: '40+', label: 'Years of Excellence' },
  { value: '12,000+', label: 'Watches Crafted' },
  { value: '58', label: 'Countries Served' },
  { value: '4.9★', label: 'Average Rating' },
];

const StatsBar = () => {
  return (
    <div className="bg-neutral-900 dark:bg-neutral-950 border-b border-amber-600/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="space-y-1"
            >
              <p className="text-2xl md:text-3xl font-bold text-amber-400">{stat.value}</p>
              <p className="text-xs text-neutral-400 uppercase tracking-widest">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsBar;
