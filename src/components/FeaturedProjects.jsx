import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Neon Synth Brand',
    tag: 'Branding',
    year: '2024',
    tools: 'Figma • Blender',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Holo UI Kit',
    tag: 'UI/UX',
    year: '2025',
    tools: 'Figma • After Effects',
    image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Playful 3D Icons',
    tag: '3D',
    year: '2024',
    tools: 'Blender • Spline',
    image: 'https://images.unsplash.com/photo-1735755642468-fac9355f5958?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxQbGF5ZnVsJTIwM0QlMjBJY29uc3xlbnwwfDB8fHwxNzYyNDY5OTY4fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    title: 'Editorial Illustrations',
    tag: 'Illustration',
    year: '2023',
    tools: 'Procreate • Illustrator',
    image: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1600&auto=format&fit=crop',
  },
];

export default function FeaturedProjects() {
  return (
    <section id="work" className="relative mx-auto max-w-[1440px] px-6 py-16 sm:py-24">
      <div className="mb-8 flex items-end justify-between">
        <h2 className="text-2xl font-semibold text-[var(--fg)]" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>Featured projects</h2>
        <a href="#" className="text-sm text-[var(--muted)] hover:text-[var(--fg)]" data-magnetic>
          View all →
        </a>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ type: 'spring', stiffness: 140, damping: 18, delay: i * 0.05 }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur"
            style={{ boxShadow: '0 10px 30px rgba(10,11,15,0.35)' }}
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgba(10,11,15,0.85)] via-transparent to-transparent" />
            </div>
            <div className="absolute inset-x-0 bottom-0 p-4">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-[var(--fg)] backdrop-blur">{p.tag}</span>
                <span className="text-xs text-[var(--muted)]">{p.year}</span>
              </div>
              <h3 className="mt-3 text-lg font-semibold text-[var(--fg)]">{p.title}</h3>
              <p className="text-sm text-[var(--muted)]">{p.tools}</p>
              <a href="#" className="mt-3 inline-flex items-center gap-2 text-sm text-[var(--fg)]" data-magnetic>
                Read case study
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
