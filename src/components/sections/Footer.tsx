// src/components/sections/Footer.tsx
import { Car, MapPin, Phone, Mail, Clock } from 'lucide-react'

const quickLinks = ['Services', 'Pricing', 'Gallery', 'Reviews', 'Contact']

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
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
            </div>
            <p className="footer-description">
              Your trusted partner for professional automotive care. Washing Bay, Balancing &amp;
              Alignment, Vulcanizing, AC Services, and Auto Diagnostics. Quality service at fair prices.
            </p>
          </div>

          <div>
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="footer-link">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="footer-title">Contact</h4>
            <ul className="footer-links">
              <li className="footer-contact-item">
                <MapPin className="footer-contact-icon" />
                <span>SEAA Auto Service Center, Ghana</span>
              </li>
              <li className="footer-contact-item">
                <Phone className="footer-contact-icon" />
                <a href="tel:+233246020823" className="footer-phone">+233 24 602 0823</a>
              </li>
              <li className="footer-contact-item">
                <Mail className="footer-contact-icon" />
                <a href="mailto:info@seaaauto.com" className="footer-link">info@seaaauto.com</a>
              </li>
              <li className="footer-contact-item">
                <Clock className="footer-contact-icon" />
                <span>Mon-Fri: 8AM-6PM<br />Sat: 9AM-4PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-divider">
          <p className="footer-copyright">
            © {new Date().getFullYear()} SEAA Auto Service Center. All rights reserved.
          </p>
          <div className="footer-legal">
            <a href="#" className="footer-legal-link">Privacy Policy</a>
            <a href="#" className="footer-legal-link">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}