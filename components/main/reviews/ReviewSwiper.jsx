'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import ReviewCard from './ReviewCard';
import { reviews } from '@/lib/data';
const ReviewSwiper=() => {
    return (
        <div className='flex items-center justify-center'>
            <Swiper
                navigation={true}
                loop={true}
                slidesPerView={4}
                freeMode={true}
                modules={[FreeMode, Navigation, Autoplay]}
                breakpoints={{
                    640: {
                        slidesPerView: 2
                    },
                    0: {
                        slidesPerView: 1
                    }
                }}
            >
                {reviews.map((review, index) => (
                    <SwiperSlide
                        key={index}
                        className='!flex !items-center !justify-center'
                    >
                        <ReviewCard
                            name={review.companyName}
                            review={review.review}
                            key={index}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default ReviewSwiper