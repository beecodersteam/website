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
    <section className="relative bg-beePrimary-normal py-16 lg:py-24 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute top-20 left-20 w-96 h-96 bg-beeSecondary-normal rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-beeSecondary-normal rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-beeSecondary rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      {/* Geometric pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFFFFF' fill-opacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-10">
          
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 session" id="services">
            {t('services.title')}
          </h2>
          <div className="w-48 h-1 bg-gradient-to-r from-transparent via-beeSecondary-normal to-transparent mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            {t('services.subtitle')}
          </p>
        </div>

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