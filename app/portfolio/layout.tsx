import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Portfolio | Our Work | DigiTailor - Digital Solutions Morocco & Africa",
  description:
    "Explore DigiTailor's portfolio of successful AI automation projects, web development, and digital marketing campaigns across Morocco, Europe, and Africa. Real results for real businesses.",
  keywords: [
    "digital portfolio Morocco",
    "AI automation projects",
    "web development portfolio",
    "marketing campaigns Morocco",
    "case studies Morocco",
    "portfolio projets Maroc",
    "réalisations digitales Maroc",
  ],
  openGraph: {
    title: "Portfolio | DigiTailor Projects & Case Studies",
    description: "See how we've transformed businesses with AI automation and digital solutions.",
    url: "https://digitailor.cloud/portfolio",
  },
  alternates: {
    canonical: "https://digitailor.cloud/portfolio",
  },
}

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return children
}
