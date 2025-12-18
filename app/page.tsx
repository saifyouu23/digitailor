"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useI18n } from "@/lib/i18n/context"
import { ClientLogosSection } from "@/components/client-logos-section"
import ThreeDSlider from "@/components/3d-slider"
import DynamicFrameLayout from "@/components/dynamic-frame-layout"
import { PartnerGallerySlider } from "@/components/partner-gallery-slider"
import MobileNavigation from "@/components/mobile-navigation"
import { useState, useEffect } from "react"
import { Linkedin, Instagram, Facebook } from "lucide-react"

const newsArticles = [
  {
    id: 1,
    slug: "digitailor-launches-ai-automation-platform",
    title: "Digitailor Launches Next-Generation AI Automation Platform",
    excerpt: "Revolutionary platform empowers enterprises with intelligent automation capabilities.",
    date: "2025-12-15",
    author: "Saif Boukhira",
    image: "https://placeholder.svg?height=400&width=600&query=AI%20automation%20platform%20launch",
    category: "Product Launch",
  },
  {
    id: 2,
    slug: "how-ai-transforms-enterprise-workflows",
    title: "How AI Transforms Enterprise Workflows: A Deep Dive",
    excerpt: "Discover how AI is revolutionizing business processes and driving efficiency gains.",
    date: "2025-12-10",
    author: "Saif Boukhira",
    image: "https://placeholder.svg?height=400&width=600&query=enterprise%20AI%20workflow%20transformation",
    category: "Insights",
  },
  {
    id: 3,
    slug: "enterprise-automation-trends-2025",
    title: "Enterprise Automation Trends Shaping 2025",
    excerpt: "Explore emerging trends in enterprise automation defining digital transformation.",
    date: "2025-12-05",
    author: "Saif Boukhira",
    image: "https://placeholder.svg?height=400&width=600&query=2025%20automation%20trends",
    category: "Trends",
  },
]

export default function HeroPage() {
  const { t } = useI18n()
  const [isHeaderVisible, setIsHeaderVisible] = useState(false)
  const [hideTimeout, setHideTimeout] = useState<NodeJS.Timeout | null>(null)

  const handleMouseEnter = () => {
    if (hideTimeout) {
      clearTimeout(hideTimeout)
      setHideTimeout(null)
    }
    setIsHeaderVisible(true)
  }

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsHeaderVisible(false)
    }, 500)
    setHideTimeout(timeout)
  }

  const scrollToFooter = () => {
    const footer = document.getElementById("footer-contact")
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  useEffect(() => {
    return () => {
      if (hideTimeout) {
        clearTimeout(hideTimeout)
      }
    }
  }, [hideTimeout])

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 transition-colors duration-300">
      <MobileNavigation currentPage="hero" onGetStarted={scrollToFooter} />

      {/* Desktop Header Trigger */}
      <div className="hidden md:block fixed top-0 left-0 right-0 h-4 z-[60]" onMouseEnter={handleMouseEnter} />

      {/* Desktop Header */}
      <header
        className={`hidden md:block fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-lg transition-all duration-300 ${isHeaderVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
          }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <Image
                src="/images/screenshot-2025-12-08-164853-281-29.png"
                alt="Digitailor"
                width={32}
                height={32}
                className="w-auto h-[55px]"
              />
            </div>

            <nav className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
                {t("nav.home") || "Home"}
              </Link>
              <Link
                href="/services"
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              >
                {t("nav.services") || "Services"}
              </Link>
              <Link
                href="/portfolio"
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              >
                {t("nav.portfolio")}
              </Link>
              <Link
                href="/ai-world"
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              >
                {t("nav.aiWorld")}
              </Link>
            </nav>

            <div className="flex items-center gap-4">
              <LanguageSwitcher />
              <ThemeToggle />
              <Button
                onClick={scrollToFooter}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full px-6"
              >
                {t("buttons.getStarted")}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Services Section - Removed as component returns null */}

      {/* Professional Client Logos Section */}
      <div id="clients" className="transition-colors duration-300">
        <ClientLogosSection />
      </div>

      {/* Portfolio Section */}

      <section id="3d-slider" className="relative h-[400vh] bg-background transition-colors duration-300 py-0 my-0">
        <div className="sticky top-0 h-screen overflow-hidden h-80 py-10 w-fit">
          <ThreeDSlider />
        </div>
      </section>

      {/* Full Portfolio Section */}
      <section
        id="full-portfolio"
        className="bg-gradient-to-br from-background via-background to-muted/20 transition-colors duration-300 py-[1330px]"
      >
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mb-12"></div>

          {/* Dynamic Frame Layout */}
          <div className="w-full h-screen">
            <DynamicFrameLayout />
          </div>
        </div>
      </section>

      {/* Partner Gallery Slider Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <PartnerGallerySlider />
      </section>

      {/* Clarity in the Age of AI Section */}
      <section className="relative transition-colors duration-300 overflow-hidden rounded-sm py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-8">
              <h2 className="text-5xl lg:text-6xl font-bold text-balance leading-tight">Clarity in the Age of AI</h2>

              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Every day, new AI tools launch — each promising transformation.
                  <br />
                  Most businesses don't need more tools. They need the right decisions.
                </p>

                <p>
                  At DigiTailor, we counsel teams through the noise of modern AI.
                  <br />
                  We help identify what truly matters, what to ignore, and what to implement — strategically,
                  responsibly, and with long-term impact.
                </p>

                <p>
                  We don't chase trends.
                  <br />
                  We design intelligent systems that fit the way your business actually works.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  onClick={() => window.open('https://calendly.com/agencydigitailor/30min', '_blank')}
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full px-8"
                >
                  Book a Strategic Call
                </Button>

                <Link
                  href="/ai-world#hero"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
                >
                  Meet the AI Team
                </Link>
              </div>
            </div>

            {/* Right Column - CEO Image Container with Glossy Chrome Effect */}
            <div className="relative group">
              <div className="relative aspect-square rounded-3xl overflow-hidden">
                {/* Glossy Chrome Container */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-sm border border-white/20 rounded-3xl" />

                {/* Iridescent Reflection Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-60 mix-blend-overlay rounded-3xl" />

                {/* CEO Image */}
                <Image
                  src="/images/1766034240622-019b2fd7-3e1f-7af0-ac5b.jpeg"
                  alt="DigiTailor CEO"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105 rounded-none"
                />

                {/* Subtle Chrome Highlight */}
                <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent opacity-40 rounded-3xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer-contact" className="border-t border-border/40 py-16 transition-colors duration-300">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Column 1 - Company */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Image
                  src="/images/screenshot-2025-12-08-164853-281-29.png"
                  alt="Digitailor"
                  width={32}
                  height={32}
                  className="w-auto h-[45px]"
                />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">Strategic AI systems & automation</p>
            </div>

            {/* Column 2 - Locations */}
            <div className="space-y-6">
              <h3 className="font-semibold text-sm uppercase tracking-wider text-foreground/80">Locations</h3>

              <div className="space-y-4">
                <div className="space-y-1">
                  <p className="font-medium text-sm">Morocco</p>
                  <p className="text-sm text-muted-foreground">Avenue Annakhil, Hay Riad</p>
                  <p className="text-sm text-muted-foreground">Rabat – 10100</p>
                  <p className="text-sm text-muted-foreground">Phone: +212 06 37 94 16 86</p>
                </div>

                <div className="space-y-1">
                  <p className="font-medium text-sm">Netherlands</p>
                  <p className="text-sm text-muted-foreground">29 Claude Debussylaan</p>
                  <p className="text-sm text-muted-foreground">Amsterdam – 1082 MC</p>
                  <p className="text-sm text-muted-foreground">Phone: +31 6 14496723</p>
                </div>
              </div>
            </div>

            {/* Column 3 - Contact */}
            <div className="space-y-6">
              <h3 className="font-semibold text-sm uppercase tracking-wider text-foreground/80">Contact</h3>

              <div className="space-y-4">
                <a
                  href="mailto:saif@digitailor.cloud"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors block"
                >
                  saif@digitailor.cloud
                </a>

                {/* Social Media Icons */}
                <div className="flex items-center gap-4 pt-2">
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-border/40">
            <p className="text-center text-sm text-muted-foreground">
              © {new Date().getFullYear()} DigiTailor. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div >
  )
}
