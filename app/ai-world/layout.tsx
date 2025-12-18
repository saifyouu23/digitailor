import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "nav.ai | AI Agents & Automation Solutions | DigiTailor Morocco & Africa",
  description:
    "Meet your AI team: intelligent agents for customer support, lead qualification, data processing, content generation, and workflow automation. Deploy AI solutions in Morocco, Europe, and Africa within 7 days.",
  keywords: [
    "AI agents Morocco",
    "AI automation Africa",
    "customer support AI Morocco",
    "lead qualification automation",
    "AI workflow automation",
    "intelligent agents Europe",
    "agents IA Maroc",
    "automatisation intelligente Afrique",
    "support client IA Maroc",
  ],
  openGraph: {
    title: "nav.ai | AI Agent Solutions | DigiTailor",
    description: "Specialized AI agents ready to automate your business workflows and reduce costs by up to 60%.",
    url: "https://digitailor.cloud/ai-world",
  },
  alternates: {
    canonical: "https://digitailor.cloud/ai-world",
  },
}

export default function AIWorldLayout({ children }: { children: React.ReactNode }) {
  return children
}
