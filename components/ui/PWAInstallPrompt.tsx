'use client'

import { useState, useEffect } from 'react'
import { XMarkIcon } from '@heroicons/react/24/outline'

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[]
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed'
    platform: string
  }>
  prompt(): Promise<void>
}

export default function PWAInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null)
  const [showInstallPrompt, setShowInstallPrompt] = useState(false)
  const [isIOS, setIsIOS] = useState(false)
  const [isStandalone, setIsStandalone] = useState(false)

  useEffect(() => {
    // Check if device is iOS
    const isIOSDevice = /iPad|iPhone|iPod/.test(navigator.userAgent)
    setIsIOS(isIOSDevice)

    // Check if app is already installed (standalone mode)
    const isInStandaloneMode = () => 
      (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches) ||
      (navigator as any).standalone ||
      document.referrer.includes('android-app://')

    setIsStandalone(isInStandaloneMode())

    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault()
      setDeferredPrompt(e as BeforeInstallPromptEvent)
      
      // Show install prompt after a delay if not already dismissed
      const installDismissed = localStorage.getItem('pwa-install-dismissed')
      if (!installDismissed && !isInStandaloneMode()) {
        setTimeout(() => setShowInstallPrompt(true), 3000)
      }
    }

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt)

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
    }
  }, [])

  const handleInstallClick = async () => {
    if (!deferredPrompt) return

    deferredPrompt.prompt()
    const { outcome } = await deferredPrompt.userChoice
    
    if (outcome === 'accepted') {
      setDeferredPrompt(null)
      setShowInstallPrompt(false)
    }
  }

  const handleDismiss = () => {
    setShowInstallPrompt(false)
    localStorage.setItem('pwa-install-dismissed', 'true')
  }

  // Don't show if already installed or dismissed
  if (isStandalone || !showInstallPrompt) return null

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-sm">
      <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-4">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="text-sm font-semibold text-gray-900 mb-1">
              Instalar Bee Coders
            </h3>
            <p className="text-xs text-gray-600 mb-3">
              {isIOS 
                ? "Adicione à tela inicial para acesso rápido" 
                : "Instale nosso app para uma experiência melhor"
              }
            </p>
            
            {isIOS ? (
              <div className="text-xs text-gray-500">
                Toque em <span className="inline-block mx-1">📤</span> e depois em "Adicionar à Tela Inicial"
              </div>
            ) : (
              <div className="flex gap-2">
                <button
                  onClick={handleInstallClick}
                  className="bg-purple-600 text-white text-xs px-3 py-1.5 rounded hover:bg-purple-700 transition-colors"
                >
                  Instalar
                </button>
                <button
                  onClick={handleDismiss}
                  className="text-gray-500 text-xs px-3 py-1.5 rounded hover:text-gray-700 transition-colors"
                >
                  Agora não
                </button>
              </div>
            )}
          </div>
          
          <button
            onClick={handleDismiss}
            className="ml-2 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <XMarkIcon className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
