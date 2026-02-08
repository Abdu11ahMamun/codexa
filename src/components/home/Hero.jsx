import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";
import { BRAND, ease } from "../../constants/brand";
import { useInterval } from "../../hooks/useInterval";

// Import slide images
import slide1 from "../../assets/Codexa Slide 1.png";
import slide2 from "../../assets/Codexa Slide 2.png";
import slide3 from "../../assets/Codexa Slide 3.png";
import slide5 from "../../assets/Codexa Slide 5.png";
import slide6 from "../../assets/Codexa Slide 6.png";
import slide7 from "../../assets/Codexa Slide 7.png";
import slide8 from "../../assets/Codexa Slide 8.png";
import slide9 from "../../assets/Codexa Slide 9.png";
import slide10 from "../../assets/Codexa Slide 10.png";

export function Hero() {
  const reduceMotion = useReducedMotion();

  const slides = useMemo(
    () => [
      {
        k: "s1",
        title: "WE BUILD RELATIONSHIP, NOT JUST ANOTHER CLIENT",
        desc: "With the mission of digitization and with the vision of becoming the trusted name around the world.",
        cta: "Book for Consultation",
        img: slide1,
      },
      {
        k: "s2",
        title: "WE PROVIDE THE FASTEST SERVICE",
        desc: "We routinely access global skilled resources and leading-edge technology to deliver large-scale projects.",
        cta: "Get a Quote",
        img: slide2,
      },
      {
        k: "s3",
        title: "INNOVATIVE & DEDICATED SOLUTIONS",
        desc: "Platforms to manage, govern and distribute data in real-time — enabling faster business decisions.",
        cta: "Explore Services",
        img: slide3,
      },
      {
        k: "s5",
        title: "TRUSTED TECHNOLOGY PARTNER",
        desc: "Building long-term partnerships through reliable, scalable solutions tailored to your business needs.",
        cta: "Start Your Journey",
        img: slide5,
      },
      {
        k: "s6",
        title: "GLOBAL EXPERTISE, LOCAL TOUCH",
        desc: "Combining worldwide best practices with personalized service to drive your digital transformation.",
        cta: "Learn More",
        img: slide6,
      },
      {
        k: "s7",
        title: "EMPOWERING YOUR BUSINESS",
        desc: "Delivering cutting-edge IT solutions that accelerate growth and maximize efficiency.",
        cta: "Discover Solutions",
        img: slide7,
      },
      {
        k: "s8",
        title: "INNOVATION AT EVERY STEP",
        desc: "From concept to deployment, we bring innovation and excellence to every project we undertake.",
        cta: "Work With Us",
        img: slide8,
      },
      {
        k: "s9",
        title: "YOUR SUCCESS, OUR MISSION",
        desc: "Dedicated teams working around the clock to ensure your projects succeed beyond expectations.",
        cta: "Get Started",
        img: slide9,
      },
      {
        k: "s10",
        title: "DRIVING DIGITAL EXCELLENCE",
        desc: "Transform your business with our comprehensive suite of digital services and solutions.",
        cta: "Contact Us",
        img: slide10,
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

  useInterval(scheduleNext, hovered || reduceMotion || !autoplayOn ? null : 3000);
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
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/60 bg-gradient-to-r from-blue-50 to-violet-50 px-4 py-2 text-xs font-medium text-slate-700">
                <span className="h-2 w-2 animate-pulse rounded-full bg-gradient-to-r from-blue-500 to-violet-500" />
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
                    background: 'linear-gradient(135deg, #2563EB 0%, #8B5CF6 40%, #F43F5E 80%, #F97316 100%)',
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
                  className="group inline-flex items-center justify-center gap-2 rounded-xl px-6 py-4 text-base font-semibold text-white shadow-lg transition hover:translate-y-[-2px] hover:shadow-xl active:translate-y-0"
                  style={{ background: 'linear-gradient(135deg, #2563EB 0%, #8B5CF6 100%)' }}
                >
                  {active.cta || "Book for Consultation"}
                  <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-violet-200 bg-white px-6 py-4 text-base font-semibold text-violet-700 transition hover:border-violet-300 hover:bg-violet-50"
                >
                  Explore Services
                </a>
              </div>

              <div className="mt-6 grid gap-2 sm:grid-cols-3">
                {[
                  { text: "Minimal design", color: "#2563EB" },
                  { text: "Fast performance", color: "#8B5CF6" },
                  { text: "Business-ready", color: "#10B981" },
                ].map((b, i) => (
                  <motion.div
                    key={b.text}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease, delay: 0.08 + i * 0.06 }}
                    className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-xs text-slate-700"
                  >
                    <CheckCircle2 className="h-4 w-4" style={{ color: b.color }} />
                    {b.text}
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
                        i === index ? "w-10" : "w-2 bg-slate-300 hover:bg-slate-400"
                      }`}
                      style={i === index ? { background: 'linear-gradient(90deg, #2563EB, #8B5CF6)' } : {}}
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
