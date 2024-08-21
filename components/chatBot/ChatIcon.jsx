'use client'
import { useState } from "react"
import aqua from "../../public/aquaEarth.svg"
import Image from "next/image"
import { FaEnvelope } from "react-icons/fa";
import Lottie from "lottie-react";
import message from "../../public/lottieAnimations/message.json"

const ChatIcon=() => {
    const [isChatboxOpen, setChatBox]=useState(false);
    return (
        <div
            onClick={() => setChatBox(true)}
            className="w-14 h-14  rounded-full flex items-center justify-center cursor-pointer relative">
            {/* {!isChatboxOpen&&( */}
            {/* <div className="w-4 h-4 bg-red-600 rounded-full z-50 absolute top-0 right-0 flex items-center justify-center text-xs text-white">
                <FaEnvelope />
            </div> */}
            <div className="w-14 h-14 z-50 absolute top-[-25px] right-[-20px] flex items-center justify-center text-xs text-white">
                <Lottie animationData={message} loop={true} />
            </div>
            {/* )} */}
            <Image src={aqua} alt="Aqua Global Systems Logo z-10" />
        </div>
    )
}

export default ChatIcon