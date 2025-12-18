"use client"
import {
  Video,
  FileText,
  Share2,
  BarChart3,
  Code,
  Palette,
  Globe,
  Megaphone,
  Zap,
  MessageCircle,
  RotateCcw,
  Sparkles,
  Target,
  Bot,
} from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

export const ServicesSection = () => {
  const { lang } = useLanguage()

  const services = [
    {
      id: "automation-ai",
      icon: Zap,
      title: "Automation & AI",
      titleFr: "Automation & IA",
      gradient: "from-green-400 via-emerald-500 to-teal-600",
      shadow: "shadow-emerald-500/50",
    },
    {
      id: "whatsapp-bot",
      icon: MessageCircle,
      title: "WhatsApp Bot",
      titleFr: "WhatsApp Bot",
      gradient: "from-green-300 via-green-400 to-green-500",
      shadow: "shadow-green-400/50",
    },
    {
      id: "crm-automation",
      icon: RotateCcw,
      title: "CRM Automation",
      titleFr: "Automation CRM",
      gradient: "from-indigo-400 via-indigo-500 to-indigo-600",
      shadow: "shadow-indigo-500/50",
    },
    {
      id: "creative-ads",
      icon: Sparkles,
      title: "Creative Ads",
      titleFr: "Publicités Créatives",
      gradient: "from-yellow-300 via-orange-400 to-red-500",
      shadow: "shadow-orange-400/50",
    },
    {
      id: "digital-strategy",
      icon: Target,
      title: "Digital Strategy",
      titleFr: "Stratégie Numérique",
      gradient: "from-rose-400 via-pink-500 to-purple-600",
      shadow: "shadow-pink-500/50",
    },
    {
      id: "ai-agents",
      icon: Bot,
      title: "AI Agents",
      titleFr: "Agents IA",
      gradient: "from-blue-500 via-purple-500 to-pink-500",
      shadow: "shadow-purple-500/50",
    },
    {
      id: "video-production",
      icon: Video,
      title: "Video Production",
      titleFr: "Production Vidéo",
      gradient: "from-cyan-400 via-blue-500 to-blue-600",
      shadow: "shadow-blue-500/50",
    },
    {
      id: "content-creation",
      icon: FileText,
      title: "Content Creation",
      titleFr: "Création de Contenu",
      gradient: "from-purple-300 via-purple-400 to-purple-500",
      shadow: "shadow-purple-400/50",
    },
    {
      id: "graphic-design",
      icon: Palette,
      title: "Graphic Design",
      titleFr: "Design Graphique",
      gradient: "from-orange-300 via-orange-400 to-red-400",
      shadow: "shadow-orange-400/50",
    },
    {
      id: "social-media",
      icon: Share2,
      title: "Social Media",
      titleFr: "Médias Sociaux",
      gradient: "from-pink-300 via-pink-400 to-pink-500",
      shadow: "shadow-pink-400/50",
    },
    {
      id: "web-development",
      icon: Code,
      title: "Web Development",
      titleFr: "Développement Web",
      gradient: "from-sky-300 via-sky-400 to-sky-500",
      shadow: "shadow-sky-400/50",
    },
    {
      id: "analytics",
      icon: BarChart3,
      title: "Analytics",
      titleFr: "Analytiques",
      gradient: "from-violet-400 via-purple-500 to-purple-600",
      shadow: "shadow-purple-500/50",
    },
    {
      id: "marketing",
      icon: Megaphone,
      title: "Marketing",
      titleFr: "Marketing",
      gradient: "from-fuchsia-400 via-pink-500 to-pink-600",
      shadow: "shadow-pink-500/50",
    },
    {
      id: "seo-services",
      icon: Globe,
      title: "SEO Services",
      titleFr: "Services SEO",
      gradient: "from-cyan-300 via-teal-400 to-emerald-400",
      shadow: "shadow-teal-400/50",
    },
  ]

  return (
    null
  )
}
