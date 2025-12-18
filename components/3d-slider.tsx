"use client"

import type React from "react"

import { useEffect, useState } from "react"
import "./3d-slider.css"

type Card = {
  id: number
  imgSrc: string
}

export default function ThreeDSlider() {
  const [cards, setCards] = useState<Card[]>([])

  useEffect(() => {
    const serviceCards = [
      {
        id: 1,
        imgSrc: "/images/automation-20-26-20ai-20workflows.jpeg",
      },
      {
        id: 2,
        imgSrc: "/images/ai-20agents-20-28lead-20qualification-20-26-20support-29.jpeg",
      },
      {
        id: 3,
        imgSrc: "/images/seo-20services.jpeg",
      },
      {
        id: 4,
        imgSrc: "/images/video-20production.jpeg",
      },
      {
        id: 5,
        imgSrc: "/images/creative-20ad-20design-20-28paid-20ads-29.jpeg",
      },
      {
        id: 6,
        imgSrc: "/images/graphic-20design.jpg",
      },
      {
        id: 7,
        imgSrc: "/images/content-creation.jpeg",
      },
      {
        id: 8,
        imgSrc: "/images/web-development.jpeg",
      },
    ]
    setCards(serviceCards)

    // Scroll handler applying vertical movement to the slider
    const handleScroll = () => {
      const scrollPos = window.scrollY
      const slider = document.querySelector(".slider-3d") as HTMLElement | null
      if (!slider) return

      const initialTransform = "translate3d(-50%, -50%, 0) rotateX(0deg) rotateY(-25deg) rotateZ(-120deg)"
      const zOffset = scrollPos * 0.25 // Reduced scroll multiplier from 0.5 to 0.25 to match shorter scroll distance
      slider.style.transform = `${initialTransform} translateY(${zOffset}px)`
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleMouseOver = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.left = "15%"
  }

  const handleMouseOut = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.left = "0%"
  }

  return (
    <div className="slider-3d" aria-label="3D image slider">
      {cards.map((card) => (
        <div key={card.id} className="card-3d" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
          <img src={card.imgSrc || "/placeholder.svg"} alt={`Card ${card.id}`} />
        </div>
      ))}
    </div>
  )
}
