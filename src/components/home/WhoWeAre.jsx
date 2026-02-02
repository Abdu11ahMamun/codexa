import { ArrowRight, Facebook, Linkedin, Instagram } from "lucide-react";
import { Reveal } from "../shared/Reveal";
import { SocialIcon } from "../shared/SocialIcon";

export function WhoWeAre() {
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
