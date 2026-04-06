import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';

const initialMessages = [
  { from: 'bot', text: 'Welcome to AURUM & CO. — I\'m your personal horology concierge.' },
  { from: 'bot', text: 'Have questions about our collection, sizing, or craftsmanship? I\'m here to help.' },
];

const quickReplies = [
  'Tell me about the Chronograph I',
  'What\'s included with my purchase?',
  'How does servicing work?',
  'Request an atelier visit',
];

export default function FloatingConcierge() {
  const [open, setOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState(initialMessages);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 180);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    setChatMessages(prev => [...prev, { from: 'user', text }]);
    setInput('');
    setTyping(true);
    setTimeout(() => {
      setChatMessages(prev => [
        ...prev,
        {
          from: 'bot',
          text: 'Thank you for your question. One of our master watchmakers will personally respond within 2 hours. For urgent assistance, call us at +41 22 999 0100.',
        },
      ]);
      setTyping(false);
    }, 1500);
  };

  return (
    <div className="fixed bottom-6 right-4 md:bottom-8 md:right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.88, y: 16 }}
            transition={{ type: 'spring', damping: 26, stiffness: 320 }}
            className="w-[22rem] max-w-[calc(100vw-2rem)] bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl border border-neutral-200 dark:border-neutral-700 overflow-hidden flex flex-col"
            style={{ maxHeight: '460px' }}
          >
            {/* Header */}
            <div className="bg-neutral-900 dark:bg-neutral-800 px-4 py-3 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-amber-600 flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-xs tracking-wider">A</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white font-semibold text-sm leading-tight">Horology Concierge</p>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  <p className="text-neutral-400 text-[11px]">Online · Avg. reply 2h</p>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="p-1 rounded-full hover:bg-white/10 transition-colors flex-shrink-0"
              >
                <X className="w-3.5 h-3.5 text-neutral-400" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-neutral-50 dark:bg-neutral-950">
              {chatMessages.map((msg, i) => (
                <div key={i} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`max-w-[86%] px-3.5 py-2.5 rounded-2xl text-[13px] leading-[1.8] ${
                      msg.from === 'user'
                        ? 'bg-neutral-900 text-white dark:bg-amber-600 rounded-br-sm'
                        : 'bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 rounded-bl-sm shadow-sm'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {typing && (
                <div className="flex justify-start">
                  <div className="bg-white dark:bg-neutral-800 px-3.5 py-3 rounded-2xl rounded-bl-sm shadow-sm">
                    <div className="flex gap-1">
                      {[0, 1, 2].map(i => (
                        <motion.div
                          key={i}
                          animate={{ y: [0, -4, 0] }}
                          transition={{ repeat: Infinity, delay: i * 0.15, duration: 0.6 }}
                          className="w-1.5 h-1.5 rounded-full bg-neutral-400"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Quick replies */}
            <div className="px-3 py-2.5 flex flex-wrap gap-1.5 border-t border-neutral-100 dark:border-neutral-800 bg-white dark:bg-neutral-900">
              {quickReplies.map(r => (
                <button
                  key={r}
                  onClick={() => sendMessage(r)}
                  className="text-[11px] px-2.5 py-1 rounded-full border border-neutral-300 dark:border-neutral-600 text-neutral-600 dark:text-neutral-400 hover:border-amber-500 hover:text-amber-700 dark:hover:text-amber-400 transition-colors"
                >
                  {r}
                </button>
              ))}
            </div>

            {/* Input */}
            <div className="px-3 pb-3 pt-2 border-t border-neutral-100 dark:border-neutral-800 bg-white dark:bg-neutral-900 flex gap-2">
              <input
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && sendMessage(input)}
                placeholder="Ask anything..."
                className="flex-1 px-3.5 py-2 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-[13px] text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 outline-none focus:ring-2 focus:ring-amber-400/60"
              />
              <motion.button
                whileTap={{ scale: 0.88 }}
                onClick={() => sendMessage(input)}
                className="p-2 bg-neutral-900 dark:bg-amber-600 hover:bg-neutral-700 dark:hover:bg-amber-700 rounded-xl text-white transition-colors flex-shrink-0"
              >
                <Send className="w-3.5 h-3.5" />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating trigger button — shrinks on scroll */}
      <motion.button
        whileTap={{ scale: 0.92 }}
        onClick={() => setOpen(!open)}
        animate={{ width: scrolled && !open ? 38 : 44, height: scrolled && !open ? 38 : 44 }}
        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        className="relative bg-neutral-900 hover:bg-neutral-800 rounded-full shadow-xl flex items-center justify-center text-white transition-colors overflow-hidden"
        style={{ minWidth: 0 }}
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <X className="w-4 h-4" />
            </motion.div>
          ) : (
            <motion.div key="msg" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <MessageCircle className={scrolled ? 'w-4 h-4' : 'w-[18px] h-[18px]'} />
            </motion.div>
          )}
        </AnimatePresence>
        {!open && (
          <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
        )}
      </motion.button>
    </div>
  );
}
