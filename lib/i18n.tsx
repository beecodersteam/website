'use client';

import { createContext, useContext, useState, useEffect, ReactNode, isValidElement, cloneElement } from 'react';
import { Locale, defaultLocale, loadClientTranslations, updateDocumentMeta, detectBrowserLocale } from './seo-i18n';

interface I18nContextType {
  locale: Locale;
  changeLocale: (locale: Locale) => Promise<void>;
  t: (key: string, options?: any) => ReactNode;
  isLoading: boolean;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

// Simple cache for translations
const translations: Record<Locale, Record<string, any>> = {
  en: {},
  pt: {}
};

// Function to load translations (client-side)
async function loadTranslations(locale: Locale) {
  if (Object.keys(translations[locale]).length > 0) {
    return;
  }

  const translationData = await loadClientTranslations(locale);
  translations[locale] = translationData;
}

// Function to get nested value
function getNestedValue(obj: any, path: string): any {
  return path.split('.').reduce((current, key) => {
    return current && typeof current === 'object' ? current[key] : undefined;
  }, obj);
}

// Function to interpolate React components and simple variables
function interpolate(text: string, components: ReactNode[], variables?: Record<string, string>): ReactNode {
  let processedText = text;
  
  // First, handle simple variable interpolation {{ variable }}
  if (variables) {
    Object.entries(variables).forEach(([key, value]) => {
      const variableRegex = new RegExp(`{{\\s*${key}\\s*}}`, 'g');
      processedText = processedText.replace(variableRegex, value);
    });
  }
  
  // Then handle React component interpolation <0>content</0>
  const result: ReactNode[] = [];
  const componentRegex = /<(\d)>(.*?)<\/\1>/g;
  let lastIndex = 0;
  let match;

  while ((match = componentRegex.exec(processedText)) !== null) {
    // Push the text before the match
    if (match.index > lastIndex) {
      result.push(processedText.substring(lastIndex, match.index));
    }

    const componentIndex = parseInt(match[1], 10);
    const content = match[2];
    const component = components[componentIndex];

    if (component && isValidElement(component)) {
      result.push(cloneElement(component as any, { key: lastIndex, children: content }));
    } else {
      // Fallback for non-component interpolation or errors
      result.push(content);
    }

    lastIndex = componentRegex.lastIndex;
  }

  // Push the remaining text after the last match
  if (lastIndex < processedText.length) {
    result.push(processedText.substring(lastIndex));
  }

  // If no components were processed, return the string directly
  return result.length <= 1 ? (result[0] || processedText) : result;
}


export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>('en');
  const [isLoading, setIsLoading] = useState(true);  useEffect(() => {
    const initLocale = async () => {
      const initialLocale = detectBrowserLocale();

      setLocale(initialLocale);
      await loadTranslations(initialLocale);
      updateDocumentMeta(initialLocale); // Update SEO meta tags
      setIsLoading(false);
    };

    initLocale();
  }, []);

  const changeLocale = async (newLocale: Locale) => {
    setIsLoading(true);
    await loadTranslations(newLocale);
    setLocale(newLocale);
    updateDocumentMeta(newLocale); // Update SEO meta tags
    
    if (typeof window !== 'undefined') {
      localStorage.setItem('preferred-locale', newLocale);
    }
    
    setIsLoading(false);
  };

  const t = (key: string, options?: any): ReactNode => {
    const { returnObjects = false, components = [], ...variables } = options || {};
    
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

    if (typeof value === 'string') {
      // Handle both component and variable interpolation
      if (components.length > 0 || Object.keys(variables).length > 0) {
        return interpolate(value, components, variables);
      }
      
      // Handle simple variable interpolation without components
      let processedValue = value;
      Object.entries(variables).forEach(([varKey, varValue]) => {
        const variableRegex = new RegExp(`{{\\s*${varKey}\\s*}}`, 'g');
        processedValue = processedValue.replace(variableRegex, String(varValue));
      });
      
      return processedValue;
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
