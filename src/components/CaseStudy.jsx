import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink } from 'lucide-react';

const projects = {
  'aurora-brand': {
    title: 'Aurora Cosmetics — Brand System',
    hero: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=2000&auto=format&fit=crop',
    summary: 'A modern brand identity for a clean beauty line. Scope included logo system, packaging, and digital guidelines.',
    role: 'Brand Designer, Art Direction',
    year: '2024',
    links: [{ label: 'Live site', href: '#' }],
    process: [
      {
        title: 'Discovery & Positioning',
        copy: 'Stakeholder interviews and competitive mapping led to a vibrant, science-forward position anchored by a flexible gradient core.'
      },
      {
        title: 'Visual Language',
        copy: 'We built a modular system with color tokens, type scales, and motion behaviors that adapt across packaging and product.'
      },
      {
        title: 'Applications',
        copy: 'Rolled out across e‑commerce, OOH mockups, and social kits with accessible contrast and motion safety.'
      }
    ],
    beforeAfter: {
      before: 'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1600&auto=format&fit=crop',
      after: 'https://images.unsplash.com/photo-1529336953121-ad5a0d43d0d2?q=80&w=1600&auto=format&fit=crop'
    }
  },
  'plume-ui': {
    title: 'Plume — Finance App UI',
    hero: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2000&auto=format&fit=crop',
    summary: 'Designing a calm, legible interface for a mobile-first finance product.',
    role: 'Product Designer',
    year: '2023',
    links: [] ,
    process: [
      { title: 'Research to Wireframes', copy: 'We translated flows into low-fi frames tested with five participants.' },
      { title: 'Design Language', copy: 'A soft glass look with clear hierarchy and motion affordances.' },
      { title: 'Prototyping', copy: 'Interactive prototypes validated onboarding and money movement.' }
    ],
    beforeAfter: null
  }
};

function BeforeAfter({ before, after }) {
  return (
    <div className="relative w-full overflow-hidden rounded-2xl ring-1 ring-white/10 bg-white/5 backdrop-blur-md">
      <div className="grid md:grid-cols-2">
        <img src={before} alt="Before" className="h-80 w-full object-cover" />
        <img src={after} alt="After" className="h-80 w-full object-cover" />
      </div>
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-black/0 to-black/10" />
      <div className="absolute top-3 left-3 px-2 py-1 rounded-full text-xs bg-black/50 backdrop-blur-sm">Before</div>
      <div className="absolute top-3 right-3 px-2 py-1 rounded-full text-xs bg-black/50 backdrop-blur-sm">After</div>
    </div>
  );
}

export default function CaseStudy() {
  const { slug } = useParams();
  const data = projects[slug];

  if (!data) {
    return (
      <div className="mx-auto max-w-[1440px] px-6 sm:px-8 py-16">
        <Link to="/" className="inline-flex items-center gap-2 text-[color:var(--muted)] hover:text-[color:var(--fg)]">
          <ArrowLeft size={16} /> Back
        </Link>
        <h1 className="mt-6 text-3xl font-semibold">Case study not found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="relative h-[46vh] md:h-[56vh] overflow-hidden">
        <img src={data.hero} alt="Hero" className="w-full h-full object-cover" />
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[color:var(--bg)] via-transparent to-transparent" />
      </div>

      <div className="mx-auto max-w-[1440px] px-6 sm:px-8">
        <div className="-mt-16 mb-10 relative z-10">
          <div className="rounded-2xl bg-white/5 backdrop-blur-md ring-1 ring-white/10 p-6 sm:p-8 shadow-[0_8px_40px_rgba(0,0,0,0.25)]">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight" style={{fontFamily:'Plus Jakarta Sans, Inter, system-ui'}}>{data.title}</h1>
                <p className="mt-3 text-[color:var(--muted)] max-w-2xl">{data.summary}</p>
              </div>
              <div className="flex gap-6 text-sm text-[color:var(--muted)]">
                <div><div className="text-[color:var(--fg)]">Role</div>{data.role}</div>
                <div><div className="text-[color:var(--fg)]">Year</div>{data.year}</div>
              </div>
            </div>
            {data.links?.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-3">
                {data.links.map((l, i) => (
                  <a key={i} href={l.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[color:var(--accent)]/20 ring-1 ring-white/10 hover:ring-white/20">
                    {l.label} <ExternalLink size={14} />
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        <section className="py-10 space-y-10">
          {data.process.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ type: 'spring', stiffness: 180, damping: 22 }}
              className="rounded-2xl bg-white/5 backdrop-blur-md ring-1 ring-white/10 p-6 sm:p-8"
            >
              <h3 className="text-xl font-medium" style={{fontFamily:'Plus Jakarta Sans, Inter, system-ui'}}>{step.title}</h3>
              <p className="mt-2 text-[color:var(--muted)] max-w-3xl">{step.copy}</p>
            </motion.div>
          ))}
        </section>

        {data.beforeAfter && (
          <section className="py-10">
            <h3 className="text-xl font-medium mb-4" style={{fontFamily:'Plus Jakarta Sans, Inter, system-ui'}}>Before / After</h3>
            <BeforeAfter before={data.beforeAfter.before} after={data.beforeAfter.after} />
          </section>
        )}

        <div className="py-16">
          <Link to="/" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 ring-1 ring-white/10 hover:ring-white/20">
            <ArrowLeft size={16} /> Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
