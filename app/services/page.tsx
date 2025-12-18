"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useI18n } from "@/lib/i18n/context"
import { useLanguage } from "@/contexts/LanguageContext"
import { useEffect, useState } from "react"
import { Cloud, Settings, Search, Shield, Smartphone, Database } from "lucide-react"
import MobileNavigation from "@/components/mobile-navigation"

const SERVICES_DATA = {
  automation_ai: {
    id: "automation-ai",
    en: {
      title: "Automation & AI Workflows",
      short: "Custom AI automations that quietly run your business, faster and smarter.",
      long: "We design tailor-made AI workflows that eliminate repetitive tasks and connect your tools into one intelligent system.\n\nFrom lead capture to internal operations, every automation is built around your real processes — not generic templates.\n\nWe combine modern AI models, secure cloud infrastructure, and advanced integrations to create systems that work reliably in the background.\n\nResult: less friction, fewer errors, more time to focus on growth.",
    },
    fr: {
      title: "Automatisations & Workflows IA",
      short: "Des automatisations IA sur mesure qui font tourner votre business en toute fluidité.",
      long: "Nous concevons des workflows IA sur mesure pour automatiser les tâches répétitives et connecter vos outils intelligemment.\n\nChaque automatisation est pensée selon vos processus réels — jamais des modèles génériques.\n\nNous combinons IA moderne, infrastructure cloud sécurisée et intégrations avancées pour des systèmes stables et durables.\n\nRésultat : plus de fluidité, moins d'erreurs, plus de temps pour développer votre activité.",
    },
    image: "/images/automation-20-26-20ai-20workflows.jpeg",
  },
  ai_agents: {
    id: "ai-agents",
    en: {
      title: "AI Agents (Lead Qualification & Support)",
      short: "AI agents that understand, decide, and assist like a real team member.",
      long: "Our AI agents go beyond chatbots.\n\nThey analyze intent, follow logic, qualify leads, and escalate when necessary.\n\nDesigned for sales pipelines, customer support, and internal workflows, they operate reliably while staying aligned with your brand tone.",
    },
    fr: {
      title: "Agents IA (Qualification & Support)",
      short: "Des agents IA qui comprennent, décident et assistent comme un collaborateur humain.",
      long: "Nos agents IA vont bien au-delà des simples chatbots.\n\nIls analysent les intentions, qualifient les leads, prennent des décisions et escaladent si nécessaire.\n\nPensés pour la vente, le support client et les opérations internes, ils restent cohérents avec votre image de marque.",
    },
    image: "/images/ai-20agents-20-28lead-20qualification-20-26-20support-29.jpeg",
  },
  whatsapp_bot: {
    id: "whatsapp-bot",
    en: {
      title: "WhatsApp Bot Integration",
      short: "24/7 WhatsApp conversations that feel human, not robotic.",
      long: "We build intelligent WhatsApp bots that respond instantly, qualify leads, and support customers — without losing the human touch.\n\nUsing official WhatsApp APIs, AI understanding, and CRM integrations, your business stays responsive at all times while keeping full control.\n\nPerfect for sales, support, bookings, and FAQs.",
    },
    fr: {
      title: "Intégration Bot WhatsApp",
      short: "Des conversations WhatsApp disponibles 24/7, naturelles et efficaces.",
      long: "Nous créons des bots WhatsApp intelligents capables de répondre instantanément, qualifier les leads et assister vos clients.\n\nGrâce aux API officielles WhatsApp, à l'IA et aux intégrations CRM, votre entreprise reste disponible en permanence — avec un contrôle total.\n\nIdéal pour la vente, le support client et les questions fréquentes.",
    },
    image: "/images/whatsapp-20bot-20integration.jpeg",
  },
  web_development: {
    id: "web-development",
    en: {
      title: "Web Development",
      short: "High-performance websites built for growth, speed, and SEO.",
      long: "We build modern, scalable websites focused on performance, SEO, and user experience.\n\nMobile-first, optimized for search engines, and engineered for long-term evolution.\n\nYour website becomes a real business tool — not just a visual showcase.",
    },
    fr: {
      title: "Développement Web",
      short: "Des sites web performants, rapides et pensés pour la croissance.",
      long: "Nous développons des sites web modernes et évolutifs, optimisés pour la performance, le SEO et l'expérience utilisateur.\n\nMobile-first, rapides et conçus pour durer, vos sites deviennent de véritables outils business.",
    },
    image: "/images/web-20development.jpeg",
  },
  creative_ads: {
    id: "creative-ads",
    en: {
      title: "Creative Ad Design (Paid Ads)",
      short: "Ads designed to stop the scroll and drive action.",
      long: "We design high-impact ad creatives optimized for performance across platforms.\n\nEvery visual is built around attention, clarity, and conversion — combining creative direction with marketing psychology.",
    },
    fr: {
      title: "Design Publicitaire Créatif",
      short: "Des publicités qui arrêtent le scroll et génèrent des résultats.",
      long: "Nous concevons des créations publicitaires puissantes, optimisées pour la performance sur toutes les plateformes.\n\nChaque visuel est pensé pour capter l'attention, transmettre un message clair et convertir.",
    },
    image: "/images/creative-20ad-20design-20-28paid-20ads-29.jpeg",
  },
  video_production: {
    id: "video-production",
    en: {
      title: "Video Production",
      short: "Cinematic video production for modern brands.",
      long: "From brand films to social content, we produce high-quality cinematic videos that tell real stories.\n\nProfessional equipment, strong direction, and editing designed for impact — not noise.",
    },
    fr: {
      title: "Production Vidéo",
      short: "Des vidéos cinématographiques pour marques modernes.",
      long: "Du film de marque au contenu social, nous produisons des vidéos cinématographiques qui racontent des histoires authentiques.\n\nMatériel professionnel, direction créative et montage pensé pour l'impact.",
    },
    image: "/images/video-20production.jpeg",
  },
  content_creation: {
    id: "content-creation",
    en: {
      title: "Content Creation",
      short: "Content that connects, explains, and converts.",
      long: "We create strategic content aligned with your brand voice — written, visual, and video.\n\nDesigned to educate, build trust, and guide users naturally toward action.",
    },
    fr: {
      title: "Création de Contenu",
      short: "Du contenu qui crée du lien, explique et convertit.",
      long: "Nous créons du contenu stratégique aligné avec votre identité — texte, visuel et vidéo.\n\nUn contenu pensé pour informer, rassurer et guider vers l'action.",
    },
    image: "/images/content-20creation.jpeg",
  },
  graphic_design: {
    id: "graphic-design",
    en: {
      title: "Graphic Design",
      short: "Visual identities crafted with precision and personality.",
      long: "We design cohesive visual systems — logos, brand assets, and layouts — that feel consistent, modern, and timeless.\n\nEvery detail is intentional, just like tailoring.",
    },
    fr: {
      title: "Design Graphique",
      short: "Des identités visuelles conçues avec précision et caractère.",
      long: "Nous concevons des systèmes visuels cohérents — logos, supports et identités graphiques — modernes et durables.\n\nChaque détail est pensé avec soin, comme un travail de tailleur.",
    },
    image: "/images/graphic-20design.jpg",
  },
  social_media: {
    id: "social-media",
    en: {
      title: "Social Media Management",
      short: "Strategic social presence, not random posting.",
      long: "We manage and design social media strategies focused on consistency, clarity, and engagement.\n\nFrom content planning to visuals, your brand stays active, relevant, and aligned.",
    },
    fr: {
      title: "Gestion des Réseaux Sociaux",
      short: "Une présence sociale stratégique, pas du contenu au hasard.",
      long: "Nous gérons des stratégies social media basées sur la cohérence, la clarté et l'engagement.\n\nVotre marque reste active, crédible et alignée avec ses objectifs.",
    },
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/model-video-1-%281%29---Trim%20-%20Trim-q29Jr80ZY20UMBWPc33UhzD0uYolrS.mp4",
  },
  seo_services: {
    id: "seo-services",
    en: {
      title: "SEO Services",
      short: "Search visibility built for long-term growth.",
      long: "We optimize your website for real search performance, focusing on structure, content, and authority.\n\nOur SEO strategies are adapted for Morocco, France, and Francophone African markets, ensuring sustainable visibility.",
    },
    fr: {
      title: "Services SEO",
      short: "Une visibilité SEO pensée pour durer.",
      long: "Nous optimisons votre site pour un SEO durable, basé sur la structure, le contenu et l'autorité.\n\nNos stratégies sont adaptées aux marchés marocain, français et africain francophone.",
    },
    image: "/images/seo-20services.jpeg",
  },
}

export default function ServicesPage() {
  const { t } = useI18n()
  const { lang } = useLanguage()
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const scrollToService = (serviceId: string) => {
    const element = document.getElementById(serviceId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  const scrollToFooter = () => {
    const footer = document.getElementById("footer-contact")
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 transition-colors duration-300">
      <MobileNavigation currentPage="services" onGetStarted={scrollToFooter} />

      {/* Desktop Header */}
      <header className="hidden md:block fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-lg">
        <div className="container mx-auto px-5 lg:px-6">
          <div className="flex h-13 items-center justify-between">
            <Link href="/hero" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Image
                src="/images/screenshot-2025-12-08-164853-281-29.png"
                alt="Digitailor"
                width={26}
                height={26}
                className="h-7 w-auto"
              />
              <span className="text-lg font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                DIGITAILOR
              </span>
            </Link>

            <nav className="hidden md:flex items-center gap-6">
              <Link
                href="/hero"
                className="text-xs font-medium text-foreground/80 hover:text-foreground transition-colors"
              >
                {t("nav.home") || "Home"}
              </Link>
              <Link
                href="/services"
                className="text-xs font-medium text-foreground hover:text-foreground transition-colors border-b-2 border-primary"
              >
                {t("nav.services") || "Services"}
              </Link>
              <Link
                href="/portfolio"
                className="text-xs font-medium text-foreground/80 hover:text-foreground transition-colors"
              >
                {t("nav.portfolio")}
              </Link>
              <Link
                href="/ai-world"
                className="text-xs font-medium text-foreground/80 hover:text-foreground transition-colors"
              >
                {t("nav.aiWorld")}
              </Link>
            </nav>

            <div className="flex items-center gap-3">
              <LanguageSwitcher />
              <ThemeToggle />
              <Button
                onClick={() => window.location.href = '/hero#footer-contact'}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full px-5 text-sm"
              >
                {t("buttons.getStarted")}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-26 pb-16 bg-gradient-to-br from-background via-background to-muted/20">
        <div className="container mx-auto px-5 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Left Content */}
            <div className="space-y-6 animate-fade-in-up">
              <div
                className="inline-block animate-fade-in"
                style={{ animationDelay: "0.2s", animationFillMode: "backwards" }}
              >
                <span className="text-[10px] font-semibold tracking-wider uppercase bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent px-3 py-1.5 rounded-full border border-cyan-500/30 backdrop-blur-sm">
                  {lang === "en" ? "Our Services" : "Nos Services"}
                </span>
              </div>

              <h1
                className="text-4xl lg:text-6xl font-bold leading-tight text-balance animate-fade-in-up"
                style={{ animationDelay: "0.4s", animationFillMode: "backwards" }}
              >
                {lang === "en" ? "Premium Digital Solutions" : "Solutions Numériques Premium"}
                <span className="block bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mt-1.5">
                  {lang === "en" ? "Tailored for Growth" : "Pensées pour la Croissance"}
                </span>
              </h1>

              <p
                className="text-base text-muted-foreground max-w-2xl text-pretty leading-relaxed animate-fade-in-up font-light"
                style={{ animationDelay: "0.6s", animationFillMode: "backwards" }}
              >
                {lang === "en"
                  ? "Explore our complete range of AI, automation, creative, and technical services designed to transform your business."
                  : "Explorez notre gamme complète de services en IA, automatisation, créativité et technologie conçus pour transformer votre entreprise."}
              </p>

              {/* Service Links Navigation */}
              <div
                className="flex flex-wrap gap-2 pt-6 animate-fade-in-up"
                style={{ animationDelay: "0.8s", animationFillMode: "backwards" }}
              >
                {Object.values(SERVICES_DATA).map((service) => (
                  <button
                    key={service.id}
                    onClick={() => scrollToService(service.id)}
                    className="px-3 py-1.5 rounded-full text-xs font-medium bg-gradient-to-r from-blue-600/10 to-purple-600/10 hover:from-blue-600/20 hover:to-purple-600/20 text-blue-600 dark:text-blue-400 border border-blue-200/50 dark:border-blue-900/50 transition-all duration-200 hover:scale-105"
                  >
                    {lang === "en" ? service.en.title : service.fr.title}
                  </button>
                ))}
              </div>
            </div>

            <div
              className="relative flex items-center justify-center animate-fade-in"
              style={{ animationDelay: "0.3s", animationFillMode: "backwards" }}
            >
              <div className="relative w-full max-w-[480px] h-[480px] flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-[480px] h-[480px]">
                    {/* Center Logo */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 animate-pulse-slow">
                      <div className="relative">
                        <Image
                          src="/images/screenshot-2025-12-08-164853-281-29.png"
                          alt="Digitailor Hub"
                          width={144}
                          height={144}
                          className="drop-shadow-2xl"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-3xl -z-10" />
                      </div>
                    </div>

                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className="w-[320px] h-[320px] rounded-full border border-dashed border-muted-foreground/20 animate-spin-slow" />
                    </div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className="w-[400px] h-[400px] rounded-full border border-dashed border-muted-foreground/10 animate-spin-slower" />
                    </div>

                    {/* Icon nodes with lines - Orbital Animation */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-orbit w-[0%] h-[0%]">
                      {[
                        { Icon: Cloud, angle: 0, label: "Cloud" },
                        { Icon: Settings, angle: 60, label: "Config" },
                        { Icon: Search, angle: 120, label: "Search" },
                        { Icon: Shield, angle: 180, label: "Security" },
                        { Icon: Smartphone, angle: 240, label: "Mobile" },
                        { Icon: Database, angle: 300, label: "Data" },
                      ].map(({ Icon, angle, label }, i) => {
                        const radius = 200
                        const x = Math.cos((angle * Math.PI) / 180) * radius
                        const y = Math.sin((angle * Math.PI) / 180) * radius

                        return (
                          <div key={i}>
                            {/* Connection line */}
                            <div
                              className="absolute top-1/2 left-1/2 bg-gradient-to-r from-transparent via-muted-foreground/30 to-transparent h-[3px]"
                              style={{
                                width: `${radius}px`,
                                transform: `rotate(${angle}deg)`,
                                transformOrigin: "0 0",
                              }}
                            />

                            {/* Icon node */}
                            <div
                              className="absolute top-1/2 left-1/2"
                              style={{
                                transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                              }}
                            >
                              <div className="group relative animate-counter-orbit">
                                <div className="w-13 h-13 rounded-2xl bg-card border-2 border-border shadow-lg flex items-center justify-center transition-all hover:scale-110 hover:shadow-xl hover:border-purple-500/50 hover:animate-none">
                                  <Icon
                                    className="w-6 h-6 text-muted-foreground group-hover:text-purple-600 transition-colors"
                                    strokeWidth={1.5}
                                  />
                                </div>
                                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-muted-foreground whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                                  {label}
                                </span>
                              </div>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Content */}
      <section className="py-16 space-y-26">
        <div className="container mx-auto px-5 lg:px-6">
          {Object.values(SERVICES_DATA).map((service, index) => {
            const isEven = index % 2 === 0
            const content = lang === "en" ? service.en : service.fr
            const isVideo = service.image?.endsWith(".mp4")

            return (
              <div key={service.id} id={service.id} className="scroll-mt-24 animate-fade-in-up">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                  {/* Text Content */}
                  <div className={`space-y-5 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                    <h2 className="text-3xl lg:text-4xl font-bold text-balance leading-tight">
                      {content.title}
                      <span className="block text-xl mt-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent font-semibold">
                        {content.short}
                      </span>
                    </h2>

                    <div className="space-y-3">
                      {content.long.split("\n\n").map((paragraph, i) => (
                        <p key={i} className="text-base text-muted-foreground leading-relaxed text-pretty">
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    <Button
                      onClick={() => window.location.href = '/hero#footer-contact'}
                      size="lg"
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full px-6 mt-6"
                    >
                      {lang === "en" ? "Get Started" : "Commencer"}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>

                  {/* Image Content */}
                  <div
                    className={`relative h-[520px] rounded-2xl overflow-hidden shadow-2xl border border-border/40 ${isEven ? "lg:order-2" : "lg:order-1"}`}
                  >
                    {isVideo ? (
                      <video src={service.image} autoPlay loop muted className="w-full h-full object-cover" />
                    ) : (
                      <Image
                        src={service.image || "/placeholder.svg"}
                        alt={content.title}
                        fill
                        className="object-cover"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  </div>
                </div>

                {/* Divider */}
                {index !== Object.values(SERVICES_DATA).length - 1 && (
                  <div className="mt-16 mb-10 border-t border-border/40" />
                )}
              </div>
            )
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-19 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 border-y border-border/40">
        <div className="container mx-auto px-5 lg:px-6 text-center space-y-6">
          <h2 className="text-4xl font-bold text-balance">
            {lang === "en" ? "Ready to Transform Your Business?" : "Prêt à Transformer Votre Entreprise?"}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {lang === "en"
              ? "Let's talk about how our services can help you achieve your goals."
              : "Parlons de la façon dont nos services peuvent vous aider à atteindre vos objectifs."}
          </p>
          <Button
            onClick={() => window.location.href = '/hero#footer-contact'}
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full px-8"
          >
            {lang === "en" ? "Schedule a Consultation" : "Planifier une Consultation"}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg flex items-center justify-center animate-fade-in transition-all hover:scale-110"
        >
          <ChevronUp className="h-5 w-5" />
        </button>
      )}
    </div>
  )
}
