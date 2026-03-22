// src/components/sections/AboutSection.tsx
import Image from 'next/image'
import { Shield, Zap, Award } from 'lucide-react'
import type { ElementType } from 'react'

interface Benefit {
  icon: ElementType
  title: string
  description: string
}

const benefits: Benefit[] = [
  {
    icon: Shield,
    title: 'Quality Guaranteed',
    description: 'All our services come with a satisfaction guarantee. We stand behind our work.',
  },
  {
    icon: Zap,
    title: 'Quick Turnaround',
    description: 'Most services completed same-day. Get back on the road faster.',
  },
  {
    icon: Award,
    title: 'Certified Experts',
    description: 'Our technicians are certified with years of hands-on experience.',
  },
]

const stats = [
  { value: '2+', label: 'Years of Excellence' },
  { value: '7', label: 'Expert Technicians' },
  { value: '10K+', label: 'Vehicles Serviced' },
  { value: '99%', label: 'Customer Satisfaction' },
]

export default function AboutSection() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="about-grid">
          <div className="reveal-on-scroll">
            <span className="badge badge-outline mb-4">About Us</span>
            <h2 className="section-title about-title">
              Why Choose <span style={{ color: 'var(--seaa-yellow)' }}>SEAA</span> Auto Services?
            </h2>
            <p className="section-subtitle" style={{ textAlign: 'left', margin: '0 0 2rem 0' }}>
              SEAA Auto Services has built a strong reputation for excellence in automotive care.
              We combine modern equipment with dedicated customer service to deliver an experience
              that keeps our customers coming back.
            </p>
            <div className="feature-list" style={{ gap: '1.5rem' }}>
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex gap-4">
                  <div className="service-icon-wrapper" style={{ width: '3rem', height: '3rem' }}>
                    <benefit.icon className="service-icon" style={{ width: '1.5rem', height: '1.5rem' }} />
                  </div>
                  <div>
                    <h3 className="card-title" style={{ fontSize: '1.125rem', marginBottom: '0.25rem' }}>
                      {benefit.title}
                    </h3>
                    <p style={{ color: 'var(--muted-foreground)' }}>{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal-on-scroll">
            <div className="relative mb-6" style={{ borderRadius: '1rem', overflow: 'hidden', aspectRatio: '16/9' }}>
              <Image src="/images/team.jpg" alt="SEAA Auto Services Team" fill className="object-cover" />
              <div className="card-overlay" />
              <div style={{ position: 'absolute', bottom: '1rem', left: '1rem', right: '1rem' }}>
                <p className="text-white font-semibold text-lg">Our Expert Team</p>
                <p className="text-white/80 text-sm">7 Certified Technicians</p>
              </div>
            </div>
            <div style={{
              background: 'linear-gradient(to bottom right, rgba(244, 180, 0, 0.2), rgba(244, 180, 0, 0.05))',
              borderRadius: '1rem',
              padding: '1.5rem',
            }}>
              <div className="stat-grid">
                {stats.map(({ value, label }) => (
                  <div key={label} className="stat-card">
                    <div className="stat-value">{value}</div>
                    <div className="stat-label">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}