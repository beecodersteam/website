"use client"
import Hero from '@/components/sections/hero'
import OurHive from '@/components/sections/our-hive'
import Testimonials from '@/components/sections/testimonials'
import ContactForm from '@/components/forms/contact-form'
import Mission from '@/components/sections/mission'
import Highlights from '@/components/sections/highlights'
import Technologies from '@/components/sections/technologies'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import ServicesSection from '@/components/sections/services-section'
import Portifolio from '@/components/sections/portifolio'

export default function Home() {  
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });
  return (
    <>
      <Hero />
      <Highlights/>
      <Mission />
      <ServicesSection />
      <OurHive />
      <Portifolio />
      <Technologies />
      <Testimonials />
      <ContactForm />
    </>
  )
}

