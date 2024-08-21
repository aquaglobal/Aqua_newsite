import React from 'react'
import Services from '@/components/services/Services'
import ItSolutions from '@/components/services/ItSolutions'
import DigitalMarketing from '@/components/services/DigitalMarketing'
import BusinessConsultation from '@/components/services/BusinessConsultation'
import BannerService from '@/components/services/BannerService'
import WhyUs from '@/components/services/WhyUs'
import BgLeftCircle from '@/components/UI/BgLeftCircle'
import BgRightCircle from '@/components/UI/BgRightCircle'
import ScrollBy from '@/components/UI/ScrollBy'
const page=() => {
    return (
        <ScrollBy>
            <main className='flex flex-col  gap-y-[4rem]'>
                <section className="flex justify-center  w-full">
                    <BgLeftCircle />
                    <Services />
                </section>
                <section id='itsolutions' className='flex justify-center w-full px-5'>
                    <ItSolutions />
                    <BgRightCircle position={"mt-[-20rem]"} />
                </section>
                <section id='digitalmarketing' className='flex justify-center px-5'>
                    <BgLeftCircle position={"mt-[-20rem]"} />
                    <DigitalMarketing />
                    <BgRightCircle position={"mt-[10rem]"} />
                </section>
                <section className='flex justify-center px-5'>
                    <BgLeftCircle position={"mt-[15rem]"} />
                    <BusinessConsultation />
                </section>
                <section className='flex justify-center  sm:px-10 px-5'>
                    <WhyUs />
                    <BgRightCircle position={"mt-[15rem]"} />
                </section>
                <section className='flex justify-center  sm:px-10 px-5 pb-20'>
                    <BgLeftCircle position={"mt-[5rem]"} />
                    <BannerService />
                </section>
            </main>
        </ScrollBy>
    )
}

export default page