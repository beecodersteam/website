import Image from "next/image";
import { CheckCircleIcon, BoltIcon, UsersIcon } from "@heroicons/react/24/outline";
import { useTranslation } from '@/lib/i18n';
import SectionSubtitle from "./ui/SectionSubtitle";
import SectionTitle from "./ui/SectionTitle";

export default function Mission() {
  const { t } = useTranslation('sections');

  return (
    <section className="relative bg-gradient-to-br from-white via-gray-50 to-beePrimary-normal/10 py-16 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-beePrimary-normal rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-beeSecondary-normal rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-2">
        <SectionTitle
          title={String(t('mission.title'))}
          id="mission"
          variant="centered"
          enableAnimations={true}
          animatedDivider={true}
        />
        <SectionSubtitle
          text={t('mission.subtitle', { components: [<strong key="b1" />] })}
          variant="centered"
          enableAnimations={true}
          animationDelay={300}
        />

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
                    <p className="text-sm font-semibold text-gray-900">{t('mission.floatingCard.title')}</p>
                    <p className="text-xs text-gray-600">{t('mission.floatingCard.description')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-4" data-aos="fade-left" data-aos-duration="800" data-aos-delay="200">

            {/* Key Values */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-600 mb-4">{t('mission.valuesTitle')}</h3>
              <div className="space-y-4">
                {[
                  {
                    icon: <BoltIcon className="w-5 h-5" />,
                    title: t('mission.values.0.title'),
                    description: t('mission.values.0.description')
                  },
                  {
                    icon: <CheckCircleIcon className="w-5 h-5" />,
                    title: t('mission.values.1.title'),
                    description: t('mission.values.1.description')
                  },
                  {
                    icon: <UsersIcon className="w-5 h-5" />,
                    title: t('mission.values.2.title'),
                    description: t('mission.values.2.description')
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

