import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { motion } from 'framer-motion';
import { CreditCard, Lock, ChevronRight } from 'lucide-react';
import useCartStore from '../store/cartStore';

export default function CheckoutPage() {
  const [, navigate] = useLocation();
  const { items, clearCart } = useCartStore();
  const subtotal = items.reduce((s, i) => s + i.price * i.quantity, 0);
  const tax = Math.round(subtotal * 0.08);
  const total = subtotal + tax;
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', address: '', city: '', country: 'France', zip: '',
    cardName: '', cardNumber: '', expiry: '', cvv: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async () => {
    setLoading(true);
    await new Promise(r => setTimeout(r, 1500));
    clearCart();
    navigate('/order-confirmation');
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">Your cart is empty</h2>
          <Link href="/shop"><button className="px-6 py-3 bg-amber-600 text-white rounded-xl font-semibold">Shop Now</button></Link>
        </div>
      </div>
    );
  }

  const Field = ({ label, name, placeholder, type = 'text', half = false }: { label: string; name: string; placeholder: string; type?: string; half?: boolean }) => (
    <div className={half ? 'col-span-1' : 'col-span-2'}>
      <label className="block text-xs font-semibold text-neutral-600 dark:text-neutral-400 mb-1.5">{label}</label>
      <input name={name} type={type} placeholder={placeholder} value={(form as any)[name]} onChange={handleChange}
        className="w-full px-4 py-3 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-sm text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500 placeholder-neutral-400" />
    </div>
  );

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <Link href="/"><span className="text-xl font-bold font-serif tracking-widest text-amber-600 cursor-pointer">AURUM & CO.</span></Link>
          <div className="flex items-center justify-center gap-4 mt-6">
            {['Shipping', 'Payment', 'Review'].map((s, i) => (
              <div key={s} className="flex items-center gap-2">
                <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${step > i + 1 ? 'bg-green-500 text-white' : step === i + 1 ? 'bg-amber-600 text-white' : 'bg-neutral-200 dark:bg-neutral-700 text-neutral-500'}`}>
                  {step > i + 1 ? '✓' : i + 1}
                </div>
                <span className={`text-sm font-medium hidden sm:block ${step === i + 1 ? 'text-amber-600' : 'text-neutral-400'}`}>{s}</span>
                {i < 2 && <ChevronRight className="w-4 h-4 text-neutral-300 dark:text-neutral-600" />}
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {step === 1 && (
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="bg-white dark:bg-neutral-900 rounded-3xl border border-neutral-200 dark:border-neutral-800 p-8">
                <h2 className="text-xl font-bold text-neutral-900 dark:text-white mb-6">Shipping Information</h2>
                <div className="grid grid-cols-2 gap-4">
                  <Field label="First Name" name="firstName" placeholder="James" half />
                  <Field label="Last Name" name="lastName" placeholder="Harrington" half />
                  <Field label="Email Address" name="email" placeholder="james@example.com" type="email" />
                  <Field label="Street Address" name="address" placeholder="14 Rue de Rivoli" />
                  <Field label="City" name="city" placeholder="Paris" half />
                  <Field label="ZIP Code" name="zip" placeholder="75001" half />
                  <div className="col-span-2">
                    <label className="block text-xs font-semibold text-neutral-600 dark:text-neutral-400 mb-1.5">Country</label>
                    <select name="country" value={form.country} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-sm text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500">
                      {['France', 'United Kingdom', 'Germany', 'Italy', 'Switzerland', 'United States', 'UAE', 'Japan'].map(c => <option key={c}>{c}</option>)}
                    </select>
                  </div>
                </div>
                <button onClick={() => setStep(2)} className="mt-6 w-full py-4 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-2xl transition-colors">Continue to Payment</button>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="bg-white dark:bg-neutral-900 rounded-3xl border border-neutral-200 dark:border-neutral-800 p-8">
                <h2 className="text-xl font-bold text-neutral-900 dark:text-white mb-6">Payment Details</h2>
                <div className="flex items-center gap-2 p-3 bg-green-50 dark:bg-green-900/20 rounded-xl mb-6 text-sm text-green-700 dark:text-green-400">
                  <Lock className="w-4 h-4" /> Your payment information is encrypted and secure
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Field label="Name on Card" name="cardName" placeholder="James Harrington" />
                  <Field label="Card Number" name="cardNumber" placeholder="4242 4242 4242 4242" />
                  <Field label="Expiry Date" name="expiry" placeholder="MM / YY" half />
                  <Field label="CVV" name="cvv" placeholder="123" half />
                </div>
                <div className="flex gap-3 mt-6">
                  <button onClick={() => setStep(1)} className="flex-1 py-4 border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 font-bold rounded-2xl hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors">Back</button>
                  <button onClick={() => setStep(3)} className="flex-1 py-4 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-2xl transition-colors">Review Order</button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="bg-white dark:bg-neutral-900 rounded-3xl border border-neutral-200 dark:border-neutral-800 p-8">
                <h2 className="text-xl font-bold text-neutral-900 dark:text-white mb-6">Review & Confirm</h2>
                <div className="space-y-3 mb-6">
                  {items.map(item => (
                    <div key={`${item.id}-${item.colorId}`} className="flex items-center gap-4 p-4 bg-neutral-50 dark:bg-neutral-800 rounded-xl">
                      <img src={item.image} alt={item.name} className="w-14 h-14 rounded-xl object-cover" />
                      <div className="flex-1">
                        <p className="font-semibold text-sm text-neutral-900 dark:text-white">{item.name}</p>
                        {item.colorName && <p className="text-xs text-neutral-400">{item.colorName}</p>}
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-neutral-900 dark:text-white">${(item.price * item.quantity).toLocaleString()}</p>
                        <p className="text-xs text-neutral-400">Qty: {item.quantity}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex gap-3">
                  <button onClick={() => setStep(2)} className="flex-1 py-4 border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 font-bold rounded-2xl hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors">Back</button>
                  <button onClick={handleSubmit} disabled={loading} className="flex-1 py-4 bg-amber-600 hover:bg-amber-700 disabled:opacity-60 text-white font-bold rounded-2xl transition-colors flex items-center justify-center gap-2">
                    <CreditCard className="w-5 h-5" /> {loading ? 'Processing…' : `Pay $${total.toLocaleString()}`}
                  </button>
                </div>
              </motion.div>
            )}
          </div>

          <div className="bg-white dark:bg-neutral-900 rounded-3xl border border-neutral-200 dark:border-neutral-800 p-6 h-fit sticky top-24">
            <h2 className="text-base font-bold text-neutral-900 dark:text-white mb-4">Order Summary</h2>
            <div className="space-y-3 mb-4">
              {items.map(item => (
                <div key={`${item.id}-${item.colorId}`} className="flex justify-between text-sm">
                  <span className="text-neutral-600 dark:text-neutral-400 truncate mr-2">{item.name} × {item.quantity}</span>
                  <span className="font-semibold text-neutral-900 dark:text-white flex-shrink-0">${(item.price * item.quantity).toLocaleString()}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-neutral-100 dark:border-neutral-800 pt-3 space-y-2 text-sm">
              <div className="flex justify-between text-neutral-500"><span>Subtotal</span><span>${subtotal.toLocaleString()}</span></div>
              <div className="flex justify-between text-neutral-500"><span>Shipping</span><span className="text-green-600">Free</span></div>
              <div className="flex justify-between text-neutral-500"><span>Tax (8%)</span><span>${tax.toLocaleString()}</span></div>
            </div>
            <div className="border-t border-neutral-100 dark:border-neutral-800 pt-3 flex justify-between font-bold text-neutral-900 dark:text-white">
              <span>Total</span><span>${total.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
