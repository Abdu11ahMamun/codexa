import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Linkedin } from "lucide-react";
import { BRAND } from "../../constants/brand";
import { Logo } from "../shared/Logo";
import { SocialIcon } from "../shared/SocialIcon";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-gradient-to-b from-white via-slate-50 to-blue-50/30">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-white/80 bg-white/90 shadow-[0_20px_60px_-25px_rgba(30,64,175,0.3)] backdrop-blur sm:overflow-visible sm:rounded-none sm:border-none sm:bg-transparent sm:shadow-none sm:backdrop-blur-none">
          <div className="grid gap-10 p-8 sm:grid-cols-2 sm:p-0 lg:grid-cols-4">
            {/* Brand Section */}
            <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
              <Link to="/" className="flex items-center gap-3">
                <Logo size="large" />
                <span className="sr-only">{BRAND.name}</span>
              </Link>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-600 sm:max-w-none">
                Transforming ideas through smart technology — partnering with you for digital success.
              </p>
              <div className="mt-6 flex items-center justify-center gap-3 sm:justify-start">
                <SocialIcon href="https://www.facebook.com/share/1D9nKsKLrB/" label="Facebook" brand="facebook">
                  <Facebook className="h-4 w-4" />
                </SocialIcon>
                <SocialIcon href="https://www.linkedin.com/company/codexa-it/" label="LinkedIn" brand="linkedin">
                  <Linkedin className="h-4 w-4" />
                </SocialIcon>
              </div>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
              <h3 className="text-sm font-bold" style={{ color: '#2563EB' }}>Quick Links</h3>
              <ul className="mt-5 space-y-3">
                {[
                  { name: 'Home', to: '/' },
                  { name: 'About Us', to: '/about' },
                  { name: 'Services', to: '/services' },
                  { name: 'Careers', to: '/careers' },
                  { name: 'Contact', to: '/contact' },
                ].map((link) => (
                  <li key={link.name}>
                    <Link to={link.to} className="text-sm text-slate-600 transition hover:text-violet-600">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
              <h3 className="text-sm font-bold" style={{ color: '#8B5CF6' }}>Services</h3>
              <ul className="mt-5 space-y-3">
                {['IT Strategy & Advisory', 'Custom Software Engineering', 'Web Experience Development', 'Mobile Application Solutions'].map((service) => (
                  <li key={service}>
                    <Link to="/services" className="text-sm text-slate-600 transition hover:text-cyan-600">
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
              <h3 className="text-sm font-bold" style={{ color: '#06B6D4' }}>Contact</h3>
              <ul className="mt-5 space-y-4">
                <li className="flex items-start gap-3 text-sm text-slate-600 sm:items-center">
                  <span className="rounded-full bg-cyan-50 p-2 sm:bg-transparent">
                    <Mail className="h-4 w-4 text-cyan-500 sm:text-cyan-600" />
                  </span>
                  <span className="text-left">hello@codexaitbd.com</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-600 sm:items-center">
                  <span className="rounded-full bg-violet-50 p-2 sm:bg-transparent">
                    <Phone className="h-4 w-4 text-violet-500 sm:text-violet-600" />
                  </span>
                  <span className="text-left">+8801617 558034</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-600">
                  <span className="rounded-full bg-emerald-50 p-2 sm:bg-transparent">
                    <MapPin className="h-4 w-4 text-emerald-500 sm:text-emerald-600" />
                  </span>
                  <a href="https://maps.app.goo.gl/m2tjpmQ3RqmbuS3S6" target="_blank" rel="noopener noreferrer" className="text-left transition hover:text-emerald-600">
                    Codexa IT, House# 9, Road# 13, Dhanmondi, Dhaka - 1209
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-slate-100 bg-slate-50/70 sm:border-transparent sm:bg-transparent">
            <div className="flex flex-col gap-4 px-8 py-6 text-center text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-0 sm:py-8 sm:text-left">
              <p>
                © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 sm:justify-end">
                <a href="#" className="transition hover:text-violet-600">Privacy Policy</a>
                <a href="#" className="transition hover:text-violet-600">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
