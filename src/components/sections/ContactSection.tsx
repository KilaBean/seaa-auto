// src/components/sections/ContactSection.tsx
'use client'

import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, ExternalLink, CheckCircle2, XCircle, ArrowRight, Send } from 'lucide-react'

// ─── EmailJS config ────────────────────────────────────────────────────────
// 1. Sign up free at https://emailjs.com
// 2. Add a service (Gmail) → copy the Service ID
// 3. Create an email template → copy the Template ID
//    Template variables used: {{from_name}}, {{from_email}}, {{phone}}, {{service}}, {{message}}
// 4. Copy your Public Key from Account → API Keys
// 5. Replace the three values below
const EMAILJS_SERVICE_ID  = 'service_ctyj2x1'
const EMAILJS_TEMPLATE_ID = 'template_vqw4xgb'
const EMAILJS_PUBLIC_KEY  = 'wL5DdVqJx1lhksUFu'
// ───────────────────────────────────────────────────────────────────────────

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

type Status = 'idle' | 'submitting' | 'success' | 'error'

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>(emptyForm)
  const [status, setStatus] = useState<Status>('idle')

  const update = (field: keyof FormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setFormData((prev) => ({ ...prev, [field]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')

    try {
      // Dynamically import emailjs to keep bundle lean
      const emailjs = (await import('@emailjs/browser')).default

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone:      formData.phone,
          service:    formData.service,
          message:    formData.message || 'No additional message.',
          to_email:   'Jeffkofi0@gmail.com',
        },
        EMAILJS_PUBLIC_KEY
      )

      setStatus('success')
      setFormData(emptyForm)
      setTimeout(() => setStatus('idle'), 6000)
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 6000)
    }
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

          {/* ── Quote Form ────────────────────────────────────────────────── */}
          <div className="card reveal-on-scroll">
            <div className="card-header">
              <h3 className="card-title">Request a Quote</h3>
              <p className="card-description">
                Fill out the form and we&apos;ll get back to you within 24 hours.
              </p>
            </div>

            <div className="card-content">

              {/* Success state */}
              {status === 'success' && (
                <div className="form-feedback form-feedback--success">
                  <div className="form-feedback__icon">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="form-feedback__title">Message Sent!</h3>
                  <p className="form-feedback__body">
                    Thank you! We&apos;ve received your request and will contact you shortly.
                  </p>
                </div>
              )}

              {/* Error state */}
              {status === 'error' && (
                <div className="form-feedback form-feedback--error">
                  <div className="form-feedback__icon">
                    <XCircle size={32} />
                  </div>
                  <h3 className="form-feedback__title">Something went wrong</h3>
                  <p className="form-feedback__body">
                    We couldn&apos;t send your message. Please call us directly at{' '}
                    <a href="tel:+233246020823" style={{ color: 'var(--seaa-yellow)', fontWeight: 600 }}>
                      +233 24 602 0823
                    </a>.
                  </p>
                  <button className="btn btn-outline" style={{ marginTop: '1rem' }}
                    onClick={() => setStatus('idle')}>
                    Try Again
                  </button>
                </div>
              )}

              {/* Form — hidden while showing feedback */}
              {(status === 'idle' || status === 'submitting') && (
                <form onSubmit={handleSubmit} className="contact-form">

                  {/* Name + Phone */}
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="c-name" className="form-label">Full Name</label>
                      <input
                        id="c-name" type="text" className="form-input"
                        placeholder="John Doe"
                        value={formData.name} onChange={update('name')} required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="c-phone" className="form-label">Phone</label>
                      <input
                        id="c-phone" type="tel" className="form-input"
                        placeholder="+233 XX XXX XXXX"
                        value={formData.phone} onChange={update('phone')} required
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="form-group">
                    <label htmlFor="c-email" className="form-label">Email</label>
                    <input
                      id="c-email" type="email" className="form-input"
                      placeholder="john@example.com"
                      value={formData.email} onChange={update('email')} required
                    />
                  </div>

                  {/* Service */}
                  <div className="form-group">
                    <label htmlFor="c-service" className="form-label">Service Needed</label>
                    <select
                      id="c-service" className="form-select"
                      value={formData.service} onChange={update('service')} required
                    >
                      <option value="">Select a service...</option>
                      {serviceOptions.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div className="form-group">
                    <label htmlFor="c-message" className="form-label">
                      Message <span style={{ color: 'var(--muted-foreground)', fontWeight: 400 }}>(Optional)</span>
                    </label>
                    <textarea
                      id="c-message" className="form-textarea" rows={4}
                      placeholder="Tell us more about your vehicle and what you need..."
                      value={formData.message} onChange={update('message')}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{ width: '100%' }}
                    disabled={status === 'submitting'}
                  >
                    {status === 'submitting' ? (
                      <>
                        <div className="btn-spinner" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* ── Map + Contact Info ────────────────────────────────────────── */}
          <div className="feature-list reveal-on-scroll" style={{ gap: '1.5rem' }}>
            <div className="card overflow-hidden">
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2035115.5313229924!2d-4.080509806250005!3d4.967075799999991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfe7796559c868a7%3A0x56689ee11454677c!2sSEAA%20Auto%20Service%20Center!5e0!3m2!1sen!2sgh!4v1773781305518!5m2!1sen!2sgh"
                  className="map-iframe" allowFullScreen loading="lazy"
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
                  <p className="contact-info-text">Jeffkofi0@gmail.com</p>
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