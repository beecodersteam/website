'use client';

import { useTranslation } from '@/lib/i18n';
import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { BR, US, ES, FR } from 'country-flag-icons/react/3x2';
import { useState } from 'react';

const languages = [
  { code: 'en' as const, name: 'English', flag: <US className="w-5 h-5" /> },
  { code: 'pt' as const, name: 'Português', flag: <BR className="w-5 h-5" /> },
  { code: 'es' as const, name: 'Español', flag: <ES className="w-5 h-5" /> },
  { code: 'fr' as const, name: 'Français', flag: <FR className="w-5 h-5" /> },
];

export default function MobileLanguageSelector() {
  const { locale, changeLocale } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  
  const currentLanguage = languages.find(l => l.code === locale) || languages[0];

  const handleLanguageChange = async (newLocale: typeof languages[0]['code']) => {
    await changeLocale(newLocale);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-beePrimary-light/10 hover:bg-beePrimary-light/20 transition-colors duration-200"
      >
        <GlobeAltIcon className="w-4 h-4 text-beePrimary-normal" />
        <span className="text-sm text-beePrimary-normal">{currentLanguage.flag}</span>
        <span className="text-sm text-beePrimary-normal font-medium">{currentLanguage.name}</span>
      </button>
      
      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 w-48 bg-white rounded-lg shadow-lg border z-20">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`w-full text-left px-4 py-3 hover:bg-beePrimary-light/10 transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg flex items-center space-x-3 ${
                  locale === lang.code ? 'bg-beePrimary-light/20 text-beePrimary-dark' : 'text-gray-700'
                }`}
              >
                <span className="text-lg">{lang.flag}</span>
                <span className="font-medium">{lang.name}</span>
                {locale === lang.code && (
                  <span className="ml-auto w-2 h-2 bg-beePrimary-normal rounded-full"></span>
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
