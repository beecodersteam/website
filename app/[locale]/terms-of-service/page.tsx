import { notFound } from 'next/navigation'
import { type Locale, locales, loadAllTranslations } from '@/lib/static-translations'
import { generateLegalMetadata } from '@/lib/page-metadata'
import StaticTermsOfService from '@/components/StaticTermsOfService'

interface PageProps {
  params: Promise<{
    locale: Locale
  }>
}

// Gera páginas estáticas para cada idioma
export async function generateStaticParams() {
  return locales.map(locale => ({ locale }))
}

// Gera metadata específica para cada idioma
export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params
  
  return generateLegalMetadata(locale, 'termsOfService', 'terms-of-service')
}

export default async function TermsOfServicePage({ params }: PageProps) {
  const { locale } = await params
  
  // Validar locale
  if (!locales.includes(locale)) {
    notFound()
  }

  // Carregar traduções estáticas durante o build
  const translations = loadAllTranslations(locale)
  
  return <StaticTermsOfService locale={locale} translations={translations} />
}
