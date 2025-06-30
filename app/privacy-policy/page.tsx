'use client';

import { useTranslation } from '@/lib/i18n';
import { ShieldCheckIcon, LockClosedIcon, EyeIcon } from '@heroicons/react/24/outline';
import { useEffect } from 'react';
import Link from 'next/link';
import SectionTitle from '@/components/ui/SectionTitle';
import SectionSubtitle from '@/components/ui/SectionSubtitle';

export default function PrivacyPolicy() {
  const { t } = useTranslation('legal');

  // Update document title and meta tags client-side
  useEffect(() => {
    document.title = `${t('privacyPolicy.title')} - Bee Coders`;
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', String(t('privacyPolicy.subtitle')));
  }, [t]);

  return (
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
            title={String(t('privacyPolicy.title'))}
            id="privacy-policy"
            variant="centered"
            className="mb-4"
          />
          <SectionSubtitle
            text={t('privacyPolicy.subtitle')}
            variant="centered"
            className="max-w-2xl mx-auto"
          />
          <p className="text-sm text-gray-500 mt-4">
            {t('privacyPolicy.lastUpdated')}
          </p>
        </div>

        {/* Content */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg border border-gray-200 p-8 md:p-12">
          <div className="prose prose-lg max-w-none">
            
            {/* Introduction */}
            <section className="mb-8">
              <h2 className="flex items-center text-2xl font-bold text-beePrimary-dark mb-4">
                <EyeIcon className="w-6 h-6 mr-3 text-beePrimary-normal" />
                {t('privacyPolicy.introduction.title')}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t('privacyPolicy.introduction.content')}
              </p>
            </section>

            {/* Information Collection */}
            <section className="mb-8">
              <h2 className="flex items-center text-2xl font-bold text-beePrimary-dark mb-4">
                <LockClosedIcon className="w-6 h-6 mr-3 text-beePrimary-normal" />
                {t('privacyPolicy.dataCollection.title')}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t('privacyPolicy.dataCollection.content')}
              </p>
              <ul className="space-y-2">
                {(() => {
                  const types = t('privacyPolicy.dataCollection.types', { returnObjects: true });
                  const typeArray = Array.isArray(types) ? types : [];
                  return typeArray.map((type, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-beePrimary-normal rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">{type}</span>
                    </li>
                  ));
                })()}
              </ul>
            </section>

            {/* How We Use Information */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-beePrimary-dark mb-4">
                {t('privacyPolicy.dataUsage.title')}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t('privacyPolicy.dataUsage.content')}
              </p>
              <ul className="space-y-2">
                {(() => {
                  const purposes = t('privacyPolicy.dataUsage.purposes', { returnObjects: true });
                  const purposeArray = Array.isArray(purposes) ? purposes : [];
                  return purposeArray.map((purpose, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-beePrimary-normal rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">{purpose}</span>
                    </li>
                  ));
                })()}
              </ul>
            </section>

            {/* Data Protection */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-beePrimary-dark mb-4">
                {t('privacyPolicy.dataProtection.title')}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t('privacyPolicy.dataProtection.content')}
              </p>
            </section>

            {/* Data Sharing */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-beePrimary-dark mb-4">
                {t('privacyPolicy.dataSharing.title')}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t('privacyPolicy.dataSharing.content')}
              </p>
            </section>

            {/* User Rights */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-beePrimary-dark mb-4">
                {t('privacyPolicy.userRights.title')}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t('privacyPolicy.userRights.content')}
              </p>
              <ul className="space-y-2">
                {(() => {
                  const rights = t('privacyPolicy.userRights.rights', { returnObjects: true });
                  const rightsArray = Array.isArray(rights) ? rights : [];
                  return rightsArray.map((right, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-beePrimary-normal rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">{right}</span>
                    </li>
                  ));
                })()}
              </ul>
            </section>

            {/* Contact Information */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-beePrimary-dark mb-4">
                {t('privacyPolicy.contact.title')}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t('privacyPolicy.contact.content')}
              </p>
              <div className="bg-beePrimary-light/10 rounded-xl p-6 border border-beePrimary-light/20">
                <p className="text-gray-700">
                  <strong>Email:</strong> contact@beecoders.club<br />
                  <strong>Telefone:</strong> +351 910 657 140
                </p>
              </div>
            </section>

            {/* Changes to Policy */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-beePrimary-dark mb-4">
                {t('privacyPolicy.changes.title')}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t('privacyPolicy.changes.content')}
              </p>
            </section>

          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-12">
          <Link 
            href="/" 
            className="inline-flex items-center px-6 py-3 bg-beePrimary-normal text-white rounded-xl hover:bg-beePrimary-dark transition-colors duration-300 font-medium"
          >
            ← {t('privacyPolicy.backToHome')}
          </Link>
        </div>
      </div>
    </div>
  );
}
