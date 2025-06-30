'use client';

import { useTranslation } from '@/lib/i18n';
import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { BR, US, ES, FR } from 'country-flag-icons/react/3x2';

const languages = [
  { code: 'en' as const, name: 'English', flag: <US className="w-5 h-5 text-white" /> },
  { code: 'pt' as const, name: 'Português', flag: <BR className="w-5 h-5 text-white" /> },
  { code: 'es' as const, name: 'Español', flag: <ES className="w-5 h-5 text-white" /> },
  { code: 'fr' as const, name: 'Français', flag: <FR className="w-5 h-5 text-white" /> },
];

export default function LanguageSelector() {
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
        className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
        aria-label="Select language"
      >
        <GlobeAltIcon className="w-4 h-4 text-white" />
        <span className="text-sm text-white">{currentLanguage.flag}</span>
        {/* <span className="text-sm text-white hidden sm:block">{currentLanguage.code.toUpperCase()}</span> */}
      </button>
      
      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown */}
          <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg border z-20">
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
