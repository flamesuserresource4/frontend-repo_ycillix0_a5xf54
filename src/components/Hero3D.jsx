import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero3D() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden" aria-label="Hero">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient veil for readability (doesn't block 3D interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[rgba(10,11,15,0.3)] via-[rgba(10,11,15,0.6)] to-[rgba(10,11,15,0.9)]" />

      <div className="relative mx-auto flex max-w-[1440px] flex-col items-start gap-6 px-6 pt-28 pb-16 sm:pt-36">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 120, damping: 18 }}
          className="text-sm tracking-wide text-[var(--muted)]"
        >
          Designer • Branding • UI/UX • 3D
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 120, damping: 18, delay: 0.05 }}
          className="font-extrabold text-[44px] leading-[1.05] text-[var(--fg)] sm:text-6xl md:text-7xl"
          style={{ fontFamily: 'Plus Jakarta Sans, Sora, Inter, system-ui, sans-serif' }}
        >
          Crafting bold visual systems for modern brands
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 120, damping: 18, delay: 0.1 }}
          className="max-w-2xl text-lg text-[var(--muted)]"
        >
          I blend illustration, motion, and interaction to turn ideas into memorable products.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 120, damping: 18, delay: 0.15 }}
          className="flex flex-wrap items-center gap-4 pt-2"
        >
          <a
            href="#work"
            data-magnetic
            className="group inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold text-[var(--bg)]"
            style={{
              background: 'linear-gradient(135deg, var(--accent), var(--accent-2))',
              boxShadow: '0 10px 30px rgba(124,92,255,0.35)',
            }}
          >
            View Work
            <svg
              className="transition-transform group-hover:translate-x-0.5"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </a>

          <a
            href="#contact"
            data-magnetic
            className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-[var(--fg)] backdrop-blur"
          >
            Contact
          </a>
        </motion.div>
      </div>
    </section>
  );
}
