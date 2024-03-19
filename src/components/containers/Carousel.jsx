import React from 'react'


import Image from "next/image";
import bgdonut1 from '../../assets/images/carousel/bg-donut-1.png'
import bgdonut2 from '../../assets/images/carousel/bg-donut-2.png'
import servicio1 from '../../assets/images/carousel/comunicion-estrategica-slide1.png'
import comunicionEstrategicaSlide1 from '../../../public/images/carousel/comunicion-estrategica-slide1.png';

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, EffectCoverflow, Autoplay } from 'swiper/modules'




//import 'swiper/swiper-bundle.min.css'
//import 'swiper/swiper.min.css'

//import '../../styles/carousel/Carousel.css'

const slider = [
    {
        id:1,
        title: "COMUNICACIÓN ESTRATÉGICA",
        description: "Creamos estrategias que fortalecen la reputación de nuestros clientes. Elaboramos la comunicación oral y escrita en función de objetivos específicos y diversos contextos e interlocutores",
        url: '../../../public/images/carousel/comunicion-estrategica-slide1.png',
    },
    {
        id:2,
        title: "hola",
        description: "Creamos estrategias que fortalecen la reputación de nuestros clientes. Elaboramos la comunicación oral y escrita en función de objetivos específicos y diversos contextos e interlocutores",
        url: '../../../public/images/carousel/comunicion-estrategica-slide1.png',
    },
    {
        id:3,
        title: "hola",
        description: "Creamos estrategias que fortalecen la reputación de nuestros clientes. Elaboramos la comunicación oral y escrita en función de objetivos específicos y diversos contextos e interlocutores",
        url: '../../../public/images/carousel/comunicion-estrategica-slide1.png',
    },
    {
        id:4,
        title: "hola",
        description: "Creamos estrategias que fortalecen la reputación de nuestros clientes. Elaboramos la comunicación oral y escrita en función de objetivos específicos y diversos contextos e interlocutores",
        url: '../../../public/images/carousel/comunicion-estrategica-slide1.png',
    },
      
    
     
      
]

const Carousel = () => {
  return (
    <div className='carousel-service'>
        <div>
            <div className='carousel-content-service'>
                <span>Hola</span>
                <h1>Servicios</h1>
                
                <hr />
                <p>Our Donut Collection Offers a Mouthwatering Array of Flavors, Toppings, and Shapes for Every Craving and Occasion.</p>
                <a href="#" className='slider-btn-service'>download app</a>
            </div>
        </div>

        <Swiper 
        className='myswiper-service'
        modules={[Pagination, EffectCoverflow, Autoplay]}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 3,
            slideShadows: true
        }}
        loop={true}
        pagination={{clickable: true}}

        autoplay={{
            delay: 5000,
            disableOnInteraction: false
        }}
        breakpoints={{
            640: {
                slidesPerView: 2
            },
            768: {
                slidesPerView: 1
            },
            1024: {
                slidesPerView: 2
            },
            1560: {
                slidesPerView: 3
            },
        }}
        
        >

<Image src={comunicionEstrategicaSlide1} alt="Image" />

            {
                slider.map(data => (
                    <SwiperSlide key={data.id} style={{ backgroundImage: `url(${data.url})` }} className="myswiper-slider-service">
                        <div>
                            <h2>{data.title}</h2>
                            <p>{data.description}</p>
                            <a href={`${data.url}`} target="_blank" className='slider-btn-service'>explore</a>
                        </div>
                    </SwiperSlide>
                ))
            }
           
        </Swiper>

        <img src={bgdonut1} alt="bg image" className='bgdonut1-service' />
        <img src={bgdonut2} alt="bg image" className='bgdonut2-service' />
        
    </div>
  )
}

export default Carousel