'use client'

import { memo } from 'react'

interface SectionTitleProps {
  title: string
  id: string
  variant?: 'default' | 'centered' | 'left'
  className?: string
  titleClassName?: string
  color?: string
}

const SectionTitle = memo(function SectionTitle({
  title,
  id,
  variant = 'centered',
  className = '',
  titleClassName = '',
  color = 'text-beePrimary-dark',
}: SectionTitleProps) {
  const alignmentClass = variant === 'left' ? 'text-left' : 'text-center'
//   const containerClass = variant === 'centered' ? 'mb-16' : 'mb-12'

  return (
    <div className={`${alignmentClass} mb-6 ${className}`}>
      
      {/* Main title */}
      <h2 
        className={`text-3xl md:text-4xl lg:text-5xl font-bold ${color} mb-6 leading-tight tracking-tight scroll-mt-24 md:scroll-mt-44  ${titleClassName} ${id}`}
        {...(id && { id })}
        {...({
          'data-aos': 'fade-up',
          'data-aos-duration': '700',
          'data-aos-delay': '100',
        })}>
        {title}
      </h2>
      
      {/* Animated divider - sempre animado por padrão */}
      <div
        className={`w-24 h-1 bg-gradient-to-r from-beePrimary-normal via-beeSecondary-normal to-beePrimary-normal rounded-full mb-8 ${
          variant === 'left' ? '' : 'mx-auto'
        } bg-[length:200%_100%] animate-gradient-x`}
        {...({
          'data-aos': 'fade-right',
          'data-aos-duration': '800',
          'data-aos-delay': '200'
        })}
      />
    </div>
  )
})

export default SectionTitle
