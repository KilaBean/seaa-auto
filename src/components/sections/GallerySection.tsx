// src/components/sections/GallerySection.tsx
'use client'
import { useState } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

const galleryItems = [
  { image: '/images/washing-bay.jpg',              title: 'Professional Car Washing',    category: 'Washing Bay',         description: 'Premium washing and detailing services' },
  { image: '/images/alignment-balancing.jpg',      title: 'Wheel Alignment & Balancing', category: 'Balancing & Alignment',description: 'State-of-the-art alignment equipment' },
  { image: '/images/vulcanizing.jpg',              title: 'Tire Vulcanizing Service',    category: 'Vulcanizing',         description: 'Expert tire repair and patching' },
  { image: '/images/ac-service.jpg',               title: 'Air Condition Service',       category: 'AC Services',         description: 'Professional AC diagnostics and repair' },
  { image: '/images/auto-diagnosis.jpg',           title: 'Auto Diagnostics',            category: 'Auto Diagnosis',      description: 'Advanced computerized vehicle diagnostics' },
  { image: '/images/gallery/before-after-detail.jpg', title: 'Detailing Transformation',category: 'Washing Bay',         description: 'Before & after detailing results' },
]
const categories = ['All', 'Washing Bay', 'Balancing & Alignment', 'Vulcanizing', 'AC Services', 'Auto Diagnosis']

export default function GallerySection() {
  const [active,  setActive]  = useState('All')
  const [lbIndex, setLbIndex] = useState<number | null>(null)

  const items = active === 'All' ? galleryItems : galleryItems.filter((i) => i.category === active)
  const current = lbIndex !== null ? items[lbIndex] : null

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 reveal">
          <span className="inline-block bg-seaa-blue/5 text-seaa-blue border border-seaa-blue/20 text-xs font-semibold px-3 py-1 rounded-full mb-4">Our Work</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-seaa-blue mb-4">Service Gallery</h2>
          <p className="text-gray-500 max-w-xl mx-auto">See the quality of our work through photos of completed projects.</p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 reveal">
          {categories.map((c) => (
            <button key={c} onClick={() => setActive(c)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
                ${active === c ? 'bg-seaa-yellow text-seaa-blue shadow-md' : 'bg-white border border-gray-200 text-gray-600 hover:border-seaa-yellow'}`}>
              {c}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 reveal">
          {items.map((item, idx) => (
            <div key={idx} onClick={() => setLbIndex(idx)}
              className="group relative aspect-video rounded-xl overflow-hidden cursor-pointer shadow hover:shadow-xl transition-shadow duration-300">
              <Image src={item.image} alt={item.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-seaa-blue/90 via-seaa-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-xs font-semibold text-seaa-yellow">{item.category}</span>
                <h3 className="text-white font-semibold text-sm">{item.title}</h3>
                <p className="text-white/70 text-xs">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {current && (
        <div className="fixed inset-0 z-[1000] bg-black/93 flex items-center justify-center p-4 animate-fade-in-up"
          onClick={() => setLbIndex(null)}>
          <div className="relative w-full max-w-4xl flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            {/* Close */}
            <button onClick={() => setLbIndex(null)} aria-label="Close"
              className="absolute -top-10 right-0 w-8 h-8 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors">
              <X size={18} />
            </button>
            {/* Prev */}
            <button onClick={() => setLbIndex((i) => (i !== null ? (i - 1 + items.length) % items.length : null))}
              className="absolute left-0 sm:-left-14 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors z-10">
              <ChevronLeft size={24} />
            </button>
            {/* Image */}
            <div className="relative w-full aspect-video rounded-xl overflow-hidden">
              <Image src={current.image} alt={current.title} fill className="object-contain" />
            </div>
            {/* Next */}
            <button onClick={() => setLbIndex((i) => (i !== null ? (i + 1) % items.length : null))}
              className="absolute right-0 sm:-right-14 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors z-10">
              <ChevronRight size={24} />
            </button>
            {/* Caption */}
            <div className="mt-4 text-center">
              <span className="text-seaa-yellow text-xs font-semibold">{current.category}</span>
              <h3 className="text-white font-semibold text-lg">{current.title}</h3>
              <p className="text-white/60 text-sm">{current.description}</p>
              <p className="text-white/30 text-xs mt-1">{(lbIndex ?? 0) + 1} / {items.length}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}