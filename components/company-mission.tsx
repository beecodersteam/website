import Image from "next/image";

export default function CompanyMission() {
  return (
    <section className="relative bg-white">

      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-slate-50 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 ">
        <div className="py-12">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="h2 mb-4 text-beePrimary-normal session" id="mission">Nossa Missão</h2>
          </div>
          <div className="md:grid md:grid-cols-2">
            <div className="relative col-span-1" data-aos="zoom-in" data-aos-offset="200">
              <Image src="/images/pexels-03.jpg" alt="mission image" width={600} height={500} className="rounded-lg overflow-hidden" />
            </div>
            <div className="rounded-lg overflow-auto col-span-1 md:ml-6 mt-6 md:mt-0" data-aos="fade-down" data-aos-offset="100">
              <p className="text-md md:text-xl text-gray-600">Na Bee Coders, nossa missão é impulsionar o sucesso de nossos clientes através de soluções de software inovadoras e personalizadas. Estamos comprometidos em transformar ideias em realidade, fornecendo serviços de desenvolvimento de software de alta qualidade que atendem às necessidades exclusivas de cada cliente.</p>
              <p className="text-md md:text-xl text-gray-600 mt-4">Nosso compromisso é com a excelência, a inovação e a integridade. Trabalhamos com transparência e mantemos padrões éticos elevados em todas as nossas interações. Nosso objetivo é construir relacionamentos de longo prazo, baseados na confiança e na satisfação dos clientes.</p>
            </div>
          </div>

        </div>
      </div>
      <div className="inset-0 md:mt-16 lg:mt-0 bg-beeSecondary-normal pointer-events-none" aria-hidden="true"></div>
    </section>
  )
}

