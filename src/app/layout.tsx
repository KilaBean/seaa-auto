// src/app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css"; // This imports all the CSS files

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0D2B5B",
  // Lock to light mode — prevents OS dark mode from affecting the site
  colorScheme: "light",
};

export const metadata: Metadata = {
  title: {
    default: "SEAA Auto Service Center | Professional Car Care in Ghana",
    template: "%s | SEAA Auto",
  },
  description: "SEAA Auto Service Center offers professional Washing Bay, Balancing & Alignment, Vulcanizing, Air Condition Services, and Auto Diagnostics. Quality automotive care at fair prices in Ghana.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
      >
        {children}
      </body>
    </html>
  );
}