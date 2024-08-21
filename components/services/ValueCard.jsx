'use client'
import Image from 'next/image'
import { FaHandHoldingHeart } from "react-icons/fa";
import { useState } from 'react';
const ValueCard=({ icon, title, description, color }) => {
    const [isHovered, setHovered]=useState(false);
    return (
        <div
            style={{
                backgroundColor: isHovered? color:''
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className={`flex flex-col bg-black rounded-xl px-7 py-8 gap-y-6 w-[18rem] h-[24rem] transition duration-500 ease-in-out`}>
            <div
                style={{
                    backgroundColor: color,
                    border: isHovered? "2px solid white":"0px solid black",
                    transition: "border-color 200ms, border-width 200ms"
                }}
                className={`w-[5rem] h-[5rem] rounded-md flex items-center justify-center text-white text-6xl  ease-in`}>
                {icon}
            </div>
            <div>
                <h2 className='text-primary font-[600] text-[21px]'>{title}</h2>
            </div>
            <div>
                <p className='text-primary  text-[17px] '>{description}</p>
            </div>
        </div>
    )
}

export default ValueCard