'use client'

import { useState, useRef, useEffect } from 'react'
import { Transition } from '@headlessui/react'
import Link from 'next/link'
import { Bars3Icon, ArrowRightIcon } from '@heroicons/react/24/outline'

export default function MobileMenu() {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false)

  const trigger = useRef<HTMLButtonElement>(null)
  const mobileNav = useRef<HTMLDivElement>(null)

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!mobileNav.current || !trigger.current) return;
      if (!mobileNavOpen || mobileNav.current.contains(target as Node) || trigger.current.contains(target as Node)) return;
      setMobileNavOpen(false)
    };
    document.addEventListener('click', clickHandler)
    return () => document.removeEventListener('click', clickHandler)
  })

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false)
    };
    document.addEventListener('keydown', keyHandler)
    return () => document.removeEventListener('keydown', keyHandler)
  })

  return (
    <div className="flex md:hidden">
      {/* Hamburger button */}
      <button
        ref={trigger}
        className={`hamburger ${mobileNavOpen && 'active'}`}
        aria-controls="mobile-nav"
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <span className="sr-only">Menu</span>
        <Bars3Icon className="w-6 h-6 fill-current text-white" />
      </button>

      {/*Mobile navigation */}
      <div ref={mobileNav}>
        <Transition
          show={mobileNavOpen}
          as="nav"
          id="mobile-nav"
          className="absolute top-full h-screen pb-16 z-20 left-0 w-full overflow-scroll bg-white"
          enter="transition ease-out duration-200 transform"
          enterFrom="opacity-0 -translate-y-2"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-out duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <ul className="px-5 py-2">
            <li>
              <Link href="/#mission" className="flex font-medium text-xl w-full text-beePrimary-normal hover:text-gray-900 py-2 justify-center" onClick={() => setMobileNavOpen(false)}>
                Mission</Link>
            </li>
            <li>
              <Link href="/#services" className="flex font-medium  text-xl w-full text-beePrimary-normal hover:text-gray-900 py-2 justify-center" onClick={() => setMobileNavOpen(false)}>
                Services</Link>
            </li>
            <li>
              <Link href="/#hive" className="flex font-medium  text-xl w-full text-beePrimary-normal hover:text-gray-900 py-2 justify-center" onClick={() => setMobileNavOpen(false)}>
                Hive</Link>
            </li>
            <li>
              <Link href="/#portfolio" className="flex font-medium  text-xl w-full text-beePrimary-normal hover:text-gray-900 py-2 justify-center" onClick={() => setMobileNavOpen(false)}>
                Projects</Link>
            </li>
            <li>
              <Link href="/#technologies" className="flex font-medium  text-xl w-full text-beePrimary-normal hover:text-gray-900 py-2 justify-center" onClick={() => setMobileNavOpen(false)}>
                Technologies</Link>
            </li>
            <li>
              <Link href="/#contact" className="flex font-medium  text-xl w-full text-beePrimary-normal hover:text-gray-900 py-2 justify-center" onClick={() => setMobileNavOpen(false)}>
                Contact</Link>
            </li>
            {/* <li>
              <Link href="/signin" className="flex font-medium w-full text-gray-600 hover:text-gray-900 py-2 justify-center" onClick={() => setMobileNavOpen(false)}>Sign in</Link>
            </li>
            <li>
              <Link href="/signup" className="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 w-full my-2" onClick={() => setMobileNavOpen(false)}>
                <span>Sign up</span>
                <ArrowRightIcon className="w-3 h-3 fill-current text-gray-400 shrink-0 ml-2 -mr-1" />
              </Link>
            </li> */}
          </ul>          
        </Transition>
      </div>
    </div>
  )
}
