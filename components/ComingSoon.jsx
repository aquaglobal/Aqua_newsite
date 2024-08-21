import Image from "next/image"
import comingsoon from '../public/comingsoon.svg'
const ComingSoon=() => {
    return (
        <div className='flex md:flex-row flex-col items-center justify-center max-w-[1340px] w-full z-10 gap-x-20 sm:h-[calc(100vh-400px)]'>
            <div className='max-w-[350px]'>
                <Image src={comingsoon} alt='Contact Illustration' />
            </div>
            <div>
                <h2 className=" sm:text-[4rem] text-[3rem] sm:text-start text-center font-[600] text-transparent bg-clip-text bg-gradient-to-br from-customGreen  to-customBlue">Coming soon</h2>
            </div>
        </div>
    )
}

export default ComingSoon