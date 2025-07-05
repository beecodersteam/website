// PWA Configuration
export const PWA_CONFIG = {
  name: 'Bee Coders - Developer Community',
  shortName: 'Bee Coders',
  description: 'A vibrant and collaborative community of developers around the world, working together to drive innovation and technical excellence.',
  themeColor: '#6B1C8F',
  backgroundColor: '#ffffff',
  startUrl: '/',
  display: 'standalone',
  orientation: 'portrait-primary',
  scope: '/',
  
  // Cache strategies
  cacheStrategies: {
    images: 'CacheFirst',
    static: 'StaleWhileRevalidate',
    api: 'NetworkFirst',
    fonts: 'CacheFirst'
  },
  
  // Offline fallbacks
  offlineFallbacks: {
    document: '/offline.html',
    image: '/images/offline-placeholder.svg',
    audio: null,
    video: null,
    font: null
  },
  
  // Pre-cache files
  precacheFiles: [
    '/',
    '/manifest.json',
    '/offline.html',
    '/css/style.min.css'
  ],
  
  // Skip waiting
  skipWaiting: true,
  clientsClaim: true,
  
  // Background sync
  backgroundSync: {
    enabled: true,
    tags: ['contact-form', 'newsletter']
  },
  
  // Push notifications
  pushNotifications: {
    enabled: false, // Enable when ready
    vapidKey: process.env.NEXT_PUBLIC_VAPID_KEY
  }
}

export default PWA_CONFIG
