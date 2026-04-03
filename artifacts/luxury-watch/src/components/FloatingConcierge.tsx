import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Clock } from 'lucide-react';

const messages = [
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
  const [chatMessages, setChatMessages] = useState(messages);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    setChatMessages((prev) => [...prev, { from: 'user', text }]);
    setInput('');
    setTyping(true);
    setTimeout(() => {
      setChatMessages((prev) => [
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
    <div className="fixed bottom-24 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 20 }}
            transition={{ type: 'spring', damping: 24, stiffness: 300 }}
            className="w-80 bg-white dark:bg-neutral-900 rounded-3xl shadow-2xl border border-neutral-200 dark:border-neutral-700 overflow-hidden flex flex-col"
            style={{ maxHeight: '480px' }}
          >
            <div className="bg-neutral-900 dark:bg-neutral-800 p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-amber-600 flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Horology Concierge</p>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  <p className="text-neutral-400 text-xs">Online · Avg. reply 2h</p>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="ml-auto p-1.5 rounded-full hover:bg-white/10 transition-colors"
              >
                <X className="w-4 h-4 text-neutral-400" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {chatMessages.map((msg, i) => (
                <div key={i} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                      msg.from === 'user'
                        ? 'bg-amber-600 text-white rounded-br-sm'
                        : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 rounded-bl-sm'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {typing && (
                <div className="flex justify-start">
                  <div className="bg-neutral-100 dark:bg-neutral-800 px-4 py-3 rounded-2xl rounded-bl-sm">
                    <div className="flex gap-1">
                      {[0, 1, 2].map((i) => (
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

            <div className="p-3 flex flex-wrap gap-1.5 border-t border-neutral-100 dark:border-neutral-800">
              {quickReplies.map((r) => (
                <button
                  key={r}
                  onClick={() => sendMessage(r)}
                  className="text-xs px-3 py-1.5 rounded-full border border-amber-300 dark:border-amber-700 text-amber-700 dark:text-amber-400 hover:bg-amber-50 dark:hover:bg-amber-900/20 transition-colors"
                >
                  {r}
                </button>
              ))}
            </div>

            <div className="p-3 border-t border-neutral-100 dark:border-neutral-800 flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && sendMessage(input)}
                placeholder="Ask anything..."
                className="flex-1 px-4 py-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-sm text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 outline-none focus:ring-2 focus:ring-amber-400"
              />
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => sendMessage(input)}
                className="p-2.5 bg-amber-600 hover:bg-amber-700 rounded-xl text-white transition-colors flex-shrink-0"
              >
                <Send className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileTap={{ scale: 0.92 }}
        whileHover={{ scale: 1.07 }}
        onClick={() => setOpen(!open)}
        className="relative w-14 h-14 bg-amber-600 hover:bg-amber-700 rounded-full shadow-xl flex items-center justify-center text-white transition-colors"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div key="msg" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
              <MessageCircle className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
        {!open && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white" />
        )}
      </motion.button>
    </div>
  );
}
