import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowRight, ExternalLink } from 'lucide-react';

const featured = {
  name: 'AURUM × Maison Margela',
  subtitle: 'The Decortiqué Edition',
  year: '2024',
  desc: 'A radical reimagining of the classic dress watch. Exposed movement, raw stitching, and a deliberately unfinished aesthetic — a meeting of two schools of thought that refuse convention.',
  image: 'https://images.unsplash.com/photo-1586950958042-f05dd35b2c12?w=1800&q=90',
  pieces: 120,
  price: '$38,500',
};

const collaborations = [
  {
    partner: 'Tadao Ando Studio',
    category: 'Architecture',
    year: '2024',
    name: 'The Concrete & Steel',
    desc: 'Inspired by the raw beauty of exposed concrete. The dial mirrors the textured surfaces of Ando\'s iconic buildings — each one unique.',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=90',
    pieces: 50,
    price: '$62,000',
    status: 'Available',
  },
  {
    partner: 'Loewe Crafted World',
    category: 'Fashion',
    year: '2024',
    name: 'The Anagram Timepiece',
    desc: 'The iconic Loewe Anagram motif reimagined as a guilloché dial. Paired with a hand-stitched nappa leather strap from the Loewe workshop.',
    image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&q=90',
    pieces: 200,
    price: '$18,900',
    status: 'Available',
  },
  {
    partner: 'Pharrell Williams',
    category: 'Music & Culture',
    year: '2023',
    name: 'Happy × Gold',
    desc: 'A celebration of joy and self-expression. Bold sunburst dial in 22K gold with rainbow gem hour markers — pure joy distilled into metal.',
    image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=800&q=90',
    pieces: 300,
    price: '$24,500',
    status: 'Sold Out',
  },
  {
    partner: 'SpaceX Exploration',
    category: 'Technology',
    year: '2023',
    name: 'Orbit One',
    desc: 'A titanium case lightweight enough to have flown to the ISS. This piece carries a fragment of a Dragon spacecraft heat shield in its caseback.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=90',
    pieces: 75,
    price: '$89,000',
    status: 'Sold Out',
  },
  {
    partner: 'Zaha Hadid Design',
    category: 'Design',
    year: '2022',
    name: 'Fluid Dynamics',
    desc: 'Parametric curves and flowing lines define every surface of this watch. The case itself is a sculpture, milled from a single block of grade 5 titanium.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=90',
    pieces: 100,
    price: '$45,000',
    status: 'Sold Out',
  },
  {
    partner: 'Gagosian Gallery',
    category: 'Contemporary Art',
    year: '2022',
    name: 'The Canvas Edition',
    desc: 'Five artists. Five dials. Each watch in this series features original micro-artwork by a Gagosian-represented artist, fired onto the enamel.',
    image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&q=90',
    pieces: 25,
    price: '$110,000',
    status: 'Sold Out',
  },
];

const upcomingPartners = [
  { name: 'Dior Maison', teaser: 'Coming Q3 2025' },
  { name: 'James Turrell', teaser: 'Light & Time — 2025' },
  { name: 'Rolls-Royce Motor Cars', teaser: 'The Driver\'s Watch — 2025' },
];

export default function CollaborationsPage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">

      {/* Hero — Featured */}
      <section className="relative h-[90vh] overflow-hidden">
        <img src={featured.image} alt={featured.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs tracking-[0.3em] text-amber-400 uppercase">Latest Collaboration</span>
              <span className="w-8 h-px bg-amber-400" />
              <span className="text-xs tracking-[0.3em] text-neutral-500 uppercase">{featured.year}</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold font-serif mb-4">{featured.name}</h1>
            <p className="text-xl text-neutral-300 font-light mb-2">{featured.subtitle}</p>
            <p className="text-neutral-400 max-w-2xl leading-relaxed mb-8">{featured.desc}</p>
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-6 text-sm">
                <div><p className="text-neutral-500 text-xs mb-1">Edition Size</p><p className="font-bold text-amber-400">{featured.pieces} Pieces</p></div>
                <div className="w-px h-8 bg-white/10" />
                <div><p className="text-neutral-500 text-xs mb-1">Starting From</p><p className="font-bold text-amber-400">{featured.price}</p></div>
              </div>
              <Link href="/limited-editions">
                <button className="flex items-center gap-2 px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-full transition-colors text-sm">
                  Explore Collection <ArrowRight size={14} />
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* All Collaborations */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-xs tracking-[0.4em] text-amber-400 uppercase mb-2">Our Partners</p>
            <h2 className="text-4xl font-bold font-serif">All Collaborations</h2>
          </div>
          <p className="text-neutral-500 text-sm">{collaborations.length} collaborations worldwide</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collaborations.map((col, i) => (
            <motion.div
              key={col.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              viewport={{ once: true }}
              className="group overflow-hidden rounded-2xl border border-white/8 bg-neutral-900 hover:border-amber-500/30 transition-colors"
            >
              <div className="relative h-56 overflow-hidden">
                <img src={col.image} alt={col.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="bg-neutral-900/90 backdrop-blur-sm text-xs text-neutral-300 px-2 py-1 rounded-md border border-white/10">{col.category}</span>
                </div>
                <div className="absolute top-3 right-3">
                  <span className={`text-xs font-bold px-2 py-1 rounded-full ${col.status === 'Available' ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'bg-red-500/10 text-red-400 border border-red-500/20'}`}>
                    {col.status}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <p className="text-xs text-amber-400 tracking-wider mb-1">× {col.partner}</p>
                <h3 className="text-xl font-bold font-serif mb-3">{col.name}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed mb-4 line-clamp-3">{col.desc}</p>
                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <div>
                    <p className="text-xs text-neutral-500">{col.year} • {col.pieces} pcs</p>
                    <p className="text-sm font-bold text-amber-400 mt-0.5">{col.price}</p>
                  </div>
                  {col.status === 'Available' && (
                    <Link href="/limited-editions">
                      <button className="text-xs flex items-center gap-1 text-amber-400 hover:text-amber-300 font-semibold transition-colors">
                        View <ExternalLink size={11} />
                      </button>
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Upcoming */}
      <section className="border-t border-white/5 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs tracking-[0.4em] text-amber-400 uppercase mb-2">Coming Soon</p>
            <h2 className="text-4xl font-bold font-serif">What's Next</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingPartners.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-neutral-900 border border-white/5 rounded-2xl p-8 text-center group hover:border-amber-500/20 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-amber-400 font-bold text-lg">×</span>
                </div>
                <h3 className="text-xl font-bold font-serif mb-2">{p.name}</h3>
                <p className="text-sm text-amber-400/70">{p.teaser}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Propose a Collab */}
      <section className="bg-neutral-900 py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold font-serif mb-4">Propose a Collaboration</h2>
          <p className="text-neutral-400 mb-8 max-w-xl mx-auto">
            We partner with artists, designers, architects, athletes, and visionaries who share our obsession with craftsmanship and storytelling.
          </p>
          <Link href="/contact">
            <button className="px-10 py-4 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-full transition-colors flex items-center gap-2 mx-auto">
              Get in Touch <ArrowRight size={16} />
            </button>
          </Link>
        </div>
      </section>

    </div>
  );
}
