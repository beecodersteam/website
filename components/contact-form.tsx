'use client'

import { useState } from 'react'

// External API URL - configure here
const API_URL = 'https://formspree.io/f/xanjjzqp'

export default function ContactForm() {
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
      setErrorMessage('Please fill in all fields.')
      return
    }

    if (!formData.email.includes('@')) {
      setStatus('error')
      setErrorMessage('Please enter a valid email.')
      return
    }

    setIsLoading(true)
    setStatus('idle')
    setErrorMessage('')

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          message: formData.message,
          timestamp: new Date().toISOString()
        })
      })

      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`)
      }

      const result = await response.json()
      
      setStatus('success')
      setFormData({ email: '', message: '' }) // Clear form
      
    } catch (error) {
      console.error('Error sending email:', error)
      setStatus('error')
      setErrorMessage(error instanceof Error ? error.message : 'Error sending message. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 session" id="contact">
        <div className="pb-12 md:pb-20">

          {/* CTA box */}
          <div className="relative bg-beePrimary-normal rounded py-10 px-8 md:py-16 md:px-12 shadow-2xl overflow-hidden" data-aos="zoom-y-out">

            {/* Background illustration */}
            <div className="absolute right-0 bottom-0 pointer-events-none hidden lg:block" aria-hidden="true">
              <svg width="428" height="328" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <radialGradient cx="35.542%" cy="34.553%" fx="35.542%" fy="34.553%" r="96.031%" id="ni-a">
                    <stop stopColor="#DFDFDF" offset="0%" />
                    <stop stopColor="#4C4C4C" offset="44.317%" />
                    <stop stopColor="#333" offset="100%" />
                  </radialGradient>
                </defs>
                <g fill="none" fillRule="evenodd">
                  <g fill="yellow">
                    <ellipse fillOpacity=".04" cx="185" cy="15.576" rx="16" ry="15.576" />
                    <ellipse fillOpacity=".24" cx="100" cy="68.402" rx="24" ry="23.364" />
                    <ellipse fillOpacity=".12" cx="29" cy="251.231" rx="29" ry="28.231" />
                    <ellipse fillOpacity=".64" cx="29" cy="251.231" rx="8" ry="7.788" />
                    <ellipse fillOpacity=".12" cx="342" cy="31.303" rx="8" ry="7.788" />
                    <ellipse fillOpacity=".48" cx="62" cy="126.811" rx="2" ry="1.947" />
                    <ellipse fillOpacity=".12" cx="78" cy="7.072" rx="2" ry="1.947" />
                    <ellipse fillOpacity=".64" cx="185" cy="15.576" rx="6" ry="5.841" />
                  </g>
                  <circle fill="#FBC700" cx="276" cy="237" r="200" />
                </g>
              </svg>
            </div>

            <div className="relative flex flex-col lg:flex-row justify-between items-center">

              {/* CTA content */}
              <div className="text-center lg:text-left lg:max-w-xl">
                <h3 className="h3 text-white mb-2">Got something to say?</h3>
                <p className="text-gray-300 text-lg mb-6">Send us a message. We can't wait to hear from you.</p>

                {/* CTA form */}
                <form className="w-full lg:w-auto" onSubmit={handleSubmit}>
                  <div className="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md lg:mx-0">
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="form-input w-full appearance-none bg-white border border-gray-300 focus:border-beePrimary-light focus:ring-2 focus:ring-beePrimary-light rounded-md px-4 py-3 mb-2 h-24 text-gray-900 placeholder-gray-500 resize-none" 
                      placeholder="Your message…" 
                      aria-label="Your message…"
                      disabled={isLoading}
                      required
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md lg:mx-0">
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-input w-full appearance-none bg-white border border-gray-300 focus:border-beePrimary-light focus:ring-2 focus:ring-beePrimary-light rounded-md px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-gray-900 placeholder-gray-500" 
                      placeholder="Your email…" 
                      aria-label="Your email…"
                      disabled={isLoading}
                      required
                    />
                    <button 
                      type="submit"
                      disabled={isLoading}
                      className="btn text-beePrimary-normal bg-beeSecondary-normal hover:bg-beeSecondary-dark shadow rounded-md disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center min-w-[80px]"
                    >
                      {isLoading ? (
                        <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                      ) : (
                        'Send'
                      )}
                    </button>
                  </div>

                  {/* Status messages */}
                  {status === 'success' && (
                    <p className="text-sm text-green-300 mt-3">✓ Message sent successfully! We'll respond shortly.</p>
                  )}
                  {status === 'error' && (
                    <p className="text-sm text-red-400 mt-3">✗ {errorMessage}</p>
                  )}
                  {status === 'idle' && !isLoading && (
                    <p className="text-sm text-gray-300 mt-3">We'll respond as soon as possible.</p>
                  )}
                </form>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  )
}