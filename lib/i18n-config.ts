import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import path from 'path';
import fs from 'fs';

export type Locale = 'en' | 'pt' | 'es' | 'fr';

export const locales: Locale[] = ['en', 'pt', 'es', 'fr'];
export const defaultLocale: Locale = 'en';

// Function to load translations statically (for SSR/SSG)
export function loadStaticTranslations(locale: Locale) {
  const localesPath = path.join(process.cwd(), 'public', 'locales', locale);
  
  try {
    const common = JSON.parse(fs.readFileSync(path.join(localesPath, 'common.json'), 'utf8'));
    const portfolio = JSON.parse(fs.readFileSync(path.join(localesPath, 'portfolio.json'), 'utf8'));
    const sections = JSON.parse(fs.readFileSync(path.join(localesPath, 'sections.json'), 'utf8'));
    const legal = JSON.parse(fs.readFileSync(path.join(localesPath, 'legal.json'), 'utf8'));
    
    return {
      common,
      portfolio,
      sections,
      legal
    };
  } catch (error) {
    console.warn(`Error loading static translations for ${locale}:`, error);
    return {
      common: {},
      portfolio: {},
      sections: {},
      legal: {}
    };
  }
}

// Create i18n instance for server-side (SSR/SSG)
export function createI18nInstance(locale: Locale, translations?: any) {
  const i18nInstance = i18n.createInstance();
  
  i18nInstance
    .use(initReactI18next)
    .use(
      resourcesToBackend((language: string, namespace: string) => {
        // For client-side, load translations dynamically
        if (typeof window !== 'undefined') {
          return fetch(`/locales/${language}/${namespace}.json`)
            .then(res => res.json())
            .catch(() => ({}));
        }
        // For server-side, use provided translations
        return Promise.resolve(translations?.[namespace] || {});
      })
    )
    .init({
      lng: locale,
      fallbackLng: defaultLocale,
      debug: process.env.NODE_ENV === 'development',
      interpolation: {
        escapeValue: false, // React already escapes by default
      },
      defaultNS: 'common',
      ns: ['common', 'portfolio', 'sections', 'legal'],
      // For SSR/SSG, provide initial resources
      ...(translations && {
        resources: {
          [locale]: translations
        }
      })
    });
  
  return i18nInstance;
}

// SEO metadata for each language
export const seoData = {
  en: {
    title: 'Bee Coders - Software Development & Digital Solutions',
    description: 'A vibrant and collaborative community of developers around the world, working together to drive innovation and technical excellence in software development.',
    keywords: 'beecoders, community, developers, software development, mobile apps, web development, digital solutions',
  },
  pt: {
    title: 'Bee Coders - Desenvolvimento de Software e Soluções Digitais',
    description: 'Uma comunidade vibrante e colaborativa de desenvolvedores ao redor do mundo, trabalhando juntos para impulsionar a inovação e excelência técnica no desenvolvimento de software.',
    keywords: 'beecoders, comunidade, desenvolvedores, desenvolvimento de software, aplicativos móveis, desenvolvimento web, soluções digitais',
  },
  es: {
    title: 'Bee Coders - Desarrollo de Software y Soluciones Digitales',
    description: 'Una comunidad vibrante y colaborativa de desarrolladores de todo el mundo, trabajando juntos para impulsar la innovación y excelencia técnica en el desarrollo de software.',
    keywords: 'beecoders, comunidad, desarrolladores, desarrollo de software, aplicaciones móviles, desarrollo web, soluciones digitales',
  },
  fr: {
    title: 'Bee Coders - Développement Logiciel et Solutions Numériques',
    description: 'Une communauté dynamique et collaborative de développeurs du monde entier, travaillant ensemble pour stimuler l\'innovation et l\'excellence technique dans le développement logiciel.',
    keywords: 'beecoders, communauté, développeurs, développement logiciel, applications mobiles, développement web, solutions numériques',
  }
};

// Generate metadata for each locale (for SSR/SSG)
export function generateMetadata(locale: Locale) {
  const seo = seoData[locale];
  
  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    openGraph: {
      title: seo.title,
      description: seo.description,
      locale: getOGLocale(locale),
      type: 'website',
    },
  };
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
