"use client";
import VideoContainer from './video-banner'


export default function Hero() {
  
  return (
    <VideoContainer videoSrc={getRandomVideo()}>
      <div className='text-center'>
        <h1 className="text-3xl md:text-5xl text-white font-extrabold drop-shadow-md tracking-tighter mb-4" data-aos="zoom-in">
          Comprometidos com a <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-beePrimary-lightest to-beeSecondary-dark">
            Qualidade do Seu Projeto
            </span>
            <p></p>
        </h1>
        <div className="max-w-3xl">
          <p className="text-md md:text-xl text-white mb-8" data-aos="zoom-y-out" data-aos-delay="200" data-aos-duration="500">
            Transformamos ideias visionárias dos nossos clientes em realidade, trabalhando lado a lado para moldar soluções tecnológicas que impulsionam o progresso e a inovação. <strong>Cada projeto é uma oportunidade de ultrapassar fronteiras</strong>.</p>
          <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
            <div>
              <a className="btn text-beeSecondary-light bg-beePrimary-normal hover:bg-beePrimary-light w-full mb-4 sm:w-auto sm:mb-0" data-aos="fade-left" data-aos-duration="1200" data-aos-delay="300" href="#0">
                Entre para a colmeia
              </a>
            </div>
            <div>
              <a className="btn text-beePrimary-dark bg-beeSecondary-normal hover:bg-beeSecondary-light w-full sm:w-auto sm:ml-4" data-aos="fade-right" data-aos-duration="1200" data-aos-delay="300" href="#0">
                Contate-nos
              </a>
            </div>
          </div>
        </div>
      </div>
    </VideoContainer>
  )
}

// create a function to return a random number between 0 and 20
function getRandomVideo() {
  var videos = [
    "backgrounds/office-group.mp4", 
    "backgrounds/office-wood.mp4", 
    "backgrounds/office-phone.mp4", 
    "backgrounds/office-toghether.mp4",
    "backgrounds/office-agreement.mp4",
    // "backgrounds/network-blacklines.mp4",
  ];

  return videos[Math.floor(Math.random() * videos.length)];
}