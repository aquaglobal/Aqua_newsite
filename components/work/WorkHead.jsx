import HeadingLeft from '../UI/HeadingLeft'
import ImageSize from '../motion/ImageSize'
import BgHeading from '../UI/BgHeading'
import Image from 'next/image'
import portfolio from '../../public/portfolio.svg'
const WorkHead=() => {
    return (
        <div className='flex md:flex-row flex-col items-center justify-between max-w-[1340px] w-full z-10 gap-y-6'>
            <HeadingLeft
                content={"We’ve Partnered with These Amazing Clients to Build World-Class Solutions."}
                heading={"Portfolio"}
                heading2={"Our Work"}
            />
            <ImageSize className='max-w-[550px]'>
                <Image src={portfolio} alt='portfolio illustration' />
            </ImageSize>
            <div className='absolute left-0 sm:top-10 top-16'>
                <BgHeading heading={"OUR WORK"} />
            </div>
        </div>
    )
}

export default WorkHead