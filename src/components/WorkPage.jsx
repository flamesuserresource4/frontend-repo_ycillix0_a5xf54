import { useEffect } from 'react';
import CustomCursor from './CustomCursor';
import WorkGrid from './WorkGrid';

export default function WorkPage() {
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--bg', '#0a0b0f');
    root.style.setProperty('--fg', '#f3f5f7');
    root.style.setProperty('--muted', '#a7b0b8');
    root.style.setProperty('--accent', '#7c5cff');
    root.style.setProperty('--accent-2', '#12d6df');
    document.body.style.backgroundColor = 'var(--bg)';
    document.body.style.color = 'var(--fg)';
  }, []);

  return (
    <div className="min-h-screen antialiased">
      <div className="fixed inset-0 opacity-[0.06]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)', backgroundSize: '24px 24px' }} />
      <CustomCursor />

      <header className="mx-auto w-full max-w-[1440px] px-6 sm:px-8 pt-10">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight" style={{fontFamily:'Plus Jakarta Sans, Inter, system-ui'}}>Work</h1>
        <p className="mt-2 text-[color:var(--muted)] max-w-2xl">A curated selection across branding, product, illustration, and motion.</p>
      </header>

      <main className="py-2">
        <WorkGrid />
      </main>
    </div>
  );
}
