import { notFound } from 'next/navigation'
import { type Locale, locales, loadAllTranslations } from '@/lib/static-translations'
import StaticPrivacyPolicy from '@/components/StaticPrivacyPolicy'

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
  const siteTitle = translations.legal?.privacyPolicy?.title || 'Privacy Policy'
  const siteDescription = translations.legal?.privacyPolicy?.subtitle || 'Your privacy is important to us. This policy explains how we collect, use, and protect your information.'
  
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
      canonical: locale === 'en' ? 'https://www.beecoders.club/privacy-policy' : `https://www.beecoders.club/${locale}/privacy-policy`,
      languages: {
        'en': 'https://www.beecoders.club/privacy-policy',
        'pt': 'https://www.beecoders.club/pt/privacy-policy',
        'es': 'https://www.beecoders.club/es/privacy-policy',
        'fr': 'https://www.beecoders.club/fr/privacy-policy',
        'x-default': 'https://www.beecoders.club/privacy-policy'
      }
    }
  }
}

export default async function PrivacyPolicyPage({ params }: PageProps) {
  const { locale } = await params
  
  // Validar locale
  if (!locales.includes(locale)) {
    notFound()
  }

  // Carregar traduções estáticas durante o build
  const translations = loadAllTranslations(locale)
  
  return <StaticPrivacyPolicy locale={locale} translations={translations} />
}
