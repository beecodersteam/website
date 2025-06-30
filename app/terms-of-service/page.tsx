'use client';

import { useEffect } from 'react';

export default function TermsOfService() {
  useEffect(() => {
    // Detectar idioma preferido e redirecionar para a versão localizada
    const browserLang = navigator.language.split('-')[0];
    const savedLocale = localStorage.getItem('preferredLocale');
    const detectedLocale = savedLocale || browserLang || 'en';
    const validLocale = ['en', 'pt', 'es', 'fr'].includes(detectedLocale) ? detectedLocale : 'en';
    
    // Redirecionar para a versão localizada
    window.location.href = `/${validLocale}/terms-of-service`;
  }, []);

  // Componente de carregamento enquanto redireciona
  return (
    <div className="min-h-screen flex items-center justify-center bg-beePrimary-dark">
      <div className="text-white text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-4"></div>
        <p>Redirecting...</p>
      </div>
    </div>
  );
}