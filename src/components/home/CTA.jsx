import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { Reveal } from "../shared/Reveal";
import { Field } from "../shared/Field";
import { FieldText } from "../shared/FieldText";

export function CTA() {
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
