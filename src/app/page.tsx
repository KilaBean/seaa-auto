// src/app/page.tsx
import Header                   from '@/components/sections/Header'
import HeroSection              from '@/components/sections/HeroSection'
import ServicesSection          from '@/components/sections/ServicesSection'
import PricingCalculatorSection from '@/components/sections/PricingCalculatorSection'
import GallerySection           from '@/components/sections/GallerySection'
import ReviewsSection           from '@/components/sections/ReviewsSection'
import AboutSection             from '@/components/sections/AboutSection'
import ContactSection           from '@/components/sections/ContactSection'
import Footer                   from '@/components/sections/Footer'
import FloatingWidgets          from '@/components/sections/FloatingWidgets'
import ScrollReveal             from '@/components/shared/ScrollReveal'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollReveal />
      <Header />
      <main className="flex-1 pt-16 md:pt-20">
        <HeroSection />
        <ServicesSection />
        <PricingCalculatorSection />
        <GallerySection />
        <ReviewsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWidgets />
    </div>
  )
}