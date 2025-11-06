import { useEffect } from 'react';
import Hero3D from './components/Hero3D';
import FeaturedProjects from './components/FeaturedProjects';
import ServicesMarquee from './components/ServicesMarquee';
import FooterCTA from './components/FooterCTA';
import CustomCursor from './components/CustomCursor';

function App() {
  useEffect(() => {
    // Set CSS variables for theme tokens
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
      {/* global container + soft noise background */}
      <div className="fixed inset-0 opacity-[0.06]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)', backgroundSize: '24px 24px' }} />

      <CustomCursor />
      <Hero3D />
      <FeaturedProjects />
      <ServicesMarquee />
      <FooterCTA />
    </div>
  );
}

export default App;
