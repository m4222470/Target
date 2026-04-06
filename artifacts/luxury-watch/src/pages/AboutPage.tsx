import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';

const timeline = [
  { year: '1985', title: 'Founded in Geneva', desc: 'Henri Aurum establishes the atelier on Rue de Montbrillant, Geneva, with a team of seven master watchmakers.' },
  { year: '1992', title: 'First International Prize', desc: 'The Chronograph I wins the Geneva Grand Prix de Horlogerie, establishing AURUM & CO. on the world stage.' },
  { year: '2001', title: 'In-House Movement', desc: 'Launch of Caliber A-01, our first entirely in-house developed and produced movement.' },
  { year: '2008', title: 'Expansion to Jewelry & Leather', desc: 'The AURUM universe expands beyond timepieces into fine jewelry and handcrafted leather goods.' },
  { year: '2015', title: '30th Anniversary Collection', desc: 'The Tourbillon S Prestige is unveiled, becoming the most complex piece in our history.' },
  { year: '2024', title: 'Digital Transformation', desc: 'AURUM & CO. launches its global e-commerce platform, bringing the atelier experience to the world.' },
];

const team = [
  { name: 'Henri Aurum III', role: 'Chief Executive Officer', img: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Henri&backgroundColor=b6e3f4' },
  { name: 'Sophie Laurent', role: 'Creative Director', img: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sophie&backgroundColor=ffd5dc' },
  { name: 'Jean-Pierre Ducret', role: 'Master Watchmaker', img: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jean&backgroundColor=c0aede' },
  { name: 'Camille Bonnaire', role: 'Head of Jewelry', img: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Camille&backgroundColor=d1f4d1' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950">
      <div className="relative h-[60vh] overflow-hidden">
        <img src="https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?w=1600&q=80" alt="Geneva atelier" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/30 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs tracking-[0.4em] text-amber-400 uppercase mb-3">Since 1985</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-7xl font-bold font-serif text-white max-w-2xl">Our Heritage</motion.h1>
            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-neutral-300 mt-5 max-w-lg leading-relaxed">
              Four decades of mastery in Geneva — creating pieces that outlast generations and tell stories that words cannot.
            </motion.p>
          </div>
        </div>
      </div>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <p className="text-xs tracking-[0.4em] text-amber-600 uppercase mb-3">Our Philosophy</p>
            <h2 className="text-4xl font-bold font-serif text-neutral-900 dark:text-white mb-5">Excellence Without Compromise</h2>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
              At AURUM & CO., we believe that true luxury is not defined by price, but by the invisible — the 200 hours of a master's hands shaping a single movement, the sourcing of a gemstone from a single certified mine, the six weeks a hide spends in a traditional tannery.
            </p>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Every piece we create is a statement against haste. In a world that prizes speed, we are unreservedly committed to patience, precision, and permanence.
            </p>
          </div>
          <div className="relative aspect-square rounded-3xl overflow-hidden">
            <img src="https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=800&q=80" alt="Craftsmanship" className="w-full h-full object-cover" />
          </div>
        </div>

        <div>
          <p className="text-xs tracking-[0.4em] text-amber-600 uppercase mb-3">Timeline</p>
          <h2 className="text-4xl font-bold font-serif text-neutral-900 dark:text-white mb-10">Our Story</h2>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-amber-200 dark:bg-amber-900" />
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <motion.div key={item.year} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.08 }} viewport={{ once: true }}
                  className="relative pl-12">
                  <div className="absolute left-0 top-1 w-9 h-9 rounded-full bg-amber-600 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-white" />
                  </div>
                  <span className="text-xs font-bold text-amber-600 dark:text-amber-400 tracking-widest">{item.year}</span>
                  <h3 className="text-lg font-bold text-neutral-900 dark:text-white mt-0.5">{item.title}</h3>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-neutral-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs tracking-[0.4em] text-amber-600 uppercase mb-3">The People</p>
            <h2 className="text-4xl font-bold font-serif text-neutral-900 dark:text-white">Our Team</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <motion.div key={member.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }} className="text-center">
                <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4 border-4 border-amber-100 dark:border-amber-900">
                  <img src={member.img} alt={member.name} className="w-full h-full" />
                </div>
                <h3 className="font-bold text-neutral-900 dark:text-white">{member.name}</h3>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-neutral-900 py-20">
        <div className="max-w-2xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold font-serif text-white mb-5">Experience Our Atelier</h2>
          <p className="text-neutral-400 mb-8">Visit us in Geneva or explore our collections online. Our team is always available to guide you.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact"><button className="px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-full transition-colors flex items-center gap-2 justify-center">
              Contact Us <ArrowRight className="w-4 h-4" />
            </button></Link>
            <Link href="/shop"><button className="px-8 py-4 border border-white/30 text-white hover:border-white font-bold rounded-full transition-colors">
              Shop Collections
            </button></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
