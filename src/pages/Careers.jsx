import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  MapPin, 
  Clock, 
  Briefcase, 
  Users, 
  Heart, 
  Zap, 
  Coffee,
  GraduationCap,
  Gift,
  ChevronDown,
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
    icon: Clock,
    title: "Flexible Hours",
    description: "Work when you're most productive with our flexible scheduling.",
    color: "#2563EB",
  },
  {
    icon: MapPin,
    title: "Remote Friendly",
    description: "Work from anywhere - home, office, or your favorite café.",
    color: "#8B5CF6",
  },
  {
    icon: GraduationCap,
    title: "Learning & Growth",
    description: "Continuous learning opportunities and skill development programs.",
    color: "#06B6D4",
  },
  {
    icon: Heart,
    title: "Health Benefits",
    description: "Comprehensive health coverage for you and your family.",
    color: "#F43F5E",
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

const openPositions = [
  {
    id: 1,
    title: "Senior Full-Stack Developer",
    department: "Engineering",
    type: "Full-time",
    location: "Remote / Dhaka",
    experience: "3-5 years",
    description: "We're looking for an experienced full-stack developer to join our engineering team and help build scalable web applications.",
    requirements: [
      "Proficiency in React, Node.js, and TypeScript",
      "Experience with cloud services (AWS/GCP)",
      "Strong understanding of database design",
      "Excellent problem-solving skills",
      "Good communication skills",
    ],
    color: "#2563EB",
  },
  {
    id: 2,
    title: "UI/UX Designer",
    department: "Design",
    type: "Full-time",
    location: "Remote / Dhaka",
    experience: "2-4 years",
    description: "Join our design team to create beautiful, user-centered interfaces for our clients' products.",
    requirements: [
      "Proficiency in Figma and design tools",
      "Strong portfolio of UI/UX work",
      "Understanding of design systems",
      "User research experience",
      "Collaboration skills",
    ],
    color: "#8B5CF6",
  },
  {
    id: 3,
    title: "Project Manager",
    department: "Operations",
    type: "Full-time",
    location: "Dhaka",
    experience: "3-5 years",
    description: "Lead project teams and ensure successful delivery of client projects on time and within budget.",
    requirements: [
      "PMP or similar certification preferred",
      "Experience with Agile/Scrum methodologies",
      "Strong leadership and communication",
      "Client relationship management",
      "Risk management experience",
    ],
    color: "#06B6D4",
  },
  {
    id: 4,
    title: "Junior Web Developer",
    department: "Engineering",
    type: "Full-time",
    location: "Remote / Dhaka",
    experience: "0-2 years",
    description: "Start your career with us! We're looking for motivated junior developers eager to learn and grow.",
    requirements: [
      "Knowledge of HTML, CSS, JavaScript",
      "Familiarity with React or Vue.js",
      "Willingness to learn",
      "Good communication skills",
      "Fresh graduates welcome",
    ],
    color: "#10B981",
  },
];

const culturePoints = [
  { icon: Users, text: "Collaborative Environment", color: "#2563EB" },
  { icon: Zap, text: "Innovation First", color: "#8B5CF6" },
  { icon: Heart, text: "People-Centric Culture", color: "#F43F5E" },
  { icon: GraduationCap, text: "Continuous Learning", color: "#06B6D4" },
];

function JobCard({ job }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease }}
      className="rounded-2xl border border-slate-200 bg-white overflow-hidden"
      style={{ borderColor: `${job.color}20` }}
    >
      <div 
        className="p-6 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">{job.title}</h3>
            <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-slate-600">
              <span className="flex items-center gap-1">
                <Briefcase className="h-4 w-4" style={{ color: job.color }} />
                {job.department}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" style={{ color: job.color }} />
                {job.type}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="h-4 w-4" style={{ color: job.color }} />
                {job.location}
              </span>
            </div>
          </div>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className="h-5 w-5 text-slate-400" />
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 border-t border-slate-100 pt-4">
              <p className="text-slate-600 mb-4">{job.description}</p>
              
              <div className="mb-4">
                <div className="text-sm font-semibold text-slate-900 mb-2">Experience Required:</div>
                <div 
                  className="inline-block px-3 py-1 rounded-full text-sm"
                  style={{ background: `${job.color}15`, color: job.color }}
                >
                  {job.experience}
                </div>
              </div>

              <div className="mb-6">
                <div className="text-sm font-semibold text-slate-900 mb-2">Requirements:</div>
                <ul className="space-y-2">
                  {job.requirements.map((req, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                      <span 
                        className="mt-1.5 h-1.5 w-1.5 rounded-full shrink-0"
                        style={{ background: job.color }}
                      />
                      {req}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#apply"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition hover:translate-y-[-2px]"
                style={{ background: job.color }}
              >
                Apply Now
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

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

      <ShapeBand tone="blue" />

      {/* Open Positions */}
      <Section className="py-16">
        <Reveal>
          <div className="text-center mb-12">
            <div 
              className="inline-block text-xs font-semibold tracking-widest px-3 py-1 rounded-full"
              style={{ background: 'linear-gradient(90deg, rgba(37,99,235,0.1), rgba(139,92,246,0.1))', color: '#2563EB' }}
            >
              OPEN POSITIONS
            </div>
            <h2 className="mt-4 text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">
              Current Opportunities
            </h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              Find the role that matches your skills and passion. Click on a position to learn more.
            </p>
          </div>
        </Reveal>

        <div className="space-y-4 max-w-3xl mx-auto">
          {openPositions.map((job) => (
            <JobCard key={job.id} job={job} />
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
                    {openPositions.map((job) => (
                      <option key={job.id} value={job.title}>{job.title}</option>
                    ))}
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
