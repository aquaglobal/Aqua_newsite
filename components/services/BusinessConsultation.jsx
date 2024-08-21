import Image from "next/image"
import consultingIllus from '../../public/services/consultingIllus.svg'
import ImageSize from '../motion/ImageSize'
import Heading from "../UI/Heading"
import GradientSpan from "../UI/GradientSpan"
const BusinessConsultation=() => {
    return (
        <div id='businessconsultation' className="flex items-center justify-center sm:px-16 z-20 max-w-[1480px]">
            <div className='flex lg:flex-row lg:gap-y-0 gap-y-10 flex-col items-center justify-between'>
                <ImageSize className='lg:order-2 order-1'>
                    <Image className="rounded-lg max-w-[60rem] w-full" src={consultingIllus} alt='Business Consultation Illustration' />
                </ImageSize>
                <div className='lg:order-1 order-2 rounded-lg bg-gradient-to-r from-[#2c2c2d] to-[#1a1a1e] md:p-[30px] p-[25px] w-full relative'>
                    <div className='flex flex-col gap-y-10'>
                        <Heading className='text-[36px] '>Business Consultation</Heading>
                        <div>
                            <p className='text-[20px] font-[600]  text-transparent bg-clip-text bg-gradient-to-r from-green-100 via-green-300  to-blue-400'>We offer expert’s advice on growing your business. It helps conceptualize different strategies on making efficient engagement with the clients and resolve issues to drive your business towards the goal.  </p>
                        </div>
                        <div className='flex gap-x-10 ml-5 text-white font-[600] '>
                            <ul className='flex flex-col gap-y-2'>
                                <li><GradientSpan>Strategic Planning</GradientSpan></li>
                                <li><GradientSpan>Market Research and Analysis</GradientSpan> </li>
                                <li><GradientSpan>Marketing and Branding</GradientSpan> </li>
                            </ul>
                            <ul className='flex flex-col gap-y-2'>
                                <li><GradientSpan>Business Process Improvement:</GradientSpan></li>
                                <li><GradientSpan>Technology Consulting</GradientSpan> </li>
                                <li><GradientSpan>Sales and Business Development</GradientSpan></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BusinessConsultation