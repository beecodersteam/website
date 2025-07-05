'use client'

import { useOnlineStatus } from '@/lib/hooks/useOnlineStatus'
import { WifiIcon, XMarkIcon } from '@heroicons/react/24/outline'

export default function OfflineNotification() {
  const isOnline = useOnlineStatus()

  if (isOnline) return null

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-yellow-500 text-white">
      <div className="max-w-7xl mx-auto px-4 py-2">
        <div className="flex items-center justify-center gap-2 text-sm">
          <XMarkIcon className="w-4 h-4 text-red-200" />
          <span>Você está offline. Algumas funcionalidades podem estar limitadas.</span>
          <WifiIcon className="w-4 h-4 text-red-200" />
        </div>
      </div>
    </div>
  )
}
