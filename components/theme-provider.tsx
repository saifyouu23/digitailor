"use client"

import * as React from "react"

type Theme = "light" | "dark"

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const ThemeProviderContext = React.createContext<ThemeProviderState | undefined>(undefined)

export function ThemeProvider({
  children,
  defaultTheme = "light",
  storageKey = "digitailor-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = React.useState<Theme>(defaultTheme)

  React.useEffect(() => {
    const root = window.document.documentElement
    const stored = localStorage.getItem(storageKey) as Theme | null

    if (stored) {
      setTheme(stored)
      root.classList.remove("light", "dark")
      root.classList.add(stored)
    } else {
      root.classList.add(defaultTheme)
    }
  }, [defaultTheme, storageKey])

  const value = React.useMemo(() => {
    const handleSetTheme = (newTheme: Theme) => {
      localStorage.setItem(storageKey, newTheme)
      const root = window.document.documentElement
      root.classList.remove("light", "dark")
      root.classList.add(newTheme)
      setTheme(newTheme)
    }

    return {
      theme,
      setTheme: handleSetTheme,
    }
  }, [theme, storageKey])

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = React.useContext(ThemeProviderContext)

  if (context === undefined) throw new Error("useTheme must be used within a ThemeProvider")

  return context
}
