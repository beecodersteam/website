import { locales } from '@/lib/static-translations'

// Gera layouts estáticos para cada idioma
export async function generateStaticParams() {
  return locales.map(locale => ({ locale }))
}

export default function LocaleLayout({ 
  children
}: { 
  children: React.ReactNode
}) {
  return children
}
