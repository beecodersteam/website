'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function LanguageDetector() {
  const pathname = usePathname()

  useEffect(() => {
    // Detectar idioma baseado na URL
    const segments = pathname.split('/')
    const locale = segments[1] || 'en' // primeiro segmento após '/'
    
    // Validar se é um locale válido
    const validLocales = ['en', 'pt', 'es', 'fr']
    const currentLocale = validLocales.includes(locale) ? locale : 'en'
    
    // Atualizar o atributo lang do HTML
    if (typeof document !== 'undefined') {
      document.documentElement.lang = currentLocale
    }
  }, [pathname])

  return null // Este componente não renderiza nada
}
