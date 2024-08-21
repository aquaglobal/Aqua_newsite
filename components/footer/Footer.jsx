import React from 'react'
import Link from 'next/link'
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer=() => {
    return (
        <div className='flex flex-col bg-gradient-to-r from-[#2c2c2d] to-[#1a1a1e] z-20 relative'>
            <div className='xmd:h-[30rem] sm:h-[40rem] h-[65rem] w-full flex flex-col items-center justify-center px-10'>
                <div className='flex xmd:flex-row xmd:gap-y-0 gap-y-10 flex-col w-full xl:gap-x-32 gap-x-20 justify-center'>
                    <div className='flex sm:flex-row flex-col sm:gap-y-0 gap-y-10 xl:gap-x-32 gap-x-20'>
                        <div className='flex flex-col gap-y-4 xmd:w-full sm:w-1/2'>
                            <h2 className='text-white xl:text-[25px] text-[20px] font-bold '>About Us</h2>
                            <p className='text-offWhite text-[18px] font-[500]  max-w-[340px]'>We are a proud group of diversified and innovative individuals. Our mantra is professionalism, punctuality, and perfection</p>
                        </div>
                        <div className='flex flex-col gap-y-4 xmd:w-full sm:w-1/2'>
                            <h2 className='text-white xl:text-[25px] text-[20px] font-bold '>Our Services</h2>
                            <div className='flex flex-col gap-y-2'>
                                <Link
                                    href={"/services#itsolutions"}
                                >
                                    <p className='text-offWhite hover:text-customGreen text-[18px] font-[500]  max-w-[340px]'>IT Products & Services</p>
                                </Link>
                                <Link
                                    href={"/services#digitalmarketing"}
                                >
                                    <p className='text-offWhite hover:text-customGreen text-[18px] font-[500]  max-w-[340px]'>Digital Marketing</p>
                                </Link>
                                <Link
                                    href={"/services#businessconsultation"}
                                >
                                    <p className='text-offWhite hover:text-customGreen text-[18px] font-[500]  max-w-[340px]'>Business Consultation</p>
                                </Link>
                            </div>

                        </div>
                    </div>
                    <div className='flex  sm:flex-row flex-col sm:gap-y-0 gap-y-10 xl:gap-x-32 gap-x-20'>
                        <div className='flex flex-col gap-y-4 xmd:w-full sm:w-1/2'>
                            <h2 className='text-white xl:text-[25px] text-[20px] font-bold '>Quick Links</h2>
                            <div className='flex flex-col gap-y-2'>
                                <Link
                                    href={"/"}
                                >
                                    <p className='text-offWhite hover:text-customGreen text-[18px] font-[500]   '>Home</p>
                                </Link>
                                <Link
                                    href={"/aboutus"}
                                >
                                    <p className='text-offWhite hover:text-customGreen text-[18px] font-[500]  '>About Us</p>
                                </Link>
                                <Link
                                    href={"/services"}
                                >
                                    <p className='text-offWhite hover:text-customGreen text-[18px] font-[500]  '>Services</p>
                                </Link>
                                <Link
                                    href={"/portfolio"}
                                >
                                    <p className='text-offWhite hover:text-customGreen text-[18px] font-[500]  '>Portfolio</p>
                                </Link>
                                <Link
                                    href={"/blogs"}
                                >
                                    <p className='text-offWhite hover:text-customGreen text-[18px] font-[500]  '>Blog</p>
                                </Link>
                                <Link
                                    href={"/contact"}
                                >
                                    <p className='text-offWhite hover:text-customGreen text-[18px] font-[500]  '>Contact Us</p>
                                </Link>
                            </div>
                        </div>
                        <div className='flex flex-col gap-y-4 xmd:w-full sm:w-1/2'>
                            <h2 className='text-white xl:text-[25px] text-[20px] font-bold '>Have a Questions?</h2>
                            <div className='flex flex-col gap-y-3 mb-10'>
                                <div className='flex gap-x-4 items-center'>
                                    <FaLocationDot className='text-white text-[20px]' />
                                    <p className='text-offWhite  text-[18px] font-[500]'>Silver Spring, MD, USA</p>
                                </div>
                                <div className='flex gap-x-4 items-center'>
                                    <FaPhoneAlt className='text-white text-[20px]' />
                                    <Link href={"tel:301-573-7711"} className='text-offWhite  text-[18px] font-[500]'>+1 (301) 573-7711</Link>
                                </div>
                                <div className='flex gap-x-4 items-center'>
                                    <MdEmail className='text-white text-[23px]' />
                                    <Link href={"mailto:info@aquaglobalsystems.com"} className='text-offWhite hover:text-customGreen  text-[18px] font-[500]  '>info@aquaglobalsystems.com</Link>
                                </div>
                            </div>
                            <div className='flex flex-col items-center gap-y-4'>
                                <h2 className='text-white text-[25px] font-bold '>Connect With Us</h2>
                                <div className='flex gap-x-5'>
                                    {/* <Link target='_blank' href={"https://twitter.com/"}>
                                        <div className='w-10 h-10 bg-[#354c5e] hover:bg-[#1DA1F2] rounded-full flex items-center justify-center'>
                                            <FaTwitter className='text-white w-6 h-6  ' />
                                        </div>
                                    </Link> */}
                                    <Link target='_blank' href={"https://www.facebook.com/people/Aqua-Global-Systems/100092940723985/"}>

                                        <div className='w-10 h-10 bg-[#354c5e] hover:bg-[#1DA1F2] rounded-full flex items-center justify-center'>
                                            <FaFacebookF className='text-white w-6 h-6 ' />
                                        </div>
                                    </Link>
                                    <Link target='_blank' href={"https://www.linkedin.com/company/aqual-global-system/"}>

                                        <div className='w-10 h-10 bg-[#354c5e] hover:bg-[#1DA1F2] rounded-full flex items-center justify-center'>
                                            <FaLinkedinIn className='text-white w-6 h-6 ' />
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='h-10 bg-gradient-to-br from-customGreen to-customBlue flex items-center justify-center'>
                <p className='text-black font-[600] sm:text-[17px] text-[10px]'>Copyright © 2024 All rights reserved</p>
            </div>
        </div>
    )
}

export default Footer