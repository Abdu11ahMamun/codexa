import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  ShieldCheck,
  Headphones,
  Clock3,
  Layers,
  Code2,
  Monitor,
  Smartphone,
  BarChart3,
  Palette,
  Bug,
  Briefcase,
  Building2,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Linkedin,
  Instagram,
} from "lucide-react";

const BRAND = {
  name: "Codexa",
  tagline: "We build relationship, not just another client.",
  primary: "#2563EB",
};

const ease = [0.16, 1, 0.3, 1];
const cn = (...xs) => xs.filter(Boolean).join(" ");

function useInterval(callback, delay) {
  const saved = useRef(callback);
  useEffect(() => {
    saved.current = callback;
  }, [callback]);
  useEffect(() => {
    if (delay == null) return;
    const id = window.setInterval(() => saved.current(), delay);
    return () => window.clearInterval(id);
  }, [delay]);
}

function runSanityChecks() {
  console.assert(typeof BRAND.name === "string" && BRAND.name.length > 0, "BRAND.name missing");
  console.assert(/^#([0-9a-fA-F]{6})$/.test(BRAND.primary), "BRAND.primary should be a hex color");
}

function Reveal({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.7, ease, delay }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    runSanityChecks();
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Background />
      <Header scrolled={scrolled} />

      <main>
        <Hero />

        <Section className="pt-10">
          <TrustStrip />
        </Section>

        <Section className="pt-10">
          <ClientStrip />
        </Section>

        <ShapeBand tone="blue" />

        <Section className="py-16">
          <WhoWeAre />
        </Section>

        <ShapeBand tone="slate" />

        <Section className="pb-16">
          <Services />
        </Section>

        <Section className="pb-16">
          <WhyChooseUs />
        </Section>

        <Section className="pb-16">
          <CTA />
        </Section>
      </main>

      <Footer />
    </div>
  );
}

function Header({ scrolled }) {
  return (
    <div className="sticky top-0 z-50">
      <div className={cn("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", scrolled ? "py-3" : "py-5")}>
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className={cn(
            "rounded-2xl border transition-all duration-300",
            scrolled
              ? "border-slate-200 bg-white/95 shadow-lg backdrop-blur-md"
              : "border-slate-100 bg-white shadow-sm"
          )}
        >
          <div className="flex items-center justify-between gap-4 px-5 py-4 sm:px-6">
            <div className="flex items-center gap-4">
              <Logo />
              <div className="leading-tight">
                <div className="text-base font-bold tracking-tight">{BRAND.name}</div>
                <div className="text-xs text-slate-500">{BRAND.tagline}</div>
              </div>
            </div>

            <nav className="hidden items-center gap-2 md:flex">
              {[
                { t: "Home", a: "#home" },
                { t: "About", a: "#about" },
                { t: "Services", a: "#services" },
                { t: "Contact", a: "#contact" },
              ].map((l) => (
                <a
                  key={l.t}
                  href={l.a}
                  className="rounded-xl px-5 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-slate-900"
                >
                  {l.t}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
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

              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:translate-y-[-2px] hover:shadow-md active:translate-y-0"
              >
                Get a Quote
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function SocialIcon({ href, label, brand, children }) {
  const reduceMotion = useReducedMotion();
  const brandColor = brand === "facebook" ? "#1877F2" : brand === "linkedin" ? "#0A66C2" : "#E4405F";

  return (
    <motion.a
      href={href}
      aria-label={label}
      title={label}
      whileHover={reduceMotion ? undefined : { y: -2 }}
      style={{ "--brand": brandColor }}
      className="group relative grid h-10 w-10 place-items-center rounded-xl border border-slate-200 bg-white text-slate-600 transition hover:bg-slate-50"
    >
      <span className="grid h-full w-full place-items-center rounded-xl text-slate-600 transition group-hover:scale-[1.02] group-hover:text-[var(--brand)]">
        {children}
      </span>
      <span
        className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{ boxShadow: `0 0 0 3px ${brandColor}22`, border: `1px solid ${brandColor}55` }}
      />
    </motion.a>
  );
}

function Hero() {
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
                  className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
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
                      className={cn(
                        "h-2 rounded-full transition-all",
                        i === index ? "w-10 bg-slate-900" : "w-2 bg-slate-300 hover:bg-slate-400"
                      )}
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

function TrustStrip() {
  const items = [
    { icon: ShieldCheck, t: "Secure practices" },
    { icon: Clock3, t: "On-time delivery" },
    { icon: Headphones, t: "Responsive support" },
    { icon: Layers, t: "Clean structure" },
  ];

  return (
    <div className="rounded-2xl border border-slate-200 bg-white">
      <div className="grid gap-0 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it, i) => {
          const Icon = it.icon;
          return (
            <motion.div
              key={it.t}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.6, ease, delay: i * 0.05 }}
              className={cn(
                "flex items-center gap-3 px-5 py-5",
                "border-slate-200",
                i % 2 === 1 ? "sm:border-l" : "",
                i >= 2 ? "lg:border-l" : "",
                i >= 2 ? "sm:border-t lg:border-t-0" : "",
                i === 1 ? "sm:border-t-0" : ""
              )}
            >
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-slate-50">
                <Icon className="h-4 w-4" style={{ color: BRAND.primary }} />
              </div>
              <div>
                <div className="text-sm font-semibold text-slate-900">{it.t}</div>
                <div className="text-xs text-slate-500">Business-ready quality</div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

function ClientStrip() {
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

function WhoWeAre() {
  return (
    <div id="about" className="relative">
      <div aria-hidden className="pointer-events-none absolute -left-24 top-8 h-56 w-56 rounded-[46%] bg-blue-100/60 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute right-[-90px] bottom-[-40px] h-64 w-64 rounded-[45%] bg-indigo-100/50 blur-3xl" />

      <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-6">
          <Reveal>
            <div className="text-xs font-semibold tracking-widest text-slate-500">ABOUT US</div>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              We build relationship, not just another client
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
              The company has been formed by a group of professionals having vivid experience and wide exposure to
              Information Technology. People involved here are young qualified business graduates and qualified engineers
              from renowned universities across the globe.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
              We routinely access global skilled resources and leading-edge technology that is essential in creating a
              strong foundation of success for large-scale projects.
            </p>

            <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <div className="text-sm font-semibold text-slate-900">We provide the fastest service</div>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                We have sales and technical support teams committed to providing the highest quality services. We help
                organizations store, access, consume, and visualize data — so businesses can compete aggressively,
                improve performance, and accelerate time to value.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:translate-y-[-1px] active:translate-y-0"
              >
                Follow Us
                <ArrowRight className="h-4 w-4" />
              </a>
              <div className="flex items-center gap-2">
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
          </Reveal>
        </div>

        <div className="lg:col-span-6">
          <Reveal delay={0.05}>
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
              <img
                alt="Team / work"
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80"
                className="h-[320px] w-full object-cover sm:h-[380px]"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-white/60 via-transparent to-transparent" />
              <div className="pointer-events-none absolute -bottom-10 -left-10 h-44 w-72 rounded-[999px] bg-blue-100/70 blur-2xl" />
              <div className="pointer-events-none absolute -top-10 -right-10 h-52 w-52 rounded-[44%] bg-rose-100/60 blur-2xl" />
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}

function Services() {
  const reduceMotion = useReducedMotion();

  const cards = [
    { t: "IT Consultancy", d: "Expert consultancy to choose the right technology and roadmap.", accent: "#2563EB", Icon: Briefcase },
    { t: "Software Solution", d: "Custom software development to streamline business workflows.", accent: "#4F46E5", Icon: Code2 },
    { t: "Web Development", d: "Corporate websites and web applications with modern UI/UX.", accent: "#0EA5E9", Icon: Monitor },
    { t: "App Development", d: "Mobile applications for iOS/Android with scalable architecture.", accent: "#14B8A6", Icon: Smartphone },
    { t: "Data Analytics", d: "Real-time insights, dashboards, and reporting for better decisions.", accent: "#F97316", Icon: BarChart3 },
    { t: "UI/UX Design", d: "Professional interface design focused on clarity and usability.", accent: "#E11D48", Icon: Palette },
    { t: "QA Testing", d: "Quality assurance and testing to ensure stable product delivery.", accent: "#64748B", Icon: Bug },
    { t: "BPO", d: "Business Process Outsourcing for efficient operations and cost savings.", accent: "#111827", Icon: Building2 },
  ];

  console.assert(cards.length > 0, "Services.cards must not be empty");
  console.assert(cards.every((c) => !!c.Icon), "Services: each card must include an Icon");

  return (
    <div id="services" className="relative">
      <div aria-hidden className="pointer-events-none absolute -right-24 top-6 h-60 w-60 rounded-[46%] bg-rose-100/50 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute left-[-90px] bottom-[-60px] h-72 w-72 rounded-[44%] bg-slate-100/70 blur-3xl" />

      <Reveal>
        <div className="text-center">
          <div className="text-xs font-semibold tracking-widest text-slate-500">SERVICES</div>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            What can we do for you?
          </h2>
          <div className="mt-1 text-xs font-semibold tracking-widest" style={{ color: BRAND.primary }}>
            We solve real problem
          </div>
        </div>
      </Reveal>

      <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-3" style={{ perspective: 1200 }}>
        {cards.map((c, i) => (
          <ServiceCard
            key={c.t}
            reduceMotion={!!reduceMotion}
            title={c.t}
            desc={c.d}
            accent={c.accent}
            Icon={c.Icon}
            delay={i * 0.05}
          />
        ))}
      </div>
    </div>
  );
}

function ServiceCard({ title, desc, accent, Icon, delay, reduceMotion }) {
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
            "linear-gradient(135deg, rgba(37,99,235,0.22), rgba(99,102,241,0.12), rgba(15,23,42,0.10))",
        }}
      />

      <div className="absolute -inset-3 rounded-[32px] bg-slate-200/35 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100" />

      <div className="relative overflow-hidden rounded-[30px] border border-slate-200 bg-white p-7 shadow-[0_22px_55px_rgba(2,6,23,0.11)]">
        <div className="pointer-events-none absolute -right-8 -top-8">
          <div className="relative h-32 w-32">
            <div className="absolute inset-0 rounded-full border border-slate-200/70 bg-white/30" />
            <div className="absolute inset-3 rounded-full border border-slate-200/60 bg-white/35" />
            <div
              className="absolute inset-6 rounded-full border opacity-70"
              style={{ borderColor: `${accent}55`, background: `${accent}10` }}
            />
          </div>
        </div>

        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div
              className="grid h-11 w-11 place-items-center rounded-2xl border border-slate-200 bg-slate-50"
              style={{ boxShadow: `0 10px 22px ${accent}14` }}
            >
              <Icon className="h-5 w-5" style={{ color: accent }} />
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] font-semibold text-slate-600">
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

function WhyChooseUs() {
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

function CTA() {
  return (
    <div id="contact" className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-900">
      <div className="grid gap-6 p-7 sm:p-10 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-7">
          <Reveal>
            <div className="text-xs font-semibold tracking-widest text-white/60">CONTACT</div>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Let's build a professional business website
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-white/70 sm:text-base">
              Tell us what you need. We'll reply within 24 hours with a plan and timeline.
            </p>

            <div className="mt-6 grid gap-3 text-sm text-white/75 sm:grid-cols-2">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" /> hello@codexa.dev
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" /> +880 1X XXX XXXX
              </div>
              <div className="flex items-center gap-2 sm:col-span-2">
                <MapPin className="h-4 w-4" /> Dhaka (Remote)
              </div>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-5">
          <Reveal delay={0.05}>
            <form className="rounded-2xl bg-white p-6">
              <div className="grid gap-4">
                <Field label="Your name" placeholder="e.g., Sarah" />
                <Field label="Email" placeholder="name@company.com" />
                <Field label="Subject" placeholder="Business website / services" />
                <FieldText label="Message" placeholder="Briefly describe your requirements..." />
                <button
                  type="button"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:translate-y-[-1px] active:translate-y-0"
                >
                  Send Message
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </button>
              </div>
              <div className="mt-3 text-xs text-slate-500">No spam. Professional communication only.</div>
            </form>
          </Reveal>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <Logo />
            <div>
              <div className="text-sm font-semibold text-slate-900">{BRAND.name}</div>
              <div className="text-xs text-slate-500">Home • About • Services • Contact</div>
            </div>
          </div>
          <div className="text-xs text-slate-500">© {new Date().getFullYear()} Codexa. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}

function Section({ children, className }) {
  return <section className={cn("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", className)}>{children}</section>;
}

function Logo() {
  return (
    <div className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 bg-slate-50">
      <div className="grid h-7 w-7 place-items-center rounded-lg bg-white shadow-sm">
        <span className="text-xs font-black" style={{ color: BRAND.primary }}>
          C
        </span>
      </div>
    </div>
  );
}

function Field({ label, placeholder }) {
  const reduceMotion = useReducedMotion();
  return (
    <label className="grid gap-2">
      <span className="text-xs font-semibold text-slate-600">{label}</span>
      <motion.input
        whileFocus={reduceMotion ? undefined : { scale: 1.005 }}
        transition={{ duration: 0.2, ease }}
        placeholder={placeholder}
        className="h-11 rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-slate-300"
      />
    </label>
  );
}

function FieldText({ label, placeholder, rows = 4 }) {
  const reduceMotion = useReducedMotion();
  return (
    <label className="grid gap-2">
      <span className="text-xs font-semibold text-slate-600">{label}</span>
      <motion.textarea
        whileFocus={reduceMotion ? undefined : { scale: 1.005 }}
        transition={{ duration: 0.2, ease }}
        placeholder={placeholder}
        rows={rows}
        className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-slate-300"
      />
    </label>
  );
}

function Background() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="pointer-events-none fixed inset-0 -z-50">
      <div className="absolute inset-0 bg-white" />

      <div className="absolute inset-0 opacity-[0.22] [background-image:radial-gradient(rgba(15,23,42,0.18)_1px,transparent_1px)] [background-size:22px_22px]" />

      <div className="absolute -left-40 top-20 h-80 w-80 rounded-[42%] bg-blue-100/55 blur-3xl" />
      <div className="absolute right-[-140px] top-[-70px] h-[420px] w-[420px] rounded-[45%] bg-rose-100/45 blur-3xl" />
      <div className="absolute right-24 bottom-[-160px] h-[380px] w-[380px] rounded-[46%] bg-indigo-100/45 blur-3xl" />

      {!reduceMotion && (
        <motion.div
          className="absolute left-10 top-[420px] h-40 w-40 rounded-full bg-blue-50 blur-2xl"
          animate={{ y: [0, 14, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      )}

      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.0),rgba(255,255,255,1))]" />
    </div>
  );
}

function ShapeBand({ tone }) {
  const c1 = tone === "blue" ? "rgba(37,99,235,0.10)" : "rgba(15,23,42,0.06)";
  const c2 = tone === "blue" ? "rgba(37,99,235,0.06)" : "rgba(15,23,42,0.04)";

  return (
    <div aria-hidden className="relative -mb-8 mt-10">
      <div className="h-24 w-full bg-gradient-to-b from-white via-white to-transparent" />
      <svg className="absolute left-0 top-0 h-24 w-full" viewBox="0 0 1440 140" preserveAspectRatio="none">
        <path
          d="M0,64 C160,110 320,120 480,92 C640,64 800,10 960,20 C1120,30 1280,92 1440,64 L1440,0 L0,0 Z"
          fill={c1}
        />
        <path
          d="M0,92 C220,120 420,116 640,86 C860,56 1080,10 1440,38 L1440,0 L0,0 Z"
          fill={c2}
        />
      </svg>
    </div>
  );
}