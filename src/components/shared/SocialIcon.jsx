import { motion, useReducedMotion } from "framer-motion";

export function SocialIcon({ href, label, brand, children }) {
  const reduceMotion = useReducedMotion();
  const brandColor = brand === "facebook" ? "#1877F2" : brand === "linkedin" ? "#0A66C2" : "#E4405F";

  return (
    <motion.a
      href={href}
      aria-label={label}
      title={label}
      whileHover={reduceMotion ? undefined : { y: -4, rotate: [0, -10, 10, 0] }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      style={{ "--brand": brandColor }}
      className="group relative grid h-10 w-10 place-items-center rounded-xl border border-slate-200 bg-white text-slate-600 transition overflow-hidden"
    >
      {/* Animated background on hover */}
      <motion.span
        className="absolute inset-0 opacity-0"
        style={{ background: `linear-gradient(135deg, ${brandColor}15, ${brandColor}05)` }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Ripple effect */}
      <motion.span
        className="absolute inset-0 rounded-xl"
        initial={{ scale: 0, opacity: 0.5 }}
        whileHover={{ scale: 1.5, opacity: 0 }}
        transition={{ duration: 0.6 }}
        style={{ background: brandColor }}
      />
      
      <span className="relative grid h-full w-full place-items-center rounded-xl text-slate-600 transition group-hover:scale-110 group-hover:text-[var(--brand)]">
        {children}
      </span>
      
      {/* Glow border on hover */}
      <span
        className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{ boxShadow: `0 0 0 2px ${brandColor}33, 0 0 20px ${brandColor}44`, border: `1px solid ${brandColor}66` }}
      />
    </motion.a>
  );
}
