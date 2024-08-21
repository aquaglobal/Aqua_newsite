import React from 'react'

const BgLeftCircle=({ position }) => {
    return (
        <div className={`z-0 h-[700px] min-[362px]:w-[350px] w-full  bg-gradient-to-b from-customGreen via-customBlue to-customBlue rounded-r-full absolute left-0 ${position} z-0 opacity-30`}></div>
    )
}

export default BgLeftCircle