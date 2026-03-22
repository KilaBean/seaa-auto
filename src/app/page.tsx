// src/app/page.tsx
import Header from '@/components/sections/Header'
import HeroSection from '@/components/sections/HeroSection'
import ServicesSection from '@/components/sections/ServicesSection'
import PricingCalculatorSection from '@/components/sections/PricingCalculatorSection'
import GallerySection from '@/components/sections/GallerySection'
import ReviewsSection from '@/components/sections/ReviewsSection'
import AboutSection from '@/components/sections/AboutSection'
import ContactSection from '@/components/sections/ContactSection'
import Footer from '@/components/sections/Footer'
import LiveChatWidget from '@/components/sections/LiveChatWidget'

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