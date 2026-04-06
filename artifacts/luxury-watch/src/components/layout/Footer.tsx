import { Link } from 'wouter';
import { Instagram, Twitter, Facebook, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const footerSections = [
  {
    title: 'Shop',
    links: [
      { label: 'Timepieces', href: '/shop/watches' },
      { label: 'Fine Jewelry', href: '/shop/jewelry' },
      { label: 'Accessories', href: '/shop/accessories' },
      { label: 'Fragrances', href: '/shop/fragrances' },
      { label: 'Leather Goods', href: '/shop/leather' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Our Heritage', href: '/about' },
      { label: 'Craftsmanship', href: '/about#craftsmanship' },
      { label: 'Sustainability', href: '/sustainability' },
      { label: 'Careers', href: '/careers' },
      { label: 'Press & Media', href: '/press' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Contact Us', href: '/contact' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Shipping & Returns', href: '/shipping' },
      { label: 'Warranty', href: '/warranty' },
      { label: 'Watch Care Guide', href: '/watch-care' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid md:grid-cols-5 gap-10 mb-14">
          <div className="md:col-span-2 space-y-4">
            <h3 className="text-2xl font-bold font-serif tracking-widest text-amber-400">AURUM & CO.</h3>
            <p className="text-sm text-neutral-400 leading-relaxed max-w-xs">
              Crafting extraordinary luxury since 1985 in Geneva, Switzerland. Every piece is a commitment to precision, beauty, and timeless elegance.
            </p>
            <div className="flex items-center gap-3 pt-2">
              {[Instagram, Twitter, Facebook, Youtube].map((Icon, i) => (
                <button key={i} className="group w-9 h-9 rounded-full border border-neutral-600 bg-transparent hover:bg-amber-600 hover:border-amber-600 flex items-center justify-center transition-all duration-200">
                  <Icon className="w-4 h-4 text-neutral-300 group-hover:text-white transition-colors" />
                </button>
              ))}
            </div>
            <div className="space-y-2 pt-2 text-sm text-neutral-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                <span>14 Rue de Montbrillant, Geneva, Switzerland</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-500" />
                <span>+41 22 999 0100</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-500" />
                <span>atelier@aurum-co.com</span>
              </div>
            </div>
          </div>

          {footerSections.map(section => (
            <div key={section.title}>
              <h4 className="font-semibold text-neutral-100 mb-5 text-xs uppercase tracking-widest">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map(link => (
                  <li key={link.label}>
                    <Link href={link.href}>
                      <span className="text-sm text-neutral-400 hover:text-amber-400 transition-colors cursor-pointer">{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} AURUM & CO. All rights reserved. Geneva, Switzerland.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy"><span className="hover:text-amber-400 transition-colors cursor-pointer">Privacy Policy</span></Link>
            <Link href="/terms"><span className="hover:text-amber-400 transition-colors cursor-pointer">Terms of Sale</span></Link>
            <span className="hover:text-amber-400 transition-colors cursor-pointer">Cookie Settings</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
