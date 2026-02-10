import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { ease, BRAND } from "../constants/brand";
import { services } from "../constants/services";
import { Section } from "../components/shared/Section";
import { Reveal } from "../components/shared/Reveal";
import { ShapeBand } from "../components/shared/ShapeBand";

const processSteps = [
  {
    step: "01",
    title: "Discovery & Planning",
    description: "We start by understanding your business, goals, and requirements through detailed discussions and analysis.",
    color: "#2563EB",
  },
  {
    step: "02",
    title: "Design & Prototype",
    description: "Our team creates wireframes and prototypes to visualize the solution before development begins.",
    color: "#8B5CF6",
  },
  {
    step: "03",
    title: "Development",
    description: "Using agile methodologies, we build your solution with regular updates and feedback integration.",
    color: "#06B6D4",
  },
  {
    step: "04",
    title: "Testing & QA",
    description: "Rigorous testing ensures your product is bug-free, secure, and performs optimally.",
    color: "#10B981",
  },
  {
    step: "05",
    title: "Deployment",
    description: "We launch your solution and ensure smooth transition with zero downtime.",
    color: "#F97316",
  },
  {
    step: "06",
    title: "Support & Maintenance",
    description: "Ongoing support and maintenance to keep your solution running at its best.",
    color: "#F43F5E",
  },
];

const features = [
  "Custom solutions tailored to your needs",
  "Experienced team of professionals",
  "Agile development methodology",
  "24/7 technical support",
  "On-time delivery guarantee",
  "Competitive pricing",
  "Post-launch maintenance",
  "Regular progress updates",
];

export function Services() {
  return (
    <>
      {/* Hero Section */}
      <Section className="pt-32 pb-16">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto">
            <div 
              className="inline-block text-xs font-semibold tracking-widest px-3 py-1 rounded-full mb-4"
              style={{ background: 'linear-gradient(90deg, rgba(139,92,246,0.1), rgba(6,182,212,0.1))', color: '#8B5CF6' }}
            >
              OUR SERVICES
            </div>
            <h1 
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
              style={{
                background: 'linear-gradient(135deg, #0F172A 0%, #8B5CF6 50%, #06B6D4 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Comprehensive IT Solutions
            </h1>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              From concept to deployment, we provide end-to-end technology services that drive business growth and digital transformation.
            </p>
          </div>
        </Reveal>
      </Section>

      {/* Services Grid */}
      <Section className="pb-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.t}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease, delay: i * 0.05 }}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-lg cursor-pointer"
              style={{ borderColor: `${service.accent}20` }}
            >
              <div 
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition group-hover:scale-110"
                style={{ background: `${service.accent}15` }}
              >
                <service.Icon className="h-7 w-7" style={{ color: service.accent }} />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{service.t}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{service.d}</p>
              
              <motion.div 
                className="mt-4 flex items-center gap-1 text-sm font-medium"
                style={{ color: service.accent }}
              >
                Learn More
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </motion.div>

              <div 
                className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-0 blur-2xl transition duration-500 group-hover:opacity-30"
                style={{ background: service.accent }}
              />
            </motion.div>
          ))}
        </div>
      </Section>

      <ShapeBand tone="blue" />

      {/* Process Section */}
      <Section className="py-16">
        <Reveal>
          <div className="text-center mb-12">
            <div 
              className="inline-block text-xs font-semibold tracking-widest px-3 py-1 rounded-full"
              style={{ background: 'linear-gradient(90deg, rgba(6,182,212,0.15), rgba(16,185,129,0.1))', color: '#06B6D4' }}
            >
              OUR PROCESS
            </div>
            <h2 className="mt-4 text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">
              How We Work
            </h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              Our proven methodology ensures successful project delivery every time.
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {processSteps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease, delay: i * 0.08 }}
              className="relative p-6 rounded-2xl border border-slate-200 bg-white"
            >
              <div 
                className="text-4xl font-bold opacity-20 mb-2"
                style={{ color: step.color }}
              >
                {step.step}
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{step.title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{step.description}</p>
              <div 
                className="absolute top-0 left-0 w-1 h-full rounded-l-2xl"
                style={{ background: step.color }}
              />
            </motion.div>
          ))}
        </div>
      </Section>

      <ShapeBand tone="slate" />

      {/* Why Choose Us */}
      <Section className="py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div>
              <div 
                className="inline-block text-xs font-semibold tracking-widest px-3 py-1 rounded-full"
                style={{ background: 'linear-gradient(90deg, rgba(244,63,94,0.1), rgba(249,115,22,0.1))', color: '#F43F5E' }}
              >
                WHY CHOOSE US
              </div>
              <h2 className="mt-4 text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">
                Partner with the Best
              </h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                We combine technical expertise with business acumen to deliver solutions that not only work but drive real results for your organization.
              </p>
              
              <div className="mt-8 grid grid-cols-2 gap-3">
                {features.map((feature, i) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="flex items-center gap-2"
                  >
                    <CheckCircle className="h-5 w-5 shrink-0" style={{ color: BRAND.colors.emerald }} />
                    <span className="text-sm text-slate-700">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div 
              className="p-8 rounded-2xl"
              style={{ background: 'linear-gradient(135deg, rgba(37,99,235,0.05) 0%, rgba(139,92,246,0.05) 50%, rgba(6,182,212,0.05) 100%)' }}
            >
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Get a Free Consultation</h3>
              <p className="text-slate-600 mb-6">
                Tell us about your project and let our experts help you find the perfect solution.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white transition hover:translate-y-[-2px]"
                style={{ background: 'linear-gradient(135deg, #2563EB 0%, #8B5CF6 100%)' }}
              >
                Schedule a Call
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
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
            Ready to Start Your Project?
          </h2>
          <p className="mt-4 text-white/70 max-w-xl mx-auto">
            Let's discuss your requirements and create something amazing together.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-xl text-sm font-semibold text-white transition hover:translate-y-[-2px]"
            style={{ background: 'linear-gradient(135deg, #06B6D4 0%, #10B981 100%)' }}
          >
            Get Started
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </Section>
    </>
  );
}
