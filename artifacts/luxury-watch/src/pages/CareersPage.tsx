import { motion } from 'framer-motion';
import { MapPin, Clock, ArrowRight } from 'lucide-react';

const openings = [
  { title: 'Master Watchmaker', dept: 'Atelier', location: 'Geneva, Switzerland', type: 'Full-time', desc: 'We are seeking an exceptional watchmaker with 10+ years of experience in haute horlogerie, specifically in tourbillon and minute repeater complications.' },
  { title: 'Senior Jewelry Designer', dept: 'Creative', location: 'Geneva, Switzerland', type: 'Full-time', desc: 'Lead the design of our fine jewelry collections from concept to prototype, working closely with our gemological and production teams.' },
  { title: 'Digital Marketing Manager', dept: 'Marketing', location: 'Geneva / Remote', type: 'Full-time', desc: 'Drive our global digital marketing strategy across social, SEO, and paid channels. Luxury brand experience required.' },
  { title: 'Client Advisor — Dubai', dept: 'Retail', location: 'Dubai, UAE', type: 'Full-time', desc: 'Represent the AURUM & CO. brand at our Dubai boutique, providing exceptional personalized service to our UHNW clientele.' },
  { title: 'Supply Chain Analyst', dept: 'Operations', location: 'Geneva, Switzerland', type: 'Full-time', desc: 'Manage relationships with our global network of artisanal suppliers, ensuring quality, ethical sourcing, and on-time delivery.' },
];

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950">
      <div className="bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs tracking-[0.4em] text-amber-600 dark:text-amber-400 uppercase mb-3">Join Us</p>
          <h1 className="text-5xl font-bold font-serif text-neutral-900 dark:text-white max-w-xl">Careers at AURUM & CO.</h1>
          <p className="text-neutral-500 dark:text-neutral-400 mt-4 max-w-2xl leading-relaxed">
            We are a team of craftspeople, storytellers, and perfectionists united by a passion for enduring quality. If you believe that what you make matters, we'd like to hear from you.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            { title: 'Purpose-Driven Work', desc: 'Every role at AURUM & CO. contributes to objects that outlast generations.' },
            { title: 'Swiss Benefits Package', desc: 'Competitive salary, pension contributions, 28 days holiday, and product allowance.' },
            { title: 'Lifelong Learning', desc: 'We invest in your craft. Training budget, conference attendance, and atelier visits are standard.' },
          ].map(p => (
            <div key={p.title} className="bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6">
              <h3 className="font-bold text-neutral-900 dark:text-white mb-2">{p.title}</h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold font-serif text-neutral-900 dark:text-white mb-6">Open Positions</h2>
        <div className="space-y-4">
          {openings.map((job, i) => (
            <motion.div key={job.title} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.07 }} viewport={{ once: true }}
              className="bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 hover:border-amber-300 dark:hover:border-amber-700 transition-colors group cursor-pointer">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="font-bold text-neutral-900 dark:text-white">{job.title}</h3>
                    <span className="px-2 py-0.5 bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 text-xs font-semibold rounded-full">{job.dept}</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-neutral-400 mb-3">
                    <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{job.location}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{job.type}</span>
                  </div>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">{job.desc}</p>
                </div>
                <button className="flex-shrink-0 flex items-center gap-1.5 px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold rounded-xl transition-colors whitespace-nowrap">
                  Apply <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-neutral-500 dark:text-neutral-400 text-sm mb-4">Don't see a suitable role? We're always interested in exceptional talent.</p>
          <a href="mailto:careers@aurum-co.com" className="inline-flex items-center gap-2 px-6 py-3 border border-amber-500 text-amber-600 font-semibold rounded-xl hover:bg-amber-600 hover:text-white transition-colors text-sm">
            Send a Speculative CV <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
