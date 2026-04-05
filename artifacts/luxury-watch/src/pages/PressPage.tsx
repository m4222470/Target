import { motion } from 'framer-motion';
import { Download, ExternalLink } from 'lucide-react';

const coverage = [
  { outlet: 'Financial Times', title: '"The Swiss Atelier Rewriting the Rules of Luxury"', date: 'March 2025', img: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&q=80' },
  { outlet: 'Vogue', title: '"AURUM & CO.: Where Time Meets Timelessness"', date: 'February 2025', img: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&q=80' },
  { outlet: 'Wall Street Journal', title: '"Inside the Atelier Refusing to Compromise"', date: 'January 2025', img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80' },
  { outlet: 'Harper\'s Bazaar', title: '"The Accessory Edit: AURUM & CO. Dominates the Season"', date: 'December 2024', img: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80' },
  { outlet: 'GQ', title: '"The Only Watch Brand You Need to Know in 2025"', date: 'November 2024', img: 'https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=400&q=80' },
  { outlet: 'Forbes', title: '"Luxury E-Commerce: AURUM & CO. Sets a New Standard"', date: 'October 2024', img: 'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=400&q=80' },
];

const awards = [
  { year: '2024', title: 'Geneva Grand Prix de Horlogerie', category: 'Best Men\'s Watch' },
  { year: '2024', title: 'LVMH Innovation Award', category: 'Sustainable Luxury' },
  { year: '2023', title: 'Wallpaper* Design Award', category: 'Best Watch Design' },
  { year: '2022', title: 'GQ Awards', category: 'Brand of the Year' },
  { year: '2021', title: 'Condé Nast Traveler', category: 'World\'s Best Boutique' },
];

export default function PressPage() {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.4em] text-amber-600 dark:text-amber-400 uppercase mb-3">Media</p>
          <h1 className="text-4xl font-bold font-serif text-neutral-900 dark:text-white">Press & Awards</h1>
          <p className="text-neutral-500 dark:text-neutral-400 mt-3">For press enquiries: <a href="mailto:press@aurum-co.com" className="text-amber-600 hover:text-amber-700">press@aurum-co.com</a></p>
        </div>

        <div className="bg-white dark:bg-neutral-900 rounded-3xl border border-neutral-200 dark:border-neutral-800 p-8 mb-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h2 className="text-lg font-bold text-neutral-900 dark:text-white">Press Kit</h2>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">High-resolution images, brand guidelines, and factsheet. For media use only.</p>
          </div>
          <button className="flex items-center gap-2 px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-xl transition-colors text-sm whitespace-nowrap">
            <Download className="w-4 h-4" /> Download Press Kit
          </button>
        </div>

        <h2 className="text-2xl font-bold font-serif text-neutral-900 dark:text-white mb-6">Recent Coverage</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {coverage.map((item, i) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.07 }} viewport={{ once: true }}
              className="bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow">
              <div className="h-40 overflow-hidden">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <p className="text-xs font-bold text-amber-600 uppercase tracking-wider mb-1">{item.outlet}</p>
                <p className="text-sm font-semibold text-neutral-900 dark:text-white leading-snug">{item.title}</p>
                <div className="flex items-center justify-between mt-3">
                  <p className="text-xs text-neutral-400">{item.date}</p>
                  <ExternalLink className="w-3.5 h-3.5 text-neutral-400 group-hover:text-amber-600 transition-colors" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <h2 className="text-2xl font-bold font-serif text-neutral-900 dark:text-white mb-6">Awards & Recognition</h2>
        <div className="bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden">
          {awards.map((award, i) => (
            <div key={award.title} className={`flex items-center justify-between px-6 py-4 ${i < awards.length - 1 ? 'border-b border-neutral-100 dark:border-neutral-800' : ''}`}>
              <div className="flex items-center gap-4">
                <span className="text-xl font-bold text-amber-400 font-serif w-12">{award.year}</span>
                <div>
                  <p className="font-semibold text-sm text-neutral-900 dark:text-white">{award.title}</p>
                  <p className="text-xs text-neutral-400">{award.category}</p>
                </div>
              </div>
              <span className="text-2xl">🏆</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
