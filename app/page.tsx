"use client"
import Hero from '@/components/hero'
import OurHive from '@/components/our-hive'
import Testimonials from '@/components/testimonials'
import ContactForm from '@/components/contact-form'
import CompanyMission from '@/components/company-mission'
import Highlights from '@/components/highlights'
import Technologies from '@/components/technologies'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import ServicesSection from '@/components/services-section'
import Portifolio from '@/components/portifolio'

export default function Home() {  
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });
  return (
    <>
      <Hero />
      <Highlights/>
      <CompanyMission />
      <ServicesSection />
      <OurHive />
      <Portifolio />
      <Technologies />
      <Testimonials />
      <ContactForm />
    </>
  )
}

