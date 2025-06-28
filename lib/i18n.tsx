'use client';

import { createContext, useContext, useState, useEffect, ReactNode, isValidElement, cloneElement } from 'react';

type Locale = 'en' | 'pt';

interface I18nContextType {
  locale: Locale;
  changeLocale: (locale: Locale) => Promise<void>;
  t: (key: string, options?: any) => ReactNode; // Allow returning ReactNode
  isLoading: boolean;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

// Simple cache for translations
const translations: Record<Locale, Record<string, any>> = {
  en: {},
  pt: {}
};

// Function to load translations
async function loadTranslations(locale: Locale) {
  if (Object.keys(translations[locale]).length > 0) {
    return;
  }

  try {
    const [common, portfolio, sections] = await Promise.all([
      fetch(`/locales/${locale}/common.json`).then(res => res.ok ? res.json() : {}).catch(() => ({})),
      fetch(`/locales/${locale}/portfolio.json`).then(res => res.ok ? res.json() : {}).catch(() => ({})),
      fetch(`/locales/${locale}/sections.json`).then(res => res.ok ? res.json() : {}).catch(() => ({})),
    ]);

    translations[locale] = { common, portfolio, sections };
  } catch (error) {
    console.warn('Error loading translations:', error);
  }
}

// Function to get nested value
function getNestedValue(obj: any, path: string): any {
  return path.split('.').reduce((current, key) => {
    return current && typeof current === 'object' ? current[key] : undefined;
  }, obj);
}

// Function to interpolate React components
function interpolate(text: string, components: ReactNode[]): ReactNode {
  const result: ReactNode[] = [];
  const regex = /<(\d)>(.*?)<\/\1>/g;
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    // Push the text before the match
    if (match.index > lastIndex) {
      result.push(text.substring(lastIndex, match.index));
    }

    const componentIndex = parseInt(match[1], 10);
    const content = match[2];
    const component = components[componentIndex];

    if (component && isValidElement(component)) {
      result.push(cloneElement(component, { key: lastIndex, children: content }));
    } else {
      // Fallback for non-component interpolation or errors
      result.push(content);
    }

    lastIndex = regex.lastIndex;
  }

  // Push the remaining text after the last match
  if (lastIndex < text.length) {
    result.push(text.substring(lastIndex));
  }

  return result;
}


export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>('en');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initLocale = async () => {
      let initialLocale: Locale = 'en';
      
      if (typeof window !== 'undefined') {
        const saved = localStorage.getItem('preferred-locale') as Locale;
        if (saved && ['en', 'pt'].includes(saved)) {
          initialLocale = saved;
        } else {
          const browserLang = navigator.language.split('-')[0] as Locale;
          initialLocale = ['en', 'pt'].includes(browserLang) ? browserLang : 'en';
        }
      }
      
      setLocale(initialLocale);
      await loadTranslations(initialLocale);
      setIsLoading(false);
    };

    initLocale();
  }, []);

  const changeLocale = async (newLocale: Locale) => {
    setIsLoading(true);
    await loadTranslations(newLocale);
    setLocale(newLocale);
    
    if (typeof window !== 'undefined') {
      localStorage.setItem('preferred-locale', newLocale);
    }
    
    setIsLoading(false);
  };

  const t = (key: string, options?: any): ReactNode => {
    const { returnObjects = false, components = [] } = options || {};
    
    let namespace = 'common';
    let translationKey = key;
    
    if (key.includes(':')) {
      [namespace, translationKey] = key.split(':', 2);
    }

    const namespaceData = translations[locale]?.[namespace];
    if (!namespaceData) {
      return key;
    }

    const value = getNestedValue(namespaceData, translationKey);
    
    if (value === undefined || value === null) {
      return key;
    }

    if (returnObjects) {
      return value;
    }

    if (typeof value === 'string' && components.length > 0) {
      return interpolate(value, components);
    }

    return value;
  };

  return (
    <I18nContext.Provider value={{ locale, changeLocale, t, isLoading }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useTranslation(namespace: string = 'common') {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useTranslation must be used within I18nProvider');
  }

  const { t: contextT, ...rest } = context;

  const t = (key: string, options?: any): ReactNode => {
    if (key.includes(':')) {
      return contextT(key, options);
    }
    const fullKey = `${namespace}:${key}`;
    return contextT(fullKey, options);
  };

  return { t, ...rest };
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
}

export type { Locale };
