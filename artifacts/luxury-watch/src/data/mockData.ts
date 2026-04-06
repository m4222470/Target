export type Category = 'watches' | 'jewelry' | 'accessories' | 'fragrances' | 'leather';

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: Category;
  price: number;
  originalPrice?: number;
  discount?: number;
  rating: number;
  reviews: number;
  inStock: boolean;
  isNew?: boolean;
  isBestseller?: boolean;
  image: string;
  images: string[];
  description: string;
  shortDescription: string;
  features: string[];
  tags: string[];
  colors?: { id: string; name: string; hex: string }[];
  specifications?: Record<string, string>;
}

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  role: 'admin' | 'user';
  avatar: string;
  joinDate: string;
  orders: number;
  totalSpent: number;
  wishlist: string[];
}

export interface Order {
  id: string;
  userId: string;
  date: string;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  items: { productId: string; name: string; price: number; quantity: number; image: string }[];
  total: number;
  shippingAddress: string;
  trackingNumber?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image: string;
  readTime: number;
}

const watchImages = [
  'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80',
  'https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=800&q=80',
  'https://images.unsplash.com/photo-1539874754764-5a96559165b0?w=800&q=80',
  'https://images.unsplash.com/photo-1609587312208-cea54be969e7?w=800&q=80',
  'https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=800&q=80',
  'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=800&q=80',
  'https://images.unsplash.com/photo-1508057198894-247b23fe5ade?w=800&q=80',
  'https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?w=800&q=80',
];

const jewelryImages = [
  'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
  'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
  'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
  'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=800&q=80',
  'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80',
  'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80',
];

const accessoryImages = [
  'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80',
  'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&q=80',
  'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=800&q=80',
  'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80',
];

const fragranceImages = [
  'https://images.unsplash.com/photo-1590736704728-f4730bb30770?w=800&q=80',
  'https://images.unsplash.com/photo-1619994403073-2cec844b8e63?w=800&q=80',
  'https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?w=800&q=80',
  'https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=800&q=80',
];

const leatherImages = [
  'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80',
  'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&q=80',
  'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=80',
  'https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=800&q=80',
];

export const products: Product[] = [
  // --- WATCHES ---
  {
    id: 'watch-001',
    name: 'Artisan Leather Classic',
    brand: 'AURUM & CO.',
    category: 'watches',
    price: 1299,
    originalPrice: 1599,
    discount: 19,
    rating: 4.8,
    reviews: 247,
    inStock: true,
    isBestseller: true,
    image: watchImages[0],
    images: watchImages.slice(0, 4),
    shortDescription: 'Handcrafted Swiss timepiece with Italian leather',
    description: 'Handcrafted with precision and passion, this luxury timepiece features genuine Italian leather, sapphire crystal glass, and Swiss-made movement. Each watch is individually numbered and comes with a lifetime warranty.',
    features: ['Swiss Quartz Movement', 'Italian Leather Strap', 'Sapphire Crystal', '50m Water Resistant', '42mm Case'],
    tags: ['luxury', 'leather', 'swiss'],
    colors: [
      { id: 'midnight', name: 'Midnight Black', hex: '#1a1a1a' },
      { id: 'cognac', name: 'Cognac Brown', hex: '#8B4513' },
      { id: 'burgundy', name: 'Burgundy Red', hex: '#722F37' },
    ],
    specifications: { Movement: 'Swiss Quartz Ronda 715', Case: '42mm / 316L Steel', Glass: 'Sapphire Crystal', Water: '50m / 5 ATM' },
  },
  {
    id: 'watch-002',
    name: 'Chronograph I Elite',
    brand: 'AURUM & CO.',
    category: 'watches',
    price: 2499,
    rating: 4.9,
    reviews: 183,
    inStock: true,
    isNew: true,
    image: watchImages[1],
    images: watchImages.slice(1, 5),
    shortDescription: 'Professional chronograph with titanium case',
    description: 'The Chronograph I Elite is engineered for those who demand precision. With its titanium case and automatic movement, it represents the pinnacle of Swiss watchmaking.',
    features: ['Automatic Movement', 'Titanium Case', 'Chronograph Function', '100m Water Resistant', '44mm Case'],
    tags: ['chronograph', 'titanium', 'automatic'],
    colors: [
      { id: 'silver', name: 'Silver', hex: '#C0C0C0' },
      { id: 'black', name: 'Matte Black', hex: '#1a1a1a' },
    ],
    specifications: { Movement: 'ETA 7750 Automatic', Case: '44mm / Titanium', Glass: 'Sapphire Anti-reflective', Water: '100m / 10 ATM' },
  },
  {
    id: 'watch-003',
    name: 'Tourbillon S Prestige',
    brand: 'AURUM & CO.',
    category: 'watches',
    price: 8900,
    rating: 5.0,
    reviews: 42,
    inStock: true,
    image: watchImages[2],
    images: watchImages.slice(2, 6),
    shortDescription: 'Ultra-luxury tourbillon complication',
    description: 'The Tourbillon S Prestige is our crown jewel — a master class in horological engineering. Its flying tourbillon complication, visible through the sapphire caseback, is assembled by a single master watchmaker over 200 hours.',
    features: ['Flying Tourbillon', 'Hand-Engraved Movement', 'Alligator Leather', '18K Rose Gold', '41mm Case'],
    tags: ['tourbillon', 'ultra-luxury', 'gold'],
    colors: [{ id: 'rosegold', name: 'Rose Gold', hex: '#B76E79' }],
    specifications: { Movement: 'In-house Caliber A-08', Case: '41mm / 18K Rose Gold', Glass: 'Double-dome Sapphire', Water: '30m / 3 ATM' },
  },
  {
    id: 'watch-004',
    name: 'Heritage XL Diver',
    brand: 'AURUM & CO.',
    category: 'watches',
    price: 1850,
    rating: 4.7,
    reviews: 128,
    inStock: true,
    image: watchImages[3],
    images: watchImages.slice(3, 7),
    shortDescription: 'Professional dive watch, 300m rated',
    description: 'Built for the deep, the Heritage XL Diver combines rugged capability with refined aesthetics. ISO 6425 certified with a unidirectional rotating bezel and helium escape valve.',
    features: ['300m Water Resistant', 'Unidirectional Bezel', 'Helium Escape Valve', 'Luminous Hands', '45mm Case'],
    tags: ['diver', 'sport', 'steel'],
    colors: [
      { id: 'blue', name: 'Ocean Blue', hex: '#1B3A6B' },
      { id: 'black', name: 'Black', hex: '#1a1a1a' },
    ],
    specifications: { Movement: 'ETA 2824-2 Automatic', Case: '45mm / Super-LumiNova', Glass: 'Sapphire with AR', Water: '300m / 30 ATM' },
  },
  {
    id: 'watch-005',
    name: 'Minimalist Ultra Slim',
    brand: 'AURUM & CO.',
    category: 'watches',
    price: 890,
    originalPrice: 1100,
    discount: 19,
    rating: 4.6,
    reviews: 312,
    inStock: true,
    image: watchImages[4],
    images: watchImages.slice(4, 8),
    shortDescription: 'Elegant ultra-thin dress watch',
    description: 'At just 6.5mm thick, the Minimalist Ultra Slim is the pinnacle of understated elegance. Perfect for formal occasions or everyday refinement.',
    features: ['6.5mm Ultra Thin', 'Mesh Bracelet', 'Quartz Movement', '5 ATM Resistant', '38mm Case'],
    tags: ['slim', 'minimalist', 'dress'],
    colors: [
      { id: 'gold', name: 'Gold', hex: '#CFB53B' },
      { id: 'rose', name: 'Rose', hex: '#B76E79' },
      { id: 'silver', name: 'Silver', hex: '#C0C0C0' },
    ],
    specifications: { Movement: 'Swiss Quartz', Case: '38mm / 316L Steel', Glass: 'Mineral', Water: '30m / 5 ATM', Thickness: '6.5mm' },
  },
  {
    id: 'watch-006',
    name: 'Aviator Pro Chronos',
    brand: 'AURUM & CO.',
    category: 'watches',
    price: 3200,
    rating: 4.8,
    reviews: 94,
    inStock: true,
    isNew: true,
    image: watchImages[5],
    images: watchImages.slice(5, 8),
    shortDescription: 'Pilot chronograph with GMT function',
    description: 'Inspired by cockpit instruments, the Aviator Pro Chronos features a legible dial with oversized Arabic numerals, GMT complication, and a robust cushion-shaped case.',
    features: ['GMT Function', 'Slide Rule Bezel', 'Automatic Movement', '100m Resistant', '46mm Case'],
    tags: ['aviator', 'gmt', 'pilot'],
    colors: [{ id: 'matte', name: 'Matte Black', hex: '#2d2d2d' }],
    specifications: { Movement: 'ETA 7750 Automatic', Case: '46mm / PVD Coated Steel', Glass: 'Sapphire', Water: '100m' },
  },

  // --- JEWELRY ---
  {
    id: 'jewelry-001',
    name: 'Diamond Eternity Band',
    brand: 'AURUM & CO.',
    category: 'jewelry',
    price: 3800,
    rating: 4.9,
    reviews: 76,
    inStock: true,
    isBestseller: true,
    image: jewelryImages[0],
    images: jewelryImages.slice(0, 3),
    shortDescription: '18K gold with VS1 diamonds all around',
    description: 'A breathtaking full eternity band featuring 48 VS1 round brilliant diamonds set in 18K white gold. Total carat weight: 2.40ct.',
    features: ['2.40ct VS1 Diamonds', '18K White Gold', 'Full Eternity Setting', 'Certified Stones', 'Complimentary Engraving'],
    tags: ['diamond', 'ring', 'gold', 'eternity'],
    colors: [
      { id: 'white', name: 'White Gold', hex: '#E8E8E8' },
      { id: 'yellow', name: 'Yellow Gold', hex: '#CFB53B' },
      { id: 'rose', name: 'Rose Gold', hex: '#B76E79' },
    ],
    specifications: { Metal: '18K Gold', Diamonds: '48 × 0.05ct VS1', 'Total Carat': '2.40ct', Width: '3.5mm', Certificate: 'GIA Certified' },
  },
  {
    id: 'jewelry-002',
    name: 'Sapphire Drop Earrings',
    brand: 'AURUM & CO.',
    category: 'jewelry',
    price: 2100,
    originalPrice: 2600,
    discount: 19,
    rating: 4.7,
    reviews: 58,
    inStock: true,
    image: jewelryImages[1],
    images: jewelryImages.slice(1, 4),
    shortDescription: 'Ceylon blue sapphires with diamond halos',
    description: 'Exquisite drop earrings featuring 2 oval Ceylon blue sapphires (4.20ct total) surrounded by brilliant-cut diamond halos in 18K white gold.',
    features: ['4.20ct Ceylon Sapphires', 'Diamond Halo Setting', '18K White Gold', 'Lever-back Closure', 'GIA Certified'],
    tags: ['sapphire', 'earrings', 'drop'],
    specifications: { Metal: '18K White Gold', Sapphires: '2 × 2.10ct Ceylon Blue', Diamonds: '0.85ct Total', Length: '35mm', Certificate: 'GIA' },
  },
  {
    id: 'jewelry-003',
    name: 'Gold Rope Chain',
    brand: 'AURUM & CO.',
    category: 'jewelry',
    price: 1450,
    rating: 4.6,
    reviews: 134,
    inStock: true,
    image: jewelryImages[2],
    images: jewelryImages.slice(2, 5),
    shortDescription: '18K gold rope chain, 5mm wide',
    description: 'A timeless Italian-crafted rope chain in 18K gold. Hand-twisted links create a beautiful interplay of light and shadow. Available in 18", 20", and 22" lengths.',
    features: ['18K Solid Gold', '5mm Wide', 'Hand-twisted Links', 'Lobster Clasp', 'Anti-tarnish Coating'],
    tags: ['chain', 'necklace', 'gold'],
    colors: [
      { id: 'yellow', name: 'Yellow Gold', hex: '#CFB53B' },
      { id: 'white', name: 'White Gold', hex: '#E8E8E8' },
    ],
    specifications: { Metal: '18K Gold', Width: '5mm', Available: '18", 20", 22"', Clasp: 'Lobster', Weight: '18.5g (20")' },
  },
  {
    id: 'jewelry-004',
    name: 'Emerald Cut Pendant',
    brand: 'AURUM & CO.',
    category: 'jewelry',
    price: 4500,
    rating: 4.9,
    reviews: 31,
    inStock: true,
    isNew: true,
    image: jewelryImages[3],
    images: jewelryImages.slice(3, 6),
    shortDescription: 'Emerald solitaire pendant in platinum',
    description: 'A stunning emerald-cut Colombian emerald (3.15ct) suspended in a hand-crafted platinum bezel setting. The vivid green stone is paired with a delicate platinum chain.',
    features: ['3.15ct Colombian Emerald', 'Platinum Setting', 'Vivid Green Grade', '18" Platinum Chain', 'GIA Certificate'],
    tags: ['emerald', 'pendant', 'platinum'],
    specifications: { Metal: 'Platinum 950', Emerald: '3.15ct Colombian', Color: 'Vivid Green', Chain: '18" Platinum', Certificate: 'GIA' },
  },
  {
    id: 'jewelry-005',
    name: 'Pearl Strand Necklace',
    brand: 'AURUM & CO.',
    category: 'jewelry',
    price: 980,
    rating: 4.5,
    reviews: 87,
    inStock: true,
    image: jewelryImages[4],
    images: jewelryImages.slice(4, 6),
    shortDescription: 'South Sea cultured pearl strand, 16"',
    description: 'A classic strand of 36 hand-matched South Sea cultured pearls graduating from 10-12mm. Strung on silk with a diamond-set 18K white gold clasp.',
    features: ['36 South Sea Pearls', '10-12mm Diameter', 'Silk Stringing', 'Diamond Clasp', 'Hand-matched Luster'],
    tags: ['pearl', 'necklace', 'classic'],
    specifications: { Pearls: '36 South Sea Cultured', Size: '10-12mm Graduating', Clasp: 'Diamond Set 18K White Gold', Length: '16"', Luster: 'AAA Grade' },
  },

  // --- ACCESSORIES ---
  {
    id: 'acc-001',
    name: 'Titanium Sunglasses',
    brand: 'AURUM & CO.',
    category: 'accessories',
    price: 620,
    rating: 4.7,
    reviews: 203,
    inStock: true,
    isBestseller: true,
    image: accessoryImages[0],
    images: accessoryImages.slice(0, 3),
    shortDescription: 'Polarized titanium frame sunglasses',
    description: 'Ultra-lightweight titanium frames with polarized mineral glass lenses. UV400 protection with a timeless aviator silhouette.',
    features: ['Titanium Frame', 'Polarized Lenses', 'UV400 Protection', 'Mineral Glass', 'Adjustable Nose Pads'],
    tags: ['sunglasses', 'titanium', 'polarized'],
    colors: [
      { id: 'gold', name: 'Gold / Brown', hex: '#CFB53B' },
      { id: 'silver', name: 'Silver / Grey', hex: '#C0C0C0' },
    ],
    specifications: { Frame: 'Grade 5 Titanium', Lenses: 'Polarized Mineral Glass', Protection: 'UV400', Weight: '18g', Bridge: 'Adjustable' },
  },
  {
    id: 'acc-002',
    name: 'Silk Pocket Square Set',
    brand: 'AURUM & CO.',
    category: 'accessories',
    price: 185,
    originalPrice: 240,
    discount: 23,
    rating: 4.6,
    reviews: 156,
    inStock: true,
    image: accessoryImages[1],
    images: accessoryImages.slice(1, 4),
    shortDescription: 'Italian silk pocket squares, set of 3',
    description: 'Handmade in Como, Italy from 100% pure silk. This curated set of three features hand-rolled edges and exclusive AURUM & CO. prints.',
    features: ['100% Pure Silk', 'Hand-rolled Edges', 'Como Italy Made', 'Set of 3', 'Gift Box Included'],
    tags: ['pocket square', 'silk', 'accessories'],
    colors: [
      { id: 'blue', name: 'Navy Set', hex: '#1B3A6B' },
      { id: 'red', name: 'Burgundy Set', hex: '#722F37' },
      { id: 'neutral', name: 'Neutral Set', hex: '#8B7355' },
    ],
    specifications: { Material: '100% Silk Twill', Made: 'Como, Italy', Edges: 'Hand-rolled', Size: '33 × 33cm', Pieces: '3 per set' },
  },
  {
    id: 'acc-003',
    name: 'Cashmere Scarf',
    brand: 'AURUM & CO.',
    category: 'accessories',
    price: 380,
    rating: 4.8,
    reviews: 91,
    inStock: true,
    isNew: true,
    image: accessoryImages[2],
    images: accessoryImages.slice(2, 4),
    shortDescription: 'Scottish cashmere, double-faced weave',
    description: 'Woven in the Scottish Highlands from Grade A cashmere, this double-faced scarf offers warmth without bulk. Each piece requires 4 months of preparation.',
    features: ['Grade A Cashmere', 'Double-faced Weave', 'Scottish Made', '200 × 30cm', 'Gift Wrapped'],
    tags: ['scarf', 'cashmere', 'winter'],
    colors: [
      { id: 'camel', name: 'Camel', hex: '#C19A6B' },
      { id: 'charcoal', name: 'Charcoal', hex: '#4a4a4a' },
      { id: 'ivory', name: 'Ivory', hex: '#FFFFF0' },
    ],
    specifications: { Material: '100% Grade A Cashmere', Made: 'Scotland', Size: '200 × 30cm', Weave: 'Double-faced', Ply: '2-ply' },
  },
  {
    id: 'acc-004',
    name: 'Carbon Fiber Cufflinks',
    brand: 'AURUM & CO.',
    category: 'accessories',
    price: 295,
    rating: 4.7,
    reviews: 68,
    inStock: true,
    image: accessoryImages[3],
    images: accessoryImages.slice(3, 4),
    shortDescription: 'Carbon fiber & sterling silver cufflinks',
    description: 'A contemporary fusion of aerospace-grade carbon fiber with polished sterling silver. The bullet-back mechanism ensures a secure fit throughout the day.',
    features: ['Aerospace Carbon Fiber', 'Sterling Silver Frame', 'Bullet-back Closure', 'Engraving Available', 'Presentation Box'],
    tags: ['cufflinks', 'carbon fiber', 'formal'],
    specifications: { Material: 'Carbon Fiber / Sterling Silver', Closure: 'Bullet-back', Size: '18 × 12mm', Finish: 'Mirror Polish', Engraving: 'Available' },
  },

  // --- FRAGRANCES ---
  {
    id: 'frag-001',
    name: 'Oud & Amber Noir',
    brand: 'AURUM & CO.',
    category: 'fragrances',
    price: 420,
    rating: 4.9,
    reviews: 178,
    inStock: true,
    isBestseller: true,
    image: fragranceImages[0],
    images: fragranceImages.slice(0, 3),
    shortDescription: 'Intense oriental oud fragrance, 100ml',
    description: 'A captivating oriental fragrance opening with saffron and bergamot, evolving into a heart of rare Cambodian oud, and settling into a base of amber, sandalwood, and musk.',
    features: ['Top: Saffron & Bergamot', 'Heart: Cambodian Oud', 'Base: Amber & Sandalwood', '100ml Bottle', 'Extrait de Parfum (40%)'],
    tags: ['oud', 'oriental', 'extrait'],
    specifications: { Concentration: 'Extrait de Parfum', Volume: '100ml', Family: 'Oriental Woody', Sillage: 'Heavy', Longevity: '12+ hours' },
  },
  {
    id: 'frag-002',
    name: 'Geneva Morning',
    brand: 'AURUM & CO.',
    category: 'fragrances',
    price: 280,
    originalPrice: 340,
    discount: 18,
    rating: 4.7,
    reviews: 234,
    inStock: true,
    image: fragranceImages[1],
    images: fragranceImages.slice(1, 4),
    shortDescription: 'Fresh aromatic fougère, 75ml EDP',
    description: 'Inspired by crisp Geneva mornings beside Lake Léman. A sparkling citrus opening gives way to an aromatic heart of lavender and vetiver, finishing with cedarwood.',
    features: ['Top: Bergamot & Lemon', 'Heart: Lavender & Vetiver', 'Base: Cedarwood & Musk', '75ml Bottle', 'Eau de Parfum (20%)'],
    tags: ['fresh', 'fougere', 'daily'],
    specifications: { Concentration: 'Eau de Parfum', Volume: '75ml', Family: 'Aromatic Fougère', Sillage: 'Moderate', Longevity: '7-8 hours' },
  },
  {
    id: 'frag-003',
    name: 'Blanc de Rose',
    brand: 'AURUM & CO.',
    category: 'fragrances',
    price: 350,
    rating: 4.8,
    reviews: 142,
    inStock: true,
    isNew: true,
    image: fragranceImages[2],
    images: fragranceImages.slice(2, 4),
    shortDescription: 'Luxurious white rose & musk, 50ml',
    description: 'A luminous floral fragrance centered around Bulgarian rose absolute, soft white musk, and a hint of vanilla. Feminine yet architectural.',
    features: ['Top: Lychee & Pear', 'Heart: Bulgarian Rose', 'Base: White Musk & Vanilla', '50ml Bottle', 'Eau de Parfum (18%)'],
    tags: ['rose', 'floral', 'feminine'],
    specifications: { Concentration: 'Eau de Parfum', Volume: '50ml', Family: 'Floral', Sillage: 'Soft', Longevity: '6-8 hours' },
  },
  {
    id: 'frag-004',
    name: 'Dark Cedar Reserve',
    brand: 'AURUM & CO.',
    category: 'fragrances',
    price: 390,
    rating: 4.8,
    reviews: 89,
    inStock: true,
    image: fragranceImages[3],
    images: fragranceImages.slice(3, 4),
    shortDescription: 'Smoky cedar & leather, 100ml EDP',
    description: 'A bold, masculine fragrance for the discerning gentleman. Smoky cedarwood, aged leather, and a touch of black pepper create an unforgettable signature.',
    features: ['Top: Black Pepper & Cardamom', 'Heart: Smoked Cedar', 'Base: Leather & Patchouli', '100ml Bottle', 'Eau de Parfum (22%)'],
    tags: ['cedar', 'leather', 'masculine'],
    specifications: { Concentration: 'Eau de Parfum', Volume: '100ml', Family: 'Woody Oriental', Sillage: 'Strong', Longevity: '10+ hours' },
  },

  // --- LEATHER GOODS ---
  {
    id: 'leather-001',
    name: 'Grand Tour Duffel',
    brand: 'AURUM & CO.',
    category: 'leather',
    price: 1850,
    rating: 4.9,
    reviews: 63,
    inStock: true,
    isBestseller: true,
    image: leatherImages[0],
    images: leatherImages.slice(0, 3),
    shortDescription: 'Full-grain calfskin travel duffel, 40L',
    description: 'The Grand Tour Duffel is crafted from a single hide of full-grain French calfskin. With its hand-stitched construction and solid brass hardware, it improves with age.',
    features: ['Full-grain Calfskin', 'Solid Brass Hardware', 'Cotton Twill Interior', '40L Capacity', '30-Year Guarantee'],
    tags: ['bag', 'travel', 'leather', 'duffel'],
    colors: [
      { id: 'tan', name: 'Havana Tan', hex: '#C19A6B' },
      { id: 'dark', name: 'Midnight Dark', hex: '#1a1a1a' },
      { id: 'cognac', name: 'Cognac', hex: '#8B4513' },
    ],
    specifications: { Material: 'Full-grain French Calfskin', Hardware: 'Solid Brass', Interior: 'Cotton Twill', Dimensions: '52 × 28 × 28cm', Capacity: '40L' },
  },
  {
    id: 'leather-002',
    name: 'Bifold Card Holder',
    brand: 'AURUM & CO.',
    category: 'leather',
    price: 245,
    originalPrice: 295,
    discount: 17,
    rating: 4.7,
    reviews: 319,
    inStock: true,
    image: leatherImages[1],
    images: leatherImages.slice(1, 4),
    shortDescription: 'Slim bifold wallet in saffiano leather',
    description: 'Minimalist and refined, this bifold wallet is crafted from scratch-resistant saffiano leather. Holds 8 cards and features a central banknote compartment.',
    features: ['Saffiano Leather', '8 Card Slots', 'Banknote Compartment', 'RFID Blocking', 'Slim 6mm Profile'],
    tags: ['wallet', 'slim', 'saffiano'],
    colors: [
      { id: 'black', name: 'Black', hex: '#1a1a1a' },
      { id: 'navy', name: 'Navy', hex: '#1B3A6B' },
      { id: 'tan', name: 'Tan', hex: '#C19A6B' },
    ],
    specifications: { Material: 'Saffiano Leather', Cards: '8 slots', Thickness: '6mm', Protection: 'RFID Blocking', Size: '10.5 × 8.5cm' },
  },
  {
    id: 'leather-003',
    name: 'Executive Document Case',
    brand: 'AURUM & CO.',
    category: 'leather',
    price: 980,
    rating: 4.8,
    reviews: 47,
    inStock: true,
    isNew: true,
    image: leatherImages[2],
    images: leatherImages.slice(2, 4),
    shortDescription: 'Full-grain leather briefcase for A4',
    description: 'The Executive Document Case carries your essentials with quiet authority. Hand-stitched by a single artisan, it features a padded laptop compartment and multiple organizer pockets.',
    features: ['Full-grain Leather', 'Padded 15" Laptop Slot', 'Hand-stitched', 'Solid Brass Locks', '5 Interior Pockets'],
    tags: ['briefcase', 'business', 'leather'],
    colors: [
      { id: 'dark', name: 'Ebony', hex: '#2d2d2d' },
      { id: 'cognac', name: 'Cognac', hex: '#8B4513' },
    ],
    specifications: { Material: 'Full-grain Leather', Laptop: 'Up to 15"', Pockets: '5 interior', Hardware: 'Solid Brass Locks', Dimensions: '40 × 30 × 8cm' },
  },
  {
    id: 'leather-004',
    name: 'Suede Chelsea Belt',
    brand: 'AURUM & CO.',
    category: 'leather',
    price: 195,
    rating: 4.5,
    reviews: 112,
    inStock: true,
    image: leatherImages[3],
    images: leatherImages.slice(3, 4),
    shortDescription: 'Reversible suede & smooth leather belt',
    description: 'A versatile reversible belt featuring premium suede on one side and smooth calfskin on the other. The solid brass buckle is engraved with the AURUM & CO. monogram.',
    features: ['Reversible Design', 'Suede & Smooth Calfskin', 'Engraved Brass Buckle', '35mm Width', 'Sizes 30-44'],
    tags: ['belt', 'suede', 'reversible'],
    colors: [
      { id: 'tan-black', name: 'Tan / Black', hex: '#C19A6B' },
      { id: 'brown-navy', name: 'Brown / Navy', hex: '#8B4513' },
    ],
    specifications: { Material: 'Suede / Smooth Calfskin', Buckle: 'Solid Brass (Engraved)', Width: '35mm', Sizes: '30 to 44 (US)', Adjustment: 'Trim-to-fit' },
  },
];

export const mockUsers: User[] = [
  {
    id: 'user-001',
    name: 'James Harrington',
    email: 'user@demo.com',
    password: 'demo123',
    role: 'user',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=James',
    joinDate: '2023-03-15',
    orders: 7,
    totalSpent: 12480,
    wishlist: ['watch-002', 'jewelry-001', 'leather-001'],
  },
  {
    id: 'admin-001',
    name: 'Sophie Laurent',
    email: 'admin@demo.com',
    password: 'admin123',
    role: 'admin',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sophie',
    joinDate: '2022-01-10',
    orders: 0,
    totalSpent: 0,
    wishlist: [],
  },
];

export const mockOrders: Order[] = [
  {
    id: 'ORD-2024-001',
    userId: 'user-001',
    date: '2024-11-20',
    status: 'delivered',
    items: [
      { productId: 'watch-001', name: 'Artisan Leather Classic', price: 1299, quantity: 1, image: watchImages[0] },
    ],
    total: 1299,
    shippingAddress: '14 Rue de Rivoli, Paris 75001, France',
    trackingNumber: 'AU-TRK-882014X',
  },
  {
    id: 'ORD-2024-002',
    userId: 'user-001',
    date: '2024-12-05',
    status: 'shipped',
    items: [
      { productId: 'jewelry-001', name: 'Diamond Eternity Band', price: 3800, quantity: 1, image: jewelryImages[0] },
      { productId: 'frag-001', name: 'Oud & Amber Noir', price: 420, quantity: 2, image: fragranceImages[0] },
    ],
    total: 4640,
    shippingAddress: '14 Rue de Rivoli, Paris 75001, France',
    trackingNumber: 'AU-TRK-994821Z',
  },
  {
    id: 'ORD-2025-001',
    userId: 'user-001',
    date: '2025-01-18',
    status: 'processing',
    items: [
      { productId: 'leather-001', name: 'Grand Tour Duffel', price: 1850, quantity: 1, image: leatherImages[0] },
      { productId: 'acc-001', name: 'Titanium Sunglasses', price: 620, quantity: 1, image: accessoryImages[0] },
    ],
    total: 2470,
    shippingAddress: '14 Rue de Rivoli, Paris 75001, France',
  },
  {
    id: 'ORD-2025-002',
    userId: 'user-001',
    date: '2025-02-28',
    status: 'delivered',
    items: [
      { productId: 'watch-003', name: 'Tourbillon S Prestige', price: 8900, quantity: 1, image: watchImages[2] },
    ],
    total: 8900,
    shippingAddress: '14 Rue de Rivoli, Paris 75001, France',
    trackingNumber: 'AU-TRK-117633A',
  },
  {
    id: 'ORD-2025-003',
    userId: 'user-001',
    date: '2025-03-10',
    status: 'pending',
    items: [
      { productId: 'acc-003', name: 'Cashmere Scarf', price: 380, quantity: 1, image: accessoryImages[2] },
      { productId: 'leather-002', name: 'Bifold Card Holder', price: 245, quantity: 1, image: leatherImages[1] },
    ],
    total: 625,
    shippingAddress: '14 Rue de Rivoli, Paris 75001, France',
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: 'blog-001',
    slug: 'art-of-the-tourbillon',
    title: 'The Art of the Tourbillon: 200 Hours of Genius',
    excerpt: 'Few complications in watchmaking command more reverence than the tourbillon. We go inside the AURUM & CO. atelier to witness its creation.',
    content: `The tourbillon is watchmaking's greatest achievement — a rotating cage that defeats gravity itself. Abraham-Louis Breguet patented it in 1801, and over two centuries later, it remains the ultimate test of a watchmaker's skill.

Inside the AURUM & CO. atelier in Geneva, Master Watchmaker Jean-Pierre Ducret dedicates 200 solitary hours to each Tourbillon S Prestige. The cage itself contains 72 individual components, each weighing less than 0.04 grams.

"You cannot hurry a tourbillon," Ducret says, his loupe raised, hands impossibly steady. "It asks for your patience before it gives you its perfection."

The process begins with the rough cutting of brass plates, progressing through dozens of stages of filing, beveling, and polishing. Every surface that the eye can see must be either mirror-polished or decorated with fine Geneva stripes — a rule that applies even to surfaces visible only through a microscope.

The result is a movement that not only keeps perfect time but does so with a theatrical beauty that transcends function entirely.`,
    author: 'Édouard Martel',
    date: '2025-01-15',
    category: 'Craftsmanship',
    image: watchImages[2],
    readTime: 6,
  },
  {
    id: 'blog-002',
    slug: 'guide-to-luxury-leather',
    title: 'A Gentleman\'s Guide to Luxury Leather Goods',
    excerpt: 'From full-grain to saffiano: understanding the leather that defines true luxury, and how to care for it over a lifetime.',
    content: `Not all leather is created equal. The difference between a €50 belt and a €500 one isn't just branding — it's in the hide itself, the tanning method, and the hands that shaped it.

Full-grain leather sits at the pinnacle. It uses the entire outer surface of the hide, with all natural markings intact. This means each piece is unique, and crucially, it develops a patina over years of use — deepening in color, softening in texture, becoming more beautiful with time.

Corrected-grain and bonded leathers, used in mass-market goods, are sanded down and embossed with artificial patterns. They look uniform in the shop but crack and peel within years.

When we source leather for our Grand Tour Duffel, we visit tanneries in the Veneto region of Italy that have been producing leather for four generations. The hides spend 60 days in vegetable tannins — a process the industry largely abandoned decades ago in favor of faster chemical methods. The result is leather that breathes, ages, and develops character.

**Caring for your investment:**
- Clean with a soft, dry cloth after each use
- Condition with a quality leather cream twice per year
- Store in a dust bag away from direct sunlight
- Never saturate with water — if wet, let dry naturally away from heat`,
    author: 'Camille Bonnaire',
    date: '2025-02-03',
    category: 'Style',
    image: leatherImages[0],
    readTime: 7,
  },
  {
    id: 'blog-003',
    slug: 'fragrance-layering-guide',
    title: 'The Subtle Art of Fragrance Layering',
    excerpt: 'Master perfumers have long known that the most distinctive signatures come not from a single fragrance, but from the art of layering.',
    content: `In Grasse, the birthplace of modern perfumery, master perfumers have always worn their own creations in layers — building a personal scent as complex and individual as a fingerprint.

The principle is straightforward: wear a base layer on skin (something rich and warm, like Oud & Amber Noir applied to pulse points), followed by a lighter fragrance on clothing (Geneva Morning sprayed across your shirt).

The skin fragrance evolves with your body chemistry. The clothing fragrance remains truer to the bottle composition, creating a duality that shifts throughout the day.

**The AURUM & CO. Layering System:**
- **Foundation:** Oud & Amber Noir on the inner wrists and behind the knees — the warmest points of the body
- **Complement:** Geneva Morning misted lightly across the chest and shoulders  
- **Finishing touch:** A single spray of Blanc de Rose into the hair for a soft, diffusive trail

Allow 30 seconds between applications. The result is a signature that no single fragrance could achieve alone.`,
    author: 'Isabelle Verne',
    date: '2025-02-28',
    category: 'Lifestyle',
    image: fragranceImages[0],
    readTime: 5,
  },
  {
    id: 'blog-004',
    slug: 'history-of-geneva-watchmaking',
    title: 'Geneva 1750: The Birth of a Watchmaking Empire',
    excerpt: 'How a city of 25,000 souls became the center of the world\'s most precise industry — and why it still is today.',
    content: `In the mid-18th century, Geneva faced an unusual problem. The city's dominant industry — silk weaving — had been decimated by competition from Lyon. The magistrates needed a new craft, one that rewarded the dexterity and precision their workers already possessed.

Enter watchmaking.

By 1800, Geneva and the surrounding Jura mountains contained more watchmakers than anywhere else on earth. The industry became self-reinforcing: master watchmakers trained apprentices, who trained more apprentices. Specialized suppliers grew up around the workshops — dial makers, spring makers, jewel setters, case manufacturers — creating an ecosystem that made Geneva uniquely efficient.

The "Swiss Made" label, now controlled by law to mean at least 60% Swiss content and final assembly in Switzerland, became the most powerful mark of quality in any industry, anywhere in the world.

AURUM & CO. was founded in Geneva in 1985 by master watchmaker Henri Aurum, a fourth-generation horologist who trained under the legendary Philippe Dufour. Our movements are still regulated by hand in our original atelier on Rue de Montbrillant.`,
    author: 'Édouard Martel',
    date: '2025-03-12',
    category: 'Heritage',
    image: watchImages[0],
    readTime: 8,
  },
  {
    id: 'blog-005',
    slug: 'diamond-buying-guide',
    title: 'The 4Cs Decoded: Buying Diamonds With Confidence',
    excerpt: 'Cut, color, clarity, and carat. We break down the four pillars of diamond quality so you can make the right choice.',
    content: `Diamonds are graded by four characteristics — cut, color, clarity, and carat weight — collectively known as the 4Cs. Understanding these helps you make an informed purchase, rather than relying solely on price.

**Cut** is the most important factor. A well-cut diamond reflects light from facet to facet, creating the characteristic brilliance we associate with diamonds. GIA grades cuts from Excellent to Poor. Always prioritize Excellent or Very Good.

**Color** is graded D (colorless) to Z (light yellow). The difference between D and G is virtually invisible to the naked eye, but significantly affects price. For most settings, G-H offers outstanding value.

**Clarity** measures internal inclusions and surface blemishes. VS1 to VS2 are "eye-clean" (no inclusions visible without magnification) and provide excellent value against flawless or internally flawless stones.

**Carat** refers to weight, not size. A poorly cut 1.00ct diamond will appear smaller than a well-cut 0.90ct stone. Do not chase carat weight at the expense of cut.

All diamonds used in AURUM & CO. jewelry are GIA certified, sourced from conflict-free mines, and meet our minimum standards of VS1 clarity and G color.`,
    author: 'Camille Bonnaire',
    date: '2025-03-28',
    category: 'Education',
    image: jewelryImages[0],
    readTime: 6,
  },
  {
    id: 'blog-006',
    slug: 'spring-collection-2025',
    title: 'Spring 2025: A New Chapter for AURUM & CO.',
    excerpt: 'Our creative director introduces three new pieces that define the aesthetic direction of the house for the season ahead.',
    content: `Spring 2025 marks a significant moment for AURUM & CO. After two years of development, we are proud to introduce three new pieces that reaffirm our commitment to excellence while embracing the spirit of renewal.

**The Aviator Pro Chronos** represents our boldest watch design in a decade. Drawing inspiration from mid-century aviation instruments, its cushion-shaped case and textured dial create an aesthetic that is both vintage and unmistakably contemporary.

**Blanc de Rose** is our first feminine fragrance in three years. Developed by Isabelle Verne, it centers on a Bulgarian rose absolute sourced from a single cooperative in Kazanlak, Bulgaria — a rose that blooms for just three weeks each year.

**The Emerald Cut Pendant** completes the triptych. Set in platinum with a vivid Colombian emerald, it is the first piece in our new "Chromatic" jewelry line, which will explore colored gemstones in depth over the next five years.

These three pieces will be available exclusively in our boutiques from April 1st, and online from April 15th.`,
    author: 'Sophie Laurent',
    date: '2025-04-01',
    category: 'New Arrivals',
    image: watchImages[5],
    readTime: 4,
  },
];

export const categoryInfo = {
  watches: { label: 'Timepieces', description: 'Swiss-made precision timepieces', icon: '⌚', hero: watchImages[0] },
  jewelry: { label: 'Fine Jewelry', description: 'Certified diamonds & precious gemstones', icon: '💎', hero: jewelryImages[0] },
  accessories: { label: 'Accessories', description: 'Curated lifestyle accessories', icon: '🕶️', hero: accessoryImages[0] },
  fragrances: { label: 'Fragrances', description: 'Rare & exclusive perfumes', icon: '🌸', hero: fragranceImages[0] },
  leather: { label: 'Leather Goods', description: 'Full-grain leather craftsmanship', icon: '👜', hero: leatherImages[0] },
};

export const getProductById = (id: string) => products.find(p => p.id === id);
export const getProductsByCategory = (category: Category) => products.filter(p => p.category === category);
export const getFeaturedProducts = () => products.filter(p => p.isBestseller || p.isNew).slice(0, 8);
export const getRelatedProducts = (id: string, category: Category) => 
  products.filter(p => p.category === category && p.id !== id).slice(0, 4);
