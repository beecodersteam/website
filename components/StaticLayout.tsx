'use client'

import { useEffect, ReactNode } from 'react'
import StaticHeader from './layout/StaticHeader'
import StaticFooter from './layout/StaticFooter'
import Aos from 'aos'
import 'aos/dist/aos.css'

interface StaticLayoutProps {
  children: ReactNode
  translations: Record<string, any>
  locale: string
}

export default function StaticLayout({ children, translations, locale }: StaticLayoutProps) {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

  return (
    <>
      <StaticHeader translations={translations} locale={locale} />
      {children}
      <StaticFooter translations={translations} locale={locale} />
    </>
  )
}
