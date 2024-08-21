'use client'
import ServiceCard from './ServiceCard'
import { serviceCards } from '@/lib/data'
import HeadingLeft from '@/components/UI/HeadingLeft'
import Image from 'next/image'
// import services from '../../../public/heroSection/services2.svg'
import services from '../../../public/heroSection/newService.svg'
import Link from 'next/link'
import ImageSize from '@/components/motion/ImageSize'
import StaggerElement from '@/components/motion/StaggerElement'
const Services=() => {
    return (
        <div className='flex flex-col gap-y-6 max-w-[1340px] w-full z-10 '>
            <div className='flex items-center justify-between'>
                <HeadingLeft
                    content={"Unique solutions for startups to mega companies around the Globe."}
                    heading={"Services"}
                    heading2={"We Offer :"}
                />
                <ImageSize
                    className={"z-0 md:block hidden  min-[1328px]:max-w-[600px] max-w-[500px]"}
                >
                    <Image src={services} alt='Service Illustration' />
                </ImageSize>
            </div>
            <div className='flex flex-wrap items-center justify-center gap-x-10'>
                {serviceCards.map((service, index) => (
                    <Link
                        key={index}
                        href={service.link}
                    >
                        <StaggerElement
                            once={true}
                            index={index}
                        >
                            <ServiceCard
                                content={service.content}
                                title={service.name}
                                image={service.bgImage}
                            />
                        </StaggerElement>
                    </Link>
                ))}
            </div>
        </div>

    )
}

export default Services