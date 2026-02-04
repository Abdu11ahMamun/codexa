import { useReducedMotion } from "framer-motion";
import { services } from "../../constants/services";
import { Reveal } from "../shared/Reveal";
import { ServiceCard } from "./ServiceCard";

export function Services() {
  const reduceMotion = useReducedMotion();

  return (
    <div id="services" className="relative">
      <div aria-hidden className="pointer-events-none absolute -right-24 top-6 h-60 w-60 rounded-[46%] bg-gradient-to-br from-rose-100/60 to-orange-100/40 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute left-[-90px] bottom-[-60px] h-72 w-72 rounded-[44%] bg-gradient-to-br from-violet-100/50 to-blue-100/40 blur-3xl" />

      <Reveal>
        <div className="text-center">
          <div 
            className="inline-block text-xs font-semibold tracking-widest px-3 py-1 rounded-full"
            style={{ background: 'linear-gradient(90deg, rgba(37,99,235,0.1), rgba(139,92,246,0.1))', color: '#8B5CF6' }}
          >
            SERVICES
          </div>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            What can we do for you?
          </h2>
          <div 
            className="mt-1 text-xs font-semibold tracking-widest"
            style={{ 
              background: 'linear-gradient(90deg, #2563EB, #8B5CF6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            We solve real problem
          </div>
        </div>
      </Reveal>

      <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-3" style={{ perspective: 1200 }}>
        {services.map((c, i) => (
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
