"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export function Advertisement() {
  const [isVisible, setIsVisible] = useState(true)
  const [animationClass, setAnimationClass] = useState("animate-pulse")

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationClass((prev) => (prev === "animate-pulse" ? "animate-bounce" : "animate-pulse"))
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  if (!isVisible) return null

  return (
    <div className="relative bg-gradient-to-r from-blue-500 to-green-500 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className={`flex-1 text-center ${animationClass}`}>
            <h3 className="text-2xl font-bold mb-2">🩺 Special Health Checkup Offer!</h3>
            <p className="text-lg mb-4">Complete family health screening package - 30% OFF this month!</p>
            <div className="flex justify-center space-x-4">
              <Button variant="secondary" size="lg">
                Book Now
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-white border-white hover:bg-white hover:text-blue-600"
              >
                Learn More
              </Button>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsVisible(false)}
            className="absolute top-2 right-2 text-white hover:bg-white/20"
            aria-label="Close advertisement"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  )
}
