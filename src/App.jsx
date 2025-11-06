import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Hero3D from './components/Hero3D';
import FeaturedProjects from './components/FeaturedProjects';
import ServicesMarquee from './components/ServicesMarquee';
import FooterCTA from './components/FooterCTA';
import CustomCursor from './components/CustomCursor';
import WorkPage from './components/WorkPage';
import CaseStudy from './components/CaseStudy';
import HeaderNav from './components/HeaderNav';

function Home() {
  return (
    <>
      <Hero3D />
      <FeaturedProjects />
      <ServicesMarquee />
      <FooterCTA />
    </>
  );
}

export default function App() {
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
      <HeaderNav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/work/:slug" element={<CaseStudy />} />
      </Routes>
    </div>
  );
}
