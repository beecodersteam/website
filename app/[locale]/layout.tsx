import { notFound } from 'next/navigation'
import { type Locale, locales } from '@/lib/static-translations'

interface LayoutProps {
  children: React.ReactNode
  params: Promise<{
    locale: Locale
  }>
}

// Gera layouts estáticos para cada idioma
export async function generateStaticParams() {
  return locales.map(locale => ({ locale }))
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { locale } = await params
  
  // Validar locale
  if (!locales.includes(locale)) {
    notFound()
  }
  
  return (
    <>
      <head>
        <link rel="alternate" hrefLang="en" href="https://www.beecoders.club" />
        <link rel="alternate" hrefLang="pt" href="https://www.beecoders.club/pt" />
        <link rel="alternate" hrefLang="es" href="https://www.beecoders.club/es" />
        <link rel="alternate" hrefLang="fr" href="https://www.beecoders.club/fr" />
        <link rel="alternate" hrefLang="x-default" href="https://www.beecoders.club" />
      </head>
      {children}
    </>
  )
}
