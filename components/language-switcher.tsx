"use client"

import { useI18n } from "@/lib/i18n/context"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"

export function LanguageSwitcher() {
  const { language, setLanguage } = useI18n()

  const handleToggle = () => {
    setLanguage(language === "en" ? "fr" : "en")
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      className="gap-2 hover:bg-primary/10 transition-colors"
      onClick={handleToggle}
      title={`Switch to ${language === "en" ? "Français" : "English"}`}
    >
      <Globe className="h-4 w-4" />
      <span className="uppercase text-xs font-semibold min-w-[2rem]">{language === "en" ? "EN" : "FR"}</span>
    </Button>
  )
}
