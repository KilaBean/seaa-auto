// src/app/layout.tsx
import type { Metadata, Viewport } from "next"
import "./globals.css"

const SITE_URL    = "https://seaaauto.com"
const BUSINESS    = "SEAA Auto Service Center"
const DESCRIPTION = "SEAA Auto Service Center is a trusted auto repair and maintenance provider offering professional car diagnostics, engine repair, oil changes, brake services, detailing, wheel alignment, balancing, car wash services and general vehicle maintenance. Our experienced technicians are committed to delivering reliable and affordable automotive solutions, ensuring your vehicle runs smoothly and safely. Visit SEAA Auto Service Center for quality service and customer satisfaction."
const SHORT_DESC  = "Trusted auto repair & maintenance in Takoradi, Ghana. Car diagnostics, engine repair, wheel alignment, balancing, car wash, brake services & more. Reliable, affordable, experienced."

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0D2B5B",
  colorScheme: "light",
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "SEAA Auto Service Center | Auto Repair & Maintenance in Takoradi, Ghana",
    template: "%s | SEAA Auto Service Center",
  },
  description: SHORT_DESC,
  keywords: [
    "auto service Takoradi",
    "car repair Takoradi",
    "car wash Takoradi",
    "wheel alignment Takoradi",
    "wheel balancing Takoradi",
    "vulcanizing Takoradi",
    "tire repair Takoradi",
    "AC service Takoradi",
    "auto diagnostics Takoradi",
    "engine repair Takoradi",
    "oil change Takoradi",
    "brake service Takoradi",
    "car detailing Takoradi",
    "auto repair Ghana",
    "car maintenance Ghana",
    "SEAA Auto",
    "SEAA Auto Service Center",
    "seaaauto",
    "Kansawrado street auto service",
    "vehicle maintenance Takoradi",
  ],
  alternates: { canonical: "/" },
  authors: [{ name: BUSINESS, url: SITE_URL }],
  creator: BUSINESS,
  publisher: BUSINESS,
  openGraph: {
    type: "website",
    locale: "en_GH",
    url: SITE_URL,
    siteName: BUSINESS,
    title: "SEAA Auto Service Center | Auto Repair & Maintenance in Takoradi, Ghana",
    description: SHORT_DESC,
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: `${BUSINESS} — Takoradi, Ghana` }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SEAA Auto Service Center | Auto Repair & Maintenance in Takoradi, Ghana",
    description: SHORT_DESC,
    images: ["/og-image.svg"],
  },
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    apple: [{ url: "/apple-touch-icon.png" }],
    shortcut: "/favicon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: { google: "ZmGLlgzhi2Uds6wqykqR6t-0OI9yX7VEIHcZlt0PkDM" },
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: BUSINESS,
  description: DESCRIPTION,
  url: SITE_URL,
  logo: `${SITE_URL}/favicon.png`,
  image: `${SITE_URL}/og-image.svg`,
  telephone: "+233246020823",
  email: "Jeffkofi0@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Kansawrado Street",
    addressLocality: "Takoradi",
    addressRegion: "Western Region",
    addressCountry: "GH",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "4.967039",
    longitude: "-1.7734686",
  },
  hasMap: "https://www.google.com/maps/place/SEAA+Auto+Service+Center/@4.967039,-1.7734686,17z",
  sameAs: [
    "https://www.google.com/maps/place/SEAA+Auto+Service+Center/@4.967039,-1.7734686,17z",
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
      opens: "06:00",
      closes: "18:00",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Auto Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Car Diagnostics" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Engine Repair" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Oil Change" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Brake Services" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Car Washing & Detailing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Wheel Balancing & Alignment" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Vulcanizing & Tire Repair" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Air Condition Services" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "General Vehicle Maintenance" } },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "10000",
    bestRating: "5",
    worstRating: "1",
  },
  priceRange: "GHS 20 - GHS 500",
  currenciesAccepted: "GHS",
  paymentAccepted: "Cash, Mobile Money",
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: { "@type": "GeoCoordinates", latitude: "4.967039", longitude: "-1.7734686" },
    geoRadius: "30000",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}