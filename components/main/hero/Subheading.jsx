'use client'
import aqua from "../../../public/aquaEarth.svg"
import Image from "next/image";
import LogoDownToUp from "@/components/motion/LogoDownToUp";
import { useState } from "react";
const Subheading=() => {
    const [isHovered, setIsHovered]=useState(false);

    return (
        <div className="flex flex-col">
            {isHovered&&(
                <LogoDownToUp>
                    <div className="ml-auto mr-20 mt-[-5rem] md:block hidden">
                        <Image
                            src={aqua}
                            alt="Aqua Global systems logo"
                            className="max-w-[60px] absolute"
                        />
                    </div>
                </LogoDownToUp>
            )}
            <p className='lg:text-[30px] text-[20px] font-[500] text-center tracking-tight  text-[#acffbc] '>
                We provide customized solutions for startups to mega companies around the <span
                    className="md:underline"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    Globe
                </span>.
            </p>
        </div>
    )
}

export default Subheading