'use client';

import { ShieldCheckIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { type Locale } from '@/lib/static-translations';
import StaticLayout from '@/components/StaticLayout';
import SectionTitle from '@/components/ui/SectionTitle';
import SectionSubtitle from '@/components/ui/SectionSubtitle';

export default function PrivacyPolicy() {
  const [locale, setLocale] = useState<Locale>('en');
  const [translations, setTranslations] = useState<Record<string, any>>({});

  useEffect(() => {
    // Detect locale from URL or localStorage
    const urlParams = new URLSearchParams(window.location.search);
    const urlLocale = urlParams.get('lang') as Locale;
    const browserLang = navigator.language.split('-')[0] as Locale;
    const savedLocale = localStorage.getItem('preferredLocale') as Locale;
    
    const detectedLocale = urlLocale || savedLocale || browserLang || 'en';
    const validLocale = ['en', 'pt', 'es', 'fr'].includes(detectedLocale) ? detectedLocale as Locale : 'en';
    
    setLocale(validLocale);
    
    // Load translations from public folder
    async function loadTranslations() {
      try {
        const [common, sections] = await Promise.all([
          fetch(`/locales/${validLocale}/common.json`).then(r => r.json()),
          fetch(`/locales/${validLocale}/sections.json`).then(r => r.json())
        ]);
        
        setTranslations({ common, sections });
      } catch (error) {
        console.error('Failed to load translations:', error);
        // Fallback to English
        const [common, sections] = await Promise.all([
          fetch(`/locales/en/common.json`).then(r => r.json()),
          fetch(`/locales/en/sections.json`).then(r => r.json())
        ]);
        setTranslations({ common, sections });
      }
    }
    
    loadTranslations();
  }, []);

  const t = (key: string) => {
    // Simplified translations for now
    const translations: Record<string, string> = {
      'privacyPolicy.title': 'Privacy Policy',
      'privacyPolicy.subtitle': 'Your privacy is important to us. This policy explains how we collect, use, and protect your information.',
      'privacyPolicy.lastUpdated': 'Last updated: January 1, 2024',
      'privacyPolicy.introduction.title': '1. Introduction',
      'privacyPolicy.introduction.content': 'At Bee Coders, we are committed to protecting your privacy and personal data.',
      'privacyPolicy.dataCollection.title': '2. Information We Collect',
      'privacyPolicy.dataCollection.content': 'We collect information you provide directly to us, such as when you contact us or use our services.',
      'privacyPolicy.dataUsage.title': '3. How We Use Your Information',
      'privacyPolicy.dataUsage.content': 'We use the information we collect to provide, maintain, and improve our services.',
      'privacyPolicy.dataSharing.title': '4. Information Sharing',
      'privacyPolicy.dataSharing.content': 'We do not sell, trade, or otherwise transfer your personal information to third parties.',
      'privacyPolicy.security.title': '5. Data Security',
      'privacyPolicy.security.content': 'We implement appropriate security measures to protect your personal information.',
      'privacyPolicy.cookies.title': '6. Cookies and Tracking',
      'privacyPolicy.cookies.content': 'We use cookies and similar technologies to enhance your experience on our website.',
      'privacyPolicy.userRights.title': '7. Your Rights',
      'privacyPolicy.userRights.content': 'You have certain rights regarding your personal information, including the right to access, update, or delete your data.',
      'privacyPolicy.changes.title': '8. Changes to This Policy',
      'privacyPolicy.changes.content': 'We may update this privacy policy from time to time.',
      'privacyPolicy.contact.title': '9. Contact Us',
      'privacyPolicy.contact.content': 'If you have any questions about this privacy policy, please contact us.',
    };
    
    return translations[key] || key;
  };

  // Render loading state while translations are loading
  if (!translations.common) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-beePrimary-dark">
        <div className="text-white text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-4"></div>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <StaticLayout translations={translations} locale={locale}>
      <div className="bg-gradient-to-br from-white via-beePrimary-normal/5 to-white min-h-screen">
        {/* Header Spacing */}
        <div className="pt-24 lg:pt-32"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-beePrimary-normal to-beeSecondary-normal rounded-2xl mb-6 shadow-lg">
              <ShieldCheckIcon className="w-8 h-8 text-white" />
            </div>
            <SectionTitle
              title={t('privacyPolicy.title')}
              id="privacy"
              variant="centered"
            />
            <SectionSubtitle
              text={t('privacyPolicy.subtitle')}
              variant="centered"
              animationDelay={200}
            />
            <p className="text-sm text-gray-500 mt-4">
              {t('privacyPolicy.lastUpdated')}
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-beePrimary-normal mb-4">
                {t('privacyPolicy.introduction.title')}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t('privacyPolicy.introduction.content')}
              </p>
            </section>

            {/* Information We Collect */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-beePrimary-normal mb-4">
                {t('privacyPolicy.dataCollection.title')}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t('privacyPolicy.dataCollection.content')}
              </p>
            </section>

            {/* How We Use Your Information */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-beePrimary-normal mb-4">
                {t('privacyPolicy.dataUsage.title')}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t('privacyPolicy.dataUsage.content')}
              </p>
            </section>

            {/* Information Sharing */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-beePrimary-normal mb-4">
                {t('privacyPolicy.dataSharing.title')}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t('privacyPolicy.dataSharing.content')}
              </p>
            </section>

            {/* Data Security */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-beePrimary-normal mb-4">
                {t('privacyPolicy.security.title')}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t('privacyPolicy.security.content')}
              </p>
            </section>

            {/* Cookies and Tracking */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-beePrimary-normal mb-4">
                {t('privacyPolicy.cookies.title')}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t('privacyPolicy.cookies.content')}
              </p>
            </section>

            {/* Your Rights */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-beePrimary-normal mb-4">
                {t('privacyPolicy.userRights.title')}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t('privacyPolicy.userRights.content')}
              </p>
            </section>

            {/* Changes to This Policy */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-beePrimary-normal mb-4">
                {t('privacyPolicy.changes.title')}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t('privacyPolicy.changes.content')}
              </p>
            </section>

            {/* Contact Us */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-beePrimary-normal mb-4">
                {t('privacyPolicy.contact.title')}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t('privacyPolicy.contact.content')}
              </p>
            </section>
          </div>

          {/* Back to home */}
          <div className="text-center mt-12">
            <Link 
              href="/" 
              className="inline-flex items-center px-6 py-3 bg-beePrimary-normal text-white font-medium rounded-lg hover:bg-beePrimary-dark transition-colors duration-200"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </StaticLayout>
  );
}
