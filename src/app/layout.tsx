// src/app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ── Update this when your domain is confirmed ─────────────────────────────
const SITE_URL = "https://seaaauto.com";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0D2B5B",
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "SEAA Auto Service Center | Professional Car Care in Ghana",
    template: "%s | SEAA Auto Service Center",
  },

  description:
    "SEAA Auto Service Center — Ghana's trusted auto care experts. Professional Washing Bay, Wheel Balancing & Alignment, Vulcanizing, Air Condition Services, and Auto Diagnostics. Quality service at fair prices.",

  keywords: [
    "auto service Ghana",
    "car wash Ghana",
    "wheel alignment Ghana",
    "wheel balancing Ghana",
    "vulcanizing Ghana",
    "tire repair Ghana",
    "AC service Ghana",
    "auto diagnostics Ghana",
    "car service center Ghana",
    "SEAA Auto",
    "seaaauto",
    "car maintenance Ghana",
    "vehicle repair Ghana",
  ],

  alternates: {
    canonical: "/",
  },

  authors: [{ name: "SEAA Auto Service Center", url: SITE_URL }],
  creator: "SEAA Auto Service Center",
  publisher: "SEAA Auto Service Center",

  openGraph: {
    type: "website",
    locale: "en_GH",
    url: SITE_URL,
    siteName: "SEAA Auto Service Center",
    title: "SEAA Auto Service Center | Professional Car Care in Ghana",
    description:
      "Expert Washing Bay, Balancing & Alignment, Vulcanizing, AC Services, and Auto Diagnostics. Your trusted auto care partner in Ghana.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "SEAA Auto Service Center — Professional Car Care in Ghana",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "SEAA Auto Service Center | Professional Car Care in Ghana",
    description:
      "Expert Washing Bay, Alignment, Vulcanizing, AC Services & Diagnostics in Ghana.",
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
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: "SEAA Auto Service Center",
  description:
    "Professional auto care services including Washing Bay, Wheel Balancing & Alignment, Vulcanizing, Air Condition Services, and Auto Diagnostics in Ghana.",
  url: SITE_URL,
  logo: `${SITE_URL}/favicon.svg`,
  image: `${SITE_URL}/og-image.svg`,
  telephone: "+233XXXXXXXXX",
  email: "info@seaaauto.com",
  address: {
    "@type": "PostalAddress",
    addressCountry: "GH",
    addressLocality: "Ghana",
    streetAddress: "",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "4.967075",
    longitude: "-4.080509",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "09:00",
      closes: "16:00",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Auto Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Car Washing & Detailing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Wheel Balancing & Alignment" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Vulcanizing & Tire Repair" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Air Condition Services" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Auto Diagnostics" } },
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}