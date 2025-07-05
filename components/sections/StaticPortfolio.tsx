import { useState, useRef } from 'react';
import { Transition } from "@headlessui/react";
import Image from 'next/image';
import { useStaticTranslation } from '@/lib/use-static-translation';
import { 
  MusicalNoteIcon, 
  PresentationChartBarIcon, 
  ShieldCheckIcon, 
  RectangleStackIcon, 
  BoltIcon, 
  TruckIcon
} from '@heroicons/react/24/outline';
import { NL, BR, PT } from 'country-flag-icons/react/3x2';
import TeamPic1 from "@/public/images/optimized/portifolio/nitelive.webp";
import TeamPic2 from "@/public/images/optimized/portifolio/alfabets.webp";
import TeamPic3 from "@/public/images/optimized/portifolio/mm.webp";
import TeamPic4 from "@/public/images/optimized/portifolio/ajrent.webp";
import SectionTitle from "../ui/SectionTitle";
import SectionSubtitle from "../ui/SectionSubtitle";
import SectionBadge from "../ui/SectionBadge";
import { ArrowRightCircleIcon } from '@heroicons/react/16/solid';

interface PortfolioProps {
  translations: Record<string, any>;
  locale: string;
}

export default function StaticPortfolio({ translations, locale }: PortfolioProps) {
  const { t } = useStaticTranslation(translations, locale);
  const [activeProject, setActiveProject] = useState<number>(1);
  const projectDisplayRef = useRef<HTMLDivElement>(null);

  const getPortfolioProjects = () => {
    const portfolioData = translations.portfolio?.projects || {};
    
    const getFeatures = (key: string) => {
      const features = portfolioData[key]?.features;
      return Array.isArray(features) ? features : [];
    };

    return [
      {
        id: 1,
        title: "Nitelive",
        category: portfolioData.nitelive?.category || "Entertainment",
        country: "Netherlands",
        countryFlag: <NL className="w-5 h-4" />,
        description: portfolioData.nitelive?.description || "Cross-platform mobile app with real-time location services.",
        image: TeamPic1,
        technologies: ["Flutter", "Java", "Firebase", "Geolocation"],
        features: getFeatures('nitelive'),
        icon: <MusicalNoteIcon className="w-6 h-6" />,
        gradient: "from-beePrimary-normal to-beePrimary-dark"
      },
      {
        id: 4,
        title: "AJ Rent",
        category: portfolioData.ajrent?.category || "Mobility",
        country: "Portugal",
        countryFlag: <PT className="w-5 h-4" />,
        description: portfolioData.ajrent?.description || "Web platform with vehicle catalog and booking management.",
        image: TeamPic4,
        technologies: ["React", "PHP", "REST API", "Payment Gateway"],
        features: getFeatures('ajrent'),
        icon: <TruckIcon className="w-6 h-6" />,
        gradient: "from-beePrimary-dark to-beePrimary-normal"
      },
      {
        id: 2,
        title: "Alfabets",
        category: portfolioData.alfabets?.category || "Sporting Bets",
        country: "Brazil",
        countryFlag: <BR className="w-5 h-4" />,
        description: portfolioData.alfabets?.description || "White label app for betting houses.",
        image: TeamPic2,
        technologies: ["Flutter", "Ruby", "Firebase", "Geolocation"],
        features: getFeatures('alfabets'),
        icon: <PresentationChartBarIcon className="w-6 h-6" />,
        gradient: "from-beePrimary-normal to-beePrimary-dark"
      },
      {
        id: 3,
        title: "Mulher + Segura",
        category: portfolioData.mulhersegura?.category || "Social",
        country: "Brazil",
        countryFlag: <BR className="w-5 h-4" />,
        description: portfolioData.mulhersegura?.description || "Safety platform for women in vulnerable situations.",
        image: TeamPic3,
        technologies: ["Flutter", "PHP", "Firebase", "Mercure", "Geolocation"],
        features: getFeatures('mulhersegura'),
        icon: <ShieldCheckIcon className="w-6 h-6" />,
        gradient: "from-beePrimary-normal to-beePrimary-dark"
      }
    ];
  };

  const portfolioProjects = getPortfolioProjects();
  const currentProject = portfolioProjects.find(p => p.id === activeProject) || portfolioProjects[0];

  const handleProjectClick = (projectId: number) => {
    setActiveProject(projectId);

    // Scroll to project display on mobile/tablet, with a small delay to ensure state is updated
    setTimeout(() => {
      if (projectDisplayRef.current) {
        const yOffset = -100; // Offset to account for fixed header
        const element = projectDisplayRef.current;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({
          top: y,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  return (
    <section className="relative bg-gradient-to-br from-white via-white to-beePrimary-normal/0 py-16 lg:py-24 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8" data-aos="fade-up">
          <SectionBadge
            icon={<RectangleStackIcon className="w-6 h-6" />}
            text={String(t('portfolio.badge'))}
            className="mb-4"
          />
          <SectionTitle
            title={String(t('portfolio.title'))}
            id="portfolio"
            variant="centered"
          />
          <SectionSubtitle
            text={String(t('portfolio.subtitle'))}
            variant="centered"
            animationDelay={300}
          />
        </div>

        {/* Portfolio Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Project Selection */}
          <div className="space-y-4" data-aos="fade-right">
            {portfolioProjects.map((project) => (
              <button
                key={project.id}
                onClick={() => handleProjectClick(project.id)}
                className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 ${
                  activeProject === project.id
                    ? 'bg-white/80 backdrop-blur-sm border-beePrimary-normal shadow-xl'
                    : 'bg-white/60 backdrop-blur-sm border-gray-200 hover:border-beePrimary-light hover:shadow-lg hover:scale-100'
                }`}
              >
                <div className="flex items-start space-x-4">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-r ${project.gradient} flex items-center justify-center text-white shadow-lg`}>
                    {project.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                      <span className="px-2 py-1 bg-beePrimary-light/20 text-beePrimary-dark text-xs rounded-full font-medium">
                        {project.category}
                      </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{project.description}</p>
                  </div>
                  <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeProject === project.id ? 'bg-beePrimary-normal scale-125' : 'bg-gray-300'
                  }`}></div>
                </div>
              </button>
            ))}
          </div>

          {/* Project Display */}
          <div className="relative" data-aos="fade-left" ref={projectDisplayRef}>
            <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
              {/* Project Image - Header do Card */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-beeSecondary-normal/20 to-beeSecondary-dark/20 blur opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <Transition
                  show={true}
                  appear={true}
                  enter="transition-all duration-500"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={currentProject.image}
                      width={600}
                      height={400}
                      alt={currentProject.title}
                      className="w-full h-64 md:h-64 lg:h-96 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center space-x-2">
                        <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${currentProject.gradient} flex items-center justify-center text-white`}>
                          {currentProject.icon}
                        </div>
                        <span className="text-white font-semibold">{currentProject.title}</span>
                      </div>
                    </div>
                  </div>
                </Transition>
              </div>

              {/* Project Details */}
              <div className="p-8 space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">{currentProject.title}</h3>
                    <div className="flex items-center space-x-2 px-3 py-1 bg-gray-50 rounded-full">
                      <div className="flex-shrink-0">{currentProject.countryFlag}</div>
                      <span className="text-sm text-gray-600 font-medium">{currentProject.country}</span>
                    </div>
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">{String(t('common:common.technologies'))}</h4>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {currentProject.technologies.map((tech: string, index: number) => (
                      <span key={index} className="px-3 py-1 bg-gradient-to-r from-beePrimary-light/20 to-beePrimary-normal/20 text-beePrimary-dark text-sm rounded-full font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">{String(t('common:common.mainFeatures'))}</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {Array.isArray(currentProject.features) && currentProject.features.map((feature: string, index: number) => (
                      <div key={index} className="flex items-center space-x-2 p-3 bg-beePrimary-light/10 rounded-xl">
                        <ArrowRightCircleIcon className="w-4 h-4 text-beePrimary-normal flex-shrink-0" />
                        <span className="text-sm font-medium text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating decoration */}
            <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-beePrimary-normal to-beePrimary-dark rounded-full flex items-center justify-center text-white shadow-lg">
              <BoltIcon className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
