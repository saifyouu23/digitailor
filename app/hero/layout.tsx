import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "DigiTailor | AI Automation & Digital Marketing Agency Morocco | Europe & Africa",
  description:
    "Transform your business with AI automation, web development, and digital marketing. Expert services in Morocco, Europe, and Africa. WhatsApp bots, lead generation, SEO optimization, and AI-powered workflows for modern businesses.",
  keywords: [
    "AI automation Morocco",
    "digital marketing agency Morocco",
    "web development Morocco",
    "WhatsApp bot Morocco",
    "SEO services Morocco",
    "lead generation Africa",
    "AI agents Europe",
    "marketing automation Casablanca",
    "automatisation IA Maroc",
    "agence digitale Maroc",
    "développement web Maroc",
    "bot WhatsApp Maroc",
    "référencement SEO Maroc",
    "génération de leads Afrique",
  ],
  openGraph: {
    title: "DigiTailor | AI Automation & Digital Solutions for Morocco, Europe & Africa",
    description:
      "Strategic AI systems, marketing automation, and digital solutions tailored for businesses in Morocco, Europe, and Africa.",
    url: "https://digitailor.cloud",
    siteName: "DigiTailor",
    locale: "en_US",
    alternateLocale: ["fr_FR", "ar_MA"],
  },
  alternates: {
    canonical: "https://digitailor.cloud/hero",
    languages: {
      en: "https://digitailor.cloud/hero",
      fr: "https://digitailor.cloud/fr/hero",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export default function HeroLayout({ children }: { children: React.ReactNode }) {
  return children
}
