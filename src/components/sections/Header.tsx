// src/components/sections/Header.tsx
'use client'
import { useState, useEffect } from 'react'
import { Car, ArrowRight, Menu, X } from 'lucide-react'

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#pricing',  label: 'Pricing'  },
  { href: '#gallery',  label: 'Gallery'  },
  { href: '#reviews',  label: 'Reviews'  },
  { href: '#about',    label: 'About Us' },
  { href: '#contact',  label: 'Contact'  },
]
const sectionIds = navLinks.map((l) => l.href.slice(1))

export default function Header() {
  const [menuOpen,      setMenuOpen]      = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [scrolled,      setScrolled]      = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const obs: IntersectionObserver[] = []
    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const o = new IntersectionObserver(
        ([e]) => { if (e.isIntersecting) setActiveSection(id) },
        { rootMargin: '-40% 0px -55% 0px' }
      )
      o.observe(el); obs.push(o)
    })
    return () => obs.forEach((o) => o.disconnect())
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
      ${scrolled ? 'bg-seaa-blue shadow-lg shadow-black/30' : 'bg-seaa-blue/95 backdrop-blur-sm'}
      border-b border-seaa-blue-light`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ${scrolled ? 'h-14' : 'h-16 md:h-20'}`}>

          {/* Logo */}
          <a href="#" className="flex items-center gap-3 no-underline">
            <div className="relative w-12 h-12 shrink-0">
              <div className="absolute inset-0 rounded-full bg-seaa-blue border-2 border-seaa-yellow">
                <div className="absolute inset-1 rounded-full border border-seaa-blue-light overflow-hidden">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="absolute w-1 h-1 bg-white/30 rounded-full"
                      style={{ top: i < 2 ? '4px' : 'auto', bottom: i >= 2 ? '6px' : 'auto',
                               left: i % 2 === 0 ? '4px' : 'auto', right: i % 2 !== 0 ? '6px' : 'auto' }} />
                  ))}
                </div>
              </div>
              <div className="absolute -top-0.5 -right-0.5 w-5 h-5 border-t-2 border-r-2 border-seaa-yellow rounded-tr-full" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Car className="w-5 h-5 text-seaa-red" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-seaa-yellow tracking-wide leading-tight">SEAA AUTO</span>
              <span className="text-[10px] text-white/70 tracking-widest -mt-0.5">SERVICE CENTER</span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}
                className={`text-sm font-medium transition-colors duration-200
                  ${activeSection === link.href.slice(1) ? 'text-seaa-yellow' : 'text-white/80 hover:text-seaa-yellow'}`}>
                {link.label}
              </a>
            ))}
            <a href="#contact"
              className="flex items-center gap-2 bg-seaa-yellow text-seaa-blue font-semibold text-sm px-4 py-2 rounded-md hover:bg-seaa-yellow-light transition-colors duration-200">
              Book Service <ArrowRight size={15} />
            </a>
          </nav>

          {/* Mobile button */}
          <button className="lg:hidden p-2 text-white" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden border-t border-seaa-blue-light pb-4 max-h-[70vh] overflow-y-auto">
            <nav className="flex flex-col gap-3 pt-3">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href}
                  className={`text-sm font-medium transition-colors duration-200
                    ${activeSection === link.href.slice(1) ? 'text-seaa-yellow' : 'text-white/80 hover:text-seaa-yellow'}`}
                  onClick={() => setMenuOpen(false)}>
                  {link.label}
                </a>
              ))}
              <a href="#contact"
                className="mt-1 text-center bg-seaa-yellow text-seaa-blue font-semibold text-sm px-4 py-2 rounded-md"
                onClick={() => setMenuOpen(false)}>
                Book Service
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}