'use client';
import { GlobeAltIcon, ClockIcon, UsersIcon, SparklesIcon } from "@heroicons/react/24/outline";
import { useTranslation } from "@/lib/i18n";

interface HighlightItem {
  icon: React.ReactNode;
  number: string;
  description: string;
  subtext: string;
}

export default function Highlights() {
  const { t } = useTranslation('sections');
  const highlightItems = t('highlights.items', { returnObjects: true });

  const icons = [
    <GlobeAltIcon className="w-8 h-8" key="globe" />,
    <ClockIcon className="w-8 h-8" key="clock" />,
    <UsersIcon className="w-8 h-8" key="users" />,
    <SparklesIcon className="w-8 h-8" key="sparkles" />
  ];

  const highlights: HighlightItem[] = Array.isArray(highlightItems) ? highlightItems.map((item, index) => ({
    ...item,
    icon: icons[index]
  })) : [];

  return (
    <section className="relative bg-gradient-to-br bg-slate-200 py-8 lg:py-12">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FCC700' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {highlights.map((highlight, index) => (
            <div 
              key={index}
              className="text-center group"
              data-aos="zoom-in" 
              data-aos-delay={100 + (index * 100)}
            >
              {/* Icon Container */}
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-beePrimary-light to-beePrimary-dark rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <div className="text-white">
                  {highlight.icon}
                </div>
              </div>

              {/* Number */}
              <div className="mb-1">
                <span className="text-4xl lg:text-4xl font-bold bg-gradient-to-r from-beePrimary-light to-beePrimary-dark bg-clip-text text-transparent">
                  {highlight.number}
                </span>
              </div>

              {/* Description */}
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {highlight.description}
              </h3>

              {/* Subtext */}
              <p className="text-sm text-gray-600 leading-relaxed">
                {highlight.subtext}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

