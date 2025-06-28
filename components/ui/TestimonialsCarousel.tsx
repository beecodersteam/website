"use client";
import Image from "next/image";
import Slider, { CustomArrowProps } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRight, FaArrowLeft, FaStar, FaQuoteLeft } from "react-icons/fa";
import { ShieldCheckIcon } from '@heroicons/react/24/solid';
import { useTranslation } from '@/lib/i18n';

const NextArrow = ({currentSlide, slideCount, ...props}: CustomArrowProps) => (
  <div 
    {...props}
    className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer hidden md:block"
    style={{
      ...props.style,
      right: '-60px',
    }}
  >
    <div className="w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-beePrimary-normal hover:text-white transition-all duration-300 group">
      <FaArrowRight className="text-gray-600 group-hover:text-white" size={16} />
    </div>
  </div>
);

const PrevArrow = ({currentSlide, slideCount, ...props}: CustomArrowProps) => (
  <div 
    {...props}
    className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer hidden md:block"
    style={{
      ...props.style,
      left: '-60px',
    }}
  >
    <div className="w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-beePrimary-normal hover:text-white transition-all duration-300 group">
      <FaArrowLeft className="text-gray-600 group-hover:text-white" size={16} />
    </div>
  </div>
);

export default function TestimonielasCarousel() {
  const { t } = useTranslation('sections');
  const settings = {
    dots: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 6000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    dotsClass: "slick-dots custom-dots",
    customPaging: () => (
      <div className="w-3 h-3 bg-gray-300 rounded-full transition-all duration-300 hover:bg-beePrimary-normal"></div>
    ),
  };

  const data = [
    {
      name: `Alexandre Santos`,
      profession: "Director",
      company: "Alfasystems",
      img: "/images/testimonials/alexandre.jpg",
      review: `I was extremely satisfied with Bee Coders' services. They demonstrated exceptional professionalism, delivering high-quality work within the stipulated timeframe. The team was highly competent, agile, and collaborative, making the entire process smooth and efficient. I strongly recommend their services to anyone seeking excellence in software development. Congratulations on the excellent work!`,
      rating: 5,
      projectType: "Enterprise Software Development"
    },
    {
      name: `Luis Amado`,
      profession: "Founder",
      company: "Nitelive",
      img: "/images/testimonials/luis.jpeg",
      review: `Bee Coders was an inspiration from the very beginning of the project. I closely followed the team's progress and can say that the results are outstanding. Despite the project's high level of complexity, the Bee Coders team dedicated themselves from the start with great professionalism and delivered elegant solutions. Not only do I recommend hiring Bee Coders, but I also look forward to engaging their services again for the next phase of this project.`,
      rating: 5,
      projectType: "Complex Web Application"
    },
  ];

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <FaStar
        key={index}
        className={`${
          index < rating ? 'text-yellow-400' : 'text-gray-300'
        } w-5 h-5`}
      />
    ));
  };

  return (
    <div className="relative w-full md:max-w-4xl md:mx-auto px-4 md:px-8">
      <style jsx global>{`
        .custom-dots {
          bottom: -40px !important;
          display: flex !important;
          justify-content: center !important;
          list-style: none !important;
          margin: 0 !important;
          padding: 0 !important;
        }
        .custom-dots li {
          margin: 0 6px !important;
        }
        @media (min-width: 768px) {
          .custom-dots {
            bottom: -40px !important;
          }
          .custom-dots li {
            margin: 0 8px !important;
          }
        }
        .custom-dots li.slick-active div {
          background-color: #FFA500 !important;
          transform: scale(1.2) !important;
        }
        .slick-slider {
          position: relative;
        }
      `}</style>
      
      <Slider {...settings}>
        {data.map((item, index) => (
          <div key={index} className="px-2 md:px-4">
            <div className="bg-white rounded-3xl border border-gray-200 shadow-lg p-6 md:p-12 mx-auto md:max-w-3xl relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-beePrimary-normal/10 to-beeSecondary-normal/10 rounded-bl-full"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-beeSecondary-normal/10 to-beePrimary-normal/10 rounded-tr-full"></div>
              
              {/* Quote icon */}
              <div className="absolute top-6 left-6 md:top-8 md:left-8">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-beePrimary-normal to-beeSecondary-normal rounded-full flex items-center justify-center">
                  <FaQuoteLeft className="text-white w-4 h-4 md:w-5 md:h-5" />
                </div>
              </div>

              <div className="relative z-10">
                {/* Header with avatar and info */}
                <div className="flex flex-col md:flex-row items-center md:items-start mb-6 md:mb-8">
                  <div className="relative mb-4 md:mb-0 md:mr-6">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-r from-beePrimary-normal to-beeSecondary-normal p-1">
                      <Image
                        className="w-full h-full rounded-full object-cover"
                        src={item.img}
                        width={80}
                        height={80}
                        alt={`${item.name} testimonial`}
                      />
                    </div>
                    {/* Online indicator */}
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 md:w-6 md:h-6 bg-green-500 rounded-full border-3 md:border-4 border-white"></div>
                  </div>

                  <div className="text-center md:text-left flex-1">
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1">{item.name}</h3>
                    <p className="text-beePrimary-normal font-medium mb-1 text-sm md:text-base">{item.profession}</p>
                    <p className="text-gray-600 text-xs md:text-sm mb-3">
                      <span className="font-medium">{item.company}</span> • {item.projectType}
                    </p>
                    
                    {/* Rating */}
                    <div className="flex items-center justify-center md:justify-start space-x-1 mb-3 md:mb-4">
                      {renderStars(item.rating)}
                      <span className="ml-2 text-xs md:text-sm text-gray-600 font-medium">
                        {item.rating}.0
                      </span>
                    </div>
                  </div>
                </div>

                {/* Review text */}
                <blockquote className="text-xs md:text-sm text-gray-700 leading-relaxed italic mb-4 md:mb-6 relative">
                  "{item.review}"
                </blockquote>

                {/* Trust badge */}
                <div className="flex items-center justify-center space-x-2 text-xs md:text-sm text-gray-500">
                  <ShieldCheckIcon className="w-3 h-3 md:w-4 md:h-4 text-green-500" />
                  <span>{t('testimonials.verifiedReview')}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
