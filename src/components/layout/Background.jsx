import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

export function Background() {
  const reduceMotion = useReducedMotion();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [reduceMotion]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-50">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50/50 to-blue-50/30" />

      <div className="absolute inset-0 opacity-[0.18] [background-image:radial-gradient(rgba(37,99,235,0.15)_1px,transparent_1px)] [background-size:22px_22px]" />

      {/* Blue blob - top left */}
      <motion.div 
        className="absolute -left-40 top-20 h-80 w-80 rounded-[42%] bg-gradient-to-br from-blue-200/60 to-cyan-100/40 blur-3xl"
        style={{ y: reduceMotion ? 0 : scrollY * 0.1 }}
      />
      
      {/* Rose/Pink blob - top right */}
      <motion.div 
        className="absolute right-[-140px] top-[-70px] h-[420px] w-[420px] rounded-[45%] bg-gradient-to-br from-rose-100/50 to-orange-100/40 blur-3xl"
        style={{ y: reduceMotion ? 0 : scrollY * 0.15 }}
      />
      
      {/* Violet blob - bottom right */}
      <motion.div 
        className="absolute right-24 bottom-[-160px] h-[380px] w-[380px] rounded-[46%] bg-gradient-to-br from-violet-100/50 to-indigo-100/40 blur-3xl"
        style={{ y: reduceMotion ? 0 : scrollY * -0.1 }}
      />
      
      {/* Cyan blob - middle left */}
      <motion.div 
        className="absolute left-[-100px] top-[50%] h-[300px] w-[300px] rounded-[44%] bg-gradient-to-br from-cyan-100/40 to-emerald-100/30 blur-3xl"
        style={{ y: reduceMotion ? 0 : scrollY * 0.08 }}
      />
      
      {/* Orange accent blob */}
      <motion.div 
        className="absolute right-[20%] top-[30%] h-[200px] w-[200px] rounded-full bg-gradient-to-br from-orange-100/30 to-yellow-100/20 blur-2xl"
        style={{ y: reduceMotion ? 0 : scrollY * -0.05 }}
      />

      {!reduceMotion && (
        <>
          <motion.div
            className="absolute left-10 top-[420px] h-40 w-40 rounded-full bg-gradient-to-br from-blue-100/60 to-cyan-50/40 blur-2xl"
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute right-[15%] top-[60%] h-32 w-32 rounded-full bg-gradient-to-br from-violet-100/50 to-rose-50/30 blur-2xl"
            animate={{ y: [0, -10, 0], x: [0, 8, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
        </>
      )}

      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.0),rgba(255,255,255,0.95))]" />
    </div>
  );
}
