// src/components/sections/ContactSection.tsx
'use client'
import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, ExternalLink, CheckCircle2, XCircle, Send, ArrowRight } from 'lucide-react'

// ─── EmailJS config ─────────────────────────────────────────────────────
// Replace these with your values from emailjs.com
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY'
// ────────────────────────────────────────────────────────────────────────

const services = ['Washing Bay','Alignment & Balancing','Vulcanizing','AC Services','Auto Diagnosis','Other']
type Status = 'idle' | 'submitting' | 'success' | 'error'
const empty = { name: '', email: '', phone: '', service: '', message: '' }

const inputCls = `w-full h-11 px-3.5 text-sm border-2 border-gray-200 rounded-lg bg-white text-seaa-blue
  placeholder:text-gray-400 outline-none transition-all duration-150
  focus:border-seaa-yellow focus:ring-2 focus:ring-seaa-yellow/20`

const infoCards = [
  { icon: MapPin, title: 'Location', text: 'SEAA Auto Service Center\nGhana', color: '' },
  { icon: Phone,  title: 'Phone',    text: '+233 24 602 0823',                 color: 'text-seaa-yellow' },
  { icon: Mail,   title: 'Email',    text: 'Jeffkofi0@gmail.com',              color: '' },
  { icon: Clock,  title: 'Hours',    text: 'Mon-Fri: 8AM-6PM\nSat: 9AM-4PM',  color: '' },
]

export default function ContactSection() {
  const [form,   setForm]   = useState(empty)
  const [status, setStatus] = useState<Status>('idle')
  const set = (k: keyof typeof empty) => (e: React.ChangeEvent<HTMLInputElement|HTMLSelectElement|HTMLTextAreaElement>) =>
    setForm((p) => ({ ...p, [k]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    try {
      const emailjs = (await import('@emailjs/browser')).default
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        from_name: form.name, from_email: form.email,
        phone: form.phone, service: form.service,
        message: form.message || 'No additional message.',
        to_email: 'Jeffkofi0@gmail.com',
      }, EMAILJS_PUBLIC_KEY)
      setStatus('success'); setForm(empty)
      setTimeout(() => setStatus('idle'), 6000)
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 6000)
    }
  }

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 reveal">
          <span className="inline-block bg-seaa-blue/5 text-seaa-blue border border-seaa-blue/20 text-xs font-semibold px-3 py-1 rounded-full mb-4">Contact Us</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-seaa-blue mb-4">Get in Touch</h2>
          <p className="text-gray-500 max-w-xl mx-auto">Ready to give your vehicle the care it deserves? Contact us today for a free quote.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form */}
          <div className="bg-white rounded-2xl shadow border border-gray-100 p-6 sm:p-8 reveal">
            <h3 className="text-xl font-bold text-seaa-blue mb-1">Request a Quote</h3>
            <p className="text-sm text-gray-500 mb-6">Fill out the form and we&apos;ll get back to you within 24 hours.</p>

            {status === 'success' && (
              <div className="flex flex-col items-center text-center py-10 bg-green-50 border border-green-200 rounded-xl gap-3">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                  <CheckCircle2 size={32} className="text-green-600" />
                </div>
                <h4 className="text-lg font-bold text-seaa-blue">Message Sent!</h4>
                <p className="text-sm text-gray-500">Thank you! We&apos;ve received your request and will contact you shortly.</p>
              </div>
            )}

            {status === 'error' && (
              <div className="flex flex-col items-center text-center py-8 bg-red-50 border border-red-200 rounded-xl gap-3">
                <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center">
                  <XCircle size={32} className="text-seaa-red" />
                </div>
                <h4 className="text-lg font-bold text-seaa-blue">Something went wrong</h4>
                <p className="text-sm text-gray-500">
                  Please call us at{' '}
                  <a href="tel:+233246020823" className="text-seaa-yellow font-semibold">+233 24 602 0823</a>
                </p>
                <button onClick={() => setStatus('idle')} className="text-sm text-seaa-blue border border-gray-200 px-4 py-1.5 rounded-lg hover:bg-gray-50 transition-colors">Try Again</button>
              </div>
            )}

            {(status === 'idle' || status === 'submitting') && (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-semibold text-seaa-blue">Full Name</label>
                    <input type="text" placeholder="John Doe" className={inputCls} value={form.name} onChange={set('name')} required />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-semibold text-seaa-blue">Phone</label>
                    <input type="tel" placeholder="+233 XX XXX XXXX" className={inputCls} value={form.phone} onChange={set('phone')} required />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-seaa-blue">Email</label>
                  <input type="email" placeholder="john@example.com" className={inputCls} value={form.email} onChange={set('email')} required />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-seaa-blue">Service Needed</label>
                  <select className={`${inputCls} cursor-pointer appearance-none`} value={form.service} onChange={set('service')} required>
                    <option value="">Select a service...</option>
                    {services.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-seaa-blue">
                    Message <span className="text-gray-400 font-normal">(Optional)</span>
                  </label>
                  <textarea rows={4} placeholder="Tell us more about your vehicle and what you need..."
                    className={`${inputCls} h-auto py-3 resize-none leading-relaxed`}
                    value={form.message} onChange={set('message')} />
                </div>
                <button type="submit" disabled={status === 'submitting'}
                  className="flex items-center justify-center gap-2 w-full bg-seaa-yellow text-seaa-blue font-bold py-3 rounded-lg
                    hover:bg-seaa-yellow-light transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed">
                  {status === 'submitting' ? (
                    <><div className="w-4 h-4 border-2 border-seaa-blue/30 border-t-seaa-blue rounded-full animate-spin-fast" />Sending...</>
                  ) : (
                    <><Send size={16} /> Send Message</>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Map + Info */}
          <div className="flex flex-col gap-5 reveal">
            <div className="bg-white rounded-2xl shadow border border-gray-100 overflow-hidden">
              <div className="relative h-56">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2035115.5313229924!2d-4.080509806250005!3d4.967075799999991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfe7796559c868a7%3A0x56689ee11454677c!2sSEAA%20Auto%20Service%20Center!5e0!3m2!1sen!2sgh!4v1773781305518!5m2!1sen!2sgh"
                  className="absolute inset-0 w-full h-full border-0" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              </div>
              <div className="p-4">
                <a href="https://www.google.com/maps/dir//''/data=!4m7!4m6!1m1!4e2!1m2!1m1!1s0xfe7796559c868a7:0x56689ee11454677c!3e0"
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-seaa-yellow font-semibold text-sm hover:underline">
                  <ExternalLink size={15} /> Get Directions
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {infoCards.map(({ icon: Icon, title, text, color }) => (
                <div key={title} className="bg-white rounded-xl border border-gray-100 shadow p-4 flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-seaa-yellow/10 flex items-center justify-center shrink-0">
                    <Icon size={16} className="text-seaa-yellow" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-seaa-blue mb-0.5">{title}</h4>
                    <p className={`text-xs leading-relaxed whitespace-pre-line ${color || 'text-gray-500'}`}>{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}