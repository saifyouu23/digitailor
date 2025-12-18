"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Sparkles, Bot, Zap, Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageSwitcher } from "@/components/language-switcher"
import MobileNavigation from "@/components/mobile-navigation"
import { useI18n } from "@/lib/i18n/context"
import { useEffect, useState } from "react"
import { VoiceAgentModal } from "@/components/voice-agent-modal"

export default function AIWorld() {
  const { t } = useI18n()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedAgent, setSelectedAgent] = useState({ name: "", type: "" })
  const [backgroundReady, setBackgroundReady] = useState(false)

  const agents = [
    {
      name: "Customer Support Agent",
      role: "24/7 Support",
      capability: "Handles customer inquiries, issues, and complaints",
      status: "Active",
      power: "⚡ AI Automation",
      type: "support",
    },
    {
      name: "Lead Qualification Agent",
      role: "Sales Automation",
      capability: "Qualifies and scores leads automatically",
      status: "Active",
      power: "🎯 AI Automation",
      type: "sales",
    },
    {
      name: "Data Processing Agent",
      role: "Data Management",
      capability: "Extracts and organizes data from any source",
      status: "Active",
      power: "📊 AI Automation",
      type: "automation",
    },
    {
      name: "Content Generation Agent",
      role: "Content Creation",
      capability: "Generates personalized content at scale",
      status: "Active",
      power: "✍️ AI Automation",
      type: "content",
    },
    {
      name: "Workflow Manager Agent",
      role: "Process Automation",
      capability: "Orchestrates multi-step workflows seamlessly",
      status: "Active",
      power: "⚙️ AI Automation",
      type: "workflow",
    },
    {
      name: "Analytics Agent",
      role: "Insights & Reporting",
      capability: "Analyzes data and generates actionable insights",
      status: "Active",
      power: "📈 AI Automation",
      type: "analytics",
    },
  ]

  const handleCallAgent = (agentName: string, agentType: string) => {
    setSelectedAgent({ name: agentName, type: agentType })
    setIsModalOpen(true)
  }

  const scrollToFooter = () => {
    const footer = document.getElementById("footer-contact")
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  useEffect(() => {
    const initializeBackground = () => {
      if (!window.UnicornStudio) {
        window.UnicornStudio = { isInitialized: false }
      }

      if (!window.UnicornStudio.isInitialized) {
        const script = document.createElement("script")
        script.src = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.5.2/dist/unicornStudio.umd.js"
        script.onload = () => {
          if (!window.UnicornStudio.isInitialized) {
            window.UnicornStudio.init()
            window.UnicornStudio.isInitialized = true
            setBackgroundReady(true)
          }
        }
        document.head.appendChild(script)
      } else {
        setBackgroundReady(true)
      }
    }

    initializeBackground()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 py-0 my-[-351px]">
      <MobileNavigation currentPage="ai-world" onGetStarted={scrollToFooter} />

      <header className="hidden md:block fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-lg">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <Image
                src="/images/screenshot-202025-12-08-20164853-20-281-29.png"
                alt="DigiTailor AI World"
                width={32}
                height={32}
                className="w-auto font-extrabold tracking-wide h-[55px]"
              />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent">
                nav.ai
              </span>
            </div>

            <nav className="hidden md:flex items-center gap-8">
              <Link
                href="/hero"
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              >
                {t("nav.home") || "Home"}
              </Link>
              <Link
                href="/services"
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              >
                {t("nav.services") || "Services"}
              </Link>
              <Link
                href="/ai-world"
                className="text-sm font-medium text-foreground hover:text-foreground transition-colors"
              >
                nav.ai
              </Link>
              <Link
                href="/portfolio"
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              >
                {t("nav.portfolio")}
              </Link>
            </nav>

            <div className="flex items-center gap-4">
              <LanguageSwitcher />
              <ThemeToggle />
              <Button
                onClick={scrollToFooter}
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-full px-6"
              >
                {t("buttons.getStarted")}
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div
        id="unicorn-background"
        className={`fixed inset-0 top-16 pointer-events-none transition-opacity duration-500 ${backgroundReady ? "opacity-50 dark:opacity-35" : "opacity-0"
          }`}
      >
        <div data-us-project="l0LbzykVUcxu2iLUiZTT" style={{ width: "100%", height: "900px" }} className="w-full" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-cyan-600/5 to-transparent pointer-events-none" />
      </div>

      <div className="fixed inset-0 top-16 pointer-events-none opacity-30 dark:opacity-20 bg-gradient-to-b from-transparent via-background/50 to-background" />

      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20 py-0">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
          <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl" />
        </div>
      </section>

      <section className="relative overflow-hidden pb-0 mt-0 pt-[524px]">
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8">
            <span className="text-xs font-semibold tracking-widest uppercase bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              {t("aiWorld.badge")}
            </span>
          </div>

          <h1 className="text-center text-6xl lg:text-7xl font-bold leading-tight text-balance mb-6">
            <span className="block text-foreground">{t("aiWorld.title")}</span>
            <span className="block bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent">
              {t("aiWorld.titleHighlight")}
            </span>
          </h1>

          <p className="text-center text-lg max-w-3xl mx-auto mb-8 text-pretty leading-relaxed text-white font-extralight">
            {t("aiWorld.description")}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {agents.map((agent, i) => (
              <div
                key={i}
                className="group p-6 rounded-2xl border border-border/40 bg-gradient-to-br from-card/60 to-card/20 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10 transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Bot className="h-5 w-5 text-cyan-600" />
                    <span className="text-xs font-semibold uppercase text-cyan-600">{agent.role}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs text-green-600 font-medium">{agent.status}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold mb-2 group-hover:text-cyan-600 transition-colors">{agent.name}</h3>

                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{agent.capability}</p>

                <div className="flex items-center gap-2 pt-4 border-t border-border/40">
                  <Zap className="h-4 w-4 text-cyan-600" />
                  <span className="text-sm font-semibold text-cyan-600">{agent.power}</span>
                </div>

                <Button
                  onClick={() => handleCallAgent(agent.name, agent.type)}
                  className="w-full mt-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-lg text-sm"
                  size="sm"
                >
                  Call Agent
                  <ArrowRight className="ml-2 h-3 w-3" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border/40 relative z-10 py-0"></section>

      <section className="border-t border-border/40 relative z-10 py-0">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Sparkles className="text-base" />,
                title: "Cost Reduction",
                desc: "Reduce operational costs by up to 60%",
              },
              {
                icon: <Zap className="text-base" />,
                title: "Time Savings",
                desc: "Save 30+ hours per week",
              },
              {
                icon: <Bot className="text-base" />,
                title: "No Extra Staff",
                desc: "Scale without hiring more people",
              },
              {
                icon: <Target className="text-base" />,
                title: "Fast Deployment",
                desc: "Deploy in under 7 days",
              },
            ].map((benefit, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl border border-border/40 bg-gradient-to-br from-card/50 to-card/30 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10 transition-all text-center"
              >
                <div className="mb-4 text-base">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-sm text-fuchsia-500">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="hero" className="relative pt-32 overflow-hidden pb-0">
        <div className="container mx-auto px-6 lg:px-8 relative z-10 my-[300px]"></div>
      </section>

      <section className="relative overflow-hidden py-0 my-[-438px]">
        <div className="container mx-auto px-6 lg:px-8 relative z-10"></div>
      </section>

      <section className="border-t border-border/40 relative z-10 py-0 my-[596px]">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-balance mb-4">{t("aiWorld.readyToAutomate")}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">{t("aiWorld.readyDescription")}</p>
          <Button
            onClick={() => window.location.href = '/hero#footer-contact'}
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-full px-8 text-base font-semibold shadow-lg shadow-cyan-500/25"
          >
            {t("aiWorld.scheduleConsultation")}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      <VoiceAgentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        agentName={selectedAgent.name}
        agentType={selectedAgent.type}
      />
    </div>
  )
}
