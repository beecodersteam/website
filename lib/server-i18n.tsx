import { ReactNode } from 'react';
import { Locale } from './seo-i18n';

// Server-side translation function
function createServerTranslationFunction(locale: Locale, translations: any) {
  function getNestedValue(obj: any, path: string): any {
    return path.split('.').reduce((current, key) => {
      return current && typeof current === 'object' ? current[key] : undefined;
    }, obj);
  }

  return function t(key: string, options?: any): ReactNode {
    const { returnObjects = false, ...variables } = options || {};
    
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

    if (typeof value === 'string') {
      let result = value;
      
      // Replace variables
      Object.keys(variables).forEach(varKey => {
        const placeholder = `{{${varKey}}}`;
        result = result.replace(new RegExp(placeholder, 'g'), variables[varKey]);
      });
      
      return result;
    }

    if (returnObjects && typeof value === 'object') {
      return value;
    }

    return value;
  };
}

// Server-side I18n context
function createServerI18nContext(locale: Locale, translations: any) {
  const t = createServerTranslationFunction(locale, translations);
  
  return {
    locale,
    t,
    changeLocale: async () => {}, // No-op on server
  };
}

// Server-side useTranslation hook
export function createServerTranslationHook(locale: Locale, translations: any, namespace: string = 'common') {
  const context = createServerI18nContext(locale, translations);
  
  const translate = (key: string, options?: any): ReactNode => {
    if (key.includes(':')) {
      return context.t(key, options);
    }
    const fullKey = `${namespace}:${key}`;
    return context.t(fullKey, options);
  };

  return { 
    t: translate, 
    locale: context.locale, 
    changeLocale: context.changeLocale 
  };
}
