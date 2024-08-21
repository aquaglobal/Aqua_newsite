'use client'
import { TiStarburst } from "react-icons/ti"
import Image from "next/image"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { getBlog } from "@/lib/apis/blogs"
import { formatDateToDDMMMYYYYTIME } from "@/lib/helper"
import toast from "react-hot-toast"
import { Loader } from "@mantine/core"
import "./Blogs.css"
const Blog=() => {

    const [loading, setLoading]=useState(true);
    const { blogname }=useParams();
    const [blog, setBlog]=useState();

    const gettingBlog=async (blogname) => {
        try {
            const data=await getBlog(blogname);
            setBlog(data.result[0]);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            toast.error("Something Went Wrong");
        }
    }

    useEffect(() => {
        if (blogname) {
            gettingBlog(blogname)
        }
    }, [])


    return loading? (
        <div className='h-[200px] flex items-center justify-center'>
            <Loader color="#57b46a" size={'xl'} />
        </div>
    ):(
        <div className="max-w-[940px] w-full h-full border-[0.1px] border-gray-500 my-16 p-10">
            <div className='text-white space-y-10'>
                <div className='space-y-3'>
                    <h1 className='text-white text-4xl font-bold'>{blog?.title}</h1>
                    <div className='flex items-center gap-x-4 text-md text-gray-300 font-semibold'>
                        <p>{blog?.authorName}</p>
                        <TiStarburst />
                        <p>{formatDateToDDMMMYYYYTIME(blog?.createdAt)}</p>
                        <TiStarburst />
                        <p>{blog?.minutesOfRead} Min Read</p>
                    </div>
                </div>
                <Image className='w-full object-contain mt-10 max-h-[400px]' src={blog?.banner.imageUrl} height={400} width={400} alt={blog?.title} />
                <div className="blog-container" dangerouslySetInnerHTML={{ __html: blog?.content }}></div>
            </div>
        </div>
    )
}

export default Blog