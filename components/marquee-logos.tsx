"use client"

import { useEffect, useState } from "react"

interface Brand {
  name: string
  light: string
  dark: string
}

const trustedBrands: Brand[] = [
  {
    name: "Transports Brandt",
    light: "/images/logo-transports-brandt-light.png",
    dark: "/images/logo-transports-brandt-dark.png",
  },
  {
    name: "Anosoin",
    light: "/images/logo-anosoin.png",
    dark: "/images/logo-anosoin.png",
  },
  {
    name: "Skinnovations",
    light: "/images/logo-skinnovations-light.jpg",
    dark: "/images/logo-skinnovations-dark.png",
  },
  {
    name: "E-Stations",
    light: "/images/logo-e-stations.png",
    dark: "/images/logo-e-stations.png",
  },
  {
    name: "AH Medish",
    light: "/images/logo-ahmedish-light.png",
    dark: "/images/logo-ahmedish-dark.png",
  },
  {
    name: "Nero Watches",
    light: "/images/logo-nero-light.png",
    dark: "/images/logo-nero-dark.png",
  },
  {
    name: "RBAuto",
    light: "/images/logo-rbauto-light.png",
    dark: "/images/logo-rbauto-dark.png",
  },
]

export function MarqueeLogos() {
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    setIsDark(mediaQuery.matches)

    const handleChange = (e: MediaQueryListEvent) => {
      setIsDark(e.matches)
    }

    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  if (!mounted) return null

  return (
    <div className="relative overflow-hidden py-8">
      <div className="flex gap-12 animate-marquee-infinite">
        {[...trustedBrands, ...trustedBrands, ...trustedBrands].map((brand, index) => (
          <div
            key={index}
            className="inline-flex items-center justify-center flex-shrink-0 h-20 w-40 hover:opacity-80 transition-opacity"
          >
            <img
              src={isDark ? brand.dark : brand.light}
              alt={brand.name}
              className="max-h-16 max-w-32 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
