// src/components/sections/HeroSection.tsx
import Image from 'next/image'
import { Star, ArrowRight, Phone } from 'lucide-react'

const stats = [
  { value: '15+', label: 'Years Experience' },
  { value: '10K+', label: 'Happy Customers' },
  { value: '50+', label: 'Expert Technicians' },
  { value: '100%', label: 'Satisfaction Rate' },
]

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-bg">
        <Image
          src="/images/hero-bg.jpg"
          alt="SEAA Auto Services Workshop"
          fill
          priority
        />
      </div>

      <div className="hero-overlay" />

      <div className="hero-content">
        <div className="hero-badge">
          <Star size={16} />
          <span>Trusted by 10,000+ Customers</span>
        </div>

        <h1 className="hero-title">
          Professional Auto Care
          <span className="hero-title-highlight">You Can Trust</span>
        </h1>

        <p className="hero-description">
          Expert vulcanizing, precision alignment &amp; balancing, air condition services,
          auto diagnostics, and premium car wash. Your vehicle deserves the best care.
        </p>

        <div className="hero-buttons">
          <a href="#pricing" className="btn btn-cta">
            Get Free Quote
            <ArrowRight size={20} />
          </a>
          <a href="tel:+233123456789" className="btn btn-outline btn-lg">
            <Phone size={20} />
            Call Now
          </a>
        </div>

        <div className="hero-stats">
          {stats.map(({ value, label }) => (
            <div key={label} className="hero-stat">
              <div className="hero-stat-value">{value}</div>
              <div className="hero-stat-label">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}