import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import useAuthStore from '../store/authStore';
import { getProductById } from '../data/mockData';
import ProductCard from '../components/ProductCard';

export default function WishlistPage() {
  const { user, isAuthenticated } = useAuthStore();

  if (!isAuthenticated || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-neutral-50 dark:bg-neutral-950">
        <div className="text-center">
          <Heart className="w-12 h-12 text-neutral-300 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">Sign in to view your Wishlist</h2>
          <p className="text-neutral-500 mb-6">Save your favourite pieces for later.</p>
          <Link href="/login"><button className="px-6 py-3 bg-amber-600 text-white rounded-xl font-semibold hover:bg-amber-700 transition-colors">Sign In</button></Link>
        </div>
      </div>
    );
  }

  const wishlistProducts = user.wishlist.map(id => getProductById(id)).filter(Boolean) as ReturnType<typeof getProductById>[];

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h1 className="text-3xl font-bold font-serif text-neutral-900 dark:text-white">My Wishlist</h1>
          <p className="text-neutral-500 mt-1">{wishlistProducts.length} saved piece{wishlistProducts.length !== 1 ? 's' : ''}</p>
        </div>

        {wishlistProducts.length === 0 ? (
          <div className="text-center py-20">
            <Heart className="w-12 h-12 text-neutral-300 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-neutral-700 dark:text-neutral-300">Your wishlist is empty</h3>
            <p className="text-sm text-neutral-400 mt-2 mb-6">Browse our collections and save the pieces that speak to you.</p>
            <Link href="/shop"><button className="px-8 py-3 bg-amber-600 text-white rounded-xl font-semibold hover:bg-amber-700 transition-colors">Explore Shop</button></Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {wishlistProducts.map((p, i) => p && <ProductCard key={p.id} product={p} index={i} />)}
          </div>
        )}
      </div>
    </div>
  );
}
