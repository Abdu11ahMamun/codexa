import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function ClientStrip() {
  const reduceMotion = useReducedMotion();
  const clients = [
    { name: "ServiPro", color: "#2563EB" },
    { name: "XZone IT", color: "#8B5CF6" },
    { name: "eCraft", color: "#06B6D4" },
    { name: "DataWorks", color: "#10B981" },
    { name: "NovaLabs", color: "#F43F5E" },
    { name: "BrightCore", color: "#F97316" },
    { name: "AstraSoft", color: "#2563EB" },
    { name: "BlueRiver", color: "#8B5CF6" },
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
          className="flex items-center gap-10"
          animate={reduceMotion ? undefined : { x: [0, -360] }}
          transition={reduceMotion ? undefined : { duration: 18, repeat: Infinity, ease: "linear" }}
        >
          {[...clients, ...clients].map((c, idx) => (
            <div
              key={`${c.name}-${idx}`}
              className="select-none whitespace-nowrap rounded-xl border bg-white px-5 py-3 text-sm font-semibold transition hover:scale-105"
              style={{ borderColor: `${c.color}30`, color: c.color }}
            >
              {c.name}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
