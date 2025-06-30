import {
  FaJs,
  FaPhp,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaBootstrap,
  FaSymfony,
  FaLaravel,
} from "react-icons/fa";
import IconRuby from "./ui/tech/RubyonRails";
import IconBxlFlutter from "./ui/tech/Flutter";
import { useTranslation } from '@/lib/i18n';

export default function Technologies() {
  const { t } = useTranslation('sections');
  return (
    <section className="relative">
      <div className="bg-gradient-to-br from-beePrimary-light to-beePrimary-dark px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="py-12 md:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mx-auto max-w-6xl px-4 sm:px-6">
            <div className="sm:col-span-2" data-aos="slide-right" data-aos-offset="100">
              <p className="h2 mb-4 text-white session" id="technologies">
                {t('technologies.title')}
              </p>
              <p className="text-white h6 font-light">
                {t('technologies.subtitle')}
              </p>
            </div>
            <div className="sm:col-span-2" data-aos="slide-left" data-aos-offset="200">
              <div className="grid grid-cols-4 gap-4 sm:grid-cols-5 rounded-lg justify-items-center">
                <FaJs size={56} color="white" />
                <FaPhp size={56} color="white" />
                <FaReact size={56} color="white" />
                <FaDocker size={56} color="white" />
                <FaNodeJs size={56} color="white" />
                <FaBootstrap size={56} color="white" />
                <FaLaravel size={56} color="white" />
                <FaSymfony size={56} color="white" />
                <IconBxlFlutter />
                <IconRuby />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
