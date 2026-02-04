import { motion } from "framer-motion";
import { BRAND } from "../constants/brand";
import logoImg from "../assets/Codexa IT logo.png";

export function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-white via-slate-50 to-blue-50"
    >
      <div className="text-center">
        <div className="relative mx-auto mb-6 flex items-center justify-center">
          {/* Outer colorful spinning ring */}
          <motion.div
            className="absolute h-24 w-24 rounded-full"
            style={{
              background: BRAND.gradients.brand,
              padding: '3px',
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <div className="h-full w-full rounded-full bg-white" />
          </motion.div>
          
          {/* Inner accent ring */}
          <motion.div
            className="absolute h-20 w-20 rounded-full border-4 border-transparent"
            style={{
              borderTopColor: BRAND.colors.cyan,
              borderRightColor: BRAND.colors.violet,
            }}
            animate={{ rotate: -360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
          
          {/* Logo with pulse effect */}
          <motion.img 
            src={logoImg} 
            alt="Codexa Logo" 
            className="h-12 w-12 object-contain"
            animate={{ 
              scale: [1, 1.08, 1],
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
          className="text-lg font-bold tracking-tight"
          style={{
            background: BRAND.gradients.brand,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          {BRAND.name}
        </motion.div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xs text-slate-500"
        >
          {BRAND.tagline}
        </motion.div>
      </div>
    </motion.div>
  );
}
