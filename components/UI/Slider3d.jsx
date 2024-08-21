'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation } from 'swiper/modules';
import 'swiper/css/navigation';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import './slider.css'
import Image from 'next/image';
import { useRef } from 'react';
import image from '../../public/aboutUs/aboutusillus.svg'
const BlogsSlider=() => {
    // const prevRef=useRef(null);
    // const nextRef=useRef(null);
    return (
        <div className='sm:px-0 px-5'>
            <Swiper
                // onInit={(swiper) => {
                //     swiper.params.navigation.prevEl=prevRef.current;
                //     swiper.params.navigation.nextEl=nextRef.current;
                //     swiper.navigation.init();
                //     swiper.navigation.update();
                // }}
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true,
                }}
                modules={[EffectCoverflow, Navigation]}
            >
                <SwiperSlide>
                    <Image src={image} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={image} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={image} alt="slide_image" />
                </SwiperSlide>
                {/* <div ref={prevRef}>Prev</div>
                <div ref={nextRef}>Next</div> */}
                <div className="slider-controler">
                    <div className="swiper-button-prev slider-arrow">
                        <ion-icon name="arrow-back-outline"></ion-icon>
                    </div>
                    <div className="swiper-button-next slider-arrow">
                        <ion-icon name="arrow-forward-outline"></ion-icon>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </Swiper>
        </div>
    )
}

export default BlogsSlider



//css
// .swiper-slide {
//     display: flex !important;
//     justify-content: center;
// }

