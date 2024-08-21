import React from 'react'

const BgRightCircle=({ position }) => {
    return (
        <div className={`min-[362px]:w-[350px] w-full ${position} h-[700px]  bg-gradient-to-b from-customGreen via-customBlue to-customBlue rounded-l-full absolute right-0  z-0 opacity-30`}></div>
    )
}

export default BgRightCircle