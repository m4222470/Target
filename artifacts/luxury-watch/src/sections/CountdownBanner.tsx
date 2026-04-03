import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Flame } from 'lucide-react';

const TARGET = new Date(Date.now() + 72 * 60 * 60 * 1000);

function getTimeLeft() {
  const diff = Math.max(0, TARGET.getTime() - Date.now());
  return {
    h: String(Math.floor(diff / 3600000)).padStart(2, '0'),
    m: String(Math.floor((diff % 3600000) / 60000)).padStart(2, '0'),
    s: String(Math.floor((diff % 60000) / 1000)).padStart(2, '0'),
  };
}

export default function CountdownBanner() {
  const [time, setTime] = useState(getTimeLeft);

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="bg-neutral-900 py-10 border-y border-neutral-800">
      <div className="max-w-4xl mx-auto px-4 text-center space-y-5">
        <div className="flex items-center justify-center gap-2 text-amber-400">
          <Flame className="w-5 h-5 animate-pulse" />
          <p className="text-xs font-semibold tracking-[0.3em] uppercase">Limited Edition — Closing Soon</p>
          <Flame className="w-5 h-5 animate-pulse" />
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-white font-serif">
          Heritage No. 001 — Only 12 Pieces Remaining
        </h3>
        <div className="flex items-center justify-center gap-4">
          {[
            { label: 'Hours', value: time.h },
            { label: 'Minutes', value: time.m },
            { label: 'Seconds', value: time.s },
          ].map((unit, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="text-center">
                <motion.div
                  key={unit.value}
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="w-20 h-20 bg-amber-600 rounded-2xl flex items-center justify-center"
                >
                  <span className="text-4xl font-bold text-white tabular-nums">{unit.value}</span>
                </motion.div>
                <p className="text-xs text-neutral-500 uppercase tracking-widest mt-2">{unit.label}</p>
              </div>
              {i < 2 && <span className="text-3xl font-bold text-amber-600 mb-5">:</span>}
            </div>
          ))}
        </div>
        <motion.button
          whileTap={{ scale: 0.97 }}
          className="px-10 py-4 bg-amber-600 hover:bg-amber-500 text-white font-bold rounded-full text-sm tracking-widest uppercase shadow-lg transition-colors"
        >
          Reserve Your Piece Now
        </motion.button>
      </div>
    </section>
  );
}
