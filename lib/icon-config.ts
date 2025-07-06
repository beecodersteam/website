// Configuração centralizada de ícones para todas as páginas do site

// Constantes de tema
// NOTA: Esta cor também deve ser mantida sincronizada em:
// - public/manifest.json (theme_color)
// - tailwind.config.ts (beePrimary.normal)
export const THEME_COLOR = '#6B1C8F';

export const iconConfig = {
  // Ícones básicos do favicon
  favicon: [
    { url: '/favicon.ico' },
    { url: '/icons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    { url: '/icons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
  ],
  
  // Ícones Apple
  apple: [
    { url: '/icons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
  ],
  
  // Outros ícones para PWA e diferentes dispositivos
  other: [
    { rel: 'icon', url: '/icons/icon-72x72.png', sizes: '72x72', type: 'image/png' },
    { rel: 'icon', url: '/icons/icon-96x96.png', sizes: '96x96', type: 'image/png' },
    { rel: 'icon', url: '/icons/icon-128x128.png', sizes: '128x128', type: 'image/png' },
    { rel: 'icon', url: '/icons/icon-144x144.png', sizes: '144x144', type: 'image/png' },
    { rel: 'icon', url: '/icons/icon-152x152.png', sizes: '152x152', type: 'image/png' },
    { rel: 'icon', url: '/icons/icon-192x192.png', sizes: '192x192', type: 'image/png' },
    { rel: 'icon', url: '/icons/icon-384x384.png', sizes: '384x384', type: 'image/png' },
    { rel: 'icon', url: '/icons/icon-512x512.png', sizes: '512x512', type: 'image/png' },
  ],
}

// Links de ícones para uso em <head> quando necessário
export const iconLinks = [
  '<link rel="icon" href="/favicon.ico" />',
  '<link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />',
  '<link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />',
  '<link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />',
  '<link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />',
  `<meta name="theme-color" content="${THEME_COLOR}" />`,
  '<link rel="manifest" href="/manifest.json" />',
]

// Metadados completos de ícones para usar em generateMetadata
export const getIconMetadata = () => ({
  icons: {
    icon: iconConfig.favicon,
    apple: iconConfig.apple,
    other: iconConfig.other,
  },
  manifest: '/manifest.json',
})

// Configuração de viewport separada (incluindo themeColor)
export const getViewportConfig = () => ({
  themeColor: THEME_COLOR,
  width: 'device-width',
  initialScale: 1,
})

// Função para verificar se todos os ícones existem
export const validateIcons = () => {
  const allIcons = [
    ...iconConfig.favicon,
    ...iconConfig.apple,
    ...iconConfig.other,
  ]
  
  return allIcons.map(icon => ({
    url: icon.url,
    sizes: icon.sizes || 'default',
    type: icon.type || 'image/png',
  }))
}
