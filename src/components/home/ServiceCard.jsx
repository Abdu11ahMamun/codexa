import { motion } from "framer-motion";
import { ArrowRight, Layers, ShieldCheck, Headphones } from "lucide-react";
import { ease } from "../../constants/brand";

export function ServiceCard({ title, desc, accent, Icon, delay, reduceMotion }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.65, ease, delay }}
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: -12,
              rotateX: 8,
              rotateY: 8,
              scale: 1.025,
            }
      }
      className="group relative"
      style={{ transformStyle: "preserve-3d" }}
    >
      <div
        className="absolute -inset-[1px] rounded-[30px] opacity-70"
        style={{
          background:
            `linear-gradient(135deg, ${accent}33, rgba(139,92,246,0.15), rgba(6,182,212,0.12))`,
        }}
      />

      <div className="absolute -inset-3 rounded-[32px] opacity-0 blur-2xl transition duration-500 group-hover:opacity-100" style={{ background: `${accent}25` }} />

      <div className="relative overflow-hidden rounded-[30px] border border-slate-200 bg-white p-7 shadow-[0_22px_55px_rgba(2,6,23,0.11)]">
        <div className="pointer-events-none absolute -right-8 -top-8">
          <div className="relative h-32 w-32">
            <div className="absolute inset-0 rounded-full border border-slate-200/70 bg-white/30" />
            <div className="absolute inset-3 rounded-full border border-slate-200/60 bg-white/35" />
            <div
              className="absolute inset-6 rounded-full border opacity-80"
              style={{ borderColor: `${accent}66`, background: `linear-gradient(135deg, ${accent}15, ${accent}08)` }}
            />
          </div>
        </div>

        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div
              className="grid h-11 w-11 place-items-center rounded-2xl border bg-gradient-to-br from-white to-slate-50"
              style={{ borderColor: `${accent}30`, boxShadow: `0 10px 22px ${accent}20` }}
            >
              <Icon className="h-5 w-5" style={{ color: accent }} />
            </div>
            <div 
              className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-semibold"
              style={{ borderColor: `${accent}30`, background: `linear-gradient(90deg, ${accent}08, transparent)`, color: accent }}
            >
              <span className="h-2 w-2 rounded-full" style={{ background: accent }} />
              Professional Service
            </div>
          </div>
        </div>

        <div className="mt-5 text-[15px] font-semibold tracking-tight text-slate-900">{title}</div>
        <div className="mt-2 text-sm leading-relaxed text-slate-600">{desc}</div>

        <div className="mt-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition group-hover:-translate-y-0.5 group-hover:border-slate-300">
              <Layers className="h-4 w-4" />
            </div>
            <div className="grid h-9 w-9 place-items-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition group-hover:-translate-y-0.5 group-hover:border-slate-300">
              <ShieldCheck className="h-4 w-4" />
            </div>
            <div className="grid h-9 w-9 place-items-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition group-hover:-translate-y-0.5 group-hover:border-slate-300">
              <Headphones className="h-4 w-4" />
            </div>
          </div>

          <a
            href="#contact"
            className="group/cta inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300"
          >
            <span className="relative">
              View more
              <span
                className="absolute -bottom-1 left-0 h-[2px] w-0 rounded transition-all duration-300 group-hover:w-full"
                style={{ background: accent }}
              />
            </span>
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" style={{ color: accent }} />
          </a>
        </div>

        <div
          className="pointer-events-none absolute -left-12 -bottom-12 h-44 w-44 rounded-full opacity-0 blur-2xl transition duration-500 group-hover:opacity-100"
          style={{ background: `${accent}18` }}
        />
      </div>
    </motion.div>
  );
}
