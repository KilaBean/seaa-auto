// src/components/sections/HeroSection.tsx
import Image from 'next/image'
import { Star, ArrowRight, Phone } from 'lucide-react'

const stats = [
  { value: '2+',    label: 'Years Experience'   },
  { value: '10K+',  label: 'Happy Customers'    },
  { value: '7',     label: 'Expert Technicians' },
  { value: '100%',  label: 'Satisfaction Rate'  },
]

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      {/* Background */}
      <div className="absolute inset-0">
        <Image src="/images/hero-bg.jpg" alt="SEAA Auto Services Workshop" fill priority className="object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-seaa-blue/95 via-seaa-blue/80 to-seaa-blue/50" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 reveal">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium px-4 py-2 rounded-full mb-6">
          <Star size={14} className="text-seaa-yellow fill-seaa-yellow" />
          <span>Trusted by 10,000+ Customers</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 max-w-2xl">
          Professional Auto Care
          <span className="block text-seaa-yellow">You Can Trust</span>
        </h1>

        <p className="text-white/80 text-lg max-w-xl leading-relaxed mb-8">
          Expert vulcanizing, precision alignment &amp; balancing, air condition services,
          auto diagnostics, and premium car wash. Your vehicle deserves the best care.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 mb-12">
          <a href="#pricing"
            className="inline-flex items-center gap-2 bg-seaa-yellow text-seaa-blue font-bold text-base px-6 py-3 rounded-lg hover:bg-seaa-yellow-light transition-colors duration-200 shadow-lg shadow-seaa-yellow/30">
            Get Free Quote <ArrowRight size={18} />
          </a>
          <a href="tel:+233246020823"
            className="inline-flex items-center gap-2 bg-transparent border-2 border-white/60 text-white font-semibold text-base px-6 py-3 rounded-lg hover:bg-white/10 transition-colors duration-200">
            <Phone size={18} /> Call Now
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl">
          {stats.map(({ value, label }) => (
            <div key={label} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-seaa-yellow">{value}</div>
              <div className="text-white/70 text-xs mt-1">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}