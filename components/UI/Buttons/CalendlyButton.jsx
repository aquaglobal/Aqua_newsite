'use client'
import { PopupModal } from "react-calendly";
import { useState, useEffect } from "react";
import { FaRegCalendarPlus } from "react-icons/fa";
import Buzzer from "../../../public/lottieAnimations/redBuzzer.json"
import Lottie from "lottie-react";
const CalendlyButton=({ className }) => {
    const [open, setOpen]=useState(false)
    const [rootElement, setRootelement]=useState(null);
    useEffect(() => {
        setRootelement(document.getElementById("root"))
    }, [])
    return (
        <div>
            <button
                className={`h-[45px] ${className} relative max-w-[300px] p-4 text-[11px] text-center font-[600] uppercase  rounded-lg  transition ease-in-out duration-700 bg-customGreen hover:bg-[#2c2c2d] border border-customGreen hover:border-white text-white  flex items-center justify-center`}
                onClick={() => setOpen(true)}
            >
                <Lottie className="absolute top-[-20px] right-[-20px] w-[50px]" animationData={Buzzer} loop={true} />
                <p>Book a free consultation</p>
                <FaRegCalendarPlus className="ml-2 !text-[24px]" />
            </button>
            <PopupModal
                url="https://calendly.com/info-vsic/1-on-1-consultation"
                // pageSettings={this.props.pageSettings}
                // utm={this.props.utm}
                // prefill={this.props.prefill}
                onModalClose={() => setOpen(false)}
                open={open}
                rootElement={rootElement}
            />
        </div>
    )
}
export default CalendlyButton;
