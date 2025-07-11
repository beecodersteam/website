'use client'

import { useState, useRef, useEffect } from 'react'
import { Transition } from '@headlessui/react'
import Link from 'next/link'
import { 
  Bars3Icon, 
  XMarkIcon,
  ChevronRightIcon,
  BuildingOfficeIcon,
  CogIcon,
  UsersIcon,
  FolderIcon,
  ComputerDesktopIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline'
import StaticMobileLanguageSelector from '../ui/StaticMobileLanguageSelector'
import { useStaticTranslation } from '@/lib/use-static-translation'

interface MenuItem {
  href: string;
  labelKey: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface MobileMenuProps {
  translations: Record<string, any>;
  locale: string;
}

export default function StaticMobileMenu({ translations, locale }: MobileMenuProps) {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false)
  const { t } = useStaticTranslation(translations, locale)

  const trigger = useRef<HTMLButtonElement>(null)
  const mobileNav = useRef<HTMLDivElement>(null)

  const menuItems: MenuItem[] = [
    { href: `/${locale}#mission`, labelKey: "common:navigation.mission", icon: BuildingOfficeIcon },
    { href: `/${locale}#services`, labelKey: "common:navigation.services", icon: CogIcon },
    { href: `/${locale}#our-hive`, labelKey: "common:navigation.hive", icon: UsersIcon },
    { href: `/${locale}#portfolio`, labelKey: "common:navigation.portfolio", icon: FolderIcon },
    { href: `/${locale}#technologies`, labelKey: "common:navigation.technologies", icon: ComputerDesktopIcon },
    { href: `/${locale}#contact`, labelKey: "common:navigation.contact", icon: ChatBubbleLeftRightIcon },
  ]

  // Close mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!mobileNav.current || !trigger.current) return;
      if (!mobileNavOpen || mobileNav.current.contains(target as Node) || trigger.current.contains(target as Node)) return;
      setMobileNavOpen(false)
    };
    document.addEventListener('click', clickHandler)
    return () => document.removeEventListener('click', clickHandler)
  })

  // Close mobile menu on escape key
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false)
    };
    document.addEventListener('keydown', keyHandler)
    return () => document.removeEventListener('keydown', keyHandler)
  })

  // Prevent body scroll when menu is open and handle header backdrop conflict
  useEffect(() => {
    if (mobileNavOpen) {
      document.body.style.overflow = 'hidden'
      document.documentElement.style.overflow = 'hidden'
      
      const header = document.querySelector('header')
      if (header) {
        header.style.backdropFilter = 'none'
      }
    } else {
      document.body.style.overflow = ''
      document.documentElement.style.overflow = ''
      
      const header = document.querySelector('header')
      if (header) {
        header.style.backdropFilter = ''
      }
    }
    
    return () => {
      document.body.style.overflow = ''
      document.documentElement.style.overflow = ''
    }
  }, [mobileNavOpen])

  const closeMenu = () => setMobileNavOpen(false)

  return (
    <div className="flex md:hidden" style={{ isolation: 'isolate' }}>
      {/* Hamburger/Close button */}
      <button
        ref={trigger}
        className="relative z-[999999] p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
        style={{ 
          zIndex: 999999,
          position: 'relative',
          isolation: 'isolate'
        }}
        aria-controls="mobile-nav"
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <span className="sr-only">{mobileNavOpen ? 'Close menu' : 'Open menu'}</span>
        <div className="relative w-6 h-6">
          <div className={`absolute inset-0 transition-all duration-200 ${mobileNavOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'}`}>
            <Bars3Icon className="w-6 h-6 text-white" />
          </div>
          <div className={`absolute inset-0 transition-all duration-200 ${mobileNavOpen ? 'opacity-100 rotate-0' : 'opacity-0 rotate-180'}`}>
            <XMarkIcon className="w-6 h-6 text-white" />
          </div>
        </div>
      </button>

      {/* Mobile navigation overlay */}
      <Transition
        show={mobileNavOpen}
        enter="transition-opacity duration-300 ease-out"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-300 ease-out"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div 
          className="fixed inset-0 z-[999998] bg-black/65 backdrop-blur-md delay-200"
          style={{ 
            zIndex: 999998,
            position: 'fixed',
            isolation: 'isolate',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100vw',
            height: '100vh',
            willChange: 'transform',
          }}
          onClick={closeMenu} 
        />
      </Transition>

      {/* Mobile navigation panel */}
      <div ref={mobileNav}>
        <Transition
          show={mobileNavOpen}
          as="nav"
          id="mobile-nav"
          className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-[999999]"
          style={{ 
            zIndex: 999999,
            position: 'fixed',
            top: 0,
            right: 0,
            height: '100vh',
            transform: 'translateZ(0)',
            willChange: 'transform',
            isolation: 'isolate'
          }}
          enter="transition-all duration-300 ease-out"
          enterFrom="translate-x-full opacity-0"
          enterTo="translate-x-0 opacity-100"
          leave="transition-all duration-300 ease-out"
          leaveFrom="translate-x-0 opacity-100"
          leaveTo="translate-x-full opacity-0"
        >
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <h2 className="text-xl font-bold text-gray-900">Menu</h2>
              <button
                onClick={closeMenu}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                <XMarkIcon className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            {/* Navigation items */}
            <div className="flex-1 overflow-y-auto">
              <ul className="py-2">
                {menuItems.map((item) => {
                  const IconComponent = item.icon
                  return (
                    <li key={item.href}>
                      <Link 
                        href={item.href} 
                        className="group flex items-center px-6 py-4 text-beePrimary-normal hover:bg-beePrimary-light/5 transition-all duration-200"
                        onClick={closeMenu}
                      >
                        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-beePrimary-light/20 transition-colors duration-200 mr-4">
                          <IconComponent className="w-5 h-5 text-beePrimary-normal transition-colors duration-200" />
                        </div>
                        <span className="font-medium text-base flex-1">{String(t(item.labelKey))}</span>
                        <ChevronRightIcon className="w-4 h-4 text-beePrimary-normal opacity-0 group-hover:opacity-100 transition-all duration-200" />
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>

            {/* Footer section */}
            <div className="border-t border-gray-100 p-6 space-y-4">
              {/* Language selector */}
              <div>
                <p className="text-sm font-medium text-gray-500 mb-3">Language</p>
                <StaticMobileLanguageSelector translations={translations} locale={locale} />
              </div>
              
              {/* Footer info */}
              <div className="pt-4">
                <p className="text-xs text-gray-400 text-center">
                  © 2024 Bee Coders. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  )
}
