import TestimonielasCarousel from "./ui/TestimonialsCarousel";
import { InformationCircleIcon, CheckCircleIcon, StarIcon, ShieldCheckIcon } from '@heroicons/react/24/solid';

export default function Testimonials() {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-br from-gray-50 via-white to-beePrimary-normal/5 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating hexagons */}
        <div className="absolute top-20 left-10 w-16 h-16 bg-beePrimary-normal/10 transform rotate-12 rounded-lg opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-20 h-20 bg-beeSecondary-normal/10 transform -rotate-12 rounded-lg opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-12 h-12 bg-beePrimary-normal/15 transform rotate-45 rounded-lg opacity-40 animate-pulse delay-2000"></div>
        
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-gradient-to-r from-beePrimary-normal/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-l from-beeSecondary-normal/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-flex items-center px-4 py-2 bg-beePrimary-normal/10 rounded-full text-sm font-medium text-beePrimary-normal mb-6">
            <InformationCircleIcon className="w-4 h-4 mr-2" />
            Client Testimonials
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-6 session" id="testimonials">
            <span className="bg-gradient-to-r from-beePrimary-normal to-beeSecondary-normal bg-clip-text text-transparent">
              What Our Partners
            </span>
            <br />
            <span className="text-gray-900">Say About Us</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what satisfied clients have to say about their experience working with BeeCoders.
          </p>
        </div>

        {/* Testimonials carousel */}
        <div data-aos="fade-up" data-aos-delay="200">
          <TestimonielasCarousel />
        </div>

        {/* Trust indicators */}
        <div className="mt-20 text-center" data-aos="fade-up" data-aos-delay="400">
          <div className="inline-flex items-center space-x-8 text-gray-500">
            
            <div className="flex items-center space-x-2">
              <StarIcon className="w-5 h-5 text-beePrimary-normal" />
              <span className="font-medium">5-Star Average Rating</span>
            </div>
            <div className="flex items-center space-x-2">
              <ShieldCheckIcon className="w-5 h-5 text-beePrimary-normal" />
              <span className="font-medium">Verified Reviews</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
