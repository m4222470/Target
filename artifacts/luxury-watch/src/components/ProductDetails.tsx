import { motion } from 'framer-motion';
import { Star, Shield, Truck, Award } from 'lucide-react';

interface Product {
  brand: string;
  name: string;
  tagline: string;
  rating: number;
  reviews: number;
  price: number;
  freeShipping: boolean;
  description: string;
  features: string[];
  specifications: Record<string, string>;
}

interface ProductDetailsProps {
  product: Product;
}

const ProductDetails = ({ product }: ProductDetailsProps) => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<Star key={i} className="w-5 h-5 fill-amber-500 text-amber-500" />);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <div key={i} className="relative w-5 h-5">
            <Star className="absolute w-5 h-5 text-neutral-300 dark:text-neutral-600" />
            <div className="absolute w-2.5 h-5 overflow-hidden">
              <Star className="w-5 h-5 fill-amber-500 text-amber-500" />
            </div>
          </div>
        );
      } else {
        stars.push(<Star key={i} className="w-5 h-5 text-neutral-300 dark:text-neutral-600" />);
      }
    }
    return stars;
  };

  return (
    <div className="space-y-8">
      <motion.div {...fadeInUp} className="space-y-2">
        <p className="text-sm font-medium tracking-widest text-amber-600 dark:text-amber-400 uppercase">
          {product.brand}
        </p>
        <h1 className="text-4xl font-bold text-neutral-900 dark:text-neutral-100">
          {product.name}
        </h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-400">{product.tagline}</p>
      </motion.div>

      <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="flex items-center gap-2">
        <div className="flex">{renderStars(product.rating)}</div>
        <span className="text-sm text-neutral-600 dark:text-neutral-400">
          {product.rating} ({product.reviews} reviews)
        </span>
      </motion.div>

      <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
        <p className="text-4xl font-bold text-neutral-900 dark:text-neutral-100">
          ${product.price.toLocaleString()}
        </p>
        {product.freeShipping && (
          <p className="text-sm text-green-600 dark:text-green-400 mt-1">Free shipping included</p>
        )}
      </motion.div>

      <motion.div {...fadeInUp} transition={{ delay: 0.3 }}>
        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">{product.description}</p>
      </motion.div>

      <motion.div {...fadeInUp} transition={{ delay: 0.4 }} className="space-y-3">
        <h3 className="text-sm font-semibold tracking-widest text-neutral-900 dark:text-neutral-100 uppercase">
          Features
        </h3>
        <ul className="grid grid-cols-2 gap-2">
          {product.features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
              <Award className="w-4 h-4 text-amber-600 dark:text-amber-400 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.div {...fadeInUp} transition={{ delay: 0.5 }} className="space-y-3">
        <h3 className="text-sm font-semibold tracking-widest text-neutral-900 dark:text-neutral-100 uppercase">
          Specifications
        </h3>
        <div className="space-y-2">
          {Object.entries(product.specifications).map(([key, value]) => (
            <div
              key={key}
              className="flex justify-between text-sm border-b border-neutral-200 dark:border-neutral-700 pb-2"
            >
              <span className="text-neutral-500 dark:text-neutral-500">
                {key.replace(/([A-Z])/g, ' $1').trim()}
              </span>
              <span className="text-neutral-900 dark:text-neutral-100 font-medium">{value}</span>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div {...fadeInUp} transition={{ delay: 0.6 }} className="flex flex-wrap gap-4 pt-4">
        <div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
          <Shield className="w-5 h-5 text-green-600 dark:text-green-400" />
          Lifetime Warranty
        </div>
        <div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
          <Truck className="w-5 h-5 text-amber-600 dark:text-amber-400" />
          Free Returns
        </div>
        <div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
          <Award className="w-5 h-5 text-amber-600 dark:text-amber-400" />
          Certified Authentic
        </div>
      </motion.div>
    </div>
  );
};

export default ProductDetails;
