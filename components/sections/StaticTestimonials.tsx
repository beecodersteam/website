import TestimonielasCarousel from "../ui/TestimonialsCarousel";
import { StarIcon } from '@heroicons/react/24/solid';
import { type Locale } from '@/lib/static-translations';

import SectionBadge from "../ui/SectionBadge";
import SectionTitle from "../ui/SectionTitle";
import SectionSubtitle from "../ui/SectionSubtitle";
import AnimatedBackground from "../ui/AnimatedBackground";

interface StaticTestimonialsProps {
  locale: Locale
  translations: Record<string, any>
}

export default function StaticTestimonials({ translations }: StaticTestimonialsProps) {
  const t = (key: string) => {
    const keys = key.split('.');
    let value = translations.sections;
    for (const k of keys) {
      value = value?.[k];
    }
    return value || key;
  };

  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-beePrimary-normal/5 overflow-hidden">
      {/* Background decorative elements */}
      <AnimatedBackground
        hexagonCount={8} 
        hexagonColor="bg-beePrimary-normal"
        backgroundColors={{
          from: "from-beePrimary-normal/10",
          via: "none",
          to: "to-beePrimary-normal/10"
        }} 
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <SectionBadge
          icon={<StarIcon className="w-6 h-6" />}
          text={t('testimonials.badge')}
          className="mb-4"
        />
        <SectionTitle
          title={String(t('testimonials.title'))}
          id="testimonials"
          variant="centered"
        />
        <SectionSubtitle
          text={t('testimonials.subtitle')}
          variant="centered"
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
