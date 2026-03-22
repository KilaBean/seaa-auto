// src/components/sections/GallerySection.tsx
'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

interface GalleryItem {
  image: string
  title: string
  category: string
  description: string
}

const galleryItems: GalleryItem[] = [
  { image: '/images/washing-bay.jpg',             title: 'Professional Car Washing',     category: 'Washing Bay',         description: 'Premium washing and detailing services' },
  { image: '/images/alignment-balancing.jpg',     title: 'Wheel Alignment & Balancing',  category: 'Balancing & Alignment', description: 'State-of-the-art alignment equipment' },
  { image: '/images/vulcanizing.jpg',             title: 'Tire Vulcanizing Service',     category: 'Vulcanizing',         description: 'Expert tire repair and patching' },
  { image: '/images/ac-service.jpg',              title: 'Air Condition Service',        category: 'AC Services',         description: 'Professional AC diagnostics and repair' },
  { image: '/images/auto-diagnosis.jpg',          title: 'Auto Diagnostics',             category: 'Auto Diagnosis',      description: 'Advanced computerized vehicle diagnostics' },
  { image: '/images/gallery/before-after-detail.jpg', title: 'Detailing Transformation', category: 'Washing Bay',        description: 'Before & after detailing results' },
]

const categories = ['All', 'Washing Bay', 'Balancing & Alignment', 'Vulcanizing', 'AC Services', 'Auto Diagnosis']

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const filteredItems = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory)

  const openLightbox = (index: number) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)
  const prevImage = () => setLightboxIndex((i) => (i !== null ? (i - 1 + filteredItems.length) % filteredItems.length : null))
  const nextImage = () => setLightboxIndex((i) => (i !== null ? (i + 1) % filteredItems.length : null))

  const currentItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null

  return (
    <section id="gallery" className="section" style={{ backgroundColor: 'var(--secondary)' }}>
      <div className="container">
        <div className="section-header reveal-on-scroll">
          <span className="badge badge-outline mb-4">Our Work</span>
          <h2 className="section-title">Service Gallery</h2>
          <p className="section-subtitle">
            See the quality of our work through photos of completed projects.
          </p>
        </div>

        <div className="gallery-filters reveal-on-scroll">
          {categories.map((category) => (
            <button key={category} onClick={() => setActiveCategory(category)}
              className={`gallery-filter-btn ${activeCategory === category ? 'active' : ''}`}>
              {category}
            </button>
          ))}
        </div>

        <div className="gallery-grid reveal-on-scroll">
          {filteredItems.map((item, index) => (
            <div key={index} className="gallery-item group" onClick={() => openLightbox(index)}
              style={{ cursor: 'pointer' }}>
              <Image src={item.image} alt={item.title} fill />
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

      {/* Lightbox */}
      {currentItem && (
        <div className="lightbox-backdrop" onClick={closeLightbox}>
          <div className="lightbox-container" onClick={(e) => e.stopPropagation()}>
            {/* Close */}
            <button className="lightbox-close" onClick={closeLightbox} aria-label="Close">
              <X size={24} />
            </button>

            {/* Prev */}
            <button className="lightbox-nav lightbox-prev" onClick={prevImage} aria-label="Previous">
              <ChevronLeft size={28} />
            </button>

            {/* Image */}
            <div className="lightbox-image-wrap">
              <Image src={currentItem.image} alt={currentItem.title} fill style={{ objectFit: 'contain' }} />
            </div>

            {/* Next */}
            <button className="lightbox-nav lightbox-next" onClick={nextImage} aria-label="Next">
              <ChevronRight size={28} />
            </button>

            {/* Caption */}
            <div className="lightbox-caption">
              <span className="gallery-category" style={{ marginBottom: '0.25rem', display: 'inline-block' }}>
                {currentItem.category}
              </span>
              <h3 style={{ color: 'white', fontWeight: 600, fontSize: '1.125rem' }}>{currentItem.title}</h3>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem' }}>{currentItem.description}</p>
              <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', marginTop: '0.5rem' }}>
                {(lightboxIndex ?? 0) + 1} / {filteredItems.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}