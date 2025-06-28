'use client';

import { LogoHorizBlack } from './logo'
import { FaYoutube, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  GlobeAltIcon,
  ArrowRightIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';
import { useTranslation } from '@/lib/i18n';

export default function Footer() {
  const { t } = useTranslation('sections');
  const currentYear = new Date().getFullYear();

  const getServices = () => {
    const services = t('footer.services.items', { returnObjects: true });
    return Array.isArray(services) ? services : [
      "Web Development",
      "Mobile Applications", 
      "UI/UX Design",
      "Digital Marketing",
      "Team Outsourcing",
      "Nearshore Solutions"
    ];
  };

  const services = getServices();

  const company = [
    { name: t('footer.company.aboutUs'), href: "#mission" },
    { name: t('footer.company.portfolio'), href: "#portifolio" },
    { name: t('footer.company.technologies'), href: "#technologies" },
    { name: t('footer.company.testimonials'), href: "#testimonials" },
    { name: t('footer.company.hive'), href: "#our-hive" },
    { name: t('footer.company.contact'), href: "#contact" }
  ];

  const socialLinks = [
    {
      name: "YouTube",
      href: "https://youtube.com/@BeeCodersClub",
      icon: FaYoutube,
      color: "#FF0000"
    },
    {
      name: "LinkedIn", 
      href: "https://www.linkedin.com/company/bee-coders-club",
      icon: FaLinkedin,
      color: "#0077B5"
    },
    {
      name: "GitHub",
      href: "https://github.com/beecodersteam", 
      icon: FaGithub,
      color: "#181717"
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/beecodersclub",
      icon: FaInstagram,
      color: "#E4405F"
    }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-50 via-white to-beePrimary-normal/5 text-gray-900 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-beePrimary-normal rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-beeSecondary-normal rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-beePrimary-dark rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
      </div>

      {/* Geometric pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 py-16 md:py-20">
          
          {/* Company Info */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <LogoHorizBlack />
            </div>
            <p className="text-gray-600 leading-relaxed">
              {t('footer.description')}
            </p>
            
            {/* Social Media */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-beePrimary-dark">{t('footer.followUs')}</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative w-12 h-12 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200 shadow-md flex items-center justify-center hover:bg-beePrimary-normal hover:border-beePrimary-normal transition-all duration-300 hover:scale-110 hover:shadow-lg"
                    aria-label={social.name}
                  >
                    <social.icon 
                      size={20} 
                      className="text-gray-600 group-hover:text-white transition-colors duration-300" 
                    />
                    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-beePrimary-dark text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      {social.name}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-beePrimary-dark border-b border-beePrimary-normal/30 pb-3">
              {t('footer.services.title')}
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="group">
                  <a 
                    href="#services" 
                    className="flex items-center text-gray-600 hover:text-beePrimary-normal transition-colors duration-300"
                  >
                    <ArrowRightIcon className="w-4 h-4 mr-3 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300 text-beePrimary-normal" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{service}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-beePrimary-dark border-b border-beePrimary-normal/30 pb-3">
              {t('footer.company.title')}
            </h3>
            <ul className="space-y-3">
              {company.map((link, index) => (
                <li key={index} className="group">
                  <a 
                    href={link.href} 
                    className="flex items-center text-gray-600 hover:text-beePrimary-normal transition-colors duration-300"
                  >
                    <ArrowRightIcon className="w-4 h-4 mr-3 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300 text-beePrimary-normal" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-beePrimary-dark border-b border-beePrimary-normal/30 pb-3">
              {t('footer.contact.title')}
            </h3>
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                {t('footer.contact.description')}
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3 group">
                  <div className="w-10 h-10 bg-beePrimary-normal/10 rounded-xl border border-beePrimary-normal/20 flex items-center justify-center group-hover:bg-beePrimary-normal/20 group-hover:border-beePrimary-normal/40 transition-colors duration-300">
                    <PhoneIcon className="w-5 h-5 text-beePrimary-normal" />
                  </div>
                  <a 
                    href="tel:+351910657140" 
                    className="text-gray-600 hover:text-beePrimary-normal transition-colors duration-300 font-medium"
                  >
                    +351 910 657 140
                  </a>
                </div>
                
                <div className="flex items-center space-x-3 group">
                  <div className="w-10 h-10 bg-green-500/10 rounded-xl border border-green-500/20 flex items-center justify-center group-hover:bg-green-500/20 group-hover:border-green-500/40 transition-colors duration-300">
                    <ChatBubbleLeftRightIcon className="w-5 h-5 text-green-600" />
                  </div>
                  <a 
                    href="https://wa.me/+351910657140" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-green-600 transition-colors duration-300 font-medium"
                  >
                    {t('footer.contact.whatsapp')}
                  </a>
                </div>
                
                <div className="flex items-center space-x-3 group">
                  <div className="w-10 h-10 bg-blue-500/10 rounded-xl border border-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/20 group-hover:border-blue-500/40 transition-colors duration-300">
                    <EnvelopeIcon className="w-5 h-5 text-blue-600" />
                  </div>
                  <a 
                    href="mailto:contact@beecoders.club" 
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium"
                  >
                    contact@beecoders.club
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-200">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between py-8 space-y-4 md:space-y-0">
            <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
              <p className="text-gray-500 text-sm">
                &copy; {currentYear} Bee Coders Club. {t('footer.legal.allRightsReserved')}
              </p>
              <div className="flex space-x-4 text-sm">
                <a href="#" className="text-gray-500 hover:text-beePrimary-normal transition-colors duration-300">
                  {t('footer.legal.privacyPolicy')}
                </a>
                <span className="text-gray-400">•</span>
                <a href="#" className="text-gray-500 hover:text-beePrimary-normal transition-colors duration-300">
                  {t('footer.legal.termsOfService')}
                </a>
              </div>
            </div>
            
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <span>{t('footer.legal.madeWith')}</span>
              <span className="text-red-500">❤️</span>
              <span>{t('footer.legal.location')}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
