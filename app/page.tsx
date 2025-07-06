"use client"
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Metadata } from 'next'
import { detectBrowserLocale } from '@/lib/seo-i18n'
import { getIconMetadata, getViewportConfig } from '@/lib/icon-config'

// Metadados específicos para a página raiz usando App Router metadata API
// NOTA: Estas configurações substituem o uso anterior do Head do next/head
export const metadata: Metadata = {
  title: 'Redirecting... | Bee Coders',
  description: 'Redirecting to your preferred language - Bee Coders',
  ...getIconMetadata(), // Inclui favicon, apple-touch-icon e outros ícones
}

// Viewport configuration com themeColor (seguindo padrão App Router)
export const viewport = getViewportConfig()

export default function Home() {  
  const router = useRouter()

  useEffect(() => {
    // Detect browser language and redirect accordingly
    const locale = detectBrowserLocale()
    router.replace(`/${locale}`)
  }, [router])

  // Página de loading - ícones e theme color definidos via metadata/viewport exports
  return (
    <div className="min-h-screen flex items-center justify-center bg-beePrimary-dark">
      <div className="text-white text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-4"></div>
        <p>Redirecting...</p>
      </div>
    </div>
  );
}

