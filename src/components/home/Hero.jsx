import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";
import { BRAND, ease } from "../../constants/brand";
import { useInterval } from "../../hooks/useInterval";

export function Hero() {
  const reduceMotion = useReducedMotion();

  const slides = useMemo(
    () => [
      {
        k: "s1",
        title: "WE BUILD RELATIONSHIP, NOT JUST ANOTHER CLIENT",
        desc: "With the mission of digitization and with the vision of becoming the trusted name around the world.",
        cta: "Book for Consultation",
        img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80",
      },
      {
        k: "s2",
        title: "WE PROVIDE THE FASTEST SERVICE",
        desc: "We routinely access global skilled resources and leading-edge technology to deliver large-scale projects.",
        cta: "Get a Quote",
        img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80",
      },
      {
        k: "s3",
        title: "INNOVATIVE & DEDICATED SOLUTIONS",
        desc: "Platforms to manage, govern and distribute data in real-time — enabling faster business decisions.",
        cta: "Explore Services",
        img: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1600&q=80",
      },
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [autoplayOn, setAutoplayOn] = useState(false);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    if (reduceMotion) return;
    const t = window.setTimeout(() => setAutoplayOn(true), 800);
    return () => window.clearTimeout(t);
  }, [reduceMotion]);

  const scheduleNext = () => {
    if (reduceMotion) {
      setIndex((i) => (i + 1) % slides.length);
      return;
    }
    setTransitioning(true);
    window.setTimeout(() => {
      setIndex((i) => (i + 1) % slides.length);
      window.setTimeout(() => setTransitioning(false), 350);
    }, 200);
  };

  useInterval(scheduleNext, hovered || reduceMotion || !autoplayOn ? null : 5000);
  const active = slides[index];

  return (
    <div id="home" className="relative py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl"
        >
          <AnimatePresence>
            {transitioning && !reduceMotion && (
              <motion.div
                className="pointer-events-none absolute inset-0 z-10 bg-white/60"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, ease }}
              />
            )}
          </AnimatePresence>

          <div className="grid items-center gap-0 lg:grid-cols-2">
            <div className="p-8 sm:p-12 lg:p-16">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-medium text-slate-700">
                <span className="h-2 w-2 animate-pulse rounded-full" style={{ background: BRAND.primary }} />
                Digitization • IT Services • ITES Solutions
              </div>

              <AnimatePresence mode="wait" initial={false}>
                <motion.h1
                  key={active.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.6, ease, delay: 0.05 }}
                  className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
                  style={{
                    background: 'linear-gradient(135deg, #0F172A 0%, #334155 50%, #0F172A 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {active.title}
                </motion.h1>
              </AnimatePresence>

              <AnimatePresence mode="wait" initial={false}>
                <motion.p
                  key={active.desc}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.6, ease, delay: 0.1 }}
                  className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg"
                >
                  {active.desc}
                </motion.p>
              </AnimatePresence>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 py-4 text-base font-semibold text-white shadow-lg transition hover:translate-y-[-2px] hover:shadow-xl active:translate-y-0"
                >
                  {active.cta || "Book for Consultation"}
                  <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-slate-200 bg-white px-6 py-4 text-base font-semibold text-slate-800 transition hover:border-slate-300 hover:bg-slate-50"
                >
                  Explore Services
                </a>
              </div>

              <div className="mt-6 grid gap-2 sm:grid-cols-3">
                {[
                  "Minimal design",
                  "Fast performance",
                  "Business-ready",
                ].map((b, i) => (
                  <motion.div
                    key={b}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease, delay: 0.08 + i * 0.06 }}
                    className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-xs text-slate-700"
                  >
                    <CheckCircle2 className="h-4 w-4" style={{ color: BRAND.primary }} />
                    {b}
                  </motion.div>
                ))}
              </div>

              <div className="mt-7 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {slides.map((s, i) => (
                    <button
                      key={s.k}
                      onClick={() => setIndex(i)}
                      className={`h-2 rounded-full transition-all ${
                        i === index ? "w-10 bg-slate-900" : "w-2 bg-slate-300 hover:bg-slate-400"
                      }`}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIndex((i) => (i - 1 + slides.length) % slides.length)}
                    className="rounded-lg border border-slate-200 bg-white p-2 text-slate-700 transition hover:bg-slate-50"
                    aria-label="Previous slide"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setIndex((i) => (i + 1) % slides.length)}
                    className="rounded-lg border border-slate-200 bg-white p-2 text-slate-700 transition hover:bg-slate-50"
                    aria-label="Next slide"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            <div className="relative h-[280px] w-full bg-slate-100 sm:h-[360px] lg:h-[480px]">
              <AnimatePresence mode="wait" initial={false}>
                <motion.img
                  key={active.img}
                  src={active.img}
                  alt="Hero"
                  className="absolute inset-0 h-full w-full object-cover"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.7, ease, delay: 0.05 }}
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
