import { Metadata } from 'next';
import { getIconMetadata } from './icon-config';

export type Locale = 'en' | 'pt' | 'es' | 'fr';

export const locales: Locale[] = ['en', 'pt', 'es', 'fr'];
export const defaultLocale: Locale = 'en';

// SEO metadata for each language (static for client-side apps)
export const seoData = {
  en: {
    title: 'Bee Coders - Custom Software & Digital Solutions',
    description: 'Transform your business with Bee Coders. Experts in systems development, mobile apps, cloud solutions, UI/UX design and digital transformation.',
    keywords: 'beecoders, custom software development, systems development, mobile apps, cloud solutions, UI/UX design, digital transformation, technology services',
  },
  pt: {
    title: 'Bee Coders - Software Sob Medida & Soluções Digitais',
    description: 'Impulsione seu negócio com a Bee Coders. Especialistas em desenvolvimento de sistemas, aplicativos móveis, soluções em nuvem, design UI/UX e transformação digital.',
    keywords: 'beecoders, desenvolvimento de software sob medida, desenvolvimento de sistemas, aplicativos móveis, sistemas, soluções em nuvem, design UI/UX, transformação digital, serviços de tecnologia',
  },
  es: {
    title: 'Bee Coders - Software a Medida y Soluciones Digitales',
    description: 'Impulsa tu negocio con Bee Coders. Expertos en desarrollo de sistemas, aplicaciones móviles, soluciones en la nube, diseño UI/UX y transformación digital.',
    keywords: 'beecoders, desarrollo de software a medida, desarrollo de sistemas, aplicaciones móviles, sistemas, soluciones en la nube, diseño UI/UX, transformación digital, servicios tecnológicos',
  },
  fr: {
    title: 'Bee Coders - Logiciels Sur Mesure et Solutions Numériques',
    description: 'Dynamisez votre entreprise avec Bee Coders. Experts en développement de systèmes, applications mobiles, solutions cloud, design UI/UX et transformation numérique.',
    keywords: 'beecoders, développement logiciel sur mesure, développement de systèmes, applications mobiles, systèmes, solutions cloud, design UI/UX, transformation numérique, services technologiques',
  }
};

// For client-side apps, we'll update meta tags dynamically
export function updateDocumentMeta(locale: Locale) {
  if (typeof window === 'undefined') return;
  
  const seo = seoData[locale];
  
  // Update document title
  document.title = seo.title;
  
  // Update meta description
  let metaDescription = document.querySelector('meta[name="description"]');
  if (!metaDescription) {
    metaDescription = document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    document.head.appendChild(metaDescription);
  }
  metaDescription.setAttribute('content', seo.description);
  
  // Update meta keywords
  let metaKeywords = document.querySelector('meta[name="keywords"]');
  if (!metaKeywords) {
    metaKeywords = document.createElement('meta');
    metaKeywords.setAttribute('name', 'keywords');
    document.head.appendChild(metaKeywords);
  }
  metaKeywords.setAttribute('content', seo.keywords);
  
  // Update Open Graph tags
  updateOGMeta('og:title', seo.title);
  updateOGMeta('og:description', seo.description);
  updateOGMeta('og:locale', getOGLocale(locale));
  
  // Update language attribute
  document.documentElement.lang = locale;
}

function getOGLocale(locale: Locale): string {
  const localeMap = {
    'en': 'en_US',
    'pt': 'pt_BR',
    'es': 'es_ES',
    'fr': 'fr_FR'
  };
  return localeMap[locale];
}

function updateOGMeta(property: string, content: string) {
  let meta = document.querySelector(`meta[property="${property}"]`);
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute('property', property);
    document.head.appendChild(meta);
  }
  meta.setAttribute('content', content);
}

// Client-side translation loading
export async function loadClientTranslations(locale: Locale) {
  try {
    const [common, portfolio, sections, legal] = await Promise.all([
      fetch(`/locales/${locale}/common.json`).then(res => res.ok ? res.json() : {}).catch(() => ({})),
      fetch(`/locales/${locale}/portfolio.json`).then(res => res.ok ? res.json() : {}).catch(() => ({})),
      fetch(`/locales/${locale}/sections.json`).then(res => res.ok ? res.json() : {}).catch(() => ({})),
      fetch(`/locales/${locale}/legal.json`).then(res => res.ok ? res.json() : {}).catch(() => ({})),
    ]);

    return { common, portfolio, sections, legal };
  } catch (error) {
    console.warn('Error loading client translations:', error);
    return {};
  }
}

// Get nested translation value
export function getTranslation(translations: any, key: string, namespace: string = 'common'): string {
  const namespaceData = translations[namespace];
  if (!namespaceData) return key;

  const value = key.split('.').reduce((current, k) => {
    return current && typeof current === 'object' ? current[k] : undefined;
  }, namespaceData);

  return typeof value === 'string' ? value : key;
}

// Detect locale from browser
export function detectBrowserLocale(): Locale {
  if (typeof window === 'undefined') return defaultLocale;
  
  // Check localStorage first
  const saved = localStorage.getItem('preferred-locale') as Locale;
  if (saved && locales.includes(saved)) {
    return saved;
  }

  // Check browser language
  const browserLang = navigator.language.split('-')[0] as Locale;
  return locales.includes(browserLang) ? browserLang : defaultLocale;
}

// Static metadata for build time (will be enhanced client-side)
export const staticMetadata: Metadata = {
  metadataBase: new URL('https://www.beecoders.club'),
  title: seoData.en.title,
  description: seoData.en.description,
  keywords: seoData.en.keywords,
  ...getIconMetadata(),
  openGraph: {
    title: seoData.en.title,
    description: seoData.en.description,
    url: 'https://www.beecoders.club',
    siteName: 'Bee Coders',
    images: [
      {
        url: '/images/optimized/open-graph/social.jpg',
        width: 1200,
        height: 630,
        alt: seoData.en.title,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: seoData.en.title,
    description: seoData.en.description,
    images: ['/images/optimized/open-graph/social.jpg'],
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
};
