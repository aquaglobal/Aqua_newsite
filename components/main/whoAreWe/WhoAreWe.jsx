import aboutAqua from '../../../public/heroSection/aboutaqua.svg'
import Image from 'next/image'
import ImageSize from '@/components/motion/ImageSize'
import Heading from '@/components/UI/Heading'
import CustomLink from '@/components/UI/CustomLink'
const WhoAreWe=() => {
    return (
        <div className="flex items-center justify-center md:px-10 px-5 z-20">
            <div className='flex lg:flex-row flex-col items-center justify-between'>
                <ImageSize
                    className={"max-w-[650px]"}
                >
                    <Image src={aboutAqua} className='rounded-3xl' alt='About Aqua' />
                </ImageSize>
                <div className='rounded-lg bg-gradient-to-r from-[#2c2c2d] to-[#1a1a1e] md:p-[50px] p-[25px] w-full relative'>
                    <div className='flex flex-col gap-y-4'>
                        <div className='flex flex-col gap-y-2 max-w-[640px]'>
                            <Heading className={"text-[36px]"}>Our Mission</Heading>
                            <p className='text-[20px] text-white '>To provide quality solutions for our clients across the Globe.</p>
                        </div>
                        <div className='flex flex-col gap-y-2 max-w-[640px]'>
                            <Heading className={"text-[36px]"}>Our Vision</Heading>
                            {/* <p className='text-[20px] text-white '>We are a diverse group of professionals  who provides customized solutions to your business needs. Our objective is to deliver essential solutions to clients worldwide ! We take pride in our diverse and innovative team, guided by professionalism, punctuality, and perfection.</p> */}
                            <p className='text-[20px] text-white '>A trusted global organization where our team members and our clients thrive as one happy family.</p>
                        </div>
                        <div className='mt-3'>
                            <CustomLink
                                href={"/aboutus"}
                            >
                                Know More
                            </CustomLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhoAreWe

