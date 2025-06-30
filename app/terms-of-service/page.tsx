'use client';

import { DocumentTextIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { type Locale } from '@/lib/static-translations';
import StaticLayout from '@/components/StaticLayout';
import SectionTitle from '@/components/ui/SectionTitle';
import SectionSubtitle from '@/components/ui/SectionSubtitle';

export default function TermsOfService() {
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
      'termsOfService.title': 'Terms of Service',
      'termsOfService.subtitle': 'Please read these terms carefully before using our services.',
      'termsOfService.lastUpdated': 'Last updated: January 1, 2024',
      'termsOfService.acceptance.title': '1. Acceptance of Terms',
      'termsOfService.acceptance.content': 'By accessing and using Bee Coders services, you accept and agree to be bound by the terms and provision of this agreement.',
      'termsOfService.services.title': '2. Description of Services',
      'termsOfService.services.content': 'Bee Coders provides software development services, web development, mobile applications, and digital solutions.',
      'termsOfService.userObligations.title': '3. User Obligations',
      'termsOfService.userObligations.content': 'Users must provide accurate information and comply with all applicable laws and regulations.',
      'termsOfService.intellectualProperty.title': '4. Intellectual Property',
      'termsOfService.intellectualProperty.content': 'All intellectual property rights in our services and content remain with Bee Coders.',
      'termsOfService.privacy.title': '5. Privacy',
      'termsOfService.privacy.content': 'Your privacy is important to us. Please review our Privacy Policy.',
      'termsOfService.limitation.title': '6. Limitation of Liability',
      'termsOfService.limitation.content': 'Bee Coders shall not be liable for any indirect, incidental, special, or consequential damages.',
      'termsOfService.termination.title': '7. Termination',
      'termsOfService.termination.content': 'We may terminate or suspend access to our services immediately, without prior notice.',
      'termsOfService.governing.title': '8. Governing Law',
      'termsOfService.governing.content': 'These terms shall be governed by and construed in accordance with applicable laws.',
      'termsOfService.changes.title': '9. Changes to Terms',
      'termsOfService.changes.content': 'We reserve the right to modify these terms at any time.',
      'termsOfService.contact.title': '10. Contact Information',
      'termsOfService.contact.content': 'If you have any questions about these Terms, please contact us.',
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
              <DocumentTextIcon className="w-8 h-8 text-white" />
            </div>
            <SectionTitle
              title={t('termsOfService.title')}
              id="terms"
              variant="centered"
            />
            <SectionSubtitle
              text={t('termsOfService.subtitle')}
              variant="centered"
              animationDelay={200}
            />
            <p className="text-sm text-gray-500 mt-4">
              {t('termsOfService.lastUpdated')}
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            {/* Acceptance of Terms */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-beePrimary-normal mb-4">
                {t('termsOfService.acceptance.title')}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t('termsOfService.acceptance.content')}
              </p>
            </section>

            {/* Description of Services */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-beePrimary-normal mb-4">
                {t('termsOfService.services.title')}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t('termsOfService.services.content')}
              </p>
            </section>

            {/* User Obligations */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-beePrimary-normal mb-4">
                {t('termsOfService.userObligations.title')}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t('termsOfService.userObligations.content')}
              </p>
            </section>

            {/* Intellectual Property */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-beePrimary-normal mb-4">
                {t('termsOfService.intellectualProperty.title')}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t('termsOfService.intellectualProperty.content')}
              </p>
            </section>

            {/* Privacy */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-beePrimary-normal mb-4">
                {t('termsOfService.privacy.title')}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t('termsOfService.privacy.content')}
              </p>
              <Link 
                href="/privacy-policy" 
                className="text-beePrimary-normal hover:text-beePrimary-dark font-medium"
              >
                Read our Privacy Policy →
              </Link>
            </section>

            {/* Limitation of Liability */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-beePrimary-normal mb-4">
                {t('termsOfService.limitation.title')}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t('termsOfService.limitation.content')}
              </p>
            </section>

            {/* Termination */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-beePrimary-normal mb-4">
                {t('termsOfService.termination.title')}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t('termsOfService.termination.content')}
              </p>
            </section>

            {/* Governing Law */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-beePrimary-normal mb-4">
                {t('termsOfService.governing.title')}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t('termsOfService.governing.content')}
              </p>
            </section>

            {/* Changes to Terms */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-beePrimary-normal mb-4">
                {t('termsOfService.changes.title')}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t('termsOfService.changes.content')}
              </p>
            </section>

            {/* Contact Information */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-beePrimary-normal mb-4">
                {t('termsOfService.contact.title')}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t('termsOfService.contact.content')}
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
