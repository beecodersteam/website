import {
  FaJs,
  FaPhp,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaBootstrap,
  FaSymfony,
  FaLaravel,
  FaAws,
  FaAndroid,
  FaApple,
  FaGithub,
  FaLinux,
  FaDigitalOcean,
} from "react-icons/fa";
import IconRuby from "../ui/tech/RubyonRails";
import IconBxlFlutter from "../ui/tech/Flutter";

import SectionTitle from "../ui/SectionTitle";
import SectionSubtitle from "../ui/SectionSubtitle";
import { type Locale } from '@/lib/static-translations';

interface StaticTechnologiesProps {
  locale: Locale
  translations: Record<string, any>
}

export default function StaticTechnologies({ translations }: StaticTechnologiesProps) {
  const t = (key: string) => {
    const keys = key.split('.');
    let value = translations.sections;
    for (const k of keys) {
      value = value?.[k];
    }
    return value || key;
  };

  return (
    <section className="relative bg-gradient-to-br from-beePrimary-light to-beePrimary-dark py-8">
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mx-auto max-w-6xl px-4 sm:px-6">
        <div className="sm:col-span-2" data-aos="slide-right" data-aos-offset="100">
          <SectionTitle
            title={String(t('technologies.title'))}
            id="technologies"
            variant="left"
            color="text-white"
            className="text-white"
          />
          <SectionSubtitle
            text={t('technologies.subtitle')}
            variant="left"
            className="text-white/90"
            animationDelay={100}
          />
        </div>
        <div className="sm:col-span-2 py-6">
          <div
            className="grid grid-cols-4 sm:grid-cols-4 gap-4 justify-items-center items-center"
            data-aos="fade-left"
            data-aos-offset="100"
            data-aos-delay="200"
          >
            <FaJs className="w-11 h-11 text-yellow-400 hover:scale-110 transition-transform" />
            <FaPhp className="w-11 h-11 text-indigo-300 hover:scale-110 transition-transform" />
            <FaReact className="w-11 h-11 text-cyan-400 hover:scale-110 transition-transform" />
            <FaNodeJs className="w-11 h-11 text-green-400 hover:scale-110 transition-transform" />
            <FaDocker className="w-11 h-11 text-blue-400 hover:scale-110 transition-transform" />
            <FaBootstrap className="w-11 h-11 text-purple-400 hover:scale-110 transition-transform" />
            <FaSymfony className="w-11 h-11 text-beePrimary-lightest hover:scale-110 transition-transform" />
            <FaLaravel className="w-11 h-11 text-red-400 hover:scale-110 transition-transform" />
            <FaAws className="w-11 h-11 text-orange-400 hover:scale-110 transition-transform" />
            <FaAndroid className="w-11 h-11 text-green-500 hover:scale-110 transition-transform" />
            <FaApple className="w-11 h-11 text-gray-300 hover:scale-110 transition-transform" />
            <FaGithub className="w-11 h-11 text-white hover:scale-110 transition-transform" />
            <FaLinux className="w-11 h-11 text-yellow-400 hover:scale-110 transition-transform" />
            <FaDigitalOcean className="w-11 h-11 text-blue-500 hover:scale-110 transition-transform" />
            <IconRuby className="w-11 h-11 text-red-600 hover:scale-110 transition-transform" />
            <IconBxlFlutter className="w-11 h-11 text-blue-400 hover:scale-110 transition-transform" />
          </div>
        </div>
      </div>
    </section>
  );
}
