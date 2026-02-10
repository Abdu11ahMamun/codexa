import { motion } from "framer-motion";
import { ArrowRight, Target, Eye, Heart, Users, Award, Globe, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { ease, BRAND } from "../constants/brand";
import { Section } from "../components/shared/Section";
import { Reveal } from "../components/shared/Reveal";
import { ShapeBand } from "../components/shared/ShapeBand";

const values = [
  {
    icon: Target,
    title: "Mission",
    description: "To empower businesses with innovative technology solutions that drive growth, efficiency, and competitive advantage in the digital landscape.",
    color: "#2563EB",
    gradient: "from-blue-100 to-cyan-100",
  },
  {
    icon: Eye,
    title: "Vision",
    description: "To be the most trusted technology partner for businesses worldwide, known for excellence, innovation, and delivering transformative digital solutions.",
    color: "#8B5CF6",
    gradient: "from-violet-100 to-purple-100",
  },
  {
    icon: Heart,
    title: "Values",
    description: "Integrity, innovation, collaboration, and client success are at the core of everything we do. We build lasting relationships through trust and excellence.",
    color: "#F43F5E",
    gradient: "from-rose-100 to-pink-100",
  },
];

const stats = [
  { number: "2500+", label: "Projects Completed", icon: Award },
  { number: "30+", label: "Happy Clients", icon: Users },
  { number: "5+", label: "Years Experience", icon: Globe },
  { number: "99%", label: "Client Satisfaction", icon: CheckCircle },
];

export function About() {
  return (
    <>
      {/* Hero Section */}
      <Section className="pt-32 pb-16">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto">
            <div 
              className="inline-block text-xs font-semibold tracking-widest px-3 py-1 rounded-full mb-4"
              style={{ background: 'linear-gradient(90deg, rgba(37,99,235,0.1), rgba(139,92,246,0.1))', color: '#2563EB' }}
            >
              ABOUT CODEXA
            </div>
            <h1 
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
              style={{
                background: 'linear-gradient(135deg, #0F172A 0%, #2563EB 50%, #8B5CF6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Shaping Digital Solutions for Tomorrow
            </h1>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Transforming ideas through smart technology — partnering with you for digital success.
            </p>
          </div>
        </Reveal>
      </Section>

      {/* Story Section */}
      <Section className="py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div>
              <div 
                className="inline-block text-xs font-semibold tracking-widest px-3 py-1 rounded-full"
                style={{ background: 'linear-gradient(90deg, rgba(6,182,212,0.15), rgba(16,185,129,0.1))', color: '#06B6D4' }}
              >
                OUR STORY
              </div>
              <h2 className="mt-4 text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">
                Shaping Digital Solutions for Tomorrow
              </h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Codexa IT was established by a team of experienced professionals with diverse expertise and deep industry exposure in Information Technology. Our team consists of driven business graduates and skilled engineers educated at respected institutions, bringing together technical knowledge and strategic insight to deliver impactful solutions.
              </p>
              <p className="mt-4 text-slate-600 leading-relaxed">
                We leverage global talent and modern technologies to support scalable, efficient project execution, creating reliable foundations for long-term success across projects of all sizes.
              </p>
              <p className="mt-4 text-slate-600 leading-relaxed font-medium" style={{ color: '#06B6D4' }}>
                Fast Support for Fast-Moving Organizations
              </p>
              <p className="mt-2 text-slate-600 leading-relaxed">
                Our sales and technical teams are committed to delivering responsive, high-quality support. We help organizations store, access, analyze, and visualize data efficiently — enabling better performance, faster decisions, and measurable business value.
              </p>
            </div>
          </Reveal>
          
          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease, delay: i * 0.1 }}
                  className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm text-center"
                >
                  <stat.icon className="h-8 w-8 mx-auto mb-3" style={{ color: BRAND.colors.blue }} />
                  <div className="text-3xl font-bold" style={{ color: BRAND.colors.navy }}>{stat.number}</div>
                  <div className="text-sm text-slate-600 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      <ShapeBand tone="blue" />

      {/* Mission, Vision, Values */}
      <Section className="py-16">
        <Reveal>
          <div className="text-center mb-12">
            <div 
              className="inline-block text-xs font-semibold tracking-widest px-3 py-1 rounded-full"
              style={{ background: 'linear-gradient(90deg, rgba(244,63,94,0.1), rgba(249,115,22,0.1))', color: '#F43F5E' }}
            >
              WHAT DRIVES US
            </div>
            <h2 className="mt-4 text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">
              Our Foundation
            </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-lg"
              style={{ borderColor: `${value.color}20` }}
            >
              <div 
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                style={{ background: `${value.color}15` }}
              >
                <value.icon className="h-7 w-7" style={{ color: value.color }} />
              </div>
              <h3 className="text-xl font-semibold text-slate-900">{value.title}</h3>
              <p className="mt-3 text-slate-600 leading-relaxed">{value.description}</p>
              <div className={`pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${value.gradient} opacity-0 blur-2xl transition duration-500 group-hover:opacity-100`} />
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="text-center py-12 px-6 rounded-2xl"
          style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E3A5F 50%, #2563EB 100%)' }}
        >
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">
            Ready to Work Together?
          </h2>
          <p className="mt-4 text-white/70 max-w-xl mx-auto">
            Let's discuss how we can help transform your business with our technology solutions.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-xl text-sm font-semibold text-white transition hover:translate-y-[-2px]"
            style={{ background: 'linear-gradient(135deg, #06B6D4 0%, #10B981 100%)' }}
          >
            Get In Touch
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </Section>
    </>
  );
}
