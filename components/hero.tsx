"use client"
import { useState, useEffect } from 'react'
import VideoContainer from './video-banner'

// List of available videos
const videos = [
  "backgrounds/office-group.mp4",
  "backgrounds/office-wood.mp4",
  "backgrounds/office-phone.mp4",
  "backgrounds/office-toghether.mp4",
  "backgrounds/office-agreement.mp4",
  "backgrounds/network-blacklines.mp4",
];

// Function to return a random video from the available videos
function getRandomVideo() {
  return videos[Math.floor(Math.random() * videos.length)];
}

export default function Hero() {
  const [videoSrc, setVideoSrc] = useState<string>('');

  useEffect(() => {
    // Set random video on client-side mount to ensure it works with static generation
    setVideoSrc(getRandomVideo());
  }, []);

  return (
    <VideoContainer videoSrc={videoSrc}>
      <div className='text-center'>
        <h1 className="text-3xl md:text-5xl text-white font-extrabold drop-shadow-md tracking-tighter mb-4" data-aos="zoom-in">
          Transforming <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-beePrimary-lightest to-beeSecondary-dark">
            Your Vision into Reality
          </span>
        </h1>
        <div className="max-w-3xl">
          <p className="text-md md:text-xl text-white mb-8" data-aos="zoom-y-out" data-aos-delay="200" data-aos-duration="500">
            <strong>At BeeCoders</strong>, we specialize in transforming your ideas into cutting-edge digital solutions. <strong>Partner with us</strong> to redefine what's possible and build extraordinary experiences together.</p>
          <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
            <div>
              <a className="btn text-beeSecondary-light bg-beePrimary-normal hover:bg-beePrimary-light w-full mb-4 sm:w-auto sm:mb-0" data-aos="fade-left" data-aos-duration="1200" data-aos-delay="300" href="mailto:contact@beecoders.club">
                Join Our Hive
              </a>
            </div>
            <div>
              <a className="btn text-beePrimary-dark bg-beeSecondary-normal hover:bg-beeSecondary-light w-full sm:w-auto sm:ml-4" data-aos="fade-right" data-aos-duration="1200" data-aos-delay="300" href="#contact">
                Let’s Collaborate
              </a>
            </div>
          </div>
        </div>
      </div>
    </VideoContainer>
  )
}

