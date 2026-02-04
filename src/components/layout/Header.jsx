import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Facebook, Linkedin, Instagram, Menu, X } from "lucide-react";
import { BRAND, ease } from "../../constants/brand";
import { cn } from "../../utils/helpers";
import { Logo } from "../shared/Logo";
import { SocialIcon } from "../shared/SocialIcon";

export function Header({ scrolled }) {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [isHeaderHovered, setIsHeaderHovered] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  const navLinks = [
    { t: "Home", to: "/" },
    { t: "About", to: "/about" },
    { t: "Services", to: "/services" },
    { t: "Careers", to: "/careers" },
    { t: "Contact", to: "/contact" },
  ];

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
          
          <div className="relative flex items-center justify-between gap-4 px-5 py-3 sm:px-6">
            <Link to="/">
              <motion.div 
                className="flex items-center gap-3"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <Logo size="default" />
                </motion.div>
                <div className="leading-tight">
                  <div className="text-lg font-bold tracking-tight">{BRAND.name}</div>
                  <div className="text-xs text-slate-500">{BRAND.tagline}</div>
                </div>
              </motion.div>
            </Link>

            <nav className="hidden items-center gap-1 md:flex">
              {navLinks.map((l, idx) => {
                const isActive = location.pathname === l.to;
                return (
                  <Link
                    key={l.t}
                    to={l.to}
                    onMouseEnter={() => setHoveredLink(idx)}
                    onMouseLeave={() => setHoveredLink(null)}
                    className={cn(
                      "relative rounded-xl px-5 py-2.5 text-sm font-medium transition",
                      isActive ? "text-blue-600" : "text-slate-700"
                    )}
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
                      width: hoveredLink === idx || isActive ? '60%' : 0,
                      x: '-50%'
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                  
                  <span className="relative z-10">{l.t}</span>
                </Link>
              );
              })}
            </nav>

            <div className="flex items-center gap-3">
              {/* Mobile menu button */}
              <button
                className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
              
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
            </div>
          </div>
          
          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-slate-100"
            >
              <nav className="p-4 space-y-1">
                {navLinks.map((l) => {
                  const isActive = location.pathname === l.to;
                  return (
                    <Link
                      key={l.t}
                      to={l.to}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        "block px-4 py-3 rounded-xl text-sm font-medium transition",
                        isActive 
                          ? "bg-blue-50 text-blue-600" 
                          : "text-slate-700 hover:bg-slate-50"
                      )}
                    >
                      {l.t}
                    </Link>
                  );
                })}
              </nav>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
