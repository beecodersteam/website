'use client'

import { useMemo, memo } from 'react'
import Image from 'next/image'

interface AnimatedBackgroundProps {
  hexagonCount?: number
  className?: string
  hexagonColor?: 'purple' | 'yellow' | 'gray'
  backgroundColors?: {
    from: string
    via: string
    to: string
  }
}

const AnimatedBackground = memo(function AnimatedBackground({ 
  hexagonCount = 8, 
  className = "",
  hexagonColor = "purple",
  backgroundColors = {
    from: "from-beeSecondary-lightest/10",
    via: "via-beeSecondary-normal/10", 
    to: "to-beeSecondary-light/10"
  }
}: AnimatedBackgroundProps) {
  // Generate deterministic positions for consistent SSR/CSR
  const hexagons = useMemo(() => {
    // Simple seeded random for consistent positioning
    const seededRandom = (seed: number) => {
      const x = Math.sin(seed) * 10000
      return x - Math.floor(x)
    }
    
    const positions: Array<{ top: number; left: number }> = []
    const minDistance = 12
    
    for (let i = 0; i < hexagonCount; i++) {
      let attempts = 0
      let position: { top: number; left: number }
      
      do {
        const seed1 = i * 13 + attempts * 7
        const seed2 = i * 17 + attempts * 11
        position = {
          top: 8 + seededRandom(seed1) * 80,
          left: 8 + seededRandom(seed2) * 80
        }
        attempts++
      } while (
        attempts < 25 && 
        positions.some(pos => {
          const dist = Math.sqrt((position.top - pos.top) ** 2 + (position.left - pos.left) ** 2)
          return dist < minDistance
        })
      )
      
      positions.push(position)
    }
    
    return positions.map((pos, i) => ({
      id: i,
      top: pos.top,
      left: pos.left,
      rotation: seededRandom(i * 23) * 360,
      scale: 0.6 + seededRandom(i * 29) * 0.4,
      duration: 8 + seededRandom(i * 31) * 6,
      delay: seededRandom(i * 37) * 2
    }))
  }, [hexagonCount])

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Static gradient background - no animation for better performance */}
      <div 
        className={`absolute inset-0 bg-gradient-to-br ${backgroundColors.from} ${backgroundColors.via} ${backgroundColors.to}`}
      />
      
      {/* Floating hexagons */}
      {hexagons.map((hex) => (
        <div 
          key={hex.id}
          className="absolute opacity-15"
          style={{
            top: `${hex.top}%`,
            left: `${hex.left}%`,
            width: '80px',
            height: '80px',
            transform: `rotate(${hex.rotation}deg) scale(${hex.scale})`,
            animation: `hexFloat ${hex.duration/2}s ease-in-out infinite alternate ${hex.delay}s`,
          }}
        >
          <Image
            src={`/images/optimized/icons/hexagon-${hexagonColor}.png`}
            alt=""
            width={80}
            height={80}
            className="w-full h-full drop-shadow-md"
            loading="lazy"
            quality={85}
          />
        </div>
      ))}
      
      <style jsx>{`
        @keyframes hexFloat {
          0% { transform: translateY(0px); }
          100% { transform: translateY(-100px); }
        }
      `}</style>
    </div>
  )
})

export default AnimatedBackground