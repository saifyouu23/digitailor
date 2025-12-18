import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Services | AI Automation, Web Development & Digital Marketing | DigiTailor Morocco",
  description:
    "Comprehensive digital services for Morocco, Europe & Africa: AI automation, WhatsApp bots, web development, SEO, content creation, video production, and social media management. Transform your business with intelligent solutions.",
  keywords: [
    "AI automation services Morocco",
    "WhatsApp bot integration Morocco",
    "web development services Morocco",
    "SEO optimization Morocco",
    "content creation Morocco",
    "video production Morocco",
    "social media management Morocco",
    "graphic design Morocco",
    "creative ad design Morocco",
    "services automatisation IA Maroc",
    "création de contenu Maroc",
    "développement web Maroc",
  ],
  openGraph: {
    title: "Professional Digital Services | AI & Automation | DigiTailor",
    description:
      "Full-spectrum digital services including AI automation, development, marketing, and creative solutions for businesses in Morocco and beyond.",
    url: "https://digitailor.cloud/services",
  },
  alternates: {
    canonical: "https://digitailor.cloud/services",
  },
}

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children
}
