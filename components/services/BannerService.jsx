import Link from "next/link"
import Heading from "../UI/Heading"
import CustomLink from "../UI/CustomLink"
import CalendlyButton from "../UI/Buttons/CalendlyButton"
const BannerService=() => {
    return (
        <div className=' rounded-3xl hover:shadow-white hover:shadow-md transition ease-out bg-gradient-to-r from-[#2c2c2d] to-[#1a1a1e] md:p-[50px] p-[25px] relative flex lg:flex-row flex-col lg:gap-y-0 gap-y-10 items-center justify-center gap-x-10 max-w-[1200px] w-full'>
            <div className='flex flex-col items-center justify-center gap-y-4'>
                <div className='flex flex-col gap-y-8 max-w-[640px]'>
                    <Heading maxWidth={"text-center"} className='sm:text-[36px] text-[20px]'>Ready to start your project?</Heading>
                    <p className='sm:text-[20px] text-[16px] text-white text-center'>Let us help you unlock your business's potential with our custom digital solutions. Schedule a free consultation below to get started!</p>
                    <div className="w-full flex  justify-center">
                        {/* <CustomLink
                            href={'/contact'}
                            className="h-[50px] text-[16px] font-[600] rounded-lg w-[300px] transition ease-in-out  bg-white hover:bg-customGreen hover:text-white transi flex items-center justify-center">Book a free discovery call
                        </CustomLink> */}
                        <CalendlyButton />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BannerService