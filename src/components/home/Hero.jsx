import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { ease } from "../../constants/brand";
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

  useEffect(() => {
    if (reduceMotion) return;
    const t = window.setTimeout(() => setAutoplayOn(true), 800);
    return () => window.clearTimeout(t);
  }, [reduceMotion]);

  const scheduleNext = () => {
    setIndex((i) => (i + 1) % slides.length);
  };

  useInterval(scheduleNext, hovered || reduceMotion || !autoplayOn ? null : 5000);
  const active = slides[index];

  return (
    <div id="home" className="relative py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="relative overflow-hidden rounded-2xl"
          style={{ minHeight: '600px' }}
        >
          {/* Background Image */}
          <AnimatePresence mode="wait" initial={false}>
            <motion.img
              key={active.img}
              src={active.img}
              alt="Hero"
              className="absolute inset-0 h-full w-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease }}
            />
          </AnimatePresence>

          {/* Clean overlay */}
          <div className="absolute inset-0 bg-slate-900/50" />

          {/* Content */}
          <div className="relative z-10 flex h-full min-h-[600px] flex-col justify-center px-8 py-16 sm:px-16 lg:px-24">
            <div className="max-w-2xl">
              <AnimatePresence mode="wait" initial={false}>
                <motion.h1
                  key={active.title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease }}
                  className="text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl"
                >
                  {active.title}
                </motion.h1>
              </AnimatePresence>

              <AnimatePresence mode="wait" initial={false}>
                <motion.p
                  key={active.desc}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease, delay: 0.05 }}
                  className="mt-6 max-w-lg text-base text-white/80 sm:text-lg"
                >
                  {active.desc}
                </motion.p>
              </AnimatePresence>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-medium text-slate-900 transition hover:bg-white/90"
                >
                  {active.cta || "Get Started"}
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
                >
                  Learn More
                </a>
              </div>
            </div>

            {/* Navigation - Bottom right */}
            <div className="absolute bottom-8 right-8 flex items-center gap-4 sm:right-16 lg:right-24">
              <div className="flex items-center gap-1.5">
                {slides.map((s, i) => (
                  <button
                    key={s.k}
                    onClick={() => setIndex(i)}
                    className={`h-1.5 rounded-full transition-all ${
                      i === index ? "w-8 bg-white" : "w-1.5 bg-white/40 hover:bg-white/60"
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={() => setIndex((i) => (i - 1 + slides.length) % slides.length)}
                  className="rounded-md p-2 text-white/70 transition hover:bg-white/10 hover:text-white"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setIndex((i) => (i + 1) % slides.length)}
                  className="rounded-md p-2 text-white/70 transition hover:bg-white/10 hover:text-white"
                  aria-label="Next slide"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Slide counter - Bottom left */}
            <div className="absolute bottom-8 left-8 sm:left-16 lg:left-24">
              <span className="text-sm font-medium text-white/60">
                {String(index + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
