import { notFound } from 'next/navigation'
import { type Locale, locales, loadAllTranslations } from '@/lib/static-translations'
import { getIconMetadata } from '@/lib/icon-config'
import StaticHome from '@/components/StaticHome'

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
  const siteTitle = translations.common?.seo?.title || 'Bee Coders - Digital Solutions'
  const siteDescription = translations.common?.seo?.description || 'Transform your ideas into reality with innovative digital solutions by Bee Coders'
  
  // Combina metadados de ícones com outros metadados
  const iconMetadata = getIconMetadata()
  
  return {
    title: siteTitle,
    description: siteDescription,
    ...iconMetadata,
    openGraph: {
      title: siteTitle,
      description: siteDescription,
      locale: locale,
      type: 'website',
      siteName: 'Bee Coders',
      images: [
        {
          url: 'https://www.beecoders.club/images/optimized/open-graph/social.jpg',
          width: 1200,
          height: 630,
          alt: 'Bee Coders - Digital Solutions',
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: siteTitle,
      description: siteDescription,
      images: ['https://www.beecoders.club/images/optimized/open-graph/social.jpg'],
    },
    alternates: {
      canonical: `https://www.beecoders.club/${locale}`,
      languages: {
        'en': 'https://www.beecoders.club/en',
        'pt': 'https://www.beecoders.club/pt',
        'es': 'https://www.beecoders.club/es',
        'fr': 'https://www.beecoders.club/fr',
        'x-default': 'https://www.beecoders.club'
      }
    }
  }
}

export default async function LocalePage({ params }: PageProps) {
  const { locale } = await params
  
  // Validar locale
  if (!locales.includes(locale)) {
    notFound()
  }

  // Carregar traduções estáticas durante o build
  const translations = loadAllTranslations(locale)
  
  return <StaticHome locale={locale} translations={translations} />
}
