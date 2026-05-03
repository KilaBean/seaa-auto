// src/components/sections/AboutSection.tsx
import { Shield, Zap, Award } from 'lucide-react'
import type { ElementType } from 'react'

const benefits: { icon: ElementType; title: string; description: string }[] = [
  { icon: Shield, title: 'Quality Guaranteed', description: 'All our services come with a satisfaction guarantee. We stand behind our work.' },
  { icon: Zap,    title: 'Quick Turnaround',   description: 'Most services completed same-day. Get back on the road faster.' },
  { icon: Award,  title: 'Certified Experts',  description: 'Our technicians are certified with years of hands-on experience.' },
]

const stats = [
  { value: '2+',   label: 'Years of Excellence'   },
  { value: '7',    label: 'Expert Technicians'     },
  { value: '10K+', label: 'Vehicles Serviced'      },
  { value: '99%',  label: 'Customer Satisfaction'  },
]

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left */}
          <div className="reveal">
            <span className="inline-block bg-seaa-blue/5 text-seaa-blue border border-seaa-blue/20 text-xs font-semibold px-3 py-1 rounded-full mb-5">About Us</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-seaa-blue mb-4 leading-tight">
              Why Choose <span className="text-seaa-yellow">SEAA</span> Auto Services?
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              SEAA Auto Services has built a strong reputation for excellence in automotive care.
              We combine modern equipment with dedicated customer service to deliver an experience
              that keeps our customers coming back.
            </p>
            <div className="flex flex-col gap-5">
              {benefits.map((b) => (
                <div key={b.title} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-seaa-yellow/10 flex items-center justify-center shrink-0">
                    <b.icon size={22} className="text-seaa-yellow" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-seaa-blue mb-0.5">{b.title}</h3>
                    <p className="text-sm text-gray-500">{b.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="reveal">
            <div className="relative rounded-2xl overflow-hidden aspect-video mb-5 shadow-xl bg-gradient-to-br from-seaa-blue to-seaa-blue-light flex items-center justify-center">
              {/* Decorative pattern */}
              <div className="absolute inset-0 opacity-10"
                style={{ backgroundImage: 'radial-gradient(circle, #F4B400 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
              {/* Placeholder icon group */}
              <div className="relative z-10 flex flex-col items-center gap-3">
                <div className="flex items-end gap-2">
                  {[10, 14, 12, 16, 11, 13, 15].map((h, i) => (
                    <div key={i} className="flex flex-col items-center gap-1">
                      <div className="rounded-full bg-seaa-yellow/30 border-2 border-seaa-yellow/60"
                        style={{ width: `${h * 2.2}px`, height: `${h * 2.2}px` }} />
                      <div className="rounded-sm bg-white/20" style={{ width: `${h * 2.5}px`, height: `${h * 1.5}px` }} />
                    </div>
                  ))}
                </div>
                <span className="text-seaa-yellow/80 text-xs font-medium tracking-wide">Team photo coming soon</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-seaa-blue/80 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white font-semibold text-lg">Our Expert Team</p>
                <p className="text-white/75 text-sm">7 Certified Technicians</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-seaa-yellow/20 to-seaa-yellow/5 rounded-2xl p-5">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {stats.map(({ value, label }) => (
                  <div key={label} className="bg-white rounded-xl p-3 text-center shadow-sm">
                    <div className="text-xl sm:text-2xl font-bold text-seaa-yellow">{value}</div>
                    <div className="text-xs text-seaa-blue/60 mt-0.5">{label}</div>
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