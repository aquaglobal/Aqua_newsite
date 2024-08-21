'use client'

import { useState } from "react";
import Image from "next/image";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa6";


const MemberCard=({ name, image, position, linkedin, email, about }) => {
    const [open, setOpen]=useState(false);
    const toggleOpen=() => {
        open? setOpen(false):setOpen(true)
    }
    return (
        <div
            onClick={() => toggleOpen()}
            className={`shadow-xl hover:shadow-white cursor-pointer rounded-3xl w-[17rem] flex justify-center flex-col transition-all duration-500 [transform-style:preserve-3d] ${open? '[transform:rotateY(180deg)]':'[transform:rotatey(0deg)]'} bg-gradient-to-r from-[#2c2c2d] to-[#1a1a1e]`}>
            <div className=" relative overflow-hidden p-2">
                <Image className="rounded-full h-[260px] w-full object-cover object-center" src={image} alt={name} />
            </div>
            <div className="h-[100px] flex flex-col justify-between items-center py-3 ">
                <div className=" text-center">
                    <h2 className="leading-[16px] font-bold text-white text-[16px] ">{name}</h2>
                </div>
                <p className=" text-white text-[11px] font-[400] leading-[22.426px] text-center">{position}</p>
                <div className="flex justify-center items-center space-x-4">
                    <div className='bg-black hover:bg-gradient-to-r from-customGreen to-customBlue h-7 w-7 rounded-full shadow-2xl p-1 flex justify-center items-center'>
                        <a href={linkedin} target="_blank" className='text-white'>
                            <FaLinkedinIn />
                        </a>
                    </div>
                    <div className='bg-black h-7 w-7 hover:bg-gradient-to-r from-customGreen to-customBlue rounded-full shadow-2xl p-1 flex justify-center items-center'>
                        <a className='text-white' href={`mailto:${email}`} target="_blank" >
                            <MdOutlineMailOutline />
                        </a>
                    </div>
                </div>
            </div>
            <div className="absolute inset-0 h-full w-full rounded-3xl bg-gradient-to-r from-[#2c2c2d] to-[#1a1a1e] px-3 py-2 text-center text-white [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="flex min-h-full flex-col items-center justify-center">
                    <p className="text-[15px] leading-[24px] text-transparent font-semibold bg-clip-text bg-gradient-to-b from-customBlue  to-customGreen">{about}</p>
                </div>
            </div>
        </div>
    )
}

export default MemberCard