'use client';

import { useEffect } from 'react';
import { updateDocumentMeta } from './seo-i18n';
import type { Locale } from './seo-i18n';

interface ClientI18nEffectsProps {
  locale: Locale;
}

export function ClientI18nEffects({ locale }: ClientI18nEffectsProps) {
  useEffect(() => {
    // Update document meta tags on the client side
    updateDocumentMeta(locale);
  }, [locale]);

  return null;
}
