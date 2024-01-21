export const metadata = {
  title: 'Bee Coders',
  description: 'A vibrant and collaborative community of developers around the world, working together to drive innovation and technical excellence',
  keywords: 'beecoders, community, developers, software development, mobile apps',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import FeaturesBlocks from '@/components/features-blocks'
import Testimonials from '@/components/testimonials'
import Newsletter from '@/components/newsletter'
import CompanyMission from '@/components/company-mission'
import Highlights from '@/components/highlights'
import Technologies from '@/components/technologies'

export default function Home() {  
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
