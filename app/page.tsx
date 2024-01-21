"use client"
import Hero from '@/components/hero'
import Features from '@/components/features'
import FeaturesBlocks from '@/components/features-blocks'
import Testimonials from '@/components/testimonials'
import Newsletter from '@/components/newsletter'
import CompanyMission from '@/components/company-mission'
import Highlights from '@/components/highlights'
import Technologies from '@/components/technologies'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Home() {  
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });
  return (
    <>
      <Hero />
      <Highlights/>
      <CompanyMission />
      <FeaturesBlocks />
      <Features />
      <Technologies />
      <Testimonials />
      <Newsletter />
    </>
  )
}

