'use client';

import { I18nextProvider } from 'react-i18next';
import { createI18nInstance, Locale } from './i18n-config';
import { ReactNode } from 'react';

interface ClientI18nProviderProps {
  locale: Locale;
  children: ReactNode;
  translations?: any;
}

export function ClientI18nProvider({ locale, children, translations }: ClientI18nProviderProps) {
  const i18n = createI18nInstance(locale, translations);
  
  return (
    <I18nextProvider i18n={i18n}>
      {children}
    </I18nextProvider>
  );
}
