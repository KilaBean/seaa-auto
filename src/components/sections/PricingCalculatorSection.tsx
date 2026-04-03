// src/components/sections/PricingCalculatorSection.tsx
'use client'
import { useState } from 'react'
import { Car, Wrench, CircleDot, Droplets, Snowflake, Activity, Calculator, DollarSign, CheckCircle2 } from 'lucide-react'
import type { ElementType } from 'react'

interface VehicleType  { id: string; label: string; multiplier: number }
interface ServiceOption { id: string; label: string; basePrice: number; icon: ElementType }

const vehicleTypes: VehicleType[] = [
  { id: 'sedan',  label: 'Sedan',          multiplier: 1.0 },
  { id: 'suv',    label: 'SUV / Crossover', multiplier: 1.2 },
  { id: 'truck',  label: 'Truck / Van',     multiplier: 1.3 },
  { id: 'luxury', label: 'Luxury / Sports', multiplier: 1.5 },
]

const serviceOptions: ServiceOption[] = [
  { id: 'basic-wash',   label: 'Basic Car Wash',         basePrice: 50,  icon: Droplets  },
  { id: 'full-detail',  label: 'Full Detailing',          basePrice: 200, icon: Droplets  },
  { id: 'engine-wash',  label: 'Engine Wash',             basePrice: 80,  icon: Droplets  },
  { id: 'alignment',    label: 'Wheel Alignment',         basePrice: 150, icon: Wrench    },
  { id: 'balancing',    label: 'Wheel Balancing',         basePrice: 100, icon: Wrench    },
  { id: 'vulcanizing',  label: 'Tire Puncture Repair',    basePrice: 20,  icon: CircleDot },
  { id: 'tire-replace', label: 'Tire Replacement',        basePrice: 150, icon: CircleDot },
  { id: 'ac-diag',      label: 'AC Diagnostics',          basePrice: 100, icon: Snowflake },
  { id: 'ac-recharge',  label: 'AC Gas Recharge',         basePrice: 150, icon: Snowflake },
  { id: 'auto-diag',    label: 'Auto Diagnostics',        basePrice: 80,  icon: Activity  },
  { id: 'full-diag',    label: 'Full System Diagnostics', basePrice: 150, icon: Activity  },
]

export default function PricingCalculatorSection() {
  const [vehicleType,      setVehicleType]      = useState('')
  const [selectedServices, setSelectedServices] = useState<string[]>([])

  const toggle = (id: string) =>
    setSelectedServices((p) => p.includes(id) ? p.filter((s) => s !== id) : [...p, id])

  const total = () => {
    const mul = vehicleTypes.find((v) => v.id === vehicleType)?.multiplier ?? 1
    return Math.round(selectedServices.reduce((s, id) =>
      s + (serviceOptions.find((o) => o.id === id)?.basePrice ?? 0), 0) * mul)
  }

  const selVehicle  = vehicleTypes.find((v) => v.id === vehicleType)
  const selServices = selectedServices.map((id) => serviceOptions.find((s) => s.id === id)).filter(Boolean) as ServiceOption[]

  const card = 'bg-white rounded-xl shadow border border-gray-100 overflow-hidden reveal'
  const cardHead = 'flex items-center gap-2 px-5 py-4 border-b border-gray-100 font-semibold text-seaa-blue'

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 reveal">
          <span className="inline-flex items-center gap-1.5 bg-seaa-blue/5 text-seaa-blue border border-seaa-blue/20 text-xs font-semibold px-3 py-1 rounded-full mb-4">
            <Calculator size={13} /> Pricing Calculator
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-seaa-blue mb-4">Get Your Instant Quote</h2>
          <p className="text-gray-500 max-w-xl mx-auto">Select your vehicle type and services to get an instant price estimate.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* 1 Vehicle */}
          <div className={card}>
            <div className={cardHead}><Car size={18} className="text-seaa-yellow" /> 1. Vehicle Type</div>
            <div className="p-4 flex flex-col gap-2">
              {vehicleTypes.map((v) => (
                <button key={v.id} onClick={() => setVehicleType(v.id)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-lg border-2 text-sm font-medium transition-all duration-150
                    ${vehicleType === v.id ? 'border-seaa-yellow bg-seaa-yellow/10 text-seaa-blue' : 'border-gray-200 hover:border-seaa-yellow/50 text-gray-600'}`}>
                  {v.label}
                  <span className={`text-xs px-2 py-0.5 rounded-full border ${vehicleType === v.id ? 'border-seaa-yellow/50 bg-white text-seaa-blue' : 'border-gray-200 text-gray-400'}`}>
                    {v.multiplier}x
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* 2 Services */}
          <div className={card}>
            <div className={cardHead}><Wrench size={18} className="text-seaa-yellow" /> 2. Select Services</div>
            <div className="p-4 flex flex-col gap-2 max-h-96 overflow-y-auto scrollbar-thin">
              {serviceOptions.map((s) => {
                const sel = selectedServices.includes(s.id)
                return (
                  <button key={s.id} onClick={() => toggle(s.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg border-2 text-left transition-all duration-150
                      ${sel ? 'border-seaa-yellow bg-seaa-yellow/10' : 'border-gray-100 hover:border-seaa-yellow/40'}`}>
                    <div className={`w-7 h-7 rounded-md flex items-center justify-center shrink-0 transition-colors duration-150
                      ${sel ? 'bg-seaa-yellow text-seaa-blue' : 'bg-gray-100 text-gray-400'}`}>
                      <s.icon size={14} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-seaa-blue truncate">{s.label}</div>
                      <div className="text-xs text-gray-400">GHS {s.basePrice}+</div>
                    </div>
                    {sel && <CheckCircle2 size={15} className="text-seaa-yellow shrink-0" />}
                  </button>
                )
              })}
            </div>
          </div>

          {/* 3 Estimate */}
          <div className={card}>
            <div className={cardHead}><DollarSign size={18} className="text-seaa-yellow" /> 3. Your Estimate</div>
            <div className="p-5">
              {!vehicleType || selServices.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-10 text-center">
                  <Calculator size={44} className="text-gray-200 mb-3" />
                  <p className="text-sm text-gray-400">Select vehicle &amp; services to see estimate</p>
                </div>
              ) : (
                <div className="flex flex-col gap-3">
                  {selVehicle && (
                    <div className="flex items-center justify-between text-sm px-3 py-2 bg-gray-50 rounded-lg">
                      <span className="text-seaa-blue font-medium">{selVehicle.label}</span>
                      <span className="text-xs border border-gray-200 px-2 py-0.5 rounded-full text-gray-500">{selVehicle.multiplier}x</span>
                    </div>
                  )}
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Selected Services</p>
                  {selServices.map((s) => (
                    <div key={s.id} className="flex justify-between text-sm text-seaa-blue">
                      <span>{s.label}</span>
                      <span className="font-semibold">GHS {s.basePrice}</span>
                    </div>
                  ))}
                  <div className="border-t border-gray-100 pt-3 mt-1">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-seaa-blue">Estimated Total</span>
                      <span className="text-2xl font-bold text-seaa-yellow">GHS {total()}</span>
                    </div>
                    <p className="text-xs text-gray-400 mt-1">*Final price may vary based on vehicle condition</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}