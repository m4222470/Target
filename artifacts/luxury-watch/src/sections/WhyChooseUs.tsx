import { motion } from 'framer-motion';
import { Shield, RefreshCw, Truck, Clock, Award, Headphones } from 'lucide-react';

const guarantees = [
  {
    icon: Shield,
    title: 'Lifetime Warranty',
    desc: 'Every AURUM & CO. watch carries a lifetime mechanical warranty, honoring the craftsmanship we stand behind unconditionally.',
  },
  {
    icon: RefreshCw,
    title: '60-Day Returns',
    desc: 'Not fully in love? Return it within 60 days, no questions asked. We cover shipping both ways.',
  },
  {
    icon: Truck,
    title: 'Free Global Shipping',
    desc: 'Complimentary insured shipping to 58 countries. Each watch ships in a hand-finished mahogany presentation box.',
  },
  {
    icon: Clock,
    title: 'Free Servicing',
    desc: 'Complimentary movement service every 5 years at any of our 12 global service centers — for the life of the watch.',
  },
  {
    icon: Award,
    title: 'Certificate of Authenticity',
    desc: 'Each timepiece ships with a numbered certificate, signed by the master watchmaker who built it.',
  },
  {
    icon: Headphones,
    title: '24/7 Concierge',
    desc: 'Our horology concierge team is available around the clock to answer questions, track orders, or arrange in-person viewings.',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-neutral-50 dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.3em] text-amber-600 dark:text-amber-400 uppercase mb-3">Our Promise</p>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-100 font-serif">
            A Watch Should Last a Lifetime
          </h2>
          <p className="mt-4 text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            We believe the relationship between a craftsman and their client shouldn't end at the point of sale. Every purchase comes with our full suite of guarantees.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guarantees.map((g, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-white dark:bg-neutral-800 rounded-2xl p-7 border border-neutral-200 dark:border-neutral-700 group hover:border-amber-500 dark:hover:border-amber-500 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mb-5 group-hover:bg-amber-600 transition-colors duration-300">
                <g.icon className="w-6 h-6 text-amber-600 dark:text-amber-400 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-bold text-neutral-900 dark:text-neutral-100 text-lg mb-2">{g.title}</h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">{g.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
