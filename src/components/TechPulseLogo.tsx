import React from 'react'
import logoSrc from '@/assets/image-6e5ec.png'

interface TechPulseLogoProps {
  className?: string
  variant?: 'dark' | 'light'
  size?: 'sm' | 'md' | 'lg'
}

export function TechPulseLogo({
  className = '',
  variant = 'light',
  size = 'md',
}: TechPulseLogoProps) {
  const heightClasses = {
    sm: 'h-8 sm:h-9',
    md: 'h-9 sm:h-10',
    lg: 'h-12 sm:h-14',
  }[size]

  return (
    <div className={`flex items-center gap-2 select-none ${className}`}>
      <img
        src={logoSrc}
        alt="TechPulse - Tech & Design Hub"
        className={`${heightClasses} w-auto object-contain shrink-0`}
      />
    </div>
  )
}

export default TechPulseLogo
