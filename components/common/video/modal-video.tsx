'use client'

import { useState, useRef, Fragment } from 'react'
import type { StaticImageData } from 'next/image'
import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image'
import { PlayIcon } from '@heroicons/react/24/solid'

interface ModalVideoProps {
  thumb: StaticImageData
  thumbWidth: number
  thumbHeight: number
  thumbAlt: string
  video: string
  videoWidth: number
  videoHeight: number
}

export default function ModalVideo({
  thumb,
  thumbWidth,
  thumbHeight,
  thumbAlt,
  video,
  videoWidth,
  videoHeight,
}: ModalVideoProps) {
  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  return (
    <div>

      {/* Video thumbnail */}
      <div>
        <div className="relative flex justify-center mb-8" data-aos="zoom-y-out" data-aos-delay="450">
          <div className="flex flex-col justify-center">
            <Image src={thumb} width={thumbWidth} height={thumbHeight} alt={thumbAlt} />
            <svg className="absolute inset-0 max-w-full mx-auto md:max-w-none h-auto" width="768" height="432" viewBox="0 0 768 432" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
              <defs>
                <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="hero-ill-a">
                  <stop stopColor="#FFF" offset="0%" />
                  <stop stopColor="#EAEAEA" offset="77.402%" />
                  <stop stopColor="#DFDFDF" offset="100%" />
                </linearGradient>
                <linearGradient x1="50%" y1="0%" x2="50%" y2="99.24%" id="hero-ill-b">
                  <stop stopColor="#FFF" offset="0%" />
                  <stop stopColor="#EAEAEA" offset="48.57%" />
                  <stop stopColor="#DFDFDF" stopOpacity="0" offset="100%" />
                </linearGradient>
                <radialGradient cx="21.152%" cy="86.063%" fx="21.152%" fy="86.063%" r="79.941%" id="hero-ill-e">
                  <stop stopColor="#4FD1C5" offset="0%" />
                  <stop stopColor="#81E6D9" offset="25.871%" />
                  <stop stopColor="#338CF5" offset="100%" />
                </radialGradient>
                <circle id="hero-ill-d" cx="384" cy="216" r="64" />
              </defs>
              <g fill="none" fillRule="evenodd">
                <circle fillOpacity=".04" fill="url(#hero-ill-a)" cx="384" cy="216" r="128" />
                <circle fillOpacity=".16" fill="url(#hero-ill-b)" cx="384" cy="216" r="96" />
                <g fillRule="nonzero">
                  <use fill="#000" xlinkHref="#hero-ill-d" />
                  <use fill="url(#hero-ill-e)" xlinkHref="#hero-ill-d" />
                </g>
              </g>
            </svg>
          </div>
          <button className="absolute top-full flex items-center transform -translate-y-1/2 bg-white rounded-full font-medium group p-4 shadow-lg" onClick={() => { setModalOpen(true) }}>
            <PlayIcon className="w-6 h-6 fill-current text-gray-400 group-hover:text-blue-600 shrink-0" />
            <span className="ml-3">Watch the full video (2 min)</span>
          </button>
        </div>
      </div>
      {/* End: Video thumbnail */}

      <Transition show={modalOpen} as={Fragment} afterEnter={() => videoRef.current?.play()}>
        <Dialog initialFocus={videoRef} onClose={() => setModalOpen(false)}>

          {/* Modal backdrop */}
          <Transition.Child
            enter="transition ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition ease-out duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            aria-hidden="true"
          >
            <div className="fixed inset-0 z-50 bg-black bg-opacity-75 transition-opacity" />
          </Transition.Child>
          {/* End: Modal backdrop */}

          {/* Modal dialog */}
          <Transition.Child
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-out duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="fixed inset-0 z-50 overflow-hidden flex items-center justify-center transform px-4 sm:px-6">
              <div className="max-w-6xl mx-auto h-full flex items-center">
                <Dialog.Panel className="w-full max-h-full aspect-video bg-black overflow-hidden">
                  <video ref={videoRef} width={videoWidth} height={videoHeight} loop controls>
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </Dialog.Panel>
              </div>
            </div>
          </Transition.Child>
          {/* End: Modal dialog */}

        </Dialog>
      </Transition>

    </div>
  )
}