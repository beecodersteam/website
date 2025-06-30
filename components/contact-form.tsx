'use client'

import { useState } from 'react'
import { ArrowPathIcon } from '@heroicons/react/24/outline'
import { useTranslation } from '@/lib/i18n'
import AnimatedBackground from './ui/AnimatedBackground'
import SectionTitle from './ui/SectionTitle'
import SectionSubtitle from './ui/SectionSubtitle'

// Discord Webhook URL hardcoded para build estático
const WEBHOOK_ID = '1388860914454757519'
const WEBHOOK_TOKEN = '7JiCfvj5yc_zLwhMen8IrnPCx5ZVqnize9MIsmYNZVAI9J7pvTVil-Xd0uIwp-E5w3dj'
const DISCORD_WEBHOOK_URL = `https://discord.com/api/webhooks/${WEBHOOK_ID}/${WEBHOOK_TOKEN}`

export default function ContactForm() {
  const { t } = useTranslation('sections');
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Basic validation
    if (!formData.email || !formData.message) {
      setStatus('error')
      setErrorMessage(String(t('contact.form.validation.fillAllFields')))
      return
    }

    if (!formData.email.includes('@')) {
      setStatus('error')
      setErrorMessage(String(t('contact.form.validation.validEmail')))
      return
    }

    setIsLoading(true)
    setStatus('idle')
    setErrorMessage('')

    try {
      // Create Discord embed message
      const embed = {
        title: "🐝 New Contact Form Submission - Bee Coders",
        color: 0xFFA500, // Orange color matching Bee Coders theme
        fields: [
          {
            name: "📧 Email",
            value: formData.email,
            inline: true
          },
          {
            name: "💬 Message",
            value: formData.message,
            inline: false
          },
          {
            name: "⏰ Timestamp",
            value: new Date().toLocaleString(),
            inline: true
          }
        ],
        footer: {
          text: "Bee Coders Contact Form",
          icon_url: "https://your-domain.com/images/logos/mini/logo-horiz-black.png"
        },
        timestamp: new Date().toISOString()
      }

      const response = await fetch(DISCORD_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: "Bee Coders Contact Form",
          avatar_url: "https://your-domain.com/images/logos/mini/logo-horiz-black.png",
          embeds: [embed]
        })
      })

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('Discord webhook not found. Please check the webhook URL.')
        }
        throw new Error(`Failed to send message: ${response.status} ${response.statusText}`)
      }

      setStatus('success')
      setFormData({ email: '', message: '' }) // Clear form

    } catch (error) {
      console.error('Error sending email:', error)
      setStatus('error')
      setErrorMessage(error instanceof Error ? error.message : String(t('contact.form.validation.sendError')))
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-beePrimary-normal/5 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6" id="contact">


        {/* CTA box */}
        <div className="relative bg-gradient-to-br from-beePrimary-normal to-beePrimary-dark rounded-3xl py-12 px-8 md:py-16 md:px-16 shadow-2xl overflow-hidden backdrop-blur-sm border border-beePrimary-light/20" data-aos="zoom-y-out">

          {/* Enhanced Background illustration */}
          <div className="absolute right-0 bottom-0 pointer-events-none hidden lg:block opacity-30" aria-hidden="true">
            <svg width="428" height="328" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <radialGradient cx="35.542%" cy="34.553%" fx="35.542%" fy="34.553%" r="96.031%" id="ni-a">
                  <stop stopColor="#DFDFDF" offset="0%" />
                  <stop stopColor="#4C4C4C" offset="44.317%" />
                  <stop stopColor="#333" offset="100%" />
                </radialGradient>
              </defs>
              <g fill="none" fillRule="evenodd">
                <g fill="#FBC700">
                  <ellipse fillOpacity=".08" cx="185" cy="15.576" rx="16" ry="15.576" />
                  <ellipse fillOpacity=".24" cx="100" cy="68.402" rx="24" ry="23.364" />
                  <ellipse fillOpacity=".12" cx="29" cy="251.231" rx="29" ry="28.231" />
                  <ellipse fillOpacity=".64" cx="29" cy="251.231" rx="8" ry="7.788" />
                  <ellipse fillOpacity=".12" cx="342" cy="31.303" rx="8" ry="7.788" />
                  <ellipse fillOpacity=".48" cx="62" cy="126.811" rx="2" ry="1.947" />
                  <ellipse fillOpacity=".12" cx="78" cy="7.072" rx="2" ry="1.947" />
                  <ellipse fillOpacity=".64" cx="185" cy="15.576" rx="6" ry="5.841" />
                </g>
                <circle fill="#FBC700" fillOpacity="0.15" cx="276" cy="237" r="200" />
              </g>
            </svg>
          </div>
          <AnimatedBackground
            hexagonCount={3}
            hexagonColor="text-beeSecondary-normal"
            backgroundColors={{
              from: "from-beePrimary-normal/10",
              via: "none",
              to: "to-beePrimary-normal/10"
            }}
          />

          {/* Floating decoration elements */}
          <div className="absolute top-8 left-8 w-16 h-16 bg-beeSecondary-normal/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-8 right-20 w-12 h-12 bg-white/10 rounded-full blur-lg animate-pulse" style={{ animationDelay: '1s' }}></div>

          <div className="relative flex flex-col lg:flex-row justify-between items-center">

            {/* Enhanced CTA content */}
            <div className="text-center lg:text-left lg:max-w-xl mb-8 lg:mb-0">
              <SectionTitle
                title={String(t('contact.title'))}
                id="contact"
                variant="left"
                color='text-white'
              />

              <SectionSubtitle
                text={String(t('contact.subtitle'))}
                variant="left"
                animationDelay={300}
                color='text-white/90'
                className="mb-6"
              />

              {/* Enhanced CTA form */}
              <form className="w-full lg:w-auto" onSubmit={handleSubmit}>
                <div className="flex flex-col justify-center max-w-md mx-auto lg:mx-0">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full appearance-none bg-white/95 backdrop-blur-sm border-2 border-white/20 focus:border-beeSecondary-normal focus:ring-4 focus:ring-beeSecondary-normal/30 rounded-2xl px-5 py-4 mb-4 h-32 text-gray-900 placeholder-gray-500 resize-none transition-all duration-300 shadow-lg focus:shadow-xl font-medium"
                    placeholder={String(t('contact.form.messagePlaceholder'))}
                    aria-label={String(t('contact.form.messagePlaceholder'))}
                    disabled={isLoading}
                    required
                  />
                </div>
                <div className="flex flex-col sm:flex-row justify-center max-w-md mx-auto lg:mx-0 gap-3">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="flex-1 appearance-none bg-white/95 backdrop-blur-sm border-2 border-white/20 focus:border-beeSecondary-normal focus:ring-4 focus:ring-beeSecondary-normal/30 rounded-2xl px-5 py-4 text-gray-900 placeholder-gray-500 transition-all duration-300 shadow-lg focus:shadow-xl font-medium"
                    placeholder={String(t('contact.form.emailPlaceholder'))}
                    aria-label={String(t('contact.form.emailPlaceholder'))}
                    disabled={isLoading}
                    required
                  />
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="bg-gradient-to-r from-beeSecondary-normal to-beeSecondary-dark hover:from-beeSecondary-dark hover:to-beeSecondary-darker text-beePrimary-dark font-bold py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center min-w-[120px] transition-all duration-300"
                  >
                    {isLoading ? (
                      <>
                        <ArrowPathIcon className="animate-spin h-5 w-5 mr-2" />
                        <span>Enviando...</span>
                      </>
                    ) : (
                      <>
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                        {t('contact.form.sendButton')}
                      </>
                    )}
                  </button>
                </div>

                {/* Enhanced Status messages */}
                {status === 'success' && (
                  <div className="max-w-md mx-auto lg:mx-0 mt-6 p-4 bg-green-500/20 backdrop-blur-sm border border-green-400/30 rounded-2xl">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-100">Mensagem enviada!</h4>
                        <p className="text-sm text-green-200">{t('contact.form.successMessage')}</p>
                      </div>
                    </div>
                  </div>
                )}
                {status === 'error' && (
                  <div className="max-w-md mx-auto lg:mx-0 mt-6 p-4 bg-red-500/20 backdrop-blur-sm border border-red-400/30 rounded-2xl">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-red-100">Erro ao enviar</h4>
                        <p className="text-sm text-red-200">{errorMessage}</p>
                      </div>
                    </div>
                  </div>
                )}
                {status === 'idle' && !isLoading && (
                  <div className="max-w-md mx-auto lg:mx-0 mt-6 p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl">
                    <p className="text-sm text-white/80 text-center flex items-center justify-center">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {t('contact.form.defaultMessage')}
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}