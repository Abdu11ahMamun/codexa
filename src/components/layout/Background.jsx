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
      <div className="absolute inset-0 bg-white" />

      <div className="absolute inset-0 opacity-[0.22] [background-image:radial-gradient(rgba(15,23,42,0.18)_1px,transparent_1px)] [background-size:22px_22px]" />

      <motion.div 
        className="absolute -left-40 top-20 h-80 w-80 rounded-[42%] bg-blue-100/55 blur-3xl"
        style={{ y: reduceMotion ? 0 : scrollY * 0.1 }}
      />
      <motion.div 
        className="absolute right-[-140px] top-[-70px] h-[420px] w-[420px] rounded-[45%] bg-rose-100/45 blur-3xl"
        style={{ y: reduceMotion ? 0 : scrollY * 0.15 }}
      />
      <motion.div 
        className="absolute right-24 bottom-[-160px] h-[380px] w-[380px] rounded-[46%] bg-indigo-100/45 blur-3xl"
        style={{ y: reduceMotion ? 0 : scrollY * -0.1 }}
      />

      {!reduceMotion && (
        <motion.div
          className="absolute left-10 top-[420px] h-40 w-40 rounded-full bg-blue-50 blur-2xl"
          animate={{ y: [0, 14, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      )}

      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.0),rgba(255,255,255,1))]" />
    </div>
  );
}
