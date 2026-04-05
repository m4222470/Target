import { motion } from 'framer-motion';

const sections = [
  {
    title: 'Acceptance of Terms',
    content: `By accessing or purchasing from AURUM & CO. — whether online, by telephone, or in boutique — you agree to be bound by these Terms & Conditions and all applicable laws. If you do not agree, please refrain from using our services. We reserve the right to amend these terms at any time; the most current version will always be available on our website.`,
  },
  {
    title: 'Products & Authenticity',
    content: `Every product sold by AURUM & CO. is genuine and accompanied by a Certificate of Authenticity where applicable. Product images are representative; minor variations in colour, stone setting, or finish may occur due to the handcrafted nature of our pieces. All weights, dimensions, and specifications are provided in good faith and may be subject to slight manufacturing tolerances.`,
  },
  {
    title: 'Pricing & Payment',
    content: `All prices are displayed in USD and are inclusive of applicable taxes where shown. We accept all major credit and debit cards, bank transfer for orders above $10,000, and approved financing arrangements through our concierge service. Payment is processed securely at checkout. AURUM & CO. reserves the right to cancel and refund any order placed at an incorrectly listed price.`,
  },
  {
    title: 'Shipping & Delivery',
    content: `We offer complimentary insured delivery worldwide on all orders. Estimated delivery timeframes are stated at checkout and are guidelines only; AURUM & CO. is not liable for delays caused by customs, courier disruptions, or circumstances beyond our control. Risk of loss transfers to you upon delivery confirmation. Bespoke and made-to-order pieces carry longer production lead times as communicated at time of order.`,
  },
  {
    title: 'Returns & Exchanges',
    content: `Unworn, unaltered items in their original packaging may be returned within 60 days of delivery for a full refund or exchange. Bespoke and engraved items are excluded unless faulty. To initiate a return, please contact our client services team who will arrange complimentary collection. Refunds are processed within 5–10 business days of receipt and inspection of the returned item.`,
  },
  {
    title: 'Warranty',
    content: `All AURUM & CO. timepieces carry a five-year international warranty against manufacturing defects. Fine jewellery and leather goods carry a two-year warranty. The warranty does not cover normal wear and tear, accidental damage, water damage outside stated ratings, or unauthorised modifications. Warranty service must be performed by AURUM & CO. or an authorised service centre.`,
  },
  {
    title: 'Intellectual Property',
    content: `All content on this website — including imagery, typography, copy, and the AURUM & CO. brand identity — is the exclusive property of AURUM & CO. and protected by copyright and trademark law. No content may be reproduced, distributed, or modified without prior written consent. Our brand name and logo are registered trademarks.`,
  },
  {
    title: 'Limitation of Liability',
    content: `To the maximum extent permitted by law, AURUM & CO.'s liability for any claim arising from the use of our products or services shall not exceed the value of the item purchased. We are not liable for indirect, consequential, or incidental damages. Nothing in these terms excludes liability for fraud, personal injury caused by negligence, or any other matter that cannot legally be excluded.`,
  },
  {
    title: 'Governing Law',
    content: `These Terms & Conditions are governed by the laws of Switzerland. Any disputes shall be subject to the exclusive jurisdiction of the courts of Geneva, Switzerland, unless mandatory consumer protection laws in your country require otherwise.`,
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950">
      <div className="bg-neutral-900 py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
            className="text-xs tracking-[0.4em] text-amber-400 uppercase mb-4">
            Legal
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold font-serif text-white mb-4">
            Terms & Conditions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="text-neutral-400 text-sm">
            Last updated: 1 January 2025 &nbsp;·&nbsp; Effective immediately
          </motion.p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <motion.p
          initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-neutral-600 dark:text-neutral-400 text-lg leading-relaxed mb-12">
          These Terms & Conditions govern your relationship with AURUM & CO. and apply to all purchases, services, and interactions with our brand. We encourage you to read them carefully.
        </motion.p>

        <div className="space-y-10">
          {sections.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04 }} viewport={{ once: true }}
              className="border-t border-neutral-200 dark:border-neutral-800 pt-8">
              <h2 className="text-lg font-bold text-neutral-900 dark:text-white font-serif mb-4">
                {i + 1}. {s.title}
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-sm">
                {s.content}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-neutral-100 dark:bg-neutral-900 rounded-2xl">
          <p className="text-xs tracking-[0.3em] text-amber-600 dark:text-amber-400 uppercase mb-3">Questions?</p>
          <p className="text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed">
            For any questions regarding these Terms & Conditions, contact our legal team at{' '}
            <a href="mailto:legal@aurum-co.com" className="text-amber-600 dark:text-amber-400 hover:underline">
              legal@aurum-co.com
            </a>{' '}
            or visit our nearest boutique for in-person assistance.
          </p>
        </div>
      </div>
    </div>
  );
}
