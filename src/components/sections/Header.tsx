// src/components/sections/Header.tsx
'use client'

import { useState, useEffect } from 'react'
import { Car, ArrowRight, Menu, X } from 'lucide-react'

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#about', label: 'About Us' },
  { href: '#contact', label: 'Contact' },
]

const sectionIds = navLinks.map((l) => l.href.replace('#', ''))

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observers: IntersectionObserver[] = []
    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id) },
        { rootMargin: '-40% 0px -55% 0px' }
      )
      observer.observe(el)
      observers.push(observer)
    })
    return () => observers.forEach((o) => o.disconnect())
  }, [])

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="header-container">
        <div className={`header-content ${isScrolled ? 'header-content-scrolled' : ''}`}>
          <a href="#" className="header-logo">
            <div className="logo-container">
              <div className="logo-outer">
                <div className="logo-inner">
                  <div className="logo-stars" />
                  <div className="logo-stars" />
                  <div className="logo-stars" />
                  <div className="logo-stars" />
                </div>
              </div>
              <div className="logo-accent" />
              <div className="logo-icon"><Car /></div>
            </div>
            <div className="logo-text">
              <span className="logo-title">SEAA AUTO</span>
              <span className="logo-subtitle">SERVICE CENTER</span>
            </div>
          </a>

          <nav className="header-nav">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`header-nav-link ${activeSection === link.href.replace('#', '') ? 'active' : ''}`}
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" className="header-book-btn">
              Book Service <ArrowRight size={16} />
            </a>
          </nav>

          <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="mobile-menu">
            <nav className="mobile-nav">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`mobile-nav-link ${activeSection === link.href.replace('#', '') ? 'active' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a href="#contact" className="mobile-book-btn" onClick={() => setIsMenuOpen(false)}>
                Book Service
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}