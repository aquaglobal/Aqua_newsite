import Image from "next/image"
// import digitalIllus from '../../public/services/digitalMarketingIllus.svg'
import digitalIllus from '../../public/services/digitalnew.svg'

import ImageSize from '../motion/ImageSize'
import Heading from "../UI/Heading"
import GradientSpan from "../UI/GradientSpan"
const DigitalMarketing=() => {
    return (
        <div className="flex items-center justify-center sm:px-16 z-20 max-w-[1480px]">
            <div className='flex lg:flex-row lg:gap-y-0 gap-y-10 flex-col items-center justify-between gap-x-10'>
                <ImageSize className='lg:order-1 order-2 max-w-[30rem] w-full'>
                    <Image className="rounded-xl" src={digitalIllus} alt='It Illustration' />
                </ImageSize>
                <div className='lg:order-1 order-2 rounded-lg bg-gradient-to-r from-[#2c2c2d] to-[#1a1a1e] md:p-[30px] p-[25px] w-full relative'>
                    <div className='flex flex-col gap-y-10'>
                        <Heading className='text-[36px]  '>Digital Marketing</Heading>
                        <div>
                            <p className='text-[20px] font-[600]  text-transparent bg-clip-text bg-gradient-to-r from-green-100 via-green-300  to-blue-400'>We build high-performance websites and take care of your SEO, PPC, email and social media marketing campaigns. Our comprehensive marketing strategy helps you establish your brand and mark your name.  </p>
                        </div>
                        <div className='flex gap-x-10 ml-5 text-white font-[600] '>
                            <ul className='flex flex-col gap-y-2'>
                                <li><GradientSpan>Search Engine Optimization (SEO)</GradientSpan></li>
                                <li><GradientSpan>Content Marketing</GradientSpan> </li>
                                <li><GradientSpan>Email Marketing</GradientSpan> </li>
                                <li><GradientSpan>Website Analytics</GradientSpan> </li>
                            </ul>
                            <ul className='flex flex-col gap-y-2'>
                                <li><GradientSpan>Search Engine Marketing (SEM)</GradientSpan></li>
                                <li><GradientSpan>Digital Advertising</GradientSpan></li>
                                <li><GradientSpan>E-commerce Marketing</GradientSpan></li>
                                <li><GradientSpan>Conversion Rate Optimization (CRO)</GradientSpan></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default DigitalMarketing