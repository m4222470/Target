import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Link as LinkIcon } from 'lucide-react';
import { Link } from 'wouter';

const faqs = [
  { category: 'Orders & Shipping', items: [
    { q: 'Do you offer free shipping?', a: 'Yes — all AURUM & CO. orders ship free worldwide, regardless of order value. Most orders are delivered within 3–5 business days via express courier.' },
    { q: 'How will my order be packaged?', a: 'Every order is presented in our signature black lacquered box with gold ribbon, then double-boxed in a protective outer carton. All pieces are accompanied by a certificate of authenticity and care guide.' },
    { q: 'Can I track my order?', a: 'Yes. Once your order ships, you will receive a tracking email with a live tracking link. You can also view your order status under My Account → Orders.' },
    { q: 'Do you ship to my country?', a: 'We ship to 58 countries worldwide. If you are unsure whether we deliver to your location, please contact our concierge team.' },
  ]},
  { category: 'Returns & Warranty', items: [
    { q: 'What is your return policy?', a: 'We offer a 60-day return window from the date of delivery — no questions asked. Items must be returned in original, unworn condition with all packaging and documentation.' },
    { q: 'How do I start a return?', a: 'Contact us at concierge@aurum-co.com or through our Contact page. We will arrange a complimentary courier collection from your address within 2 business days.' },
    { q: 'What does the warranty cover?', a: 'All AURUM & CO. timepieces come with a lifetime warranty against manufacturing defects. Jewelry and leather goods carry a 5-year warranty. Accidental damage, normal wear, and battery replacement are not covered.' },
    { q: 'How do I claim warranty service?', a: 'Contact our after-sales team with your order number and a description of the issue. If the defect is covered, we will arrange complimentary collection, repair, and return at no cost.' },
  ]},
  { category: 'Products & Authentication', items: [
    { q: 'Are your products authentic?', a: 'Every piece sold by AURUM & CO. is 100% genuine and produced in our own atelier or by our certified manufacturing partners. Each product comes with a numbered certificate of authenticity.' },
    { q: 'Are your diamonds certified?', a: 'All diamonds used in AURUM & CO. jewelry meet a minimum standard of G color and VS1 clarity, and are GIA certified. We source exclusively from conflict-free mines.' },
    { q: 'Can I customise a product?', a: 'Yes. We offer bespoke engraving on most jewelry, leather goods, and some timepieces. For fully custom commissions, please contact our concierge team.' },
  ]},
  { category: 'Account & Payments', items: [
    { q: 'What payment methods do you accept?', a: 'We accept all major credit and debit cards (Visa, Mastercard, Amex), as well as bank transfers and invoice for orders above $5,000.' },
    { q: 'Is my payment information secure?', a: 'All payments are processed through PCI DSS-compliant payment processors with full TLS encryption. We never store your card details on our servers.' },
    { q: 'Can I pay in my local currency?', a: 'Prices are displayed in USD but we accept payment in EUR, GBP, CHF, AED, JPY, and SGD. Your card provider handles the conversion at their standard rate.' },
  ]},
];

export default function FAQPage() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.4em] text-amber-600 dark:text-amber-400 uppercase mb-3">Help Center</p>
          <h1 className="text-5xl font-bold font-serif text-neutral-900 dark:text-white">Frequently Asked Questions</h1>
          <p className="text-neutral-500 dark:text-neutral-400 mt-3">Can't find what you're looking for?{' '}
            <Link href="/contact"><span className="text-amber-600 font-semibold cursor-pointer hover:text-amber-700">Contact us</span></Link>
          </p>
        </div>

        <div className="space-y-8">
          {faqs.map(section => (
            <div key={section.category}>
              <h2 className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-widest mb-4">{section.category}</h2>
              <div className="bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden divide-y divide-neutral-100 dark:divide-neutral-800">
                {section.items.map(item => {
                  const key = `${section.category}-${item.q}`;
                  const isOpen = open === key;
                  return (
                    <div key={item.q}>
                      <button onClick={() => setOpen(isOpen ? null : key)} className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors">
                        <span className="font-semibold text-neutral-900 dark:text-white pr-4 text-sm">{item.q}</span>
                        <ChevronDown className={`w-5 h-5 text-amber-600 flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                            <p className="px-6 pb-5 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">{item.a}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
