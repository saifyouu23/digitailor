"use client"

import { motion } from "framer-motion"
import type { Partner } from "@/types/partner"

interface PartnerCardProps {
  partner: Partner
  isActive: boolean
  dragOffset: number
  index: number
  currentIndex: number
}

export function PartnerCard({ partner, isActive, dragOffset, index, currentIndex }: PartnerCardProps) {
  const distanceFromCenter = Math.abs(index - currentIndex)

  return (
    <motion.a
      href={partner.website || "#"}
      target={partner.website ? "_blank" : undefined}
      rel={partner.website ? "noopener noreferrer" : undefined}
      className="relative flex-shrink-0 cursor-pointer"
      animate={{
        opacity: distanceFromCenter > 2 ? 0.3 : isActive ? 1 : 0.6,
        scale: isActive ? 1 : 0.85,
      }}
      transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
      whileHover={{ scale: isActive ? 1.05 : 0.9 }}
    >
      <img
        src={partner.logo || "/placeholder.svg"}
        alt={partner.name}
        className="w-48 h-48 md:w-64 md:h-64 object-contain rounded-[30%]"
      />
    </motion.a>
  )
}
