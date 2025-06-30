import { 
  ComputerDesktopIcon, 
  DevicePhoneMobileIcon, 
  PaintBrushIcon, 
  ChartPieIcon, 
  GlobeAltIcon, 
  UsersIcon,
  ArrowRightIcon 
} from "@heroicons/react/24/outline";
import { useTranslation } from '@/lib/i18n';
import SectionTitle from "./ui/SectionTitle";
import SectionSubtitle from "./ui/SectionSubtitle";
import AnimatedBackground from "./ui/AnimatedBackground";

export default function ServicesSection() {
  const { t } = useTranslation('sections');

  const getServiceData = () => {
    const getFeatures = (key: string) => {
      const features = t(key, { returnObjects: true });
      return Array.isArray(features) ? features : [];
    };

    return [
      {
        icon: <ComputerDesktopIcon className="w-8 h-8" />,
        title: t('services.webSystems.title'),
        description: t('services.webSystems.description'),
        features: getFeatures('services.webSystems.features')
      },
      {
        icon: <DevicePhoneMobileIcon className="w-8 h-8" />,
        title: t('services.mobileApps.title'),
        description: t('services.mobileApps.description'),
        features: getFeatures('services.mobileApps.features')
      },
      {
        icon: <PaintBrushIcon className="w-8 h-8" />,
        title: t('services.uiuxDesign.title'),
        description: t('services.uiuxDesign.description'),
        features: getFeatures('services.uiuxDesign.features')
      },
      {
        icon: <ChartPieIcon className="w-8 h-8" />,
        title: t('services.digitalMarketing.title'),
        description: t('services.digitalMarketing.description'),
        features: getFeatures('services.digitalMarketing.features')
      },
      {
        icon: <GlobeAltIcon className="w-8 h-8" />,
        title: t('services.nearshore.title'),
        description: t('services.nearshore.description'),
        features: getFeatures('services.nearshore.features')
      },
      {
        icon: <UsersIcon className="w-8 h-8" />,
        title: t('services.teamOutsourcing.title'),
        description: t('services.teamOutsourcing.description'),
        features: getFeatures('services.teamOutsourcing.features')
      }
    ];
  };

  const services = getServiceData();

  return (
    <section className="relative bg-beePrimary-normal py-16 lg:py-24 overflow-hidden session">
      <AnimatedBackground
        backgroundColors={{
          from: "from-beeSecondary-normal/10",
          via: "via-beeSecondary-normal/0",
          to: "to-beeSecondary-normal/20"
        }}
       />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <SectionTitle
          title={String(t('services.title'))}
          id="services"
          variant="centered"
          color="text-white"
          enableAnimations={true}
          animatedDivider={true}
        />
        <SectionSubtitle
          text={t('services.subtitle', { components: [<strong key="b1" />] })}
          variant="centered"
          enableAnimations={true}
          animationDelay={300}
          color="text-white/90"
        />

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-gray-100 hover:border-beePrimary-light/30 transition-all duration-500 hover:-translate-y-2"
              data-aos="fade-up" 
              data-aos-delay={100 + (index * 100)}
              data-aos-duration="600"
            >
              {/* Floating gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-beePrimary-normal/5 to-beeSecondary-normal/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Icon container */}
              <div className="relative">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-beePrimary-normal to-beeSecondary-normal rounded-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white">
                    {service.icon}
                  </div>
                </div>

                {/* Service title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-beePrimary-dark transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Service description */}
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features list */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-beePrimary-normal rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Hover arrow indicator */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowRightIcon className="w-6 h-6 text-beePrimary-normal" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}