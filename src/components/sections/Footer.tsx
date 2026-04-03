// src/components/sections/Footer.tsx
import { Car, MapPin, Phone, Mail, Clock } from 'lucide-react'

const quickLinks = ['Services', 'Pricing', 'Gallery', 'Reviews', 'Contact']

export default function Footer() {
  return (
    <footer className="bg-seaa-blue text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">

          {/* Brand — spans 2 cols on sm+ */}
          <div className="sm:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-12 h-12 shrink-0">
                <div className="absolute inset-0 rounded-full bg-seaa-blue border-2 border-seaa-yellow">
                  <div className="absolute inset-1 rounded-full border border-seaa-blue-light overflow-hidden" />
                </div>
                <div className="absolute -top-0.5 -right-0.5 w-5 h-5 border-t-2 border-r-2 border-seaa-yellow rounded-tr-full" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Car className="w-5 h-5 text-seaa-red" />
                </div>
              </div>
              <div>
                <span className="block text-xl font-bold text-seaa-yellow tracking-wide leading-tight">SEAA AUTO</span>
                <span className="block text-[10px] text-white/60 tracking-widest">SERVICE CENTER</span>
              </div>
            </div>
            <p className="text-white/65 text-sm leading-relaxed max-w-sm">
              Your trusted partner for professional automotive care. Washing Bay, Balancing &amp; Alignment,
              Vulcanizing, AC Services, and Auto Diagnostics. Quality service at fair prices.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold text-seaa-yellow mb-4">Quick Links</h4>
            <ul className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-white/65 text-sm hover:text-seaa-yellow transition-colors duration-150">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-seaa-yellow mb-4">Contact</h4>
            <ul className="flex flex-col gap-3">
              {[
                { icon: MapPin, content: 'SEAA Auto Service Center, Ghana' },
                { icon: Phone,  content: <a href="tel:+233246020823" className="text-seaa-yellow hover:underline">+233 24 602 0823</a> },
                { icon: Mail,   content: <a href="mailto:Jeffkofi0@gmail.com" className="hover:text-seaa-yellow transition-colors">Jeffkofi0@gmail.com</a> },
                { icon: Clock,  content: 'Mon-Fri: 8AM-6PM · Sat: 9AM-4PM' },
              ].map(({ icon: Icon, content }, i) => (
                <li key={i} className="flex items-start gap-2 text-white/65 text-sm">
                  <Icon size={14} className="text-seaa-red mt-0.5 shrink-0" />
                  <span>{content}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-sm">© {new Date().getFullYear()} SEAA Auto Service Center. All rights reserved.</p>
          <div className="flex gap-5">
            {['Privacy Policy', 'Terms of Service'].map((t) => (
              <a key={t} href="#" className="text-white/40 text-sm hover:text-white/70 transition-colors">{t}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}