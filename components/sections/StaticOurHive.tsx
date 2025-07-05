import { 
  BookOpenIcon, 
  UsersIcon, 
  DocumentIcon, 
  TrophyIcon,
} from "@heroicons/react/24/outline";
import { useStaticTranslation } from '@/lib/use-static-translation';
import AnimatedBackground from "../ui/AnimatedBackground";
import SectionTitle from "../ui/SectionTitle";
import SectionSubtitle from "../ui/SectionSubtitle";

interface OurHiveProps {
  translations: Record<string, any>;
  locale: string;
}

export default function StaticOurHive({ translations, locale }: OurHiveProps) {
  const { t } = useStaticTranslation(translations, locale);
  const featuresData = translations.sections?.hive?.features || [];

  const icons = [
    <BookOpenIcon className="w-6 h-6" key="book" />,
    <UsersIcon className="w-6 h-6" key="users" />,
    <DocumentIcon className="w-6 h-6" key="document" />,
    <TrophyIcon className="w-6 h-6" key="trophy" />
  ];

  const hiveFeatures = Array.isArray(featuresData) ? featuresData.map((feature: any, index: number) => ({
    icon: icons[index],
    title: feature.title,
    description: feature.description,
  })) : [];

  return (
    <section className="relative bg-gradient-to-br from-slate-100 py-16 lg:py-24 overflow-hidden">
      {/* Background decorative elements */}
      <AnimatedBackground 
        hexagonCount={8} 
        hexagonColor="yellow"
        backgroundColors={{
          from: "from-beeSecondary-normal/10",
          via: "none",
          to: "to-beePrimary-normal/10"
        }} 
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionTitle
          title={String(t('hive.title'))}
          id="our-hive"
          variant="centered"
        />
        <SectionSubtitle
          text={String(t('hive.subtitle'))}
          variant="centered"
          animationDelay={300}
        />

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
                    <p className="text-sm font-semibold text-gray-900">{String(t('hive.highlight.title'))}</p>
                    <p className="text-xs text-gray-600">{String(t('hive.highlight.description'))}</p>
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
                  {t('hive.description', { 
                    components: [
                      <strong key="bee-coders" className="text-beePrimary-dark font-bold" />
                    ]
                  })}
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
  )
}
