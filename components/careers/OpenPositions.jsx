// 'use client'

import MantineAccordian from "../UI/Accordian/MantineAccordian"
import DownToUp from "../motion/DownToUp"
// import { useEffect, useState } from "react"
// import { getVacancies } from "@/lib/apis/Vacancy"
import { openPositions } from "@/lib/data"

const OpenPositions=() => {
    // const [vacancies, setVacancies]=useState([]);

    // const vacan=async () => {
    //     try {
    //         const data=await getVacancies();
    //         setVacancies(data.result);
    //     } catch (error) {
    //         message.error("Something Went Wrong");
    //     }
    // }


    // useEffect(() => {
    //     vacan();
    // }, [])

    return (

        <div className='h-full flex flex-col gap-y-[1rem] items-center justify-center md:px-10 md:py-20 z-20'>
            <div className='flex flex-col items-center justify-center gap-y-20'>
                <DownToUp className='flex flex-col sm:text-start z-10'>
                    <h2 className='sm:text-[90px] text-[60px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-customGreen  to-customBlue'>
                        Open Positions
                    </h2>
                    <div className='flex gap-x-10 '>
                        <div className='max-w-[460px] w-full ml-7 h-2 bg-gradient-to-r from-customGreen  to-customBlue'></div>
                    </div>
                </DownToUp>
                <div
                    className="w-full"
                >
                    <MantineAccordian
                        data={openPositions}
                        variant="separated"
                        radius="md"
                    />
                </div>
                {/* {vacancies.length>0? (
                    <div
                        className="xl:w-[60rem] md:w-[40rem] w-full"
                    >
                        <MantineAccordian
                            data={vacancies}
                            variant="separated"
                            radius="md"
                        />
                    </div>
                ):(
                    <div className="text-white text-large">No Vacancies</div>
                )} */}
            </div>
        </div>
    )
}

export default OpenPositions