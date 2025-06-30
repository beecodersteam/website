'use client'

import { useState, useEffect } from 'react'
import { useTranslation } from '@/lib/i18n'

import Link from 'next/link'
import Logo from './logo'
import Dropdown from '@/components/utils/dropdown'
import MobileMenu from './mobile-menu'
import LanguageSelector from './LanguageSelector'
import React from 'react'

export default function Header() {

  const [top, setTop] = useState<boolean>(true)
  const { t } = useTranslation('common')

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
              <MenuItem href="/#mission">{t('navigation.mission')}</MenuItem>
              <MenuItem href="/#services">{t('navigation.services')}</MenuItem>
              <MenuItem href="/#our-hive">{t('navigation.hive')}</MenuItem>
              <MenuItem href="/#portfolio">{t('navigation.portfolio')}</MenuItem>
              <MenuItem href="/#technologies">{t('navigation.technologies')}</MenuItem>
              <MenuItem href="/#contact">{t('navigation.contact')}</MenuItem>
              <li>
                <LanguageSelector />
              </li>
            </ul>
          </nav>
          <MobileMenu />

        </div>
      </div>
    </header>
  )
}
