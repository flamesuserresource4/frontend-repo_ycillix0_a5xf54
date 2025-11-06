import { Link, NavLink } from 'react-router-dom';

export default function HeaderNav() {
  return (
    <div className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/30">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-8 py-4 flex items-center justify-between">
        <Link to="/" className="font-semibold tracking-tight" style={{fontFamily:'Plus Jakarta Sans, Inter, system-ui'}}>GD</Link>
        <nav className="flex items-center gap-4 text-sm">
          <NavLink to="/" className={({isActive}) => `px-3 py-1.5 rounded-full hover:bg-white/5 ${isActive ? 'bg-white/5' : ''}`}>Home</NavLink>
          <NavLink to="/work" className={({isActive}) => `px-3 py-1.5 rounded-full hover:bg-white/5 ${isActive ? 'bg-white/5' : ''}`}>Work</NavLink>
        </nav>
      </div>
    </div>
  );
}
