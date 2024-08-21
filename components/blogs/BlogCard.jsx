'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaShareAltSquare } from "react-icons/fa";
import { formatDateToDDMMMYYYYTIME } from '@/lib/helper';
const BlogCard=({ title, size, bannerImage, readMinutes, date, slug }) => {
    return (
        <Link href={`/blogs/${slug}`} className={`p-2  border rounded-lg ${size==='large'? 'row-span-3':'row-span-4'} text-white cursor-pointer flex flex-col gap-y-7`}>
            <div>
                <Image className='object-cover rounded-lg w-full' src={bannerImage} alt={title} width={300} height={300} />
            </div>
            <div className='p-5 space-y-5'>
                <div className='flex justify-between'>
                    <div className='flex space-x-2 items-center'>
                        <span>{formatDateToDDMMMYYYYTIME(date)}</span>
                        <span></span>
                        <span>{readMinutes} Min</span>
                    </div>
                    <Link href={`https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}/${slug}`}>
                        <FaShareAltSquare className='text-2xl' />
                    </Link>
                </div>
                <h2 className='text-3xl font-bold line-clamp-3'>{title}</h2>
            </div>
        </Link>
    );
};

export default BlogCard;
