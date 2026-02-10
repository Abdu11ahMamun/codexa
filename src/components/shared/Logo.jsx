import { motion } from "framer-motion";
import logoImg from "../../assets/Codexa IT logo.png";

export function Logo({ size = "default" }) {
  const sizeClasses = {
    small: "h-7 w-16",
    default: "h-8 w-20",
    large: "h-9 w-24",
    xlarge: "h-12 w-32"
  }[size] || "h-8 w-20";
  
  const imgSize = {
    small: "h-5 w-14",
    default: "h-6 w-18",
    large: "h-7 w-22",
    xlarge: "h-10 w-28"
  }[size] || "h-6 w-18";

  return (
    <motion.div 
      className={`relative grid ${sizeClasses} place-items-center rounded-lg border border-slate-200/80 bg-white shadow-sm`}
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
    >
      <motion.img 
        src={logoImg}
        alt="Codexa Logo"
        className={`relative ${imgSize} object-contain`}
      />
    </motion.div>
  );
}
