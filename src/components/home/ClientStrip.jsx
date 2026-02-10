import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

// Import client logos
import boaLogo from "../../assets/Affiliations/BoA.png";
import companyCamLogo from "../../assets/Affiliations/Company-cam.png";
import fnmaLogo from "../../assets/Affiliations/FNMA.png";
import ppwLogo from "../../assets/Affiliations/PPW.png";
import vaLogo from "../../assets/Affiliations/VA.png";
import wellsFargoLogo from "../../assets/Affiliations/Wells fargo.png";

export function ClientStrip() {
  const reduceMotion = useReducedMotion();
  const clients = [
    { name: "Bank of America", logo: boaLogo },
    { name: "Company Cam", logo: companyCamLogo },
    { name: "Fannie Mae", logo: fnmaLogo },
    { name: "PPW", logo: ppwLogo },
    { name: "VA", logo: vaLogo },
    { name: "Wells Fargo", logo: wellsFargoLogo },
  ];

  return (
    <div className="rounded-2xl border border-slate-200 bg-gradient-to-r from-white via-slate-50 to-blue-50/30 px-6 py-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div 
            className="inline-block text-xs font-semibold tracking-widest px-2 py-0.5 rounded"
            style={{ background: 'linear-gradient(90deg, rgba(37,99,235,0.1), rgba(139,92,246,0.1))', color: '#8B5CF6' }}
          >
            CLIENTS
          </div>
          <div className="mt-1 text-sm text-slate-600">Trusted by teams across Bangladesh &amp; abroad</div>
        </div>
        <a 
          href="#contact" 
          className="inline-flex items-center gap-2 text-sm font-semibold transition hover:gap-3"
          style={{ 
            background: 'linear-gradient(90deg, #2563EB, #8B5CF6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Become a client <ArrowRight className="h-4 w-4 text-violet-500" />
        </a>
      </div>

      <div className="mt-6 overflow-hidden">
        <motion.div
          className="flex items-center gap-16"
          animate={reduceMotion ? undefined : { x: [0, -600] }}
          transition={reduceMotion ? undefined : { duration: 20, repeat: Infinity, ease: "linear" }}
        >
          {[...clients, ...clients, ...clients].map((c, idx) => (
            <div
              key={`${c.name}-${idx}`}
              className="flex-shrink-0 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <img 
                src={c.logo} 
                alt={c.name} 
                className="h-10 w-auto object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
