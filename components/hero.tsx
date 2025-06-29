"use client"
import { useState, useEffect } from 'react'
import { useTranslation } from '@/lib/i18n'
import VideoContainer from './video-banner'
import { ChatBubbleOvalLeftEllipsisIcon } from '@heroicons/react/24/solid';

const videos = [
    "backgrounds/office-group.mp4",
    "backgrounds/office-wood.mp4",
    "backgrounds/office-phone.mp4",
    "backgrounds/office-toghether.mp4",
    "backgrounds/office-agreement.mp4",
    "backgrounds/network-blacklines.mp4",
];

function getRandomVideo() {
  return videos[Math.floor(Math.random() * videos.length)];
}

export default function Hero() {
  const { t } = useTranslation('sections')
  const [videoSrc, setVideoSrc] = useState("") // fallback

  useEffect(() => {
    setVideoSrc(getRandomVideo())
  }, [])
  
  return (
    <VideoContainer videoSrc={videoSrc}>
      <div className='text-center'>
        <h1 className="text-3xl md:text-5xl text-white font-extrabold drop-shadow-md tracking-tighter mb-4" data-aos="zoom-in">
          {t('hero.title')} <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-beePrimary-lightest to-beeSecondary-dark">
            {t('hero.titleHighlight')}
          </span>
        </h1>
        <div className="max-w-3xl">
          <p className="text-md md:text-xl text-white mb-8" data-aos="zoom-y-out" data-aos-delay="200" data-aos-duration="500">
            {t('hero.subtitle', { components: [<strong key="b1" />] })}</p>
          <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
            <div>
              <a className="btn text-beePrimary-dark bg-beeSecondary-normal hover:bg-beeSecondary-light w-full sm:w-auto sm:ml-4" data-aos="fade-right" data-aos-duration="1200" data-aos-delay="300" href="#contact">
                <>
                    <ChatBubbleOvalLeftEllipsisIcon className="h-5 w-5 inline mr-2" />
                  {t('common:cta.contactUs')}
                </>
              </a>
            </div>
          </div>
        </div>
      </div>
    </VideoContainer>
  )
}
