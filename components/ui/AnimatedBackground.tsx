'use client'

import { useMemo, memo, useState, useEffect } from 'react'

interface AnimatedBackgroundProps {
  hexagonCount?: number
  enableAnimations?: boolean
  className?: string
  hexagonColor?: string
  backgroundColors?: {
    from: string
    via: string
    to: string
  }
}

const AnimatedBackground = memo(function AnimatedBackground({ 
  hexagonCount = 8, 
  enableAnimations = true,
  className = "",
  hexagonColor = "bg-amber-400/20",
  backgroundColors = {
    from: "from-beeSecondary-lightest/10",
    via: "via-beeSecondary-normal/10", 
    to: "to-beeSecondary-light/10"
  }
}: AnimatedBackgroundProps) {
  // State to track if component is mounted (client-side only)
  const [isMounted, setIsMounted] = useState(false)
  
  // Mount effect to enable random generation only on client
  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Generate positions dynamically to avoid overlapping when hexagonCount changes
  const hexagons = useMemo(() => {
    // If not mounted yet (SSR/SSG), return deterministic placeholders
    if (!isMounted) {
      return Array.from({ length: hexagonCount }, (_, i) => ({
        id: i,
        top: 10 + (i % 3) * 30, // Deterministic grid-like positions
        left: 10 + (i % 3) * 30,
        rotation: i * 45, // Deterministic rotations
        scale: 0.7, // Fixed scale
        animationDuration: 8, // Fixed duration
        animationDelay: i * 0.5 // Staggered delays
      }))
    }

    interface Position {
      top: number
      left: number
    }
    
    const generatePositions = (count: number): Position[] => {
      const positions: Position[] = []
      const minDistance = 15 // Minimum distance between hexagons
      
      for (let i = 0; i < count; i++) {
        let attempts = 0
        let position: Position
        
        // Try to find a position that doesn't overlap with existing ones
        do {
          position = {
            top: 5 + Math.random() * 85, // Random between 5% and 90%
            left: 5 + Math.random() * 85  // Random between 5% and 90%
          }
          attempts++
        } while (
          attempts < 50 && // Prevent infinite loop
          positions.some(existingPos => {
            const distance = Math.sqrt(
              Math.pow(position.top - existingPos.top, 2) + 
              Math.pow(position.left - existingPos.left, 2)
            )
            return distance < minDistance
          })
        )
        
        positions.push(position)
      }
      return positions
    }
    
    const positions = generatePositions(hexagonCount)
    
    return Array.from({ length: hexagonCount }, (_, i) => ({
      id: i,
      top: positions[i].top,
      left: positions[i].left,
      rotation: Math.random() * 360, // Random rotations
      scale: 0.5 + Math.random() * 0.5, // Random scales between 0.5-1.0
      animationDuration: 6 + Math.random() * 8, // Random durations 6s-14s
      animationDelay: Math.random() * 3 // Random delays 0-3s
    }))
  }, [hexagonCount, isMounted])

  // CSS-in-JS styles for better performance (no re-parsing)
  const styles = useMemo(() => `
    @keyframes gradientShift {
      0% { background-position: 0% 50%; }
      100% { background-position: 100% 50%; }
    }
    
    @keyframes float {
      0% { transform: translateY(0) rotate(0deg); }
      50% { transform: translateY(-15px) rotate(3deg); }
      100% { transform: translateY(0) rotate(0deg); }
    }
    
    @keyframes waveMotion {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-8px); }
    }
    
    .animated-bg-container {
      contain: layout style paint;
      will-change: transform;
    }
    
    .floating-hexagon {
      will-change: transform;
      contain: layout style;
      transform-origin: center;
      clip-path: polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%);
    }
    
    .gradient-bg {
      will-change: auto;
      background-size: 200% 200%;
    }
    
    .wave-effect {
      will-change: transform;
      contain: layout style;
    }
  `, [])

  if (!enableAnimations) {
    return (
      <div className={`absolute inset-0 overflow-hidden ${className}`}>
        <div className={`absolute inset-0 bg-gradient-to-br ${backgroundColors.from} ${backgroundColors.via} ${backgroundColors.to}`} />
      </div>
    )
  }

  return (
    <>
      <div className={`absolute inset-0 overflow-hidden animated-bg-container ${className}`}>
        {/* Animated gradient background */}
        <div 
          className={`absolute inset-0 bg-gradient-to-br ${backgroundColors.from} ${backgroundColors.via} ${backgroundColors.to} gradient-bg`}
          style={{ animation: 'gradientShift 15s ease infinite alternate' }}
        />
        
        {/* Floating hexagons with reduced DOM nodes */}
        <div className="absolute inset-0">
          {hexagons.map((hex) => (
            <div 
              key={hex.id}
              className={`absolute ${hexagonColor} w-20 h-20 floating-hexagon`}
              style={{
                top: `${hex.top}%`,
                left: `${hex.left}%`,
                transform: `rotate(${hex.rotation}deg) scale(${hex.scale}) translateZ(0)`,
                animation: `float ${hex.animationDuration}s ease-in-out infinite alternate`,
                animationDelay: `${hex.animationDelay}s`
              }}
            />
          ))}
        </div>
        
        {/* Wave effect */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white/30 to-transparent wave-effect"
          style={{
            animation: 'waveMotion 8s ease-in-out infinite',
            maskImage: 'linear-gradient(to top, transparent, black)',
          }}
        />
      </div>
      
      <style jsx>{styles}</style>
    </>
  )
})

export default AnimatedBackground