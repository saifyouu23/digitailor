"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { useI18n } from "@/lib/i18n/context"
import Link from "next/link"

const portfolioProjects = [
  {
    id: 1,
    preview: "/images/1762440062818.png",
    client: "RBAUTO.STORE",
    description: "E-commerce Platform & Brand Design",
    fullDescription:
      "Digital marketplace connecting Moroccan mechanics with quality automotive parts and expert service.",
    tags: ["E-commerce", "Branding", "UI/UX"],
    link: "https://rbauto.store",
    gallery: ["/images/1762440062818.png", "/images/1762440062818.png", "/images/1762440062818.png"],
  },
  {
    id: 2,
    preview: "/images/skinnovations.jpeg",
    client: "Skinnovations",
    description: "Digital Experience & Product Showcase",
    fullDescription: "Premium e-commerce platform for natural skincare products with immersive digital experiences.",
    tags: ["E-commerce", "Brand Design", "Web Development"],
    link: "https://skinnovations.net",
    gallery: ["/images/skinnovations.jpeg", "/images/skinnovations.jpeg", "/images/skinnovations.jpeg"],
  },
]

export function PortfolioSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const { t } = useI18n()

  return (
    null
