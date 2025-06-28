import { 
  BookOpenIcon, 
  UsersIcon, 
  DocumentIcon, 
  TrophyIcon,
  ArrowRightIcon 
} from "@heroicons/react/24/outline";
import { useTranslation } from '@/lib/i18n';

export default function OurHive() {
  const { t } = useTranslation('sections');
  const featuresData = t('hive.features', { returnObjects: true });

  const icons = [
    <BookOpenIcon className="w-6 h-6" />,
    <UsersIcon className="w-6 h-6" />,
    <DocumentIcon className="w-6 h-6" />,
    <TrophyIcon className="w-6 h-6" />
  ];

  const hiveFeatures = Array.isArray(featuresData) ? featuresData.map((feature, index) => ({
    icon: icons[index],
    title: feature.title,
    description: feature.description,
  })) : [];

  return (
    <section className="relative bg-gradient-to-br from-slate-100 py-16 lg:py-24 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-6">
        <div className="absolute top-10 left-10 w-72 h-72 bg-beeSecondary-normal/50 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-beeSecondary-normal/50 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Decorative line separator */}
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px h-20 bg-gradient-to-b from-beePrimary-light to-transparent transform translate-y-1/2"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl lg:text-5xl font-bold text-beePrimary-normal mb-4 session" id="our-hive">
            {t('hive.title')}
          </h2>
          <div className="w-48 h-1 bg-gradient-to-r from-transparent via-beeSecondary-normal to-transparent mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('hive.subtitle')}
          </p>
        </div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Video Section */}
          <div className="relative" data-aos="fade-right" data-aos-duration="800">
            <div className="relative">
              {/* Video container with enhanced styling */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-black">
                <div className="aspect-video">
                  <iframe 
                    src="https://www.youtube.com/embed/A3JOb_X9_0c?si=6vHMuOCtHEloD06S" 
                    title="Bee Coders Hive Community Video" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                {/* Gradient overlay for better integration */}
                <div className="absolute inset-0 bg-gradient-to-tr from-beePrimary-normal/10 to-transparent opacity-30 pointer-events-none"></div>
              </div>
              
              {/* Floating stats card */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-6 max-w-xs border border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-beePrimary-normal to-beeSecondary-normal rounded-lg flex items-center justify-center">
                      <UsersIcon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{t('hive.highlight.title')}</p>
                    <p className="text-xs text-gray-600">{t('hive.highlight.description')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8" data-aos="fade-left" data-aos-duration="800" data-aos-delay="200">
            {/* Main description */}
            <div className="space-y-6">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed">
                  <span className="font-semibold text-beePrimary-dark">BeeCoders</span> {t('hive.description')}
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {t('hive.description2')}
                </p>
              </div>
            </div>

           
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {hiveFeatures.map((feature, index) => (
            <div 
              key={index}
              className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl border border-gray-100 hover:border-beePrimary-light/30 transition-all duration-300 hover:-translate-y-1"
              data-aos="fade-up" 
              data-aos-delay={100 + (index * 100)}
              data-aos-duration="600"
            >
              {/* Floating gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-beePrimary-normal/5 to-beeSecondary-normal/5 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              
              {/* Content */}
              <div className="relative">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-beePrimary-normal to-beeSecondary-normal rounded-xl mb-4 shadow-md group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white">
                    {feature.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-beePrimary-dark transition-colors duration-300">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
