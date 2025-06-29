'use client'

import { memo, ReactNode } from 'react'

interface SectionSubtitleProps {
  text: ReactNode
  variant?: 'default' | 'centered' | 'left'
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  enableAnimations?: boolean
  animationDelay?: number
  color?: string
}

const SectionSubtitle = memo(function SectionSubtitle({
  text,
  variant = 'centered',
  className = '',
  size = 'lg',
  enableAnimations = true,
  color = 'text-gray-600',
}: SectionSubtitleProps) {
  // Size classes mapping
  const sizeClasses = {
    sm: 'text-base md:text-lg',
    md: 'text-lg md:text-xl',
    lg: 'text-lg md:text-xl',
    xl: 'text-xl md:text-2xl'
  }

  // Alignment and max-width based on variant
  const alignmentClass = variant === 'left' ? 'text-left' : 'text-center'
  const maxWidthClass = variant === 'left' ? 'max-w-3xl' : 'max-w-4xl mx-auto'

  return (
    <p 
      className={`${sizeClasses[size]} ${color} leading-relaxed mb-12 font-light ${alignmentClass} ${maxWidthClass} ${className}`}
      {...(enableAnimations && {
        'data-aos': 'fade-up',
        'data-aos-duration': '700',
        'data-aos-delay': '300'
      })}
    >
      {text}
    </p>
  )
})

export default SectionSubtitle
