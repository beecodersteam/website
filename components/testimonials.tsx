import TestimonielasCarousel from "./ui/TestimonialsCarousel";
import { InformationCircleIcon, CheckCircleIcon, StarIcon, ShieldCheckIcon } from '@heroicons/react/24/solid';
import { useTranslation } from '@/lib/i18n';
import SectionBadge from "./ui/SectionBadge";
import SectionTitle from "./ui/SectionTitle";
import SectionSubtitle from "./ui/SectionSubtitle";
import { RectangleStackIcon } from "@heroicons/react/24/outline";

export default function Testimonials() {
  const { t } = useTranslation('sections');
  return (
    <section className="relative py-20  bg-gradient-to-br from-gray-50 via-white to-beePrimary-normal/5 overflow-hidden">
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
        <SectionBadge
          icon={<StarIcon className="w-6 h-6" />}
          text={t('testimonials.badge')}
          className="mb-4"
          enableAnimations={true}
          animationDelay={200}
        />
        <SectionTitle
          title={String(t('testimonials.title'))}
          id="our-hive"
          variant="centered"
          enableAnimations={true}
          animatedDivider={true}
        />
        <SectionSubtitle
          text={t('testimonials.subtitle', { components: [<strong key="b1" />] })}
          variant="centered"
          enableAnimations={true}
          animationDelay={300}
        />
        

        {/* Testimonials carousel */}
        <div data-aos="fade-up" data-aos-delay="200">
          <TestimonielasCarousel />
        </div>

      </div>
    </section>
  );
}
