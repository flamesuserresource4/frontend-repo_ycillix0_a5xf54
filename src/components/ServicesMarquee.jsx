import { useEffect, useRef } from 'react';

const items = [
  { label: 'Branding', color: 'from-[var(--accent)] to-[var(--accent-2)]' },
  { label: 'UI/UX', color: 'from-[var(--accent-2)] to-[var(--accent)]' },
  { label: 'Illustration', color: 'from-[var(--accent)] to-[var(--accent-2)]' },
  { label: '3D', color: 'from-[var(--accent-2)] to-[var(--accent)]' },
];

export default function ServicesMarquee() {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let start = 0;
    let raf;
    const speed = 0.35;

    const step = () => {
      start -= speed;
      track.style.transform = `translateX(${start}px)`;
      if (Math.abs(start) >= track.scrollWidth / 2) start = 0;
      raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section className="relative w-full overflow-hidden py-10">
      <div
        ref={trackRef}
        className="flex min-w-max items-center gap-3 will-change-transform"
        aria-hidden
      >
        {[...items, ...items, ...items].map((i, idx) => (
          <span
            key={idx}
            className={`rounded-2xl bg-gradient-to-r ${i.color} px-4 py-2 text-sm font-semibold text-[var(--bg)]`}
            data-magnetic
          >
            {i.label}
          </span>
        ))}
      </div>
    </section>
  );
}
