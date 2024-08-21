import sgg from '../../../public/heroSection/sgg.png'
import Image from 'next/image'
import ImageSize from '@/components/motion/ImageSize'
import DownToUp from '@/components/motion/DownToUp'
import Link from 'next/link'
import Heading from '@/components/UI/Heading'
const Gss=() => {
    return (
        <div className='z-20 sm:px-10 px-5'>
            <Link
                target='_blank'
                href={"https://www.gsscc.org/"}
                className=' rounded-3xl hover:shadow-white hover:shadow-md transition ease-out bg-gradient-to-r from-[#2c2c2d] to-[#1a1a1e] md:p-[25px] p-[15px] relative flex lg:flex-row flex-col lg:gap-y-0 gap-y-10 items-center justify-center gap-x-10'>
                <ImageSize className='max-w-[190px] w-full'>
                    <Image className='rounded-3xl object-cover' src={sgg} alt='Great Silver Spring' />
                </ImageSize>
                <DownToUp once={true} className='flex flex-col gap-y-4'>
                    <div className='flex flex-col gap-y-2 max-w-[640px]'>
                        <Heading className='sm:text-[28px] text-[20px]'>Greater Silver Spring Chamber Of Commerce</Heading>
                        <p className='sm:text-[16px] text-[13px] text-white '>Aqua is a proud member of Greater Silver Spring Chamber of Commerce. The Chamber is home to member businesses ranging in size from sole proprietorships to multinational corporations with thousands of employees, supporting local businesses to grow, which in return helps the community grow.</p>
                    </div>
                </DownToUp>
            </Link>
        </div>
    )
}

export default Gss