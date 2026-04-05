import { useState } from 'react';
import { useRoute, Link } from 'wouter';
import { motion } from 'framer-motion';
import { Star, ShoppingBag, Heart, ArrowLeft, Shield, Truck, RefreshCw, ChevronDown, ChevronUp } from 'lucide-react';
import { getProductById, getRelatedProducts } from '../data/mockData';
import useCartStore from '../store/cartStore';
import useAuthStore from '../store/authStore';
import ProductCard from '../components/ProductCard';

export default function ProductDetailPage() {
  const [, params] = useRoute('/product/:id');
  const product = getProductById(params?.id || '');
  const [selectedImg, setSelectedImg] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0]);
  const [quantity, setQuantity] = useState(1);
  const [expandedSpec, setExpandedSpec] = useState(true);
  const { addItem } = useCartStore();
  const { isAuthenticated, isInWishlist, addToWishlist, removeFromWishlist } = useAuthStore();

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-neutral-50 dark:bg-neutral-950">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">Product Not Found</h2>
          <Link href="/shop">
            <button className="px-6 py-3 bg-amber-600 text-white rounded-xl font-semibold hover:bg-amber-700 transition-colors">
              Back to Shop
            </button>
          </Link>
        </div>
      </div>
    );
  }

  const related = getRelatedProducts(product.id, product.category);
  const inWishlist = isInWishlist(product.id);

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity,
      image: product.image,
      colorId: selectedColor?.id,
      colorName: selectedColor?.name,
      colorHex: selectedColor?.hex,
      category: product.category,
      brand: product.brand,
    });
  };

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center gap-2 text-sm text-neutral-500 mb-8">
          <Link href="/shop"><span className="hover:text-amber-600 cursor-pointer transition-colors">Shop</span></Link>
          <span>/</span>
          <Link href={`/shop/${product.category}`}><span className="hover:text-amber-600 cursor-pointer transition-colors capitalize">{product.category}</span></Link>
          <span>/</span>
          <span className="text-neutral-900 dark:text-white">{product.name}</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-3xl bg-neutral-100 dark:bg-neutral-800 aspect-square">
              <img src={product.images[selectedImg] || product.image} alt={product.name} className="w-full h-full object-cover" />
              {product.isNew && (
                <span className="absolute top-4 left-4 px-3 py-1.5 bg-amber-600 text-white text-xs font-bold rounded-full">NEW</span>
              )}
              {product.discount && (
                <span className="absolute top-4 right-4 px-3 py-1.5 bg-red-500 text-white text-xs font-bold rounded-full">-{product.discount}%</span>
              )}
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImg(i)}
                    className={`w-16 h-16 rounded-xl overflow-hidden border-2 transition-all ${selectedImg === i ? 'border-amber-600 scale-105' : 'border-transparent hover:border-neutral-300'}`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-xs tracking-[0.3em] text-amber-600 dark:text-amber-400 uppercase mb-2">{product.brand}</p>
              <h1 className="text-3xl font-bold text-neutral-900 dark:text-white font-serif">{product.name}</h1>
              <div className="flex items-center gap-3 mt-3">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-amber-400 fill-amber-400' : 'text-neutral-300'}`} />
                  ))}
                </div>
                <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">{product.rating}</span>
                <span className="text-sm text-neutral-400">({product.reviews} reviews)</span>
              </div>
            </div>

            <div className="flex items-baseline gap-3">
              <span className="text-4xl font-bold text-neutral-900 dark:text-white">${product.price.toLocaleString()}</span>
              {product.originalPrice && (
                <span className="text-xl text-neutral-400 line-through">${product.originalPrice.toLocaleString()}</span>
              )}
              {product.discount && (
                <span className="px-2 py-0.5 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-sm font-bold rounded-lg">
                  Save ${(product.originalPrice! - product.price).toLocaleString()}
                </span>
              )}
            </div>

            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">{product.description}</p>

            {product.colors && product.colors.length > 0 && (
              <div>
                <p className="text-sm font-semibold text-neutral-900 dark:text-white mb-3">
                  Color: <span className="text-amber-600">{selectedColor?.name}</span>
                </p>
                <div className="flex gap-3">
                  {product.colors.map(color => (
                    <button
                      key={color.id}
                      onClick={() => setSelectedColor(color)}
                      title={color.name}
                      className={`w-9 h-9 rounded-full border-4 transition-all ${selectedColor?.id === color.id ? 'border-amber-600 scale-110' : 'border-neutral-300 dark:border-neutral-600 hover:border-amber-400'}`}
                      style={{ backgroundColor: color.hex }}
                    />
                  ))}
                </div>
              </div>
            )}

            <div>
              <p className="text-sm font-semibold text-neutral-900 dark:text-white mb-3">Quantity</p>
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-neutral-200 dark:border-neutral-700 rounded-xl overflow-hidden">
                  <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="px-4 py-3 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors text-neutral-700 dark:text-neutral-300 text-lg">−</button>
                  <span className="px-6 py-3 font-bold text-neutral-900 dark:text-white">{quantity}</span>
                  <button onClick={() => setQuantity(q => Math.min(10, q + 1))} className="px-4 py-3 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors text-neutral-700 dark:text-neutral-300 text-lg">+</button>
                </div>
                <span className="text-sm text-green-600 dark:text-green-400 font-medium">● In Stock</span>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={handleAddToCart}
                className="flex-1 py-4 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-2xl transition-colors flex items-center justify-center gap-2 shadow-lg shadow-amber-600/20 text-base"
              >
                <ShoppingBag className="w-5 h-5" /> Add to Cart
              </button>
              <button
                onClick={() => { if (!isAuthenticated) return; if (inWishlist) removeFromWishlist(product.id); else addToWishlist(product.id); }}
                className={`p-4 rounded-2xl border-2 transition-all ${inWishlist ? 'border-red-500 bg-red-50 dark:bg-red-900/20 text-red-500' : 'border-neutral-200 dark:border-neutral-700 text-neutral-500 hover:border-red-300 hover:text-red-500'}`}
              >
                <Heart className={`w-5 h-5 ${inWishlist ? 'fill-current' : ''}`} />
              </button>
            </div>

            <div className="grid grid-cols-3 gap-3 pt-2">
              {[
                { icon: Truck, title: 'Free Shipping', sub: 'Worldwide' },
                { icon: Shield, title: 'Authenticity', sub: 'Guaranteed' },
                { icon: RefreshCw, title: '60-Day Returns', sub: 'No questions' },
              ].map(item => (
                <div key={item.title} className="text-center py-4 px-2 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
                  <item.icon className="w-4 h-4 text-amber-600 mx-auto mb-1" />
                  <p className="text-xs font-bold text-neutral-900 dark:text-white">{item.title}</p>
                  <p className="text-xs text-neutral-500 mt-0.5">{item.sub}</p>
                </div>
              ))}
            </div>

            {product.specifications && (
              <div className="border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden">
                <button
                  onClick={() => setExpandedSpec(!expandedSpec)}
                  className="w-full flex items-center justify-between px-5 py-4 bg-white dark:bg-neutral-900 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
                >
                  <span className="font-semibold text-sm text-neutral-900 dark:text-white">Specifications</span>
                  {expandedSpec ? <ChevronUp className="w-4 h-4 text-neutral-500" /> : <ChevronDown className="w-4 h-4 text-neutral-500" />}
                </button>
                {expandedSpec && (
                  <div className="bg-neutral-50 dark:bg-neutral-800/50 px-5 pb-4 divide-y divide-neutral-100 dark:divide-neutral-800">
                    {Object.entries(product.specifications).map(([key, val]) => (
                      <div key={key} className="flex justify-between py-2.5 text-sm">
                        <span className="text-neutral-500 dark:text-neutral-400">{key}</span>
                        <span className="font-medium text-neutral-900 dark:text-white text-right max-w-[60%]">{val}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {related.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold font-serif text-neutral-900 dark:text-white mb-8">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {related.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
