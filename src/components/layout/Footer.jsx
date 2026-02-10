import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Linkedin, Instagram } from "lucide-react";
import { BRAND } from "../../constants/brand";
import { Logo } from "../shared/Logo";
import { SocialIcon } from "../shared/SocialIcon";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-gradient-to-b from-white via-slate-50 to-blue-50/30">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-4">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3">
              <Logo size="large" />
              <div>
                <div 
                  className="text-xl font-bold"
                  style={{
                    background: 'linear-gradient(135deg, #2563EB 0%, #8B5CF6 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {BRAND.name}
                </div>
                <div className="text-xs text-slate-500">Digital Solutions</div>
              </div>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              Transforming ideas through smart technology — partnering with you for digital success.
            </p>
            <div className="mt-4 flex items-center gap-2">
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

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold" style={{ color: '#2563EB' }}>Quick Links</h3>
            <ul className="mt-4 space-y-2">
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
          <div>
            <h3 className="text-sm font-bold" style={{ color: '#8B5CF6' }}>Services</h3>
            <ul className="mt-4 space-y-2">
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
          <div>
            <h3 className="text-sm font-bold" style={{ color: '#06B6D4' }}>Contact</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-2 text-sm text-slate-600">
                <Mail className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#06B6D4' }} />
                <span>hello@codexa.dev</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-slate-600">
                <Phone className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#8B5CF6' }} />
                <div className="flex flex-col">
                  <span>01610-222111</span>
                  <span>01917-558034</span>
                </div>
              </li>
              <li className="flex items-start gap-2 text-sm text-slate-600">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#10B981' }} />
                <a href="https://maps.app.goo.gl/m2tjpmQ3RqmbuS3S6" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-600 transition">
                  House# 9, Road# 13(New), Dhanmondi, Dhaka - 1209
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t border-slate-200 pt-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-slate-500">
              © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
            </p>
            <div className="flex gap-6 text-xs text-slate-500">
              <a href="#" className="transition hover:text-violet-600">Privacy Policy</a>
              <a href="#" className="transition hover:text-violet-600">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
