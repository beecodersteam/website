'use client';

import { ShieldCheckIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { type Locale } from '@/lib/static-translations';
import StaticLayout from '@/components/StaticLayout';
import SectionTitle from '@/components/ui/SectionTitle';
import SectionSubtitle from '@/components/ui/SectionSubtitle';
import SectionBadge from '@/components/ui/SectionBadge';

interface StaticPrivacyPolicyProps {
  locale: Locale;
  translations: Record<string, any>;
}

export default function StaticPrivacyPolicy({ locale, translations }: StaticPrivacyPolicyProps) {
  const t = (key: string) => {
    const keys = key.split('.');
    let value: any = translations;
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key; // Return key if translation not found
      }
    }
    
    return value || key;
  };

  return (
    <StaticLayout translations={translations} locale={locale}>
      <div className="bg-gradient-to-br from-white via-beePrimary-normal/5 to-white min-h-screen">
        {/* Header Spacing */}
        <div className="pt-24 lg:pt-32"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-beePrimary-normal to-beeSecondary-normal rounded-3xl mb-6">
              <ShieldCheckIcon className="w-10 h-10 text-white" />
            </div>
            <SectionTitle
              title={t('legal.privacyPolicy.title')}
              id="privacy"
              variant="centered"
            />
            <SectionSubtitle
              text={t('legal.privacyPolicy.subtitle')}
              variant="centered"
              animationDelay={200}
            />
            <SectionBadge
              text={t('legal.privacyPolicy.lastUpdated')}
              variant="centered"
              className="mt-6"
            />
          </div>

          {/* Table of Contents */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-12">
            <h3 className="text-lg font-semibold text-beePrimary-dark mb-4 flex items-center">
              <div className="w-1 h-6 bg-beePrimary-normal rounded-full mr-3"></div>
              Table of Contents
            </h3>
            <nav className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {[
                { title: t('legal.privacyPolicy.introduction.title'), id: 'introduction' },
                { title: t('legal.privacyPolicy.dataCollection.title'), id: 'data-collection' },
                { title: t('legal.privacyPolicy.dataUsage.title'), id: 'data-usage' },
                { title: t('legal.privacyPolicy.dataSharing.title'), id: 'data-sharing' },
                { title: t('legal.privacyPolicy.dataProtection.title'), id: 'data-protection' },
                { title: t('legal.privacyPolicy.userRights.title'), id: 'user-rights' },
                { title: t('legal.privacyPolicy.changes.title'), id: 'changes' },
                { title: t('legal.privacyPolicy.contact.title'), id: 'contact' }
              ].map((section, index) => (
                <a
                  key={index}
                  href={`#${section.id}`}
                  className="flex items-center p-3 rounded-lg hover:bg-beePrimary-normal/5 transition-colors group"
                >
                  <span className="w-6 h-6 bg-beePrimary-normal/10 rounded-full flex items-center justify-center text-xs font-medium text-beePrimary-normal mr-3 group-hover:bg-beePrimary-normal group-hover:text-white transition-colors">
                    {index + 1}
                  </span>
                  <span className="text-gray-700 group-hover:text-beePrimary-normal transition-colors">
                    {section.title}
                  </span>
                </a>
              ))}
            </nav>
          </div>

          {/* Content */}
          <div className="space-y-8">
            {/* Introduction */}
            <section id="introduction" className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 scroll-mt-32">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-beePrimary-normal/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-beePrimary-normal font-bold">1</span>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-beePrimary-normal mb-4">
                    1. {t('legal.privacyPolicy.introduction.title')}
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    {t('legal.privacyPolicy.introduction.content')}
                  </p>
                </div>
              </div>
            </section>

            {/* Information We Collect */}
            <section id="data-collection" className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 scroll-mt-32">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-beePrimary-normal/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-beePrimary-normal font-bold">2</span>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-beePrimary-normal mb-4">
                    2. {t('legal.privacyPolicy.dataCollection.title')}
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {t('legal.privacyPolicy.dataCollection.content')}
                  </p>
                  {Array.isArray(t('legal.privacyPolicy.dataCollection.types')) && (
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      {t('legal.privacyPolicy.dataCollection.types').map((type: string, index: number) => (
                        <li key={index}>{type}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </section>

            {/* How We Use Your Information */}
            <section id="data-usage" className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 scroll-mt-32">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-beePrimary-normal/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-beePrimary-normal font-bold">3</span>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-beePrimary-normal mb-4">
                    3. {t('legal.privacyPolicy.dataUsage.title')}
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {t('legal.privacyPolicy.dataUsage.content')}
                  </p>
                  {Array.isArray(t('legal.privacyPolicy.dataUsage.purposes')) && (
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      {t('legal.privacyPolicy.dataUsage.purposes').map((purpose: string, index: number) => (
                        <li key={index}>{purpose}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </section>

            {/* Information Sharing */}
            <section id="data-sharing" className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 scroll-mt-32">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-beePrimary-normal/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-beePrimary-normal font-bold">4</span>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-beePrimary-normal mb-4">
                    4. {t('legal.privacyPolicy.dataSharing.title')}
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    {t('legal.privacyPolicy.dataSharing.content')}
                  </p>
                </div>
              </div>
            </section>

            {/* Data Security */}
            <section id="data-protection" className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 scroll-mt-32">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-beePrimary-normal/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-beePrimary-normal font-bold">5</span>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-beePrimary-normal mb-4">
                    5. {t('legal.privacyPolicy.dataProtection.title')}
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    {t('legal.privacyPolicy.dataProtection.content')}
                  </p>
                </div>
              </div>
            </section>

            {/* Your Rights */}
            <section id="user-rights" className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 scroll-mt-32">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-beePrimary-normal/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-beePrimary-normal font-bold">6</span>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-beePrimary-normal mb-4">
                    6. {t('legal.privacyPolicy.userRights.title')}
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {t('legal.privacyPolicy.userRights.content')}
                  </p>
                  {Array.isArray(t('legal.privacyPolicy.userRights.rights')) && (
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      {t('legal.privacyPolicy.userRights.rights').map((right: string, index: number) => (
                        <li key={index}>{right}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </section>

            {/* Changes to This Policy */}
            <section id="changes" className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 scroll-mt-32">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-beePrimary-normal/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-beePrimary-normal font-bold">7</span>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-beePrimary-normal mb-4">
                    7. {t('legal.privacyPolicy.changes.title')}
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    {t('legal.privacyPolicy.changes.content')}
                  </p>
                </div>
              </div>
            </section>

            {/* Contact Us */}
            <section id="contact" className="bg-gradient-to-br from-beePrimary-normal/5 to-beeSecondary-normal/5 rounded-2xl shadow-lg border border-beePrimary-normal/20 p-8 scroll-mt-32">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-beePrimary-normal rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">8</span>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-beePrimary-normal mb-4">
                    8. {t('legal.privacyPolicy.contact.title')}
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {t('legal.privacyPolicy.contact.content')}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="mailto:contact@beecoders.club"
                      className="inline-flex items-center px-6 py-3 bg-beePrimary-normal text-white font-medium rounded-lg hover:bg-beePrimary-dark transition-colors duration-200"
                    >
                      📧 Email Us
                    </a>
                    <a
                      href="#contact"
                      className="inline-flex items-center px-6 py-3 border-2 border-beePrimary-normal text-beePrimary-normal font-medium rounded-lg hover:bg-beePrimary-normal hover:text-white transition-colors duration-200"
                    >
                      💬 Contact Form
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Navigation */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mt-12 pt-8 border-t border-gray-200">
            <Link 
              href={`/${locale}`}
              className="inline-flex items-center px-6 py-3 border-2 border-beePrimary-normal text-beePrimary-normal font-medium rounded-lg hover:bg-beePrimary-normal hover:text-white transition-all duration-200 group"
            >
              <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
              Back to Home
            </Link>
            
            <div className="flex items-center space-x-4">
              <Link 
                href={`/${locale}/terms-of-service`}
                className="inline-flex items-center px-6 py-3 bg-beePrimary-normal text-white font-medium rounded-lg hover:bg-beePrimary-dark transition-colors duration-200 group"
              >
                Terms of Service
                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </StaticLayout>
  );
}
