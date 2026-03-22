// src/components/sections/ContactSection.tsx
'use client'

import { useState, useEffect } from 'react'
import { MapPin, Phone, Mail, Clock, ExternalLink, CheckCircle2, ArrowRight } from 'lucide-react'
import { PREFILL_EVENT } from './PricingCalculatorSection'

const serviceOptions = [
  'Washing Bay',
  'Alignment & Balancing',
  'Vulcanizing',
  'AC Services',
  'Auto Diagnosis',
  'Other',
]

interface FormData {
  name: string
  email: string
  phone: string
  service: string
  message: string
}

const emptyForm: FormData = { name: '', email: '', phone: '', service: '', message: '' }

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>(emptyForm)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Listen for prefill event fired by PricingCalculatorSection
  useEffect(() => {
    const handler = (e: Event) => {
      const service = (e as CustomEvent<{ service: string }>).detail.service
      if (service) {
        setFormData((prev) => ({ ...prev, service }))
      }
    }
    window.addEventListener(PREFILL_EVENT, handler)
    return () => window.removeEventListener(PREFILL_EVENT, handler)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData(emptyForm)
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <section id="contact" className="section" style={{ backgroundColor: 'var(--secondary)' }}>
      <div className="container">
        <div className="section-header reveal-on-scroll">
          <span className="badge badge-outline mb-4">Contact Us</span>
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle">
            Ready to give your vehicle the care it deserves? Contact us today for a free quote.
          </p>
        </div>

        <div className="contact-grid">
          {/* Quote Form */}
          <div className="card reveal-on-scroll">
            <div className="card-header">
              <h3 className="card-title">Request a Quote</h3>
              <p className="card-description">
                Fill out the form below and we&apos;ll get back to you within 24 hours.
              </p>
            </div>
            <div className="card-content">
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div style={{
                    width: '4rem', height: '4rem', borderRadius: '9999px',
                    backgroundColor: 'rgba(34, 197, 94, 0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    margin: '0 auto 1rem',
                  }}>
                    <CheckCircle2 size={32} style={{ color: '#22c55e' }} />
                  </div>
                  <h3 className="card-title" style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>
                    Thank You!
                  </h3>
                  <p style={{ color: 'var(--muted-foreground)' }}>
                    Your message has been received. We&apos;ll contact you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>

                  {/* Name + Phone row */}
                  <div className="form-name-phone-grid">
                    <div className="form-group">
                      <label htmlFor="contact-name" className="form-label">Full Name</label>
                      <input
                        id="contact-name"
                        type="text"
                        className="form-input"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="contact-phone" className="form-label">Phone</label>
                      <input
                        id="contact-phone"
                        type="tel"
                        className="form-input"
                        placeholder="+233 XX XXX XXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="form-group">
                    <label htmlFor="contact-email" className="form-label">Email</label>
                    <input
                      id="contact-email"
                      type="email"
                      className="form-input"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>

                  {/* Service — value driven by React state, pre-fills correctly */}
                  <div className="form-group">
                    <label htmlFor="contact-service" className="form-label">Service Needed</label>
                    <select
                      id="contact-service"
                      className="form-select"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      required
                    >
                      <option value="">Select a service...</option>
                      {serviceOptions.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div className="form-group">
                    <label htmlFor="contact-message" className="form-label">Message (Optional)</label>
                    <textarea
                      id="contact-message"
                      className="form-textarea"
                      placeholder="Tell us more about your vehicle and what you need..."
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin" style={{
                          width: '1rem', height: '1rem',
                          border: '2px solid var(--seaa-blue)',
                          borderTopColor: 'transparent',
                          borderRadius: '9999px',
                        }} />
                        Sending...
                      </>
                    ) : (
                      <>Send Request <ArrowRight size={16} /></>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Map + Contact Info */}
          <div className="feature-list reveal-on-scroll" style={{ gap: '1.5rem' }}>
            <div className="card overflow-hidden">
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2035115.5313229924!2d-4.080509806250005!3d4.967075799999991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfe7796559c868a7%3A0x56689ee11454677c!2sSEAA%20Auto%20Service%20Center!5e0!3m2!1sen!2sgh!4v1773781305518!5m2!1sen!2sgh"
                  className="map-iframe"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="card-content p-4">
                <a
                  href="https://www.google.com/maps/dir//''/data=!4m7!4m6!1m1!4e2!1m2!1m1!1s0xfe7796559c868a7:0x56689ee11454677c!3e0"
                  target="_blank" rel="noopener noreferrer" className="map-directions"
                >
                  <ExternalLink size={16} /> Get Directions
                </a>
              </div>
            </div>

            <div className="contact-info-grid">
              <div className="contact-info-card">
                <div className="contact-info-icon"><MapPin /></div>
                <div>
                  <h3 className="contact-info-title">Location</h3>
                  <p className="contact-info-text">SEAA Auto Service Center<br />Ghana</p>
                </div>
              </div>
              <div className="contact-info-card">
                <div className="contact-info-icon"><Phone /></div>
                <div>
                  <h3 className="contact-info-title">Phone</h3>
                  <p className="contact-info-text" style={{ color: 'var(--seaa-yellow)' }}>
                    +233 24 602 0823
                  </p>
                </div>
              </div>
              <div className="contact-info-card">
                <div className="contact-info-icon"><Mail /></div>
                <div>
                  <h3 className="contact-info-title">Email</h3>
                  <p className="contact-info-text">info@seaaauto.com</p>
                </div>
              </div>
              <div className="contact-info-card">
                <div className="contact-info-icon"><Clock /></div>
                <div>
                  <h3 className="contact-info-title">Hours</h3>
                  <p className="contact-info-text">Mon-Fri: 8AM-6PM<br />Sat: 9AM-4PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}