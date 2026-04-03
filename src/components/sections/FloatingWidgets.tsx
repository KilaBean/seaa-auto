// src/components/sections/FloatingWidgets.tsx
'use client'
import { useState, useRef, useEffect } from 'react'
import { Car, MessageCircle, X, Send, MapPin, Navigation } from 'lucide-react'

const WHATSAPP_NUMBER  = '233246020823'
const WHATSAPP_MESSAGE = encodeURIComponent("Hello! I'd like to enquire about your auto services.")
const MAPS_DIRECTIONS  = 'https://www.google.com/maps/dir//data=!4m7!4m6!1m1!4e2!1m2!1m1!1s0xfe7796559c868a7:0x56689ee11454677c!3e0'
const MAPS_PLACE_URL   = 'https://www.google.com/maps/place/SEAA+Auto+Service+Center'

const WaIcon = ({ size = 24 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

const quickReplies = ['Washing Bay', 'Balancing & Alignment', 'Vulcanizing', 'AC Services']

function getBotResponse(msg: string): string {
  const m = msg.toLowerCase()
  if (m.includes('wash') || m.includes('clean') || m.includes('detail'))
    return 'Our Washing Bay services:\n\n🚿 Basic Car Wash: GHS 50\n🚿 Full Detailing: GHS 200\n🚿 Engine Wash: GHS 80'
  if (m.includes('align') || m.includes('balanc') || m.includes('wheel'))
    return 'Our Balancing & Alignment services:\n\n🔧 Wheel Balancing: GHS 100\n🔧 Computerized Alignment: GHS 150\n🔧 Suspension Check: Included'
  if (m.includes('vulcan') || m.includes('tire') || m.includes('tyre') || m.includes('puncture') || m.includes('flat'))
    return 'Our Vulcanizing services:\n\n🔵 Puncture Repair: GHS 20\n🔵 Tire Patching: GHS 30\n🔵 Tire Replacement: GHS 150+'
  if (m.includes('ac') || m.includes('air') || m.includes('condition') || m.includes('cool'))
    return 'Our AC Services:\n\n❄️ AC Diagnostics: GHS 100\n❄️ AC Repair: From GHS 150\n❄️ Gas Recharge: GHS 150'
  if (m.includes('diagnosis') || m.includes('diagnostic') || m.includes('scan'))
    return 'Our Auto Diagnosis:\n\n🔍 Engine Diagnostics: GHS 80\n🔍 Full System: GHS 150\n🔍 Electrical Check: Included'
  if (m.includes('book') || m.includes('appointment'))
    return 'To book, fill our contact form or call us!\n\n📅 Mon–Fri: 8:00 AM – 6:00 PM\n📅 Saturday: 9:00 AM – 4:00 PM\n📅 Sunday: Closed'
  if (m.includes('hour') || m.includes('open') || m.includes('close'))
    return 'Our hours:\n\n📅 Mon–Fri: 8:00 AM – 6:00 PM\n📅 Saturday: 9:00 AM – 4:00 PM\n📅 Sunday: Closed'
  if (m.includes('location') || m.includes('address') || m.includes('where') || m.includes('direction'))
    return 'We are at SEAA Auto Service Center, Ghana. Tap the 📍 Maps button for directions!'
  if (m.includes('hello') || m.includes('hi') || m.includes('hey'))
    return 'Hello! 👋 Welcome to SEAA Auto Services!\n\nHow can I help you today?\n• Washing Bay\n• Balancing & Alignment\n• Vulcanizing\n• AC Services\n• Auto Diagnosis'
  return 'Thanks for your message! I can help with:\n\n• Washing Bay\n• Balancing & Alignment\n• Vulcanizing\n• AC Services\n• Auto Diagnosis\n• Appointments & Hours'
}

type Msg   = { role: 'user' | 'bot'; content: string }
type Panel = 'chat' | 'whatsapp' | 'maps' | null

// ── Panel shell ────────────────────────────────────────────────────────────
function PanelShell({ children, onClose }: { children: React.ReactNode; onClose: () => void }) {
  return (
    <div className="w-80 max-sm:w-[calc(100vw-2rem)] bg-white rounded-2xl shadow-2xl border border-gray-100
      flex flex-col overflow-hidden mb-3 animate-fade-in-up" style={{ maxHeight: '32rem' }}>
      {children}
    </div>
  )
}

// ── Maps Panel ─────────────────────────────────────────────────────────────
function MapsPanel({ onClose }: { onClose: () => void }) {
  return (
    <PanelShell onClose={onClose}>
      <div className="flex items-center gap-3 px-4 py-3 bg-[#1a73e8] text-white shrink-0">
        <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center shrink-0">
          <MapPin size={16} />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-bold text-sm leading-tight">SEAA Auto Service Center</p>
          <p className="text-white/70 text-xs">Ghana</p>
        </div>
        <button onClick={onClose} className="w-7 h-7 rounded-full bg-black/20 hover:bg-black/30 flex items-center justify-center transition-colors shrink-0">
          <X size={14} />
        </button>
      </div>
      <div className="flex-1" style={{ minHeight: '200px' }}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2035115.5313229924!2d-4.080509806250005!3d4.967075799999991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfe7796559c868a7%3A0x56689ee11454677c!2sSEAA%20Auto%20Service%20Center!5e0!3m2!1sen!2sgh!4v1773781305518!5m2!1sen!2sgh"
          className="w-full h-full border-0" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </div>
      <div className="p-3 border-t border-gray-100 flex gap-2 shrink-0">
        <a href={MAPS_DIRECTIONS} target="_blank" rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 bg-[#1a73e8] text-white text-xs font-semibold py-2 rounded-lg hover:bg-[#1558b0] transition-colors">
          <Navigation size={13} /> Get Directions
        </a>
        <a href={MAPS_PLACE_URL} target="_blank" rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 border-2 border-[#1a73e8] text-[#1a73e8] text-xs font-semibold py-2 rounded-lg hover:bg-[#1a73e8]/5 transition-colors">
          <MapPin size={13} /> View on Maps
        </a>
      </div>
    </PanelShell>
  )
}

// ── WhatsApp Panel ─────────────────────────────────────────────────────────
function WhatsAppPanel({ onClose }: { onClose: () => void }) {
  return (
    <PanelShell onClose={onClose}>
      <div className="flex items-center gap-3 px-4 py-3 bg-[#075E54] text-white shrink-0">
        <div className="w-9 h-9 rounded-full bg-[#25D366] flex items-center justify-center shrink-0">
          <WaIcon size={18} />
        </div>
        <div className="flex-1">
          <p className="font-bold text-sm">SEAA Auto Services</p>
          <p className="text-white/70 text-xs flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-[#4ade80] inline-block" /> Typically replies instantly
          </p>
        </div>
        <button onClick={onClose} className="w-7 h-7 rounded-full bg-white/15 hover:bg-white/30 flex items-center justify-center transition-colors shrink-0">
          <X size={14} />
        </button>
      </div>
      <div className="flex-1 bg-[#ECE5DD] p-4 overflow-y-auto">
        <div className="bg-white rounded-tr-2xl rounded-br-2xl rounded-bl-2xl p-3.5 shadow-sm text-sm text-gray-800 leading-relaxed">
          <p>👋 Hi there! How can we help you today?</p>
          <ul className="mt-2 pl-4 text-xs leading-7 list-none space-y-0.5">
            <li>🚿 Car Wash &amp; Detailing</li>
            <li>🔧 Wheel Alignment &amp; Balancing</li>
            <li>🔵 Vulcanizing &amp; Tire Repair</li>
            <li>❄️ AC Services</li>
            <li>🔍 Auto Diagnostics</li>
          </ul>
        </div>
      </div>
      <div className="p-3 border-t border-gray-100 shrink-0">
        <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
          target="_blank" rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white font-bold text-sm py-2.5 rounded-xl hover:bg-[#1ebe5d] transition-colors">
          <WaIcon size={17} /> Start Chat on WhatsApp
        </a>
      </div>
    </PanelShell>
  )
}

// ── Chat Panel ─────────────────────────────────────────────────────────────
function ChatPanel({ onClose }: { onClose: () => void }) {
  const [messages, setMessages] = useState<Msg[]>([
    { role: 'bot', content: 'Hello! 👋 Welcome to SEAA Auto Services. How can I help you today?' },
  ])
  const [input,  setInput]  = useState('')
  const [typing, setTyping] = useState(false)
  const endRef              = useRef<HTMLDivElement>(null)

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: 'smooth' }) }, [messages, typing])

  const send = (text?: string) => {
    const msg = text ?? input
    if (!msg.trim()) return
    setMessages((p) => [...p, { role: 'user', content: msg }])
    setInput('')
    setTyping(true)
    setTimeout(() => {
      setMessages((p) => [...p, { role: 'bot', content: getBotResponse(msg) }])
      setTyping(false)
    }, 900)
  }

  return (
    <PanelShell onClose={onClose}>
      {/* Header */}
      <div className="flex items-center gap-3 px-4 py-3 bg-seaa-yellow shrink-0">
        <div className="w-9 h-9 rounded-full bg-seaa-blue/20 flex items-center justify-center shrink-0">
          <Car size={17} className="text-seaa-blue" />
        </div>
        <div className="flex-1">
          <p className="font-bold text-sm text-seaa-blue">SEAA Auto Support</p>
          <p className="text-seaa-blue/60 text-xs">We typically reply instantly</p>
        </div>
        <button onClick={onClose} className="w-7 h-7 rounded-full bg-seaa-blue/15 hover:bg-seaa-blue/25 flex items-center justify-center transition-colors shrink-0">
          <X size={14} className="text-seaa-blue" />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3 scrollbar-thin min-h-0">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[82%] px-3.5 py-2.5 rounded-2xl text-xs leading-relaxed whitespace-pre-line
              ${m.role === 'user'
                ? 'bg-seaa-yellow text-seaa-blue rounded-br-sm'
                : 'bg-gray-100 text-seaa-blue rounded-bl-sm'}`}>
              {m.content}
            </div>
          </div>
        ))}
        {typing && (
          <div className="flex justify-start">
            <div className="bg-gray-100 rounded-2xl rounded-bl-sm px-3.5 py-3 flex gap-1">
              {[0, 0.2, 0.4].map((d, i) => (
                <span key={i} className="w-1.5 h-1.5 bg-seaa-blue/40 rounded-full inline-block animate-typing-dot" style={{ animationDelay: `${d}s` }} />
              ))}
            </div>
          </div>
        )}
        <div ref={endRef} />
      </div>

      {/* Quick replies */}
      {messages.length < 3 && (
        <div className="px-3 pb-2 flex flex-wrap gap-1.5 shrink-0">
          {quickReplies.map((r) => (
            <button key={r} onClick={() => send(r)}
              className="text-xs px-3 py-1.5 rounded-full border border-seaa-yellow/40 text-seaa-blue bg-seaa-yellow/5 hover:bg-seaa-yellow/15 transition-colors font-medium">
              {r}
            </button>
          ))}
        </div>
      )}

      {/* Input */}
      <div className="p-3 border-t border-gray-100 shrink-0">
        <form onSubmit={(e) => { e.preventDefault(); send() }} className="flex gap-2">
          <input type="text" value={input} onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 h-9 px-3 text-xs border-2 border-gray-200 rounded-lg outline-none focus:border-seaa-yellow transition-colors" />
          <button type="submit" disabled={!input.trim()}
            className="w-9 h-9 bg-seaa-yellow text-seaa-blue rounded-lg flex items-center justify-center hover:bg-seaa-yellow-light transition-colors disabled:opacity-40 disabled:cursor-not-allowed shrink-0">
            <Send size={14} />
          </button>
        </form>
      </div>
    </PanelShell>
  )
}

// ── Main widget ────────────────────────────────────────────────────────────
export default function FloatingWidgets() {
  const [open, setOpen] = useState<Panel>(null)
  const toggle = (p: Panel) => setOpen((prev) => (prev === p ? null : p))

  const buttons = [
    { id: 'maps'     as Panel, label: 'Directions', bg: 'bg-[#1a73e8] shadow-[#1a73e8]/40',  icon: <Navigation size={20} /> },
    { id: 'whatsapp' as Panel, label: 'WhatsApp',   bg: 'bg-[#25D366] shadow-[#25D366]/40',  icon: <WaIcon size={20} />    },
    { id: 'chat'     as Panel, label: 'Chat',        bg: 'bg-seaa-yellow shadow-seaa-yellow/40 text-seaa-blue', icon: <MessageCircle size={20} /> },
  ]

  return (
    <div className="fixed bottom-6 right-4 sm:right-6 z-[200] flex flex-col items-end">
      {/* Open panel sits above buttons */}
      {open === 'maps'     && <MapsPanel     onClose={() => setOpen(null)} />}
      {open === 'whatsapp' && <WhatsAppPanel onClose={() => setOpen(null)} />}
      {open === 'chat'     && <ChatPanel     onClose={() => setOpen(null)} />}

      {/* Button column */}
      <div className="flex flex-col items-center gap-3">
        {buttons.map((b) => (
          <button key={b.id} onClick={() => toggle(b.id)} aria-label={b.label}
            className={`w-13 h-13 rounded-full text-white flex items-center justify-center shadow-lg
              transition-all duration-200 hover:scale-110 active:scale-95
              ${b.bg} ${open === b.id ? 'scale-105 ring-2 ring-white/40' : 'animate-bounce-slow'}`}
            style={{ width: '3.25rem', height: '3.25rem' }}>
            {open === b.id ? <X size={20} className={b.id === 'chat' ? 'text-seaa-blue' : 'text-white'} /> : b.icon}
          </button>
        ))}
      </div>
    </div>
  )
}