import {
  FaJs,
  FaPhp,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaBootstrap,
  FaSymfony,
  FaLaravel,
  FaAmazon,
  FaAws,
  FaAndroid,
  FaApple,
  FaAppStore,
  FaCloud,
  FaCloudflare,
  FaGithub,
  FaUbuntu,
  FaLinux,
  FaDigitalOcean,
} from "react-icons/fa";
import IconRuby from "./ui/tech/RubyonRails";
import IconBxlFlutter from "./ui/tech/Flutter";
import { useTranslation } from '@/lib/i18n';
import SectionTitle from "./ui/SectionTitle";
import SectionSubtitle from "./ui/SectionSubtitle";

export default function Technologies() {
  const { t } = useTranslation('sections');
  return (
    <section className="scroll-mt-52 relative bg-gradient-to-br from-beePrimary-light to-beePrimary-dark py-8">
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mx-auto max-w-6xl px-4 sm:px-6">
        <div className="sm:col-span-2 scroll-mt-52" data-aos="slide-right" data-aos-offset="100">
          <SectionTitle
            title={String(t('technologies.title'))}
            id="technologies"
            variant="left"
            color="text-white"
            className="sm:col-span-4 mb-8"
          />
          <SectionSubtitle
            text={t('technologies.subtitle', { components: [<strong key="b1" />] })}
            variant="left"
            animationDelay={300}
            color="text-white/90"
            className="sm:col-span-4 mb-8"
          />
        </div>
        <div className="sm:col-span-2" data-aos="slide-left" data-aos-offset="200">
          <div className="grid grid-cols-4 gap-4 sm:grid-cols-4 rounded-lg justify-items-center">
            <FaPhp size={56} color="white" />
            <IconRuby />
            <FaJs size={56} color="white" />
            <FaReact size={56} color="white" />
            <FaBootstrap size={56} color="white" />
            <FaNodeJs size={56} color="white" />
            <FaLaravel size={56} color="white" />
            <FaSymfony size={56} color="white" />
            <IconBxlFlutter size={56} color="white" />
            <FaDocker size={56} color="white" />
            <FaDigitalOcean size={56} color="white" />
            <FaAws size={56} color="white" />
            <FaLinux size={56} color="white" />
            <FaGithub size={56} color="white" />
            <FaAndroid size={56} color="white" />
            <FaApple size={56} color="white" />
          </div>
        </div>

      </div>
      {/* </div> */}
    </section>
  );
}
