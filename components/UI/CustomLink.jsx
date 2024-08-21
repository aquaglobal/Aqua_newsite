import React from 'react'
import Link from 'next/link'
const CustomLink=({ children, href }) => {
    return (
        <Link
            className="h-[50px] max-w-[300px] p-4 text-[16px] text-center font-[600] uppercase  rounded-lg  transition ease-in-out duration-700 bg-customGreen hover:bg-[#2c2c2d] border border-customGreen hover:border-white text-white  flex items-center justify-center"
            href={href}
        >
            {children}
        </Link>
    )
}
export default CustomLink