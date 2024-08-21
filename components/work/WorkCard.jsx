// 'use client'
// import { useState } from 'react'
import Image from 'next/image'
const WorkCard=({ files, title, smallDescription, techArr, onClick }) => {
    // const [isDescription, setDescription]=useState(false);
    return (
        <div
            onClick={onClick}
            // onMouseLeave={() => setDescription(false)}
            // onMouseEnter={() => setDescription(true)}
            className='max-w-[400px]  w-full h-full rounded-lg relative cursor-pointer '>
            {/* {isDescription&&( */}
            <Image className='object-cover max-h-full max-w-full rounded-lg' src={files.img[0]} alt={title} />
            <div className='space-y-3 py-4'>
                <h2 className='text-2xl font-[600] text-white'>{title}</h2>
                <p className='text-sm  text-white text-opacity-90'>{smallDescription}</p>
                <div className='flex flex-wrap gap-2'>
                    {techArr?.map((tech, index) => (
                        <div key={index} className='p-2 bg-[#696869] text-sm font-[600] rounded-lg text-white flex items-center justify-center'>{tech}</div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default WorkCard