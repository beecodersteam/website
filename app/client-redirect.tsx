"use client"
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { detectBrowserLocale } from '@/lib/seo-i18n'

export default function ClientRedirect() {  
  const router = useRouter()

  useEffect(() => {
    // Detect browser language and redirect accordingly
    const locale = detectBrowserLocale()
    router.replace(`/${locale}`)
  }, [router])

  // Página de loading - ícones e theme color definidos nos metadados do Server Component pai
  return (
    <div className="min-h-screen flex items-center justify-center bg-beePrimary-dark">
      <div className="text-white text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-4"></div>
        <p>Redirecting...</p>
      </div>
    </div>
  );
}
