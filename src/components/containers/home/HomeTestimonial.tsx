import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import serviceone from "public/images/testimonial/servicios1.png";
import servicetwo from "public/images/testimonial/servicios2.png";
import servicethree from "public/images/testimonial/servicios3.png";
import servicefour from "public/images/testimonial/servicios4.png";
import servicefive from "public/images/testimonial/servicios5.png";
import servicesix from "public/images/testimonial/servicios6.png";



const HomeTestimonial = () => {
  const [nextSlideIndex, setNextSlideIndex] = useState<number>(1);

  const handleSlideChange = (swiper: any) => {
    const nextIndex = (swiper.realIndex + 1) % swiper.slides.length;
    setNextSlideIndex(nextIndex);
  };
  return (
    <section className="section testimonial pt-0 position-relative">
      <div className="testimonial__text-slider-w">
        <Swiper
          slidesPerView="auto"
          spaceBetween={40}
          speed={5000}
          loop={true}
          centeredSlides={true}
          modules={[Autoplay]}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            reverseDirection: false,
          }}
          className="testimonial__text-slider"
        >
          <SwiperSlide>
            <div className="testimonial__text-slider-single">
              <h2 className="h1">
                <Link href="client-feedback">
                  servicios
                  <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                </Link>
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial__text-slider-single">
              <h2 className="h1">
                <Link href="client-feedback">
                servicios
                  <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                </Link>
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial__text-slider-single">
              <h2 className="h1">
                <Link href="client-feedback">
                servicios
                  <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                </Link>
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial__text-slider-single">
              <h2 className="h1">
                <Link href="client-feedback">
                servicios
                  <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                </Link>
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial__text-slider-single">
              <h2 className="h1">
                <Link href="client-feedback">
                servicios
                  <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                </Link>
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial__text-slider-single">
              <h2 className="h1">
                <Link href="client-feedback">
                servicios
                  <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                </Link>
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial__text-slider-single">
              <h2 className="h1">
                <Link href="client-feedback">
                servicios
                  <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                </Link>
              </h2>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="container position-relative">
        <div className="row">
          <div className="col-12 col-xxl-10">
            <div className="testimonial-s__slider-w">
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                slidesPerGroup={1}
                speed={800}
                loop={true}
                roundLengths={false}
                centeredSlides={false}
                centeredSlidesBounds={false}
                modules={[Autoplay, Navigation]}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                navigation={{
                  nextEl: ".next-testimonial-three",
                  prevEl: ".prev-testimonial-three",
                }}
                onSlideChange={(swiper) => handleSlideChange(swiper)}
                className="testimonial-s__slider"
              >


                {/* card one */}
                <SwiperSlide>
                  <div className="testimonial-s__slider-single">
                    <div className="row gaper align-items-center">
                      <div className="col-12 col-lg-4 col-xxl-4">
                        <div className="thumb">
                          <Image src={serviceone} alt="Image" />
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="44"
                            height="322"
                            viewBox="0 0 44 322"
                            fill="none"
                            className="d-none d-lg-block"
                          >
                            <path
                              d="M43 -0.000976562V151.999L2 192.999H43V321.999"
                              stroke="#414141"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="col-12 col-lg-7 offset-lg-1 col-xxl-7 offset-xxl-1">
                        <div className="testimonial-s__content">
                          <div className="quote">
                            <i className="fa-solid fa-quote-right"></i>
                          </div>
                          <div>
                            <h2>COMUNICACIÓN ESTRATÉGICA</h2>
                          </div>
                          <div className="content">
                            <h4>
                            Creamos estrategias que fortalecen la reputación de nuestros clientes. Elaboramos la comunicación oral y escrita en función de objetivos específicos y diversos contextos e interlocutores
                            </h4>
                          </div>
                          <div className="content-cta">
                            <h5>Gestión de Prensa | Comunicación de Crisis | Comunicación Digital</h5>
                            {/* <p>Senior engineer</p> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              
                {/* card two */}
                <SwiperSlide>
                  <div className="testimonial-s__slider-single">
                    <div className="row gaper align-items-center">
                      <div className="col-12 col-lg-4 col-xxl-4">
                        <div className="thumb">
                          <Image src={servicetwo} alt="Image" />
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="44"
                            height="322"
                            viewBox="0 0 44 322"
                            fill="none"
                            className="d-none d-lg-block"
                          >
                            <path
                              d="M43 -0.000976562V151.999L2 192.999H43V321.999"
                              stroke="#414141"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="col-12 col-lg-7 offset-lg-1 col-xxl-7 offset-xxl-1">
                        <div className="testimonial-s__content">
                          <div className="quote">
                            <i className="fa-solid fa-quote-right"></i>
                          </div>
                          <div>
                            <h2>ENTRENAMIENTO DE MEDIOS</h2>
                          </div>
                          <div className="content">
                            <h4>
                            Desarrollamos programas de capacitación para potenciar habilidades comunicacionales de los voceros. Gestionamos las relaciones de nuestros clientes con periodistas especializados, líderes de opinión y medios masivos de comunicación (radio, tv, diarios y medios on line), puesto que la relación con los comunicadores es de vital importancia para la concreción de nuestros objetivos

                            </h4>
                          </div>
                          <div className="content-cta">
                            <h5>Consolidación del mensaje | Vinculación de la marca con los medios | Entrenamiento en lenguaje corporal</h5>
                            {/* <p>Senior engineer</p> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              
                {/* card three */}
                <SwiperSlide>
                  <div className="testimonial-s__slider-single">
                    <div className="row gaper align-items-center">
                      <div className="col-12 col-lg-4 col-xxl-4">
                        <div className="thumb">
                          <Image src={servicethree} alt="Image" />
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="44"
                            height="322"
                            viewBox="0 0 44 322"
                            fill="none"
                            className="d-none d-lg-block"
                          >
                            <path
                              d="M43 -0.000976562V151.999L2 192.999H43V321.999"
                              stroke="#414141"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="col-12 col-lg-7 offset-lg-1 col-xxl-7 offset-xxl-1">
                        <div className="testimonial-s__content">
                          <div className="quote">
                            <i className="fa-solid fa-quote-right"></i>
                          </div>
                          <div>
                            <h2>COMUNICACIÓN POLÍTICA</h2>
                          </div>
                          <div className="content">
                            <h4>
                            Diseñamos y ejecutamos acciones para campañas políticas y gobiernos en curso.
                            </h4>
                          </div>
                          <div className="content-cta">
                            <h5>Manejo de Issues | Relación con los medios | Opinión Pública</h5>
                            <p>Manejo de agenda | Posicionamiento | Gestión de imagen</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              
                {/* card four */}
                <SwiperSlide>
                  <div className="testimonial-s__slider-single">
                    <div className="row gaper align-items-center">
                      <div className="col-12 col-lg-4 col-xxl-4">
                        <div className="thumb">
                          <Image src={servicefour} alt="Image" />
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="44"
                            height="322"
                            viewBox="0 0 44 322"
                            fill="none"
                            className="d-none d-lg-block"
                          >
                            <path
                              d="M43 -0.000976562V151.999L2 192.999H43V321.999"
                              stroke="#414141"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="col-12 col-lg-7 offset-lg-1 col-xxl-7 offset-xxl-1">
                        <div className="testimonial-s__content">
                          <div className="quote">
                            <i className="fa-solid fa-quote-right"></i>
                          </div>
                          <div>
                            <h2>ESTRATEGIA DIGITAL</h2>
                          </div>
                          <div className="content">
                            <h4>
                            Desarrollamos un plan de acción de intervenciones de social media y presencia online, para que los contenidos virtuales de nuestros clientes se integren en un entorno que maximice su difusión y circulación.
                            </h4>
                          </div>
                          <div className="content-cta">
                            <h5>Gestión de redes | Generación de contenidos ad-hoc | Posicionamiento | Imagen corporativa</h5>
                            <p>Concepto y estética de marca | Piezas gráficas y diseño multimedial | Desarrollo web</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              
                {/* card five */}
                <SwiperSlide>
                  <div className="testimonial-s__slider-single">
                    <div className="row gaper align-items-center">
                      <div className="col-12 col-lg-4 col-xxl-4">
                        <div className="thumb">
                          <Image src={servicefive} alt="Image" />
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="44"
                            height="322"
                            viewBox="0 0 44 322"
                            fill="none"
                            className="d-none d-lg-block"
                          >
                            <path
                              d="M43 -0.000976562V151.999L2 192.999H43V321.999"
                              stroke="#414141"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="col-12 col-lg-7 offset-lg-1 col-xxl-7 offset-xxl-1">
                        <div className="testimonial-s__content">
                          <div className="quote">
                            <i className="fa-solid fa-quote-right"></i>
                          </div>
                          <div>
                            <h2>INVESTIGACIÓN</h2>
                          </div>
                          <div className="content">
                            <h4>
                            Nos especializamos en estudios sociales y políticos. Llevamos adelante consultoría e investigación destinada a empresas de producción y servicios, y a instituciones públicas y privadas.

                            </h4>
                          </div>
                          <div className="content-cta">
                            <h5>Estudios cuali-cuantitativos | Big data | Social listening</h5>
                            {/* <p>Senior engineer</p> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              
                {/* card six */}
                <SwiperSlide>
                  <div className="testimonial-s__slider-single">
                    <div className="row gaper align-items-center">
                      <div className="col-12 col-lg-4 col-xxl-4">
                        <div className="thumb">
                          <Image src={servicesix} alt="Image" />
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="44"
                            height="322"
                            viewBox="0 0 44 322"
                            fill="none"
                            className="d-none d-lg-block"
                          >
                            <path
                              d="M43 -0.000976562V151.999L2 192.999H43V321.999"
                              stroke="#414141"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="col-12 col-lg-7 offset-lg-1 col-xxl-7 offset-xxl-1">
                        <div className="testimonial-s__content">
                          <div className="quote">
                            <i className="fa-solid fa-quote-right"></i>
                          </div>
                          <div>
                            <h2>ENTRENAMIENTO EN ORATORIA 
</h2>
                          </div>
                          <div className="content">
                            <h4>
                            Generamos un sistema propio para referentes que se proyectan en el campo social y político. Se desarrollan las cualidades que debe poseer el orador, la calidad, resultados del mensaje y la adecuación de éste al auditorio y contexto.
                            </h4>
                          </div>
                          <div className="content-cta">
                            {/* <h5>Gestión de Prensa | Comunicación de Crisis | Comunicación Digital</h5> */}
                            {/* <p>Senior engineer</p> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              
              
              
              
        
                       
                      
              </Swiper>
            </div>
          </div>
        </div>
        <div className="slide-group justify-content-start">
          <button
            aria-label="previous item"
            className="slide-btn prev-testimonial-three"
          >
            <i className="fa-light fa-angle-left"></i>
          </button>
          <button
            aria-label="next item"
            className="slide-btn next-testimonial-three"
          >
            <i className="fa-light fa-angle-right"></i>
          </button>
        </div>
      </div>
      <div className="other-section">
        <Image
          className="other-section-image"
          src={
            nextSlideIndex === 0
              ? serviceone
              : nextSlideIndex === 1
              ? servicetwo
              : servicethree

              



          }
          alt="Next Slide Image"
        />
      </div>
      <div className="lines d-none d-lg-flex">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </section>
  );
};

export default HomeTestimonial;
