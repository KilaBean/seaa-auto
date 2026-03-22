// src/components/sections/ServicesSection.tsx
'use client'

import Image from 'next/image'
import { Droplets, Wrench, CircleDot, Snowflake, Activity, CheckCircle2 } from 'lucide-react'
import type { ElementType } from 'react'

interface Service {
  icon: ElementType
  title: string
  description: string
  features: string[]
  price: string
  image: string
}

const services: Service[] = [
  {
    icon: Droplets,
    title: 'Washing Bay',
    description:
      'Professional car washing services to keep your vehicle clean and shiny. From basic wash to full detailing.',
    features: ['Exterior Wash', 'Interior Cleaning', 'Engine Wash', 'Full Detailing'],
    price: 'From GHS 50',
    image: '/images/washing-bay.jpg',
  },
  {
    icon: Wrench,
    title: 'Balancing & Alignment',
    description:
      'Precision wheel balancing and alignment using advanced equipment for smooth and safe driving.',
    features: ['Wheel Balancing', 'Computerized Alignment', 'Suspension Check', 'Steering Adjustment'],
    price: 'From GHS 150',
    image: '/images/alignment-balancing.jpg',
  },
  {
    icon: CircleDot,
    title: 'Vulcanizing',
    description:
      'Expert tire repair and patching services. We fix punctures, tears, and other tire damages quickly.',
    features: ['Tire Punctures Repair', 'Tire Patching', 'Tire Replacement', 'Tube Repair'],
    price: 'From GHS 20',
    image: '/images/vulcanizing.jpg',
  },
  {
    icon: Snowflake,
    title: 'Air Condition Services',
    description:
      'Complete AC services including diagnostics, repair, and recharging to keep you cool on the road.',
    features: ['AC Diagnostics', 'AC Repair', 'Gas Recharge', 'AC Component Replacement'],
    price: 'From GHS 100',
    image: '/images/ac-service.jpg',
  },
  {
    icon: Activity,
    title: 'Auto Diagnosis',
    description:
      'Advanced computerized diagnostics to identify and resolve vehicle issues accurately.',
    features: ['Engine Diagnostics', 'Check Engine Light', 'Electrical Systems', 'Performance Analysis'],
    price: 'From GHS 80',
    image: '/images/auto-diagnosis.jpg',
  },
]

function ServiceCard({ service }: { service: Service }) {
  return (
    <div
      className="card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        transition: 'all 0.3s',
        border: '2px solid transparent',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'var(--seaa-yellow)'
        e.currentTarget.style.boxShadow =
          '0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'transparent'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      {/* Image */}
      <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
        {service.image ? (
          <Image
            src={service.image}
            alt={service.title}
            fill
            style={{ objectFit: 'cover', transition: 'transform 0.5s' }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.05)' }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)' }}
          />
        ) : (
          <div
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: 'var(--seaa-blue)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <service.icon size={48} color="var(--seaa-yellow)" />
          </div>
        )}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(13,43,91,0.9), transparent)',
          }}
        />
        <div style={{ position: 'absolute', bottom: '1rem', left: '1rem' }}>
          <span className="badge badge-service">{service.price}</span>
        </div>
      </div>

      {/* Header */}
      <div className="card-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div
            style={{
              width: '2.5rem',
              height: '2.5rem',
              borderRadius: '0.5rem',
              backgroundColor: 'rgba(229, 57, 53, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background-color 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--seaa-red)'
              const icon = e.currentTarget.querySelector('svg') as SVGElement | null
              if (icon) icon.style.color = 'white'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(229, 57, 53, 0.1)'
              const icon = e.currentTarget.querySelector('svg') as SVGElement | null
              if (icon) icon.style.color = 'var(--seaa-red)'
            }}
          >
            <service.icon
              size={20}
              style={{ color: 'var(--seaa-red)', transition: 'color 0.2s' }}
            />
          </div>
          <h3 className="card-title">{service.title}</h3>
        </div>
        <p className="card-description" style={{ marginTop: '0.5rem' }}>
          {service.description}
        </p>
      </div>

      {/* Content */}
      <div className="card-content" style={{ flex: 1 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {service.features.map((feature) => (
            <div
              key={feature}
              style={{
                display: 'flex',
                alignItems: 'center',
                fontSize: '0.875rem',
                color: 'rgba(13,43,91,0.7)',
              }}
            >
              <CheckCircle2
                size={16}
                style={{ color: 'var(--seaa-yellow)', marginRight: '0.5rem', flexShrink: 0 }}
              />
              {feature}
            </div>
          ))}
        </div>
        <button
          className="btn btn-primary"
          style={{ width: '100%', marginTop: '1.5rem' }}
          onClick={() => { window.location.href = '#contact' }}
        >
          Book Now
        </button>
      </div>
    </div>
  )
}

export default function ServicesSection() {
  return (
    <section id="services" className="section" style={{ backgroundColor: 'var(--secondary)' }}>
      <div className="container">
        <div className="section-header">
          <span className="badge badge-primary" style={{ marginBottom: '1rem' }}>
            Our Services
          </span>
          <h2 className="section-title">Professional Car Care Solutions</h2>
          <p className="section-subtitle">
            From routine maintenance to specialized services, we provide comprehensive care for your
            vehicle.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}