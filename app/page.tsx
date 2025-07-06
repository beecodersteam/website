import { Metadata } from 'next'
import { getIconMetadata, getViewportConfig } from '@/lib/icon-config'
import ClientRedirect from './client-redirect'

// Metadados específicos para a página raiz usando App Router metadata API
// Server Component - permite export de metadata
export const metadata: Metadata = {
  title: 'Redirecting... | Bee Coders',
  description: 'Redirecting to your preferred language - Bee Coders',
  ...getIconMetadata(), // Inclui favicon, apple-touch-icon e outros ícones
}

// Viewport configuration com themeColor (seguindo padrão App Router)
export const viewport = getViewportConfig()

// Server Component que renderiza o Client Component de redirecionamento
export default function Home() {
  return <ClientRedirect />
}

