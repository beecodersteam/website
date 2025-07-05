'use client'

import { useState, useEffect } from 'react'
import { useOnlineStatus } from '@/lib/hooks/useOnlineStatus'

interface OfflineFormProps {
  children: React.ReactNode
  onSubmit: (data: FormData) => Promise<void>
  className?: string
}

export default function OfflineFormWrapper({ children, onSubmit, className }: OfflineFormProps) {
  const isOnline = useOnlineStatus()
  const [pendingSubmissions, setPendingSubmissions] = useState<FormData[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    // Load pending submissions from localStorage
    const stored = localStorage.getItem('pending-form-submissions')
    if (stored) {
      try {
        const parsed = JSON.parse(stored)
        setPendingSubmissions(parsed)
      } catch (error) {
        console.error('Failed to parse pending submissions:', error)
      }
    }
  }, [])

  useEffect(() => {
    // Auto-submit pending forms when back online
    if (isOnline && pendingSubmissions.length > 0) {
      processPendingSubmissions()
    }
  }, [isOnline, pendingSubmissions])

  const processPendingSubmissions = async () => {
    if (isSubmitting) return
    
    setIsSubmitting(true)
    const remaining = [...pendingSubmissions]

    for (let i = 0; i < remaining.length; i++) {
      try {
        await onSubmit(remaining[i])
        // Remove successful submission
        remaining.splice(i, 1)
        i-- // Adjust index after removal
      } catch (error) {
        console.error('Failed to submit pending form:', error)
        break // Stop processing on error
      }
    }

    setPendingSubmissions(remaining)
    localStorage.setItem('pending-form-submissions', JSON.stringify(remaining))
    setIsSubmitting(false)

    if (remaining.length === 0) {
      // All submissions successful
      console.log('All pending submissions processed successfully')
    }
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)

    if (isOnline) {
      try {
        await onSubmit(formData)
        form.reset()
      } catch (error) {
        console.error('Form submission failed:', error)
        // Store for later if network error
        savePendingSubmission(formData)
      }
    } else {
      // Save for when back online
      savePendingSubmission(formData)
      form.reset()
      alert('Formulário salvo! Será enviado automaticamente quando você voltar online.')
    }
  }

  const savePendingSubmission = (formData: FormData) => {
    // Convert FormData to plain object for storage
    const data: Record<string, string> = {}
    formData.forEach((value, key) => {
      data[key] = value.toString()
    })

    const updated = [...pendingSubmissions, formData]
    setPendingSubmissions(updated)
    
    // Store in localStorage
    const dataToStore = updated.map(fd => {
      const obj: Record<string, string> = {}
      fd.forEach((value, key) => {
        obj[key] = value.toString()
      })
      return obj
    })
    localStorage.setItem('pending-form-submissions', JSON.stringify(dataToStore))
  }

  return (
    <div className={className}>
      {!isOnline && pendingSubmissions.length > 0 && (
        <div className="mb-4 p-3 bg-yellow-100 border border-yellow-300 rounded-lg">
          <p className="text-sm text-yellow-800">
            {pendingSubmissions.length} formulário(s) pendente(s). 
            Serão enviados automaticamente quando voltar online.
          </p>
        </div>
      )}
      
      {isSubmitting && (
        <div className="mb-4 p-3 bg-blue-100 border border-blue-300 rounded-lg">
          <p className="text-sm text-blue-800">
            Enviando formulários pendentes...
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        {children}
      </form>
    </div>
  )
}
