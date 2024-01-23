export default function OurHive() {
  return (
    <section className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className="absolute inset-0 bg-gray-100 pointer-events-none mb-16"
        aria-hidden="true"
      ></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-beeSecondary-normal transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
          {/* Section header */}
          <div className="max-w-6xl mx-auto pb-12 md:pb-16">
            <h1 className="h2 mb-4 text-beePrimary-normal text-center session" id="hive">A nossa Colmeia</h1>
            <div className="md:grid md:grid-cols-12">
              <div className="relative h-[260px] rounded-lg overflow-hidden col-span-5" data-aos="fade-up" data-aos-offset="200">
                <iframe src="https://www.youtube.com/embed/A3JOb_X9_0c?si=6vHMuOCtHEloD06S" title="YouTube video player" allow="autoplay;" allowFullScreen className="absolute top-50 left-50 w-full h-full object-cover"></iframe>
              </div>
              <div className="text-xl text-gray-600 col-span-7 md:ml-6 mt-6 md:mt-0" data-aos="fade-up" data-aos-offset="200">
              <p className="mb-6">
                A Bee Coders promove um ambiente de aprendizado contínuo e
                colaboração, permitindo que os profissionais da área de TI se
                conectem, compartilhem conhecimento e cresçam juntos. 
              </p>
              <p>Através de treinamentos, eventos e recursos exclusivos, buscamos impulsionar
                o desenvolvimento profissional e aprimorar as habilidades dos
                nossos membros.</p>
              </div>
            </div>
          </div>          
        </div>
      </div>
    </section>
  );
}
