// src/components/sections/ServicesSection.tsx
'use client'
import Image from 'next/image'
import { Droplets, Wrench, CircleDot, Snowflake, Activity, CheckCircle2 } from 'lucide-react'
import type { ElementType } from 'react'

interface Service {
  icon: ElementType; title: string; description: string
  features: string[]; price: string; image: string; placeholder?: boolean
}

const services: Service[] = [
  { icon: Droplets,  title: 'Washing Bay',            price: 'From GHS 50',  image: '/images/washing-bay.jpg',
    description: 'Professional car washing services to keep your vehicle clean and shiny.',
    features: ['Exterior Wash', 'Interior Cleaning', 'Engine Wash', 'Full Detailing'] },
  { icon: Wrench,    title: 'Balancing & Alignment',  price: 'From GHS 150', image: '/images/alignment-balancing.jpg',
    description: 'Precision wheel balancing and alignment using advanced equipment.',
    features: ['Wheel Balancing', 'Computerized Alignment', 'Suspension Check', 'Steering Adjustment'] },
  { icon: CircleDot, title: 'Vulcanizing',            price: 'From GHS 20',  image: '/images/vulcanizing.jpg',
    description: 'Expert tire repair and patching. We fix punctures and damages quickly.',
    features: ['Tire Punctures Repair', 'Tire Patching', 'Tire Replacement', 'Tube Repair'] },
  { icon: Snowflake, title: 'Air Condition Services', price: 'From GHS 100', image: '', placeholder: true,
    description: 'Complete AC services including diagnostics, repair, and recharging.',
    features: ['AC Diagnostics', 'AC Repair', 'Gas Recharge', 'AC Component Replacement'] },
  { icon: Activity,  title: 'Auto Diagnosis',         price: 'From GHS 80',  image: '', placeholder: true,
    description: 'Advanced computerized diagnostics to identify vehicle issues accurately.',
    features: ['Engine Diagnostics', 'Check Engine Light', 'Electrical Systems', 'Performance Analysis'] },
]

function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="group bg-white rounded-xl border-2 border-transparent hover:border-seaa-yellow
      shadow hover:shadow-xl transition-all duration-300 flex flex-col h-full overflow-hidden">
      {/* Image / Placeholder */}
      <div className="relative h-48 overflow-hidden">
        {service.placeholder ? (
          <div className="absolute inset-0 bg-gradient-to-br from-seaa-blue to-seaa-blue-light flex flex-col items-center justify-center gap-3">
            <div className="absolute inset-0 opacity-10"
              style={{ backgroundImage: 'radial-gradient(circle, #F4B400 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
            <div className="relative z-10 w-16 h-16 rounded-full bg-seaa-yellow/20 border-2 border-seaa-yellow/40 flex items-center justify-center">
              <service.icon size={32} className="text-seaa-yellow" />
            </div>
            <span className="relative z-10 text-white/50 text-xs font-medium tracking-wide">Photo coming soon</span>
          </div>
        ) : (
          <Image src={service.image} alt={service.title} fill
            className="object-cover transition-transform duration-500 group-hover:scale-105" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-seaa-blue/90 to-transparent" />
        <span className="absolute bottom-3 left-3 bg-seaa-yellow text-seaa-blue text-xs font-bold px-2.5 py-1 rounded-md">
          {service.price}
        </span>
      </div>

      {/* Header */}
      <div className="p-5 pb-3">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-lg bg-seaa-red/10 flex items-center justify-center
            group-hover:bg-seaa-red transition-colors duration-200 shrink-0">
            <service.icon size={18} className="text-seaa-red group-hover:text-white transition-colors duration-200" />
          </div>
          <h3 className="font-semibold text-seaa-blue text-lg">{service.title}</h3>
        </div>
        <p className="text-sm text-gray-500 leading-relaxed">{service.description}</p>
      </div>

      {/* Features */}
      <div className="px-5 pb-5 flex flex-col flex-1">
        <div className="flex flex-col gap-1.5 flex-1">
          {service.features.map((f) => (
            <div key={f} className="flex items-center gap-2 text-sm text-seaa-blue/70">
              <CheckCircle2 size={14} className="text-seaa-yellow shrink-0" />
              {f}
            </div>
          ))}
        </div>
        <button onClick={() => { window.location.href = '#contact' }}
          className="mt-5 w-full bg-seaa-yellow text-seaa-blue font-semibold text-sm py-2.5 rounded-lg
            hover:bg-seaa-yellow-light transition-colors duration-200">
          Book Now
        </button>
      </div>
    </div>
  )
}

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 reveal">
          <span className="inline-block bg-seaa-yellow/10 text-seaa-blue border border-seaa-yellow/30 text-xs font-semibold px-3 py-1 rounded-full mb-4">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-seaa-blue mb-4">Professional Car Care Solutions</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            From routine maintenance to specialized services, we provide comprehensive care for your vehicle.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 reveal">
          {services.map((s) => <ServiceCard key={s.title} service={s} />)}
        </div>
      </div>
    </section>
  )
}