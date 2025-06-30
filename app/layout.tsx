import { SpeedInsights } from "@vercel/speed-insights/next"
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import { I18nProvider } from '@/lib/i18n'
import { staticMetadata } from '@/lib/seo-i18n'
import './css/style.css'

export const metadata = staticMetadata;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Basic meta tags for client-side SEO enhancement */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.png" />
        <meta name="robots" content="index, follow" />
        
        {/* Language alternatives - will be enhanced client-side */}
        <link rel="alternate" hrefLang="en" href="https://www.beecoders.club" />
        <link rel="alternate" hrefLang="pt" href="https://www.beecoders.club?lang=pt" />
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
              "logo": "https://www.beecoders.club/images/logos/logo-horiz-black.png",
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
        <I18nProvider>
          <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
            <Header />
            {children}
            <Footer />
            <SpeedInsights />
          </div>
        </I18nProvider>
      </body>
    </html>
  )
}