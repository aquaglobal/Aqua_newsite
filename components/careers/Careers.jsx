import HeadingLeft from '../UI/HeadingLeft'
import ImageSize from '../motion/ImageSize'
import BgHeading from '../UI/BgHeading'
import Image from 'next/image'
// import careers from '../../public/careers/careers.svg'
import careers from '../../public/careers/newcareers.svg'
const Careers=() => {
    return (
        <div className='flex md:flex-row flex-col items-center justify-between max-w-[1340px] w-full z-10'>
            <HeadingLeft
                content={"Build and grow with a highly-productive team of talented design & development specialists."}
                heading={"Careers"}
                heading2={"Join Our Team"}
            />
            <ImageSize className='max-w-[550px]'>
                <Image src={careers} alt='Person doing yoga' />
            </ImageSize>
            <div className='absolute left-0 sm:top-10 top-16'>
                <BgHeading heading={"CAREERS"} />
            </div>
        </div>
    )
}

export default Careers