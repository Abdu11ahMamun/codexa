import { motion } from "framer-motion";
import { BRAND } from "../../constants/brand";

export function Logo() {
  return (
    <motion.div 
      className="relative grid h-10 w-10 place-items-center rounded-xl border border-slate-200 bg-slate-50"
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      {/* Pulsating glow */}
      <motion.div
        className="absolute inset-0 rounded-xl opacity-0"
        animate={{ 
          opacity: [0, 0.3, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        style={{ 
          background: `radial-gradient(circle, ${BRAND.primary}40, transparent)`,
          filter: 'blur(8px)'
        }}
      />
      
      <div className="relative grid h-7 w-7 place-items-center rounded-lg bg-white shadow-sm">
        <motion.span 
          className="text-xs font-black"
          style={{ color: BRAND.primary }}
          whileHover={{ scale: 1.2, rotate: 360 }}
          transition={{ duration: 0.5 }}
        >
          C
        </motion.span>
      </div>
    </motion.div>
  );
}
