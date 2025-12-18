"use client"

import { useRef, useState } from "react"
import Image from "next/image"

interface FrameComponentProps {
  video: string
  width: string
  height: string
  className?: string
  corner: string
  edgeHorizontal: string
  edgeVertical: string
  mediaSize: number
  borderThickness: number
  borderSize: number
  onMediaSizeChange?: (value: number) => void
  onBorderThicknessChange?: (value: number) => void
  onBorderSizeChange?: (value: number) => void
  showControls?: boolean
  label?: string
  showFrame?: boolean
  autoplayMode?: "all" | "hover"
  isHovered?: boolean
}

export function FrameComponent({
  video,
  width,
  height,
  className,
  corner,
  edgeHorizontal,
  edgeVertical,
  mediaSize = 1,
  borderThickness = 0,
  borderSize = 80,
  showFrame = false,
  autoplayMode = "all",
  isHovered = false,
}: FrameComponentProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(autoplayMode === "all")

  return (
    <div className={className} style={{ width, height, position: "relative" }}>
      <video
        ref={videoRef}
        src={video}
        autoPlay={autoplayMode === "all" || isHovered}
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
        style={{ display: "block" }}
      />
      {showFrame && (
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
          <Image
            src={corner || "/placeholder.svg"}
            alt="corner"
            width={borderSize}
            height={borderSize}
            style={{ position: "absolute", top: 0, left: 0 }}
          />
          <Image
            src={corner || "/placeholder.svg"}
            alt="corner"
            width={borderSize}
            height={borderSize}
            style={{ position: "absolute", top: 0, right: 0, transform: "scaleX(-1)" }}
          />
          <Image
            src={corner || "/placeholder.svg"}
            alt="corner"
            width={borderSize}
            height={borderSize}
            style={{ position: "absolute", bottom: 0, left: 0, transform: "scaleY(-1)" }}
          />
          <Image
            src={corner || "/placeholder.svg"}
            alt="corner"
            width={borderSize}
            height={borderSize}
            style={{ position: "absolute", bottom: 0, right: 0, transform: "scaleX(-1) scaleY(-1)" }}
          />
        </div>
      )}
    </div>
  )
}
