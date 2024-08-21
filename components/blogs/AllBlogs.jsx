'use client'
import React from 'react'
import BlogCard from './BlogCard'
import { useEffect, useState } from 'react';
import { getBlogs } from '@/lib/apis/blogs';
import toast from 'react-hot-toast';
import { Loader } from '@mantine/core';
import Button from '../UI/Buttons/Button';
const AllBlogs=() => {

    const [blogs, setBlogs]=useState([]);
    const [loading, setLoading]=useState(true);
    const [page, setPage]=useState(1);
    const [totalBlogs, setTotalBlogs]=useState()

    const gettingBlogs=async (pageNumber) => {
        try {
            const data=await getBlogs(pageNumber);
            if (pageNumber===1) {
                setBlogs(data.result.blogs);
                setTotalBlogs(data.result.totalBlogs);
            } else {
                setBlogs(prevBlogs => [...prevBlogs, ...data.result.blogs]);
            }
            setLoading(false);
        } catch (error) {
            setLoading(false);
            toast.error("Something Went Wrong");
        }
    }

    const loadMoreBlogs=() => {
        setPage(prevPage => prevPage+1);
    }

    useEffect(() => {
        setLoading(true);
        gettingBlogs(page);
    }, [page]);

    useEffect(() => {
        gettingBlogs(1);
    }, []);


    return (
        <div className='flex flex-col justify-center items-center w-full px-10 pb-10'>
            {loading? (
                <div className='h-[200px] flex items-center justify-center'>
                    <Loader color="#57b46a" size={'xl'} />
                </div>
            ):(
                <>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 py-10  max-w-[1200px] w-full">
                        {blogs.map((blog, index) => (
                            <BlogCard
                                key={index}
                                title={blog?.title}
                                slug={blog?.slug}
                                authorName={blog?.authorName}
                                bannerImage={blog?.banner?.imageUrl}
                                readMinutes={blog?.minutesOfRead}
                                date={blog?.createdAt}
                                size={index%1.25===0? 'large':'small'}
                            />
                        ))}
                    </div>
                    {totalBlogs!==blogs.length&&(
                        <Button onClick={loadMoreBlogs} width={"max-w-[150px] w-full"}>Load More</Button>
                    )}
                </>
            )}
        </div>
    )
}

export default AllBlogs