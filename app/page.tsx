"use client"
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { detectBrowserLocale } from '@/lib/seo-i18n'
import Head from 'next/head'

export default function Home() {  
  const router = useRouter()

  useEffect(() => {
    // Detect browser language and redirect accordingly
    const locale = detectBrowserLocale()
    router.replace(`/${locale}`)
  }, [router])

  // Página de loading simples com ícones garantidos
  return (
    <>
      <Head>
        {/* Garantir ícones na página raiz durante redirecionamento */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        <meta name="theme-color" content="#6B1C8F" />
      </Head>
      <div className="min-h-screen flex items-center justify-center bg-beePrimary-dark">
        <div className="text-white text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-4"></div>
          <p>Redirecting...</p>
        </div>
      </div>
    </>
  );
}

