"use client"

import { useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { useTheme } from "next-themes"
import { PartnerCard } from "./partner-card"
import { NavigationDots } from "./navigation-dots"
import { partners } from "@/data/partners"
import { useSliderNavigation } from "@/hooks/use-slider-navigation"
import { useSliderDrag } from "@/hooks/use-slider-drag"
import { useSliderWheel } from "@/hooks/use-slider-wheel"

const PARTNER_COLORS = ["#10b981", "#3b82f6", "#f59e0b", "#8b5cf6", "#ec4899", "#06b6d4", "#ef4444"]

export function PartnerGallerySlider() {
  const sliderRef = useRef<HTMLDivElement>(null)
  const { theme } = useTheme()

  const { currentIndex, goToNext, goToPrev, goToSlide } = useSliderNavigation({
    totalSlides: partners.length,
    enableKeyboard: true,
  })

  const { isDragging, dragX, handleDragStart, handleDragMove, handleDragEnd } = useSliderDrag({
    onSwipeLeft: goToNext,
    onSwipeRight: goToPrev,
  })

  useSliderWheel({
    sliderRef,
    onScrollLeft: goToNext,
    onScrollRight: goToPrev,
  })

  const currentColor = PARTNER_COLORS[currentIndex % PARTNER_COLORS.length]

  const isFirstOrLastPanel = currentIndex === 0 || currentIndex === partners.length - 1

  return (
    <div className="relative h-full w-full overflow-hidden">
      {/* Animated ambient background */}
      <AnimatePresence mode="wait">
        {isFirstOrLastPanel ? (
          <motion.div
            key={`theme-${currentIndex}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
            className="absolute inset-0 bg-background transition-colors duration-300 my-[58px]"
          />
        ) : (
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(ellipse at 30% 20%, ${currentColor}33 0%, transparent 50%),
                radial-gradient(ellipse at 70% 80%, ${currentColor}22 0%, transparent 50%),
                linear-gradient(180deg, #0a0a0a 0%, #111111 100%)
              `,
            }}
          />
        )}
      </AnimatePresence>

      {/* Blur overlay */}
      <div className="absolute inset-0 backdrop-blur-3xl py-0 my-[100px]" />

      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between p-8">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <h1 className="font-sans text-3xl md:text-4xl font-bold tracking-tight text-foreground">Partner Gallery</h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex items-center gap-2 rounded-full border border-border bg-background/50 px-4 py-2 backdrop-blur-md"
        >
          <span className="text-sm text-muted-foreground">{String(currentIndex + 1).padStart(2, "0")}</span>
          <span className="text-muted-foreground/50">/</span>
          <span className="text-sm text-muted-foreground/70">{String(partners.length).padStart(2, "0")}</span>
        </motion.div>
      </header>

      {/* Slider */}
      <div
        ref={sliderRef}
        className="relative flex cursor-grab items-center active:cursor-grabbing w-full h-[30%] my-[300px]"
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchMove={handleDragMove}
        onTouchEnd={handleDragEnd}
      >
        <motion.div
          className="flex items-center gap-8 px-[calc(50vw-200px)] md:gap-16 md:px-[calc(50vw-280px)]"
          animate={{
            x: -currentIndex * (window.innerWidth > 768 ? 320 : 220) + dragX,
          }}
          transition={isDragging ? { duration: 0 } : { duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
        >
          {partners.map((partner, index) => (
            <PartnerCard
              key={partner.id}
              partner={partner}
              isActive={index === currentIndex}
              dragOffset={dragX}
              index={index}
              currentIndex={currentIndex}
            />
          ))}
        </motion.div>
      </div>

      {/* Navigation dots */}
      <NavigationDots
        total={partners.length}
        current={currentIndex}
        onSelect={goToSlide}
        colors={[currentColor, currentColor, currentColor]}
      />

      {/* Learn More button */}
      

      {/* Keyboard hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-8 hidden items-center gap-3 text-muted-foreground md:flex"
      >
        <kbd className="rounded border border-border bg-background/50 px-2 py-1 font-mono text-xs">←</kbd>
        <kbd className="rounded border border-border bg-background/50 px-2 py-1 font-mono text-xs">→</kbd>
        
      </motion.div>
    </div>
  )
}
