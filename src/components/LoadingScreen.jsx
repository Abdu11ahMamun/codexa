import { motion } from "framer-motion";
import { BRAND } from "../constants/brand";
import logoImg from "../assets/Codexa IT logo.png";

export function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-white"
    >
      <div className="text-center">
        <div className="relative mx-auto mb-6 flex items-center justify-center">
          {/* Spinning ring around logo */}
          <motion.div
            className="absolute h-20 w-20 rounded-full border-4 border-slate-200 border-t-slate-900"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          
          {/* Logo with pulse effect */}
          <motion.img 
            src={logoImg} 
            alt="Codexa Logo" 
            className="h-12 w-12 object-contain"
            animate={{ 
              scale: [1, 1.05, 1],
            }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg font-bold tracking-tight text-slate-900"
        >
          {/* {BRAND.name} */}
        </motion.div>
        <div className="text-xs text-slate-500">{BRAND.tagline}</div>
      </div>
    </motion.div>
  );
}
