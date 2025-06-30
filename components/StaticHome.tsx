'use client'

import { useEffect } from 'react'
import { type Locale } from '@/lib/static-translations'
import StaticLayout from '@/components/StaticLayout'
import StaticHero from '@/components/sections/StaticHero'
import StaticOurHive from '@/components/sections/StaticOurHive'
import StaticTestimonials from '@/components/sections/StaticTestimonials'
import StaticContact from '@/components/sections/StaticContact'
import StaticMission from '@/components/sections/StaticMission'
import StaticHighlights from '@/components/sections/StaticHighlights'
import StaticTechnologies from '@/components/sections/StaticTechnologies'
import StaticServicesSection from '@/components/sections/StaticServicesSection'
import StaticPortfolio from '@/components/sections/StaticPortfolio'
import Aos from 'aos'
import 'aos/dist/aos.css'

interface StaticHomeProps {
  locale: Locale
  translations: Record<string, any>
}

export default function StaticHome({ locale, translations }: StaticHomeProps) {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

  return (
    <StaticLayout translations={translations} locale={locale}>
      <StaticHero translations={translations} locale={locale} />
      <StaticHighlights translations={translations} locale={locale} />
      <StaticMission translations={translations} locale={locale} />
      <StaticServicesSection translations={translations} locale={locale} />
      <StaticOurHive translations={translations} locale={locale} />
      <StaticPortfolio translations={translations} locale={locale} />
      <StaticTechnologies translations={translations} locale={locale} />
      <StaticTestimonials translations={translations} locale={locale} />
      <StaticContact translations={translations} locale={locale} />
    </StaticLayout>
  )
}
