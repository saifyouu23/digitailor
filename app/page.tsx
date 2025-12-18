"use client"

import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { useTheme } from "@/components/theme-provider"

export default function Home() {
  const router = useRouter()
  const { theme } = useTheme()

  useEffect(() => {
    if (!window.UnicornStudio) {
      window.UnicornStudio = { isInitialized: false }
      const script = document.createElement("script")
      script.src = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.5.3/dist/unicornStudio.umd.js"
      script.onload = () => {
        if (!window.UnicornStudio.isInitialized) {
          window.UnicornStudio.init()
          window.UnicornStudio.isInitialized = true
        }
      }
      ;(document.head || document.body).appendChild(script)
    } else if (!window.UnicornStudio.isInitialized) {
      window.UnicornStudio.init()
      window.UnicornStudio.isInitialized = true
    }
  }, [])

  return (
    <main
      className="min-h-screen w-full cursor-pointer transition-colors duration-300"
      onClick={() => router.push("/hero")}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          router.push("/hero")
        }
      }}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        backgroundColor: theme === "dark" ? "#000000" : "#ffffff",
      }}
    >
      <div
        data-us-project="S4cims0FE1A53Bs5NwDe"
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      />
    </main>
  )
}
