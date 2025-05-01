import { LogoHorizBlack } from './logo'
import { LogoYoutube, LogoInstagram, LogoLinkedin, LogoGithub } from 'react-ionicons'
import { FaYoutube, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";


export default function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        

        {/* Top area: Blocks */}
        <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12 border-t border-gray-200">

          {/* 1st block */}
          <div className="sm:col-span-12 lg:col-span-3">
            <div className="mb-2">
              <LogoHorizBlack />
            </div>
            <div className="text-sm text-gray-600">
              
            </div>
          </div>

        </div>

        {/* Bottom area */}
        <div className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200">
          

          {/* Social as */}
          <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
            <li>
              <a href="https://youtube.com/@BeeCodersClub" target='_blank' className="flex p-2 border hover:shadow-lg rounded-full shadow transition duration-150 ease-in-out" aria-label="Youtube">
              <FaYoutube size={24} color="#6B1C8F" />
              </a>
            </li>
            <li className="ml-4">
              <a href="https://www.linkedin.com/company/bee-coders-club" target='_blank' className="flex p-2 border hover:shadow-lg rounded-full shadow transition duration-150 ease-in-out" aria-label="Linkedin">
                <FaLinkedin size={24} color="#6B1C8F" />
              </a>
            </li>
            <li className="ml-4">
              <a href="https://github.com/beecodersteam" target='_blank' className="flex p-2 border hover:shadow-lg rounded-full shadow transition duration-150 ease-in-out" aria-label="Github">
                <FaGithub size={24} color="#6B1C8F" />
              </a>
            </li>
            <li className="ml-4">
              <a href="https://www.instagram.com/beecodersclub" target='_blank' className="flex p-2 border rounded-full shadow transition duration-150 ease-in-out" aria-label="Instagram">
                <FaInstagram size={24} color="#6B1C8F" />
              </a>
            </li>
          </ul>

          {/* Copyright note */}
          <div className="text-sm text-gray-600 mr-4">&copy; beecoders.club. All rights reserved.</div>

        </div>

      </div>
    </footer>
  )
}
