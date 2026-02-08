import { ArrowRight, Facebook, Linkedin, Instagram } from "lucide-react";
import { Reveal } from "../shared/Reveal";
import { SocialIcon } from "../shared/SocialIcon";
import aboutImage from "../../assets/Codexa Slide 2.png";

export function WhoWeAre() {
  return (
    <div id="about" className="relative">
      <div aria-hidden className="pointer-events-none absolute -left-24 top-8 h-56 w-56 rounded-[46%] bg-gradient-to-br from-blue-200/60 to-cyan-100/40 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute right-[-90px] bottom-[-40px] h-64 w-64 rounded-[45%] bg-gradient-to-br from-violet-100/60 to-rose-100/40 blur-3xl" />

      <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-6">
          <Reveal>
            <div 
              className="inline-block text-xs font-semibold tracking-widest px-3 py-1 rounded-full"
              style={{ background: 'linear-gradient(90deg, rgba(6,182,212,0.15), rgba(16,185,129,0.1))', color: '#06B6D4' }}
            >
              ABOUT US
            </div>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl"
              style={{
                background: 'linear-gradient(135deg, #0F172A 0%, #2563EB 50%, #8B5CF6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
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

            <div className="mt-6 rounded-2xl border border-cyan-200/50 bg-gradient-to-br from-cyan-50/50 to-blue-50/30 p-5">
              <div className="text-sm font-semibold" style={{ color: '#06B6D4' }}>We provide the fastest service</div>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                We have sales and technical support teams committed to providing the highest quality services. We help
                organizations store, access, consume, and visualize data — so businesses can compete aggressively,
                improve performance, and accelerate time to value.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-white transition hover:translate-y-[-1px] active:translate-y-0"
                style={{ background: 'linear-gradient(135deg, #06B6D4 0%, #10B981 100%)' }}
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
                src={aboutImage}
                className="h-[320px] w-full object-cover sm:h-[380px]"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-white/70 via-transparent to-transparent" />
              <div className="pointer-events-none absolute -bottom-10 -left-10 h-44 w-72 rounded-[999px] bg-gradient-to-br from-cyan-200/70 to-blue-100/50 blur-2xl" />
              <div className="pointer-events-none absolute -top-10 -right-10 h-52 w-52 rounded-[44%] bg-gradient-to-br from-rose-200/60 to-orange-100/40 blur-2xl" />
              <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-32 w-32 rounded-full bg-violet-200/30 blur-2xl" />
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
