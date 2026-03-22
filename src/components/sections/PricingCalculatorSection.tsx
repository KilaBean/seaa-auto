// src/components/sections/PricingCalculatorSection.tsx
'use client'

import { useState } from 'react'
import {
  Car,
  Wrench,
  CircleDot,
  Droplets,
  Snowflake,
  Activity,
  Calculator,
  DollarSign,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react'
import type { ElementType } from 'react'

interface VehicleType {
  id: string
  label: string
  multiplier: number
}

interface ServiceOption {
  id: string
  label: string
  basePrice: number
  icon: ElementType
}

const vehicleTypes: VehicleType[] = [
  { id: 'sedan', label: 'Sedan', multiplier: 1.0 },
  { id: 'suv', label: 'SUV / Crossover', multiplier: 1.2 },
  { id: 'truck', label: 'Truck / Van', multiplier: 1.3 },
  { id: 'luxury', label: 'Luxury / Sports', multiplier: 1.5 },
]

const serviceOptions: ServiceOption[] = [
  { id: 'basic-wash', label: 'Basic Car Wash', basePrice: 50, icon: Droplets },
  { id: 'full-detail', label: 'Full Detailing', basePrice: 200, icon: Droplets },
  { id: 'engine-wash', label: 'Engine Wash', basePrice: 80, icon: Droplets },
  { id: 'alignment', label: 'Wheel Alignment', basePrice: 150, icon: Wrench },
  { id: 'balancing', label: 'Wheel Balancing', basePrice: 100, icon: Wrench },
  { id: 'vulcanizing', label: 'Tire Puncture Repair', basePrice: 20, icon: CircleDot },
  { id: 'tire-replace', label: 'Tire Replacement', basePrice: 150, icon: CircleDot },
  { id: 'ac-diag', label: 'AC Diagnostics', basePrice: 100, icon: Snowflake },
  { id: 'ac-recharge', label: 'AC Gas Recharge', basePrice: 150, icon: Snowflake },
  { id: 'auto-diag', label: 'Auto Diagnostics', basePrice: 80, icon: Activity },
  { id: 'full-diag', label: 'Full System Diagnostics', basePrice: 150, icon: Activity },
]

export default function PricingCalculatorSection() {
  const [vehicleType, setVehicleType] = useState('')
  const [selectedServices, setSelectedServices] = useState<string[]>([])

  const toggleService = (serviceId: string) => {
    setSelectedServices((prev) =>
      prev.includes(serviceId) ? prev.filter((s) => s !== serviceId) : [...prev, serviceId]
    )
  }

  const calculateTotal = () => {
    const vehicle = vehicleTypes.find((v) => v.id === vehicleType)
    const multiplier = vehicle?.multiplier || 1
    const subtotal = selectedServices.reduce((sum, serviceId) => {
      const service = serviceOptions.find((s) => s.id === serviceId)
      return sum + (service?.basePrice || 0)
    }, 0)
    return Math.round(subtotal * multiplier)
  }

  const selectedVehicle = vehicleTypes.find((v) => v.id === vehicleType)
  const selectedServiceDetails = selectedServices
    .map((id) => serviceOptions.find((s) => s.id === id))
    .filter(Boolean) as ServiceOption[]

  return (
    <section id="pricing" className="section">
      <div className="container">
        <div className="section-header">
          <span className="badge badge-outline mb-4">
            <Calculator size={16} className="mr-2" />
            Pricing Calculator
          </span>
          <h2 className="section-title">Get Your Instant Quote</h2>
          <p className="section-subtitle">
            Select your vehicle type and services needed to get an instant price estimate.
          </p>
        </div>

        <div className="calculator-grid">
          {/* Vehicle Selection */}
          <div className="card">
            <div className="calculator-header">
              <h3 className="calculator-title">
                <Car />
                1. Select Vehicle Type
              </h3>
            </div>
            <div className="calculator-content">
              {vehicleTypes.map((vehicle) => (
                <button
                  key={vehicle.id}
                  onClick={() => setVehicleType(vehicle.id)}
                  className={`vehicle-option ${vehicleType === vehicle.id ? 'selected' : ''}`}
                >
                  <div className="vehicle-option-content">
                    <span className="vehicle-option-label">{vehicle.label}</span>
                    <span className="badge badge-outline text-xs">{vehicle.multiplier}x rate</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Service Selection */}
          <div className="card">
            <div className="calculator-header">
              <h3 className="calculator-title">
                <Wrench />
                2. Select Services
              </h3>
              <p className="calculator-description">Choose one or more services</p>
            </div>
            <div
              className="calculator-content scrollbar-custom"
              style={{ maxHeight: '24rem', overflowY: 'auto' }}
            >
              {serviceOptions.map((service) => (
                <button
                  key={service.id}
                  onClick={() => toggleService(service.id)}
                  className={`service-option ${
                    selectedServices.includes(service.id) ? 'selected' : ''
                  }`}
                >
                  <div
                    className={`service-option-icon ${
                      selectedServices.includes(service.id) ? 'selected' : ''
                    }`}
                  >
                    <service.icon size={16} />
                  </div>
                  <div className="service-option-info">
                    <div className="service-option-title">{service.label}</div>
                    <div className="service-option-price">GHS {service.basePrice}+</div>
                  </div>
                  {selectedServices.includes(service.id) && (
                    <CheckCircle2 className="service-option-check" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Price Summary */}
          <div className="card calculator-summary">
            <div className="calculator-header">
              <h3 className="calculator-title">
                <DollarSign />
                3. Your Estimate
              </h3>
            </div>
            <div className="calculator-content">
              {!vehicleType || selectedServices.length === 0 ? (
                <div className="text-center py-8">
                  <Calculator
                    size={48}
                    style={{
                      color: 'var(--muted-foreground)',
                      margin: '0 auto 1rem',
                      opacity: 0.3,
                    }}
                  />
                  <p style={{ color: 'var(--muted-foreground)' }}>
                    Select your vehicle and services to see the estimate
                  </p>
                </div>
              ) : (
                <>
                  {selectedVehicle && (
                    <div className="price-breakdown">
                      <span className="text-sm">{selectedVehicle.label}</span>
                      <span className="badge badge-outline">{selectedVehicle.multiplier}x rate</span>
                    </div>
                  )}

                  <div className="price-list">
                    <p className="text-sm font-medium" style={{ color: 'var(--muted-foreground)' }}>
                      Selected Services:
                    </p>
                    {selectedServiceDetails.map((service) => (
                      <div key={service.id} className="price-item">
                        <span>{service.label}</span>
                        <span className="price-item-value">GHS {service.basePrice}</span>
                      </div>
                    ))}
                  </div>

                  <div className="separator" />

                  <div className="price-total">
                    <span className="price-total-label">Estimated Total</span>
                    <span className="price-total-value">GHS {calculateTotal()}</span>
                  </div>

                  <p className="price-note">*Final price may vary based on vehicle condition</p>

                  <button className="btn btn-primary w-full mt-4">
                    Book This Service
                    <ArrowRight size={16} />
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}