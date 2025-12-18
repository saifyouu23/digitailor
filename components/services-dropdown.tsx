"use client"

import { useLanguage } from "@/contexts/LanguageContext"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"
import Link from "next/link"

export function ServicesDropdown() {
  const { lang } = useLanguage()

  const services = [
    { id: "automation-ai", name: lang === "en" ? "Automation & AI" : "Automation & IA" },
    { id: "whatsapp-bot", name: "WhatsApp Bot" },
    { id: "ai-agents", name: lang === "en" ? "AI Agents" : "Agents IA" },
    { id: "web-development", name: lang === "en" ? "Web Development" : "Développement Web" },
    { id: "creative-ads", name: lang === "en" ? "Creative Ads" : "Publicités Créatives" },
    { id: "video-production", name: lang === "en" ? "Video Production" : "Production Vidéo" },
    { id: "content-creation", name: lang === "en" ? "Content Creation" : "Création de Contenu" },
    { id: "graphic-design", name: lang === "en" ? "Graphic Design" : "Design Graphique" },
    { id: "social-media", name: lang === "en" ? "Social Media" : "Médias Sociaux" },
    { id: "seo-services", name: lang === "en" ? "SEO Services" : "Services SEO" },
  ]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors outline-none">
        {lang === "en" ? "Services" : "Services"}
        <ChevronDown className="w-4 h-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-56 border-2 border-border/60 bg-card/95 backdrop-blur-xl shadow-xl"
        align="center"
      >
        <DropdownMenuGroup className="divide-y divide-border/40">
          {services.map((service) => (
            <DropdownMenuItem key={service.id} asChild>
              <Link
                href={`/services#${service.id}`}
                className="cursor-pointer px-4 py-2.5 hover:bg-gradient-to-r hover:from-blue-600/10 hover:via-purple-600/10 hover:to-pink-600/10 transition-all duration-200"
              >
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent font-medium">
                  {service.name}
                </span>
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
