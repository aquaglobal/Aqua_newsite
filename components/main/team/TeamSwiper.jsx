'use client'

import MemberCard from './MemberCard'
import { mainTeam } from '@/lib/data'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FreeMode, Navigation } from 'swiper/modules';
import StaggerElement from '@/components/motion/StaggerElement';
const TeamSwiper=() => {
    return (
        <Swiper
            loop={true}
            navigation={true}
            slidesPerView={4}
            freeMode={true}
            modules={[FreeMode, Navigation]}
            breakpoints={{
                1280: {
                    slidesPerView: 4
                },
                900: {
                    slidesPerView: 3
                },

                640: {
                    slidesPerView: 2
                },
                0: {
                    slidesPerView: 1
                }
            }}
        >
            {mainTeam.map((member, index) => (
                <SwiperSlide
                    key={index}
                    className='!flex !items-center !justify-center'
                >
                    <StaggerElement
                        once={true}
                        index={index}
                    >
                        <MemberCard
                            about={member.about}
                            email={member.email}
                            image={member.image}
                            linkedin={member.linkedin}
                            name={member.name}
                            position={member.position}
                        />
                    </StaggerElement>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default TeamSwiper