import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { Wrench, Shield, RefreshCw, MapPin, ArrowRight, Clock, CheckCircle, Phone } from 'lucide-react';

const services = [
  {
    icon: Wrench,
    title: 'Full Service & Overhaul',
    desc: 'Complete disassembly, cleaning of every component, replacement of worn parts, reassembly, regulation, and waterproofing test. Recommended every 5–7 years.',
    duration: '6–8 weeks',
    price: 'From $850',
  },
  {
    icon: Shield,
    title: 'Warranty Repair',
    desc: 'All watches purchased from AURUM & CO. carry a 5-year international warranty covering manufacturing defects. Repairs performed by certified watchmakers.',
    duration: '2–4 weeks',
    price: 'Complimentary',
  },
  {
    icon: RefreshCw,
    title: 'Polishing & Restoration',
    desc: 'Restore your watch to its original brilliance. Case and bracelet polishing, crystal replacement, crown and pushers refurbishment.',
    duration: '1–2 weeks',
    price: 'From $250',
  },
  {
    icon: MapPin,
    title: 'Strap & Bracelet Service',
    desc: 'Original and bespoke straps in alligator, ostrich, calfskin, and NATO. Bracelet link adjustment, clasp replacement, and deep cleaning.',
    duration: '3–5 days',
    price: 'From $95',
  },
];

const steps = [
  { num: '01', title: 'Request Service', desc: 'Complete our online service form or visit any AURUM & CO. boutique. Our specialists will assess your watch and provide a detailed quote.' },
  { num: '02', title: 'Secure Shipping', desc: 'We send you a complimentary insured shipping kit. Your watch is collected from your address and tracked at every stage of the journey.' },
  { num: '03', title: 'Expert Diagnosis', desc: 'Our master watchmakers perform a full inspection. You receive a detailed report with photographs of the movement and any recommended work.' },
  { num: '04', title: 'Service & QC', desc: 'All work is performed by hand in our Geneva service center. Each timepiece passes a 72-hour continuous rate test before leaving.' },
  { num: '05', title: 'Return & Certificate', desc: 'Your watch is returned in pristine condition with a full service certificate, photographic record, and a new 2-year service warranty.' },
];

const faqs = [
  { q: 'How do I know if my watch needs servicing?', a: 'Signs include loss of accuracy (gaining or losing more than ±5 seconds/day), water ingress, difficulty winding or setting, or visible wear on the case. We recommend a full service every 5–7 years regardless.' },
  { q: 'Do you service watches not purchased from AURUM & CO.?', a: 'Yes. We service all Swiss mechanical watches. Older or vintage pieces may require additional assessment for parts sourcing.' },
  { q: 'What is covered under warranty?', a: 'All manufacturing defects in materials and workmanship. Accidental damage, misuse, modification by a third party, and normal wear are not covered.' },
  { q: 'Can I track my watch during service?', a: 'Yes. You will receive a unique service reference number and can track your watch\'s status in real time through our client portal.' },
];

export default function AfterSalesPage() {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950">

      {/* Hero */}
      <section className="relative bg-neutral-900 py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1606041011872-596597976b25?w=1800&q=90"
            alt="Service"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <p className="text-xs tracking-[0.5em] text-amber-400 uppercase mb-4">AURUM & CO. Service</p>
            <h1 className="text-6xl font-bold font-serif mb-6 leading-tight">After-Sales<br />Service</h1>
            <p className="text-neutral-300 text-lg leading-relaxed mb-8 max-w-xl">
              Owning an AURUM & CO. timepiece is a lifelong relationship. Our service team is here to ensure your watch performs at its best for generations.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <button className="flex items-center gap-2 px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-full transition-colors">
                  Request Service <ArrowRight size={16} />
                </button>
              </Link>
              <a href="tel:+41225000000">
                <button className="flex items-center gap-2 px-8 py-4 border border-white/20 hover:border-white/50 text-white font-semibold rounded-full transition-colors">
                  <Phone size={16} /> Call Us
                </button>
              </a>
            </div>
          </motion.div>
          <div className="flex flex-wrap gap-12 mt-16 pt-12 border-t border-white/10">
            {[
              { v: '5 Years', l: 'International Warranty' },
              { v: '72h', l: 'Rate Testing Protocol' },
              { v: '15+', l: 'Certified Watchmakers' },
              { v: '180+', l: 'Countries Covered' },
            ].map(s => (
              <div key={s.l}>
                <p className="text-3xl font-bold font-serif text-amber-400">{s.v}</p>
                <p className="text-sm text-neutral-400 mt-1">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.4em] text-amber-500 uppercase mb-3">What We Offer</p>
          <h2 className="text-4xl font-bold font-serif text-neutral-900 dark:text-white">Our Services</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-white/5 rounded-2xl p-8 hover:border-amber-500/30 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/20 flex items-center justify-center mb-6 group-hover:bg-amber-500/20 transition-colors">
                <s.icon className="text-amber-600 dark:text-amber-400" size={22} />
              </div>
              <h3 className="text-xl font-bold font-serif text-neutral-900 dark:text-white mb-3">{s.title}</h3>
              <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed mb-6">{s.desc}</p>
              <div className="flex items-center justify-between pt-4 border-t border-neutral-100 dark:border-white/5">
                <div className="flex items-center gap-1 text-sm text-neutral-400">
                  <Clock size={13} />
                  <span>{s.duration}</span>
                </div>
                <span className="text-sm font-bold text-amber-600 dark:text-amber-400">{s.price}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="bg-neutral-100 dark:bg-neutral-900 py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.4em] text-amber-500 uppercase mb-3">How It Works</p>
            <h2 className="text-4xl font-bold font-serif text-neutral-900 dark:text-white">The Service Journey</h2>
          </div>
          <div className="space-y-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
                className="flex gap-6 items-start"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                  <span className="text-amber-500 font-bold font-serif text-sm">{step.num}</span>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-lg font-bold font-serif text-neutral-900 dark:text-white mb-2">{step.title}</h3>
                  <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed">{step.desc}</p>
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden sm:block absolute left-7 mt-14 w-px h-6 bg-amber-500/20" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.4em] text-amber-500 uppercase mb-3">Common Questions</p>
          <h2 className="text-4xl font-bold font-serif text-neutral-900 dark:text-white">FAQs</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.08 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-white/5 rounded-xl p-6"
            >
              <div className="flex gap-3">
                <CheckCircle className="text-amber-500 mt-0.5 flex-shrink-0" size={18} />
                <div>
                  <h4 className="font-semibold text-neutral-900 dark:text-white mb-2">{faq.q}</h4>
                  <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Boutiques CTA */}
      <section className="bg-amber-600 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl font-bold font-serif mb-4">Visit Your Nearest Service Center</h2>
          <p className="text-amber-100 mb-8">All AURUM & CO. boutiques accept watch drop-offs for service. No appointment needed.</p>
          <Link href="/boutiques">
            <button className="px-10 py-4 bg-white text-amber-700 font-bold rounded-full hover:bg-amber-50 transition-colors flex items-center gap-2 mx-auto">
              Find a Boutique <MapPin size={16} />
            </button>
          </Link>
        </div>
      </section>

    </div>
  );
}
