import TestimonielasCarousel from "./ui/TestimonialsCarousel";
import { InformationCircleIcon, CheckCircleIcon, StarIcon, ShieldCheckIcon } from '@heroicons/react/24/solid';
import { useTranslation } from '@/lib/i18n';
import SectionBadge from "./ui/SectionBadge";
import SectionTitle from "./ui/SectionTitle";
import SectionSubtitle from "./ui/SectionSubtitle";
import { RectangleStackIcon } from "@heroicons/react/24/outline";
import AnimatedBackground from "./ui/AnimatedBackground";

export default function Testimonials() {
  const { t } = useTranslation('sections');
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
          animatedDivider={true}
        />
        <SectionSubtitle
          text={t('testimonials.subtitle', { components: [<strong key="b1" />] })}
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
