import { motion, useReducedMotion } from "framer-motion";
import { ease } from "../../constants/brand";
import { Reveal } from "../shared/Reveal";

export function WhyChooseUs() {
  const reduceMotion = useReducedMotion();
  const items = [
    {
      t: "Skilled & Expertise Services 24/7",
      d: "Dedicated, trained professionals who stay up-to-date with modern practices.",
      color: "#2563EB",
      gradient: "from-blue-100 to-cyan-100",
    },
    {
      t: "Precise & Effective Results",
      d: "We care about details — delivering quality outcomes with measurable impact.",
      color: "#8B5CF6",
      gradient: "from-violet-100 to-purple-100",
    },
    {
      t: "On-time delivery with support",
      d: "Structured workflow, clear communication, and dependable post-delivery support.",
      color: "#10B981",
      gradient: "from-emerald-100 to-teal-100",
    },
  ];

  return (
    <div>
      <Reveal>
        <div className="text-center">
          <div 
            className="inline-block text-xs font-semibold tracking-widest px-3 py-1 rounded-full"
            style={{ background: 'linear-gradient(90deg, rgba(244,63,94,0.1), rgba(249,115,22,0.1))', color: '#F43F5E' }}
          >
            WHY CHOOSE US?
          </div>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl"
            style={{
              background: 'linear-gradient(135deg, #0F172A 0%, #F43F5E 50%, #F97316 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Turning Vision into Reliable Outcomes
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
            Every successful project begins with the right guidance — we support that journey with experienced professionals and dependable execution.
          </p>
        </div>
      </Reveal>

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {items.map((it, i) => (
          <motion.div
            key={it.t}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.65, ease, delay: i * 0.06 }}
            whileHover={reduceMotion ? undefined : { y: -5 }}
            className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_1px_0_rgba(0,0,0,0.02)] transition hover:shadow-[0_18px_40px_rgba(0,0,0,0.10)]"
            style={{ borderColor: `${it.color}20` }}
          >
            <div
              className="h-1 w-10 rounded-full transition-all duration-300 group-hover:w-14"
              style={{ background: `linear-gradient(90deg, ${it.color}, ${it.color}99)` }}
            />
            <div className="mt-4 text-sm font-semibold text-slate-900">{it.t}</div>
            <div className="mt-2 text-sm leading-relaxed text-slate-600">{it.d}</div>
            <div className={`pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-br ${it.gradient} opacity-0 blur-2xl transition duration-500 group-hover:opacity-100`} />
            <div className={`pointer-events-none absolute -left-12 -bottom-12 h-32 w-32 rounded-full bg-gradient-to-br ${it.gradient} opacity-0 blur-2xl transition duration-500 group-hover:opacity-100`} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
