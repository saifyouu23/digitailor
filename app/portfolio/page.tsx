"use client"
import Link from "next/link"
import Image from "next/image"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useI18n } from "@/lib/i18n/context"
import DynamicFrameLayout from "@/components/dynamic-frame-layout"
import MobileNavigation from "@/components/mobile-navigation" // Assuming MobileNavigation is imported

export default function PortfolioPage() {
  const { t } = useI18n()

  const scrollToFooter = () => {
    window.location.href = "/hero#footer-contact"
  }

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
        <MobileNavigation currentPage="portfolio" onGetStarted={scrollToFooter} />

        {/* Desktop Header */}
        <header className="hidden md:block fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-lg">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <Image
                  src="/images/screenshot-2025-12-08-164853-281-29.png"
                  alt="Digitailor"
                  width={32}
                  height={32}
                  className="rounded"
                />
              </Link>
              <nav className="hidden md:flex items-center gap-8">
                <Link href="/hero" className="text-sm font-medium hover:text-primary transition-colors">
                  {t("nav.home") || "Home"}
                </Link>
                <Link href="/services" className="text-sm font-medium hover:text-primary transition-colors">
                  Services
                </Link>
                <Link href="/portfolio" className="text-sm font-medium text-primary">
                  {t("nav.portfolio")}
                </Link>
                <Link href="/ai-world" className="text-sm font-medium hover:text-primary transition-colors">
                  {t("nav.ai")}
                </Link>
              </nav>
              <div className="flex items-center gap-4">
                <ThemeToggle />
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="pt-24 pb-12">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="mb-12"></div>

            {/* Dynamic Frame Layout */}
            <div className="w-full h-screen">
              <DynamicFrameLayout />
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
