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
      <div
        className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -mb-32"
        aria-hidden="true"
      >
        <svg
          width="1760"
          height="518"
          viewBox="0 0 1760 518"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="illustration-02"
            >
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g
            transform="translate(0 -3)"
            fill="url(#illustration-02)"
            fillRule="evenodd"
          >
            <circle cx="1630" cy="128" r="128" />
            <circle cx="178" cy="481" r="40" />
          </g>
        </svg>
      </div>

      <div className="bg-[#6B1C8F] px-4 sm:px-6 mt-12">
        <div className="py-12 md:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mx-auto max-w-6xl px-4 sm:px-6">
            <div className="sm:col-span-2" data-aos="slide-right" data-aos-offset="200">
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
