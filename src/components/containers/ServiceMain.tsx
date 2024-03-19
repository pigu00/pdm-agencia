import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";


const ServiceMain = () => {
  
  return (
    <section className="section service-t">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="service-t__slider-w">
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                slidesPerGroup={1}
                speed={800}
                loop={true}
                centeredSlides={false}
                modules={[Autoplay, Navigation]}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                navigation={{
                  nextEl: ".next-service-t",
                  prevEl: ".prev-service-t",
                }}
                className="service-t__slider"
                breakpoints={{
                  1400: {
                    slidesPerView: 4,
                  },
                  1200: {
                    slidesPerView: 3,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                }}
              >
                <SwiperSlide>
                  <div className="service-t-single-wrapper">
                    <div className="service-t__slider-single">
                      <div className="intro">
                        <span className="sub-title">
                          01
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                        
                        <h4>
                          <Link href="service-single">COMUNICACIÓN ESTRATÉGICA</Link>
                        </h4>
                      </div>

                      <p>Creamos estrategias que fortalecen la reputación de nuestros clientes. Elaboramos la comunicación oral y escrita en función de objetivos específicos y diversos contextos e interlocutores</p>
          
                      <ul>

                        <li>Gestión de Prensa</li>
                        <li>Comunicación de Crisis</li>
                        <li>Comunicación Digital</li>
                        
                      </ul>
                      <div className="cta">
                        <Link href="service-single">
                          <i className="icon-arrow-top-right"></i>
                          <span>service details</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="service-t-single-wrapper">
                    <div className="service-t__slider-single">
                      <div className="intro">
                        <span className="sub-title">
                          02
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                        <h4>
                          <Link href="service-single">ENTRENAMIENTO DE MEDIOS</Link>
                        </h4>
                      </div>
                      <p>
                      Desarrollamos programas de capacitación para potenciar habilidades comunicacionales de los voceros. Gestionamos las relaciones de nuestros clientes con periodistas especializados, líderes de opinión y medios masivos de comunicación (radio, tv, diarios y medios on line), puesto que la relación con los comunicadores es de vital importancia para la concreción de nuestros objetivos
                      </p>
                      <ul>
                        <li>Consolidación del mensaje</li>
                        <li>Vinculación de la marca con los medios</li>
                        <li>Comunicación Digital</li>
                        
                      </ul>
                      <div className="cta">
                        <Link href="service-single">
                          <i className="icon-arrow-top-right"></i>
                          <span>service details</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="service-t-single-wrapper">
                    <div className="service-t__slider-single">
                      <div className="intro">
                        <span className="sub-title">
                          03
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                        <h4>
                          <Link href="service-single">COMUNICACIÓN POLÍTICA</Link>
                        </h4>
                      </div>
                      <p>
                      Diseñamos y ejecutamos acciones para campañas políticas y gobiernos en curso.

                      </p>
                      <ul>
                        <li>Manejo de Issues</li>
                        <li>Relación con los medios</li>
                        <li>Opinión Pública</li>
                        <li>Manejo de agenda</li>
                        <li>Posicionamiento</li>
                        <li>Gestión de imagen</li>
                      </ul>
                      <div className="cta">
                        <Link href="service-single">
                          <i className="icon-arrow-top-right"></i>
                          <span>service details</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="service-t-single-wrapper">
                    <div className="service-t__slider-single">
                      <div className="intro">
                        <span className="sub-title">
                          04
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                        <h4>
                          <Link href="service-single">ESTRATEGIA DIGITAL</Link>
                        </h4>
                      </div>
                      <p>
                      Desarrollamos un plan de acción de intervenciones de social media y presencia online, para que los contenidos virtuales de nuestros clientes se integren en un entorno que maximice su difusión y circulación.

                      </p>
                      <ul>
                        <li>Gestión de redes</li>
                        <li>Generación de contenidos ad-hoc</li>
                        <li>Posicionamiento</li>
                        <li>Concepto y estética de marca</li>
                        <li>Piezas gráficas y diseño multimedial</li>
                        <li>Imagen corporativa</li>
                        <li>Desarrollo web</li>
                      </ul>
                      <div className="cta">
                        <Link href="service-single">
                          <i className="icon-arrow-top-right"></i>
                          <span>service details</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="service-t-single-wrapper">
                    <div className="service-t__slider-single">
                      <div className="intro">
                        <span className="sub-title">
                          05
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                        <h4>
                          <Link href="service-single">INVESTIGACIÓN</Link>
                        </h4>
                      </div>
                      <p>
                      Nos especializamos en estudios sociales y políticos. Llevamos adelante consultoría e investigación destinada a empresas de producción y servicios, y a instituciones públicas y privadas.

                      </p>
                      <ul>
                        <li>Estudios cuali-cuantitativos</li>
                        <li>Big data</li>
                        <li>Social listening</li>
                    
                      </ul>
                      <div className="cta">
                        <Link href="service-single">
                          <i className="icon-arrow-top-right"></i>
                          <span>service details</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="service-t-single-wrapper">
                    <div className="service-t__slider-single">
                      <div className="intro">
                        <span className="sub-title">
                          06
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                        <h4>
                          <Link href="service-single">ENTRENAMIENTO EN ORATORIA</Link>
                        </h4>
                      </div>
                      <p>Generamos un sistema propio para referentes que se proyectan en el campo social y político. Se desarrollan las cualidades que debe poseer el orador, la calidad, resultados del mensaje y la adecuación de éste al auditorio y contexto.
                      </p>
                      
                      <div className="cta">
                        <Link href="service-single">
                          <i className="icon-arrow-top-right"></i>
                          <span>service details</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      <div className="slide-group">
        <button aria-label="previous item" className="slide-btn prev-service-t">
          <i className="fa-light fa-angle-left"></i>
        </button>
        <button aria-label="next item" className="slide-btn next-service-t">
          <i className="fa-light fa-angle-right"></i>
        </button>
      </div>
    </section>
  );
};

export default ServiceMain;
