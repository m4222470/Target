import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 1200));
    setLoading(false);
    setSent(true);
  };

  const contacts = [
    { icon: MapPin, title: 'Atelier', lines: ['14 Rue de Montbrillant', 'Geneva 1201, Switzerland'] },
    { icon: Phone, title: 'Phone', lines: ['+41 22 999 0100', 'Mon–Fri, 9AM–6PM CET'] },
    { icon: Mail, title: 'Email', lines: ['atelier@aurum-co.com', 'concierge@aurum-co.com'] },
    { icon: Clock, title: 'Hours', lines: ['Monday – Friday: 9AM – 6PM', 'Saturday: 10AM – 4PM'] },
  ];

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.4em] text-amber-600 dark:text-amber-400 uppercase mb-3">Get in Touch</p>
          <h1 className="text-5xl font-bold font-serif text-neutral-900 dark:text-white">Contact Us</h1>
          <p className="text-neutral-500 dark:text-neutral-400 mt-3 max-w-lg mx-auto">Our concierge team is here to assist you with any enquiry, from order questions to personal styling consultations.</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-4">
            {contacts.map(item => (
              <div key={item.title} className="bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-5 flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-900/20 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <p className="text-xs font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-1">{item.title}</p>
                  {item.lines.map(line => <p key={line} className="text-sm font-medium text-neutral-900 dark:text-white">{line}</p>)}
                </div>
              </div>
            ))}

            <div className="bg-amber-600 rounded-2xl p-5 text-white">
              <h3 className="font-bold mb-2">Personal Concierge</h3>
              <p className="text-sm text-amber-100 leading-relaxed">For bespoke orders, private viewings, or gifting advice, our personal concierge service is available 7 days a week.</p>
              <p className="text-sm font-semibold mt-2">concierge@aurum-co.com</p>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-white dark:bg-neutral-900 rounded-3xl border border-neutral-200 dark:border-neutral-800 p-8">
              {sent ? (
                <div className="text-center py-12">
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring' }} className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">Message Sent!</h3>
                  <p className="text-neutral-500 dark:text-neutral-400">We'll respond within 24 hours on business days.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h2 className="text-xl font-bold text-neutral-900 dark:text-white mb-5">Send a Message</h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      { label: 'Your Name', name: 'name', placeholder: 'James Harrington' },
                      { label: 'Email Address', name: 'email', placeholder: 'james@example.com', type: 'email' },
                    ].map(f => (
                      <div key={f.name}>
                        <label className="block text-xs font-semibold text-neutral-600 dark:text-neutral-400 mb-1.5">{f.label}</label>
                        <input name={f.name} type={f.type || 'text'} placeholder={f.placeholder} required
                          value={(form as any)[f.name]} onChange={e => setForm(p => ({ ...p, [f.name]: e.target.value }))}
                          className="w-full px-4 py-3 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-sm text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500 placeholder-neutral-400" />
                      </div>
                    ))}
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-neutral-600 dark:text-neutral-400 mb-1.5">Subject</label>
                    <select name="subject" value={form.subject} onChange={e => setForm(p => ({ ...p, subject: e.target.value }))} required
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-sm text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500">
                      <option value="">Select a topic</option>
                      {['Order Enquiry', 'Product Question', 'Personal Styling', 'Returns & Warranty', 'Press & Partnerships', 'Other'].map(s => <option key={s}>{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-neutral-600 dark:text-neutral-400 mb-1.5">Message</label>
                    <textarea name="message" rows={5} placeholder="How can we assist you?" required
                      value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-sm text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500 placeholder-neutral-400 resize-none" />
                  </div>
                  <button type="submit" disabled={loading} className="w-full py-4 bg-amber-600 hover:bg-amber-700 disabled:opacity-60 text-white font-bold rounded-2xl transition-colors flex items-center justify-center gap-2 shadow-lg shadow-amber-600/20">
                    <Send className="w-4 h-4" /> {loading ? 'Sending…' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
