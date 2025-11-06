import { motion } from 'framer-motion';

export default function FooterCTA() {
  return (
    <footer id="contact" className="relative mx-auto max-w-[1440px] px-6 py-20">
      <div
        className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-10 text-center backdrop-blur"
        style={{ boxShadow: '0 10px 30px rgba(10,11,15,0.35)' }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 140, damping: 18 }}
          className="mx-auto max-w-3xl text-3xl font-semibold text-[var(--fg)] sm:text-4xl"
          style={{ fontFamily: 'Plus Jakarta Sans, Sora, Inter, system-ui, sans-serif' }}
        >
          Let’s create something bold
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 140, damping: 18, delay: 0.05 }}
          className="mx-auto mt-3 max-w-xl text-[var(--muted)]"
        >
          Available for select projects, collaborations, and speaking.
        </motion.p>
        <motion.a
          href="mailto:hello@designer.studio"
          data-magnetic
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 140, damping: 18, delay: 0.1 }}
          className="mx-auto mt-6 inline-flex items-center gap-2 rounded-2xl px-6 py-3 text-sm font-semibold text-[var(--bg)]"
          style={{
            background: 'linear-gradient(135deg, var(--accent), var(--accent-2))',
            boxShadow: '0 10px 30px rgba(124,92,255,0.35)'
          }}
        >
          Start a project
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </motion.a>
      </div>
    </footer>
  );
}
