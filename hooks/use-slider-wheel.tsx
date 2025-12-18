"use client"

import { useEffect, type RefObject } from "react"

interface UseSliderWheelProps {
  sliderRef: RefObject<HTMLDivElement>
  onScrollLeft: () => void
  onScrollRight: () => void
}

export function useSliderWheel({ sliderRef, onScrollLeft, onScrollRight }: UseSliderWheelProps) {
  useEffect(() => {
    const element = sliderRef.current
    if (!element) return

    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        e.preventDefault()
        if (e.deltaX > 0) {
          onScrollLeft()
        } else {
          onScrollRight()
        }
      }
    }

    element.addEventListener("wheel", handleWheel, { passive: false })
    return () => element.removeEventListener("wheel", handleWheel)
  }, [sliderRef, onScrollLeft, onScrollRight])
}
