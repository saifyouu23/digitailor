"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

interface LanguageContextType {
  lang: "en" | "fr"
  t: (key: string) => string
  setLang: (lang: "en" | "fr") => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const SERVICES_DATA = {
  en: {
    "web-development": {
      name: "Web Development",
      headline: "YOUR DIGITAL HQ, ENGINEERED FOR ELITE PERFORMANCE.",
      shortHeadline: "Your digital HQ, engineered for elite performance.",
      description:
        "Your website is your digital atelier. We craft fast, modern, secure platforms tailored to your brand's personality — elegant, intuitive, and engineered for results. Whether you need a landing page, portfolio, corporate site or a full web platform, we build experiences that feel human and perform like a machine.\n\nWhat you get:\n• Lightning-fast performance\n• Fully responsive (mobile + desktop)\n• SEO-ready architecture\n• Custom UI/UX design\n• Scalable and maintainable code\n• CRM & AI integrations on request",
      icon: "💻",
      gradient: "from-sky-300 via-sky-400 to-sky-500",
      shadow: "shadow-sky-400/50",
      color: "sky",
      accentColor: "from-blue-500 to-cyan-500",
    },
    "social-media": {
      name: "Social Media",
      headline: "STRATEGIC PRESENCE. MEASURABLE ENGAGEMENT.",
      shortHeadline: "Strategic presence. Measurable engagement.",
      description:
        "Your brand deserves a voice. We help you tell your story consistently, authentically, and strategically across all platforms. From content calendars to visual identity and audience-first strategies — we elevate your presence with intention.",
      icon: "📱",
      gradient: "from-pink-300 via-pink-400 to-pink-500",
      shadow: "shadow-pink-400/50",
      color: "pink",
      accentColor: "from-rose-500 to-pink-500",
    },
    "graphic-design": {
      name: "Graphic Design",
      headline: "CRAFTING A BRAND THAT DEMANDS ATTENTION.",
      shortHeadline: "One identity visuelle qui attire et retient l'attention.",
      description:
        "Branding built with the care of a craftsman and the speed of a startup. We design identities that feel personal, memorable, and unmistakably yours. From logo design to complete visual systems, every element is crafted to elevate your brand presence.",
      icon: "🎨",
      gradient: "from-orange-300 via-orange-400 to-red-400",
      shadow: "shadow-orange-400/50",
      color: "orange",
      accentColor: "from-orange-500 to-red-500",
    },
    "content-creation": {
      name: "Content Creation",
      headline: "STORYTELLING BUILT TO CONVERT.",
      shortHeadline: "Un storytelling pensé pour convertir.",
      description:
        "From storytelling to visuals, every piece of content we craft has one goal: conversion. Your brand, but sharper, clearer, more magnetic. We develop strategic, data-backed content plans across all platforms that attract, educate, and move your ideal customers.",
      icon: "📝",
      gradient: "from-purple-300 via-purple-400 to-purple-500",
      shadow: "shadow-purple-400/50",
      color: "purple",
      accentColor: "from-purple-500 to-indigo-500",
    },
    "seo-services": {
      name: "SEO Services",
      headline: "AUTHORITY AND VISIBILITY, NATURALLY.",
      shortHeadline: "Autorité et visibilité, naturellement.",
      description:
        "Tailored SEO strategies designed for Morocco & French-speaking African markets. We combine technical precision with human search behavior to place you where your clients look first. From technical audits to content optimization, we build lasting organic authority.",
      icon: "🌐",
      gradient: "from-cyan-300 via-teal-400 to-emerald-400",
      shadow: "shadow-teal-400/50",
      color: "cyan",
      accentColor: "from-teal-500 to-emerald-500",
    },
    marketing: {
      name: "Marketing (Paid Ads)",
      headline: "PRECISION TARGETING. ACCELERATED ROI.",
      shortHeadline: "Ciblage précis. ROI accéléré.",
      description:
        "We run ads that pay for themselves. Data-driven campaigns optimized daily for clicks, conversions, and ROI. From Google Ads to social platforms, we maximize your ad spend to generate high-quality, ready-to-convert leads.",
      icon: "📢",
      gradient: "from-fuchsia-400 via-pink-500 to-pink-600",
      shadow: "shadow-pink-500/50",
      color: "fuchsia",
      accentColor: "from-pink-500 to-red-500",
    },
    "video-production": {
      name: "Video Production",
      headline: "CINEMATIC QUALITY. PROFESSIONAL IMPACT.",
      shortHeadline: "Qualité cinématographique. Impact professionnel.",
      description:
        "Premium storytelling with cinematic execution. Whether it's brand story, ads, TikToks or documentaries — your message becomes visual impact. We handle the entire production lifecycle from concept to final edit.",
      icon: "🎬",
      gradient: "from-cyan-400 via-blue-500 to-blue-600",
      shadow: "shadow-blue-500/50",
      color: "cyan",
      accentColor: "from-blue-500 to-purple-500",
    },
    analytics: {
      name: "Analytics",
      headline: "DATA-DRIVEN INSIGHTS. STRATEGIC CLARITY.",
      shortHeadline: "Analyses basées sur la data. Clarté stratégique.",
      description:
        "We transform your data into clarity. Dashboards, KPIs, insights — so you always know what to improve next. Comprehensive analytics across all your digital channels provide the roadmap for optimization and growth.",
      icon: "📊",
      gradient: "from-violet-400 via-purple-500 to-purple-600",
      shadow: "shadow-purple-500/50",
      color: "violet",
      accentColor: "from-purple-500 to-pink-500",
    },
    "automation-ai": {
      name: "Automation & AI Workflows",
      headline: "INTELLIGENT SYSTEMS. ZERO MANUAL EFFORT.",
      shortHeadline: "Systèmes intelligents. Zéro effort manuel.",
      description:
        "Your operations — automated like a luxury tailor workshop. From customer journeys to internal processes, we build systems that remove manual work and amplify efficiency. Streamline operations with custom AI workflows that scale your team's capacity.",
      icon: "⚙️",
      gradient: "from-green-400 via-emerald-500 to-teal-600",
      shadow: "shadow-emerald-500/50",
      color: "green",
      accentColor: "from-green-500 to-teal-500",
    },
    "whatsapp-bot": {
      name: "WhatsApp Bot Integration",
      headline: "24/7 CUSTOMER ENGAGEMENT. INSTANT REPLIES.",
      shortHeadline: "Engagement client 24/7. Réponses instantanées.",
      description:
        "Instant replies, automated sales, 24/7 support. Your WhatsApp becomes your strongest employee. Deploy AI-powered WhatsApp bots that engage customers, qualify leads, and provide instant support.",
      icon: "💬",
      gradient: "from-green-300 via-green-400 to-green-500",
      shadow: "shadow-green-400/50",
      color: "green",
      accentColor: "from-green-500 to-emerald-500",
    },
    "crm-automation": {
      name: "CRM Automations",
      headline: "A FRICTIONLESS SALES ENGINE.",
      shortHeadline: "Un moteur de vente sans friction.",
      description:
        "No more lost leads. No more manual follow-ups. We automate your sales pipeline from A to Z. Intelligent workflows automatically nurture leads, manage follow-ups, and trigger timely actions for maximum conversion.",
      icon: "🔄",
      gradient: "from-indigo-400 via-indigo-500 to-indigo-600",
      shadow: "shadow-indigo-500/50",
      color: "indigo",
      accentColor: "from-indigo-500 to-blue-500",
    },
    "creative-ads": {
      name: "Creative Ad Design",
      headline: "SCROLL-STOPPING VISUALS. CLICK-DRIVING DESIGN.",
      shortHeadline: "Des visuels qui stoppent le scroll. Des designs qui génèrent des clics.",
      description:
        "Ads crafted to stop the scroll. Designs that blend beauty, clarity, and performance. High-impact ad creative that combines stunning visuals, compelling copy, and strategic positioning to drive measurable ROI.",
      icon: "✨",
      gradient: "from-yellow-300 via-orange-400 to-red-500",
      shadow: "shadow-orange-400/50",
      color: "yellow",
      accentColor: "from-orange-500 to-red-500",
    },
    "digital-strategy": {
      name: "Digital Strategy & Funnels",
      headline: "THE BLUEPRINT FOR SUSTAINABLE GROWTH.",
      shortHeadline: "Le plan directeur pour une croissance durable.",
      description:
        "Your growth, structured. We design funnels that convert cold audiences into loyal customers. Map out your complete digital growth strategy with data-driven insights and customer psychology for seamless customer journeys.",
      icon: "🎯",
      gradient: "from-rose-400 via-pink-500 to-purple-600",
      shadow: "shadow-pink-500/50",
      color: "rose",
      accentColor: "from-pink-500 to-purple-500",
    },
    "ai-agents": {
      name: "AI Agents (Leads & Support)",
      headline: "YOUR INFINITE TEAM. HUMAN-LIKE INTERACTIONS.",
      shortHeadline: "Des assistants naturels. Une capacité illimitée.",
      description:
        "Your infinite team. AI agents that speak naturally, qualify leads, close sales, and support customers — 24/7. Deploy intelligent agents available 24/7 that understand context, adapt to conversations, and seamlessly escalate to humans when needed.",
      icon: "🤖",
      gradient: "from-blue-500 via-purple-500 to-pink-500",
      shadow: "shadow-purple-500/50",
      color: "blue",
      accentColor: "from-blue-500 to-purple-500",
    },
  },
  fr: {
    "web-development": {
      name: "Développement Web",
      headline: "VOTRE SIÈGE NUMÉRIQUE, CONÇU POUR UNE PERFORMANCE D'ÉLITE.",
      shortHeadline: "Votre QG digital, conçu pour des performances d'élite.",
      description:
        "Votre site est votre atelier digital. Nous créons des plateformes modernes, rapides et sécurisées, façonnées selon la personnalité de votre marque — élégantes, intuitives et conçues pour performer. Que ce soit une landing page, un portfolio, un site corporate ou une plateforme complète.\n\nVous obtenez :\n• Vitesse exceptionnelle\n• 100% responsive\n• Architecture optimisée SEO\n• Design UI/UX personnalisé\n• Code scalable et fiable\n• Intégrations CRM & IA sur demande",
      icon: "💻",
      gradient: "from-sky-300 via-sky-400 to-sky-500",
      shadow: "shadow-sky-400/50",
      color: "sky",
      accentColor: "from-blue-500 to-cyan-500",
    },
    "social-media": {
      name: "Médias Sociaux",
      headline: "PRÉSENCE STRATÉGIQUE. ENGAGEMENT MESURABLE.",
      shortHeadline: "Présence stratégique. Engagement mesurable.",
      description:
        "Votre marque mérite une voix forte. Nous racontons votre histoire avec cohérence, authenticité et stratégie sur tous vos réseaux. Des calendriers éditoriaux aux identités visuelles, nous renforçons votre présence avec précision et intention.",
      icon: "📱",
      gradient: "from-pink-300 via-pink-400 to-pink-500",
      shadow: "shadow-pink-400/50",
      color: "pink",
      accentColor: "from-rose-500 to-pink-500",
    },
    "graphic-design": {
      name: "Design Graphique",
      headline: "UNE IDENTITÉ VISUELLE QUI ATTIRE ET RETIENT L'ATTENTION.",
      shortHeadline: "Une identité visuelle qui attire et retient l'attention.",
      description:
        "Un branding façonné avec la précision d'un artisan et l'énergie d'une startup. Nous créons des identités uniques, mémorables, profondément ancrées dans votre univers. De la conception de logo aux systèmes visuels complets.",
      icon: "🎨",
      gradient: "from-orange-300 via-orange-400 to-red-400",
      shadow: "shadow-orange-400/50",
      color: "orange",
      accentColor: "from-orange-500 to-red-500",
    },
    "content-creation": {
      name: "Création de Contenu",
      headline: "UN STORYTELLING PENSÉ POUR CONVERTIR.",
      shortHeadline: "Un storytelling pensé pour convertir.",
      description:
        "Du storytelling aux visuels, chaque contenu est conçu pour un objectif : convertir. Votre marque, mais plus claire, plus forte et plus captivante. Nous développons des plans de contenu stratégiques sur toutes les plateformes.",
      icon: "📝",
      gradient: "from-purple-300 via-purple-400 to-purple-500",
      shadow: "shadow-purple-400/50",
      color: "purple",
      accentColor: "from-purple-500 to-indigo-500",
    },
    "seo-services": {
      name: "Services SEO",
      headline: "AUTORITÉ ET VISIBILITÉ, NATURELLEMENT.",
      shortHeadline: "Autorité et visibilité, naturellement.",
      description:
        "Des stratégies SEO adaptées au Maroc et à l'Afrique francophone. Nous allions précision technique et compréhension des comportements de recherche pour vous placer là où vos clients vous cherchent. Audits techniques, optimisation de contenu, création d'autorité.",
      icon: "🌐",
      gradient: "from-cyan-300 via-teal-400 to-emerald-400",
      shadow: "shadow-teal-400/50",
      color: "cyan",
      accentColor: "from-teal-500 to-emerald-500",
    },
    marketing: {
      name: "Marketing (Publicités Payantes)",
      headline: "CIBLAGE PRÉCIS. ROI ACCÉLÉRÉ.",
      shortHeadline: "Ciblage précis. ROI accéléré.",
      description:
        "Nous créons des campagnes qui se rentabilisent elles-mêmes. Optimisées quotidiennement pour maximiser clics, conversions et ROI. De Google Ads aux plateformes sociales, nous maximisons vos dépenses publicitaires.",
      icon: "📢",
      gradient: "from-fuchsia-400 via-pink-500 to-pink-600",
      shadow: "shadow-pink-500/50",
      color: "fuchsia",
      accentColor: "from-pink-500 to-red-500",
    },
    "video-production": {
      name: "Production Vidéo",
      headline: "QUALITÉ CINÉMATOGRAPHIQUE. IMPACT PROFESSIONNEL.",
      shortHeadline: "Qualité cinématographique. Impact professionnel.",
      description:
        "Un storytelling premium, une exécution cinématographique. Brand stories, publicités, TikToks, interviews — votre message prend vie avec impact. De la conception à la post-production, nous gérons tout le processus.",
      icon: "🎬",
      gradient: "from-cyan-400 via-blue-500 to-blue-600",
      shadow: "shadow-blue-500/50",
      color: "cyan",
      accentColor: "from-blue-500 to-purple-500",
    },
    analytics: {
      name: "Analytiques",
      headline: "ANALYSES BASÉES SUR LA DATA. CLARTÉ STRATÉGIQUE.",
      shortHeadline: "Analyses basées sur la data. Clarté stratégique.",
      description:
        "Nous transformons vos données en clarté. KPIs, tableaux de bord, insights — pour toujours savoir quoi améliorer. Analytics complètes sur tous vos canaux numériques pour optimiser votre stratégie.",
      icon: "📊",
      gradient: "from-violet-400 via-purple-500 to-purple-600",
      shadow: "shadow-purple-500/50",
      color: "violet",
      accentColor: "from-purple-500 to-pink-500",
    },
    "automation-ai": {
      name: "Automation & Workflows IA",
      headline: "SYSTÈMES INTELLIGENTS. ZÉRO EFFORT MANUEL.",
      shortHeadline: "Systèmes intelligents. Zéro effort manuel.",
      description:
        "Vos opérations — automatisées comme un atelier sur-mesure. Nous créons des systèmes qui éliminent les tâches manuelles et boostent votre efficacité. De la qualification des leads au support client, automatisation complète.",
      icon: "⚙️",
      gradient: "from-green-400 via-emerald-500 to-teal-600",
      shadow: "shadow-emerald-500/50",
      color: "green",
      accentColor: "from-green-500 to-teal-500",
    },
    "whatsapp-bot": {
      name: "Intégration WhatsApp Bot",
      headline: "ENGAGEMENT CLIENT 24/7. RÉPONSES INSTANTANÉES.",
      shortHeadline: "Engagement client 24/7. Réponses instantanées.",
      description:
        "Réponses instantanées, ventes automatisées, support 24/7. Votre WhatsApp devient votre meilleur employé. Bots WhatsApp alimentés par l'IA qui engagent les clients et qualifient les leads.",
      icon: "💬",
      gradient: "from-green-300 via-green-400 to-green-500",
      shadow: "shadow-green-400/50",
      color: "green",
      accentColor: "from-green-500 to-emerald-500",
    },
    "crm-automation": {
      name: "Automations CRM",
      headline: "UN MOTEUR DE VENTE SANS FRICTION.",
      shortHeadline: "Un moteur de vente sans friction.",
      description:
        "Plus de prospects perdus. Plus de relances manuelles. Nous automatisons votre pipeline de vente de A à Z. Workflows intelligents qui nourrissent les leads et déclenchent les bonnes actions au bon moment.",
      icon: "🔄",
      gradient: "from-indigo-400 via-indigo-500 to-indigo-600",
      shadow: "shadow-indigo-500/50",
      color: "indigo",
      accentColor: "from-indigo-500 to-blue-500",
    },
    "creative-ads": {
      name: "Design Créatif de Publicités",
      headline: "DES VISUELS QUI STOPPENT LE SCROLL. DES DESIGNS QUI GÉNÈRENT DES CLICS.",
      shortHeadline: "Des visuels qui stoppent le scroll. Des designs qui génèrent des clics.",
      description:
        "Des publicités qui arrêtent le scroll. Un design alliant beauté, clarté et performance. Créatifs publicitaires à fort impact qui combinent visuels époustouflants, copywriting convaincant et positionnement stratégique.",
      icon: "✨",
      gradient: "from-yellow-300 via-orange-400 to-red-500",
      shadow: "shadow-orange-400/50",
      color: "yellow",
      accentColor: "from-orange-500 to-red-500",
    },
    "digital-strategy": {
      name: "Stratégie Numérique & Entonnoirs",
      headline: "LE PLAN DIRECTEUR POUR UNE CROISSANCE DURABLE.",
      shortHeadline: "Le plan directeur pour une croissance durable.",
      description:
        "Votre croissance, structurée. Des funnels qui transforment les audiences froides en clients fidèles. Stratégies de croissance numérique complètes avec insights basés sur les données.",
      icon: "🎯",
      gradient: "from-rose-400 via-pink-500 to-purple-600",
      shadow: "shadow-pink-500/50",
      color: "rose",
      accentColor: "from-pink-500 to-purple-500",
    },
    "ai-agents": {
      name: "Agents IA (Leads & Support)",
      headline: "VOTRE ÉQUIPE INFINIE. INTERACTIONS NATURELLES.",
      shortHeadline: "Des assistants naturels. Une capacité illimitée.",
      description:
        "Votre équipe infinie. Des agents IA naturels qui qualifient, vendent et assistent — 24/7. Agents intelligents disponibles 24/7 qui comprennent le contexte, s'adaptent aux conversations et escaladent intelligemment.",
      icon: "🤖",
      gradient: "from-blue-500 via-purple-500 to-pink-500",
      shadow: "shadow-purple-500/50",
      color: "blue",
      accentColor: "from-blue-500 to-purple-500",
    },
  },
}

export const AI_WORLD_DATA = {
  en: {
    intro: {
      title: "Welcome to AI World — Your Business, Upgraded",
      description:
        "Here you discover how AI transforms the way Moroccan and African companies operate. No complexity. No technical jargon. Just clear explanations, real examples, and tools you can use today.",
    },
    sections: [
      {
        id: "what-is-ai",
        title: "What is AI Automation?",
        description:
          "AI automation uses intelligent systems to handle repetitive tasks, make decisions, and manage complex processes automatically. It's about working smarter, not harder.",
        icon: "⚡",
      },
      {
        id: "how-ai-agents",
        title: "How AI Agents Work",
        description:
          "AI agents are like having an extra team member who never sleeps. They qualify leads, answer customer questions, manage workflows, and learn from every interaction.",
        icon: "🤖",
      },
      {
        id: "use-cases",
        title: "Real Business Use-Cases",
        description:
          "From WhatsApp bots saving hours of manual work to AI agents closing sales while you sleep — see real examples of how African businesses are scaling with AI.",
        icon: "📈",
      },
      {
        id: "how-we-build",
        title: "How We Build Your System",
        description:
          "Our step-by-step process ensures your AI system is tailored to your business, easy to use, and delivers real results from day one.",
        icon: "🔧",
      },
      {
        id: "before-after",
        title: "Before & After: Real Impact",
        description:
          "See the tangible impact: faster response times, more qualified leads, higher conversions, and teams freed up for strategic work.",
        icon: "📊",
      },
      {
        id: "pricing-guide",
        title: "Pricing and Installation Guide",
        description:
          "Transparent pricing, flexible plans, and a simple installation process. Get started with AI without the complexity.",
        icon: "💰",
      },
    ],
  },
  fr: {
    intro: {
      title: "Bienvenue dans AI World — Votre Entreprise, Version 2.0",
      description:
        "Ici, vous découvrez comment l'IA transforme les entreprises marocaines et africaines. Sans complexité. Sans jargon technique. Juste des explications claires, des exemples réels, et des outils concrets.",
    },
    sections: [
      {
        id: "what-is-ai",
        title: "Qu'est-ce que l'Automatisation IA ?",
        description:
          "L'automatisation IA utilise des systèmes intelligents pour gérer les tâches répétitives, prendre des décisions et gérer les processus complexes automatiquement. C'est travailler plus intelligemment.",
        icon: "⚡",
      },
      {
        id: "how-ai-agents",
        title: "Comment Fonctionnent les Agents IA",
        description:
          "Les agents IA c'est comme avoir un membre d'équipe supplémentaire qui ne dort jamais. Ils qualifient les leads, répondent aux questions et gèrent les workflows.",
        icon: "🤖",
      },
      {
        id: "use-cases",
        title: "Cas d'Usage Réels en Entreprise",
        description:
          "Des bots WhatsApp économisant des heures de travail aux agents IA fermant des ventes pendant que vous dormez — découvrez comment les entreprises africaines grandissent avec l'IA.",
        icon: "📈",
      },
      {
        id: "how-we-build",
        title: "Comment Nous Construisons Votre Système",
        description:
          "Notre processus étape par étape assure que votre système IA est adapté à votre entreprise et fournit des résultats réels dès le premier jour.",
        icon: "🔧",
      },
      {
        id: "before-after",
        title: "Avant & Après : Impact Réel",
        description:
          "Voyez l'impact tangible : temps de réponse plus rapides, leads plus qualifiés, conversions plus élevées, et équipes libérées pour le travail stratégique.",
        icon: "📊",
      },
      {
        id: "pricing-guide",
        title: "Tarification et Guide d'Installation",
        description:
          "Tarification transparente, plans flexibles, et un processus d'installation simple. Commencez avec l'IA sans la complexité.",
        icon: "💰",
      },
    ],
  },
}

export function LanguageProvider({ children }: React.ReactNode) {
  const [lang, setLang] = useState<"en" | "fr">("en")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const savedLang = localStorage.getItem("language") as "en" | "fr" | null
    if (savedLang) {
      setLang(savedLang)
    }
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("language", lang)
    }
  }, [lang, mounted])

  const t = (key: string) => key

  return <LanguageContext.Provider value={{ lang, t, setLang }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider")
  }
  return context
}
