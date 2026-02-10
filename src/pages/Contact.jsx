import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageSquare,
  Send,
  Facebook,
  Linkedin,
  Instagram
} from "lucide-react";
import { ease, BRAND } from "../constants/brand";
import { Section } from "../components/shared/Section";
import { Reveal } from "../components/shared/Reveal";
import { ShapeBand } from "../components/shared/ShapeBand";
import { Field } from "../components/shared/Field";
import { FieldText } from "../components/shared/FieldText";
import { SocialIcon } from "../components/shared/SocialIcon";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    value: "hello@codexaitbd.com",
    description: "We reply within 24 hours",
    color: "#2563EB",
    href: "mailto:hello@codexaitbd.com",
  },
  {
    icon: Phone,
    title: "Call Us",
    value: "+8801617 558034",
    description: "",
    color: "#8B5CF6",
    href: "tel:+8801617558034",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    value: "Codexa IT, House# 9, Road# 13",
    description: "Dhanmondi, Dhaka - 1209",
    color: "#10B981",
    href: "https://maps.app.goo.gl/m2tjpmQ3RqmbuS3S6",
  },
  {
    icon: Clock,
    title: "Working Hours",
    value: "Sun - Thu: 10am - 6pm",
    description: "Weekend: Closed",
    color: "#F97316",
    href: "#",
  },
];

const faqs = [
  {
    q: "How long does a typical project take?",
    a: "Project timelines vary based on complexity. A simple website takes 2-4 weeks, while complex applications may take 2-6 months. We'll provide a detailed timeline after understanding your requirements.",
  },
  {
    q: "Do you provide post-launch support?",
    a: "Yes! We offer comprehensive post-launch support packages including bug fixes, updates, and maintenance. We're committed to your long-term success.",
  },
  {
    q: "What is your payment structure?",
    a: "We typically work with milestone-based payments. Usually 30% upfront, 40% at midpoint, and 30% upon completion. We're flexible and can discuss options that work for you.",
  },
  {
    q: "Can you work with our existing team?",
    a: "Absolutely! We often collaborate with in-house teams, providing additional expertise and resources. We integrate seamlessly with your existing workflows.",
  },
];

export function Contact() {
  return (
    <>
      {/* Hero Section */}
      <Section className="pt-32 pb-16">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto">
            <div 
              className="inline-block text-xs font-semibold tracking-widest px-3 py-1 rounded-full mb-4"
              style={{ background: 'linear-gradient(90deg, rgba(6,182,212,0.15), rgba(16,185,129,0.1))', color: '#06B6D4' }}
            >
              GET IN TOUCH
            </div>
            <h1 
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
              style={{
                background: 'linear-gradient(135deg, #0F172A 0%, #06B6D4 50%, #10B981 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Let's Start a Conversation
            </h1>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Have a project in mind? Want to learn more about our services? We'd love to hear from you. Reach out and let's create something amazing together.
            </p>
          </div>
        </Reveal>
      </Section>

      {/* Contact Cards */}
      <Section className="pb-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, i) => (
            <motion.a
              key={info.title}
              href={info.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease, delay: i * 0.08 }}
              whileHover={{ y: -5 }}
              className="group p-6 rounded-2xl border border-slate-200 bg-white text-center transition hover:shadow-lg"
              style={{ borderColor: `${info.color}20` }}
            >
              <div 
                className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 transition group-hover:scale-110"
                style={{ background: `${info.color}15` }}
              >
                <info.icon className="h-7 w-7" style={{ color: info.color }} />
              </div>
              <div className="text-sm font-medium text-slate-500">{info.title}</div>
              <div className="text-lg font-semibold text-slate-900 mt-1">{info.value}</div>
              <div className="text-xs text-slate-500 mt-1">{info.description}</div>
            </motion.a>
          ))}
        </div>
      </Section>

      <ShapeBand tone="blue" />

      {/* Contact Form & Map */}
      <Section className="py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Form */}
          <Reveal className="h-full">
            <div className="h-full flex flex-col">
              <div 
                className="inline-block text-xs font-semibold tracking-widest px-3 py-1 rounded-full w-fit"
                style={{ background: 'linear-gradient(90deg, rgba(37,99,235,0.1), rgba(139,92,246,0.1))', color: '#2563EB' }}
              >
                SEND A MESSAGE
              </div>
              <h2 className="mt-4 text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">
                Tell Us About Your Project
              </h2>
              <p className="mt-4 text-slate-600">
                Fill out the form and our team will get back to you within 24 hours.
              </p>

              <motion.form
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease, delay: 0.1 }}
                className="mt-8 space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Your Name" placeholder="John Doe" />
                  <Field label="Email Address" placeholder="john@company.com" />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Phone Number" placeholder="+880 1XX XXX XXXX" />
                  <Field label="Company" placeholder="Your Company Name" />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-700">
                    Service Interested In
                  </label>
                  <select 
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 transition focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  >
                    <option value="">Select a service</option>
                    <option value="strategy">IT Strategy & Advisory</option>
                    <option value="software">Custom Software Engineering</option>
                    <option value="web">Web Experience Development</option>
                    <option value="mobile">Mobile Application Solutions</option>
                    <option value="analytics">Business Intelligence & Analytics</option>
                    <option value="design">User Experience & Interface Design</option>
                    <option value="qa">Quality Assurance</option>
                    <option value="bpo">Business Process Outsourcing</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <FieldText 
                  label="Project Details" 
                  placeholder="Tell us about your project, goals, and any specific requirements..." 
                  rows={5}
                />
                
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-700">
                    Budget Range
                  </label>
                  <select 
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 transition focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  >
                    <option value="">Select budget range</option>
                    <option value="small">$1,000 - $5,000</option>
                    <option value="medium">$5,000 - $15,000</option>
                    <option value="large">$15,000 - $50,000</option>
                    <option value="enterprise">$50,000+</option>
                    <option value="discuss">Let's Discuss</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white transition hover:translate-y-[-2px]"
                  style={{ background: 'linear-gradient(135deg, #2563EB 0%, #8B5CF6 100%)' }}
                >
                  Send Message
                  <Send className="h-4 w-4" />
                </button>
                <p className="text-xs text-slate-500 text-center">
                  We respect your privacy. Your information will never be shared.
                </p>
              </motion.form>
            </div>
          </Reveal>

          {/* Info Panel */}
          <Reveal delay={0.1} className="h-full">
            <div className="lg:pl-8 h-full">
              <div 
                className="p-8 rounded-2xl h-full flex flex-col"
                style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E3A5F 50%, #2563EB 100%)' }}
              >
                <div 
                  className="inline-block text-xs font-semibold tracking-widest px-3 py-1 rounded-full"
                  style={{ background: 'rgba(255,255,255,0.1)', color: '#06B6D4' }}
                >
                  CONTACT INFO
                </div>
                <h3 className="mt-4 text-2xl font-semibold text-white">
                  Let's Build Something Great
                </h3>
                <p className="mt-4 text-white/70 leading-relaxed">
                  Whether you have a detailed project scope or just an idea, we're here to help turn your vision into reality.
                </p>

                <div className="mt-8 space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg" style={{ background: 'rgba(6,182,212,0.2)' }}>
                      <Mail className="h-5 w-5" style={{ color: '#06B6D4' }} />
                    </div>
                    <div>
                      <div className="text-sm text-white/60">Email</div>
                      <a href="mailto:hello@codexaitbd.com" className="text-white hover:text-cyan-300 transition">
                        hello@codexaitbd.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg" style={{ background: 'rgba(139,92,246,0.2)' }}>
                      <Phone className="h-5 w-5" style={{ color: '#8B5CF6' }} />
                    </div>
                    <div>
                      <div className="text-sm text-white/60">Phone</div>
                      <a href="tel:+8801617558034" className="text-white hover:text-violet-300 transition">
                        +8801617 558034
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg" style={{ background: 'rgba(16,185,129,0.2)' }}>
                      <MapPin className="h-5 w-5" style={{ color: '#10B981' }} />
                    </div>
                    <div>
                      <div className="text-sm text-white/60">Address</div>
                      <div className="text-white">Codexa IT, House# 9, Road# 13</div>
                      <div className="text-white/80 text-sm">Dhanmondi, Dhaka - 1209</div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-white/10">
                  <div className="text-sm text-white/60 mb-4">Follow Us</div>
                  <div className="flex items-center gap-3">
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

                <div className="mt-auto pt-8">
                  <MessageSquare className="h-8 w-8 text-white/20" />
                  <p className="mt-2 text-sm text-white/50 italic">
                    "The best way to predict the future is to create it."
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <ShapeBand tone="slate" />

      {/* FAQ Section */}
      <Section className="py-16">
        <Reveal>
          <div className="text-center mb-12">
            <div 
              className="inline-block text-xs font-semibold tracking-widest px-3 py-1 rounded-full"
              style={{ background: 'linear-gradient(90deg, rgba(244,63,94,0.1), rgba(249,115,22,0.1))', color: '#F43F5E' }}
            >
              FAQ
            </div>
            <h2 className="mt-4 text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">
              Frequently Asked Questions
            </h2>
          </div>
        </Reveal>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease, delay: i * 0.08 }}
              className="p-6 rounded-2xl border border-slate-200 bg-white"
            >
              <h3 className="font-semibold text-slate-900">{faq.q}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Map Section */}
      <Section className="pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="rounded-2xl overflow-hidden border border-slate-200 h-[400px]"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.2687026447197!2d90.37299807606584!3d23.746619088628995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b7a55cd52d%3A0x7dedfdf3accb7092!2sCodexa%20IT!5e0!3m2!1sen!2sbd!4v1707139200000!5m2!1sen!2sbd"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Codexa IT Location - House# 9, Road# 13, Dhanmondi, Dhaka - 1209"
          />
        </motion.div>
        <div className="mt-4 text-center">
          <a 
            href="https://maps.app.goo.gl/m2tjpmQ3RqmbuS3S6" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium transition hover:gap-3"
            style={{ color: '#10B981' }}
          >
            <MapPin className="h-4 w-4" />
            Open in Google Maps
          </a>
        </div>
      </Section>
    </>
  );
}
