import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import one from "../../assets/images/perfilPianta.png";
import two from "../../assets/images/perfilAgustin.png";
import three from "../../assets/images/perfilHernan.png";
import four from "public/images/teams/four.png";
import five from "public/images/teams/five.png";
import six from "public/images/teams/six.png";
import seven from "public/images/teams/seven.png";

const TeamMembers = () => {
  return (
    <section className="section team-slider-s">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section__header--secondary">
              <div className="row gaper align-items-center">
                <div className="col-12 col-lg-8">
                  <div className="section__header text-center text-lg-start mb-0">
                           <h2 className="title title-anim">
                      El equipo de PDM
                    </h2>
                  </div>
                </div>
                <div className="col-12 col-lg-4">
                  <div className="text-center text-lg-end">
                    <Link
                      href="our-teams"
                      className="btn btn--primary text-capitalize"
                    >
                      ver todo el equipo
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="team-r position-relative">
        <div className="team-s__slider-w">
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
              nextEl: ".next-team-s",
              prevEl: ".prev-team-s",
            }}
            className="team-s__slider"
            breakpoints={{
              768: {
                slidesPerView: 3,
                centeredSlides: true,
              },
              576: {
                slidesPerView: 2,
              },
            }}
          >
            
            <SwiperSlide>
              <div className="team-s__slider-single">
                <div className="team-wrap">
                  <div className="thumb">
                    {/* <Link href="team-single-agustin">
                      <Image src={two} alt="Image" />
                    </Link>  */}
                    <Image src={two} alt="Image" />
                    <div
                      className="thumb__content"
                      style={{ backgroundImage: "url('/images/teams/bg.png')" }}
                    >
                      <div className="info">
                        {/* <p>
                          “Lorem ipsum dolor sit amet consectetur adipiscing
                          elit
                        </p> */}
                      </div>
                      <h4>
                      Agustin Wenger
                        {/* <Link href="team-single-agustin">Agustin Wenger</Link> */}
                      </h4>
                      <p>Director</p>
                      <div className="social-alt">
                        <Link
                          href="https://www.facebook.com/"
                          target="_blank"
                          aria-label="share us on facebook"
                        >
                          <i className="fa-brands fa-facebook-f"></i>
                        </Link>
                        <Link
                          href="https://www.twitter.com/"
                          target="_blank"
                          aria-label="share us on twitter"
                        >
                          <i className="fa-brands fa-twitter"></i>
                        </Link>
                        <Link
                          href="https://www.pinterest.com/"
                          target="_blank"
                          aria-label="share us on pinterest"
                        >
                          <i className="fa-brands fa-linkedin-in"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="content">
                    <div className="intro">
                      <h5>
                      Agustin Wenger
                        {/* <Link href="team-single-agustin">Agustin Wenger</Link> */}
                      </h5>
                      <p>Director</p>
                    </div>
                    <hr />
                    {/* <div className="inner">
                      <p>
                        Aenean sed fringilla purus, sed convallis sem. Morbi
                        fringilla nulla tempus, cursus mauris in, placerat
                        libero. Morbi tincidunt venenatis
                      </p>
                      <div className="skill-wrap">
                        <div className="skill-bar-single">
                          <div className="skill-bar-title">
                            <p>Wireframe</p>
                          </div>
                          <div className="skill-bar-wrapper" data-percent="75%">
                            <div className="skill-bar">
                              <div className="skill-bar-percent">
                                <span className="percent-value"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="skill-bar-single">
                          <div className="skill-bar-title">
                            <p>Visual Design</p>
                          </div>
                          <div className="skill-bar-wrapper" data-percent="90%">
                            <div className="skill-bar">
                              <div className="skill-bar-percent">
                                <span className="percent-value"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p>
                        Morbi non urna fringilla, luctus arcu vel, malesuada
                        est. Vestibulum at lorem feugiat
                      </p>
                    </div> */}
                    <div className="social">
                      <Link
                        href="https://www.facebook.com/"
                        target="_blank"
                        aria-label="share us on facebook"
                      >
                        <i className="fa-brands fa-facebook-f"></i>
                      </Link>
                      <Link
                        href="https://www.twitter.com/"
                        target="_blank"
                        aria-label="share us on twitter"
                      >
                        <i className="fa-brands fa-twitter"></i>
                      </Link>
                      <Link
                        href="https://www.pinterest.com/"
                        target="_blank"
                        aria-label="share us on pinterest"
                      >
                        <i className="fa-brands fa-linkedin-in"></i>
                      </Link>
                      <Link
                        href="https://www.instagram.com/"
                        target="_blank"
                        aria-label="share us on instagram"
                      >
                        <i className="fa-brands fa-instagram"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* tarjeta tres */}

            <SwiperSlide>
              <div className="team-s__slider-single">
                <div className="team-wrap">
                  <div className="thumb">
                    {/* <Link href="team-single-hernan">
                      <Image src={three} alt="Image" />
                    </Link>  */}
                    <Image src={three} alt="Image" />
                    <div
                      className="thumb__content"
                      style={{ backgroundImage: "url('/images/teams/bg.png')" }}
                    >
                      <div className="info">
                        {/* <p>
                          “Lorem ipsum dolor sit amet consectetur adipiscing
                          elit
                        </p> */}
                      </div>
                      <h4>
                      Hernan Canal Vences
                        {/* <Link href="team-single-hernan">Hernan Canal Vences</Link> */}
                      </h4>
                      <p>Ejecutivo de cuentas</p>
                      <div className="social-alt">
                        <Link
                          href="https://www.facebook.com/"
                          target="_blank"
                          aria-label="share us on facebook"
                        >
                          <i className="fa-brands fa-facebook-f"></i>
                        </Link>
                        <Link
                          href="https://www.twitter.com/"
                          target="_blank"
                          aria-label="share us on twitter"
                        >
                          <i className="fa-brands fa-twitter"></i>
                        </Link>
                        <Link
                          href="https://www.pinterest.com/"
                          target="_blank"
                          aria-label="share us on pinterest"
                        >
                          <i className="fa-brands fa-linkedin-in"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="content">
                    <div className="intro">
                      <h5>
                      Hernan Canal Vences
                        {/* <Link href="team-single-hernan">Hernan Canal Vences</Link> */}
                      </h5>
                      <p>Ejecutivo de cuentas</p>
                    </div>
                    <hr />
                    {/* <div className="inner">
                      <p>
                        Aenean sed fringilla purus, sed convallis sem. Morbi
                        fringilla nulla tempus, cursus mauris in, placerat
                        libero. Morbi tincidunt venenatis
                      </p>
                      <div className="skill-wrap">
                        <div className="skill-bar-single">
                          <div className="skill-bar-title">
                            <p>Wireframe</p>
                          </div>
                          <div className="skill-bar-wrapper" data-percent="75%">
                            <div className="skill-bar">
                              <div className="skill-bar-percent">
                                <span className="percent-value"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="skill-bar-single">
                          <div className="skill-bar-title">
                            <p>Visual Design</p>
                          </div>
                          <div className="skill-bar-wrapper" data-percent="90%">
                            <div className="skill-bar">
                              <div className="skill-bar-percent">
                                <span className="percent-value"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p>
                        Morbi non urna fringilla, luctus arcu vel, malesuada
                        est. Vestibulum at lorem feugiat
                      </p>
                    </div> */}
                    <div className="social">
                      <Link
                        href="https://www.facebook.com/"
                        target="_blank"
                        aria-label="share us on facebook"
                      >
                        <i className="fa-brands fa-facebook-f"></i>
                      </Link>
                      <Link
                        href="https://www.twitter.com/"
                        target="_blank"
                        aria-label="share us on twitter"
                      >
                        <i className="fa-brands fa-twitter"></i>
                      </Link>
                      <Link
                        href="https://www.pinterest.com/"
                        target="_blank"
                        aria-label="share us on pinterest"
                      >
                        <i className="fa-brands fa-linkedin-in"></i>
                      </Link>
                      <Link
                        href="https://www.instagram.com/"
                        target="_blank"
                        aria-label="share us on instagram"
                      >
                        <i className="fa-brands fa-instagram"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* tarjeta cuatro */}

            <SwiperSlide>
              <div className="team-s__slider-single">
                <div className="team-wrap">
                  <div className="thumb">
                    {/* <Link href="team-single-javier">
                      <Image src={one} alt="Image" />
                    </Link>  */}
                    <Image src={one} alt="Image" />
                    <div
                      className="thumb__content"
                      style={{ backgroundImage: "url('/images/teams/bg.png')" }}
                    >
                      <div className="info">
                        {/* <p>
                          “Lorem ipsum dolor sit amet consectetur adipiscing
                          elit
                        </p> */}
                      </div>
                      <h4>
                      Javier Pianta
                        {/* <Link href="team-single-javier">Javier Pianta</Link> */}
                      </h4>
                      <p>Fundador, Ceo</p>
                      <div className="social-alt">
                        <Link
                          href="https://www.facebook.com/"
                          target="_blank"
                          aria-label="share us on facebook"
                        >
                          <i className="fa-brands fa-facebook-f"></i>
                        </Link>
                        <Link
                          href="https://www.twitter.com/"
                          target="_blank"
                          aria-label="share us on twitter"
                        >
                          <i className="fa-brands fa-twitter"></i>
                        </Link>
                        <Link
                          href="https://www.pinterest.com/"
                          target="_blank"
                          aria-label="share us on pinterest"
                        >
                          <i className="fa-brands fa-linkedin-in"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="content">
                    <div className="intro">
                      <h5>
                      Javier Pianta
                        {/* <Link href="team-single-javier">Javier Pianta</Link> */}
                      </h5>
                      <p>Fundador, Ceo</p>
                    </div>
                    <hr />
                    {/* <div className="inner">
                      <p>
                        Aenean sed fringilla purus, sed convallis sem. Morbi
                        fringilla nulla tempus, cursus mauris in, placerat
                        libero. Morbi tincidunt venenatis
                      </p>
                      <div className="skill-wrap">
                        <div className="skill-bar-single">
                          <div className="skill-bar-title">
                            <p>Wireframe</p>
                          </div>
                          <div className="skill-bar-wrapper" data-percent="75%">
                            <div className="skill-bar">
                              <div className="skill-bar-percent">
                                <span className="percent-value"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="skill-bar-single">
                          <div className="skill-bar-title">
                            <p>Visual Design</p>
                          </div>
                          <div className="skill-bar-wrapper" data-percent="90%">
                            <div className="skill-bar">
                              <div className="skill-bar-percent">
                                <span className="percent-value"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p>
                        Morbi non urna fringilla, luctus arcu vel, malesuada
                        est. Vestibulum at lorem feugiat
                      </p>
                    </div> */}
                    <div className="social">
                      <Link
                        href="https://www.facebook.com/"
                        target="_blank"
                        aria-label="share us on facebook"
                      >
                        <i className="fa-brands fa-facebook-f"></i>
                      </Link>
                      <Link
                        href="https://www.twitter.com/"
                        target="_blank"
                        aria-label="share us on twitter"
                      >
                        <i className="fa-brands fa-twitter"></i>
                      </Link>
                      <Link
                        href="https://www.pinterest.com/"
                        target="_blank"
                        aria-label="share us on pinterest"
                      >
                        <i className="fa-brands fa-linkedin-in"></i>
                      </Link>
                      <Link
                        href="https://www.instagram.com/"
                        target="_blank"
                        aria-label="share us on instagram"
                      >
                        <i className="fa-brands fa-instagram"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

{/* duplicado  */}


<SwiperSlide>
              <div className="team-s__slider-single">
                <div className="team-wrap">
                  <div className="thumb">
                    {/* <Link href="team-single-agustin">
                      <Image src={two} alt="Image" />
                    </Link>  */}
                    <Image src={two} alt="Image" />
                    <div
                      className="thumb__content"
                      style={{ backgroundImage: "url('/images/teams/bg.png')" }}
                    >
                      <div className="info">
                        {/* <p>
                          “Lorem ipsum dolor sit amet consectetur adipiscing
                          elit
                        </p> */}
                      </div>
                      <h4>
                      Agustin Wenger
                        {/* <Link href="team-single-agustin">Agustin Wenger</Link> */}
                      </h4>
                      <p>Director</p>
                      <div className="social-alt">
                        <Link
                          href="https://www.facebook.com/"
                          target="_blank"
                          aria-label="share us on facebook"
                        >
                          <i className="fa-brands fa-facebook-f"></i>
                        </Link>
                        <Link
                          href="https://www.twitter.com/"
                          target="_blank"
                          aria-label="share us on twitter"
                        >
                          <i className="fa-brands fa-twitter"></i>
                        </Link>
                        <Link
                          href="https://www.pinterest.com/"
                          target="_blank"
                          aria-label="share us on pinterest"
                        >
                          <i className="fa-brands fa-linkedin-in"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="content">
                    <div className="intro">
                      <h5>
                      Agustin Wenger
                        {/* <Link href="team-single-agustin">Agustin Wenger</Link> */}
                      </h5>
                      <p>Director</p>
                    </div>
                    <hr />
                    {/* <div className="inner">
                      <p>
                        Aenean sed fringilla purus, sed convallis sem. Morbi
                        fringilla nulla tempus, cursus mauris in, placerat
                        libero. Morbi tincidunt venenatis
                      </p>
                      <div className="skill-wrap">
                        <div className="skill-bar-single">
                          <div className="skill-bar-title">
                            <p>Wireframe</p>
                          </div>
                          <div className="skill-bar-wrapper" data-percent="75%">
                            <div className="skill-bar">
                              <div className="skill-bar-percent">
                                <span className="percent-value"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="skill-bar-single">
                          <div className="skill-bar-title">
                            <p>Visual Design</p>
                          </div>
                          <div className="skill-bar-wrapper" data-percent="90%">
                            <div className="skill-bar">
                              <div className="skill-bar-percent">
                                <span className="percent-value"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p>
                        Morbi non urna fringilla, luctus arcu vel, malesuada
                        est. Vestibulum at lorem feugiat
                      </p>
                    </div> */}
                    <div className="social">
                      <Link
                        href="https://www.facebook.com/"
                        target="_blank"
                        aria-label="share us on facebook"
                      >
                        <i className="fa-brands fa-facebook-f"></i>
                      </Link>
                      <Link
                        href="https://www.twitter.com/"
                        target="_blank"
                        aria-label="share us on twitter"
                      >
                        <i className="fa-brands fa-twitter"></i>
                      </Link>
                      <Link
                        href="https://www.pinterest.com/"
                        target="_blank"
                        aria-label="share us on pinterest"
                      >
                        <i className="fa-brands fa-linkedin-in"></i>
                      </Link>
                      <Link
                        href="https://www.instagram.com/"
                        target="_blank"
                        aria-label="share us on instagram"
                      >
                        <i className="fa-brands fa-instagram"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* tarjeta tres */}

            <SwiperSlide>
              <div className="team-s__slider-single">
                <div className="team-wrap">
                  <div className="thumb">
                    {/* <Link href="team-single-hernan">
                      <Image src={three} alt="Image" />
                    </Link>  */}
                    <Image src={three} alt="Image" />
                    <div
                      className="thumb__content"
                      style={{ backgroundImage: "url('/images/teams/bg.png')" }}
                    >
                      <div className="info">
                        {/* <p>
                          “Lorem ipsum dolor sit amet consectetur adipiscing
                          elit
                        </p> */}
                      </div>
                      <h4>
                      Hernan Canal Vences
                        {/* <Link href="team-single-hernan">Hernan Canal Vences</Link> */}
                      </h4>
                      <p>Ejecutivo de cuentas</p>
                      <div className="social-alt">
                        <Link
                          href="https://www.facebook.com/"
                          target="_blank"
                          aria-label="share us on facebook"
                        >
                          <i className="fa-brands fa-facebook-f"></i>
                        </Link>
                        <Link
                          href="https://www.twitter.com/"
                          target="_blank"
                          aria-label="share us on twitter"
                        >
                          <i className="fa-brands fa-twitter"></i>
                        </Link>
                        <Link
                          href="https://www.pinterest.com/"
                          target="_blank"
                          aria-label="share us on pinterest"
                        >
                          <i className="fa-brands fa-linkedin-in"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="content">
                    <div className="intro">
                      <h5>
                      Hernan Canal Vences
                        {/* <Link href="team-single-hernan">Hernan Canal Vences</Link> */}
                      </h5>
                      <p>Ejecutivo de cuentas</p>
                    </div>
                    <hr />
                    {/* <div className="inner">
                      <p>
                        Aenean sed fringilla purus, sed convallis sem. Morbi
                        fringilla nulla tempus, cursus mauris in, placerat
                        libero. Morbi tincidunt venenatis
                      </p>
                      <div className="skill-wrap">
                        <div className="skill-bar-single">
                          <div className="skill-bar-title">
                            <p>Wireframe</p>
                          </div>
                          <div className="skill-bar-wrapper" data-percent="75%">
                            <div className="skill-bar">
                              <div className="skill-bar-percent">
                                <span className="percent-value"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="skill-bar-single">
                          <div className="skill-bar-title">
                            <p>Visual Design</p>
                          </div>
                          <div className="skill-bar-wrapper" data-percent="90%">
                            <div className="skill-bar">
                              <div className="skill-bar-percent">
                                <span className="percent-value"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p>
                        Morbi non urna fringilla, luctus arcu vel, malesuada
                        est. Vestibulum at lorem feugiat
                      </p>
                    </div> */}
                    <div className="social">
                      <Link
                        href="https://www.facebook.com/"
                        target="_blank"
                        aria-label="share us on facebook"
                      >
                        <i className="fa-brands fa-facebook-f"></i>
                      </Link>
                      <Link
                        href="https://www.twitter.com/"
                        target="_blank"
                        aria-label="share us on twitter"
                      >
                        <i className="fa-brands fa-twitter"></i>
                      </Link>
                      <Link
                        href="https://www.pinterest.com/"
                        target="_blank"
                        aria-label="share us on pinterest"
                      >
                        <i className="fa-brands fa-linkedin-in"></i>
                      </Link>
                      <Link
                        href="https://www.instagram.com/"
                        target="_blank"
                        aria-label="share us on instagram"
                      >
                        <i className="fa-brands fa-instagram"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* tarjeta cuatro */}

            <SwiperSlide>
              <div className="team-s__slider-single">
                <div className="team-wrap">
                  <div className="thumb">
                    {/* <Link href="team-single-javier">
                      <Image src={one} alt="Image" />
                    </Link>  */}
                    <Image src={one} alt="Image" />
                    <div
                      className="thumb__content"
                      style={{ backgroundImage: "url('/images/teams/bg.png')" }}
                    >
                      <div className="info">
                        {/* <p>
                          “Lorem ipsum dolor sit amet consectetur adipiscing
                          elit
                        </p> */}
                      </div>
                      <h4>
                      Javier Pianta
                        {/* <Link href="team-single-javier">Javier Pianta</Link> */}
                      </h4>
                      <p>Fundador, Ceo</p>
                      <div className="social-alt">
                        <Link
                          href="https://www.facebook.com/"
                          target="_blank"
                          aria-label="share us on facebook"
                        >
                          <i className="fa-brands fa-facebook-f"></i>
                        </Link>
                        <Link
                          href="https://www.twitter.com/"
                          target="_blank"
                          aria-label="share us on twitter"
                        >
                          <i className="fa-brands fa-twitter"></i>
                        </Link>
                        <Link
                          href="https://www.pinterest.com/"
                          target="_blank"
                          aria-label="share us on pinterest"
                        >
                          <i className="fa-brands fa-linkedin-in"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="content">
                    <div className="intro">
                      <h5>
                      Javier Pianta
                        {/* <Link href="team-single-javier">Javier Pianta</Link> */}
                      </h5>
                      <p>Fundador, Ceo</p>
                    </div>
                    <hr />
                    {/* <div className="inner">
                      <p>
                        Aenean sed fringilla purus, sed convallis sem. Morbi
                        fringilla nulla tempus, cursus mauris in, placerat
                        libero. Morbi tincidunt venenatis
                      </p>
                      <div className="skill-wrap">
                        <div className="skill-bar-single">
                          <div className="skill-bar-title">
                            <p>Wireframe</p>
                          </div>
                          <div className="skill-bar-wrapper" data-percent="75%">
                            <div className="skill-bar">
                              <div className="skill-bar-percent">
                                <span className="percent-value"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="skill-bar-single">
                          <div className="skill-bar-title">
                            <p>Visual Design</p>
                          </div>
                          <div className="skill-bar-wrapper" data-percent="90%">
                            <div className="skill-bar">
                              <div className="skill-bar-percent">
                                <span className="percent-value"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p>
                        Morbi non urna fringilla, luctus arcu vel, malesuada
                        est. Vestibulum at lorem feugiat
                      </p>
                    </div> */}
                    <div className="social">
                      <Link
                        href="https://www.facebook.com/"
                        target="_blank"
                        aria-label="share us on facebook"
                      >
                        <i className="fa-brands fa-facebook-f"></i>
                      </Link>
                      <Link
                        href="https://www.twitter.com/"
                        target="_blank"
                        aria-label="share us on twitter"
                      >
                        <i className="fa-brands fa-twitter"></i>
                      </Link>
                      <Link
                        href="https://www.pinterest.com/"
                        target="_blank"
                        aria-label="share us on pinterest"
                      >
                        <i className="fa-brands fa-linkedin-in"></i>
                      </Link>
                      <Link
                        href="https://www.instagram.com/"
                        target="_blank"
                        aria-label="share us on instagram"
                      >
                        <i className="fa-brands fa-instagram"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>



          </Swiper>
        </div>
        <div className="slide-group">
          <button aria-label="previous item" className="slide-btn prev-team-s">
            <i className="fa-light fa-angle-left"></i>
          </button>
          <button aria-label="next item" className="slide-btn next-team-s">
            <i className="fa-light fa-angle-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;
