'use client'

import { useState, useEffect } from 'react'
import { useStaticTranslation } from '@/lib/use-static-translation'

import Link from 'next/link'
import Logo from '../ui/logo'
import StaticMobileMenu from './StaticMobileMenu'
import StaticLanguageSelector from '../ui/StaticLanguageSelector'
import React from 'react'

interface HeaderProps {
  translations: Record<string, any>;
  locale: string;
}

export default function StaticHeader({ translations, locale }: HeaderProps) {

  const [top, setTop] = useState<boolean>(true)
  const { t } = useStaticTranslation(translations, locale)

  // detect whether user has scrolled the page down by 10px
  const scrollHandler = () => {
    window.scrollY > 10 ? setTop(false) : setTop(true)
  }

  useEffect(() => {
    scrollHandler()
    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [top])

  // Componente reutilizável para item de menu
  function MenuItem({ href, children }: { href: string, children: React.ReactNode }) {
    return (
      <li>
        <Link
          href={href}
          className="font-medium text-white px-3 py-2 flex items-center relative transition-colors duration-150 ease-in-out hover:text-beeSecondary-normal focus:text-beeSecondary-normal"
        >
          {children}
        </Link>
      </li>
    )
  }

  return (
    <header className="fixed w-full z-40 bg-opacity-70 bg-beePrimary-normal border-b-4 border-beeSecondary-normal transition duration-300 ease-in-out backdrop-blur-sm md:bg-opacity-80 shadow-xl">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Site branding */}
          <div className="shrink-0 mr-4">
            <Logo />
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center gap-2">
              {/* <MenuItem href="/">{t('navigation.home')}</MenuItem> */}
              <MenuItem href={`/${locale}#mission`}>{String(t('common:navigation.mission'))}</MenuItem>
              <MenuItem href={`/${locale}#services`}>{String(t('common:navigation.services'))}</MenuItem>
              <MenuItem href={`/${locale}#our-hive`}>{String(t('common:navigation.hive'))}</MenuItem>
              <MenuItem href={`/${locale}#portfolio`}>{String(t('common:navigation.portfolio'))}</MenuItem>
              <MenuItem href={`/${locale}#technologies`}>{String(t('common:navigation.technologies'))}</MenuItem>
              <MenuItem href={`/${locale}#contact`}>{String(t('common:navigation.contact'))}</MenuItem>
              <li>
                <StaticLanguageSelector translations={translations} locale={locale} />
              </li>
            </ul>
          </nav>
          <StaticMobileMenu translations={translations} locale={locale} />

        </div>
      </div>
    </header>
  )
}
