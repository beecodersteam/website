import TestimonielasCarousel from "./ui/TestimonialsCarousel";

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
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
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
            Don't just take our word for it. Here's what industry leaders and satisfied clients have to say about their experience working with BeeCoders.
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
              <svg className="w-5 h-5 text-beePrimary-normal" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">100+ Satisfied Clients</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-beePrimary-normal" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="font-medium">5-Star Average Rating</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-beePrimary-normal" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Verified Reviews</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
