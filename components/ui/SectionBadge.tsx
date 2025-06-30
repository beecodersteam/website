'use client'

import { memo, ReactNode } from 'react'

interface SectionBadgeProps {
  icon?: React.ReactNode
  text: string | ReactNode
  variant?: 'default' | 'centered' | 'left'
  className?: string
}

const SectionBadge = memo(function SectionBadge({
  icon,
  text,
  variant = 'centered',
  className = '',
}: SectionBadgeProps) {
  const containerClass = variant === 'left' ? 'flex justify-start' : 'flex justify-center'

  return (
    <div className={`${containerClass} mb-6 ${className}`}>
      <div 
        className="inline-flex items-center px-4 py-2 rounded-full bg-beePrimary-light/10 border border-beePrimary-light/20"
        {...({
          'data-aos': 'fade-down',
          'data-aos-duration': '600'
        })}
      >
        {icon && (
          <div className="w-6 h-6 text-beePrimary-normal mr-2">
            {icon}
          </div>
        )}
        <span className="text-sm font-medium text-beePrimary-dark uppercase tracking-wider">
          {text}
        </span>
      </div>
    </div>
  )
})

export default SectionBadge
