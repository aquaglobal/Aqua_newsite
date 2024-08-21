import HeadingLeft from "@/components/UI/HeadingLeft"
// import Contactillus from '../../../public/contactus/contactillus.svg'
import Contactillus from '../../../public/contactus/newcontact.svg'
import Image from "next/image"
import ContactForm from "./ContactForm"
import ImageSize from "@/components/motion/ImageSize"
import DownToUp from "@/components/motion/DownToUp"
const Contact=() => {
    return (
        <div className='flex flex-col justify-center gap-y-6 max-w-[1340px] w-full z-10 mb-20 '>
            <div className='flex items-center justify-between'>
                <HeadingLeft
                    content={"Whether it's a software requirement, business consultation or a partnership proposal, please feel free to reach out anytime. "}
                    heading={"Contact"}
                    heading2={"Have questions?"}
                />
                <ImageSize className='z-0 md:block hidden  min-[1328px]:max-w-[600px] max-w-[500px] right-0'>
                    <Image className="rounded-3xl" src={Contactillus} alt='Contact  Illustration' />
                </ImageSize>
            </div>
            <div className=" flex items-center justify-center">
                <DownToUp once={true} className="w-[900px] bg-gradient-to-r from-[#2c2c2d] to-[#1a1a1e] p-10 rounded-2xl">
                    <ContactForm />
                </DownToUp>
            </div>
        </div>
    )
}

export default Contact