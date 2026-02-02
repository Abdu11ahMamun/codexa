import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function ClientStrip() {
  const reduceMotion = useReducedMotion();
  const clients = [
    "ServiPro",
    "XZone IT",
    "eCraft",
    "DataWorks",
    "NovaLabs",
    "BrightCore",
    "AstraSoft",
    "BlueRiver",
  ];

  return (
    <div className="rounded-2xl border border-slate-200 bg-white px-6 py-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="text-xs font-semibold tracking-widest text-slate-500">CLIENTS</div>
          <div className="mt-1 text-sm text-slate-600">Trusted by teams across Bangladesh &amp; abroad</div>
        </div>
        <a href="#contact" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900">
          Become a client <ArrowRight className="h-4 w-4" />
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
              key={`${c}-${idx}`}
              className="select-none whitespace-nowrap rounded-xl border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-semibold text-slate-500"
            >
              {c}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
