'use client';

import { useTranslation as useI18nextTranslation } from 'react-i18next';
import { ReactNode } from 'react';

export function useTranslation(namespace: string = 'common') {
  const { t: originalT, i18n } = useI18nextTranslation(namespace);
  
  // Enhanced t function that supports interpolation similar to the old system
  const t = (key: string, options?: any): ReactNode => {
    const result = originalT(key, options);
    // Ensure we return a ReactNode-compatible value
    return typeof result === 'string' ? result : String(result);
  };
  
  return {
    t,
    locale: i18n.language,
    changeLanguage: i18n.changeLanguage,
    isLoading: !i18n.isInitialized
  };
}
