"use client"

import { useEffect, useRef } from "react"

export function MouseOrb() {
  const orbRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (orbRef.current) {
        orbRef.current.style.left = `${e.clientX}px`
        orbRef.current.style.top = `${e.clientY}px`
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div
      ref={orbRef}
      className="fixed w-4 h-4 rounded-full pointer-events-none z-40 transform -translate-x-1/2 -translate-y-1/2"
      style={{
        background:
          "radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.6), rgba(147, 51, 234, 0.4), rgba(236, 72, 153, 0.2))",
        boxShadow: "0 0 20px rgba(59, 130, 246, 0.5), 0 0 40px rgba(147, 51, 234, 0.3)",
        transition: "all 0.1s ease-out",
      }}
    />
  )
}
