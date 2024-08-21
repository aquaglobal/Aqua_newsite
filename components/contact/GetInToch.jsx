import { HiBuildingOffice2 } from "react-icons/hi2";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Link from "next/link";
// import Map from "../UI/Map";
import ContactForm from "../main/contactUs/ContactForm";
import Heading from "../UI/Heading";
import Map from "../UI/Map";
import { TbWorldWww } from "react-icons/tb";
import { FaPhoneAlt } from "react-icons/fa";

const GetInToch=() => {
    return (
        <div id='#getintouch' className="rounded-2xl bg-gradient-to-r from-[#2c2c2d] to-[#1a1a1e] z-20 flex lg:flex-row flex-col lg:gap-y-0 gap-y-20 sm:p-10 p-5 justify-between items-center gap-x-20 max-w-[1320px] w-full">
            <div className="flex flex-col gap-y-10 max-w-[1/2] w-full lg:order-1 order-2">
                <Heading className=" sm:text-5xl text-3xl font-[600]">Our Offices</Heading>
                <div>
                    <Heading once={true} className=" sm:text-3xl text-2xl font-[600]">India Office</Heading>
                    <div className="flex flex-col gap-y-1 sm:text-xl text-lg text-white">
                        <div className="flex items-center gap-x-3">
                            <HiBuildingOffice2 className="" />
                            <p>Sector 5, Kolkata, India</p>
                        </div>
                        <Link target="_blank" href={"https://www.mitronglobal.com/"} className="flex items-center gap-x-3">
                            <TbWorldWww />
                            <p>Mitron Global</p>
                        </Link>
                    </div>
                </div>
                <div>
                    <Heading once={true} className=" sm:text-3xl text-2xl font-[600]">USA Office</Heading>
                    <div className="flex flex-col gap-y-1 sm:text-xl text-lg text-white">
                        <div className="flex items-center gap-x-3">
                            <HiBuildingOffice2 className="" />
                            <p>Silver Spring, Maryland, USA</p>
                        </div>
                        <Link href={"tel:301-573-7711"} className="flex items-center gap-x-3">
                            <FaPhoneAlt />
                            <p>+1 (301) 573-7711</p>
                        </Link>
                        <Link href={'mailto:info@aquaglobalsystems.com'} className="flex items-center gap-x-3">
                            <MdEmail />
                            <p>info@aquaglobalsystems.com</p>
                        </Link>
                    </div>
                </div>
                <div className="w-full">
                    <Map />
                </div>
            </div>
            <div className="max-w-[1/2] w-full bg-black sm:p-10 p-3 rounded-xl shadow-xl lg:order-2 order-1">
                <div className="flex flex-col gap-y-10">
                    <Heading className=" sm:text-5xl text-3xl font-[600] sm:text-start text-center">Get In Touch</Heading>
                    <ContactForm />
                </div>
            </div>
        </div>
    )
}

export default GetInToch