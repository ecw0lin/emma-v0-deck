"use client"

import { useEffect } from "react"

interface KeyboardNavigationProps {
  onNext: () => void
  onPrev: () => void
  canGoNext: boolean
  canGoPrev: boolean
}

export function KeyboardNavigation({ onNext, onPrev, canGoNext, canGoPrev }: KeyboardNavigationProps) {
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight" && canGoNext) {
        onNext()
      } else if (event.key === "ArrowLeft" && canGoPrev) {
        onPrev()
      }
    }

    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [onNext, onPrev, canGoNext, canGoPrev])

  return null
}
