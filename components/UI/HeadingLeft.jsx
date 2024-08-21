import FadeInLeftHeading from "../motion/FadeInLeftHeading"
import Heading from "./Heading"
const HeadingLeft=({ heading, heading2, content, underlineWidth="160px" }) => {
    return (
        <FadeInLeftHeading className='flex flex-col sm:text-start z-10'>
            <h2 className='sm:text-[90px] text-[50px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-customGreen via-blue-400 to-customBlue'>
                {heading}
            </h2>
            <div className='flex gap-x-10 '>
                <div style={{ width: underlineWidth }} className=' ml-7 h-2 bg-gradient-to-r from-customGreen  to-customBlue'></div>
                <div className='flex flex-col max-w-[480px] mt-[-20px]'>
                    <Heading className='sm:text-[36px] text-[22px] leading-9'>{heading2}</Heading>
                    <p className='sm:text-[20px] text-[15px] text-white'>{content}</p>
                </div>
            </div>
        </FadeInLeftHeading>
    )
}

export default HeadingLeft