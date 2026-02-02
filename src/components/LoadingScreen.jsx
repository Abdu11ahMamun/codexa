import { motion } from "framer-motion";
import { BRAND } from "../constants/brand";

export function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-white"
    >
      <div className="text-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="mx-auto mb-4 h-12 w-12 rounded-xl border-4 border-slate-200 border-t-slate-900"
        />
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg font-bold tracking-tight text-slate-900"
        >
          {BRAND.name}
        </motion.div>
        <div className="text-xs text-slate-500">{BRAND.tagline}</div>
      </div>
    </motion.div>
  );
}
