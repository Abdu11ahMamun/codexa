import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Briefcase, 
  Users, 
  Heart, 
  Zap, 
  Coffee,
  GraduationCap,
  Gift,
  Send
} from "lucide-react";
import { ease, BRAND } from "../constants/brand";
import { Section } from "../components/shared/Section";
import { Reveal } from "../components/shared/Reveal";
import { ShapeBand } from "../components/shared/ShapeBand";
import { Field } from "../components/shared/Field";
import { FieldText } from "../components/shared/FieldText";

const benefits = [
  {
    icon: GraduationCap,
    title: "Learning & Growth",
    description: "Continuous learning opportunities and skill development programs.",
    color: "#2563EB",
  },
  {
    icon: Gift,
    title: "Competitive Salary",
    description: "Industry-competitive compensation with performance bonuses.",
    color: "#10B981",
  },
  {
    icon: Coffee,
    title: "Work-Life Balance",
    description: "We respect your personal time and encourage healthy boundaries.",
    color: "#F97316",
  },
];

const culturePoints = [
  { icon: Users, text: "Collaborative Environment", color: "#2563EB" },
  { icon: Zap, text: "Innovation First", color: "#8B5CF6" },
  { icon: Heart, text: "People-Centric Culture", color: "#F43F5E" },
  { icon: GraduationCap, text: "Continuous Learning", color: "#06B6D4" },
];

export function Careers() {
  return (
    <>
      {/* Hero Section */}
      <Section className="pt-32 pb-16">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto">
            <div 
              className="inline-block text-xs font-semibold tracking-widest px-3 py-1 rounded-full mb-4"
              style={{ background: 'linear-gradient(90deg, rgba(16,185,129,0.1), rgba(6,182,212,0.1))', color: '#10B981' }}
            >
              JOIN OUR TEAM
            </div>
            <h1 
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
              style={{
                background: 'linear-gradient(135deg, #0F172A 0%, #10B981 50%, #06B6D4 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Build Your Career with Codexa
            </h1>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Join a team of passionate professionals where your ideas matter, growth is encouraged, and every day brings new opportunities to make an impact.
            </p>
          </div>
        </Reveal>

        {/* Culture Points */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {culturePoints.map((point, i) => (
            <motion.div
              key={point.text}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white"
            >
              <point.icon className="h-4 w-4" style={{ color: point.color }} />
              <span className="text-sm font-medium text-slate-700">{point.text}</span>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Benefits Section */}
      <Section className="pb-16">
        <Reveal>
          <div className="text-center mb-12">
            <div 
              className="inline-block text-xs font-semibold tracking-widest px-3 py-1 rounded-full"
              style={{ background: 'linear-gradient(90deg, rgba(244,63,94,0.1), rgba(249,115,22,0.1))', color: '#F43F5E' }}
            >
              PERKS & BENEFITS
            </div>
            <h2 className="mt-4 text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">
              Why Work With Us
            </h2>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease, delay: i * 0.05 }}
              className="p-6 rounded-2xl border border-slate-200 bg-white"
            >
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ background: `${benefit.color}15` }}
              >
                <benefit.icon className="h-6 w-6" style={{ color: benefit.color }} />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{benefit.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <ShapeBand tone="slate" />

      {/* Application Form */}
      <Section className="py-16" id="apply">
        <div className="max-w-2xl mx-auto">
          <Reveal>
            <div className="text-center mb-8">
              <div 
                className="inline-block text-xs font-semibold tracking-widest px-3 py-1 rounded-full"
                style={{ background: 'linear-gradient(90deg, rgba(6,182,212,0.15), rgba(16,185,129,0.1))', color: '#06B6D4' }}
              >
                APPLY NOW
              </div>
              <h2 className="mt-4 text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">
                Submit Your Application
              </h2>
              <p className="mt-4 text-slate-600">
                Send us your details and we'll get back to you within 48 hours.
              </p>
            </div>
          </Reveal>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="p-8 rounded-2xl border border-slate-200 bg-white shadow-sm"
          >
            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Full Name" placeholder="Your full name" />
                <Field label="Email" placeholder="your@email.com" />
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Phone" placeholder="+880 1XX XXX XXXX" />
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-700">
                    Position Applying For
                  </label>
                  <select 
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 transition focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  >
                    <option value="">Select a position</option>
                    <option value="developer">Developer</option>
                    <option value="designer">Designer</option>
                    <option value="project-manager">Project Manager</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <Field label="Portfolio / LinkedIn URL" placeholder="https://" />
              <FieldText label="Cover Letter" placeholder="Tell us about yourself, your experience, and why you want to join Codexa..." rows={5} />
              
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">
                  Resume / CV
                </label>
                <div className="rounded-xl border-2 border-dashed border-slate-200 bg-slate-50 p-6 text-center transition hover:border-blue-300 hover:bg-blue-50/50">
                  <input type="file" className="hidden" id="resume" accept=".pdf,.doc,.docx" />
                  <label htmlFor="resume" className="cursor-pointer">
                    <div className="text-sm text-slate-600">
                      <span className="font-medium" style={{ color: BRAND.colors.blue }}>Click to upload</span> or drag and drop
                    </div>
                    <div className="text-xs text-slate-500 mt-1">PDF, DOC, DOCX (max 5MB)</div>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white transition hover:translate-y-[-2px]"
                style={{ background: 'linear-gradient(135deg, #2563EB 0%, #8B5CF6 100%)' }}
              >
                Submit Application
                <Send className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </Section>
    </>
  );
}
