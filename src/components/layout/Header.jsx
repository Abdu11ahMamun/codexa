import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Facebook, Linkedin, Instagram } from "lucide-react";
import { BRAND, ease } from "../../constants/brand";
import { cn } from "../../utils/helpers";
import { Logo } from "../shared/Logo";
import { SocialIcon } from "../shared/SocialIcon";

export function Header({ scrolled }) {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [isHeaderHovered, setIsHeaderHovered] = useState(false);
  
  return (
    <div className="sticky top-0 z-50">
      <div className={cn("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", scrolled ? "py-3" : "py-5")}>
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          onHoverStart={() => setIsHeaderHovered(true)}
          onHoverEnd={() => setIsHeaderHovered(false)}
          className={cn(
            "relative rounded-2xl border transition-all duration-300",
            scrolled
              ? "border-slate-200 bg-white/95 shadow-lg backdrop-blur-md"
              : "border-slate-100 bg-white shadow-sm"
          )}
        >
          {/* Animated gradient border on hover */}
          <motion.div
            className="pointer-events-none absolute -inset-[1px] rounded-2xl transition-opacity duration-500"
            style={{
              background: 'linear-gradient(90deg, rgba(37,99,235,0.5), rgba(139,92,246,0.5), rgba(37,99,235,0.5))',
              backgroundSize: '200% 100%',
            }}
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              opacity: isHeaderHovered ? 0.6 : 0,
            }}
            transition={{
              backgroundPosition: {
                duration: 3,
                repeat: Infinity,
                ease: 'linear',
              },
              opacity: {
                duration: 0.5,
              }
            }}
          />
          
          {/* Shimmer effect */}
          <motion.div
            className="pointer-events-none absolute inset-0 rounded-2xl overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHeaderHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              animate={{ x: ['-100%', '200%'] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            />
          </motion.div>
          
          <div className="relative flex items-center justify-between gap-4 px-5 py-4 sm:px-6">
            <motion.div 
              className="flex items-center gap-4"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <motion.div
                whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 0.5 }}
              >
                <Logo />
              </motion.div>
              <div className="leading-tight">
                <div className="text-base font-bold tracking-tight">{BRAND.name}</div>
                <div className="text-xs text-slate-500">{BRAND.tagline}</div>
              </div>
            </motion.div>

            <nav className="hidden items-center gap-1 md:flex">
              {[
                { t: "Home", a: "#home" },
                { t: "About", a: "#about" },
                { t: "Services", a: "#services" },
                { t: "Contact", a: "#contact" },
              ].map((l, idx) => (
                <motion.a
                  key={l.t}
                  href={l.a}
                  onHoverStart={() => setHoveredLink(idx)}
                  onHoverEnd={() => setHoveredLink(null)}
                  className="relative rounded-xl px-5 py-2.5 text-sm font-medium text-slate-700 transition"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Background glow effect */}
                  <motion.span
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredLink === idx ? 1 : 0 }}
                    transition={{ duration: 0.2 }}
                  />
                  
                  {/* Animated underline */}
                  <motion.span
                    className="absolute bottom-1 left-1/2 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"
                    initial={{ width: 0, x: '-50%' }}
                    animate={{ 
                      width: hoveredLink === idx ? '60%' : 0,
                      x: '-50%'
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                  
                  <span className="relative z-10">{l.t}</span>
                </motion.a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <div className="hidden items-center gap-1 sm:flex">
                <SocialIcon href="#" label="Facebook" brand="facebook">
                  <Facebook className="h-4 w-4" />
                </SocialIcon>
                <SocialIcon href="#" label="LinkedIn" brand="linkedin">
                  <Linkedin className="h-4 w-4" />
                </SocialIcon>
                <SocialIcon href="#" label="Instagram" brand="instagram">
                  <Instagram className="h-4 w-4" />
                </SocialIcon>
              </div>

              <motion.a
                href="#contact"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {/* Animated gradient background */}
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  style={{ backgroundSize: '200% 100%' }}
                />
                
                {/* Glow effect */}
                <motion.span
                  className="absolute inset-0 rounded-xl opacity-0 blur-xl"
                  style={{ background: 'rgba(37, 99, 235, 0.6)' }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                
                <span className="relative z-10">Get a Quote</span>
                <motion.span
                  className="relative z-10"
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowRight className="h-4 w-4" />
                </motion.span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
