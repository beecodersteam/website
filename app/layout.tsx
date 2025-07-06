import { SpeedInsights } from "@vercel/speed-insights/next"
import { I18nProvider } from '@/lib/i18n'
import { staticMetadata, staticViewport } from '@/lib/seo-i18n'
import { THEME_COLOR } from '@/lib/icon-config'
import LanguageDetector from '@/components/LanguageDetector'
import './css/style.css'

export const metadata = staticMetadata;
export const viewport = staticViewport;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Basic meta tags for client-side SEO enhancement */}
        <meta name="robots" content="index, follow" />
        
        {/* PWA meta tags (não cobertos pelos metadados automáticos) */}
        <meta name="application-name" content="Bee Coders" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Bee Coders" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content={THEME_COLOR} />
        <meta name="msapplication-tap-highlight" content="no" />
        
        {/* Language alternatives - will be enhanced client-side */}
        <link rel="alternate" hrefLang="en" href="https://www.beecoders.club" />
        <link rel="alternate" hrefLang="pt" href="https://www.beecoders.club?lang=pt" />
        <link rel="alternate" hrefLang="es" href="https://www.beecoders.club?lang=es" />
        <link rel="alternate" hrefLang="fr" href="https://www.beecoders.club?lang=fr" />
        <link rel="alternate" hrefLang="x-default" href="https://www.beecoders.club" />
        
        {/* Structured data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Bee Coders",
              "url": "https://www.beecoders.club",
              "logo": "https://www.beecoders.club/images/optimized/logos/logo-horiz-black.png",
              "description": "A vibrant and collaborative community of developers around the world, working together to drive innovation and technical excellence in software development.",
              "sameAs": [
                "https://github.com/beecoders",
                "https://linkedin.com/company/beecoders"
              ]
            })
          }}
        />
      </head>
      <body className={`font-roboto antialiased bg-white text-gray-900 tracking-tight`}>
        <LanguageDetector />
        <I18nProvider>
          <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
            {children}
            {process.env.NODE_ENV === 'production' && <SpeedInsights />}
          </div>
        </I18nProvider>
      </body>
    </html>
  )
}