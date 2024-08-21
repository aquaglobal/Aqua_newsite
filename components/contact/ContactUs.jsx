import Image from 'next/image'
import HeadingLeft from '../UI/HeadingLeft'
// import Contactillus from '../../public/contactus/contactillus.svg'
import Contactillus from '../../public/contactus/newcontact.svg'
import BgHeading from '../UI/BgHeading'
import ImageSize from "@/components/motion/ImageSize"
const ContactUs=() => {
    return (
        <div className='flex md:flex-row flex-col items-center justify-between max-w-[1340px] w-full z-10'>
            <HeadingLeft
                content={"Whether it's a software requirement, business consultation or a partnership proposal, please feel free to reach out anytime. "}
                heading={"Contact"}
                heading2={"Have questions?"}
            />
            <ImageSize className='max-w-[550px]'>
                <Image src={Contactillus} alt='Contact Illustration' />
            </ImageSize>
            <div className='absolute left-0 sm:top-10 top-16'>
                <BgHeading heading={"CONTACT US"} />
            </div>
        </div>
    )
}

export default ContactUs