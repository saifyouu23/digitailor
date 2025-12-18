"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useI18n } from "@/lib/i18n/context"
import { useLanguage, AI_WORLD_DATA } from "@/contexts/LanguageContext"

export default function AIEducationPage() {
  const { t } = useI18n()
  const { lang } = useLanguage()
  const aiData = AI_WORLD_DATA[lang]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-lg">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/hero" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Image
                src="/images/logo-20digitailor.png"
                alt="Digitailor"
                width={32}
                height={32}
                className="h-8 w-auto"
              />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                DIGITAILOR
              </span>
            </Link>

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
                className="text-sm font-medium text-foreground hover:text-foreground transition-colors border-b-2 border-primary"
              >
                {t("nav.aiWorld")}
              </Link>
            </nav>

            <div className="flex items-center gap-4">
              <LanguageSwitcher />
              <ThemeToggle />
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full px-6">
                {t("buttons.getStarted")}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
          <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div
              className="inline-block animate-fade-in"
              style={{ animationDelay: "0.2s", animationFillMode: "backwards" }}
            >
              <span className="text-xs font-semibold tracking-wider uppercase bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent px-4 py-2 rounded-full border border-purple-200 dark:border-purple-900/50">
                {lang === "en" ? "AI EDUCATION" : "FORMATION IA"}
              </span>
            </div>

            <h1
              className="text-5xl lg:text-7xl font-bold leading-tight text-balance"
              style={{ animationDelay: "0.4s", animationFillMode: "backwards" }}
            >
              {aiData.intro.title}
            </h1>

            <p
              className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed font-extralight"
              style={{ animationDelay: "0.6s", animationFillMode: "backwards" }}
            >
              {aiData.intro.description}
            </p>
          </div>
        </div>
      </section>

      {/* Education Sections Grid */}
      <section className="py-24 border-t border-border/40">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiData.sections.map((section, index) => (
              <Link href={`/ai-world/education/${section.id}`} key={section.id}>
                <div className="group p-8 rounded-2xl border border-border/40 hover:border-primary/40 bg-card/50 hover:bg-card/80 transition-all duration-300 cursor-pointer hover:shadow-lg h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                      <div className="text-2xl">{section.icon}</div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {section.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">{section.description}</p>

                  <div className="flex items-center gap-2 text-primary group-hover:gap-4 transition-all">
                    <span className="text-sm font-semibold">{lang === "en" ? "Learn More" : "En savoir plus"}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-border/40">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 border border-primary/20 p-12 md:p-16 text-center">
            <div className="absolute inset-0 -z-10 opacity-30">
              <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
              <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
              {lang === "en" ? "Ready to Transform Your Business?" : "Prêt à transformer votre entreprise ?"}
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-foreground">
              {lang === "en"
                ? "Let's discuss how AI can help you scale without proportionally increasing headcount."
                : "Parlons de la façon dont l'IA peut vous aider à évoluer sans augmenter vos effectifs."}
            </p>
            <Button className="group relative overflow-hidden bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/50">
              {lang === "en" ? "Get Started with AI" : "Commencer avec l'IA"}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-8 mt-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              {lang === "en" ? "© 2025 Digitailor. All rights reserved." : "© 2025 Digitailor. Tous droits réservés."}
            </p>
            <div className="flex gap-6">
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {lang === "en" ? "Privacy" : "Confidentialité"}
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {lang === "en" ? "Terms" : "Conditions"}
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {lang === "en" ? "Contact" : "Contact"}
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
