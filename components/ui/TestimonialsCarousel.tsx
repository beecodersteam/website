"use client";
import Image from "next/image";
import Slider, { CustomArrowProps } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const NextArrow = ({currentSlide, slideCount, ...props}: CustomArrowProps) => (
  <div {...props}>
    <FaArrowRight color="black" size={20} />
  </div>
);

const PrevArrow = ({currentSlide, slideCount, ...props}: CustomArrowProps) => (
  <div {...props}>
    <FaArrowLeft color="black" size={20} />
  </div>
);

export default function TestimonielasCarousel() {
  const settings = {
    dots: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 5000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const data = [
    {
      name: `Alexandre Santos`,
      profession: "Diretor",
      company: "Alfasystems",
      img: "/images/testimonials/alexandre.jpg",
      review: `Fiquei extremamente satisfeito com os serviços da Bee Coders. Eles demonstraram um profissionalismo excepcional, entregando um trabalho de alta qualidade dentro do prazo estipulado. A equipe foi altamente competente, ágil e colaborativa, tornando todo o processo suave e eficiente. Recomendo fortemente seus serviços a quem procura excelência em programação. Parabéns pelo excelente trabalho!`,
    },
    {
      name: `Luis Amado`,
      profession: "Fundador",
      company: "Nitelive",
      img: "/images/testimonials/luis.jpeg",
      review: `A Bee Coders tem sido uma inspiração desde o início do projeto. Acompanhei de perto a evolução da equipe e posso dizer que o resultado é muito bom. Um projeto com um alto grau de complexidade, os colaboradores da Bee Coders dedicaram-se à causa desde o início com uma atitude evolutiva, grande profissionalismo e desenvolveram o projeto projetando soluções elegantes para cada problema. Não só recomendo a contratação da Bee Coders, como também quero solicitar seus serviços novamente em um futuro próximo para uma nova etapa deste projeto.`,
    },
  ];


  return (
    <div className="max-w-6xl mx-5 md:mx-40" data-aos="zoom-y-out">
      <Slider {...settings}>
        {data.map((item, index) => (
          <div key={index} className="relative text-center pt-20">
            <div className="relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
                <Image
                  className="relative rounded-full"
                  src={item.img}
                  width={150}
                  height={150}
                  alt={`Testimonial ${index + 1}`}
                />
                <svg
                  className="absolute top-0 right-0 -mt-3 -mr-8 w-16 h-16 fill-current text-blue-500"
                  viewBox="0 0 64 64"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M37.89 58.338c-2.648-5.63-3.572-10.045-2.774-13.249.8-3.203 8.711-13.383 23.737-30.538l2.135.532c-6.552 10.033-10.532 17.87-11.939 23.515-.583 2.34.22 6.158 2.41 11.457l-13.57 8.283zm-26.963-6.56c-2.648-5.63-3.572-10.046-2.773-13.25.799-3.203 8.71-13.382 23.736-30.538l2.136.533c-6.552 10.032-10.532 17.87-11.94 23.515-.583 2.339.22 6.158 2.41 11.456l-13.57 8.283z" />
                </svg>
              </div>
            </div>

            <blockquote className="text-md font-medium mt-40">
              “{item.review}“
            </blockquote>
            <cite className="block font-bold text-lg not-italic mb-2">
              {item.name}
            </cite>
            <div className="text-gray-600">
              <span>{item.profession}</span>{" "}
              <a className="text-blue-600 hover:underline" href="#0">
                {item.company}
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
