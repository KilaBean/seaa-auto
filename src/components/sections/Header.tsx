// src/components/sections/Header.tsx
'use client'

import { useState } from 'react'
import { Car, ArrowRight, Menu, X } from 'lucide-react'

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#about', label: 'About Us' },
  { href: '#contact', label: 'Contact' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-content">
          {/* Logo */}
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
              <div className="logo-icon">
                <Car />
              </div>
            </div>
            <div className="logo-text">
              <span className="logo-title">SEAA AUTO</span>
              <span className="logo-subtitle">SERVICE CENTER</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="header-nav">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="header-nav-link">
                {link.label}
              </a>
            ))}
            <a href="#contact" className="header-book-btn">
              Book Service
              <ArrowRight size={16} />
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="mobile-menu">
            <nav className="mobile-nav">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="mobile-nav-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="mobile-book-btn"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Service
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}