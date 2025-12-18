"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageSwitcher } from "@/components/language-switcher"
import { Button } from "@/components/ui/button"
import { useI18n } from "@/lib/i18n/context"

interface MobileNavigationProps {
  currentPage?: string
  onGetStarted?: () => void
}

export default function MobileNavigation({ currentPage, onGetStarted }: MobileNavigationProps) {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useI18n()

  const closeMenu = () => setIsOpen(false)

  return (
    <>
      {/* Mobile Header */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur-lg">
        <div className="container mx-auto px-4">
          <div className="flex h-14 items-center justify-between">
            <Link href="/hero" className="flex items-center gap-2">
              <Image
                src="/images/screenshot-2025-12-08-164853-281-29.png"
                alt="DigiTailor Logo"
                width={24}
                height={24}
                className="h-8 w-auto"
              />
            </Link>

            <div className="flex items-center gap-2">
              <ThemeToggle />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg hover:bg-muted/50 transition-colors"
                aria-label="Toggle menu"
                aria-expanded={isOpen}
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-14 z-40 bg-background/95 backdrop-blur-lg" onClick={closeMenu}>
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
            <Link
              href="/hero"
              onClick={closeMenu}
              className={`text-lg font-medium py-3 px-4 rounded-lg transition-colors ${
                currentPage === "hero" ? "bg-primary/10 text-primary" : "hover:bg-muted/50"
              }`}
            >
              {t("nav.home") || "Home"}
            </Link>
            <Link
              href="/services"
              onClick={closeMenu}
              className={`text-lg font-medium py-3 px-4 rounded-lg transition-colors ${
                currentPage === "services" ? "bg-primary/10 text-primary" : "hover:bg-muted/50"
              }`}
            >
              {t("nav.services") || "Services"}
            </Link>
            <Link
              href="/portfolio"
              onClick={closeMenu}
              className={`text-lg font-medium py-3 px-4 rounded-lg transition-colors ${
                currentPage === "portfolio" ? "bg-primary/10 text-primary" : "hover:bg-muted/50"
              }`}
            >
              {t("nav.portfolio") || "Portfolio"}
            </Link>
            <Link
              href="/ai-world"
              onClick={closeMenu}
              className={`text-lg font-medium py-3 px-4 rounded-lg transition-colors ${
                currentPage === "ai-world" ? "bg-primary/10 text-primary" : "hover:bg-muted/50"
              }`}
            >
              nav.ai
            </Link>

            <div className="pt-4 border-t border-border/40">
              <LanguageSwitcher />
            </div>

            <Button
              onClick={() => {
                closeMenu()
                onGetStarted?.()
              }}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full py-6 text-base font-semibold mt-4"
            >
              {t("buttons.getStarted") || "Get Started"}
            </Button>
          </nav>
        </div>
      )}
    </>
  )
}
