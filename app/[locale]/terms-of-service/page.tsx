import { notFound } from 'next/navigation'
import { type Locale, locales, loadAllTranslations } from '@/lib/static-translations'
import StaticTermsOfService from '@/components/StaticTermsOfService'

interface PageProps {
  params: Promise<{
    locale: Locale
  }>
}

// Gera páginas estáticas para cada idioma
export async function generateStaticParams() {
  return locales.map(locale => ({ locale }))
}

// Gera metadata específica para cada idioma
export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params
  
  if (!locales.includes(locale)) {
    return {}
  }

  // Carrega traduções para metadata
  const translations = loadAllTranslations(locale)
  const siteTitle = translations.legal?.termsOfService?.title || 'Terms of Service'
  const siteDescription = translations.legal?.termsOfService?.subtitle || 'Please read these terms carefully before using our services.'
  
  return {
    title: `${siteTitle} - Bee Coders`,
    description: siteDescription,
    openGraph: {
      title: `${siteTitle} - Bee Coders`,
      description: siteDescription,
      locale: locale,
      type: 'website',
      siteName: 'Bee Coders',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${siteTitle} - Bee Coders`,
      description: siteDescription,
    },
    alternates: {
      canonical: locale === 'en' ? 'https://www.beecoders.club/terms-of-service' : `https://www.beecoders.club/${locale}/terms-of-service`,
      languages: {
        'en': 'https://www.beecoders.club/terms-of-service',
        'pt': 'https://www.beecoders.club/pt/terms-of-service',
        'es': 'https://www.beecoders.club/es/terms-of-service',
        'fr': 'https://www.beecoders.club/fr/terms-of-service',
        'x-default': 'https://www.beecoders.club/terms-of-service'
      }
    }
  }
}

export default async function TermsOfServicePage({ params }: PageProps) {
  const { locale } = await params
  
  // Validar locale
  if (!locales.includes(locale)) {
    notFound()
  }

  // Carregar traduções estáticas durante o build
  const translations = loadAllTranslations(locale)
  
  return <StaticTermsOfService locale={locale} translations={translations} />
}
