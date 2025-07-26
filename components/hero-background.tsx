"use client"

import { useEffect, useState } from "react"

export function HeroBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-900 via-green-800 to-green-700" />

      {/* Animated Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-green-400/20 transition-all duration-1000"
        style={{
          transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
        }}
      />

      {/* Floating Elements with Colors */}
      <div className="absolute top-20 left-10 w-20 h-20 border-2 border-blue-400/40 rotate-45 animate-spin-slow" />
      <div className="absolute top-40 right-20 w-16 h-16 border-2 border-purple-400/40 rounded-full animate-pulse" />
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-orange-400/20 rounded-full animate-bounce-slow" />
      <div className="absolute bottom-20 right-10 w-24 h-24 border border-yellow-400/30 rotate-12 animate-float" />
      
      {/* Additional Colorful Shapes */}
      <div className="absolute top-60 left-1/3 w-14 h-14 border-2 border-pink-400/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-80 right-1/3 w-18 h-18 bg-cyan-400/15 rotate-45 animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-60 left-1/2 w-10 h-10 border border-red-400/35 rounded-full animate-bounce-slow" style={{ animationDelay: '0.5s' }} />
      <div className="absolute top-1/2 right-20 w-16 h-16 border-2 border-emerald-400/25 rotate-12 animate-spin-slow" style={{ animationDelay: '1.5s' }} />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" />
    </div>
  )
}
