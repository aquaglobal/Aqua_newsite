import Image from 'next/image'
import itilus from '../../public/services/itillus2.svg'
import ImageSize from '../motion/ImageSize'
import Heading from '../UI/Heading'
import GradientSpan from '../UI/GradientSpan'
const ItSolutions=() => {
    return (
        <div className="flex items-center justify-center sm:px-16 z-20 max-w-[1480px]">
            <div className='flex lg:flex-row lg:gap-y-0 gap-y-10 flex-col items-center justify-between'>
                <div className='lg:order-1 order-2 rounded-lg bg-gradient-to-r from-[#2c2c2d] to-[#1a1a1e] md:p-[30px] p-[25px] w-full relative'>
                    <div className='flex flex-col gap-y-10'>
                        <Heading className='text-[36px]  '>Software Development</Heading>
                        <div>
                            <p className='text-[20px] font-[600]  text-transparent bg-clip-text bg-gradient-to-r from-green-100 via-green-300  to-blue-400'>We build development environments that empower you to create stable, relevant products. Our focus on optimization, responsiveness, and scalability ensures your success.
                            </p>
                        </div>
                        <div className='flex gap-x-10 ml-5 font-bold text-white'>
                            <ul className='flex flex-col gap-y-2'>
                                <li><GradientSpan>FRONT-END DEVELOPMENT</GradientSpan></li>
                                <li><GradientSpan>BACK-END DEVELOPMENT</GradientSpan> </li>
                                <li><GradientSpan>WEB PROGRAMMING</GradientSpan> </li>
                                <li><GradientSpan>WORDPRESS CMS</GradientSpan> </li>
                            </ul>
                            <ul className='flex flex-col gap-y-2'>
                                <li><GradientSpan>ECOMMERCE</GradientSpan></li>
                                <li><GradientSpan>RESPONSIVE DEVELOPMENT</GradientSpan></li>
                                <li><GradientSpan>DOMAIN & HOSTING</GradientSpan></li>
                                <li><GradientSpan>MAINTENANCE & SUPPORT</GradientSpan></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <ImageSize className='lg:order-2 order-1 '>
                    <Image className='rounded-xl max-w-[60rem] w-full' src={itilus} alt='It Illustration' />
                </ImageSize>
            </div>
        </div>
    )
}

export default ItSolutions



