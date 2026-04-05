import { motion } from 'framer-motion';

const sections = [
  {
    title: 'Information We Collect',
    content: `We collect information you provide directly to us, such as when you create an account, make a purchase, or contact our concierge team. This includes your name, email address, postal address, phone number, payment information, and purchase history. We may also collect information automatically when you interact with our digital platforms, including browsing behaviour, device identifiers, and location data where permitted.`,
  },
  {
    title: 'How We Use Your Information',
    content: `Your information is used exclusively to deliver and improve the AURUM & CO. experience: processing and fulfilling orders, communicating about purchases and services, personalising recommendations, maintaining security, and complying with legal obligations. We never sell your personal data to third parties. Where we share data with trusted service providers — such as logistics partners and payment processors — we require them to maintain the same standards of privacy we uphold.`,
  },
  {
    title: 'Data Security',
    content: `We employ industry-standard encryption and security protocols to protect your personal information. All payment transactions are processed through PCI DSS-compliant gateways. Our team undergoes regular privacy and security training. While no method of transmission over the internet is entirely secure, we continually invest in the latest safeguards to protect our clients.`,
  },
  {
    title: 'Cookies & Tracking',
    content: `We use cookies and similar technologies to remember your preferences, understand how you engage with our platform, and deliver a seamless shopping experience. You may control cookie preferences through your browser settings. Declining certain cookies may affect the functionality of some features, though core shopping capabilities will remain available.`,
  },
  {
    title: 'Your Rights',
    content: `Depending on your jurisdiction, you may have the right to access, rectify, or erase personal data we hold about you; restrict or object to certain processing; and request portability of your information. To exercise any of these rights, please contact our privacy team at privacy@aurum-co.com. We will respond within the timeframe required by applicable law.`,
  },
  {
    title: 'Retention',
    content: `We retain your personal data for as long as necessary to fulfil the purposes outlined in this policy, or as required by law. Purchase records may be retained for seven years in accordance with financial regulations. You may request deletion of your account and associated data at any time, subject to legal retention requirements.`,
  },
  {
    title: 'Changes to This Policy',
    content: `We may update this Privacy Policy from time to time to reflect changes in our practices or applicable law. We will notify you of significant changes via email or a prominent notice on our website. Your continued use of AURUM & CO. services following such notification constitutes acceptance of the revised policy.`,
  },
];

export default function PrivacyPage() {
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
            Privacy Policy
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
          className="text-neutral-600 dark:text-neutral-400 text-base leading-relaxed mb-12 text-lg">
          At AURUM & CO., discretion is not merely a courtesy — it is a cornerstone of our relationship with every client. This Privacy Policy explains how we collect, use, and safeguard the personal information you entrust to us.
        </motion.p>

        <div className="space-y-10">
          {sections.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }} viewport={{ once: true }}
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
          <p className="text-xs tracking-[0.3em] text-amber-600 dark:text-amber-400 uppercase mb-3">Contact</p>
          <p className="text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed">
            For all privacy-related enquiries, please contact our Data Protection Officer at{' '}
            <a href="mailto:privacy@aurum-co.com" className="text-amber-600 dark:text-amber-400 hover:underline">
              privacy@aurum-co.com
            </a>{' '}
            or write to AURUM & CO., 12 Rue du Rhône, Geneva 1204, Switzerland.
          </p>
        </div>
      </div>
    </div>
  );
}
