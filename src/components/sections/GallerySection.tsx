// src/components/sections/GallerySection.tsx
'use client'

import { useState } from 'react'
import Image from 'next/image'

interface GalleryItem {
  image: string
  title: string
  category: string
  description: string
}

const galleryItems: GalleryItem[] = [
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

const categories = [
  'All',
  'Washing Bay',
  'Balancing & Alignment',
  'Vulcanizing',
  'AC Services',
  'Auto Diagnosis',
]

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredItems =
    activeCategory === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory)

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
    </section>
  )
}