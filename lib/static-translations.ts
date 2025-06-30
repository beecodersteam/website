import fs from 'fs';
import path from 'path';

export type Locale = 'en' | 'pt' | 'es' | 'fr';

export const locales: Locale[] = ['en', 'pt', 'es', 'fr'];
export const defaultLocale: Locale = 'en';

// Carrega tradução específica no build time
export function loadTranslation(locale: Locale, namespace: string): Record<string, any> {
  try {
    const filePath = path.join(process.cwd(), 'public/locales', locale, `${namespace}.json`);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(fileContents);
  } catch {
    console.warn(`Translation file not found: ${locale}/${namespace}.json`);
    return {};
  }
}

// Carrega todas as traduções para um locale específico
export function loadAllTranslations(locale: Locale): Record<string, any> {
  const namespaces = ['common', 'sections', 'portfolio', 'legal'];
  const translations: Record<string, any> = {};
  
  namespaces.forEach(namespace => {
    translations[namespace] = loadTranslation(locale, namespace);
  });
  
  return translations;
}

// Função legacy para compatibilidade
export async function loadStaticTranslations(locale: Locale) {
  return loadAllTranslations(locale);
}

// Função para criar um provedor de tradução estática
export function createStaticTranslationProvider(translations: any, locale: Locale) {
  function getNestedValue(obj: any, path: string): any {
    return path.split('.').reduce((current, key) => {
      return current && typeof current === 'object' ? current[key] : undefined;
    }, obj);
  }

  function t(key: string): string {
    let namespace = 'common';
    let translationKey = key;
    
    if (key.includes(':')) {
      [namespace, translationKey] = key.split(':', 2);
    }

    const namespaceData = translations[namespace];
    if (!namespaceData) {
      return key;
    }

    const value = getNestedValue(namespaceData, translationKey);
    
    if (value === undefined || value === null) {
      return key;
    }

    return typeof value === 'string' ? value : key;
  }

  return { t, locale };
}
