import { type Locale } from '@/lib/static-translations'

// Client-side translation loader que busca os arquivos JSON
export async function loadClientTranslations(locale: Locale): Promise<Record<string, any>> {
  try {
    const [common, sections, portfolio] = await Promise.all([
      fetch(`/locales/${locale}/common.json`).then(res => res.json()),
      fetch(`/locales/${locale}/sections.json`).then(res => res.json()),
      fetch(`/locales/${locale}/portfolio.json`).then(res => res.json())
    ])

    return {
      common,
      sections,
      portfolio
    }
  } catch (error) {
    console.error('Error loading translations:', error)
    // Fallback para inglês se houver erro
    const [common, sections, portfolio] = await Promise.all([
      fetch(`/locales/en/common.json`).then(res => res.json()),
      fetch(`/locales/en/sections.json`).then(res => res.json()),
      fetch(`/locales/en/portfolio.json`).then(res => res.json())
    ])

    return {
      common,
      sections,
      portfolio
    }
  }
}
