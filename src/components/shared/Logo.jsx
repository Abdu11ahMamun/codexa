import { motion } from "framer-motion";
import { BRAND } from "../../constants/brand";
import logoImg from "../../assets/Codexa IT logo.png";

export function Logo({ size = "default" }) {
  const sizeClasses = {
    small: "h-10 w-10",
    default: "h-12 w-12",
    large: "h-14 w-14",
    xlarge: "h-20 w-20"
  }[size] || "h-12 w-12";
  
  const imgSize = {
    small: "h-8 w-8",
    default: "h-10 w-10",
    large: "h-11 w-11",
    xlarge: "h-16 w-16"
  }[size] || "h-10 w-10";

  return (
    <motion.div 
      className={`relative grid ${sizeClasses} place-items-center rounded-xl border border-slate-200 bg-slate-50`}
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
      
      <motion.img 
        src={logoImg}
        alt="Codexa Logo"
        className={`relative ${imgSize} object-contain`}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}
