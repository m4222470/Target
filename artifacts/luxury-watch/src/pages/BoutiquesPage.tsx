import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Globe, ArrowRight } from 'lucide-react';

const boutiques = [
  { city: 'Geneva', country: 'Switzerland', address: '14 Rue du Rhône, 1204 Geneva', phone: '+41 22 318 00 00', hours: 'Mon–Sat: 10:00–19:00 · Sun: 11:00–18:00', flagship: true, img: 'https://images.unsplash.com/photo-1604999333679-b86d54738315?w=500&q=80', desc: 'Our founding maison. Home to the complete collection, our private client salon, and the only boutique with an on-site watchmaker available for consultations.' },
  { city: 'Paris', country: 'France', address: '28 Place Vendôme, 75001 Paris', phone: '+33 1 42 61 00 00', hours: 'Mon–Sat: 10:30–19:30 · Sun: Closed', flagship: false, img: 'https://images.unsplash.com/photo-1431274172761-fca41d930114?w=500&q=80', desc: 'Situated in the iconic Place Vendôme, the heart of Parisian haute joaillerie. A luminous space designed by architect Jean Nouvel.' },
  { city: 'London', country: 'United Kingdom', address: '42 New Bond Street, London W1S 2RZ', phone: '+44 20 7499 0000', hours: 'Mon–Sat: 10:00–18:30 · Sun: 12:00–17:00', flagship: false, img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=500&q=80', desc: "A double-fronted Georgian townhouse on Bond Street — London's premier luxury quarter. Private viewing rooms available by appointment." },
  { city: 'Dubai', country: 'United Arab Emirates', address: 'Level 1, Dubai Mall, Downtown Dubai', phone: '+971 4 339 00 00', hours: 'Daily: 10:00–22:00', flagship: false, img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=500&q=80', desc: 'Our largest boutique by area. A dramatic space with a dedicated fragrance bar, jewelry studio, and a private VIP lounge for our Middle Eastern clientele.' },
  { city: 'Tokyo', country: 'Japan', address: '2-6-1 Ginza, Chūō-ku, Tokyo 104-0061', phone: '+81 3 3573 0000', hours: 'Daily: 11:00–20:00', flagship: false, img: 'https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?w=500&q=80', desc: 'Located in the Ginza district — Tokyo\'s luxury heartland. Designed in collaboration with Japanese architect Kengo Kuma, blending Swiss precision with Japanese minimalism.' },
  { city: 'New York', country: 'United States', address: '680 Fifth Avenue, New York, NY 10019', phone: '+1 212 246 0000', hours: 'Mon–Sat: 10:00–18:30 · Sun: 12:00–17:00', flagship: false, img: 'https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?w=500&q=80', desc: 'A striking corner presence on Fifth Avenue, across from Tiffany & Co. Floor-to-ceiling windows showcase our timepieces at every hour of New York light.' },
];

export default function BoutiquesPage() {
  const [selected, setSelected] = useState(boutiques[0]);

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950">
      <div className="bg-neutral-900 py-20 text-center px-4">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs tracking-[0.4em] text-amber-400 uppercase mb-3">Find Us</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-bold font-serif text-white">Our Boutiques</motion.h1>
        <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="text-neutral-400 mt-3 max-w-md mx-auto">Six destinations. One singular experience.</motion.p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* List */}
          <div className="space-y-3">
            {boutiques.map(b => (
              <button key={b.city} onClick={() => setSelected(b)} className={`w-full text-left p-4 rounded-2xl border transition-all ${selected.city === b.city ? 'bg-amber-50 dark:bg-amber-900/20 border-amber-300 dark:border-amber-700' : 'bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800 hover:border-amber-200 dark:hover:border-amber-800'}`}>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-neutral-900 dark:text-white">{b.city}</span>
                      {b.flagship && <span className="text-xs bg-amber-500 text-white px-2 py-0.5 rounded-full font-bold">Flagship</span>}
                    </div>
                    <p className="text-xs text-neutral-400 mt-0.5">{b.country}</p>
                  </div>
                  <MapPin className={`w-4 h-4 ${selected.city === b.city ? 'text-amber-600' : 'text-neutral-300 dark:text-neutral-600'}`} />
                </div>
              </button>
            ))}
          </div>

          {/* Detail */}
          <div className="lg:col-span-2">
            <motion.div key={selected.city} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden">
              <img src={selected.img} alt={selected.city} className="w-full h-52 object-cover" />
              <div className="p-7">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h2 className="text-2xl font-bold font-serif text-neutral-900 dark:text-white">{selected.city}</h2>
                      {selected.flagship && <span className="text-xs bg-amber-500 text-white px-2 py-0.5 rounded-full font-bold">Flagship</span>}
                    </div>
                    <p className="text-neutral-400 text-sm">{selected.country}</p>
                  </div>
                </div>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">{selected.desc}</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { icon: MapPin, label: 'Address', val: selected.address },
                    { icon: Phone, label: 'Phone', val: selected.phone },
                    { icon: Clock, label: 'Hours', val: selected.hours },
                    { icon: Globe, label: 'Appointment', val: 'Book a private appointment' },
                  ].map(detail => (
                    <div key={detail.label} className="flex items-start gap-3">
                      <detail.icon className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-xs font-bold text-neutral-400 uppercase tracking-wider">{detail.label}</p>
                        <p className="text-sm text-neutral-700 dark:text-neutral-300 mt-0.5">{detail.val}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="mt-6 flex items-center gap-2 px-5 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-xl font-bold text-sm transition-colors">
                  Book an Appointment <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
