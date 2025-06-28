import Image from "next/image";
import { CheckCircleIcon, BoltIcon, UsersIcon } from "@heroicons/react/24/outline";

export default function CompanyMission() {
  return (
    <section className="relative bg-gradient-to-br from-white via-gray-50 to-slate-100 py-16 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-beePrimary-normal rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-beeSecondary-normal rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Decorative line separator */}
      

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-2">
        {/* Section header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl lg:text-5xl font-bold text-beePrimary-normal mb-4 session" id="mission">
            Our Mission
          </h2>
          <div className="w-48 h-1 bg-gradient-to-r from-transparent via-beeSecondary-normal to-transparent mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-700 leading-relaxed w-4/5 mx-auto">
            At <span className="font-semibold text-beePrimary-dark">BeeCoders</span>, we are dedicated to empowering businesses by delivering innovative and tailored software solutions. Our mission is to transform your vision into reality through high-quality development services that align with your unique objectives.
          </p>
        </div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Section */}
          <div className="relative col-span-1" data-aos="fade-right" data-aos-duration="800">
            <div className="relative">
              {/* Main image */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <Image 
                  src="/images/pexels-01.jpg" 
                  alt="Team collaboration and innovation" 
                  width={500} 
                  height={500} 
                  className="object-cover w-full h-full transition-transform duration-700 hover:scale-125" 
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-beePrimary-normal/20 to-transparent opacity-60"></div>
              </div>
              
              {/* Floating card */}
              <div className="absolute -bottom-2 -right-6 bg-white rounded-xl shadow-xl p-6 max-w-xs border border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-beePrimary-normal to-beeSecondary-normal rounded-lg flex items-center justify-center">
                      <CheckCircleIcon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Quality Driven</p>
                    <p className="text-xs text-gray-600">Excellence in every project</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-4" data-aos="fade-left" data-aos-duration="800" data-aos-delay="200">

            {/* Key Values */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-600 mb-4">Our Core Values</h3>
              <div className="space-y-4">
                {[
                  {
                    icon: <BoltIcon className="w-5 h-5" />,
                    title: "Innovation",
                    description: "Cutting-edge solutions that push boundaries and drive progress."
                  },
                  {
                    icon: <CheckCircleIcon className="w-5 h-5" />,
                    title: "Excellence",
                    description: "Unwavering commitment to quality in every aspect of our work."
                  },
                  {
                    icon: <UsersIcon className="w-5 h-5" />,
                    title: "Partnership",
                    description: "Building lasting relationships based on trust and mutual success."
                  }
                ].map((value, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 rounded-lg bg-white/60 backdrop-blur-sm border border-gray-100 shadow-lg hover:bg-white/80 transition-all duration-300">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-beePrimary-normal to-beeSecondary-normal rounded-lg flex items-center justify-center text-white shadow-md">
                      {value.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-600 mb-1">{value.title}</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

