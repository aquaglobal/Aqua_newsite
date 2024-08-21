import Image from 'next/image'
// import aboutus from '../../public/aboutUs/aboutusillus.svg'
import aboutus from '../../public/aboutUs/newaboutus.svg'
import HeadingLeft from '../UI/HeadingLeft'
import BgHeading from '../UI/BgHeading'
import ImageSize from '../motion/ImageSize'
import Heading from '../UI/Heading'
import CalendlyButton from '../UI/Buttons/CalendlyButton'
const AboutUs=() => {
    return (
        <div className='flex xl:flex-row flex-col xl:gap-y-0 gap-y-10 justify-center items-center  sm:px-10 px-5 max-w-[1340px] w-full z-10 gap-x-10'>
            <div className='flex flex-col xl:max-w-[500px] '>
                <HeadingLeft
                    heading={"About Us"}
                    heading2={"Who Are We?"}
                    content={"Keeping people over profit in mind."}
                />
                <ImageSize className='max-w-[600px] w-full'>
                    <Image className='rounded-2xl' src={aboutus} alt='joining hands' />
                </ImageSize>
                {/* <div className='rounded-lg bg-gradient-to-r from-[#2c2c2d] to-[#1a1a1e] p-[25px] w-full'>
                    <div className='flex flex-col gap-y-4'>
                        <div className='flex flex-col gap-y-2 max-w-[640px]'>
                            <Heading className='text-[22px]  '>Streamlining Your Success</Heading>
                            <p className='text-[16px] text-white '>Aqua Global Systems is a team of young, hardworking and versatile professionals, who love to design new applications, create new solutions and offer mind blowing marketing campaigns for organizations from different verticals.  Our experts bridge the gap between opportunity and growth with help of software development knowledge, technical skill, digital marketing prowess and business intelligence.  </p>
                        </div>
                        <div className='mt-3'>
                            <CustomLink
                                href={"/#contact"}>
                                Contact Us
                            </CustomLink>
                        </div>
                    </div>
                </div> */}
            </div>
            {/* <ImageSize className='xl:max-w-[600px] w-full'>
                <Image className='rounded-2xl' src={aboutus} alt='joining hands' />
            </ImageSize> */}
            <div className='rounded-lg bg-gradient-to-r from-[#2c2c2d] to-[#1a1a1e] p-[25px] mb-10'>
                <div className='flex flex-col gap-y-10'>
                    <div className='flex flex-col gap-y-10 max-w-[640px]'>
                        <Heading className='text-[32px]  '>Streamlining Your Success</Heading>
                        <p className='text-[16px] text-white '>Aqua Global Systems is a team of passionate, hardworking, and professional individuals. We love to design & develop new applications, create innovative solutions and provide mind blowing marketing strategies. We bridge the gap between opportunity and growth with the help of expert technical acumen and business intelligence. </p>
                    </div>
                    <div className='mt-3'>
                        <CalendlyButton />
                        {/* <CustomLink
                            href={"/#contact"}>
                            Contact Us
                        </CustomLink> */}
                    </div>
                </div>
            </div>
            <div className='absolute right-0 sm:top-10 top-16'>
                <BgHeading heading={"ABOUT US"} />
            </div>
        </div>

    )
}

export default AboutUs