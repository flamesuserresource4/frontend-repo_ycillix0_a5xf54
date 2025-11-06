import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

// Custom circular blob cursor with magnetic hover effect
export default function CustomCursor() {
  const cursorRef = useRef(null);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  // Smooth spring following
  const springX = useSpring(x, { stiffness: 400, damping: 40, mass: 0.6 });
  const springY = useSpring(y, { stiffness: 400, damping: 40, mass: 0.6 });

  useEffect(() => {
    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    const handleEnter = () => {
      if (!cursorRef.current) return;
      cursorRef.current.style.mixBlendMode = 'difference';
      cursorRef.current.style.transform = 'translate(-50%, -50%) scale(1.6)';
      cursorRef.current.style.boxShadow = '0 10px 40px rgba(124,92,255,0.35)';
    };

    const handleLeave = () => {
      if (!cursorRef.current) return;
      cursorRef.current.style.mixBlendMode = 'normal';
      cursorRef.current.style.transform = 'translate(-50%, -50%) scale(1)';
      cursorRef.current.style.boxShadow = '0 8px 24px rgba(18,214,223,0.25)';
    };

    window.addEventListener('pointermove', move, { passive: true });
    document.querySelectorAll('[data-magnetic]')?.forEach((el) => {
      el.addEventListener('pointerenter', handleEnter);
      el.addEventListener('pointerleave', handleLeave);
    });

    return () => {
      window.removeEventListener('pointermove', move);
      document.querySelectorAll('[data-magnetic]')?.forEach((el) => {
        el.removeEventListener('pointerenter', handleEnter);
        el.removeEventListener('pointerleave', handleLeave);
      });
    };
  }, [x, y]);

  return (
    <motion.div
      ref={cursorRef}
      style={{
        left: springX,
        top: springY,
      }}
      className="pointer-events-none fixed z-50 size-10 -translate-x-1/2 -translate-y-1/2 rounded-full"
    >
      <div
        className="size-full rounded-full"
        style={{
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          background:
            'radial-gradient(60% 60% at 30% 30%, rgba(124,92,255,0.45), rgba(18,214,223,0.35))',
          boxShadow: '0 8px 24px rgba(18,214,223,0.25)',
          border: '1px solid rgba(255,255,255,0.15)'
        }}
      />
    </motion.div>
  );
}
