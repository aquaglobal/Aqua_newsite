import React from 'react'

const ServiceTag=({ name }) => {
    return (
        <div className='flex items-center justify-center rounded-3xl  w-[214px] h-[46px] bg-white hover:bg-secondary hover:text-primary cursor-pointer'>
            <p className='text-[20px] font-[Raleway] '>{name}</p>
        </div>
    )
}

export default ServiceTag