import { type Locale, locales, loadAllTranslations } from '@/lib/static-translations'
import { type Metadata } from 'next'

interface PageMetadataConfig {
  locale: Locale
  pageKey: string
  namespace?: string
  pagePath: string
  fallbackTitle?: string
  fallbackDescription?: string
  siteSection?: string
  baseUrl?: string
  ogImage?: string
}

/**
 * Gera metadata otimizada para SEO de forma genérica para qualquer página
 * 
 * @param config - Configuração da página
 * @returns Metadata do Next.js
 * 
 * @example
 * // Para páginas legais
 * generatePageMetadata({
 *   locale: 'en',
 *   pageKey: 'privacyPolicy',
 *   namespace: 'legal',
 *   pagePath: 'privacy-policy',
 *   fallbackTitle: 'Privacy Policy',
 *   fallbackDescription: 'Your privacy is important to us...',
 *   ogImage: '/images/optimized/open-graph/social.jpg'
 * })
 * 
 * @example
 * // Para seções do site
 * generatePageMetadata({
 *   locale: 'pt',
 *   pageKey: 'about',
 *   namespace: 'sections',
 *   pagePath: 'about',
 *   siteSection: 'Company'
 * })
 */
export function generatePageMetadata({
  locale,
  pageKey,
  namespace = 'common',
  pagePath,
  fallbackTitle,
  fallbackDescription,
  siteSection,
  baseUrl = 'https://www.beecoders.club',
  ogImage
}: PageMetadataConfig): Metadata {
  // Validação do locale
  if (!locales.includes(locale)) {
    return {}
  }

  // Carrega traduções
  const translations = loadAllTranslations(locale)
  
  // Busca dados da página baseado no namespace
  const pageData = namespace 
    ? translations[namespace]?.[pageKey]
    : translations[pageKey]
  
  // Títulos e descrições com fallbacks inteligentes
  const pageTitle = pageData?.title || fallbackTitle || pageKey
  const pageDescription = pageData?.subtitle || pageData?.description || fallbackDescription || ''
  
  // Monta título completo
  const fullTitle = siteSection 
    ? `${pageTitle} - ${siteSection} - Bee Coders`
    : `${pageTitle} - Bee Coders`
  
  // URLs canônicas
  const canonicalUrl = locale === 'en' 
    ? `${baseUrl}/${pagePath}` 
    : `${baseUrl}/${locale}/${pagePath}`

  // Imagem OpenGraph
  const openGraphImage = ogImage || `${baseUrl}/images/optimized/open-graph/social.jpg`

  // Alternate languages
  const alternateLanguages = {
    'en': `${baseUrl}/${pagePath}`,
    'pt': `${baseUrl}/pt/${pagePath}`,
    'es': `${baseUrl}/es/${pagePath}`,
    'fr': `${baseUrl}/fr/${pagePath}`,
    'x-default': `${baseUrl}/${pagePath}`
  }

  return {
    title: fullTitle,
    description: pageDescription,
    openGraph: {
      title: fullTitle,
      description: pageDescription,
      locale: locale,
      type: 'website',
      siteName: 'Bee Coders',
      url: canonicalUrl,
      images: [
        {
          url: openGraphImage,
          width: 1200,
          height: 630,
          alt: `${pageTitle} - Bee Coders`,
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: pageDescription,
      images: [openGraphImage],
    },
    alternates: {
      canonical: canonicalUrl,
      languages: alternateLanguages
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

/**
 * Utilitário específico para páginas legais
 * Wrapper do generatePageMetadata com configurações pré-definidas
 */
export function generateLegalMetadata(
  locale: Locale,
  pageType: 'privacyPolicy' | 'termsOfService',
  pagePath: string
): Metadata {
  const fallbackTitles = {
    privacyPolicy: 'Privacy Policy',
    termsOfService: 'Terms of Service'
  }
  
  const fallbackDescriptions = {
    privacyPolicy: 'Your privacy is important to us. This policy explains how we collect, use, and protect your information.',
    termsOfService: 'Please read these terms and conditions carefully before using our services.'
  }

  return generatePageMetadata({
    locale,
    pageKey: pageType,
    namespace: 'legal',
    pagePath,
    fallbackTitle: fallbackTitles[pageType],
    fallbackDescription: fallbackDescriptions[pageType],
    siteSection: 'Legal'
  })
}

/**
 * Utilitário para páginas de seções do site
 * Wrapper para seções principais como About, Services, etc.
 */
export function generateSectionMetadata(
  locale: Locale,
  sectionKey: string,
  pagePath: string,
  customTitle?: string,
  customDescription?: string
): Metadata {
  return generatePageMetadata({
    locale,
    pageKey: sectionKey,
    namespace: 'sections',
    pagePath,
    fallbackTitle: customTitle,
    fallbackDescription: customDescription
  })
}

/**
 * Utilitário para páginas de produto/serviço
 * Para futuras páginas de portfólio, serviços detalhados, etc.
 */
export function generateServiceMetadata(
  locale: Locale,
  serviceKey: string,
  pagePath: string
): Metadata {
  return generatePageMetadata({
    locale,
    pageKey: serviceKey,
    namespace: 'services',
    pagePath,
    siteSection: 'Services'
  })
}
