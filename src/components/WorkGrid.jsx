import { useMemo, useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tag, Filter, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CATEGORIES = ["All", "Branding", "UI", "Illustration", "Motion"];

const sampleProjects = [
  {
    id: 'aurora-brand',
    title: 'Aurora Cosmetics',
    category: 'Branding',
    cover: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1600&auto=format&fit=crop',
    color: 'from-[#7c5cff]/20 to-[#12d6df]/10',
  },
  {
    id: 'plume-ui',
    title: 'Plume Mobile App',
    category: 'UI',
    cover: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600&auto=format&fit=crop',
    color: 'from-[#12d6df]/20 to-[#7c5cff]/10',
  },
  {
    id: 'flora-illustrations',
    title: 'Flora Series',
    category: 'Illustration',
    cover: 'https://images.unsplash.com/photo-1549887534-1541e9323f5e?q=80&w=1600&auto=format&fit=crop',
    color: 'from-[#7c5cff]/20 to-transparent',
  },
  {
    id: 'drift-motion',
    title: 'Drift Promo',
    category: 'Motion',
    cover: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1600&auto=format&fit=crop',
    color: 'from-[#12d6df]/20 to-transparent',
  },
  {
    id: 'atelier-brand',
    title: 'Atelier Studio',
    category: 'Branding',
    cover: 'https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?q=80&w=1600&auto=format&fit=crop',
    color: 'from-[#7c5cff]/20 to-[#12d6df]/10',
  },
  {
    id: 'orbit-ui',
    title: 'Orbit Dashboard',
    category: 'UI',
    cover: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1600&auto=format&fit=crop',
    color: 'from-[#12d6df]/20 to-[#7c5cff]/10',
  },
];

export default function WorkGrid() {
  const [filter, setFilter] = useState('All');
  const items = useMemo(
    () => (filter === 'All' ? sampleProjects : sampleProjects.filter(p => p.category === filter)),
    [filter]
  );

  const cardRefs = useRef([]);

  useEffect(() => {
    cardRefs.current = cardRefs.current.slice(0, items.length);
  }, [items.length]);

  const onKeyDown = (e, idx) => {
    const cols = 3;
    if (e.key === 'ArrowRight') {
      const next = Math.min(items.length - 1, idx + 1);
      cardRefs.current[next]?.focus();
    } else if (e.key === 'ArrowLeft') {
      const prev = Math.max(0, idx - 1);
      cardRefs.current[prev]?.focus();
    } else if (e.key === 'ArrowDown') {
      const nextRow = Math.min(items.length - 1, idx + cols);
      cardRefs.current[nextRow]?.focus();
    } else if (e.key === 'ArrowUp') {
      const prevRow = Math.max(0, idx - cols);
      cardRefs.current[prevRow]?.focus();
    }
  };

  return (
    <div className="relative">
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-8">
        <div className="flex items-center justify-between gap-4 py-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight" style={{fontFamily:'Plus Jakarta Sans, Inter, system-ui'}}>Selected Work</h2>
            <p className="text-sm text-[color:var(--muted)]">Filter by discipline</p>
          </div>
          <div className="flex items-center gap-2 rounded-full bg-white/5 backdrop-blur-sm ring-1 ring-white/10 p-1">
            <Filter size={18} className="text-[color:var(--muted)] ml-2" />
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                data-magnetic
                className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
                  filter === cat ? 'bg-[color:var(--accent)]/20 text-[color:var(--fg)]' : 'text-[color:var(--muted)] hover:text-[color:var(--fg)]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry-like columns */}
        <div className="columns-1 md:columns-2 xl:columns-3 gap-6 [column-fill:_balance]">
          <AnimatePresence mode="popLayout">
            {items.map((p, idx) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ type: 'spring', stiffness: 180, damping: 20 }}
                className="mb-6 break-inside-avoid"
              >
                <Link to={`/work/${p.id}`} className="group block focus:outline-none" aria-label={`${p.title} case study`}>
                  <div
                    tabIndex={0}
                    ref={el => (cardRefs.current[idx] = el)}
                    onKeyDown={e => onKeyDown(e, idx)}
                    className="relative overflow-hidden rounded-2xl ring-1 ring-white/10 bg-white/5 backdrop-blur-md shadow-[0_6px_30px_rgba(0,0,0,0.25)]"
                  >
                    <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${p.color}`} />
                    <img src={p.cover} alt={p.title} className="w-full h-72 object-cover object-center transition-transform duration-500 ease-in-out group-hover:scale-[1.03]" />
                    <div className="absolute inset-x-0 bottom-0 p-4 flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-medium drop-shadow" style={{fontFamily:'Plus Jakarta Sans, Inter, system-ui'}}>{p.title}</h3>
                        <span className="inline-flex items-center gap-1 text-xs text-[color:var(--muted)]"><Tag size={14} />{p.category}</span>
                      </div>
                      <div className="h-10 w-10 rounded-full bg-black/40 backdrop-blur-sm ring-1 ring-white/20 flex items-center justify-center text-[color:var(--fg)] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                        <ArrowUpRight size={18} />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
