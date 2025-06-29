'use client'

import { useState, useEffect } from 'react'
import { useTranslation } from '@/lib/i18n'

import Link from 'next/link'
import Logo from './logo'
import Dropdown from '@/components/utils/dropdown'
import MobileMenu from './mobile-menu'
import LanguageSelector from './LanguageSelector'

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
            <ul className="flex grow justify-end flex-wrap items-center">
              {/* <li>
                <Link href="/" className="font-medium text-white hover:text-beeSecondary-normal px-5 py-3 flex items-center transition duration-150 ease-in-out">
                  Início</Link>
              </li> */}
              <li>
                <Link href="/#mission" className="font-medium text-white hover:text-beeSecondary-normal px-5 py-3 flex items-center transition duration-150 ease-in-out">
                  {t('navigation.mission')}</Link>
              </li>
              <li>
                <Link href="/#services" className="font-medium text-white hover:text-beeSecondary-normal px-5 py-3 flex items-center transition duration-150 ease-in-out">
                  {t('navigation.services')}</Link>
              </li>
              <li>
                <Link href="/#our-hive" className="font-medium text-white hover:text-beeSecondary-normal px-5 py-3 flex items-center transition duration-150 ease-in-out">
                  {t('navigation.hive')}</Link>
              </li>
              <li>
                <Link href="/#portifolio" className="font-medium text-white hover:text-beeSecondary-normal px-5 py-3 flex items-center transition duration-150 ease-in-out">
                  {t('navigation.portfolio')}</Link>
              </li>
              <li>
                <Link href="/#technologies" className="font-medium text-white hover:text-beeSecondary-normal px-5 py-3 flex items-center transition duration-150 ease-in-out">
                  {t('navigation.technologies')}</Link>
              </li>
              <li>
                <Link href="/#contact" className="font-medium text-white hover:text-beeSecondary-normal px-5 py-3 flex items-center transition duration-150 ease-in-out">
                  {t('navigation.contact')}</Link>
              </li>
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
