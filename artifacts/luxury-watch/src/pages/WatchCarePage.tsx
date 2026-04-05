import { motion } from 'framer-motion';
import { Droplets, Sun, Wind, Wrench } from 'lucide-react';

const sections = [
  { icon: Droplets, title: 'Water Resistance', color: 'text-blue-600', bg: 'bg-blue-50 dark:bg-blue-900/20', tips: [
    { heading: '3 ATM / 30m', detail: 'Splash resistant only. Avoid submersion, showering, or hand washing.' },
    { heading: '5 ATM / 50m', detail: 'Light swimming only. No diving, snorkelling, or high-velocity water activities.' },
    { heading: '10 ATM / 100m', detail: 'Swimming and snorkelling. Not suitable for scuba or pressure diving.' },
    { heading: '20–30 ATM / 200–300m', detail: 'Suitable for recreational scuba diving. Not for saturation or mixed-gas diving.' },
  ]},
  { icon: Sun, title: 'Daily Care', color: 'text-amber-600', bg: 'bg-amber-50 dark:bg-amber-900/20', tips: [
    { heading: 'Clean after contact with saltwater or sweat', detail: 'Wipe with a soft, lint-free cloth dampened with fresh water. Allow to air dry.' },
    { heading: 'Avoid extreme temperatures', detail: 'Never expose your watch to rapid temperature changes. Keep away from direct heat sources (saunas, car dashboards).' },
    { heading: 'Store in a watch box or pouch', detail: 'When not worn, store in a dry, cool place. Avoid contact with other jewelry to prevent scratching.' },
    { heading: 'Avoid chemicals', detail: 'Perfume, hairspray, cleaning agents, and solvents can damage the crystal, case, and strap. Apply these before putting on your watch.' },
  ]},
  { icon: Wind, title: 'Leather Strap Care', color: 'text-amber-700', bg: 'bg-amber-50 dark:bg-amber-900/20', tips: [
    { heading: 'Keep dry', detail: 'Leather and water are not friends. Remove your watch before showering, swimming, or intense exercise.' },
    { heading: 'Condition twice a year', detail: 'Apply a small amount of quality leather conditioner with a soft cloth to preserve suppleness and prevent cracking.' },
    { heading: 'Rotate straps', detail: 'Like shoes, leather straps benefit from rest. Having two straps in rotation doubles their lifespan.' },
    { heading: 'Natural patina is normal', detail: 'Full-grain leather develops a patina over time — this is not a defect but a sign of natural aging.' },
  ]},
  { icon: Wrench, title: 'Servicing', color: 'text-neutral-600', bg: 'bg-neutral-100 dark:bg-neutral-800', tips: [
    { heading: 'Quartz movements', detail: 'Battery replacement every 2–3 years. Full service (cleaning, lubrication, pressure test) every 5–7 years.' },
    { heading: 'Mechanical / automatic movements', detail: 'Full service every 5–7 years, or when accuracy deteriorates significantly.' },
    { heading: 'Water resistance test', detail: 'Have water resistance tested annually if you regularly expose the watch to water.' },
    { heading: 'Always use certified watchmakers', detail: 'Unauthorized service may void your warranty. All AURUM & CO. service is performed by our Geneva atelier.' },
  ]},
];

export default function WatchCarePage() {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.4em] text-amber-600 dark:text-amber-400 uppercase mb-3">After-Sales</p>
          <h1 className="text-4xl font-bold font-serif text-neutral-900 dark:text-white">Watch Care Guide</h1>
          <p className="text-neutral-500 dark:text-neutral-400 mt-3 max-w-xl mx-auto">A well-cared-for timepiece is an heirloom. Follow these guidelines to ensure your AURUM & CO. watch remains as magnificent as the day you received it.</p>
        </div>

        <div className="space-y-8">
          {sections.map((section, si) => (
            <motion.div key={section.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: si * 0.08 }} viewport={{ once: true }}
              className="bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 rounded-xl ${section.bg} flex items-center justify-center`}>
                  <section.icon className={`w-6 h-6 ${section.color}`} />
                </div>
                <h2 className="text-xl font-bold text-neutral-900 dark:text-white">{section.title}</h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {section.tips.map(tip => (
                  <div key={tip.heading} className="bg-neutral-50 dark:bg-neutral-800 rounded-xl p-4">
                    <p className="font-semibold text-sm text-neutral-900 dark:text-white mb-1.5">{tip.heading}</p>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">{tip.detail}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="bg-amber-600 rounded-2xl p-8 text-center text-white mt-10">
          <h2 className="text-xl font-bold mb-2">Book a Service</h2>
          <p className="text-amber-100 text-sm mb-5">Our Geneva atelier accepts service appointments for all AURUM & CO. timepieces worldwide.</p>
          <a href="mailto:service@aurum-co.com" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-amber-600 font-bold rounded-xl hover:bg-amber-50 transition-colors text-sm">
            service@aurum-co.com
          </a>
        </div>
      </div>
    </div>
  );
}
