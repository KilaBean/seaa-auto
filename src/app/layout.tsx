// src/app/layout.tsx
import type { Metadata, Viewport } from "next"
import "./globals.css"

const SITE_URL = "https://seaaauto.com"

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
    default: "SEAA Auto Service Center | Professional Car Care in Ghana",
    template: "%s | SEAA Auto Service Center",
  },
  description: "SEAA Auto Service Center — Ghana's trusted auto care experts. Professional Washing Bay, Wheel Balancing & Alignment, Vulcanizing, Air Condition Services, and Auto Diagnostics.",
  keywords: ["auto service Ghana","car wash Ghana","wheel alignment Ghana","wheel balancing Ghana","vulcanizing Ghana","tire repair Ghana","AC service Ghana","auto diagnostics Ghana","SEAA Auto","seaaauto"],
  alternates: { canonical: "/" },
  authors: [{ name: "SEAA Auto Service Center", url: SITE_URL }],
  openGraph: {
    type: "website", locale: "en_GH", url: SITE_URL, siteName: "SEAA Auto Service Center",
    title: "SEAA Auto Service Center | Professional Car Care in Ghana",
    description: "Expert Washing Bay, Balancing & Alignment, Vulcanizing, AC Services, and Auto Diagnostics. Your trusted auto care partner in Ghana.",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "SEAA Auto Service Center" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SEAA Auto Service Center | Professional Car Care in Ghana",
    description: "Expert Washing Bay, Alignment, Vulcanizing, AC Services & Diagnostics in Ghana.",
    images: ["/og-image.svg"],
  },
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    apple: [{ url: "/apple-touch-icon.png" }],
    shortcut: "/favicon.png",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  verification: { google: "ZmGLlgzhi2Uds6wqykqR6t-0OI9yX7VEIHcZlt0PkDM" },
}

const structuredData = {
  "@context": "https://schema.org", "@type": "AutoRepair",
  name: "SEAA Auto Service Center",
  description: "Professional auto care services in Ghana.",
  url: SITE_URL, telephone: "+233246020823", email: "Jeffkofi0@gmail.com",
  address: { "@type": "PostalAddress", addressCountry: "GH", addressLocality: "Ghana" },
  geo: { "@type": "GeoCoordinates", latitude: "4.967075", longitude: "-4.080509" },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "08:00", closes: "18:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Saturday"], opens: "09:00", closes: "16:00" },
  ],
  priceRange: "GHS 20 - GHS 500", currenciesAccepted: "GHS", paymentAccepted: "Cash, Mobile Money",
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