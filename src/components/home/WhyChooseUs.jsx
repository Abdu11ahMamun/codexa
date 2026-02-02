import { motion, useReducedMotion } from "framer-motion";
import { BRAND, ease } from "../../constants/brand";
import { Reveal } from "../shared/Reveal";

export function WhyChooseUs() {
  const reduceMotion = useReducedMotion();
  const items = [
    {
      t: "Skilled & Expertise Services 24/7",
      d: "Dedicated, trained professionals who stay up-to-date with modern practices.",
    },
    {
      t: "Precise & Effective Results",
      d: "We care about details — delivering quality outcomes with measurable impact.",
    },
    {
      t: "On-time delivery with support",
      d: "Structured workflow, clear communication, and dependable post-delivery support.",
    },
  ];

  return (
    <div>
      <Reveal>
        <div className="text-center">
          <div className="text-xs font-semibold tracking-widest text-slate-500">WHY CHOOSE US?</div>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Your Dream. Our Mission.
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
            Taking the first step is the biggest hurdle — we make it easier with skilled people and reliable delivery.
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
            className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_1px_0_rgba(0,0,0,0.02)] transition hover:border-slate-300 hover:shadow-[0_18px_40px_rgba(0,0,0,0.10)]"
          >
            <div
              className="h-1 w-10 rounded-full transition-all duration-300 group-hover:w-14"
              style={{ background: BRAND.primary }}
            />
            <div className="mt-4 text-sm font-semibold text-slate-900">{it.t}</div>
            <div className="mt-2 text-sm leading-relaxed text-slate-600">{it.d}</div>
            <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-blue-100 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100" />
            <div className="pointer-events-none absolute -left-12 -bottom-12 h-32 w-32 rounded-full bg-indigo-100 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
