import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { I18nProvider } from "@/lib/i18n/context"
import { LanguageProvider } from "@/contexts/LanguageContext"
import { MouseOrb } from "@/components/mouse-orb"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  title: "DigiTailor — AI Automation & Digital Creative Studio in Morocco",
  description:
    "AI automations, web development, creative content, and marketing tailored for Moroccan and French-African businesses. Smart systems. Human experience.",
  generator: "v0.app",
  keywords: [
    "AI automation Morocco",
    "AI agents Africa",
    "marketing agency Morocco",
    "digital agency Casablanca",
    "WhatsApp bot Morocco",
    "SEO Morocco",
    "web development Morocco",
    "automatisation IA Maroc",
    "agents IA Afrique",
    "agence digitale Maroc",
  ],
  openGraph: {
    title: "DigiTailor — AI Automation & Digital Creative Studio",
    description: "Transform your business with AI automation and strategic digital solutions.",
    url: "https://digitailor.com",
    siteName: "DigiTailor",
    images: [
      {
        url: "/images/logo-20digitailor.png",
        width: 1200,
        height: 630,
        alt: "DigiTailor - AI Automation & Digital Solutions",
      },
    ],
    locale: "en_US",
  },
  alternates: {
    languages: {
      en: "https://digitailor.com",
      fr: "https://digitailor.com/fr",
    },
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider defaultTheme="light">
          <LanguageProvider>
            <I18nProvider>
              <MouseOrb />
              {children}
            </I18nProvider>
          </LanguageProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
