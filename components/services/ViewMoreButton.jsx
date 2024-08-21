import React from 'react'

const ViewMoreButton=({ name }) => {
    return (
        <div className='mt-10'>
            <button className='md:w-[201px] w-[101px] md:h-[55px] h-[38px] flex items-center justify-center  text-primary bg-secondary rounded-3xl'>{name}</button>
        </div>
    )
}
export default ViewMoreButton