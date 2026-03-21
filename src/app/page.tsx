// src/app/page.tsx
'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { 
  Car, 
  Wrench, 
  CircleDot, 
  Droplets, 
  Phone, 
  MapPin, 
  Clock, 
  Mail,
  Menu,
  X,
  CheckCircle2,
  Star,
  ArrowRight,
  Shield,
  Zap,
  Award,
  MessageCircle,
  Send,
  Calculator,
  DollarSign,
  ExternalLink,
  Snowflake,
  Activity
} from 'lucide-react'

// ============================================
// HEADER COMPONENT
// ============================================
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { href: '#services', label: 'Services' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#reviews', label: 'Reviews' },
    { href: '#about', label: 'About Us' },
    { href: '#contact', label: 'Contact' },
  ]

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
              <a
                key={link.href}
                href={link.href}
                className="header-nav-link"
              >
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

// ============================================
// HERO SECTION
// ============================================
function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-bg">
        <Image 
          src="/images/hero-bg.jpg" 
          alt="SEAA Auto Services Workshop"
          fill
          priority
        />
      </div>
      
      <div className="hero-overlay" />
      
      <div className="hero-content">
        <div className="hero-badge">
          <Star size={16} />
          <span>Trusted by 10,000+ Customers</span>
        </div>
        
        <h1 className="hero-title">
          Professional Auto Care
          <span className="hero-title-highlight">You Can Trust</span>
        </h1>
        
        <p className="hero-description">
          Expert vulcanizing, precision alignment & balancing, air condition services, auto diagnostics, and premium car wash. 
          Your vehicle deserves the best care.
        </p>
        
        <div className="hero-buttons">
          <a href="#pricing" className="btn btn-cta">
            Get Free Quote
            <ArrowRight size={20} />
          </a>
          <a href="tel:+233123456789" className="btn btn-outline btn-lg">
            <Phone size={20} />
            Call Now
          </a>
        </div>

        <div className="hero-stats">
          <div className="hero-stat">
            <div className="hero-stat-value">15+</div>
            <div className="hero-stat-label">Years Experience</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-value">10K+</div>
            <div className="hero-stat-label">Happy Customers</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-value">50+</div>
            <div className="hero-stat-label">Expert Technicians</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-value">100%</div>
            <div className="hero-stat-label">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ============================================
// SERVICES SECTION
// ============================================
function ServicesSection() {
  const services = [
    {
      icon: Droplets,
      title: 'Washing Bay',
      description: 'Professional car washing services to keep your vehicle clean and shiny. From basic wash to full detailing.',
      features: ['Exterior Wash', 'Interior Cleaning', 'Engine Wash', 'Full Detailing'],
      price: 'From GHS 50',
      image: '/images/washing-bay.jpg',
    },
    {
      icon: Wrench,
      title: 'Balancing & Alignment',
      description: 'Precision wheel balancing and alignment using advanced equipment for smooth and safe driving.',
      features: ['Wheel Balancing', 'Computerized Alignment', 'Suspension Check', 'Steering Adjustment'],
      price: 'From GHS 150',
      image: '/images/alignment-balancing.jpg',
    },
    {
      icon: CircleDot,
      title: 'Vulcanizing',
      description: 'Expert tire repair and patching services. We fix punctures, tears, and other tire damages quickly.',
      features: ['Tire Punctures Repair', 'Tire Patching', 'Tire Replacement', 'Tube Repair'],
      price: 'From GHS 20',
      image: '/images/vulcanizing.jpg',
    },
    {
      icon: Snowflake,
      title: 'Air Condition Services',
      description: 'Complete AC services including diagnostics, repair, and recharging to keep you cool on the road.',
      features: ['AC Diagnostics', 'AC Repair', 'Gas Recharge', 'AC Component Replacement'],
      price: 'From GHS 100',
      image: '/images/ac-service.jpg',
    },
    {
      icon: Activity,
      title: 'Auto Diagnosis',
      description: 'Advanced computerized diagnostics to identify and resolve vehicle issues accurately.',
      features: ['Engine Diagnostics', 'Check Engine Light', 'Electrical Systems', 'Performance Analysis'],
      price: 'From GHS 80',
      image: '/images/auto-diagnosis.jpg',
    },
  ]

  return (
    <section id="services" className="section" style={{ backgroundColor: 'var(--secondary)' }}>
      <div className="container">
        <div className="section-header">
          <span className="badge badge-primary" style={{ marginBottom: '1rem' }}>Our Services</span>
          <h2 className="section-title">Professional Car Care Solutions</h2>
          <p className="section-subtitle">
            From routine maintenance to specialized services, we provide comprehensive care for your vehicle.
          </p>
        </div>

        {/* FIX: Replaced inline gridTemplateColumns with a CSS class that has proper mobile breakpoints */}
        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="card" 
              style={{ 
                display: 'flex', 
                flexDirection: 'column',
                height: '100%',
                transition: 'all 0.3s',
                border: '2px solid transparent',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--seaa-yellow)';
                e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'transparent';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                {service.image ? (
                  <Image 
                    src={service.image} 
                    alt={service.title}
                    fill
                    style={{ 
                      objectFit: 'cover',
                      transition: 'transform 0.5s'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.05)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  />
                ) : (
                  <div style={{ 
                    width: '100%', 
                    height: '100%', 
                    backgroundColor: 'var(--seaa-blue)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <service.icon size={48} color="var(--seaa-yellow)" />
                  </div>
                )}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(13,43,91,0.9), transparent)'
                }} />
                <div style={{
                  position: 'absolute',
                  bottom: '1rem',
                  left: '1rem'
                }}>
                  <span className="badge badge-service">{service.price}</span>
                </div>
              </div>
              
              <div className="card-header">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{
                    width: '2.5rem',
                    height: '2.5rem',
                    borderRadius: '0.5rem',
                    backgroundColor: 'rgba(229, 57, 53, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'background-color 0.2s'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--seaa-red)';
                    const icon = e.currentTarget.querySelector('svg');
                    if (icon) icon.style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(229, 57, 53, 0.1)';
                    const icon = e.currentTarget.querySelector('svg');
                    if (icon) icon.style.color = 'var(--seaa-red)';
                  }}>
                    <service.icon 
                      size={20} 
                      style={{ 
                        color: 'var(--seaa-red)',
                        transition: 'color 0.2s'
                      }} 
                    />
                  </div>
                  <h3 className="card-title">{service.title}</h3>
                </div>
                <p className="card-description" style={{ marginTop: '0.5rem' }}>{service.description}</p>
              </div>
              
              <div className="card-content" style={{ flex: 1 }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {service.features.map((feature, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', fontSize: '0.875rem', color: 'rgba(13,43,91,0.7)' }}>
                      <CheckCircle2 size={16} style={{ color: 'var(--seaa-yellow)', marginRight: '0.5rem', flexShrink: 0 }} />
                      {feature}
                    </div>
                  ))}
                </div>
                <button 
                  className="btn btn-primary" 
                  style={{ width: '100%', marginTop: '1.5rem' }}
                  onClick={() => window.location.href = '#contact'}
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================
// PRICING CALCULATOR SECTION
// ============================================
function PricingCalculatorSection() {
  const [vehicleType, setVehicleType] = useState('')
  const [selectedServices, setSelectedServices] = useState<string[]>([])

  const vehicleTypes = [
    { id: 'sedan', label: 'Sedan', multiplier: 1.0 },
    { id: 'suv', label: 'SUV / Crossover', multiplier: 1.2 },
    { id: 'truck', label: 'Truck / Van', multiplier: 1.3 },
    { id: 'luxury', label: 'Luxury / Sports', multiplier: 1.5 },
  ]

  const serviceOptions = [
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

  const toggleService = (serviceId: string) => {
    setSelectedServices(prev => 
      prev.includes(serviceId) 
        ? prev.filter(s => s !== serviceId)
        : [...prev, serviceId]
    )
  }

  const calculateTotal = () => {
    const vehicle = vehicleTypes.find(v => v.id === vehicleType)
    const multiplier = vehicle?.multiplier || 1
    
    const subtotal = selectedServices.reduce((sum, serviceId) => {
      const service = serviceOptions.find(s => s.id === serviceId)
      return sum + (service?.basePrice || 0)
    }, 0)
    
    return Math.round(subtotal * multiplier)
  }

  const selectedVehicle = vehicleTypes.find(v => v.id === vehicleType)
  const selectedServiceDetails = selectedServices.map(id => serviceOptions.find(s => s.id === id)).filter(Boolean)

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
            <div className="calculator-content scrollbar-custom" style={{ maxHeight: '24rem', overflowY: 'auto' }}>
              {serviceOptions.map((service) => (
                <button
                  key={service.id}
                  onClick={() => toggleService(service.id)}
                  className={`service-option ${selectedServices.includes(service.id) ? 'selected' : ''}`}
                >
                  <div className={`service-option-icon ${selectedServices.includes(service.id) ? 'selected' : ''}`}>
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
                  <Calculator size={48} style={{ color: 'var(--muted-foreground)', margin: '0 auto 1rem', opacity: 0.3 }} />
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
                    <p className="text-sm font-medium" style={{ color: 'var(--muted-foreground)' }}>Selected Services:</p>
                    {selectedServiceDetails.map((service, idx) => (
                      <div key={idx} className="price-item">
                        <span>{service?.label}</span>
                        <span className="price-item-value">GHS {service?.basePrice}</span>
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

// ============================================
// GALLERY SECTION
// ============================================
function GallerySection() {
  const galleryItems = [
    {
      image: '/images/washing-bay.jpg',
      title: 'Professional Car Washing',
      category: 'Washing Bay',
      description: 'Premium washing and detailing services',
    },
    {
      image: '/images/alignment-balancing.jpg',
      title: 'Wheel Alignment & Balancing',
      category: 'Balancing & Alignment',
      description: 'State-of-the-art alignment equipment',
    },
    {
      image: '/images/vulcanizing.jpg',
      title: 'Tire Vulcanizing Service',
      category: 'Vulcanizing',
      description: 'Expert tire repair and patching',
    },
    {
      image: '/images/ac-service.jpg',
      title: 'Air Condition Service',
      category: 'AC Services',
      description: 'Professional AC diagnostics and repair',
    },
    {
      image: '/images/auto-diagnosis.jpg',
      title: 'Auto Diagnostics',
      category: 'Auto Diagnosis',
      description: 'Advanced computerized vehicle diagnostics',
    },
    {
      image: '/images/gallery/before-after-detail.jpg',
      title: 'Detailing Transformation',
      category: 'Washing Bay',
      description: 'Before & after detailing results',
    },
  ]

  const categories = ['All', 'Washing Bay', 'Balancing & Alignment', 'Vulcanizing', 'AC Services', 'Auto Diagnosis']
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredItems = activeCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory)

  return (
    <section id="gallery" className="section" style={{ backgroundColor: 'var(--secondary)' }}>
      <div className="container">
        <div className="section-header">
          <span className="badge badge-outline mb-4">Our Work</span>
          <h2 className="section-title">Service Gallery</h2>
          <p className="section-subtitle">
            See the quality of our work through photos of completed projects.
          </p>
        </div>

        <div className="gallery-filters">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`gallery-filter-btn ${activeCategory === category ? 'active' : ''}`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {filteredItems.map((item, index) => (
            <div key={index} className="gallery-item group">
              <Image 
                src={item.image} 
                alt={item.title}
                fill
              />
              <div className="gallery-overlay" />
              <div className="gallery-content">
                <span className="gallery-category">{item.category}</span>
                <h3 className="gallery-title">{item.title}</h3>
                <p className="gallery-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================
// REVIEWS SECTION
// ============================================
function ReviewsSection() {
  const reviews = [
    {
      id: 1,
      name: 'Kwame Asante',
      avatar: 'KA',
      rating: 5,
      date: '2 weeks ago',
      service: 'Washing Bay',
      comment: 'Absolutely amazing service! My car looks brand new after the full detailing. The team was professional and thorough. Highly recommend SEAA Auto Services!',
      verified: true,
    },
    {
      id: 2,
      name: 'Akua Mensah',
      avatar: 'AM',
      rating: 5,
      date: '1 month ago',
      service: 'Vulcanizing',
      comment: 'Got a flat tire and they fixed it quickly. Fair prices and excellent service. Will definitely be coming back for all my tire needs.',
      verified: true,
    },
    {
      id: 3,
      name: 'Kofi Owusu',
      avatar: 'KO',
      rating: 5,
      date: '3 weeks ago',
      service: 'Balancing & Alignment',
      comment: 'My car was pulling to one side, and they fixed the alignment perfectly. The computerized equipment gave me confidence in their precision. Great experience!',
      verified: true,
    },
  ]

  const averageRating = (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)

  return (
    <section id="reviews" className="section">
      <div className="container">
        <div className="section-header">
          <span className="badge badge-outline mb-4">Customer Reviews</span>
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-subtitle">
            Don't just take our word for it - hear from our satisfied customers.
          </p>
        </div>

        <div className="review-summary">
          <div className="review-summary-grid">
            <div className="review-summary-item">
              <div className="review-summary-value">{averageRating}</div>
              <div className="review-summary-stars">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={20} className="review-star filled" />
                ))}
              </div>
              <p className="review-summary-label">Average Rating</p>
            </div>
            <div className="review-summary-item">
              <div className="review-summary-value">{reviews.length}+</div>
              <p className="review-summary-label">Customer Reviews</p>
            </div>
            <div className="review-summary-item">
              <div className="review-summary-value">98%</div>
              <p className="review-summary-label">Would Recommend</p>
            </div>
          </div>
        </div>

        <div className="review-grid">
          {reviews.map((review) => (
            <div key={review.id} className="review-card">
              <div className="card-content pt-6">
                <div className="review-header">
                  <div className="review-author">
                    <div className="review-avatar">
                      {review.avatar}
                    </div>
                    <div className="review-author-info">
                      <div className="review-author-name">
                        <span>{review.name}</span>
                        {review.verified && (
                          <span className="review-verified">
                            <CheckCircle2 size={12} />
                            Verified
                          </span>
                        )}
                      </div>
                      <span className="review-date">{review.date}</span>
                    </div>
                  </div>
                </div>
                
                <div className="review-rating">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`review-star ${star <= review.rating ? 'filled' : ''}`}
                    />
                  ))}
                </div>

                <span className="review-service">{review.service}</span>
                <p className="review-comment">{review.comment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================
// ABOUT SECTION
// ============================================
function AboutSection() {
  const benefits = [
    {
      icon: Shield,
      title: 'Quality Guaranteed',
      description: 'All our services come with a satisfaction guarantee. We stand behind our work.',
    },
    {
      icon: Zap,
      title: 'Quick Turnaround',
      description: 'Most services completed same-day. Get back on the road faster.',
    },
    {
      icon: Award,
      title: 'Certified Experts',
      description: 'Our technicians are ASE certified with years of experience.',
    },
  ]

  return (
    <section id="about" className="section">
      <div className="container">
        {/* FIX: Replaced hardcoded inline `gridTemplateColumns: 'repeat(2, 1fr)'` with a CSS
            class `about-grid` that stacks to a single column on mobile */}
        <div className="about-grid">
          <div>
            <span className="badge badge-outline mb-4">About Us</span>
            <h2 className="section-title about-title">
              Why Choose <span style={{ color: 'var(--seaa-yellow)' }}>SEAA</span> Auto Services?
            </h2>
            <p className="section-subtitle" style={{ textAlign: 'left', margin: '0 0 2rem 0' }}>
              With over 15 years of experience in the automotive industry, SEAA Auto Services has built a reputation 
              for excellence. We combine cutting-edge technology with old-fashioned customer service to deliver 
              an experience that keeps our customers coming back.
            </p>
            
            <div className="feature-list" style={{ gap: '1.5rem' }}>
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <div className="service-icon-wrapper" style={{ width: '3rem', height: '3rem' }}>
                    <benefit.icon className="service-icon" style={{ width: '1.5rem', height: '1.5rem' }} />
                  </div>
                  <div>
                    <h3 className="card-title" style={{ fontSize: '1.125rem', marginBottom: '0.25rem' }}>{benefit.title}</h3>
                    <p style={{ color: 'var(--muted-foreground)' }}>{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="relative mb-6" style={{ borderRadius: '1rem', overflow: 'hidden', aspectRatio: '16/9' }}>
              <Image 
                src="/images/team.jpg" 
                alt="SEAA Auto Services Team"
                fill
                className="object-cover"
              />
              <div className="card-overlay" />
              <div style={{ position: 'absolute', bottom: '1rem', left: '1rem', right: '1rem' }}>
                <p className="text-white font-semibold text-lg">Our Expert Team</p>
                <p className="text-white/80 text-sm">50+ Certified Technicians</p>
              </div>
            </div>
            
            <div style={{ 
              background: 'linear-gradient(to bottom right, rgba(244, 180, 0, 0.2), rgba(244, 180, 0, 0.05))',
              borderRadius: '1rem',
              padding: '1.5rem'
            }}>
              <div className="stat-grid">
                <div className="stat-card">
                  <div className="stat-value">15+</div>
                  <div className="stat-label">Years of Excellence</div>
                </div>
                <div className="stat-card">
                  <div className="stat-value">50+</div>
                  <div className="stat-label">Expert Technicians</div>
                </div>
                <div className="stat-card">
                  <div className="stat-value">10K+</div>
                  <div className="stat-label">Vehicles Serviced</div>
                </div>
                <div className="stat-card">
                  <div className="stat-value">99%</div>
                  <div className="stat-label">Customer Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ============================================
// CONTACT SECTION
// ============================================
function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: '', email: '', phone: '', service: '', message: '' })
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const services = [
    'Washing Bay',
    'Alignment & Balancing',
    'Vulcanizing',
    'AC Services',
    'Auto Diagnosis',
    'Other',
  ]

  return (
    <section id="contact" className="section" style={{ backgroundColor: 'var(--secondary)' }}>
      <div className="container">
        <div className="section-header">
          <span className="badge badge-outline mb-4">Contact Us</span>
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle">
            Ready to give your vehicle the care it deserves? Contact us today for a free quote.
          </p>
        </div>

        {/* FIX: Replaced hardcoded inline `gridTemplateColumns: 'repeat(2, 1fr)'`
            with CSS class `contact-grid` that stacks on mobile */}
        <div className="contact-grid">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Request a Quote</h3>
              <p className="card-description">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </div>
            <div className="card-content">
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div style={{ 
                    width: '4rem', 
                    height: '4rem', 
                    borderRadius: '9999px', 
                    backgroundColor: 'rgba(34, 197, 94, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1rem'
                  }}>
                    <CheckCircle2 size={32} style={{ color: '#22c55e' }} />
                  </div>
                  <h3 className="card-title" style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Thank You!</h3>
                  <p style={{ color: 'var(--muted-foreground)' }}>
                    Your message has been received. We'll contact you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="feature-list" style={{ gap: '1rem' }}>
                  {/* FIX: Replaced hardcoded inline `gridTemplateColumns: 'repeat(2, 1fr)'`
                      with CSS class `form-name-phone-grid` that stacks on small screens */}
                  <div className="form-name-phone-grid">
                    <div className="form-group">
                      <label htmlFor="name" className="form-label">Full Name</label>
                      <input
                        id="name"
                        type="text"
                        className="form-input"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone" className="form-label">Phone</label>
                      <input
                        id="phone"
                        type="tel"
                        className="form-input"
                        placeholder="+233 XX XXX XXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                      id="email"
                      type="email"
                      className="form-input"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="service" className="form-label">Service Needed</label>
                    <select
                      id="service"
                      className="form-select"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      required
                    >
                      <option value="">Select a service...</option>
                      {services.map((service) => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="form-label">Message (Optional)</label>
                    <textarea
                      id="message"
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
                        <div className="animate-spin" style={{ width: '1rem', height: '1rem', border: '2px solid var(--seaa-blue)', borderTopColor: 'transparent', borderRadius: '9999px' }} />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Request
                        <ArrowRight size={16} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          <div className="feature-list" style={{ gap: '1.5rem' }}>
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
                  href="https://www.google.com/maps/dir//''/data=!4m7!4m6!1m1!4e2!1m2!1m1!1s0xfe7796559c868a7:0x56689ee11454677c!3e0?g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAEYASAB"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="map-directions"
                >
                  <ExternalLink size={16} />
                  Get Directions
                </a>
              </div>
            </div>

            {/* FIX: contact-info-grid already had `repeat(2, 1fr)` in CSS but no mobile guard.
                The responsive fix is in components.css. No JSX change needed here. */}
            <div className="contact-info-grid">
              <div className="contact-info-card">
                <div className="contact-info-icon">
                  <MapPin />
                </div>
                <div>
                  <h3 className="contact-info-title">Location</h3>
                  <p className="contact-info-text">SEAA Auto Service Center<br />Ghana</p>
                </div>
              </div>

              <div className="contact-info-card">
                <div className="contact-info-icon">
                  <Phone />
                </div>
                <div>
                  <h3 className="contact-info-title">Phone</h3>
                  <p className="contact-info-text" style={{ color: 'var(--seaa-yellow)' }}>+233 XX XXX XXXX</p>
                </div>
              </div>

              <div className="contact-info-card">
                <div className="contact-info-icon">
                  <Mail />
                </div>
                <div>
                  <h3 className="contact-info-title">Email</h3>
                  <p className="contact-info-text">info@seaaauto.com</p>
                </div>
              </div>

              <div className="contact-info-card">
                <div className="contact-info-icon">
                  <Clock />
                </div>
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

// ============================================
// LIVE CHAT WIDGET
// ============================================
function LiveChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; content: string }[]>([
    { role: 'bot', content: 'Hello! 👋 Welcome to SEAA Auto Services. How can I help you today?' }
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const quickReplies = [
    'Washing Bay',
    'Balancing & Alignment',
    'Vulcanizing',
    'AC Services',
  ]

  const getBotResponse = (userMessage: string): string => {
    const msg = userMessage.toLowerCase()
    
    if (msg.includes('wash') || msg.includes('clean') || msg.includes('detail')) {
      return 'Our Washing Bay services:\n\n🚿 Basic Car Wash: GHS 50\n🚿 Full Detailing: GHS 200\n🚿 Engine Wash: GHS 80\n\nWe make your vehicle look brand new! Would you like to book a service?'
    }
    
    if (msg.includes('align') || msg.includes('balanc') || msg.includes('wheel')) {
      return 'Our Balancing & Alignment services:\n\n🔧 Wheel Balancing: GHS 100\n🔧 Computerized Alignment: GHS 150\n🔧 Suspension Check: Included\n\nWe use advanced equipment for precise alignment!'
    }
    
    if (msg.includes('vulcan') || msg.includes('tire') || msg.includes('tyre') || msg.includes('puncture') || msg.includes('flat')) {
      return 'Our Vulcanizing services:\n\n🔵 Tire Puncture Repair: GHS 20\n🔵 Tire Patching: GHS 30\n🔵 Tire Replacement: GHS 150+\n\nWe fix flat tires quickly and reliably!'
    }
    
    if (msg.includes('ac') || msg.includes('air') || msg.includes('condition') || msg.includes('cool')) {
      return 'Our AC Services:\n\n❄️ AC Diagnostics: GHS 100\n❄️ Gas Recharge: GHS 150\n❄️ AC Repair: Varies\n\nStay cool on the road with our expert AC services!'
    }
    
    if (msg.includes('diagnosis') || msg.includes('diagnostic') || msg.includes('check engine') || msg.includes('scan')) {
      return 'Our Auto Diagnosis services:\n\n🔍 Engine Diagnostics: GHS 80\n🔍 Full System Diagnostics: GHS 150\n🔍 Electrical Systems Check: Included\n\nWe use advanced equipment to identify issues accurately.'
    }
    
    if (msg.includes('book') || msg.includes('appointment') || msg.includes('schedule')) {
      return 'You can easily book an appointment! Just fill out our contact form or call us. We\'re open:\n\n📅 Monday - Friday: 8:00 AM - 6:00 PM\n📅 Saturday: 9:00 AM - 4:00 PM\n📅 Sunday: Closed\n\nWould you like to book a service?'
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

  const handleSend = (message?: string) => {
    const messageToSend = message || input
    if (!messageToSend.trim()) return

    setMessages(prev => [...prev, { role: 'user', content: messageToSend }])
    setInput('')
    setIsTyping(true)

    setTimeout(() => {
      const response = getBotResponse(messageToSend)
      setMessages(prev => [...prev, { role: 'bot', content: response }])
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
              <div
                key={index}
                className={`chat-message ${msg.role}`}
              >
                <div className={`chat-bubble ${msg.role}`}>
                  {msg.content}
                </div>
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

// ============================================
// FOOTER
// ============================================
function Footer() {
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
                <div className="logo-icon">
                  <Car />
                </div>
              </div>
              <div className="logo-text">
                <span className="logo-title">SEAA AUTO</span>
                <span className="logo-subtitle">SERVICE CENTER</span>
              </div>
            </div>
            <p className="footer-description">
              Your trusted partner for professional automotive care. Washing Bay, Balancing & Alignment, 
              Vulcanizing, AC Services, and Auto Diagnostics. Quality service at fair prices.
            </p>
          </div>

          <div>
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              {['Services', 'Pricing', 'Gallery', 'Reviews', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="footer-link">
                    {link}
                  </a>
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
                <a href="tel:+233123456789" className="footer-phone">+233 XX XXX XXXX</a>
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

// ============================================
// MAIN PAGE
// ============================================
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1" style={{ paddingTop: '4rem' }}>
        <HeroSection />
        <ServicesSection />
        <PricingCalculatorSection />
        <GallerySection />
        <ReviewsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
      <LiveChatWidget />
    </div>
  )
}
