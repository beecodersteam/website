'use client'

import { useState } from 'react'
import { ArrowPathIcon } from '@heroicons/react/24/outline'
import { type Locale } from '@/lib/static-translations'
import AnimatedBackground from '../ui/AnimatedBackground'
import SectionTitle from '../ui/SectionTitle'
import SectionSubtitle from '../ui/SectionSubtitle'

// Discord Webhook URL hardcoded para build estático
const WEBHOOK_ID = '1388860914454757519'
const WEBHOOK_TOKEN = '7JiCfvj5yc_zLwhMen8IrnPCx5ZVqnize9MIsmYNZVAI9J7pvTVil-Xd0uIwp-E5w3dj'
const DISCORD_WEBHOOK_URL = `https://discord.com/api/webhooks/${WEBHOOK_ID}/${WEBHOOK_TOKEN}`

interface StaticContactProps {
  locale: Locale
  translations: Record<string, any>
}

export default function StaticContact({ translations, locale }: StaticContactProps) {
  const t = (key: string) => {
    const keys = key.split('.');
    let value = translations.sections;
    for (const k of keys) {
      value = value?.[k];
    }
    return value || key;
  };

  const [formData, setFormData] = useState({
    email: '',
    message: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Reset status
    setStatus('idle')
    setErrorMessage('')

    // Validation
    if (!formData.email.trim()) {
      setStatus('error')
      setErrorMessage(t('contact.form.validation.fillAllFields'))
      return
    }

    if (!validateEmail(formData.email)) {
      setStatus('error')
      setErrorMessage(t('contact.form.validation.validEmail'))
      return
    }

    if (!formData.message.trim()) {
      setStatus('error')
      setErrorMessage(t('contact.form.validation.fillAllFields'))
      return
    }

    if (formData.message.trim().length < 10) {
      setStatus('error')
      setErrorMessage(t('contact.form.validation.fillAllFields'))
      return
    }

    setIsLoading(true)

    try {
      // Create Discord embed
      const embed = {
        title: "📨 Nova Mensagem do Site",
        color: 0x8B5CF6,
        fields: [
          {
            name: "Email",
            value: formData.email,
            inline: true
          },
          {
            name: "Idioma",
            value: locale.toUpperCase(),
            inline: true
          },
          {
            name: "Mensagem",
            value: formData.message.length > 1000 
              ? formData.message.substring(0, 1000) + '...' 
              : formData.message,
            inline: false
          }
        ],
        timestamp: new Date().toISOString(),
        footer: {
          text: "Bee Coders Website"
        }
      }

      const response = await fetch(DISCORD_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          embeds: [embed]
        })
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ email: '', message: '' })
      } else {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
    } catch (error) {
      console.error('Error sending message:', error)
      setStatus('error')
      setErrorMessage(t('contact.form.validation.sendError'))
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="relative py-20 bg-gradient-to-br from-beePrimary-dark to-beePrimary-light overflow-hidden">
      {/* Background decorative elements */}
      <AnimatedBackground
        hexagonCount={12}
        hexagonColor="bg-white/10"
        backgroundColors={{
          from: "from-white/5",
          via: "via-beePrimary-normal/20",
          to: "to-white/5"
        }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <SectionTitle
          title={String(t('contact.title'))}
          id="contact"
          variant="centered"
          className="text-white"
        />
        <SectionSubtitle
          text={t('contact.subtitle')}
          variant="centered"
          className="text-white/90 mb-12"
          animationDelay={200}
        />

        {/* Contact form */}
        <div className="max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="300">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white mb-2"
              >
                Email <span className="text-red-300">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all"
                placeholder={t('contact.form.emailPlaceholder')}
                disabled={isLoading}
              />
            </div>

            {/* Message field */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-white mb-2"
              >
                Message <span className="text-red-300">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all resize-none"
                placeholder={t('contact.form.messagePlaceholder')}
                disabled={isLoading}
              />
            </div>

            {/* Status messages */}
            {status === 'error' && (
              <div className="p-4 rounded-lg bg-red-500/20 border border-red-400/30">
                <p className="text-red-200 text-sm">{errorMessage}</p>
              </div>
            )}

            {status === 'success' && (
              <div className="p-4 rounded-lg bg-green-500/20 border border-green-400/30">
                <p className="text-green-200 text-sm">{t('contact.form.successMessage')}</p>
              </div>
            )}

            {/* Submit button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex items-center justify-center px-8 py-4 bg-white text-beePrimary-dark font-semibold rounded-lg hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-beePrimary-dark transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <ArrowPathIcon className="w-5 h-5 mr-2 animate-spin" />
                  Sending...
                </>
              ) : (
                t('contact.form.sendButton')
              )}
            </button>
          </form>

          {/* Additional info */}
          <div className="mt-8 text-center">
            <p className="text-white/70 text-sm">
              {t('contact.form.defaultMessage')}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
