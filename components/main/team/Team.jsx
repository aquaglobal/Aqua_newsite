import HeadingLeft from '@/components/UI/HeadingLeft';
import teamIllus from '../../../public/heroSection/teamillus.svg'
import Image from 'next/image';
import TeamSwiper from './TeamSwiper';
import ImageSize from '@/components/motion/ImageSize';
const Team=() => {
    return (
        <div className='flex flex-col gap-y-6 max-w-[1340px] w-full z-10'>
            <div className='flex items-center justify-between'>
                <div className='sm:ml-20'>
                    <HeadingLeft
                        content={"Each member brings unique strengths fostering growth and innovation !"}
                        heading={"Team"}
                        heading2={"Faces Behind Our Journey"}
                    />
                </div>
                <ImageSize className='z-0 md:block hidden  min-[1328px]:max-w-[700px]  max-w-[500px] right-0'>
                    <Image className='rounded-3xl' src={teamIllus} alt='Team Illustration' />
                </ImageSize>
            </div>
            <div className='max-w-[1340px]'>
                <TeamSwiper />
            </div>
        </div>
    )
}

export default Team