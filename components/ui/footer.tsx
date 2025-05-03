import { LogoHorizBlack } from './logo'
import { LogoYoutube, LogoInstagram, LogoLinkedin, LogoGithub } from 'react-ionicons'
import { FaYoutube, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";


export default function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        

        {/* Top area: Blocks */}
        <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12 border-t border-gray-200">

          {/* 1st column */}
          <div className="sm:col-span-12 lg:col-span-4">
            <div className="mb-2">
              <LogoHorizBlack />
            </div>
            <div className="text-sm text-gray-600">
              <p className="mb-4">Empowering businesses with innovative software solutions tailored to your needs. Let’s build the future together!</p>
            </div>
          </div>

          {/* 2nd column */}
          <div className="sm:col-span-12 lg:col-span-4">
            
          </div>

          {/* 3rd column */}
          <div className="sm:col-span-12 lg:col-span-4">
            <div className="text-sm text-gray-600">
              <h3 className="text-lg font-bold mb-2">Get in Touch</h3>
              <p className="mb-4">Have questions or ready to start your project?
                <br /> Reach out to us:</p>
              <p>Phone: <a href="tel:+351910657140" className="text-beePrimary-normal hover:underline">+351 910 657 140</a></p>
              <p>WhatsApp: <a href="https://wa.me/+351910657140" target="_blank" className="text-beePrimary-normal hover:underline">Chat with us</a></p>
              <p>Email: <a href="mailto:contact@beecoders.club" className="text-beePrimary-normal hover:underline">contact@beecoders.club</a></p>
            </div>
          </div>

        </div>

        {/* Bottom area */}
        <div className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200">
          
          {/* Contact Info */}
          {/* Removed duplicate phone and WhatsApp information */}

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
