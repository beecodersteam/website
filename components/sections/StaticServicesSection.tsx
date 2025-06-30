import { 
  ComputerDesktopIcon, 
  DevicePhoneMobileIcon, 
  PaintBrushIcon, 
  ChartPieIcon, 
  GlobeAltIcon, 
  UsersIcon,
  ArrowRightIcon 
} from "@heroicons/react/24/outline";
import { useStaticTranslation } from '@/lib/use-static-translation';
import SectionTitle from "../ui/SectionTitle";
import SectionSubtitle from "../ui/SectionSubtitle";
import AnimatedBackground from "../ui/AnimatedBackground";

interface ServicesProps {
  translations: Record<string, any>;
  locale: string;
}

export default function StaticServicesSection({ translations, locale }: ServicesProps) {
  const { t } = useStaticTranslation(translations, locale);

  const getServiceData = () => {
    const servicesData = translations.sections?.services || {};
    
    return [
      {
        icon: <ComputerDesktopIcon className="w-8 h-8" />,
        title: servicesData.webSystems?.title || '',
        description: servicesData.webSystems?.description || '',
        features: servicesData.webSystems?.features || []
      },
      {
        icon: <DevicePhoneMobileIcon className="w-8 h-8" />,
        title: servicesData.mobileApps?.title || '',
        description: servicesData.mobileApps?.description || '',
        features: servicesData.mobileApps?.features || []
      },
      {
        icon: <PaintBrushIcon className="w-8 h-8" />,
        title: servicesData.uiuxDesign?.title || '',
        description: servicesData.uiuxDesign?.description || '',
        features: servicesData.uiuxDesign?.features || []
      },
      {
        icon: <ChartPieIcon className="w-8 h-8" />,
        title: servicesData.digitalMarketing?.title || '',
        description: servicesData.digitalMarketing?.description || '',
        features: servicesData.digitalMarketing?.features || []
      },
      {
        icon: <GlobeAltIcon className="w-8 h-8" />,
        title: servicesData.nearshore?.title || '',
        description: servicesData.nearshore?.description || '',
        features: servicesData.nearshore?.features || []
      },
      {
        icon: <UsersIcon className="w-8 h-8" />,
        title: servicesData.teamOutsourcing?.title || '',
        description: servicesData.teamOutsourcing?.description || '',
        features: servicesData.teamOutsourcing?.features || []
      }
    ];
  };

  const services = getServiceData();

  return (
    <section className="relative bg-beePrimary-normal py-16 lg:py-24 overflow-hidden">
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
        />
        <SectionSubtitle
          text={t('services.subtitle', { components: [<strong key="b1" />] })}
          variant="centered"
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
                  {service.features.map((feature: string, featureIndex: number) => (
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
