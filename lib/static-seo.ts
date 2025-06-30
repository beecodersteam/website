import { Metadata } from 'next'
import { seoData, type Locale } from './seo-i18n'

// Base URL para metadata
const SITE_URL = 'https://www.beecoders.club'

// Função para gerar metadata estática baseada no locale
export function generateStaticMetadata(locale: Locale = 'en'): Metadata {
  const seo = seoData[locale]
  
  return {
    metadataBase: new URL(SITE_URL),
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: locale === 'en' ? SITE_URL : `${SITE_URL}/${locale}`,
      siteName: 'Bee Coders',
      images: [
        {
          url: '/images/og-beecoders.png',
          width: 1200,
          height: 630,
          alt: seo.title,
        },
      ],
      locale: locale === 'en' ? 'en_US' : locale === 'pt' ? 'pt_BR' : locale === 'es' ? 'es_ES' : 'fr_FR',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.title,
      description: seo.description,
      images: ['/images/og-beecoders.png'],
    },
    alternates: {
      canonical: locale === 'en' ? SITE_URL : `${SITE_URL}/${locale}`,
      languages: {
        'en': SITE_URL,
        'pt': `${SITE_URL}/pt`,
        'es': `${SITE_URL}/es`,
        'fr': `${SITE_URL}/fr`,
        'x-default': SITE_URL,
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

// Metadata padrão para exportação estática
export const staticMetadata = generateStaticMetadata('en')
