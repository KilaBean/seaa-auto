// src/components/sections/LiveChatWidget.tsx
'use client'

import { useState, useRef, useEffect } from 'react'
import { Car, MessageCircle, X, Send } from 'lucide-react'

type Message = { role: 'user' | 'bot'; content: string }

const initialMessages: Message[] = [
  { role: 'bot', content: 'Hello! 👋 Welcome to SEAA Auto Services. How can I help you today?' },
]

const quickReplies = ['Washing Bay', 'Balancing & Alignment', 'Vulcanizing', 'AC Services']

function getBotResponse(userMessage: string): string {
  const msg = userMessage.toLowerCase()

  if (msg.includes('wash') || msg.includes('clean') || msg.includes('detail')) {
    return 'Our Washing Bay services:\n\n🚿 Basic Car Wash: GHS 50\n🚿 Full Detailing: GHS 200\n🚿 Engine Wash: GHS 80\n\nWe make your vehicle look brand new! Would you like to book a service?'
  }

  if (msg.includes('align') || msg.includes('balanc') || msg.includes('wheel')) {
    return 'Our Balancing & Alignment services:\n\n🔧 Wheel Balancing: GHS 100\n🔧 Computerized Alignment: GHS 150\n🔧 Suspension Check: Included\n\nWe use advanced equipment for precise alignment!'
  }

  if (
    msg.includes('vulcan') ||
    msg.includes('tire') ||
    msg.includes('tyre') ||
    msg.includes('puncture') ||
    msg.includes('flat')
  ) {
    return 'Our Vulcanizing services:\n\n🔵 Tire Puncture Repair: GHS 20\n🔵 Tire Patching: GHS 30\n🔵 Tire Replacement: GHS 150+\n\nWe fix flat tires quickly and reliably!'
  }

  if (
    msg.includes('ac') ||
    msg.includes('air') ||
    msg.includes('condition') ||
    msg.includes('cool')
  ) {
    return 'Our AC Services:\n\n❄️ AC Diagnostics: GHS 100\n❄️ AC Repair: From GHS 150\n❄️ Gas Recharge: GHS 150\n\nStay cool on the road with our expert AC services!'
  }

  if (
    msg.includes('diagnosis') ||
    msg.includes('diagnostic') ||
    msg.includes('check engine') ||
    msg.includes('scan')
  ) {
    return 'Our Auto Diagnosis services:\n\n🔍 Engine Diagnostics: GHS 80\n🔍 Full System Diagnostics: GHS 150\n🔍 Electrical Systems Check: Included\n\nWe use advanced equipment to identify issues accurately.'
  }

  if (msg.includes('book') || msg.includes('appointment') || msg.includes('schedule')) {
    return "You can easily book an appointment! Just fill out our contact form or call us. We're open:\n\n📅 Monday - Friday: 8:00 AM - 6:00 PM\n📅 Saturday: 9:00 AM - 4:00 PM\n📅 Sunday: Closed\n\nWould you like to book a service?"
  }

  if (msg.includes('hour') || msg.includes('open') || msg.includes('close')) {
    return 'Our business hours are:\n\n📅 Monday - Friday: 8:00 AM - 6:00 PM\n📅 Saturday: 9:00 AM - 4:00 PM\n📅 Sunday: Closed\n\nWe look forward to serving you!'
  }

  if (msg.includes('location') || msg.includes('address') || msg.includes('where')) {
    return 'We are located at SEAA Auto Service Center in Ghana. You can find us easily on Google Maps. Would you like directions?'
  }

  if (msg.includes('hello') || msg.includes('hi') || msg.includes('hey')) {
    return 'Hello! 👋 Welcome to SEAA Auto Services! How can I assist you today? We offer:\n\n• Washing Bay\n• Balancing & Alignment\n• Vulcanizing\n• Air Condition Services\n• Auto Diagnosis'
  }

  return 'Thanks for your message! I can help you with:\n\n• Washing Bay (Car Wash & Detailing)\n• Balancing & Alignment\n• Vulcanizing (Tire Repair)\n• Air Condition Services\n• Auto Diagnosis\n• Appointments & Scheduling\n\nPlease feel free to ask about any of our services!'
}

export default function LiveChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleSend = (message?: string) => {
    const messageToSend = message || input
    if (!messageToSend.trim()) return

    setMessages((prev) => [...prev, { role: 'user', content: messageToSend }])
    setInput('')
    setIsTyping(true)

    setTimeout(() => {
      const response = getBotResponse(messageToSend)
      setMessages((prev) => [...prev, { role: 'bot', content: response }])
      setIsTyping(false)
    }, 1000)
  }

  return (
    <div className="chat-widget">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`chat-toggle ${!isOpen ? 'bounce' : ''}`}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {isOpen && (
        <div className="chat-window animate-slide-in-right">
          <div className="chat-header">
            <div className="chat-header-content">
              <div className="chat-avatar">
                <Car size={20} />
              </div>
              <div>
                <h3 className="chat-title">SEAA Auto Support</h3>
                <p className="chat-subtitle">We typically reply instantly</p>
              </div>
            </div>
          </div>

          <div className="chat-messages scrollbar-custom">
            {messages.map((msg, index) => (
              <div key={index} className={`chat-message ${msg.role}`}>
                <div className={`chat-bubble ${msg.role}`}>{msg.content}</div>
              </div>
            ))}
            {isTyping && (
              <div className="chat-message bot">
                <div className="chat-typing">
                  <div className="chat-typing-dot" />
                  <div className="chat-typing-dot" />
                  <div className="chat-typing-dot" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {messages.length < 3 && (
            <div className="chat-quick-replies">
              {quickReplies.map((reply) => (
                <button
                  key={reply}
                  onClick={() => handleSend(reply)}
                  className="chat-quick-reply"
                >
                  {reply}
                </button>
              ))}
            </div>
          )}

          <div className="chat-footer">
            <form
              onSubmit={(e) => {
                e.preventDefault()
                handleSend()
              }}
              className="chat-form"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
                className="chat-input"
              />
              <button type="submit" className="chat-send" disabled={!input.trim()}>
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}